/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.datasource.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: github.com/metaprov/modelaapi/services/datasource/v1/datasource.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb from '../../../../../../github.com/metaprov/modelaapi/services/datasource/v1/datasource_pb';


export class DataSourceServiceClient {
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

  methodDescriptorListDataSources = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/ListDataSources',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceRequest,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceResponse,
    (request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceResponse.deserializeBinary
  );

  listDataSources(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceResponse>;

  listDataSources(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceResponse>;

  listDataSources(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.ListDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/ListDataSources',
        request,
        metadata || {},
        this.methodDescriptorListDataSources,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/ListDataSources',
    request,
    metadata || {},
    this.methodDescriptorListDataSources);
  }

  methodDescriptorCreateDataSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/CreateDataSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceRequest,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse,
    (request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse.deserializeBinary
  );

  createDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse>;

  createDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse>;

  createDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/CreateDataSource',
        request,
        metadata || {},
        this.methodDescriptorCreateDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/CreateDataSource',
    request,
    metadata || {},
    this.methodDescriptorCreateDataSource);
  }

  methodDescriptorGetDataSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/GetDataSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceRequest,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceResponse,
    (request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceResponse.deserializeBinary
  );

  getDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceResponse>;

  getDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceResponse>;

  getDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/GetDataSource',
        request,
        metadata || {},
        this.methodDescriptorGetDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/GetDataSource',
    request,
    metadata || {},
    this.methodDescriptorGetDataSource);
  }

  methodDescriptorUpdateDataSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/UpdateDataSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceRequest,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse,
    (request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse.deserializeBinary
  );

  updateDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse>;

  updateDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse>;

  updateDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/UpdateDataSource',
        request,
        metadata || {},
        this.methodDescriptorUpdateDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/UpdateDataSource',
    request,
    metadata || {},
    this.methodDescriptorUpdateDataSource);
  }

  methodDescriptorDeleteDataSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/DeleteDataSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceRequest,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse,
    (request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse.deserializeBinary
  );

  deleteDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse>;

  deleteDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse>;

  deleteDataSource(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/DeleteDataSource',
        request,
        metadata || {},
        this.methodDescriptorDeleteDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/DeleteDataSource',
    request,
    metadata || {},
    this.methodDescriptorDeleteDataSource);
  }

  methodDescriptorInferSchema = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/InferSchema',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaRequest,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaResponse,
    (request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaResponse.deserializeBinary
  );

  inferSchema(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaResponse>;

  inferSchema(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaResponse>;

  inferSchema(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.InferSchemaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/InferSchema',
        request,
        metadata || {},
        this.methodDescriptorInferSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/InferSchema',
    request,
    metadata || {},
    this.methodDescriptorInferSchema);
  }

  methodDescriptorGetTableView = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/GetTableView',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewRequest,
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewResponse,
    (request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewResponse.deserializeBinary
  );

  getTableView(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewResponse>;

  getTableView(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewResponse>;

  getTableView(
    request: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_datasource_v1_datasource_pb.GetTableViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/GetTableView',
        request,
        metadata || {},
        this.methodDescriptorGetTableView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService/GetTableView',
    request,
    metadata || {},
    this.methodDescriptorGetTableView);
  }

}

