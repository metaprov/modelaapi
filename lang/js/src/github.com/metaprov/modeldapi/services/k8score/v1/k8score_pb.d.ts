import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../k8s.io/api/core/v1/generated_pb';


export class GetSecretRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetSecretRequest;

  getName(): string;
  setName(value: string): GetSecretRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): GetSecretRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSecretRequest): GetSecretRequest.AsObject;
  static serializeBinaryToWriter(message: GetSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSecretRequest;
  static deserializeBinaryFromReader(message: GetSecretRequest, reader: jspb.BinaryReader): GetSecretRequest;
}

export namespace GetSecretRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
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

export class ListSecretsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListSecretsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListSecretsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSecretsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSecretsRequest): ListSecretsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSecretsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSecretsRequest;
  static deserializeBinaryFromReader(message: ListSecretsRequest, reader: jspb.BinaryReader): ListSecretsRequest;
}

export namespace ListSecretsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListSecretResponse extends jspb.Message {
  getItemList(): Array<SecretInfo>;
  setItemList(value: Array<SecretInfo>): ListSecretResponse;
  clearItemList(): ListSecretResponse;
  addItem(value?: SecretInfo, index?: number): SecretInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSecretResponse): ListSecretResponse.AsObject;
  static serializeBinaryToWriter(message: ListSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSecretResponse;
  static deserializeBinaryFromReader(message: ListSecretResponse, reader: jspb.BinaryReader): ListSecretResponse;
}

export namespace ListSecretResponse {
  export type AsObject = {
    itemList: Array<SecretInfo.AsObject>,
  }
}

export class GetDeploymentRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDeploymentRequest;

  getName(): string;
  setName(value: string): GetDeploymentRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): GetDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentRequest): GetDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: GetDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentRequest;
  static deserializeBinaryFromReader(message: GetDeploymentRequest, reader: jspb.BinaryReader): GetDeploymentRequest;
}

export namespace GetDeploymentRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
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

export class ListDeploymentsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDeploymentsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListDeploymentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeploymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeploymentsRequest): ListDeploymentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDeploymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeploymentsRequest;
  static deserializeBinaryFromReader(message: ListDeploymentsRequest, reader: jspb.BinaryReader): ListDeploymentsRequest;
}

export namespace ListDeploymentsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListDeploymentsResponse extends jspb.Message {
  getItemList(): Array<DeploymentInfo>;
  setItemList(value: Array<DeploymentInfo>): ListDeploymentsResponse;
  clearItemList(): ListDeploymentsResponse;
  addItem(value?: DeploymentInfo, index?: number): DeploymentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeploymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeploymentsResponse): ListDeploymentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDeploymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeploymentsResponse;
  static deserializeBinaryFromReader(message: ListDeploymentsResponse, reader: jspb.BinaryReader): ListDeploymentsResponse;
}

export namespace ListDeploymentsResponse {
  export type AsObject = {
    itemList: Array<DeploymentInfo.AsObject>,
  }
}

export class GetServiceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetServiceRequest;

  getName(): string;
  setName(value: string): GetServiceRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): GetServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceRequest): GetServiceRequest.AsObject;
  static serializeBinaryToWriter(message: GetServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceRequest;
  static deserializeBinaryFromReader(message: GetServiceRequest, reader: jspb.BinaryReader): GetServiceRequest;
}

export namespace GetServiceRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
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

export class ListServicesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListServicesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListServicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServicesRequest): ListServicesRequest.AsObject;
  static serializeBinaryToWriter(message: ListServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServicesRequest;
  static deserializeBinaryFromReader(message: ListServicesRequest, reader: jspb.BinaryReader): ListServicesRequest;
}

export namespace ListServicesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListServicesResponse extends jspb.Message {
  getItemList(): Array<ServiceInfo>;
  setItemList(value: Array<ServiceInfo>): ListServicesResponse;
  clearItemList(): ListServicesResponse;
  addItem(value?: ServiceInfo, index?: number): ServiceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServicesResponse): ListServicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServicesResponse;
  static deserializeBinaryFromReader(message: ListServicesResponse, reader: jspb.BinaryReader): ListServicesResponse;
}

