/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.todo.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_todo_v1_todo_pb from '../../../../../../github.com/metaprov/modelaapi/services/todo/v1/todo_pb';


export class TodoServiceClient {
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

  methodInfoListTodos = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosResponse,
    (request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosResponse.deserializeBinary
  );

  listTodos(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosResponse>;

  listTodos(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosResponse>;

  listTodos(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.ListTodosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/ListTodos',
        request,
        metadata || {},
        this.methodInfoListTodos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/ListTodos',
    request,
    metadata || {},
    this.methodInfoListTodos);
  }

  methodInfoCreateTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoResponse,
    (request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoResponse.deserializeBinary
  );

  createTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoResponse>;

  createTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoResponse>;

  createTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.CreateTodoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/CreateTodo',
        request,
        metadata || {},
        this.methodInfoCreateTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/CreateTodo',
    request,
    metadata || {},
    this.methodInfoCreateTodo);
  }

  methodInfoGetTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoResponse,
    (request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoResponse.deserializeBinary
  );

  getTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoResponse>;

  getTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoResponse>;

  getTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.GetTodoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/GetTodo',
        request,
        metadata || {},
        this.methodInfoGetTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/GetTodo',
    request,
    metadata || {},
    this.methodInfoGetTodo);
  }

  methodInfoUpdateTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoResponse,
    (request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoResponse.deserializeBinary
  );

  updateTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoResponse>;

  updateTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoResponse>;

  updateTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.UpdateTodoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/UpdateTodo',
        request,
        metadata || {},
        this.methodInfoUpdateTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/UpdateTodo',
    request,
    metadata || {},
    this.methodInfoUpdateTodo);
  }

  methodInfoDeleteTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoResponse,
    (request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoResponse.deserializeBinary
  );

  deleteTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoResponse>;

  deleteTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoResponse>;

  deleteTodo(
    request: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_todo_v1_todo_pb.DeleteTodoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/DeleteTodo',
        request,
        metadata || {},
        this.methodInfoDeleteTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.todo.v1.TodoService/DeleteTodo',
    request,
    metadata || {},
    this.methodInfoDeleteTodo);
  }

}

