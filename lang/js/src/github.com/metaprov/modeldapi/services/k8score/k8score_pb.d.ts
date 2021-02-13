import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../k8s.io/api/core/v1/generated_pb';


export class SecretQuery extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): SecretQuery;

  getName(): string;
  setName(value: string): SecretQuery;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): SecretQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SecretQuery): SecretQuery.AsObject;
  static serializeBinaryToWriter(message: SecretQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretQuery;
  static deserializeBinaryFromReader(message: SecretQuery, reader: jspb.BinaryReader): SecretQuery;
}

export namespace SecretQuery {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class DeploymentQuery extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeploymentQuery;

  getName(): string;
  setName(value: string): DeploymentQuery;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): DeploymentQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentQuery.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentQuery): DeploymentQuery.AsObject;
  static serializeBinaryToWriter(message: DeploymentQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentQuery;
  static deserializeBinaryFromReader(message: DeploymentQuery, reader: jspb.BinaryReader): DeploymentQuery;
}

export namespace DeploymentQuery {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ServiceQuery extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ServiceQuery;

  getName(): string;
  setName(value: string): ServiceQuery;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ServiceQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceQuery): ServiceQuery.AsObject;
  static serializeBinaryToWriter(message: ServiceQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceQuery;
  static deserializeBinaryFromReader(message: ServiceQuery, reader: jspb.BinaryReader): ServiceQuery;
}

export namespace ServiceQuery {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class PodQuery extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PodQuery;

  getName(): string;
  setName(value: string): PodQuery;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): PodQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PodQuery): PodQuery.AsObject;
  static serializeBinaryToWriter(message: PodQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodQuery;
  static deserializeBinaryFromReader(message: PodQuery, reader: jspb.BinaryReader): PodQuery;
}

export namespace PodQuery {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class SecretInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SecretInfo;

  getNamespace(): string;
  setNamespace(value: string): SecretInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SecretInfo): SecretInfo.AsObject;
  static serializeBinaryToWriter(message: SecretInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretInfo;
  static deserializeBinaryFromReader(message: SecretInfo, reader: jspb.BinaryReader): SecretInfo;
}

export namespace SecretInfo {
  export type AsObject = {
    name: string,
    namespace: string,
  }
}

export class ServiceInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ServiceInfo;

  getNamespace(): string;
  setNamespace(value: string): ServiceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceInfo): ServiceInfo.AsObject;
  static serializeBinaryToWriter(message: ServiceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceInfo;
  static deserializeBinaryFromReader(message: ServiceInfo, reader: jspb.BinaryReader): ServiceInfo;
}

export namespace ServiceInfo {
  export type AsObject = {
    name: string,
    namespace: string,
  }
}

export class DeploymentInfo extends jspb.Message {
  getName(): string;
  setName(value: string): DeploymentInfo;

  getNamespace(): string;
  setNamespace(value: string): DeploymentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentInfo): DeploymentInfo.AsObject;
  static serializeBinaryToWriter(message: DeploymentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentInfo;
  static deserializeBinaryFromReader(message: DeploymentInfo, reader: jspb.BinaryReader): DeploymentInfo;
}

export namespace DeploymentInfo {
  export type AsObject = {
    name: string,
    namespace: string,
  }
}

export class PodInfo extends jspb.Message {
  getName(): string;
  setName(value: string): PodInfo;

  getNamespace(): string;
  setNamespace(value: string): PodInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PodInfo): PodInfo.AsObject;
  static serializeBinaryToWriter(message: PodInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodInfo;
  static deserializeBinaryFromReader(message: PodInfo, reader: jspb.BinaryReader): PodInfo;
}

export namespace PodInfo {
  export type AsObject = {
    name: string,
    namespace: string,
  }
}

export class ListSecretResponse extends jspb.Message {
  getItemsList(): Array<SecretInfo>;
  setItemsList(value: Array<SecretInfo>): ListSecretResponse;
  clearItemsList(): ListSecretResponse;
  addItems(value?: SecretInfo, index?: number): SecretInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSecretResponse): ListSecretResponse.AsObject;
  static serializeBinaryToWriter(message: ListSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSecretResponse;
  static deserializeBinaryFromReader(message: ListSecretResponse, reader: jspb.BinaryReader): ListSecretResponse;
}

export namespace ListSecretResponse {
  export type AsObject = {
    itemsList: Array<SecretInfo.AsObject>,
  }
}

export class GetSecretResponse extends jspb.Message {
  getItem(): SecretInfo | undefined;
  setItem(value?: SecretInfo): GetSecretResponse;
  hasItem(): boolean;
  clearItem(): GetSecretResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSecretResponse): GetSecretResponse.AsObject;
  static serializeBinaryToWriter(message: GetSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSecretResponse;
  static deserializeBinaryFromReader(message: GetSecretResponse, reader: jspb.BinaryReader): GetSecretResponse;
}

export namespace GetSecretResponse {
  export type AsObject = {
    item?: SecretInfo.AsObject,
  }
}

export class SecretResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SecretResponse): SecretResponse.AsObject;
  static serializeBinaryToWriter(message: SecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretResponse;
  static deserializeBinaryFromReader(message: SecretResponse, reader: jspb.BinaryReader): SecretResponse;
}

export namespace SecretResponse {
  export type AsObject = {
  }
}

