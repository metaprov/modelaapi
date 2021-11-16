/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.sqlqueryrun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb from '../../../../../../github.com/metaprov/modelaapi/services/sqlqueryrun/v1/sqlqueryrun_pb';


export class SqlQueryRunServiceClient {
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

  methodInfoListSqlQuerieRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/ListSqlQuerieRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsRequest,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsResponse,
    (request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsResponse.deserializeBinary
  );

  listSqlQuerieRuns(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsResponse>;

  listSqlQuerieRuns(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsResponse>;

  listSqlQuerieRuns(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.ListSqlQueryRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/ListSqlQuerieRuns',
        request,
        metadata || {},
        this.methodInfoListSqlQuerieRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/ListSqlQuerieRuns',
    request,
    metadata || {},
    this.methodInfoListSqlQuerieRuns);
  }

  methodInfoCreateSqlQueryRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/CreateSqlQueryRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunRequest,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunResponse,
    (request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunResponse.deserializeBinary
  );

  createSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunResponse>;

  createSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunResponse>;

  createSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.CreateSqlQueryRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/CreateSqlQueryRun',
        request,
        metadata || {},
        this.methodInfoCreateSqlQueryRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/CreateSqlQueryRun',
    request,
    metadata || {},
    this.methodInfoCreateSqlQueryRun);
  }

  methodInfoGetSqlQueryRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/GetSqlQueryRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunRequest,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunResponse,
    (request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunResponse.deserializeBinary
  );

  getSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunResponse>;

  getSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunResponse>;

  getSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.GetSqlQueryRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/GetSqlQueryRun',
        request,
        metadata || {},
        this.methodInfoGetSqlQueryRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/GetSqlQueryRun',
    request,
    metadata || {},
    this.methodInfoGetSqlQueryRun);
  }

  methodInfoUpdateSqlQueryRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/UpdateSqlQueryRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunRequest,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunResponse,
    (request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunResponse.deserializeBinary
  );

  updateSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunResponse>;

  updateSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunResponse>;

  updateSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.UpdateSqlQueryRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/UpdateSqlQueryRun',
        request,
        metadata || {},
        this.methodInfoUpdateSqlQueryRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/UpdateSqlQueryRun',
    request,
    metadata || {},
    this.methodInfoUpdateSqlQueryRun);
  }

  methodInfoDeleteSqlQueryRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/DeleteSqlQueryRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunRequest,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunResponse,
    (request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunResponse.deserializeBinary
  );

  deleteSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunResponse>;

  deleteSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunResponse>;

  deleteSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.DeleteSqlQueryRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/DeleteSqlQueryRun',
        request,
        metadata || {},
        this.methodInfoDeleteSqlQueryRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/DeleteSqlQueryRun',
    request,
    metadata || {},
    this.methodInfoDeleteSqlQueryRun);
  }

  methodInfoRunSqlQueryRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/RunSqlQueryRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunRequest,
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunResponse,
    (request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunResponse.deserializeBinary
  );

  runSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunResponse>;

  runSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunResponse>;

  runSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_sqlqueryrun_v1_sqlqueryrun_pb.RunSqlQueryRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/RunSqlQueryRun',
        request,
        metadata || {},
        this.methodInfoRunSqlQueryRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlqueryrun.v1.SqlQueryRunService/RunSqlQueryRun',
    request,
    metadata || {},
    this.methodInfoRunSqlQueryRun);
  }

}

