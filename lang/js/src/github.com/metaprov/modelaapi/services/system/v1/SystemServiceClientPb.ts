/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.servingsite.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_system_v1_system_pb from '../../../../../../github.com/metaprov/modelaapi/services/system/v1/system_pb';


export class SystemServiceClient {
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

  methodInfoDownloadLogfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileResponse,
    (request: github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileResponse.deserializeBinary
  );

  downloadLogfile(
    request: github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileResponse>;

  downloadLogfile(
    request: github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileResponse>;

  downloadLogfile(
    request: github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_system_v1_system_pb.DownloadLogFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.servingsite.v1.SystemService/DownloadLogfile',
        request,
        metadata || {},
        this.methodInfoDownloadLogfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.servingsite.v1.SystemService/DownloadLogfile',
    request,
    metadata || {},
    this.methodInfoDownloadLogfile);
  }

  methodInfoBackupDatabase = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseResponse,
    (request: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseResponse.deserializeBinary
  );

  backupDatabase(
    request: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseResponse>;

  backupDatabase(
    request: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseResponse>;

  backupDatabase(
    request: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupDatabaseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.servingsite.v1.SystemService/BackupDatabase',
        request,
        metadata || {},
        this.methodInfoBackupDatabase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.servingsite.v1.SystemService/BackupDatabase',
    request,
    metadata || {},
    this.methodInfoBackupDatabase);
  }

  methodInfoBackupEtcd = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdResponse,
    (request: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdResponse.deserializeBinary
  );

  backupEtcd(
    request: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdResponse>;

  backupEtcd(
    request: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdResponse>;

  backupEtcd(
    request: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_system_v1_system_pb.BackupEtcdResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.servingsite.v1.SystemService/BackupEtcd',
        request,
        metadata || {},
        this.methodInfoBackupEtcd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.servingsite.v1.SystemService/BackupEtcd',
    request,
    metadata || {},
    this.methodInfoBackupEtcd);
  }

}

