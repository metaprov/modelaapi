/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.feature.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_feature_v1_feature_pb from '../../../../../../github.com/metaprov/modelaapi/services/feature/v1/feature_pb';


export class FeatureServiceClient {
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

  methodInfoListFeatures = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesResponse,
    (request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesResponse.deserializeBinary
  );

  listFeatures(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesResponse>;

  listFeatures(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesResponse>;

  listFeatures(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.ListFeaturesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/ListFeatures',
        request,
        metadata || {},
        this.methodInfoListFeatures,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/ListFeatures',
    request,
    metadata || {},
    this.methodInfoListFeatures);
  }

  methodInfoCreateFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureResponse,
    (request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureResponse.deserializeBinary
  );

  createFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureResponse>;

  createFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureResponse>;

  createFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.CreateFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/CreateFeature',
        request,
        metadata || {},
        this.methodInfoCreateFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/CreateFeature',
    request,
    metadata || {},
    this.methodInfoCreateFeature);
  }

  methodInfoGetFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureResponse,
    (request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureResponse.deserializeBinary
  );

  getFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureResponse>;

  getFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureResponse>;

  getFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.GetFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/GetFeature',
        request,
        metadata || {},
        this.methodInfoGetFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/GetFeature',
    request,
    metadata || {},
    this.methodInfoGetFeature);
  }

  methodInfoUpdateFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureResponse,
    (request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureResponse.deserializeBinary
  );

  updateFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureResponse>;

  updateFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureResponse>;

  updateFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.UpdateFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/UpdateFeature',
        request,
        metadata || {},
        this.methodInfoUpdateFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/UpdateFeature',
    request,
    metadata || {},
    this.methodInfoUpdateFeature);
  }

  methodInfoDeleteFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureResponse,
    (request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureResponse.deserializeBinary
  );

  deleteFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureResponse>;

  deleteFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureResponse>;

  deleteFeature(
    request: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_feature_v1_feature_pb.DeleteFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/DeleteFeature',
        request,
        metadata || {},
        this.methodInfoDeleteFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.feature.v1.FeatureService/DeleteFeature',
    request,
    metadata || {},
    this.methodInfoDeleteFeature);
  }

}

