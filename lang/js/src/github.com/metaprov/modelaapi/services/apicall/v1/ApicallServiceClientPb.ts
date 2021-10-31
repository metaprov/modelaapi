/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.apicall.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb from '../../../../../../github.com/metaprov/modelaapi/services/apicall/v1/apicall_pb';


export class ApiCallServiceClient {
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

  methodInfoListApiCalls = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsResponse,
    (request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsResponse.deserializeBinary
  );

  listApiCalls(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsResponse>;

  listApiCalls(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsResponse>;

  listApiCalls(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ListApiCallsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/ListApiCalls',
        request,
        metadata || {},
        this.methodInfoListApiCalls,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/ListApiCalls',
    request,
    metadata || {},
    this.methodInfoListApiCalls);
  }

  methodInfoCreateApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallResponse.deserializeBinary
  );

  createApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallResponse>;

  createApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallResponse>;

  createApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.CreateApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/CreateApiCall',
        request,
        metadata || {},
        this.methodInfoCreateApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/CreateApiCall',
    request,
    metadata || {},
    this.methodInfoCreateApiCall);
  }

  methodInfoGetApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallResponse.deserializeBinary
  );

  getApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallResponse>;

  getApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallResponse>;

  getApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.GetApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/GetApiCall',
        request,
        metadata || {},
        this.methodInfoGetApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/GetApiCall',
    request,
    metadata || {},
    this.methodInfoGetApiCall);
  }

  methodInfoUpdateApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallResponse.deserializeBinary
  );

  updateApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallResponse>;

  updateApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallResponse>;

  updateApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.UpdateApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/UpdateApiCall',
        request,
        metadata || {},
        this.methodInfoUpdateApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/UpdateApiCall',
    request,
    metadata || {},
    this.methodInfoUpdateApiCall);
  }

  methodInfoDeleteApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallResponse.deserializeBinary
  );

  deleteApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallResponse>;

  deleteApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallResponse>;

  deleteApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.DeleteApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/DeleteApiCall',
        request,
        metadata || {},
        this.methodInfoDeleteApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/DeleteApiCall',
    request,
    metadata || {},
    this.methodInfoDeleteApiCall);
  }

  methodInfoPauseApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallResponse.deserializeBinary
  );

  pauseApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallResponse>;

  pauseApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallResponse>;

  pauseApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.PauseApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/PauseApiCall',
        request,
        metadata || {},
        this.methodInfoPauseApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/PauseApiCall',
    request,
    metadata || {},
    this.methodInfoPauseApiCall);
  }

  methodInfoResumeApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallResponse.deserializeBinary
  );

  resumeApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallResponse>;

  resumeApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallResponse>;

  resumeApiCall(
    request: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_apicall_v1_apicall_pb.ResumeApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/ResumeApiCall',
        request,
        metadata || {},
        this.methodInfoResumeApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.apicall.v1.ApiCallService/ResumeApiCall',
    request,
    metadata || {},
    this.methodInfoResumeApiCall);
  }

}

