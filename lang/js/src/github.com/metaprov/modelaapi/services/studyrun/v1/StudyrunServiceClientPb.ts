/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.study.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: github.com/metaprov/modelaapi/services/studyrun/v1/studyrun.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb from '../../../../../../github.com/metaprov/modelaapi/services/studyrun/v1/studyrun_pb';


export class StudyRunServiceClient {
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
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListStudyRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/ListStudyRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunResponse.deserializeBinary
  );

  listStudyRuns(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunResponse>;

  listStudyRuns(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunResponse>;

  listStudyRuns(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ListStudyRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/ListStudyRuns',
        request,
        metadata || {},
        this.methodDescriptorListStudyRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/ListStudyRuns',
    request,
    metadata || {},
    this.methodDescriptorListStudyRuns);
  }

  methodDescriptorCreateStudyRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/CreateStudyRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunResponse.deserializeBinary
  );

  createStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunResponse>;

  createStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunResponse>;

  createStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CreateStudyRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/CreateStudyRun',
        request,
        metadata || {},
        this.methodDescriptorCreateStudyRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/CreateStudyRun',
    request,
    metadata || {},
    this.methodDescriptorCreateStudyRun);
  }

  methodDescriptorGetStudyRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/GetStudyRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunResponse.deserializeBinary
  );

  getStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunResponse>;

  getStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunResponse>;

  getStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/GetStudyRun',
        request,
        metadata || {},
        this.methodDescriptorGetStudyRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/GetStudyRun',
    request,
    metadata || {},
    this.methodDescriptorGetStudyRun);
  }

  methodDescriptorUpdateStudyRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/UpdateStudyRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunResponse.deserializeBinary
  );

  updateStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunResponse>;

  updateStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunResponse>;

  updateStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.UpdateStudyRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/UpdateStudyRun',
        request,
        metadata || {},
        this.methodDescriptorUpdateStudyRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/UpdateStudyRun',
    request,
    metadata || {},
    this.methodDescriptorUpdateStudyRun);
  }

  methodDescriptorDeleteStudyRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/DeleteStudyRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunResponse.deserializeBinary
  );

  deleteStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunResponse>;

  deleteStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunResponse>;

  deleteStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.DeleteStudyRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/DeleteStudyRun',
        request,
        metadata || {},
        this.methodDescriptorDeleteStudyRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/DeleteStudyRun',
    request,
    metadata || {},
    this.methodDescriptorDeleteStudyRun);
  }

  methodDescriptorGetStudyRunProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/GetStudyRunProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileResponse.deserializeBinary
  );

  getStudyRunProfile(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileResponse>;

  getStudyRunProfile(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileResponse>;

  getStudyRunProfile(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.GetStudyRunProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/GetStudyRunProfile',
        request,
        metadata || {},
        this.methodDescriptorGetStudyRunProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/GetStudyRunProfile',
    request,
    metadata || {},
    this.methodDescriptorGetStudyRunProfile);
  }

  methodDescriptorAbortStudyRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/AbortStudyRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunResponse.deserializeBinary
  );

  abortStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunResponse>;

  abortStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunResponse>;

  abortStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.AbortStudyRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/AbortStudyRun',
        request,
        metadata || {},
        this.methodDescriptorAbortStudyRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/AbortStudyRun',
    request,
    metadata || {},
    this.methodDescriptorAbortStudyRun);
  }

  methodDescriptorPauseStudyRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/PauseStudyRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunResponse.deserializeBinary
  );

  pauseStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunResponse>;

  pauseStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunResponse>;

  pauseStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.PauseStudyRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/PauseStudyRun',
        request,
        metadata || {},
        this.methodDescriptorPauseStudyRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/PauseStudyRun',
    request,
    metadata || {},
    this.methodDescriptorPauseStudyRun);
  }

  methodDescriptorResumeStudyRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/ResumeStudyRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunResponse.deserializeBinary
  );

  resumeStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunResponse>;

  resumeStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunResponse>;

  resumeStudyRun(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.ResumeStudyRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/ResumeStudyRun',
        request,
        metadata || {},
        this.methodDescriptorResumeStudyRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/ResumeStudyRun',
    request,
    metadata || {},
    this.methodDescriptorResumeStudyRun);
  }

  methodDescriptorCompleteSearch = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/CompleteSearch',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchRequest,
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchResponse,
    (request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchResponse.deserializeBinary
  );

  completeSearch(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchResponse>;

  completeSearch(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchResponse>;

  completeSearch(
    request: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_studyrun_v1_studyrun_pb.CompleteStudyRunSearchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/CompleteSearch',
        request,
        metadata || {},
        this.methodDescriptorCompleteSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.StudyRunService/CompleteSearch',
    request,
    metadata || {},
    this.methodDescriptorCompleteSearch);
  }

}

