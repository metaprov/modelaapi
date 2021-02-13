/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.featureset.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb from '../../../../../../github.com/metaprov/modeldapi/services/featureset/v1/featureset_pb';


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

  methodInfoListFeaturesets = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse,
    (request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse.deserializeBinary
  );

  listFeaturesets(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse>;

  listFeaturesets(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse>;

  listFeaturesets(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/ListFeaturesets',
        request,
        metadata || {},
        this.methodInfoListFeaturesets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/ListFeaturesets',
    request,
    metadata || {},
    this.methodInfoListFeaturesets);
  }

  methodInfoCreateFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse,
    (request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse.deserializeBinary
  );

  createFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse>;

  createFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse>;

  createFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/CreateFeatureset',
        request,
        metadata || {},
        this.methodInfoCreateFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/CreateFeatureset',
    request,
    metadata || {},
    this.methodInfoCreateFeatureset);
  }

  methodInfoGetFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse,
    (request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse.deserializeBinary
  );

  getFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse>;

  getFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse>;

  getFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/GetFeatureset',
        request,
        metadata || {},
        this.methodInfoGetFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/GetFeatureset',
    request,
    metadata || {},
    this.methodInfoGetFeatureset);
  }

  methodInfoUpdateFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse,
    (request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse.deserializeBinary
  );

  updateFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse>;

  updateFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse>;

  updateFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/UpdateFeatureset',
        request,
        metadata || {},
        this.methodInfoUpdateFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/UpdateFeatureset',
    request,
    metadata || {},
    this.methodInfoUpdateFeatureset);
  }

  methodInfoDeleteFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse,
    (request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse.deserializeBinary
  );

  deleteFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse>;

  deleteFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse>;

  deleteFeatureset(
    request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/DeleteFeatureset',
        request,
        metadata || {},
        this.methodInfoDeleteFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/DeleteFeatureset',
    request,
    metadata || {},
    this.methodInfoDeleteFeatureset);
  }

}

