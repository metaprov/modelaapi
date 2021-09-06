/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.notifier.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb from '../../../../../../github.com/metaprov/modelaapi/services/notifier/v1/notifier_pb';


export class NotifierServiceClient {
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

  methodInfoListNotifiers = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersResponse,
    (request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersResponse.deserializeBinary
  );

  listNotifiers(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersResponse>;

  listNotifiers(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersResponse>;

  listNotifiers(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.ListNotifiersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/ListNotifiers',
        request,
        metadata || {},
        this.methodInfoListNotifiers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/ListNotifiers',
    request,
    metadata || {},
    this.methodInfoListNotifiers);
  }

  methodInfoCreateNotifier = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierResponse,
    (request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierResponse.deserializeBinary
  );

  createNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierResponse>;

  createNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierResponse>;

  createNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.CreateNotifierResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/CreateNotifier',
        request,
        metadata || {},
        this.methodInfoCreateNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/CreateNotifier',
    request,
    metadata || {},
    this.methodInfoCreateNotifier);
  }

  methodInfoGetNotifier = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierResponse,
    (request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierResponse.deserializeBinary
  );

  getNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierResponse>;

  getNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierResponse>;

  getNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.GetNotifierResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/GetNotifier',
        request,
        metadata || {},
        this.methodInfoGetNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/GetNotifier',
    request,
    metadata || {},
    this.methodInfoGetNotifier);
  }

  methodInfoUpdateNotifier = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse,
    (request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse.deserializeBinary
  );

  updateNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse>;

  updateNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse>;

  updateNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/UpdateNotifier',
        request,
        metadata || {},
        this.methodInfoUpdateNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/UpdateNotifier',
    request,
    metadata || {},
    this.methodInfoUpdateNotifier);
  }

  methodInfoDeleteNotifier = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse,
    (request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse.deserializeBinary
  );

  deleteNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse>;

  deleteNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse>;

  deleteNotifier(
    request: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/DeleteNotifier',
        request,
        metadata || {},
        this.methodInfoDeleteNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/DeleteNotifier',
    request,
    metadata || {},
    this.methodInfoDeleteNotifier);
  }

}

