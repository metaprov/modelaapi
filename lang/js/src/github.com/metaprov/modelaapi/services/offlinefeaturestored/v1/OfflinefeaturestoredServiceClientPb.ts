/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.offlinefeaturestored.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb from '../../../../../../github.com/metaprov/modelaapi/services/offlinefeaturestored/v1/offlinefeaturestored_pb';


export class OfflineFeatureStoreServiceClient {
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

  methodInfoCreateFeature = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/CreateFeature',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureRequest,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse,
    (request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse.deserializeBinary
  );

  createFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse>;

  createFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse>;

  createFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/CreateFeature',
        request,
        metadata || {},
        this.methodInfoCreateFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/CreateFeature',
    request,
    metadata || {},
    this.methodInfoCreateFeature);
  }

  methodInfoDeleteFeature = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/DeleteFeature',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureRequest,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse,
    (request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse.deserializeBinary
  );

  deleteFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse>;

  deleteFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse>;

  deleteFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/DeleteFeature',
        request,
        metadata || {},
        this.methodInfoDeleteFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/DeleteFeature',
    request,
    metadata || {},
    this.methodInfoDeleteFeature);
  }

  methodInfoUpdateFeature = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/UpdateFeature',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureRequest,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse,
    (request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse.deserializeBinary
  );

  updateFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse>;

  updateFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse>;

  updateFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/UpdateFeature',
        request,
        metadata || {},
        this.methodInfoUpdateFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/UpdateFeature',
    request,
    metadata || {},
    this.methodInfoUpdateFeature);
  }

  methodInfoListFeatures = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/ListFeatures',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesRequest,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse,
    (request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse.deserializeBinary
  );

  listFeatures(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse>;

  listFeatures(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse>;

  listFeatures(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/ListFeatures',
        request,
        metadata || {},
        this.methodInfoListFeatures,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/ListFeatures',
    request,
    metadata || {},
    this.methodInfoListFeatures);
  }

  methodInfoGetFeature = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GetFeature',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureRequest,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse,
    (request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse.deserializeBinary
  );

  getFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse>;

  getFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse>;

  getFeature(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GetFeature',
        request,
        metadata || {},
        this.methodInfoGetFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GetFeature',
    request,
    metadata || {},
    this.methodInfoGetFeature);
  }

  methodInfoGenerateTrainingDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GenerateTrainingDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetRequest,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse.deserializeBinary
  );

  generateTrainingDataset(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse>;

  generateTrainingDataset(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse>;

  generateTrainingDataset(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GenerateTrainingDataset',
        request,
        metadata || {},
        this.methodInfoGenerateTrainingDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GenerateTrainingDataset',
    request,
    metadata || {},
    this.methodInfoGenerateTrainingDataset);
  }

}

