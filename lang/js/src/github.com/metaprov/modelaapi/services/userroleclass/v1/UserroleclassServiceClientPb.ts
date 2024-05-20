/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.userroleclass.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: github.com/metaprov/modelaapi/services/userroleclass/v1/userroleclass.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb from '../../../../../../github.com/metaprov/modelaapi/services/userroleclass/v1/userroleclass_pb';


export class UserRoleClassServiceClient {
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

  methodDescriptorListUserRoleClasses = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/ListUserRoleClasses',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesRequest,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesResponse,
    (request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesResponse.deserializeBinary
  );

  listUserRoleClasses(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesResponse>;

  listUserRoleClasses(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesResponse>;

  listUserRoleClasses(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.ListUserRoleClassesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/ListUserRoleClasses',
        request,
        metadata || {},
        this.methodDescriptorListUserRoleClasses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/ListUserRoleClasses',
    request,
    metadata || {},
    this.methodDescriptorListUserRoleClasses);
  }

  methodDescriptorCreateUserRoleClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/CreateUserRoleClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassRequest,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassResponse,
    (request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassResponse.deserializeBinary
  );

  createUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassResponse>;

  createUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassResponse>;

  createUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.CreateUserRoleClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/CreateUserRoleClass',
        request,
        metadata || {},
        this.methodDescriptorCreateUserRoleClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/CreateUserRoleClass',
    request,
    metadata || {},
    this.methodDescriptorCreateUserRoleClass);
  }

  methodDescriptorGetUserRoleClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/GetUserRoleClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassRequest,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassResponse,
    (request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassResponse.deserializeBinary
  );

  getUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassResponse>;

  getUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassResponse>;

  getUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.GetUserRoleClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/GetUserRoleClass',
        request,
        metadata || {},
        this.methodDescriptorGetUserRoleClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/GetUserRoleClass',
    request,
    metadata || {},
    this.methodDescriptorGetUserRoleClass);
  }

  methodDescriptorUpdateUserRoleClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/UpdateUserRoleClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassRequest,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassResponse,
    (request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassResponse.deserializeBinary
  );

  updateUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassResponse>;

  updateUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassResponse>;

  updateUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.UpdateUserRoleClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/UpdateUserRoleClass',
        request,
        metadata || {},
        this.methodDescriptorUpdateUserRoleClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/UpdateUserRoleClass',
    request,
    metadata || {},
    this.methodDescriptorUpdateUserRoleClass);
  }

  methodDescriptorDeleteUserRoleClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/DeleteUserRoleClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassRequest,
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassResponse,
    (request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassResponse.deserializeBinary
  );

  deleteUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassResponse>;

  deleteUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassResponse>;

  deleteUserRoleClass(
    request: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_userroleclass_v1_userroleclass_pb.DeleteUserRoleClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/DeleteUserRoleClass',
        request,
        metadata || {},
        this.methodDescriptorDeleteUserRoleClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/DeleteUserRoleClass',
    request,
    metadata || {},
    this.methodDescriptorDeleteUserRoleClass);
  }

}

