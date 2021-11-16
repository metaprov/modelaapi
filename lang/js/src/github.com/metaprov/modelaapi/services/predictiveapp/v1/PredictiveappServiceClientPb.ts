/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.predictiveapp.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb from '../../../../../../github.com/metaprov/modelaapi/services/predictiveapp/v1/predictiveapp_pb';


export class PredictiveAppServiceClient {
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

  methodInfoListPredictiveApps = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/ListPredictiveApps',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsRequest,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsResponse,
    (request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsResponse.deserializeBinary
  );

  listPredictiveApps(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsResponse>;

  listPredictiveApps(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsResponse>;

  listPredictiveApps(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ListPredictiveAppsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/ListPredictiveApps',
        request,
        metadata || {},
        this.methodInfoListPredictiveApps,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/ListPredictiveApps',
    request,
    metadata || {},
    this.methodInfoListPredictiveApps);
  }

  methodInfoCreatePredictiveApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/CreatePredictiveApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppRequest,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppResponse,
    (request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppResponse.deserializeBinary
  );

  createPredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppResponse>;

  createPredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppResponse>;

  createPredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.CreatePredictiveAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/CreatePredictiveApp',
        request,
        metadata || {},
        this.methodInfoCreatePredictiveApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/CreatePredictiveApp',
    request,
    metadata || {},
    this.methodInfoCreatePredictiveApp);
  }

  methodInfoGetPredictiveApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/GetPredictiveApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppRequest,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppResponse,
    (request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppResponse.deserializeBinary
  );

  getPredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppResponse>;

  getPredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppResponse>;

  getPredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.GetPredictiveAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/GetPredictiveApp',
        request,
        metadata || {},
        this.methodInfoGetPredictiveApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/GetPredictiveApp',
    request,
    metadata || {},
    this.methodInfoGetPredictiveApp);
  }

  methodInfoUpdatePredictiveApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/UpdatePredictiveApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppRequest,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppResponse,
    (request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppResponse.deserializeBinary
  );

  updatePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppResponse>;

  updatePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppResponse>;

  updatePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.UpdatePredictiveAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/UpdatePredictiveApp',
        request,
        metadata || {},
        this.methodInfoUpdatePredictiveApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/UpdatePredictiveApp',
    request,
    metadata || {},
    this.methodInfoUpdatePredictiveApp);
  }

  methodInfoDeletePredictiveApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/DeletePredictiveApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppRequest,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppResponse,
    (request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppResponse.deserializeBinary
  );

  deletePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppResponse>;

  deletePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppResponse>;

  deletePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.DeletePredictiveAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/DeletePredictiveApp',
        request,
        metadata || {},
        this.methodInfoDeletePredictiveApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/DeletePredictiveApp',
    request,
    metadata || {},
    this.methodInfoDeletePredictiveApp);
  }

  methodInfoPausePredictiveApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/PausePredictiveApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppRequest,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppResponse,
    (request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppResponse.deserializeBinary
  );

  pausePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppResponse>;

  pausePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppResponse>;

  pausePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.PausePredictiveAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/PausePredictiveApp',
        request,
        metadata || {},
        this.methodInfoPausePredictiveApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/PausePredictiveApp',
    request,
    metadata || {},
    this.methodInfoPausePredictiveApp);
  }

  methodInfoResumePredictiveApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/ResumePredictiveApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppRequest,
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppResponse,
    (request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppResponse.deserializeBinary
  );

  resumePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppResponse>;

  resumePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppResponse>;

  resumePredictiveApp(
    request: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_predictiveapp_v1_predictiveapp_pb.ResumePredictiveAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/ResumePredictiveApp',
        request,
        metadata || {},
        this.methodInfoResumePredictiveApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictiveapp.v1.PredictiveAppService/ResumePredictiveApp',
    request,
    metadata || {},
    this.methodInfoResumePredictiveApp);
  }

}

