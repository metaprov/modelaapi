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

  methodInfoSync = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/Sync',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncRequest,
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncResponse,
    (request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncResponse.deserializeBinary
  );

  sync(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncResponse>;

  sync(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncResponse>;

  sync(
    request: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.SyncResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/Sync',
        request,
        metadata || {},
        this.methodInfoSync,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/Sync',
    request,
    metadata || {},
    this.methodInfoSync);
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

