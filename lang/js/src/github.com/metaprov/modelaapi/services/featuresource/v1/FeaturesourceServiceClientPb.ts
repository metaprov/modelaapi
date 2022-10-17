/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.featureSource.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb from '../../../../../../github.com/metaprov/modelaapi/services/featuresource/v1/featuresource_pb';


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
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/ListFeaturesetClasss',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassResponse.deserializeBinary
  );

  listFeaturesetClasss(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassResponse>;

  listFeaturesetClasss(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassResponse>;

  listFeaturesetClasss(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.ListFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/ListFeaturesetClasss',
        request,
        metadata || {},
        this.methodInfoListFeaturesetClasss,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/ListFeaturesetClasss',
    request,
    metadata || {},
    this.methodInfoListFeaturesetClasss);
  }

  methodInfoCreateFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/CreateFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassResponse.deserializeBinary
  );

  createFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassResponse>;

  createFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassResponse>;

  createFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.CreateFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/CreateFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoCreateFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/CreateFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoCreateFeaturesetClass);
  }

  methodInfoGetFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/GetFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassResponse.deserializeBinary
  );

  getFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassResponse>;

  getFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassResponse>;

  getFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.GetFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/GetFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoGetFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/GetFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoGetFeaturesetClass);
  }

  methodInfoUpdateFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/UpdateFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassResponse.deserializeBinary
  );

  updateFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassResponse>;

  updateFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassResponse>;

  updateFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.UpdateFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/UpdateFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoUpdateFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/UpdateFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoUpdateFeaturesetClass);
  }

  methodInfoDeleteFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/DeleteFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassResponse.deserializeBinary
  );

  deleteFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassResponse>;

  deleteFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassResponse>;

  deleteFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuresource_v1_featuresource_pb.DeleteFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/DeleteFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoDeleteFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeaturesetClassService/DeleteFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoDeleteFeaturesetClass);
  }

}

