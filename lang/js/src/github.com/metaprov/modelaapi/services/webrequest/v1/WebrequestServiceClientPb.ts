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

  methodInfoListWebRequests = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsResponse>;

  listWebRequests(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ListWebRequestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
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

  methodInfoCreateWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestResponse>;

  createWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.CreateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
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

  methodInfoGetWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestResponse>;

  getWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.GetWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
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

  methodInfoUpdateWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestResponse>;

  updateWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.UpdateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
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

  methodInfoDeleteWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestResponse>;

  deleteWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.DeleteWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
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

  methodInfoPauseWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestResponse.deserializeBinary
  );

  pauseWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestResponse>;

  pauseWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestResponse>;

  pauseWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.PauseWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/PauseWebRequest',
        request,
        metadata || {},
        this.methodInfoPauseWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/PauseWebRequest',
    request,
    metadata || {},
    this.methodInfoPauseWebRequest);
  }

  methodInfoResumeWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestResponse.deserializeBinary
  );

  resumeWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestResponse>;

  resumeWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestResponse>;

  resumeWebRequest(
    request: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_webrequest_v1_webrequest_pb.ResumeWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/ResumeWebRequest',
        request,
        metadata || {},
        this.methodInfoResumeWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.webrequest.v1.WebRequestService/ResumeWebRequest',
    request,
    metadata || {},
    this.methodInfoResumeWebRequest);
  }

}

