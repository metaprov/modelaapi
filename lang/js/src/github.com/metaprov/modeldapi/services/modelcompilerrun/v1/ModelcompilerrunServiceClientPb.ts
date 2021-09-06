/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.modelcompilerrun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb from '../../../../../../github.com/metaprov/modelaapi/services/modelcompilerrun/v1/modelcompilerrun_pb';


export class ModelCompilerRunServiceClient {
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

  methodInfoListModelCompilerRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsResponse,
    (request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsResponse.deserializeBinary
  );

  listModelCompilerRuns(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsResponse>;

  listModelCompilerRuns(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsResponse>;

  listModelCompilerRuns(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.ListModelCompilerRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/ListModelCompilerRuns',
        request,
        metadata || {},
        this.methodInfoListModelCompilerRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/ListModelCompilerRuns',
    request,
    metadata || {},
    this.methodInfoListModelCompilerRuns);
  }

  methodInfoCreateModelCompilerRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunResponse.deserializeBinary
  );

  createModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunResponse>;

  createModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunResponse>;

  createModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.CreateModelCompilerRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/CreateModelCompilerRun',
        request,
        metadata || {},
        this.methodInfoCreateModelCompilerRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/CreateModelCompilerRun',
    request,
    metadata || {},
    this.methodInfoCreateModelCompilerRun);
  }

  methodInfoGetModelCompilerRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunResponse.deserializeBinary
  );

  getModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunResponse>;

  getModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunResponse>;

  getModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.GetModelCompilerRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/GetModelCompilerRun',
        request,
        metadata || {},
        this.methodInfoGetModelCompilerRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/GetModelCompilerRun',
    request,
    metadata || {},
    this.methodInfoGetModelCompilerRun);
  }

  methodInfoUpdateModelCompilerRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunResponse.deserializeBinary
  );

  updateModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunResponse>;

  updateModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunResponse>;

  updateModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.UpdateModelCompilerRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/UpdateModelCompilerRun',
        request,
        metadata || {},
        this.methodInfoUpdateModelCompilerRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/UpdateModelCompilerRun',
    request,
    metadata || {},
    this.methodInfoUpdateModelCompilerRun);
  }

  methodInfoDeleteModelCompilerRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunResponse.deserializeBinary
  );

  deleteModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunResponse>;

  deleteModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunResponse>;

  deleteModelCompilerRun(
    request: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_modelcompilerrun_v1_modelcompilerrun_pb.DeleteModelCompilerRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/DeleteModelCompilerRun',
        request,
        metadata || {},
        this.methodInfoDeleteModelCompilerRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelcompilerrun.v1.ModelCompilerRunService/DeleteModelCompilerRun',
    request,
    metadata || {},
    this.methodInfoDeleteModelCompilerRun);
  }

}

