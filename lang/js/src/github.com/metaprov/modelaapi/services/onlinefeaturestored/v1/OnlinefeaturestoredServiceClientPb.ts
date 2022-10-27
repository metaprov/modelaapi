/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.onlinefeaturestored.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb from '../../../../../../github.com/metaprov/modelaapi/services/onlinefeaturestored/v1/onlinefeaturestored_pb';


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

  methodInfoOnlineGet = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/OnlineGet',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetRequest,
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetResponse,
    (request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetResponse.deserializeBinary
  );

  onlineGet(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetResponse>;

  onlineGet(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetResponse>;

  onlineGet(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/OnlineGet',
        request,
        metadata || {},
        this.methodInfoOnlineGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/OnlineGet',
    request,
    metadata || {},
    this.methodInfoOnlineGet);
  }

  methodInfoOnlineMultiGet = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/OnlineMultiGet',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetRequest,
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetResponse,
    (request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetResponse.deserializeBinary
  );

  onlineMultiGet(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetResponse>;

  onlineMultiGet(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetResponse>;

  onlineMultiGet(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.OnlineMultiGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/OnlineMultiGet',
        request,
        metadata || {},
        this.methodInfoOnlineMultiGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/OnlineMultiGet',
    request,
    metadata || {},
    this.methodInfoOnlineMultiGet);
  }

  methodInfoImport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Import',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportRequest,
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportResponse,
    (request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportResponse.deserializeBinary
  );

  import(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportResponse>;

  import(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportResponse>;

  import(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ImportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Import',
        request,
        metadata || {},
        this.methodInfoImport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Import',
    request,
    metadata || {},
    this.methodInfoImport);
  }

  methodInfoPush = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Push',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushRequest,
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushResponse,
    (request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushResponse.deserializeBinary
  );

  push(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushResponse>;

  push(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushResponse>;

  push(
    request: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.PushResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Push',
        request,
        metadata || {},
        this.methodInfoPush,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Push',
    request,
    metadata || {},
    this.methodInfoPush);
  }

}