export class ListServiceResponse extends jspb.Message {
  getItemsList(): Array<ServiceInfo>;
  setItemsList(value: Array<ServiceInfo>): ListServiceResponse;
  clearItemsList(): ListServiceResponse;
  addItems(value?: ServiceInfo, index?: number): ServiceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceResponse): ListServiceResponse.AsObject;
  static serializeBinaryToWriter(message: ListServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceResponse;
  static deserializeBinaryFromReader(message: ListServiceResponse, reader: jspb.BinaryReader): ListServiceResponse;
}

export namespace ListServiceResponse {
  export type AsObject = {
    itemsList: Array<ServiceInfo.AsObject>,
  }
}

export class GetServiceResponse extends jspb.Message {
  getItem(): ServiceInfo | undefined;
  setItem(value?: ServiceInfo): GetServiceResponse;
  hasItem(): boolean;
  clearItem(): GetServiceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceResponse): GetServiceResponse.AsObject;
  static serializeBinaryToWriter(message: GetServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceResponse;
  static deserializeBinaryFromReader(message: GetServiceResponse, reader: jspb.BinaryReader): GetServiceResponse;
}

export namespace GetServiceResponse {
  export type AsObject = {
    item?: ServiceInfo.AsObject,
  }
}

export class ServiceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceResponse): ServiceResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceResponse;
  static deserializeBinaryFromReader(message: ServiceResponse, reader: jspb.BinaryReader): ServiceResponse;
}

export namespace ServiceResponse {
  export type AsObject = {
  }
}

export class ListDeploymentResponse extends jspb.Message {
  getItemsList(): Array<DeploymentInfo>;
  setItemsList(value: Array<DeploymentInfo>): ListDeploymentResponse;
  clearItemsList(): ListDeploymentResponse;
  addItems(value?: DeploymentInfo, index?: number): DeploymentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeploymentResponse): ListDeploymentResponse.AsObject;
  static serializeBinaryToWriter(message: ListDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeploymentResponse;
  static deserializeBinaryFromReader(message: ListDeploymentResponse, reader: jspb.BinaryReader): ListDeploymentResponse;
}

export namespace ListDeploymentResponse {
  export type AsObject = {
    itemsList: Array<DeploymentInfo.AsObject>,
  }
}

export class GetDeploymentResponse extends jspb.Message {
  getItem(): DeploymentInfo | undefined;
  setItem(value?: DeploymentInfo): GetDeploymentResponse;
  hasItem(): boolean;
  clearItem(): GetDeploymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentResponse): GetDeploymentResponse.AsObject;
  static serializeBinaryToWriter(message: GetDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentResponse;
  static deserializeBinaryFromReader(message: GetDeploymentResponse, reader: jspb.BinaryReader): GetDeploymentResponse;
}

export namespace GetDeploymentResponse {
  export type AsObject = {
    item?: DeploymentInfo.AsObject,
  }
}

export class DeploymentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentResponse): DeploymentResponse.AsObject;
  static serializeBinaryToWriter(message: DeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentResponse;
  static deserializeBinaryFromReader(message: DeploymentResponse, reader: jspb.BinaryReader): DeploymentResponse;
}

export namespace DeploymentResponse {
  export type AsObject = {
  }
}

export class ListPodResponse extends jspb.Message {
  getItemsList(): Array<PodInfo>;
  setItemsList(value: Array<PodInfo>): ListPodResponse;
  clearItemsList(): ListPodResponse;
  addItems(value?: PodInfo, index?: number): PodInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPodResponse): ListPodResponse.AsObject;
  static serializeBinaryToWriter(message: ListPodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPodResponse;
  static deserializeBinaryFromReader(message: ListPodResponse, reader: jspb.BinaryReader): ListPodResponse;
}

export namespace ListPodResponse {
  export type AsObject = {
    itemsList: Array<PodInfo.AsObject>,
  }
}

export class GetPodResponse extends jspb.Message {
  getItem(): PodInfo | undefined;
  setItem(value?: PodInfo): GetPodResponse;
  hasItem(): boolean;
  clearItem(): GetPodResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPodResponse): GetPodResponse.AsObject;
  static serializeBinaryToWriter(message: GetPodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPodResponse;
  static deserializeBinaryFromReader(message: GetPodResponse, reader: jspb.BinaryReader): GetPodResponse;
}

export namespace GetPodResponse {
  export type AsObject = {
    item?: PodInfo.AsObject,
  }
}

export class PodResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PodResponse): PodResponse.AsObject;
  static serializeBinaryToWriter(message: PodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodResponse;
  static deserializeBinaryFromReader(message: PodResponse, reader: jspb.BinaryReader): PodResponse;
}

export namespace PodResponse {
  export type AsObject = {
  }
}

export class EventQuery extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): EventQuery;

  getName(): string;
  setName(value: string): EventQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventQuery.AsObject;
  static toObject(includeInstance: boolean, msg: EventQuery): EventQuery.AsObject;
  static serializeBinaryToWriter(message: EventQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventQuery;
  static deserializeBinaryFromReader(message: EventQuery, reader: jspb.BinaryReader): EventQuery;
}

export namespace EventQuery {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListEventResponse extends jspb.Message {
  getEvents(): k8s_io_api_core_v1_generated_pb.EventList | undefined;
  setEvents(value?: k8s_io_api_core_v1_generated_pb.EventList): ListEventResponse;
  hasEvents(): boolean;
  clearEvents(): ListEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventResponse): ListEventResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventResponse;
  static deserializeBinaryFromReader(message: ListEventResponse, reader: jspb.BinaryReader): ListEventResponse;
}

export namespace ListEventResponse {
  export type AsObject = {
    events?: k8s_io_api_core_v1_generated_pb.EventList.AsObject,
  }
}

