/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.study.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_study_v1_study_pb from '../../../../../../github.com/metaprov/modeldapi/services/study/v1/study_pb';


export class StudyServiceClient {
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

  methodInfoListStudies = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse.deserializeBinary
  );

  listStudies(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse>;

  listStudies(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse>;

  listStudies(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ListStudies',
        request,
        metadata || {},
        this.methodInfoListStudies,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ListStudies',
    request,
    metadata || {},
    this.methodInfoListStudies);
  }

  methodInfoCreateStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse.deserializeBinary
  );

  createStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse>;

  createStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse>;

  createStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudy',
        request,
        metadata || {},
        this.methodInfoCreateStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudy',
    request,
    metadata || {},
    this.methodInfoCreateStudy);
  }

  methodInfoGetStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse.deserializeBinary
  );

  getStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse>;

  getStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse>;

  getStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudy',
        request,
        metadata || {},
        this.methodInfoGetStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudy',
    request,
    metadata || {},
    this.methodInfoGetStudy);
  }

  methodInfoUpdateStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse.deserializeBinary
  );

  updateStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse>;

  updateStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse>;

  updateStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/UpdateStudy',
        request,
        metadata || {},
        this.methodInfoUpdateStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/UpdateStudy',
    request,
    metadata || {},
    this.methodInfoUpdateStudy);
  }

  methodInfoDeleteStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse.deserializeBinary
  );

  deleteStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse>;

  deleteStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse>;

  deleteStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/DeleteStudy',
        request,
        metadata || {},
        this.methodInfoDeleteStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/DeleteStudy',
    request,
    metadata || {},
    this.methodInfoDeleteStudy);
  }

  methodInfoCreateStudyProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse.deserializeBinary
  );

  createStudyProfile(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse>;

  createStudyProfile(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse>;

  createStudyProfile(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudyProfile',
        request,
        metadata || {},
        this.methodInfoCreateStudyProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudyProfile',
    request,
    metadata || {},
    this.methodInfoCreateStudyProfile);
  }

  methodInfoGetStudyProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse.deserializeBinary
  );

  getStudyProfile(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse>;

  getStudyProfile(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse>;

  getStudyProfile(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudyProfile',
        request,
        metadata || {},
        this.methodInfoGetStudyProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudyProfile',
    request,
    metadata || {},
    this.methodInfoGetStudyProfile);
  }

  methodInfoAbortStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse.deserializeBinary
  );

  abortStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse>;

  abortStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse>;

  abortStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/AbortStudy',
        request,
        metadata || {},
        this.methodInfoAbortStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/AbortStudy',
    request,
    metadata || {},
    this.methodInfoAbortStudy);
  }

  methodInfoPauseStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse.deserializeBinary
  );

  pauseStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse>;

  pauseStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse>;

  pauseStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/PauseStudy',
        request,
        metadata || {},
        this.methodInfoPauseStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/PauseStudy',
    request,
    metadata || {},
    this.methodInfoPauseStudy);
  }

  methodInfoResumeStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse.deserializeBinary
  );

  resumeStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse>;

  resumeStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse>;

  resumeStudy(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ResumeStudy',
        request,
        metadata || {},
        this.methodInfoResumeStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ResumeStudy',
    request,
    metadata || {},
    this.methodInfoResumeStudy);
  }

  methodInfoStudyEnded = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedResponse,
    (request: github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedResponse.deserializeBinary
  );

  studyEnded(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedResponse>;

  studyEnded(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedResponse>;

  studyEnded(
    request: github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_study_v1_study_pb.StudyEndedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.study.v1.StudyService/StudyEnded',
        request,
        metadata || {},
        this.methodInfoStudyEnded,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.study.v1.StudyService/StudyEnded',
    request,
    metadata || {},
    this.methodInfoStudyEnded);
  }

}

