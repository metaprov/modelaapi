/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.featureSource.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb from '../../../../../../github.com/metaprov/modelaapi/services/featureSource/v1/featureSource_pb';


export class FeatureSourceServiceClient {
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

  methodInfoListFeatureSources = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/ListFeatureSources',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceRequest,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceResponse,
    (request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceResponse.deserializeBinary
  );

  listFeatureSources(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceResponse>;

  listFeatureSources(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceResponse>;

  listFeatureSources(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.ListFeatureSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/ListFeatureSources',
        request,
        metadata || {},
        this.methodInfoListFeatureSources,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/ListFeatureSources',
    request,
    metadata || {},
    this.methodInfoListFeatureSources);
  }

  methodInfoCreateFeatureSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/CreateFeatureSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceRequest,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceResponse,
    (request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceResponse.deserializeBinary
  );

  createFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceResponse>;

  createFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceResponse>;

  createFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.CreateFeatureSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/CreateFeatureSource',
        request,
        metadata || {},
        this.methodInfoCreateFeatureSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/CreateFeatureSource',
    request,
    metadata || {},
    this.methodInfoCreateFeatureSource);
  }

  methodInfoGetFeatureSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/GetFeatureSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceRequest,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceResponse,
    (request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceResponse.deserializeBinary
  );

  getFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceResponse>;

  getFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceResponse>;

  getFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.GetFeatureSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/GetFeatureSource',
        request,
        metadata || {},
        this.methodInfoGetFeatureSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/GetFeatureSource',
    request,
    metadata || {},
    this.methodInfoGetFeatureSource);
  }

  methodInfoUpdateFeatureSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/UpdateFeatureSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceRequest,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceResponse,
    (request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceResponse.deserializeBinary
  );

  updateFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceResponse>;

  updateFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceResponse>;

  updateFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.UpdateFeatureSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/UpdateFeatureSource',
        request,
        metadata || {},
        this.methodInfoUpdateFeatureSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/UpdateFeatureSource',
    request,
    metadata || {},
    this.methodInfoUpdateFeatureSource);
  }

  methodInfoDeleteFeatureSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/DeleteFeatureSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceRequest,
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceResponse,
    (request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceResponse.deserializeBinary
  );

  deleteFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceResponse>;

  deleteFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceResponse>;

  deleteFeatureSource(
    request: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureSource_v1_featureSource_pb.DeleteFeatureSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/DeleteFeatureSource',
        request,
        metadata || {},
        this.methodInfoDeleteFeatureSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureSource.v1.FeatureSourceService/DeleteFeatureSource',
    request,
    metadata || {},
    this.methodInfoDeleteFeatureSource);
  }

}

