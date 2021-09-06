/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.dataproductversion.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb from '../../../../../../github.com/metaprov/modelaapi/services/dataproductversion/v1/dataproductversion_pb';


export class DataProductVersionServiceClient {
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

  methodInfoListDataProductVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse,
    (request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse.deserializeBinary
  );

  listDataProductVersions(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse>;

  listDataProductVersions(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse>;

  listDataProductVersions(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/ListDataProductVersions',
        request,
        metadata || {},
        this.methodInfoListDataProductVersions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/ListDataProductVersions',
    request,
    metadata || {},
    this.methodInfoListDataProductVersions);
  }

  methodInfoCreateDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse,
    (request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse.deserializeBinary
  );

  createDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse>;

  createDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse>;

  createDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/CreateDataProductVersion',
        request,
        metadata || {},
        this.methodInfoCreateDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/CreateDataProductVersion',
    request,
    metadata || {},
    this.methodInfoCreateDataProductVersion);
  }

  methodInfoGetDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse,
    (request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse.deserializeBinary
  );

  getDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse>;

  getDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse>;

  getDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/GetDataProductVersion',
        request,
        metadata || {},
        this.methodInfoGetDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/GetDataProductVersion',
    request,
    metadata || {},
    this.methodInfoGetDataProductVersion);
  }

  methodInfoUpdateDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse,
    (request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse.deserializeBinary
  );

  updateDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse>;

  updateDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse>;

  updateDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/UpdateDataProductVersion',
        request,
        metadata || {},
        this.methodInfoUpdateDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/UpdateDataProductVersion',
    request,
    metadata || {},
    this.methodInfoUpdateDataProductVersion);
  }

  methodInfoDeleteDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse,
    (request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse.deserializeBinary
  );

  deleteDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse>;

  deleteDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse>;

  deleteDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/DeleteDataProductVersion',
        request,
        metadata || {},
        this.methodInfoDeleteDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/DeleteDataProductVersion',
    request,
    metadata || {},
    this.methodInfoDeleteDataProductVersion);
  }

}

