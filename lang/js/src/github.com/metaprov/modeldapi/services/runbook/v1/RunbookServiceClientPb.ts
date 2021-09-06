/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.runbook.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb from '../../../../../../github.com/metaprov/modelaapi/services/runbook/v1/runbook_pb';


export class RunBookServiceClient {
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

  methodInfoListRunBooks = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksResponse,
    (request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksResponse.deserializeBinary
  );

  listRunBooks(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksResponse>;

  listRunBooks(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksResponse>;

  listRunBooks(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.ListRunBooksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/ListRunBooks',
        request,
        metadata || {},
        this.methodInfoListRunBooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/ListRunBooks',
    request,
    metadata || {},
    this.methodInfoListRunBooks);
  }

  methodInfoCreateRunBook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookResponse,
    (request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookResponse.deserializeBinary
  );

  createRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookResponse>;

  createRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookResponse>;

  createRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.CreateRunBookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/CreateRunBook',
        request,
        metadata || {},
        this.methodInfoCreateRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/CreateRunBook',
    request,
    metadata || {},
    this.methodInfoCreateRunBook);
  }

  methodInfoGetRunBook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookResponse,
    (request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookResponse.deserializeBinary
  );

  getRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookResponse>;

  getRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookResponse>;

  getRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.GetRunBookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/GetRunBook',
        request,
        metadata || {},
        this.methodInfoGetRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/GetRunBook',
    request,
    metadata || {},
    this.methodInfoGetRunBook);
  }

  methodInfoUpdateRunBook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse,
    (request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse.deserializeBinary
  );

  updateRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse>;

  updateRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse>;

  updateRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/UpdateRunBook',
        request,
        metadata || {},
        this.methodInfoUpdateRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/UpdateRunBook',
    request,
    metadata || {},
    this.methodInfoUpdateRunBook);
  }

  methodInfoDeleteRunBook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse,
    (request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse.deserializeBinary
  );

  deleteRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse>;

  deleteRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse>;

  deleteRunBook(
    request: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/DeleteRunBook',
        request,
        metadata || {},
        this.methodInfoDeleteRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.runbook.v1.RunBookService/DeleteRunBook',
    request,
    metadata || {},
    this.methodInfoDeleteRunBook);
  }

}

