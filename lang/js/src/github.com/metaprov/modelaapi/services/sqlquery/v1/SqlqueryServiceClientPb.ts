/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.sqlquery.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb from '../../../../../../github.com/metaprov/modelaapi/services/sqlquery/v1/sqlquery_pb';


export class SqlQueryServiceClient {
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

  methodInfoListSqlQueries = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesResponse,
    (request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesResponse.deserializeBinary
  );

  listSqlQueries(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesResponse>;

  listSqlQueries(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesResponse>;

  listSqlQueries(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.ListSqlQueriesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/ListSqlQueries',
        request,
        metadata || {},
        this.methodInfoListSqlQueries,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/ListSqlQueries',
    request,
    metadata || {},
    this.methodInfoListSqlQueries);
  }

  methodInfoCreateSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryResponse.deserializeBinary
  );

  createSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryResponse>;

  createSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryResponse>;

  createSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.CreateSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/CreateSqlQuery',
        request,
        metadata || {},
        this.methodInfoCreateSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/CreateSqlQuery',
    request,
    metadata || {},
    this.methodInfoCreateSqlQuery);
  }

  methodInfoGetSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryResponse.deserializeBinary
  );

  getSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryResponse>;

  getSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryResponse>;

  getSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.GetSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/GetSqlQuery',
        request,
        metadata || {},
        this.methodInfoGetSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/GetSqlQuery',
    request,
    metadata || {},
    this.methodInfoGetSqlQuery);
  }

  methodInfoUpdateSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryResponse.deserializeBinary
  );

  updateSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryResponse>;

  updateSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryResponse>;

  updateSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.UpdateSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/UpdateSqlQuery',
        request,
        metadata || {},
        this.methodInfoUpdateSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/UpdateSqlQuery',
    request,
    metadata || {},
    this.methodInfoUpdateSqlQuery);
  }

  methodInfoDeleteSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryResponse.deserializeBinary
  );

  deleteSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryResponse>;

  deleteSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryResponse>;

  deleteSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.DeleteSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/DeleteSqlQuery',
        request,
        metadata || {},
        this.methodInfoDeleteSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/DeleteSqlQuery',
    request,
    metadata || {},
    this.methodInfoDeleteSqlQuery);
  }

  methodInfoRunSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryResponse.deserializeBinary
  );

  runSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryResponse>;

  runSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryResponse>;

  runSqlQuery(
    request: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_sqlquery_v1_sqlquery_pb.RunSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/RunSqlQuery',
        request,
        metadata || {},
        this.methodInfoRunSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/RunSqlQuery',
    request,
    metadata || {},
    this.methodInfoRunSqlQuery);
  }

}

