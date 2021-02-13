/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.onlinefeaturestored.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb from '../../../../../../github.com/metaprov/modeldapi/services/onlinefeaturestored/v1/onlinefeaturestored_pb';


export class OnlineFeatureStoreServiceClient {
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

  methodInfoCreateFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse,
    (request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse.deserializeBinary
  );

  createFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse>;

  createFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse>;

  createFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/CreateFeature',
        request,
        metadata || {},
        this.methodInfoCreateFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/CreateFeature',
    request,
    metadata || {},
    this.methodInfoCreateFeature);
  }

  methodInfoDeleteFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse,
    (request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse.deserializeBinary
  );

  deleteFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse>;

  deleteFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse>;

  deleteFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/DeleteFeature',
        request,
        metadata || {},
        this.methodInfoDeleteFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/DeleteFeature',
    request,
    metadata || {},
    this.methodInfoDeleteFeature);
  }

  methodInfoListFeatures = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse,
    (request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse.deserializeBinary
  );

  listFeatures(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse>;

  listFeatures(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse>;

  listFeatures(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/ListFeatures',
        request,
        metadata || {},
        this.methodInfoListFeatures,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/ListFeatures',
    request,
    metadata || {},
    this.methodInfoListFeatures);
  }

  methodInfoGetFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse,
    (request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse.deserializeBinary
  );

  getFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse>;

  getFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse>;

  getFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/GetFeature',
        request,
        metadata || {},
        this.methodInfoGetFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/GetFeature',
    request,
    metadata || {},
    this.methodInfoGetFeature);
  }

  methodInfoUpdateFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse,
    (request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse.deserializeBinary
  );

  updateFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse>;

  updateFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse>;

  updateFeature(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/UpdateFeature',
        request,
        metadata || {},
        this.methodInfoUpdateFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/UpdateFeature',
    request,
    metadata || {},
    this.methodInfoUpdateFeature);
  }

  methodInfoEnrich = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse,
    (request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse.deserializeBinary
  );

  enrich(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse>;

  enrich(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse>;

  enrich(
    request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Enrich',
        request,
        metadata || {},
        this.methodInfoEnrich,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Enrich',
    request,
    metadata || {},
    this.methodInfoEnrich);
  }

}

