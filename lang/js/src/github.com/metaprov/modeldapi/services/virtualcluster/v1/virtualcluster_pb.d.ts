import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modeldapi/services/common/v1/common_pb';


export class ListVirtualClustersRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListVirtualClustersRequest;

  getVirtualclusterelsMap(): jspb.Map<string, string>;
  clearVirtualclusterelsMap(): ListVirtualClustersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualClustersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualClustersRequest): ListVirtualClustersRequest.AsObject;
  static serializeBinaryToWriter(message: ListVirtualClustersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualClustersRequest;
  static deserializeBinaryFromReader(message: ListVirtualClustersRequest, reader: jspb.BinaryReader): ListVirtualClustersRequest;
}

export namespace ListVirtualClustersRequest {
  export type AsObject = {
    namespace: string,
    virtualclusterelsMap: Array<[string, string]>,
  }
}

export class ListVirtualClustersResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualClusterList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualClusterList): ListVirtualClustersResponse;
  hasItems(): boolean;
  clearItems(): ListVirtualClustersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualClustersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualClustersResponse): ListVirtualClustersResponse.AsObject;
  static serializeBinaryToWriter(message: ListVirtualClustersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualClustersResponse;
  static deserializeBinaryFromReader(message: ListVirtualClustersResponse, reader: jspb.BinaryReader): ListVirtualClustersResponse;
}

export namespace ListVirtualClustersResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualClusterList.AsObject,
  }
}

export class VirtualClusterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualClusterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualClusterResponse): VirtualClusterResponse.AsObject;
  static serializeBinaryToWriter(message: VirtualClusterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualClusterResponse;
  static deserializeBinaryFromReader(message: VirtualClusterResponse, reader: jspb.BinaryReader): VirtualClusterResponse;
}

export namespace VirtualClusterResponse {
  export type AsObject = {
  }
}

export class CreateVirtualClusterRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateVirtualClusterRequest;

  getName(): string;
  setName(value: string): CreateVirtualClusterRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateVirtualClusterRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualClusterSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualClusterSpec): CreateVirtualClusterRequest;
  hasSpec(): boolean;
  clearSpec(): CreateVirtualClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualClusterRequest): CreateVirtualClusterRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualClusterRequest;
  static deserializeBinaryFromReader(message: CreateVirtualClusterRequest, reader: jspb.BinaryReader): CreateVirtualClusterRequest;
}

export namespace CreateVirtualClusterRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualClusterSpec.AsObject,
  }
}

export class CreateVirtualClusterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualClusterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualClusterResponse): CreateVirtualClusterResponse.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualClusterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualClusterResponse;
  static deserializeBinaryFromReader(message: CreateVirtualClusterResponse, reader: jspb.BinaryReader): CreateVirtualClusterResponse;
}

export namespace CreateVirtualClusterResponse {
  export type AsObject = {
  }
}

export class UpdateVirtualClusterRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateVirtualClusterRequest;

  getName(): string;
  setName(value: string): UpdateVirtualClusterRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateVirtualClusterRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualClusterSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualClusterSpec): UpdateVirtualClusterRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateVirtualClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualClusterRequest): UpdateVirtualClusterRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualClusterRequest;
  static deserializeBinaryFromReader(message: UpdateVirtualClusterRequest, reader: jspb.BinaryReader): UpdateVirtualClusterRequest;
}

export namespace UpdateVirtualClusterRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualClusterSpec.AsObject,
  }
}

export class UpdateVirtualClusterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualClusterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualClusterResponse): UpdateVirtualClusterResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualClusterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualClusterResponse;
  static deserializeBinaryFromReader(message: UpdateVirtualClusterResponse, reader: jspb.BinaryReader): UpdateVirtualClusterResponse;
}

export namespace UpdateVirtualClusterResponse {
  export type AsObject = {
  }
}

export class GetVirtualClusterRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetVirtualClusterRequest;

  getName(): string;
  setName(value: string): GetVirtualClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualClusterRequest): GetVirtualClusterRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualClusterRequest;
  static deserializeBinaryFromReader(message: GetVirtualClusterRequest, reader: jspb.BinaryReader): GetVirtualClusterRequest;
}

export namespace GetVirtualClusterRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetVirtualClusterResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster): GetVirtualClusterResponse;
  hasItem(): boolean;
  clearItem(): GetVirtualClusterResponse;

  getYaml(): string;
  setYaml(value: string): GetVirtualClusterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualClusterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualClusterResponse): GetVirtualClusterResponse.AsObject;
  static serializeBinaryToWriter(message: GetVirtualClusterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualClusterResponse;
  static deserializeBinaryFromReader(message: GetVirtualClusterResponse, reader: jspb.BinaryReader): GetVirtualClusterResponse;
}

export namespace GetVirtualClusterResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.AsObject,
    yaml: string,
  }
}

export class GetVirtualClusterNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetVirtualClusterNamespacesRequest;

  getName(): string;
  setName(value: string): GetVirtualClusterNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualClusterNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualClusterNamespacesRequest): GetVirtualClusterNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualClusterNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualClusterNamespacesRequest;
  static deserializeBinaryFromReader(message: GetVirtualClusterNamespacesRequest, reader: jspb.BinaryReader): GetVirtualClusterNamespacesRequest;
}

export namespace GetVirtualClusterNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetVirtualClusterNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo>): GetVirtualClusterNamespacesResponse;
  clearNamespacesList(): GetVirtualClusterNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualClusterNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualClusterNamespacesResponse): GetVirtualClusterNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetVirtualClusterNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualClusterNamespacesResponse;
  static deserializeBinaryFromReader(message: GetVirtualClusterNamespacesResponse, reader: jspb.BinaryReader): GetVirtualClusterNamespacesResponse;
}

export namespace GetVirtualClusterNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteVirtualClusterRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteVirtualClusterRequest;

  getName(): string;
  setName(value: string): DeleteVirtualClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualClusterRequest): DeleteVirtualClusterRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualClusterRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualClusterRequest, reader: jspb.BinaryReader): DeleteVirtualClusterRequest;
}

export namespace DeleteVirtualClusterRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteVirtualClusterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualClusterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualClusterResponse): DeleteVirtualClusterResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualClusterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualClusterResponse;
  static deserializeBinaryFromReader(message: DeleteVirtualClusterResponse, reader: jspb.BinaryReader): DeleteVirtualClusterResponse;
}

export namespace DeleteVirtualClusterResponse {
  export type AsObject = {
  }
}

