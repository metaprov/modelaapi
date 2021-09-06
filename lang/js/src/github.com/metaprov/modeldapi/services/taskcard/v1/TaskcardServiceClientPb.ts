/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.taskcard.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb from '../../../../../../github.com/metaprov/modelaapi/services/taskcard/v1/taskcard_pb';


export class TaskCardServiceClient {
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

  methodInfoListTaskCards = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsResponse,
    (request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsResponse.deserializeBinary
  );

  listTaskCards(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsResponse>;

  listTaskCards(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsResponse>;

  listTaskCards(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.ListTaskCardsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/ListTaskCards',
        request,
        metadata || {},
        this.methodInfoListTaskCards,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/ListTaskCards',
    request,
    metadata || {},
    this.methodInfoListTaskCards);
  }

  methodInfoCreateTaskCard = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardResponse,
    (request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardResponse.deserializeBinary
  );

  createTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardResponse>;

  createTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardResponse>;

  createTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.CreateTaskCardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/CreateTaskCard',
        request,
        metadata || {},
        this.methodInfoCreateTaskCard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/CreateTaskCard',
    request,
    metadata || {},
    this.methodInfoCreateTaskCard);
  }

  methodInfoGetTaskCard = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardResponse,
    (request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardResponse.deserializeBinary
  );

  getTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardResponse>;

  getTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardResponse>;

  getTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.GetTaskCardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/GetTaskCard',
        request,
        metadata || {},
        this.methodInfoGetTaskCard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/GetTaskCard',
    request,
    metadata || {},
    this.methodInfoGetTaskCard);
  }

  methodInfoUpdateTaskCard = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardResponse,
    (request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardResponse.deserializeBinary
  );

  updateTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardResponse>;

  updateTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardResponse>;

  updateTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.UpdateTaskCardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/UpdateTaskCard',
        request,
        metadata || {},
        this.methodInfoUpdateTaskCard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/UpdateTaskCard',
    request,
    metadata || {},
    this.methodInfoUpdateTaskCard);
  }

  methodInfoDeleteTaskCard = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardResponse,
    (request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardResponse.deserializeBinary
  );

  deleteTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardResponse>;

  deleteTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardResponse>;

  deleteTaskCard(
    request: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_taskcard_v1_taskcard_pb.DeleteTaskCardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/DeleteTaskCard',
        request,
        metadata || {},
        this.methodInfoDeleteTaskCard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.taskcard.v1.TaskCardService/DeleteTaskCard',
    request,
    metadata || {},
    this.methodInfoDeleteTaskCard);
  }

}

