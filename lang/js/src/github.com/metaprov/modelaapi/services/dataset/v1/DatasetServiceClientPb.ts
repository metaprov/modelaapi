/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.dataset.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb from '../../../../../../github.com/metaprov/modelaapi/services/dataset/v1/dataset_pb';


export class DatasetServiceClient {
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

  methodInfoListDatasets = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ListDatasets',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsResponse.deserializeBinary
  );

  listDatasets(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsResponse>;

  listDatasets(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsResponse>;

  listDatasets(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ListDatasetsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ListDatasets',
        request,
        metadata || {},
        this.methodInfoListDatasets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ListDatasets',
    request,
    metadata || {},
    this.methodInfoListDatasets);
  }

  methodInfoGetDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetResponse.deserializeBinary
  );

  getDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetResponse>;

  getDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetResponse>;

  getDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDataset',
        request,
        metadata || {},
        this.methodInfoGetDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDataset',
    request,
    metadata || {},
    this.methodInfoGetDataset);
  }

  methodInfoCreateDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetResponse.deserializeBinary
  );

  createDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetResponse>;

  createDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetResponse>;

  createDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDataset',
        request,
        metadata || {},
        this.methodInfoCreateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDataset',
    request,
    metadata || {},
    this.methodInfoCreateDataset);
  }

  methodInfoUpdateDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/UpdateDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse.deserializeBinary
  );

  updateDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse>;

  updateDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse>;

  updateDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/UpdateDataset',
        request,
        metadata || {},
        this.methodInfoUpdateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/UpdateDataset',
    request,
    metadata || {},
    this.methodInfoUpdateDataset);
  }

  methodInfoDeleteDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DeleteDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse.deserializeBinary
  );

  deleteDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse>;

  deleteDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse>;

  deleteDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DeleteDataset',
        request,
        metadata || {},
        this.methodInfoDeleteDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DeleteDataset',
    request,
    metadata || {},
    this.methodInfoDeleteDataset);
  }

  methodInfoCompareDatasets = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CompareDatasets',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse.deserializeBinary
  );

  compareDatasets(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse>;

  compareDatasets(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse>;

  compareDatasets(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CompareDatasets',
        request,
        metadata || {},
        this.methodInfoCompareDatasets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CompareDatasets',
    request,
    metadata || {},
    this.methodInfoCompareDatasets);
  }

  methodInfoGetDatasetProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatasetProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse.deserializeBinary
  );

  getDatasetProfile(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse>;

  getDatasetProfile(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse>;

  getDatasetProfile(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatasetProfile',
        request,
        metadata || {},
        this.methodInfoGetDatasetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatasetProfile',
    request,
    metadata || {},
    this.methodInfoGetDatasetProfile);
  }

  methodInfoCreateDatasetProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDatasetProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse.deserializeBinary
  );

  createDatasetProfile(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse>;

  createDatasetProfile(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse>;

  createDatasetProfile(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDatasetProfile',
        request,
        metadata || {},
        this.methodInfoCreateDatasetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDatasetProfile',
    request,
    metadata || {},
    this.methodInfoCreateDatasetProfile);
  }

  methodInfoCreateColumnProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateColumnProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse.deserializeBinary
  );

  createColumnProfile(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse>;

  createColumnProfile(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse>;

  createColumnProfile(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateColumnProfile',
        request,
        metadata || {},
        this.methodInfoCreateColumnProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateColumnProfile',
    request,
    metadata || {},
    this.methodInfoCreateColumnProfile);
  }

  methodInfoGenerateDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GenerateDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse.deserializeBinary
  );

  generateDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse>;

  generateDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse>;

  generateDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GenerateDataset',
        request,
        metadata || {},
        this.methodInfoGenerateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GenerateDataset',
    request,
    metadata || {},
    this.methodInfoGenerateDataset);
  }

  methodInfoValidateDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ValidateDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse.deserializeBinary
  );

  validateDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse>;

  validateDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse>;

  validateDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ValidateDataset',
        request,
        metadata || {},
        this.methodInfoValidateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ValidateDataset',
    request,
    metadata || {},
    this.methodInfoValidateDataset);
  }

  methodInfoDownloadDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DownloadDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetResponse.deserializeBinary
  );

  downloadDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetResponse>;

  downloadDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetResponse>;

  downloadDataset(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.DownloadDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DownloadDataset',
        request,
        metadata || {},
        this.methodInfoDownloadDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DownloadDataset',
    request,
    metadata || {},
    this.methodInfoDownloadDataset);
  }

  methodInfoGetDatabases = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatabases',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesResponse.deserializeBinary
  );

  getDatabases(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesResponse>;

  getDatabases(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesResponse>;

  getDatabases(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetDatabasesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatabases',
        request,
        metadata || {},
        this.methodInfoGetDatabases,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatabases',
    request,
    metadata || {},
    this.methodInfoGetDatabases);
  }

  methodInfoGetTables = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetTables',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesResponse.deserializeBinary
  );

  getTables(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesResponse>;

  getTables(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesResponse>;

  getTables(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetTablesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetTables',
        request,
        metadata || {},
        this.methodInfoGetTables,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetTables',
    request,
    metadata || {},
    this.methodInfoGetTables);
  }

  methodInfoExecuteSql = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ExecuteSql',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlResponse.deserializeBinary
  );

  executeSql(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlResponse>;

  executeSql(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlResponse>;

  executeSql(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.ExecuteSqlResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ExecuteSql',
        request,
        metadata || {},
        this.methodInfoExecuteSql,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ExecuteSql',
    request,
    metadata || {},
    this.methodInfoExecuteSql);
  }

  methodInfoGetAnomalies = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetAnomalies',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesResponse.deserializeBinary
  );

  getAnomalies(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesResponse>;

  getAnomalies(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesResponse>;

  getAnomalies(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetAnomaliesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetAnomalies',
        request,
        metadata || {},
        this.methodInfoGetAnomalies,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetAnomalies',
    request,
    metadata || {},
    this.methodInfoGetAnomalies);
  }

  methodInfoGetGroupKeys = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetGroupKeys',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysRequest,
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysResponse,
    (request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysResponse.deserializeBinary
  );

  getGroupKeys(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysResponse>;

  getGroupKeys(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysResponse>;

  getGroupKeys(
    request: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataset_v1_dataset_pb.GetGroupKeysResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetGroupKeys',
        request,
        metadata || {},
        this.methodInfoGetGroupKeys,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetGroupKeys',
    request,
    metadata || {},
    this.methodInfoGetGroupKeys);
  }

}

