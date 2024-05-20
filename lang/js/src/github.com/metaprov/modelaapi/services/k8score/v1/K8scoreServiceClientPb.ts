/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.k8score.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: github.com/metaprov/modelaapi/services/k8score/v1/k8score.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb from '../../../../../../github.com/metaprov/modelaapi/services/k8score/v1/k8score_pb';


export class CoreK8sServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListK8sSecrets = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sSecrets',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretsRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretResponse.deserializeBinary
  );

  listK8sSecrets(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretResponse>;

  listK8sSecrets(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretResponse>;

  listK8sSecrets(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListSecretResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sSecrets',
        request,
        metadata || {},
        this.methodDescriptorListK8sSecrets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sSecrets',
    request,
    metadata || {},
    this.methodDescriptorListK8sSecrets);
  }

  methodDescriptorGetK8sSecret = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sSecret',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretResponse.deserializeBinary
  );

  getK8sSecret(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretResponse>;

  getK8sSecret(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretResponse>;

  getK8sSecret(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetSecretResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sSecret',
        request,
        metadata || {},
        this.methodDescriptorGetK8sSecret,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sSecret',
    request,
    metadata || {},
    this.methodDescriptorGetK8sSecret);
  }

  methodDescriptorListK8sServices = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sServices',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesResponse.deserializeBinary
  );

  listK8sServices(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesResponse>;

  listK8sServices(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesResponse>;

  listK8sServices(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListServicesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sServices',
        request,
        metadata || {},
        this.methodDescriptorListK8sServices,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sServices',
    request,
    metadata || {},
    this.methodDescriptorListK8sServices);
  }

  methodDescriptorGetK8sService = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sService',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceResponse.deserializeBinary
  );

  getK8sService(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceResponse>;

  getK8sService(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceResponse>;

  getK8sService(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetServiceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sService',
        request,
        metadata || {},
        this.methodDescriptorGetK8sService,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sService',
    request,
    metadata || {},
    this.methodDescriptorGetK8sService);
  }

  methodDescriptorListK8sDeployments = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sDeployments',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse.deserializeBinary
  );

  listK8sDeployments(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse>;

  listK8sDeployments(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse>;

  listK8sDeployments(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sDeployments',
        request,
        metadata || {},
        this.methodDescriptorListK8sDeployments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sDeployments',
    request,
    metadata || {},
    this.methodDescriptorListK8sDeployments);
  }

  methodDescriptorGetK8sDeployment = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sDeployment',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentResponse.deserializeBinary
  );

  getK8sDeployment(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentResponse>;

  getK8sDeployment(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentResponse>;

  getK8sDeployment(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetDeploymentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sDeployment',
        request,
        metadata || {},
        this.methodDescriptorGetK8sDeployment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sDeployment',
    request,
    metadata || {},
    this.methodDescriptorGetK8sDeployment);
  }

  methodDescriptorListK8sPods = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sPods',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsResponse.deserializeBinary
  );

  listK8sPods(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsResponse>;

  listK8sPods(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsResponse>;

  listK8sPods(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListPodsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sPods',
        request,
        metadata || {},
        this.methodDescriptorListK8sPods,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sPods',
    request,
    metadata || {},
    this.methodDescriptorListK8sPods);
  }

  methodDescriptorGetK8sPod = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sPod',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodResponse.deserializeBinary
  );

  getK8sPod(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodResponse>;

  getK8sPod(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodResponse>;

  getK8sPod(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetPodResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sPod',
        request,
        metadata || {},
        this.methodDescriptorGetK8sPod,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sPod',
    request,
    metadata || {},
    this.methodDescriptorGetK8sPod);
  }

  methodDescriptorListK8sJobs = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sJobs',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsResponse.deserializeBinary
  );

  listK8sJobs(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsResponse>;

  listK8sJobs(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsResponse>;

  listK8sJobs(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListJobsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sJobs',
        request,
        metadata || {},
        this.methodDescriptorListK8sJobs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sJobs',
    request,
    metadata || {},
    this.methodDescriptorListK8sJobs);
  }

  methodDescriptorGetK8sJob = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sJob',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobResponse.deserializeBinary
  );

  getK8sJob(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobResponse>;

  getK8sJob(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobResponse>;

  getK8sJob(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetJobResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sJob',
        request,
        metadata || {},
        this.methodDescriptorGetK8sJob,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sJob',
    request,
    metadata || {},
    this.methodDescriptorGetK8sJob);
  }

  methodDescriptorListEvents = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListEvents',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsResponse.deserializeBinary
  );

  listEvents(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsResponse>;

  listEvents(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsResponse>;

  listEvents(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.ListEventsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListEvents',
        request,
        metadata || {},
        this.methodDescriptorListEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListEvents',
    request,
    metadata || {},
    this.methodDescriptorListEvents);
  }

  methodDescriptorGetContainerLog = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetContainerLog',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogRequest,
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogResponse,
    (request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogResponse.deserializeBinary
  );

  getContainerLog(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogResponse>;

  getContainerLog(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogResponse>;

  getContainerLog(
    request: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_k8score_v1_k8score_pb.GetContainerLogResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetContainerLog',
        request,
        metadata || {},
        this.methodDescriptorGetContainerLog,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetContainerLog',
    request,
    metadata || {},
    this.methodDescriptorGetContainerLog);
  }

}

