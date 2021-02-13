/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.k8score
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_k8score_k8score_pb from '../../../../../github.com/metaprov/modeldapi/services/k8score/k8score_pb';


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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListK8sSecrets = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListSecretResponse,
    (request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.SecretQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListSecretResponse.deserializeBinary
  );

  listK8sSecrets(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.SecretQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListSecretResponse>;

  listK8sSecrets(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.SecretQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListSecretResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListSecretResponse>;

  listK8sSecrets(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.SecretQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListSecretResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListK8sSecrets',
        request,
        metadata || {},
        this.methodInfoListK8sSecrets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListK8sSecrets',
    request,
    metadata || {},
    this.methodInfoListK8sSecrets);
  }

  methodInfoGetK8sSecret = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetSecretResponse,
    (request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.SecretQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetSecretResponse.deserializeBinary
  );

  getK8sSecret(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.SecretQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetSecretResponse>;

  getK8sSecret(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.SecretQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetSecretResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetSecretResponse>;

  getK8sSecret(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.SecretQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetSecretResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.k8score.CoreK8sService/GetK8sSecret',
        request,
        metadata || {},
        this.methodInfoGetK8sSecret,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.k8score.CoreK8sService/GetK8sSecret',
    request,
    metadata || {},
    this.methodInfoGetK8sSecret);
  }

  methodInfoListK8sServices = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListServiceResponse,
    (request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ServiceQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListServiceResponse.deserializeBinary
  );

  listK8sServices(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ServiceQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListServiceResponse>;

  listK8sServices(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ServiceQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListServiceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListServiceResponse>;

  listK8sServices(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ServiceQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListServiceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListK8sServices',
        request,
        metadata || {},
        this.methodInfoListK8sServices,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListK8sServices',
    request,
    metadata || {},
    this.methodInfoListK8sServices);
  }

  methodInfoGetK8sService = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetServiceResponse,
    (request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ServiceQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetServiceResponse.deserializeBinary
  );

  getK8sService(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ServiceQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetServiceResponse>;

  getK8sService(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ServiceQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetServiceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetServiceResponse>;

  getK8sService(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ServiceQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetServiceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.k8score.CoreK8sService/GetK8sService',
        request,
        metadata || {},
        this.methodInfoGetK8sService,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.k8score.CoreK8sService/GetK8sService',
    request,
    metadata || {},
    this.methodInfoGetK8sService);
  }

  methodInfoListK8sDeployments = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListDeploymentResponse,
    (request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.DeploymentQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListDeploymentResponse.deserializeBinary
  );

  listK8sDeployments(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.DeploymentQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListDeploymentResponse>;

  listK8sDeployments(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.DeploymentQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListDeploymentResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListDeploymentResponse>;

  listK8sDeployments(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.DeploymentQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListDeploymentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListK8sDeployments',
        request,
        metadata || {},
        this.methodInfoListK8sDeployments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListK8sDeployments',
    request,
    metadata || {},
    this.methodInfoListK8sDeployments);
  }

  methodInfoGetK8sDeployment = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetDeploymentResponse,
    (request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.DeploymentQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetDeploymentResponse.deserializeBinary
  );

  getK8sDeployment(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.DeploymentQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetDeploymentResponse>;

  getK8sDeployment(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.DeploymentQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetDeploymentResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetDeploymentResponse>;

  getK8sDeployment(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.DeploymentQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetDeploymentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.k8score.CoreK8sService/GetK8sDeployment',
        request,
        metadata || {},
        this.methodInfoGetK8sDeployment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.k8score.CoreK8sService/GetK8sDeployment',
    request,
    metadata || {},
    this.methodInfoGetK8sDeployment);
  }

  methodInfoListK8sPods = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListPodResponse,
    (request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.PodQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListPodResponse.deserializeBinary
  );

  listK8sPods(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.PodQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListPodResponse>;

  listK8sPods(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.PodQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListPodResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListPodResponse>;

  listK8sPods(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.PodQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListPodResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListK8sPods',
        request,
        metadata || {},
        this.methodInfoListK8sPods,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListK8sPods',
    request,
    metadata || {},
    this.methodInfoListK8sPods);
  }

  methodInfoGetK8sPod = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetPodResponse,
    (request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.PodQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetPodResponse.deserializeBinary
  );

  getK8sPod(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.PodQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetPodResponse>;

  getK8sPod(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.PodQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetPodResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetPodResponse>;

  getK8sPod(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.PodQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.GetPodResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.k8score.CoreK8sService/GetK8sPod',
        request,
        metadata || {},
        this.methodInfoGetK8sPod,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.k8score.CoreK8sService/GetK8sPod',
    request,
    metadata || {},
    this.methodInfoGetK8sPod);
  }

  methodInfoListEvents = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListEventResponse,
    (request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.EventQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListEventResponse.deserializeBinary
  );

  listEvents(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.EventQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListEventResponse>;

  listEvents(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.EventQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListEventResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListEventResponse>;

  listEvents(
    request: github_com_metaprov_modeldapi_services_k8score_k8score_pb.EventQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_k8score_k8score_pb.ListEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListEvents',
        request,
        metadata || {},
        this.methodInfoListEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.k8score.CoreK8sService/ListEvents',
    request,
    metadata || {},
    this.methodInfoListEvents);
  }

}

