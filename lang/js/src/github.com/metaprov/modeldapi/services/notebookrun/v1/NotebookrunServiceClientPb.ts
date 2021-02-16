/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.notebookrun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb from '../../../../../../github.com/metaprov/modeldapi/services/notebookrun/v1/notebookrun_pb';


export class NotebookRunServiceClient {
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

  methodInfoListNotebookRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse,
    (request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse.deserializeBinary
  );

  listNotebookRuns(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse>;

  listNotebookRuns(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse>;

  listNotebookRuns(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/ListNotebookRuns',
        request,
        metadata || {},
        this.methodInfoListNotebookRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/ListNotebookRuns',
    request,
    metadata || {},
    this.methodInfoListNotebookRuns);
  }

  methodInfoCreateNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse,
    (request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse.deserializeBinary
  );

  createNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse>;

  createNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse>;

  createNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/CreateNotebookRun',
        request,
        metadata || {},
        this.methodInfoCreateNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/CreateNotebookRun',
    request,
    metadata || {},
    this.methodInfoCreateNotebookRun);
  }

  methodInfoGetNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse,
    (request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse.deserializeBinary
  );

  getNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse>;

  getNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse>;

  getNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/GetNotebookRun',
        request,
        metadata || {},
        this.methodInfoGetNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/GetNotebookRun',
    request,
    metadata || {},
    this.methodInfoGetNotebookRun);
  }

  methodInfoUpdateNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse,
    (request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse.deserializeBinary
  );

  updateNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse>;

  updateNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse>;

  updateNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/UpdateNotebookRun',
        request,
        metadata || {},
        this.methodInfoUpdateNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/UpdateNotebookRun',
    request,
    metadata || {},
    this.methodInfoUpdateNotebookRun);
  }

  methodInfoDeleteNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse,
    (request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse.deserializeBinary
  );

  deleteNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse>;

  deleteNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse>;

  deleteNotebookRun(
    request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/DeleteNotebookRun',
        request,
        metadata || {},
        this.methodInfoDeleteNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/DeleteNotebookRun',
    request,
    metadata || {},
    this.methodInfoDeleteNotebookRun);
  }

}

