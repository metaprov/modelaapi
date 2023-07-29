/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.watcherd.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: github.com/metaprov/modelaapi/services/watcherd/v1/watcherd.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb from '../../../../../../github.com/metaprov/modelaapi/services/watcherd/v1/watcherd_pb';


export class WatcherdServiceClient {
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
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorWatchDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.watcherd.v1.WatcherdService/WatchDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetRequest,
    github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetResponse.deserializeBinary
  );

  watchDataset(
    request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetResponse>;

  watchDataset(
    request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetResponse>;

  watchDataset(
    request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.watcherd.v1.WatcherdService/WatchDataset',
        request,
        metadata || {},
        this.methodDescriptorWatchDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.watcherd.v1.WatcherdService/WatchDataset',
    request,
    metadata || {},
    this.methodDescriptorWatchDataset);
  }

  methodDescriptorWatchModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.watcherd.v1.WatcherdService/WatchModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelRequest,
    github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelResponse,
    (request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelResponse.deserializeBinary
  );

  watchModel(
    request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelResponse>;

  watchModel(
    request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelResponse>;

  watchModel(
    request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.watcherd.v1.WatcherdService/WatchModel',
        request,
        metadata || {},
        this.methodDescriptorWatchModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.watcherd.v1.WatcherdService/WatchModel',
    request,
    metadata || {},
    this.methodDescriptorWatchModel);
  }

  methodDescriptorWatchAlert = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.watcherd.v1.WatcherdService/WatchAlert',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertRequest,
    github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertResponse,
    (request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertResponse.deserializeBinary
  );

  watchAlert(
    request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertResponse>;

  watchAlert(
    request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertResponse>;

  watchAlert(
    request: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_watcherd_v1_watcherd_pb.WatchAlertResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.watcherd.v1.WatcherdService/WatchAlert',
        request,
        metadata || {},
        this.methodDescriptorWatchAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.watcherd.v1.WatcherdService/WatchAlert',
    request,
    metadata || {},
    this.methodDescriptorWatchAlert);
  }

}

