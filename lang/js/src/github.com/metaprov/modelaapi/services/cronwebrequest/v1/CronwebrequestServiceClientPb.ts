/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.cronwebrequest.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb from '../../../../../../github.com/metaprov/modelaapi/services/cronwebrequest/v1/cronwebrequest_pb';


export class CronWebRequestServiceClient {
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

  methodInfoListCronWebRequests = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsResponse,
    (request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsResponse.deserializeBinary
  );

  listCronWebRequests(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsResponse>;

  listCronWebRequests(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsResponse>;

  listCronWebRequests(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ListCronWebRequestsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/ListCronWebRequests',
        request,
        metadata || {},
        this.methodInfoListCronWebRequests,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/ListCronWebRequests',
    request,
    metadata || {},
    this.methodInfoListCronWebRequests);
  }

  methodInfoCreateCronWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestResponse.deserializeBinary
  );

  createCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestResponse>;

  createCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestResponse>;

  createCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.CreateCronWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/CreateCronWebRequest',
        request,
        metadata || {},
        this.methodInfoCreateCronWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/CreateCronWebRequest',
    request,
    metadata || {},
    this.methodInfoCreateCronWebRequest);
  }

  methodInfoGetCronWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestResponse.deserializeBinary
  );

  getCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestResponse>;

  getCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestResponse>;

  getCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.GetCronWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/GetCronWebRequest',
        request,
        metadata || {},
        this.methodInfoGetCronWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/GetCronWebRequest',
    request,
    metadata || {},
    this.methodInfoGetCronWebRequest);
  }

  methodInfoUpdateCronWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestResponse.deserializeBinary
  );

  updateCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestResponse>;

  updateCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestResponse>;

  updateCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.UpdateCronWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/UpdateCronWebRequest',
        request,
        metadata || {},
        this.methodInfoUpdateCronWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/UpdateCronWebRequest',
    request,
    metadata || {},
    this.methodInfoUpdateCronWebRequest);
  }

  methodInfoDeleteCronWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestResponse.deserializeBinary
  );

  deleteCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestResponse>;

  deleteCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestResponse>;

  deleteCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.DeleteCronWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/DeleteCronWebRequest',
        request,
        metadata || {},
        this.methodInfoDeleteCronWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/DeleteCronWebRequest',
    request,
    metadata || {},
    this.methodInfoDeleteCronWebRequest);
  }

  methodInfoPauseCronWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestResponse.deserializeBinary
  );

  pauseCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestResponse>;

  pauseCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestResponse>;

  pauseCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.PauseCronWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/PauseCronWebRequest',
        request,
        metadata || {},
        this.methodInfoPauseCronWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/PauseCronWebRequest',
    request,
    metadata || {},
    this.methodInfoPauseCronWebRequest);
  }

  methodInfoResumeCronWebRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestResponse.deserializeBinary
  );

  resumeCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestResponse>;

  resumeCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestResponse>;

  resumeCronWebRequest(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.ResumeCronWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/ResumeCronWebRequest',
        request,
        metadata || {},
        this.methodInfoResumeCronWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/ResumeCronWebRequest',
    request,
    metadata || {},
    this.methodInfoResumeCronWebRequest);
  }

  methodInfoRunPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestResponse,
    (request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestResponse.deserializeBinary
  );

  runPrediction(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestResponse>;

  runPrediction(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestResponse>;

  runPrediction(
    request: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronwebrequest_v1_cronwebrequest_pb.RunCronWebRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/RunPrediction',
        request,
        metadata || {},
        this.methodInfoRunPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronwebrequest.v1.CronWebRequestService/RunPrediction',
    request,
    metadata || {},
    this.methodInfoRunPrediction);
  }

}

