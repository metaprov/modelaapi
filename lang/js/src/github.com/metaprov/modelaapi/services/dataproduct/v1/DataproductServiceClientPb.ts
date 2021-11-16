/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.dataproduct.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb from '../../../../../../github.com/metaprov/modelaapi/services/dataproduct/v1/dataproduct_pb';


export class DataProductServiceClient {
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

  methodInfoListDataProducts = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/ListDataProducts',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsRequest,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse,
    (request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse.deserializeBinary
  );

  listDataProducts(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse>;

  listDataProducts(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse>;

  listDataProducts(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/ListDataProducts',
        request,
        metadata || {},
        this.methodInfoListDataProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/ListDataProducts',
    request,
    metadata || {},
    this.methodInfoListDataProducts);
  }

  methodInfoCreateDataProduct = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/CreateDataProduct',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductRequest,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse,
    (request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse.deserializeBinary
  );

  createDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse>;

  createDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse>;

  createDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/CreateDataProduct',
        request,
        metadata || {},
        this.methodInfoCreateDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/CreateDataProduct',
    request,
    metadata || {},
    this.methodInfoCreateDataProduct);
  }

  methodInfoGetDataProduct = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/GetDataProduct',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductRequest,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse,
    (request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse.deserializeBinary
  );

  getDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse>;

  getDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse>;

  getDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/GetDataProduct',
        request,
        metadata || {},
        this.methodInfoGetDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/GetDataProduct',
    request,
    metadata || {},
    this.methodInfoGetDataProduct);
  }

  methodInfoUpdateDataProduct = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/UpdateDataProduct',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductRequest,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse,
    (request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse.deserializeBinary
  );

  updateDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse>;

  updateDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse>;

  updateDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/UpdateDataProduct',
        request,
        metadata || {},
        this.methodInfoUpdateDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/UpdateDataProduct',
    request,
    metadata || {},
    this.methodInfoUpdateDataProduct);
  }

  methodInfoDeleteDataProduct = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/DeleteDataProduct',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductRequest,
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse,
    (request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse.deserializeBinary
  );

  deleteDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse>;

  deleteDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse>;

  deleteDataProduct(
    request: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/DeleteDataProduct',
        request,
        metadata || {},
        this.methodInfoDeleteDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/DeleteDataProduct',
    request,
    metadata || {},
    this.methodInfoDeleteDataProduct);
  }

}

