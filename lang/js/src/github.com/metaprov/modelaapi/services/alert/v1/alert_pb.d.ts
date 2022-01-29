import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListAlertsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAlertsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListAlertsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAlertsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAlertsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListAlertsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlertsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlertsRequest): ListAlertsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAlertsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlertsRequest;
  static deserializeBinaryFromReader(message: ListAlertsRequest, reader: jspb.BinaryReader): ListAlertsRequest;
}

export namespace ListAlertsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListAlertsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.AlertList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.AlertList): ListAlertsResponse;
  hasItems(): boolean;
  clearItems(): ListAlertsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlertsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlertsResponse): ListAlertsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAlertsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlertsResponse;
  static deserializeBinaryFromReader(message: ListAlertsResponse, reader: jspb.BinaryReader): ListAlertsResponse;
}

export namespace ListAlertsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.AlertList.AsObject,
  }
}

export class AlertResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AlertResponse): AlertResponse.AsObject;
  static serializeBinaryToWriter(message: AlertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertResponse;
  static deserializeBinaryFromReader(message: AlertResponse, reader: jspb.BinaryReader): AlertResponse;
}

export namespace AlertResponse {
  export type AsObject = {
  }
}

export class CreateAlertRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert): CreateAlertRequest;
  hasItem(): boolean;
  clearItem(): CreateAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAlertRequest): CreateAlertRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAlertRequest;
  static deserializeBinaryFromReader(message: CreateAlertRequest, reader: jspb.BinaryReader): CreateAlertRequest;
}

export namespace CreateAlertRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject,
  }
}

export class CreateAlertResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAlertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAlertResponse): CreateAlertResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAlertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAlertResponse;
  static deserializeBinaryFromReader(message: CreateAlertResponse, reader: jspb.BinaryReader): CreateAlertResponse;
}

export namespace CreateAlertResponse {
  export type AsObject = {
  }
}

export class UpdateAlertRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert): UpdateAlertRequest;
  hasItem(): boolean;
  clearItem(): UpdateAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAlertRequest): UpdateAlertRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAlertRequest;
  static deserializeBinaryFromReader(message: UpdateAlertRequest, reader: jspb.BinaryReader): UpdateAlertRequest;
}

export namespace UpdateAlertRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject,
  }
}

export class UpdateAlertResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAlertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAlertResponse): UpdateAlertResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAlertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAlertResponse;
  static deserializeBinaryFromReader(message: UpdateAlertResponse, reader: jspb.BinaryReader): UpdateAlertResponse;
}

export namespace UpdateAlertResponse {
  export type AsObject = {
  }
}

export class GetAlertRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAlertRequest;

  getName(): string;
  setName(value: string): GetAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlertRequest): GetAlertRequest.AsObject;
  static serializeBinaryToWriter(message: GetAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlertRequest;
  static deserializeBinaryFromReader(message: GetAlertRequest, reader: jspb.BinaryReader): GetAlertRequest;
}

export namespace GetAlertRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetAlertResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert): GetAlertResponse;
  hasItem(): boolean;
  clearItem(): GetAlertResponse;

  getYaml(): string;
  setYaml(value: string): GetAlertResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlertResponse): GetAlertResponse.AsObject;
  static serializeBinaryToWriter(message: GetAlertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlertResponse;
  static deserializeBinaryFromReader(message: GetAlertResponse, reader: jspb.BinaryReader): GetAlertResponse;
}

export namespace GetAlertResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject,
    yaml: string,
  }
}

export class GetAlertNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAlertNamespacesRequest;

  getName(): string;
  setName(value: string): GetAlertNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlertNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlertNamespacesRequest): GetAlertNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetAlertNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlertNamespacesRequest;
  static deserializeBinaryFromReader(message: GetAlertNamespacesRequest, reader: jspb.BinaryReader): GetAlertNamespacesRequest;
}

export namespace GetAlertNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetAlertNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetAlertNamespacesResponse;
  clearNamespacesList(): GetAlertNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlertNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlertNamespacesResponse): GetAlertNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAlertNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlertNamespacesResponse;
  static deserializeBinaryFromReader(message: GetAlertNamespacesResponse, reader: jspb.BinaryReader): GetAlertNamespacesResponse;
}

export namespace GetAlertNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteAlertRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteAlertRequest;

  getName(): string;
  setName(value: string): DeleteAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAlertRequest): DeleteAlertRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAlertRequest;
  static deserializeBinaryFromReader(message: DeleteAlertRequest, reader: jspb.BinaryReader): DeleteAlertRequest;
}

export namespace DeleteAlertRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteAlertResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAlertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAlertResponse): DeleteAlertResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAlertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAlertResponse;
  static deserializeBinaryFromReader(message: DeleteAlertResponse, reader: jspb.BinaryReader): DeleteAlertResponse;
}

export namespace DeleteAlertResponse {
  export type AsObject = {
  }
}

