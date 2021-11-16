/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.datapipelinerun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb from '../../../../../../github.com/metaprov/modelaapi/services/datapipelinerun/v1/datapipelinerun_pb';


export class DataPipelineRunServiceClient {
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

  methodInfoListDataPipelineRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ListDataPipelineRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunRequest,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse.deserializeBinary
  );

  listDataPipelineRuns(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse>;

  listDataPipelineRuns(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse>;

  listDataPipelineRuns(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ListDataPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListDataPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ListDataPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListDataPipelineRuns);
  }

  methodInfoCreateDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/CreateDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunRequest,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse.deserializeBinary
  );

  createDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse>;

  createDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse>;

  createDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/CreateDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/CreateDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateDataPipelineRun);
  }

  methodInfoGetDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/GetDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunRequest,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse.deserializeBinary
  );

  getDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse>;

  getDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse>;

  getDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/GetDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/GetDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetDataPipelineRun);
  }

  methodInfoUpdateDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/UpdateDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunRequest,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse.deserializeBinary
  );

  updateDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse>;

  updateDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse>;

  updateDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/UpdateDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/UpdateDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateDataPipelineRun);
  }

  methodInfoDeleteDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/DeleteDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunRequest,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse.deserializeBinary
  );

  deleteDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse>;

  deleteDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse>;

  deleteDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/DeleteDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/DeleteDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteDataPipelineRun);
  }

  methodInfoAbortDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/AbortDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunRequest,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunResponse.deserializeBinary
  );

  abortDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunResponse>;

  abortDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunResponse>;

  abortDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.AbortDataPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/AbortDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoAbortDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/AbortDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoAbortDataPipelineRun);
  }

  methodInfoPauseDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/PauseDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunRequest,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunResponse.deserializeBinary
  );

  pauseDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunResponse>;

  pauseDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunResponse>;

  pauseDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.PauseDataPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/PauseDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoPauseDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/PauseDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoPauseDataPipelineRun);
  }

  methodInfoResumeDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ResumeDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunRequest,
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunResponse.deserializeBinary
  );

  resumeDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunResponse>;

  resumeDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunResponse>;

  resumeDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datapipelinerun_v1_datapipelinerun_pb.ResumeDataPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ResumeDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoResumeDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ResumeDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoResumeDataPipelineRun);
  }

}

