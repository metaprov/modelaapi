/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.featuresetclass.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb from '../../../../../../github.com/metaprov/modelaapi/services/featuresetclass/v1/featuresetclass_pb';


export class FeaturesetClassServiceClient {
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

  methodInfoListFeaturesetClasss = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/ListFeaturesetClasss',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassResponse.deserializeBinary
  );

  listFeaturesetClasss(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassResponse>;

  listFeaturesetClasss(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassResponse>;

  listFeaturesetClasss(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ListFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/ListFeaturesetClasss',
        request,
        metadata || {},
        this.methodInfoListFeaturesetClasss,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/ListFeaturesetClasss',
    request,
    metadata || {},
    this.methodInfoListFeaturesetClasss);
  }

  methodInfoCreateFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/CreateFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassResponse.deserializeBinary
  );

  createFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassResponse>;

  createFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassResponse>;

  createFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.CreateFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/CreateFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoCreateFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/CreateFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoCreateFeaturesetClass);
  }

  methodInfoGetFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/GetFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassResponse.deserializeBinary
  );

  getFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassResponse>;

  getFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassResponse>;

  getFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.GetFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/GetFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoGetFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/GetFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoGetFeaturesetClass);
  }

  methodInfoUpdateFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/UpdateFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassResponse.deserializeBinary
  );

  updateFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassResponse>;

  updateFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassResponse>;

  updateFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.UpdateFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/UpdateFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoUpdateFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/UpdateFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoUpdateFeaturesetClass);
  }

  methodInfoDeleteFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/DeleteFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassResponse.deserializeBinary
  );

  deleteFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassResponse>;

  deleteFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassResponse>;

  deleteFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.DeleteFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/DeleteFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoDeleteFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/DeleteFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoDeleteFeaturesetClass);
  }

  methodInfoPauseFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/PauseFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassResponse.deserializeBinary
  );

  pauseFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassResponse>;

  pauseFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassResponse>;

  pauseFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.PauseFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/PauseFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoPauseFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/PauseFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoPauseFeaturesetClass);
  }

  methodInfoResumeFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/ResumeFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassResponse.deserializeBinary
  );

  resumeFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassResponse>;

  resumeFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassResponse>;

  resumeFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresetclass_v1_featuresetclass_pb.ResumeFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/ResumeFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoResumeFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuresetclass.v1.FeaturesetClassService/ResumeFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoResumeFeaturesetClass);
  }

}

