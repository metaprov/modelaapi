/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.modelclassrun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb from '../../../../../../github.com/metaprov/modelaapi/services/modelclassrun/v1/modelclassrun_pb';


export class ModelClassRunServiceClient {
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

  methodInfoListModelClassRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ListModelClassRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsResponse.deserializeBinary
  );

  listModelClassRuns(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsResponse>;

  listModelClassRuns(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsResponse>;

  listModelClassRuns(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ListModelClassRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ListModelClassRuns',
        request,
        metadata || {},
        this.methodInfoListModelClassRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ListModelClassRuns',
    request,
    metadata || {},
    this.methodInfoListModelClassRuns);
  }

  methodInfoCreateModelClassRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/CreateModelClassRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunResponse.deserializeBinary
  );

  createModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunResponse>;

  createModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunResponse>;

  createModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.CreateModelClassRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/CreateModelClassRun',
        request,
        metadata || {},
        this.methodInfoCreateModelClassRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/CreateModelClassRun',
    request,
    metadata || {},
    this.methodInfoCreateModelClassRun);
  }

  methodInfoGetModelClassRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/GetModelClassRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunResponse.deserializeBinary
  );

  getModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunResponse>;

  getModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunResponse>;

  getModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.GetModelClassRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/GetModelClassRun',
        request,
        metadata || {},
        this.methodInfoGetModelClassRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/GetModelClassRun',
    request,
    metadata || {},
    this.methodInfoGetModelClassRun);
  }

  methodInfoUpdateModelClassRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/UpdateModelClassRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunResponse.deserializeBinary
  );

  updateModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunResponse>;

  updateModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunResponse>;

  updateModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.UpdateModelClassRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/UpdateModelClassRun',
        request,
        metadata || {},
        this.methodInfoUpdateModelClassRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/UpdateModelClassRun',
    request,
    metadata || {},
    this.methodInfoUpdateModelClassRun);
  }

  methodInfoDeleteModelClassRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DeleteModelClassRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunResponse.deserializeBinary
  );

  deleteModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunResponse>;

  deleteModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunResponse>;

  deleteModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DeleteModelClassRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DeleteModelClassRun',
        request,
        metadata || {},
        this.methodInfoDeleteModelClassRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DeleteModelClassRun',
    request,
    metadata || {},
    this.methodInfoDeleteModelClassRun);
  }

  methodInfoApproveModelClassRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ApproveModelClassRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunResponse.deserializeBinary
  );

  approveModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunResponse>;

  approveModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunResponse>;

  approveModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ApproveModelClassRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ApproveModelClassRun',
        request,
        metadata || {},
        this.methodInfoApproveModelClassRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ApproveModelClassRun',
    request,
    metadata || {},
    this.methodInfoApproveModelClassRun);
  }

  methodInfoDenyModelClassRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DenyModelClassRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunResponse.deserializeBinary
  );

  denyModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunResponse>;

  denyModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunResponse>;

  denyModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.DenyModelClassRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DenyModelClassRun',
        request,
        metadata || {},
        this.methodInfoDenyModelClassRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DenyModelClassRun',
    request,
    metadata || {},
    this.methodInfoDenyModelClassRun);
  }

  methodInfoAbortModelClassRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/AbortModelClassRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunResponse.deserializeBinary
  );

  abortModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunResponse>;

  abortModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunResponse>;

  abortModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.AbortModelClassRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/AbortModelClassRun',
        request,
        metadata || {},
        this.methodInfoAbortModelClassRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/AbortModelClassRun',
    request,
    metadata || {},
    this.methodInfoAbortModelClassRun);
  }

  methodInfoPauseModelClassRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/PauseModelClassRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunResponse.deserializeBinary
  );

  pauseModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunResponse>;

  pauseModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunResponse>;

  pauseModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.PauseModelClassRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/PauseModelClassRun',
        request,
        metadata || {},
        this.methodInfoPauseModelClassRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/PauseModelClassRun',
    request,
    metadata || {},
    this.methodInfoPauseModelClassRun);
  }

  methodInfoResumeModelClassRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ResumeModelClassRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunRequest,
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunResponse,
    (request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunResponse.deserializeBinary
  );

  resumeModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunResponse>;

  resumeModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunResponse>;

  resumeModelClassRun(
    request: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclassrun_v1_modelclassrun_pb.ResumeModelClassRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ResumeModelClassRun',
        request,
        metadata || {},
        this.methodInfoResumeModelClassRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ResumeModelClassRun',
    request,
    metadata || {},
    this.methodInfoResumeModelClassRun);
  }

}

