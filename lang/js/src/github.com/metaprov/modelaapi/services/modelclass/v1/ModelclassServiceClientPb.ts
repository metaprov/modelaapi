/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.study.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb from '../../../../../../github.com/metaprov/modelaapi/services/modelclass/v1/modelclass_pb';


export class ModelClassServiceClient {
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

  methodInfoListModelClasses = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/ListModelClasses',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassRequest,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassResponse,
    (request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassResponse.deserializeBinary
  );

  listModelClasses(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassResponse>;

  listModelClasses(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassResponse>;

  listModelClasses(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ListModelClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/ListModelClasses',
        request,
        metadata || {},
        this.methodInfoListModelClasses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/ListModelClasses',
    request,
    metadata || {},
    this.methodInfoListModelClasses);
  }

  methodInfoCreateModelClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassRequest,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassResponse,
    (request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassResponse.deserializeBinary
  );

  createModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassResponse>;

  createModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassResponse>;

  createModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClass',
        request,
        metadata || {},
        this.methodInfoCreateModelClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClass',
    request,
    metadata || {},
    this.methodInfoCreateModelClass);
  }

  methodInfoGetModelClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/GetModelClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassRequest,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassResponse,
    (request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassResponse.deserializeBinary
  );

  getModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassResponse>;

  getModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassResponse>;

  getModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.GetModelClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/GetModelClass',
        request,
        metadata || {},
        this.methodInfoGetModelClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/GetModelClass',
    request,
    metadata || {},
    this.methodInfoGetModelClass);
  }

  methodInfoUpdateModelClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/UpdateModelClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassRequest,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassResponse,
    (request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassResponse.deserializeBinary
  );

  updateModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassResponse>;

  updateModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassResponse>;

  updateModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.UpdateModelClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/UpdateModelClass',
        request,
        metadata || {},
        this.methodInfoUpdateModelClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/UpdateModelClass',
    request,
    metadata || {},
    this.methodInfoUpdateModelClass);
  }

  methodInfoDeleteModelClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/DeleteModelClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassRequest,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassResponse,
    (request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassResponse.deserializeBinary
  );

  deleteModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassResponse>;

  deleteModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassResponse>;

  deleteModelClass(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.DeleteModelClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/DeleteModelClass',
        request,
        metadata || {},
        this.methodInfoDeleteModelClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/DeleteModelClass',
    request,
    metadata || {},
    this.methodInfoDeleteModelClass);
  }

  methodInfoCreateModelClassProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClassProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileRequest,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileResponse,
    (request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileResponse.deserializeBinary
  );

  createModelClassProfile(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileResponse>;

  createModelClassProfile(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileResponse>;

  createModelClassProfile(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.CreateModelClassProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClassProfile',
        request,
        metadata || {},
        this.methodInfoCreateModelClassProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClassProfile',
    request,
    metadata || {},
    this.methodInfoCreateModelClassProfile);
  }

  methodInfoTrainNow = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/TrainNow',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowRequest,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowResponse,
    (request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowResponse.deserializeBinary
  );

  trainNow(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowResponse>;

  trainNow(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowResponse>;

  trainNow(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassTrainNowResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/TrainNow',
        request,
        metadata || {},
        this.methodInfoTrainNow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/TrainNow',
    request,
    metadata || {},
    this.methodInfoTrainNow);
  }

  methodInfoPredictNow = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/PredictNow',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowRequest,
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowResponse,
    (request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowResponse.deserializeBinary
  );

  predictNow(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowResponse>;

  predictNow(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowResponse>;

  predictNow(
    request: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelclass_v1_modelclass_pb.ModelClassPredictNowResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/PredictNow',
        request,
        metadata || {},
        this.methodInfoPredictNow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/PredictNow',
    request,
    metadata || {},
    this.methodInfoPredictNow);
  }

}

