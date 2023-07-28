/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.batchpredictord.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: github.com/metaprov/modelaapi/services/batchpredictord/v1/batchpredictord.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb from '../../../../../../github.com/metaprov/modelaapi/services/batchpredictord/v1/batchpredictord_pb';


export class BatchClient {
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

  methodDescriptorBatchPredict = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/BatchPredict',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictRequest,
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse,
    (request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse.deserializeBinary
  );

  batchPredict(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse>;

  batchPredict(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse>;

  batchPredict(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/BatchPredict',
        request,
        metadata || {},
        this.methodDescriptorBatchPredict,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/BatchPredict',
    request,
    metadata || {},
    this.methodDescriptorBatchPredict);
  }

  methodDescriptorBatchPredictModelClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/BatchPredictModelClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictModelClassRequest,
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse,
    (request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictModelClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse.deserializeBinary
  );

  batchPredictModelClass(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse>;

  batchPredictModelClass(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse>;

  batchPredictModelClass(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.BatchPredictResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/BatchPredictModelClass',
        request,
        metadata || {},
        this.methodDescriptorBatchPredictModelClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/BatchPredictModelClass',
    request,
    metadata || {},
    this.methodDescriptorBatchPredictModelClass);
  }

  methodDescriptorShutdown = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/Shutdown',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownRequest,
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownResponse,
    (request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownResponse.deserializeBinary
  );

  shutdown(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutdownResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/Shutdown',
        request,
        metadata || {},
        this.methodDescriptorShutdown,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/Shutdown',
    request,
    metadata || {},
    this.methodDescriptorShutdown);
  }

}

