/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.publisherd.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb from '../../../../../../github.com/metaprov/modelaapi/services/publisherd/v1/publisherd_pb';


export class PublisherdServiceClient {
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

  methodInfoPackageModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/PackageModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelRequest,
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelResponse,
    (request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelResponse.deserializeBinary
  );

  packageModel(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelResponse>;

  packageModel(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelResponse>;

  packageModel(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PackageModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/PackageModel',
        request,
        metadata || {},
        this.methodInfoPackageModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/PackageModel',
    request,
    metadata || {},
    this.methodInfoPackageModel);
  }

  methodInfoPublishModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/PublishModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelRequest,
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelResponse,
    (request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelResponse.deserializeBinary
  );

  publishModel(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelResponse>;

  publishModel(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelResponse>;

  publishModel(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/PublishModel',
        request,
        metadata || {},
        this.methodInfoPublishModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/PublishModel',
    request,
    metadata || {},
    this.methodInfoPublishModel);
  }

  methodInfoPublishNotebook = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/PublishNotebook',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookRequest,
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse,
    (request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse.deserializeBinary
  );

  publishNotebook(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse>;

  publishNotebook(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse>;

  publishNotebook(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/PublishNotebook',
        request,
        metadata || {},
        this.methodInfoPublishNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/PublishNotebook',
    request,
    metadata || {},
    this.methodInfoPublishNotebook);
  }

  methodInfoShutdown = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/Shutdown',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownRequest,
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownResponse,
    (request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownResponse.deserializeBinary
  );

  shutdown(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_publisherd_v1_publisherd_pb.ShutdownResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/Shutdown',
        request,
        metadata || {},
        this.methodInfoShutdown,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.publisherd.v1.PublisherdService/Shutdown',
    request,
    metadata || {},
    this.methodInfoShutdown);
  }

}

