/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.cronsqlquery.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb from '../../../../../../github.com/metaprov/modelaapi/services/cronsqlquery/v1/cronsqlquery_pb';


export class CronSqlQueryServiceClient {
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

  methodInfoListCronSqlQuerys = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysResponse,
    (request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysResponse.deserializeBinary
  );

  listCronSqlQuerys(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysResponse>;

  listCronSqlQuerys(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysResponse>;

  listCronSqlQuerys(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.ListCronSqlQuerysResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/ListCronSqlQuerys',
        request,
        metadata || {},
        this.methodInfoListCronSqlQuerys,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/ListCronSqlQuerys',
    request,
    metadata || {},
    this.methodInfoListCronSqlQuerys);
  }

  methodInfoCreateCronSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryResponse.deserializeBinary
  );

  createCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryResponse>;

  createCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryResponse>;

  createCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.CreateCronSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/CreateCronSqlQuery',
        request,
        metadata || {},
        this.methodInfoCreateCronSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/CreateCronSqlQuery',
    request,
    metadata || {},
    this.methodInfoCreateCronSqlQuery);
  }

  methodInfoGetCronSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryResponse.deserializeBinary
  );

  getCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryResponse>;

  getCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryResponse>;

  getCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.GetCronSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/GetCronSqlQuery',
        request,
        metadata || {},
        this.methodInfoGetCronSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/GetCronSqlQuery',
    request,
    metadata || {},
    this.methodInfoGetCronSqlQuery);
  }

  methodInfoUpdateCronSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryResponse.deserializeBinary
  );

  updateCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryResponse>;

  updateCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryResponse>;

  updateCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.UpdateCronSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/UpdateCronSqlQuery',
        request,
        metadata || {},
        this.methodInfoUpdateCronSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/UpdateCronSqlQuery',
    request,
    metadata || {},
    this.methodInfoUpdateCronSqlQuery);
  }

  methodInfoDeleteCronSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryResponse.deserializeBinary
  );

  deleteCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryResponse>;

  deleteCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryResponse>;

  deleteCronSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.DeleteCronSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/DeleteCronSqlQuery',
        request,
        metadata || {},
        this.methodInfoDeleteCronSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/DeleteCronSqlQuery',
    request,
    metadata || {},
    this.methodInfoDeleteCronSqlQuery);
  }

  methodInfoRunSqlQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryResponse,
    (request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryResponse.deserializeBinary
  );

  runSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryResponse>;

  runSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryResponse>;

  runSqlQuery(
    request: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_cronsqlquery_v1_cronsqlquery_pb.RunCronSqlQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/RunSqlQuery',
        request,
        metadata || {},
        this.methodInfoRunSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronsqlquery.v1.CronSqlQueryService/RunSqlQuery',
    request,
    metadata || {},
    this.methodInfoRunSqlQuery);
  }

}

