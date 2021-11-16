/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.webrequest.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb from '../../../../../../github.com/metaprov/modelaapi/services/webrequest/v1/webrequest_pb';


export class WebRequestServiceClient {
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

  methodInfoListWebRequests = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/ListWebRequests',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsRequest,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsResponse,
    (request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsResponse.deserializeBinary
  );

  listWebRequests(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsResponse>;

  listWebRequests(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsResponse>;

  listWebRequests(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/ListWebRequests',
        request,
        metadata || {},
        this.methodInfoListWebRequests,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/ListWebRequests',
    request,
    metadata || {},
    this.methodInfoListWebRequests);
  }

  methodInfoCreateWebRequest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/CreateWebRequest',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestRequest,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestResponse.deserializeBinary
  );

  createWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestResponse>;

  createWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestResponse>;

  createWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/CreateWebRequest',
        request,
        metadata || {},
        this.methodInfoCreateWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/CreateWebRequest',
    request,
    metadata || {},
    this.methodInfoCreateWebRequest);
  }

  methodInfoGetWebRequest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/GetWebRequest',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestRequest,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestResponse.deserializeBinary
  );

  getWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestResponse>;

  getWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestResponse>;

  getWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/GetWebRequest',
        request,
        metadata || {},
        this.methodInfoGetWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/GetWebRequest',
    request,
    metadata || {},
    this.methodInfoGetWebRequest);
  }

  methodInfoUpdateWebRequest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/UpdateWebRequest',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestRequest,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestResponse.deserializeBinary
  );

  updateWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestResponse>;

  updateWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestResponse>;

  updateWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/UpdateWebRequest',
        request,
        metadata || {},
        this.methodInfoUpdateWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/UpdateWebRequest',
    request,
    metadata || {},
    this.methodInfoUpdateWebRequest);
  }

  methodInfoDeleteWebRequest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/DeleteWebRequest',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestRequest,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestResponse.deserializeBinary
  );

  deleteWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestResponse>;

  deleteWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestResponse>;

  deleteWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/DeleteWebRequest',
        request,
        metadata || {},
        this.methodInfoDeleteWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/DeleteWebRequest',
    request,
    metadata || {},
    this.methodInfoDeleteWebRequest);
  }

  methodInfoRunWebRequest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/RunWebRequest',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestRequest,
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestResponse.deserializeBinary
  );

  runWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestResponse>;

  runWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestResponse>;

  runWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.RunWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/RunWebRequest',
        request,
        metadata || {},
        this.methodInfoRunWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/RunWebRequest',
    request,
    metadata || {},
    this.methodInfoRunWebRequest);
  }

}

