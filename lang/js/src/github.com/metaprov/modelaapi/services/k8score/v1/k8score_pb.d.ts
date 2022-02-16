import * as jspb from 'google-protobuf'

import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_api_apps_v1_generated_pb from '../../../../../../k8s.io/api/apps/v1/generated_pb';
import * as k8s_io_api_rbac_v1_generated_pb from '../../../../../../k8s.io/api/rbac/v1/generated_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';


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
  getSecret(): SecretInfo | undefined;
  setSecret(value?: SecretInfo): GetSecretResponse;
  hasSecret(): boolean;
  clearSecret(): GetSecretResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSecretResponse): GetSecretResponse.AsObject;
  static serializeBinaryToWriter(message: GetSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSecretResponse;
  static deserializeBinaryFromReader(message: GetSecretResponse, reader: jspb.BinaryReader): GetSecretResponse;
}

export namespace GetSecretResponse {
  export type AsObject = {
    secret?: SecretInfo.AsObject,
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
  getSecretsList(): Array<SecretInfo>;
  setSecretsList(value: Array<SecretInfo>): ListSecretResponse;
  clearSecretsList(): ListSecretResponse;
  addSecrets(value?: SecretInfo, index?: number): SecretInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSecretResponse): ListSecretResponse.AsObject;
  static serializeBinaryToWriter(message: ListSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSecretResponse;
  static deserializeBinaryFromReader(message: ListSecretResponse, reader: jspb.BinaryReader): ListSecretResponse;
}

export namespace ListSecretResponse {
  export type AsObject = {
    secretsList: Array<SecretInfo.AsObject>,
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
  getDeployment(): DeploymentInfo | undefined;
  setDeployment(value?: DeploymentInfo): GetDeploymentResponse;
  hasDeployment(): boolean;
  clearDeployment(): GetDeploymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentResponse): GetDeploymentResponse.AsObject;
  static serializeBinaryToWriter(message: GetDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentResponse;
  static deserializeBinaryFromReader(message: GetDeploymentResponse, reader: jspb.BinaryReader): GetDeploymentResponse;
}

export namespace GetDeploymentResponse {
  export type AsObject = {
    deployment?: DeploymentInfo.AsObject,
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
  getDeploymentsList(): Array<DeploymentInfo>;
  setDeploymentsList(value: Array<DeploymentInfo>): ListDeploymentsResponse;
  clearDeploymentsList(): ListDeploymentsResponse;
  addDeployments(value?: DeploymentInfo, index?: number): DeploymentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeploymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeploymentsResponse): ListDeploymentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDeploymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeploymentsResponse;
  static deserializeBinaryFromReader(message: ListDeploymentsResponse, reader: jspb.BinaryReader): ListDeploymentsResponse;
}

export namespace ListDeploymentsResponse {
  export type AsObject = {
    deploymentsList: Array<DeploymentInfo.AsObject>,
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
  getService(): ServiceInfo | undefined;
  setService(value?: ServiceInfo): GetServiceResponse;
  hasService(): boolean;
  clearService(): GetServiceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceResponse): GetServiceResponse.AsObject;
  static serializeBinaryToWriter(message: GetServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceResponse;
  static deserializeBinaryFromReader(message: GetServiceResponse, reader: jspb.BinaryReader): GetServiceResponse;
}

export namespace GetServiceResponse {
  export type AsObject = {
    service?: ServiceInfo.AsObject,
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
  getServicesList(): Array<ServiceInfo>;
  setServicesList(value: Array<ServiceInfo>): ListServicesResponse;
  clearServicesList(): ListServicesResponse;
  addServices(value?: ServiceInfo, index?: number): ServiceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServicesResponse): ListServicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServicesResponse;
  static deserializeBinaryFromReader(message: ListServicesResponse, reader: jspb.BinaryReader): ListServicesResponse;
}

export namespace ListServicesResponse {
  export type AsObject = {
    servicesList: Array<ServiceInfo.AsObject>,
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
  getPod(): PodInfo | undefined;
  setPod(value?: PodInfo): GetPodResponse;
  hasPod(): boolean;
  clearPod(): GetPodResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPodResponse): GetPodResponse.AsObject;
  static serializeBinaryToWriter(message: GetPodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPodResponse;
  static deserializeBinaryFromReader(message: GetPodResponse, reader: jspb.BinaryReader): GetPodResponse;
}

export namespace GetPodResponse {
  export type AsObject = {
    pod?: PodInfo.AsObject,
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
  getPodsList(): Array<PodInfo>;
  setPodsList(value: Array<PodInfo>): ListPodsResponse;
  clearPodsList(): ListPodsResponse;
  addPods(value?: PodInfo, index?: number): PodInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPodsResponse): ListPodsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPodsResponse;
  static deserializeBinaryFromReader(message: ListPodsResponse, reader: jspb.BinaryReader): ListPodsResponse;
}

export namespace ListPodsResponse {
  export type AsObject = {
    podsList: Array<PodInfo.AsObject>,
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
  getJob(): JobInfo | undefined;
  setJob(value?: JobInfo): GetJobResponse;
  hasJob(): boolean;
  clearJob(): GetJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobResponse): GetJobResponse.AsObject;
  static serializeBinaryToWriter(message: GetJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobResponse;
  static deserializeBinaryFromReader(message: GetJobResponse, reader: jspb.BinaryReader): GetJobResponse;
}

export namespace GetJobResponse {
  export type AsObject = {
    job?: JobInfo.AsObject,
  }
}

export class ListJobsRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): ListJobsRequest;

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
    tenant: string,
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListJobsResponse extends jspb.Message {
  getJobsList(): Array<JobInfo>;
  setJobsList(value: Array<JobInfo>): ListJobsResponse;
  clearJobsList(): ListJobsResponse;
  addJobs(value?: JobInfo, index?: number): JobInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<JobInfo.AsObject>,
  }
}

export class GetContainerLogRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetContainerLogRequest;

