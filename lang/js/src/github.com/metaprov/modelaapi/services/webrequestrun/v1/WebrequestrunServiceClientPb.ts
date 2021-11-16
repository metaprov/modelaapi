/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.webrequestrun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb from '../../../../../../github.com/metaprov/modelaapi/services/webrequestrun/v1/webrequestrun_pb';


export class WebRequestRunServiceClient {
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

  methodInfoListWebRequestRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/ListWebRequestRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsRequest,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsResponse,
    (request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsResponse.deserializeBinary
  );

  listWebRequestRuns(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsResponse>;

  listWebRequestRuns(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsResponse>;

  listWebRequestRuns(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.ListWebRequestRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/ListWebRequestRuns',
        request,
        metadata || {},
        this.methodInfoListWebRequestRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/ListWebRequestRuns',
    request,
    metadata || {},
    this.methodInfoListWebRequestRuns);
  }

  methodInfoCreateWebRequestRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/CreateWebRequestRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunRequest,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunResponse,
    (request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunResponse.deserializeBinary
  );

  createWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunResponse>;

  createWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunResponse>;

  createWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.CreateWebRequestRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/CreateWebRequestRun',
        request,
        metadata || {},
        this.methodInfoCreateWebRequestRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/CreateWebRequestRun',
    request,
    metadata || {},
    this.methodInfoCreateWebRequestRun);
  }

  methodInfoGetWebRequestRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/GetWebRequestRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunRequest,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunResponse,
    (request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunResponse.deserializeBinary
  );

  getWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunResponse>;

  getWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunResponse>;

  getWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.GetWebRequestRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/GetWebRequestRun',
        request,
        metadata || {},
        this.methodInfoGetWebRequestRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/GetWebRequestRun',
    request,
    metadata || {},
    this.methodInfoGetWebRequestRun);
  }

  methodInfoUpdateWebRequestRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/UpdateWebRequestRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunRequest,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunResponse,
    (request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunResponse.deserializeBinary
  );

  updateWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunResponse>;

  updateWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunResponse>;

  updateWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.UpdateWebRequestRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/UpdateWebRequestRun',
        request,
        metadata || {},
        this.methodInfoUpdateWebRequestRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/UpdateWebRequestRun',
    request,
    metadata || {},
    this.methodInfoUpdateWebRequestRun);
  }

  methodInfoDeleteWebRequestRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/DeleteWebRequestRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunRequest,
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunResponse,
    (request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunResponse.deserializeBinary
  );

  deleteWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunResponse>;

  deleteWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunResponse>;

  deleteWebRequestRun(
    request: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequestrun_v1_webrequestrun_pb.DeleteWebRequestRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/DeleteWebRequestRun',
        request,
        metadata || {},
        this.methodInfoDeleteWebRequestRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/DeleteWebRequestRun',
    request,
    metadata || {},
    this.methodInfoDeleteWebRequestRun);
  }

}

