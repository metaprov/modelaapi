/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.batchpredictord.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoBatchPredict = new grpcWeb.MethodDescriptor(
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
        this.methodInfoBatchPredict,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/BatchPredict',
    request,
    metadata || {},
    this.methodInfoBatchPredict);
  }

  methodInfoShutdown = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/Shutdown',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest,
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest,
    (request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest.deserializeBinary
  );

  shutdown(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_batchpredictord_v1_batchpredictord_pb.ShutDownRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/Shutdown',
        request,
        metadata || {},
        this.methodInfoShutdown,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch/Shutdown',
    request,
    metadata || {},
    this.methodInfoShutdown);
  }

}

