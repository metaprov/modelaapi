/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.modelpipelinerun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelpipelinerun/v1/modelpipelinerun_pb';


export class ModelPipelineRunServiceClient {
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

  methodInfoListModelPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse.deserializeBinary
  );

  listModelPipelineRuns(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse>;

  listModelPipelineRuns(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse>;

  listModelPipelineRuns(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListModelPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListModelPipelineRuns);
  }

  methodInfoCreateModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse.deserializeBinary
  );

  createModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse>;

  createModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse>;

  createModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateModelPipelineRun);
  }

  methodInfoGetModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse.deserializeBinary
  );

  getModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse>;

  getModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse>;

  getModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetModelPipelineRun);
  }

  methodInfoUpdateModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse.deserializeBinary
  );

  updateModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse>;

  updateModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse>;

  updateModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateModelPipelineRun);
  }

  methodInfoDeleteModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse.deserializeBinary
  );

  deleteModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse>;

  deleteModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse>;

  deleteModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteModelPipelineRun);
  }

  methodInfoApproveModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunResponse.deserializeBinary
  );

  approveModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunResponse>;

  approveModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunResponse>;

  approveModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ApproveModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ApproveModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoApproveModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ApproveModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoApproveModelPipelineRun);
  }

  methodInfoDenyModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunResponse.deserializeBinary
  );

  denyModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunResponse>;

  denyModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunResponse>;

  denyModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DenyModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/DenyModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoDenyModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/DenyModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoDenyModelPipelineRun);
  }

  methodInfoAbortModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunResponse.deserializeBinary
  );

  abortModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunResponse>;

  abortModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunResponse>;

  abortModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.AbortModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/AbortModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoAbortModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/AbortModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoAbortModelPipelineRun);
  }

  methodInfoPauseModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunResponse.deserializeBinary
  );

  pauseModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunResponse>;

  pauseModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunResponse>;

  pauseModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.PauseModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/PauseModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoPauseModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/PauseModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoPauseModelPipelineRun);
  }

  methodInfoResumeModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunResponse.deserializeBinary
  );

  resumeModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunResponse>;

  resumeModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunResponse>;

  resumeModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ResumeModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ResumeModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoResumeModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ResumeModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoResumeModelPipelineRun);
  }

}

