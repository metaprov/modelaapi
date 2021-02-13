/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.dataset.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb from '../../../../../../github.com/metaprov/modeldapi/services/dataset/v1/dataset_pb';


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

  methodInfoListDatasets = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse.deserializeBinary
  );

  listDatasets(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse>;

  listDatasets(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse>;

  listDatasets(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/ListDatasets',
        request,
        metadata || {},
        this.methodInfoListDatasets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/ListDatasets',
    request,
    metadata || {},
    this.methodInfoListDatasets);
  }

  methodInfoGetDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse.deserializeBinary
  );

  getDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse>;

  getDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse>;

  getDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/GetDataset',
        request,
        metadata || {},
        this.methodInfoGetDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/GetDataset',
    request,
    metadata || {},
    this.methodInfoGetDataset);
  }

  methodInfoCreateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse.deserializeBinary
  );

  createDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse>;

  createDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse>;

  createDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/CreateDataset',
        request,
        metadata || {},
        this.methodInfoCreateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/CreateDataset',
    request,
    metadata || {},
    this.methodInfoCreateDataset);
  }

  methodInfoUpdateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse.deserializeBinary
  );

  updateDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse>;

  updateDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse>;

  updateDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/UpdateDataset',
        request,
        metadata || {},
        this.methodInfoUpdateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/UpdateDataset',
    request,
    metadata || {},
    this.methodInfoUpdateDataset);
  }

  methodInfoDeleteDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse.deserializeBinary
  );

  deleteDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse>;

  deleteDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse>;

  deleteDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/DeleteDataset',
        request,
        metadata || {},
        this.methodInfoDeleteDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/DeleteDataset',
    request,
    metadata || {},
    this.methodInfoDeleteDataset);
  }

  methodInfoCompareDatasets = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse.deserializeBinary
  );

  compareDatasets(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse>;

  compareDatasets(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse>;

  compareDatasets(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/CompareDatasets',
        request,
        metadata || {},
        this.methodInfoCompareDatasets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/CompareDatasets',
    request,
    metadata || {},
    this.methodInfoCompareDatasets);
  }

  methodInfoGetDatasetProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse.deserializeBinary
  );

  getDatasetProfile(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse>;

  getDatasetProfile(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse>;

  getDatasetProfile(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/GetDatasetProfile',
        request,
        metadata || {},
        this.methodInfoGetDatasetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/GetDatasetProfile',
    request,
    metadata || {},
    this.methodInfoGetDatasetProfile);
  }

  methodInfoCreateDatasetProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse.deserializeBinary
  );

  createDatasetProfile(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse>;

  createDatasetProfile(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse>;

  createDatasetProfile(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/CreateDatasetProfile',
        request,
        metadata || {},
        this.methodInfoCreateDatasetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/CreateDatasetProfile',
    request,
    metadata || {},
    this.methodInfoCreateDatasetProfile);
  }

  methodInfoCreateColumnProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse.deserializeBinary
  );

  createColumnProfile(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse>;

  createColumnProfile(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse>;

  createColumnProfile(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/CreateColumnProfile',
        request,
        metadata || {},
        this.methodInfoCreateColumnProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/CreateColumnProfile',
    request,
    metadata || {},
    this.methodInfoCreateColumnProfile);
  }

  methodInfoGenerateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse.deserializeBinary
  );

  generateDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse>;

  generateDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse>;

  generateDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/GenerateDataset',
        request,
        metadata || {},
        this.methodInfoGenerateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/GenerateDataset',
    request,
    metadata || {},
    this.methodInfoGenerateDataset);
  }

  methodInfoValidateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse.deserializeBinary
  );

  validateDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse>;

  validateDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse>;

  validateDataset(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/ValidateDataset',
        request,
        metadata || {},
        this.methodInfoValidateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/ValidateDataset',
    request,
    metadata || {},
    this.methodInfoValidateDataset);
  }

  methodInfoUploadChunk = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse,
    (request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse.deserializeBinary
  );

  uploadChunk(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse>;

  uploadChunk(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse>;

  uploadChunk(
    request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/UploadChunk',
        request,
        metadata || {},
        this.methodInfoUploadChunk,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.dataset.v1.DatasetService/UploadChunk',
    request,
    metadata || {},
    this.methodInfoUploadChunk);
  }

}

