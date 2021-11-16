/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.modelautobuilder.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb from '../../../../../../github.com/metaprov/modelaapi/services/modelautobuilder/v1/modelautobuilder_pb';


export class ModelAutobuilderServiceClient {
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

  methodInfoListModelAutobuilders = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/ListModelAutobuilders',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersRequest,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse,
    (request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse.deserializeBinary
  );

  listModelAutobuilders(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse>;

  listModelAutobuilders(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse>;

  listModelAutobuilders(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/ListModelAutobuilders',
        request,
        metadata || {},
        this.methodInfoListModelAutobuilders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/ListModelAutobuilders',
    request,
    metadata || {},
    this.methodInfoListModelAutobuilders);
  }

  methodInfoCreateModelAutobuilder = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/CreateModelAutobuilder',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderRequest,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse,
    (request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse.deserializeBinary
  );

  createModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse>;

  createModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse>;

  createModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/CreateModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoCreateModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/CreateModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoCreateModelAutobuilder);
  }

  methodInfoGetModelAutobuilder = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/GetModelAutobuilder',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderRequest,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse,
    (request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse.deserializeBinary
  );

  getModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse>;

  getModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse>;

  getModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/GetModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoGetModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/GetModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoGetModelAutobuilder);
  }

  methodInfoUpdateModelAutobuilder = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/UpdateModelAutobuilder',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderRequest,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse,
    (request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse.deserializeBinary
  );

  updateModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse>;

  updateModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse>;

  updateModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/UpdateModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoUpdateModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/UpdateModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoUpdateModelAutobuilder);
  }

  methodInfoDeleteModelAutobuilder = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/DeleteModelAutobuilder',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderRequest,
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse,
    (request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse.deserializeBinary
  );

  deleteModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse>;

  deleteModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse>;

  deleteModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/DeleteModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoDeleteModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelautobuilder.v1.ModelAutobuilderService/DeleteModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoDeleteModelAutobuilder);
  }

}

