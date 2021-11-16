/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.modelasystem.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb from '../../../../../../github.com/metaprov/modelaapi/services/modelasystem/v1/modelasystem_pb';


export class ModelaSystemServiceClient {
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

  methodInfoListModelaSystems = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/ListModelaSystems',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsRequest,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsResponse,
    (request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsResponse.deserializeBinary
  );

  listModelaSystems(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsResponse>;

  listModelaSystems(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsResponse>;

  listModelaSystems(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.ListModelaSystemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/ListModelaSystems',
        request,
        metadata || {},
        this.methodInfoListModelaSystems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/ListModelaSystems',
    request,
    metadata || {},
    this.methodInfoListModelaSystems);
  }

  methodInfoCreateModelaSystem = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/CreateModelaSystem',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemRequest,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemResponse,
    (request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemResponse.deserializeBinary
  );

  createModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemResponse>;

  createModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemResponse>;

  createModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.CreateModelaSystemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/CreateModelaSystem',
        request,
        metadata || {},
        this.methodInfoCreateModelaSystem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/CreateModelaSystem',
    request,
    metadata || {},
    this.methodInfoCreateModelaSystem);
  }

  methodInfoGetModelaSystem = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/GetModelaSystem',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemRequest,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemResponse,
    (request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemResponse.deserializeBinary
  );

  getModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemResponse>;

  getModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemResponse>;

  getModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.GetModelaSystemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/GetModelaSystem',
        request,
        metadata || {},
        this.methodInfoGetModelaSystem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/GetModelaSystem',
    request,
    metadata || {},
    this.methodInfoGetModelaSystem);
  }

  methodInfoUpdateModelaSystem = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/UpdateModelaSystem',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemRequest,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemResponse,
    (request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemResponse.deserializeBinary
  );

  updateModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemResponse>;

  updateModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemResponse>;

  updateModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.UpdateModelaSystemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/UpdateModelaSystem',
        request,
        metadata || {},
        this.methodInfoUpdateModelaSystem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/UpdateModelaSystem',
    request,
    metadata || {},
    this.methodInfoUpdateModelaSystem);
  }

  methodInfoDeleteModelaSystem = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/DeleteModelaSystem',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemRequest,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemResponse,
    (request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemResponse.deserializeBinary
  );

  deleteModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemResponse>;

  deleteModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemResponse>;

  deleteModelaSystem(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DeleteModelaSystemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/DeleteModelaSystem',
        request,
        metadata || {},
        this.methodInfoDeleteModelaSystem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/DeleteModelaSystem',
    request,
    metadata || {},
    this.methodInfoDeleteModelaSystem);
  }

  methodInfoDownloadLogfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/DownloadLogfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileRequest,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileResponse,
    (request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileResponse.deserializeBinary
  );

  downloadLogfile(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileResponse>;

  downloadLogfile(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileResponse>;

  downloadLogfile(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.DownloadLogFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/DownloadLogfile',
        request,
        metadata || {},
        this.methodInfoDownloadLogfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/DownloadLogfile',
    request,
    metadata || {},
    this.methodInfoDownloadLogfile);
  }

  methodInfoBackupDatabase = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupDatabase',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseRequest,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseResponse,
    (request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseResponse.deserializeBinary
  );

  backupDatabase(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseResponse>;

  backupDatabase(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseResponse>;

  backupDatabase(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupDatabaseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupDatabase',
        request,
        metadata || {},
        this.methodInfoBackupDatabase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupDatabase',
    request,
    metadata || {},
    this.methodInfoBackupDatabase);
  }

  methodInfoBackupEtcd = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupEtcd',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdRequest,
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdResponse,
    (request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdResponse.deserializeBinary
  );

  backupEtcd(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdResponse>;

  backupEtcd(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdResponse>;

  backupEtcd(
    request: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_modelasystem_v1_modelasystem_pb.BackupEtcdResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupEtcd',
        request,
        metadata || {},
        this.methodInfoBackupEtcd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupEtcd',
    request,
    metadata || {},
    this.methodInfoBackupEtcd);
  }

}

