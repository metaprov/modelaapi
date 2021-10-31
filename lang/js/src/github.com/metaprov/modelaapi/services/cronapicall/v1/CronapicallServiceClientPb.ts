/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.cronapicall.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb from '../../../../../../github.com/metaprov/modelaapi/services/cronapicall/v1/cronapicall_pb';


export class CronApiCallServiceClient {
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

  methodInfoListCronApiCalls = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsResponse,
    (request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsResponse.deserializeBinary
  );

  listCronApiCalls(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsResponse>;

  listCronApiCalls(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsResponse>;

  listCronApiCalls(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ListCronApiCallsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/ListCronApiCalls',
        request,
        metadata || {},
        this.methodInfoListCronApiCalls,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/ListCronApiCalls',
    request,
    metadata || {},
    this.methodInfoListCronApiCalls);
  }

  methodInfoCreateCronApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallResponse.deserializeBinary
  );

  createCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallResponse>;

  createCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallResponse>;

  createCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.CreateCronApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/CreateCronApiCall',
        request,
        metadata || {},
        this.methodInfoCreateCronApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/CreateCronApiCall',
    request,
    metadata || {},
    this.methodInfoCreateCronApiCall);
  }

  methodInfoGetCronApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallResponse.deserializeBinary
  );

  getCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallResponse>;

  getCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallResponse>;

  getCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.GetCronApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/GetCronApiCall',
        request,
        metadata || {},
        this.methodInfoGetCronApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/GetCronApiCall',
    request,
    metadata || {},
    this.methodInfoGetCronApiCall);
  }

  methodInfoUpdateCronApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallResponse.deserializeBinary
  );

  updateCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallResponse>;

  updateCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallResponse>;

  updateCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.UpdateCronApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/UpdateCronApiCall',
        request,
        metadata || {},
        this.methodInfoUpdateCronApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/UpdateCronApiCall',
    request,
    metadata || {},
    this.methodInfoUpdateCronApiCall);
  }

  methodInfoDeleteCronApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallResponse.deserializeBinary
  );

  deleteCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallResponse>;

  deleteCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallResponse>;

  deleteCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.DeleteCronApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/DeleteCronApiCall',
        request,
        metadata || {},
        this.methodInfoDeleteCronApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/DeleteCronApiCall',
    request,
    metadata || {},
    this.methodInfoDeleteCronApiCall);
  }

  methodInfoPauseCronApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallResponse.deserializeBinary
  );

  pauseCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallResponse>;

  pauseCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallResponse>;

  pauseCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.PauseCronApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/PauseCronApiCall',
        request,
        metadata || {},
        this.methodInfoPauseCronApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/PauseCronApiCall',
    request,
    metadata || {},
    this.methodInfoPauseCronApiCall);
  }

  methodInfoResumeCronApiCall = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallResponse.deserializeBinary
  );

  resumeCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallResponse>;

  resumeCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallResponse>;

  resumeCronApiCall(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.ResumeCronApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/ResumeCronApiCall',
        request,
        metadata || {},
        this.methodInfoResumeCronApiCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/ResumeCronApiCall',
    request,
    metadata || {},
    this.methodInfoResumeCronApiCall);
  }

  methodInfoRunPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallResponse,
    (request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallResponse.deserializeBinary
  );

  runPrediction(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallResponse>;

  runPrediction(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallResponse>;

  runPrediction(
    request: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronapicall_v1_cronapicall_pb.RunCronApiCallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/RunPrediction',
        request,
        metadata || {},
        this.methodInfoRunPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronapicall.v1.CronApiCallService/RunPrediction',
    request,
    metadata || {},
    this.methodInfoRunPrediction);
  }

}

