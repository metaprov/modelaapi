import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListVirtualVolumesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListVirtualVolumesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListVirtualVolumesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualVolumesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualVolumesRequest): ListVirtualVolumesRequest.AsObject;
  static serializeBinaryToWriter(message: ListVirtualVolumesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualVolumesRequest;
  static deserializeBinaryFromReader(message: ListVirtualVolumesRequest, reader: jspb.BinaryReader): ListVirtualVolumesRequest;
}

export namespace ListVirtualVolumesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListVirtualVolumesResponse extends jspb.Message {
  getVirtualvolumes(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeList | undefined;
  setVirtualvolumes(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeList): ListVirtualVolumesResponse;
  hasVirtualvolumes(): boolean;
  clearVirtualvolumes(): ListVirtualVolumesResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListVirtualVolumesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualVolumesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualVolumesResponse): ListVirtualVolumesResponse.AsObject;
  static serializeBinaryToWriter(message: ListVirtualVolumesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualVolumesResponse;
  static deserializeBinaryFromReader(message: ListVirtualVolumesResponse, reader: jspb.BinaryReader): ListVirtualVolumesResponse;
}

export namespace ListVirtualVolumesResponse {
  export type AsObject = {
    virtualvolumes?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeList.AsObject,
    nextPageToken: string,
  }
}

export class VirtualVolumeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeResponse): VirtualVolumeResponse.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeResponse;
  static deserializeBinaryFromReader(message: VirtualVolumeResponse, reader: jspb.BinaryReader): VirtualVolumeResponse;
}

export namespace VirtualVolumeResponse {
  export type AsObject = {
  }
}

export class CreateVirtualVolumeRequest extends jspb.Message {
  getVirtualvolume(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume | undefined;
  setVirtualvolume(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume): CreateVirtualVolumeRequest;
  hasVirtualvolume(): boolean;
  clearVirtualvolume(): CreateVirtualVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualVolumeRequest): CreateVirtualVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualVolumeRequest;
  static deserializeBinaryFromReader(message: CreateVirtualVolumeRequest, reader: jspb.BinaryReader): CreateVirtualVolumeRequest;
}

export namespace CreateVirtualVolumeRequest {
  export type AsObject = {
    virtualvolume?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.AsObject,
  }
}

export class CreateVirtualVolumeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualVolumeResponse): CreateVirtualVolumeResponse.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualVolumeResponse;
  static deserializeBinaryFromReader(message: CreateVirtualVolumeResponse, reader: jspb.BinaryReader): CreateVirtualVolumeResponse;
}

export namespace CreateVirtualVolumeResponse {
  export type AsObject = {
  }
}

export class UpdateVirtualVolumeRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume): UpdateVirtualVolumeRequest;
  hasItem(): boolean;
  clearItem(): UpdateVirtualVolumeRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateVirtualVolumeRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateVirtualVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualVolumeRequest): UpdateVirtualVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualVolumeRequest;
  static deserializeBinaryFromReader(message: UpdateVirtualVolumeRequest, reader: jspb.BinaryReader): UpdateVirtualVolumeRequest;
}

export namespace UpdateVirtualVolumeRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateVirtualVolumeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualVolumeResponse): UpdateVirtualVolumeResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualVolumeResponse;
  static deserializeBinaryFromReader(message: UpdateVirtualVolumeResponse, reader: jspb.BinaryReader): UpdateVirtualVolumeResponse;
}

export namespace UpdateVirtualVolumeResponse {
  export type AsObject = {
  }
}

export class GetVirtualVolumeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetVirtualVolumeRequest;

  getName(): string;
  setName(value: string): GetVirtualVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualVolumeRequest): GetVirtualVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualVolumeRequest;
  static deserializeBinaryFromReader(message: GetVirtualVolumeRequest, reader: jspb.BinaryReader): GetVirtualVolumeRequest;
}

export namespace GetVirtualVolumeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetVirtualVolumeResponse extends jspb.Message {
  getVirtualvolume(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume | undefined;
  setVirtualvolume(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume): GetVirtualVolumeResponse;
  hasVirtualvolume(): boolean;
  clearVirtualvolume(): GetVirtualVolumeResponse;

  getYaml(): string;
  setYaml(value: string): GetVirtualVolumeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualVolumeResponse): GetVirtualVolumeResponse.AsObject;
  static serializeBinaryToWriter(message: GetVirtualVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualVolumeResponse;
  static deserializeBinaryFromReader(message: GetVirtualVolumeResponse, reader: jspb.BinaryReader): GetVirtualVolumeResponse;
}

export namespace GetVirtualVolumeResponse {
  export type AsObject = {
    virtualvolume?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.AsObject,
    yaml: string,
  }
}

export class DeleteVirtualVolumeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteVirtualVolumeRequest;

  getName(): string;
  setName(value: string): DeleteVirtualVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualVolumeRequest): DeleteVirtualVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualVolumeRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualVolumeRequest, reader: jspb.BinaryReader): DeleteVirtualVolumeRequest;
}

export namespace DeleteVirtualVolumeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteVirtualVolumeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualVolumeResponse): DeleteVirtualVolumeResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualVolumeResponse;
  static deserializeBinaryFromReader(message: DeleteVirtualVolumeResponse, reader: jspb.BinaryReader): DeleteVirtualVolumeResponse;
}

export namespace DeleteVirtualVolumeResponse {
  export type AsObject = {
  }
}