  getName(): string;
  setName(value: string): GetContainerLogRequest;

  getContainername(): string;
  setContainername(value: string): GetContainerLogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContainerLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContainerLogRequest): GetContainerLogRequest.AsObject;
  static serializeBinaryToWriter(message: GetContainerLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContainerLogRequest;
  static deserializeBinaryFromReader(message: GetContainerLogRequest, reader: jspb.BinaryReader): GetContainerLogRequest;
}

export namespace GetContainerLogRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    containername: string,
  }
}

export class GetContainerLogResponse extends jspb.Message {
  getLog(): Uint8Array | string;
  getLog_asU8(): Uint8Array;
  getLog_asB64(): string;
  setLog(value: Uint8Array | string): GetContainerLogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContainerLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContainerLogResponse): GetContainerLogResponse.AsObject;
  static serializeBinaryToWriter(message: GetContainerLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContainerLogResponse;
  static deserializeBinaryFromReader(message: GetContainerLogResponse, reader: jspb.BinaryReader): GetContainerLogResponse;
}

export namespace GetContainerLogResponse {
  export type AsObject = {
    log: Uint8Array | string,
  }
}

export class ListEventsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListEventsRequest;

  getName(): string;
  setName(value: string): ListEventsRequest;

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
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListEventsResponse extends jspb.Message {
  getItems(): k8s_io_api_core_v1_generated_pb.EventList | undefined;
  setItems(value?: k8s_io_api_core_v1_generated_pb.EventList): ListEventsResponse;
  hasItems(): boolean;
  clearItems(): ListEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsResponse): ListEventsResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsResponse;
  static deserializeBinaryFromReader(message: ListEventsResponse, reader: jspb.BinaryReader): ListEventsResponse;
}

export namespace ListEventsResponse {
  export type AsObject = {
    items?: k8s_io_api_core_v1_generated_pb.EventList.AsObject,
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

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ServiceInfo;

  getIp(): string;
  setIp(value: string): ServiceInfo;

  getPort(): string;
  setPort(value: string): ServiceInfo;

  getCreatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCreatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ServiceInfo;
  hasCreatedat(): boolean;
  clearCreatedat(): ServiceInfo;

  getStatus(): k8s_io_api_core_v1_generated_pb.ServiceStatus | undefined;
  setStatus(value?: k8s_io_api_core_v1_generated_pb.ServiceStatus): ServiceInfo;
  hasStatus(): boolean;
  clearStatus(): ServiceInfo;

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
    labelsMap: Array<[string, string]>,
    ip: string,
    port: string,
    createdat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    status?: k8s_io_api_core_v1_generated_pb.ServiceStatus.AsObject,
  }
}

