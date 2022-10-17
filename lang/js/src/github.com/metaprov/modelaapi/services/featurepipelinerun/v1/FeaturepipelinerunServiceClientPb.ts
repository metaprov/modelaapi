/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.featurepipelinerun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb from '../../../../../../github.com/metaprov/modelaapi/services/featurepipelinerun/v1/featurepipelinerun_pb';


export class FeaturesetServiceClient {
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

  methodInfoListFeaturesets = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/ListFeaturesets',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetRequest,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetResponse.deserializeBinary
  );

  listFeaturesets(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetResponse>;

  listFeaturesets(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetResponse>;

  listFeaturesets(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/ListFeaturesets',
        request,
        metadata || {},
        this.methodInfoListFeaturesets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/ListFeaturesets',
    request,
    metadata || {},
    this.methodInfoListFeaturesets);
  }

  methodInfoCreateFeatureset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/CreateFeatureset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetRequest,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetResponse.deserializeBinary
  );

  createFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetResponse>;

  createFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetResponse>;

  createFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/CreateFeatureset',
        request,
        metadata || {},
        this.methodInfoCreateFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/CreateFeatureset',
    request,
    metadata || {},
    this.methodInfoCreateFeatureset);
  }

  methodInfoGetFeatureset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/GetFeatureset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetRequest,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetResponse.deserializeBinary
  );

  getFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetResponse>;

  getFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetResponse>;

  getFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/GetFeatureset',
        request,
        metadata || {},
        this.methodInfoGetFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/GetFeatureset',
    request,
    metadata || {},
    this.methodInfoGetFeatureset);
  }

  methodInfoUpdateFeatureset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/UpdateFeatureset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetRequest,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetResponse.deserializeBinary
  );

  updateFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetResponse>;

  updateFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetResponse>;

  updateFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/UpdateFeatureset',
        request,
        metadata || {},
        this.methodInfoUpdateFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/UpdateFeatureset',
    request,
    metadata || {},
    this.methodInfoUpdateFeatureset);
  }

  methodInfoDeleteFeatureset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/DeleteFeatureset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetRequest,
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetResponse.deserializeBinary
  );

  deleteFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetResponse>;

  deleteFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetResponse>;

  deleteFeatureset(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/DeleteFeatureset',
        request,
        metadata || {},
        this.methodInfoDeleteFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturesetService/DeleteFeatureset',
    request,
    metadata || {},
    this.methodInfoDeleteFeatureset);
  }

}