export namespace ListServicesResponse {
  export type AsObject = {
    itemList: Array<ServiceInfo.AsObject>,
  }
}

export class GetPodRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPodRequest;

  getName(): string;
  setName(value: string): GetPodRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): GetPodRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPodRequest): GetPodRequest.AsObject;
  static serializeBinaryToWriter(message: GetPodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPodRequest;
  static deserializeBinaryFromReader(message: GetPodRequest, reader: jspb.BinaryReader): GetPodRequest;
}

export namespace GetPodRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
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

export class ListPodsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPodsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListPodsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPodsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPodsRequest): ListPodsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPodsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPodsRequest;
  static deserializeBinaryFromReader(message: ListPodsRequest, reader: jspb.BinaryReader): ListPodsRequest;
}

export namespace ListPodsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListPodsResponse extends jspb.Message {
  getItemList(): Array<PodInfo>;
  setItemList(value: Array<PodInfo>): ListPodsResponse;
  clearItemList(): ListPodsResponse;
  addItem(value?: PodInfo, index?: number): PodInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPodsResponse): ListPodsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPodsResponse;
  static deserializeBinaryFromReader(message: ListPodsResponse, reader: jspb.BinaryReader): ListPodsResponse;
}

export namespace ListPodsResponse {
  export type AsObject = {
    itemList: Array<PodInfo.AsObject>,
  }
}

export class GetJobRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetJobRequest;

  getName(): string;
  setName(value: string): GetJobRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): GetJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class GetJobResponse extends jspb.Message {
  getItem(): PodInfo | undefined;
  setItem(value?: PodInfo): GetJobResponse;
  hasItem(): boolean;
  clearItem(): GetJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobResponse): GetJobResponse.AsObject;
  static serializeBinaryToWriter(message: GetJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobResponse;
  static deserializeBinaryFromReader(message: GetJobResponse, reader: jspb.BinaryReader): GetJobResponse;
}

export namespace GetJobResponse {
  export type AsObject = {
    item?: PodInfo.AsObject,
  }
}

export class ListJobsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListJobsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListJobsResponse extends jspb.Message {
  getItemList(): Array<JobInfo>;
  setItemList(value: Array<JobInfo>): ListJobsResponse;
  clearItemList(): ListJobsResponse;
  addItem(value?: JobInfo, index?: number): JobInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    itemList: Array<JobInfo.AsObject>,
  }
}

export class ListEventsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListEventsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsRequest): ListEventsRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsRequest;
  static deserializeBinaryFromReader(message: ListEventsRequest, reader: jspb.BinaryReader): ListEventsRequest;
}

export namespace ListEventsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListEventsResponse extends jspb.Message {
  getItemList(): Array<EventInfo>;
  setItemList(value: Array<EventInfo>): ListEventsResponse;
  clearItemList(): ListEventsResponse;
  addItem(value?: EventInfo, index?: number): EventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsResponse): ListEventsResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsResponse;
  static deserializeBinaryFromReader(message: ListEventsResponse, reader: jspb.BinaryReader): ListEventsResponse;
}

export namespace ListEventsResponse {
  export type AsObject = {
    itemList: Array<EventInfo.AsObject>,
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

export class JobInfo extends jspb.Message {
  getName(): string;
  setName(value: string): JobInfo;

  getNamespace(): string;
  setNamespace(value: string): JobInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobInfo.AsObject;
  static toObject(includeInstance: boolean, msg: JobInfo): JobInfo.AsObject;
  static serializeBinaryToWriter(message: JobInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobInfo;
  static deserializeBinaryFromReader(message: JobInfo, reader: jspb.BinaryReader): JobInfo;
}

export namespace JobInfo {
  export type AsObject = {
    name: string,
    namespace: string,
  }
}

export class EventInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventInfo): EventInfo.AsObject;
  static serializeBinaryToWriter(message: EventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventInfo;
  static deserializeBinaryFromReader(message: EventInfo, reader: jspb.BinaryReader): EventInfo;
}

export namespace EventInfo {
  export type AsObject = {
  }
}