export class ContainerInfo extends jspb.Message {
  getImage(): string;
  setImage(value: string): ContainerInfo;

  getName(): string;
  setName(value: string): ContainerInfo;

  getLog(): Uint8Array | string;
  getLog_asU8(): Uint8Array;
  getLog_asB64(): string;
  setLog(value: Uint8Array | string): ContainerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerInfo): ContainerInfo.AsObject;
  static serializeBinaryToWriter(message: ContainerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerInfo;
  static deserializeBinaryFromReader(message: ContainerInfo, reader: jspb.BinaryReader): ContainerInfo;
}

export namespace ContainerInfo {
  export type AsObject = {
    image: string,
    name: string,
    log: Uint8Array | string,
  }
}

export class DeploymentInfo extends jspb.Message {
  getName(): string;
  setName(value: string): DeploymentInfo;

  getNamespace(): string;
  setNamespace(value: string): DeploymentInfo;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): DeploymentInfo;

  getCreatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCreatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DeploymentInfo;
  hasCreatedat(): boolean;
  clearCreatedat(): DeploymentInfo;

  getStatus(): k8s_io_api_apps_v1_generated_pb.DeploymentStatus | undefined;
  setStatus(value?: k8s_io_api_apps_v1_generated_pb.DeploymentStatus): DeploymentInfo;
  hasStatus(): boolean;
  clearStatus(): DeploymentInfo;

  getPodsList(): Array<PodInfo>;
  setPodsList(value: Array<PodInfo>): DeploymentInfo;
  clearPodsList(): DeploymentInfo;
  addPods(value?: PodInfo, index?: number): PodInfo;

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
    labelsMap: Array<[string, string]>,
    createdat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    status?: k8s_io_api_apps_v1_generated_pb.DeploymentStatus.AsObject,
    podsList: Array<PodInfo.AsObject>,
  }
}

export class PodInfo extends jspb.Message {
  getName(): string;
  setName(value: string): PodInfo;

  getNamespace(): string;
  setNamespace(value: string): PodInfo;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): PodInfo;

  getCreatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCreatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PodInfo;
  hasCreatedat(): boolean;
  clearCreatedat(): PodInfo;

  getStatus(): k8s_io_api_core_v1_generated_pb.PodStatus | undefined;
  setStatus(value?: k8s_io_api_core_v1_generated_pb.PodStatus): PodInfo;
  hasStatus(): boolean;
  clearStatus(): PodInfo;

  getContrainersList(): Array<ContainerInfo>;
  setContrainersList(value: Array<ContainerInfo>): PodInfo;
  clearContrainersList(): PodInfo;
  addContrainers(value?: ContainerInfo, index?: number): ContainerInfo;

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
    labelsMap: Array<[string, string]>,
    createdat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    status?: k8s_io_api_core_v1_generated_pb.PodStatus.AsObject,
    contrainersList: Array<ContainerInfo.AsObject>,
  }
}

export class JobInfo extends jspb.Message {
  getName(): string;
  setName(value: string): JobInfo;

  getNamespace(): string;
  setNamespace(value: string): JobInfo;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): JobInfo;

  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): JobInfo;
  hasStartedat(): boolean;
  clearStartedat(): JobInfo;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): JobInfo;
  hasCompletedat(): boolean;
  clearCompletedat(): JobInfo;

  getFailed(): number;
  setFailed(value: number): JobInfo;

  getSucceeded(): number;
  setSucceeded(value: number): JobInfo;

  getActive(): number;
  setActive(value: number): JobInfo;

  getReady(): number;
  setReady(value: number): JobInfo;

  getPodsList(): Array<PodInfo>;
  setPodsList(value: Array<PodInfo>): JobInfo;
  clearPodsList(): JobInfo;
  addPods(value?: PodInfo, index?: number): PodInfo;

  getModel(): string;
  setModel(value: string): JobInfo;

  getStudy(): string;
  setStudy(value: string): JobInfo;

  getDataset(): string;
  setDataset(value: string): JobInfo;

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
    labelsMap: Array<[string, string]>,
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failed: number,
    succeeded: number,
    active: number,
    ready: number,
    podsList: Array<PodInfo.AsObject>,
    model: string,
    study: string,
    dataset: string,
  }
}

