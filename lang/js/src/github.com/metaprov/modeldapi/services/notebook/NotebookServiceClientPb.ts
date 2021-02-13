/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.notebook
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_notebook_notebook_pb from '../../../../../github.com/metaprov/modeldapi/services/notebook/notebook_pb';


export class NotebookServiceClient {
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

  methodInfoListNotebooks = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksResponse,
    (request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksResponse.deserializeBinary
  );

  listNotebooks(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksResponse>;

  listNotebooks(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksResponse>;

  listNotebooks(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.ListNotebooksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.notebook.NotebookService/ListNotebooks',
        request,
        metadata || {},
        this.methodInfoListNotebooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.notebook.NotebookService/ListNotebooks',
    request,
    metadata || {},
    this.methodInfoListNotebooks);
  }

  methodInfoCreateNotebook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookResponse,
    (request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookResponse.deserializeBinary
  );

  createNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookResponse>;

  createNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookResponse>;

  createNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.CreateNotebookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.notebook.NotebookService/CreateNotebook',
        request,
        metadata || {},
        this.methodInfoCreateNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.notebook.NotebookService/CreateNotebook',
    request,
    metadata || {},
    this.methodInfoCreateNotebook);
  }

  methodInfoGetNotebook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookResponse,
    (request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookResponse.deserializeBinary
  );

  getNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookResponse>;

  getNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookResponse>;

  getNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.GetNotebookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.notebook.NotebookService/GetNotebook',
        request,
        metadata || {},
        this.methodInfoGetNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.notebook.NotebookService/GetNotebook',
    request,
    metadata || {},
    this.methodInfoGetNotebook);
  }

  methodInfoUpdateNotebook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookResponse,
    (request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookResponse.deserializeBinary
  );

  updateNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookResponse>;

  updateNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookResponse>;

  updateNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.UpdateNotebookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.notebook.NotebookService/UpdateNotebook',
        request,
        metadata || {},
        this.methodInfoUpdateNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.notebook.NotebookService/UpdateNotebook',
    request,
    metadata || {},
    this.methodInfoUpdateNotebook);
  }

  methodInfoDeleteNotebook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookResponse,
    (request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookResponse.deserializeBinary
  );

  deleteNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookResponse>;

  deleteNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookResponse>;

  deleteNotebook(
    request: github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_notebook_notebook_pb.DeleteNotebookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.notebook.NotebookService/DeleteNotebook',
        request,
        metadata || {},
        this.methodInfoDeleteNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.notebook.NotebookService/DeleteNotebook',
    request,
    metadata || {},
    this.methodInfoDeleteNotebook);
  }

}

