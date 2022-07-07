/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.data.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_data_v1_data_pb from '../../../../../../github.com/metaprov/modelaapi/services/data/v1/data_pb';


export class DataServiceClient {
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

  methodInfoReadFile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/ReadFile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFileRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary
  );

  readFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/ReadFile',
        request,
        metadata || {},
        this.methodInfoReadFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/ReadFile',
    request,
    metadata || {},
    this.methodInfoReadFile);
  }

  methodInfoReadFeature = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/ReadFeature',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFeatureRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary
  );

  readFeature(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readFeature(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readFeature(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/ReadFeature',
        request,
        metadata || {},
        this.methodInfoReadFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/ReadFeature',
    request,
    metadata || {},
    this.methodInfoReadFeature);
  }

  methodInfoReadAudio = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/ReadAudio',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadAudioRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadAudioRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary
  );

  readAudio(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadAudioRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readAudio(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadAudioRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readAudio(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadAudioRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/ReadAudio',
        request,
        metadata || {},
        this.methodInfoReadAudio,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/ReadAudio',
    request,
    metadata || {},
    this.methodInfoReadAudio);
  }

  methodInfoRunDataPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunDataPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineResponse.deserializeBinary
  );

  runDataPipeline(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineResponse>;

  runDataPipeline(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineResponse>;

  runDataPipeline(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDataPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunDataPipeline',
        request,
        metadata || {},
        this.methodInfoRunDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunDataPipeline',
    request,
    metadata || {},
    this.methodInfoRunDataPipeline);
  }

  methodInfoRunRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeResponse.deserializeBinary
  );

  runRecipe(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeResponse>;

  runRecipe(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeResponse>;

  runRecipe(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunRecipe',
        request,
        metadata || {},
        this.methodInfoRunRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunRecipe',
    request,
    metadata || {},
    this.methodInfoRunRecipe);
  }

  methodInfoWriteFile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/WriteFile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsWriteFileRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsWriteFileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary
  );

  writeFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsWriteFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  writeFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsWriteFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  writeFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsWriteFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/WriteFile',
        request,
        metadata || {},
        this.methodInfoWriteFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/WriteFile',
    request,
    metadata || {},
    this.methodInfoWriteFile);
  }

  methodInfoGenerateDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/GenerateDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetResponse.deserializeBinary
  );

  generateDataset(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetResponse>;

  generateDataset(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetResponse>;

  generateDataset(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGenerateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/GenerateDataset',
        request,
        metadata || {},
        this.methodInfoGenerateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/GenerateDataset',
    request,
    metadata || {},
    this.methodInfoGenerateDataset);
  }

  methodInfoSplitDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/SplitDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetResponse.deserializeBinary
  );

  splitDataset(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetResponse>;

  splitDataset(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetResponse>;

  splitDataset(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/SplitDataset',
        request,
        metadata || {},
        this.methodInfoSplitDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/SplitDataset',
    request,
    metadata || {},
    this.methodInfoSplitDataset);
  }

  methodInfoCreateColumnProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateColumnProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileResponse.deserializeBinary
  );

  createColumnProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileResponse>;

  createColumnProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileResponse>;

  createColumnProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateColumnProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateColumnProfile',
        request,
        metadata || {},
        this.methodInfoCreateColumnProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateColumnProfile',
    request,
    metadata || {},
    this.methodInfoCreateColumnProfile);
  }

  methodInfoInferSchema = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/InferSchema',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaResponse.deserializeBinary
  );

  inferSchema(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaResponse>;

  inferSchema(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaResponse>;

  inferSchema(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsInferSchemaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/InferSchema',
        request,
        metadata || {},
        this.methodInfoInferSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/InferSchema',
    request,
    metadata || {},
    this.methodInfoInferSchema);
  }

  methodInfoGetTableView = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/GetTableView',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewResponse.deserializeBinary
  );

  getTableView(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewResponse>;

  getTableView(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewResponse>;

  getTableView(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTableViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/GetTableView',
        request,
        metadata || {},
        this.methodInfoGetTableView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/GetTableView',
    request,
    metadata || {},
    this.methodInfoGetTableView);
  }

  methodInfoSplitDatasetToRungs = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/SplitDatasetToRungs',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse.deserializeBinary
  );

  splitDatasetToRungs(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse>;

  splitDatasetToRungs(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse>;

  splitDatasetToRungs(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/SplitDatasetToRungs',
        request,
        metadata || {},
        this.methodInfoSplitDatasetToRungs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/SplitDatasetToRungs',
    request,
    metadata || {},
    this.methodInfoSplitDatasetToRungs);
  }

  methodInfoCreateDatasetProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateDatasetProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse.deserializeBinary
  );

  createDatasetProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse>;

  createDatasetProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse>;

  createDatasetProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateDatasetProfile',
        request,
        metadata || {},
        this.methodInfoCreateDatasetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateDatasetProfile',
    request,
    metadata || {},
    this.methodInfoCreateDatasetProfile);
  }

  methodInfoCreateModelProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateModelProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileResponse.deserializeBinary
  );

  createModelProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileResponse>;

  createModelProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileResponse>;

  createModelProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateModelProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateModelProfile',
        request,
        metadata || {},
        this.methodInfoCreateModelProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateModelProfile',
    request,
    metadata || {},
    this.methodInfoCreateModelProfile);
  }

  methodInfoCreateStudyProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateStudyProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileResponse.deserializeBinary
  );

  createStudyProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileResponse>;

  createStudyProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileResponse>;

  createStudyProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateStudyProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateStudyProfile',
        request,
        metadata || {},
        this.methodInfoCreateStudyProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateStudyProfile',
    request,
    metadata || {},
    this.methodInfoCreateStudyProfile);
  }

  methodInfoCreateRecipeProfile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateRecipeProfile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse.deserializeBinary
  );

  createRecipeProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse>;

  createRecipeProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse>;

  createRecipeProfile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateRecipeProfile',
        request,
        metadata || {},
        this.methodInfoCreateRecipeProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateRecipeProfile',
    request,
    metadata || {},
    this.methodInfoCreateRecipeProfile);
  }

  methodInfoCreateModelReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateModelReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateModelReportRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateModelReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createModelReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateModelReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createModelReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateModelReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createModelReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateModelReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateModelReport',
        request,
        metadata || {},
        this.methodInfoCreateModelReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateModelReport',
    request,
    metadata || {},
    this.methodInfoCreateModelReport);
  }

  methodInfoCreateStudyReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateStudyReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateStudyReportRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateStudyReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createStudyReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateStudyReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createStudyReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateStudyReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createStudyReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateStudyReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateStudyReport',
        request,
        metadata || {},
        this.methodInfoCreateStudyReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateStudyReport',
    request,
    metadata || {},
    this.methodInfoCreateStudyReport);
  }

  methodInfoCreateDatasetReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateDatasetReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateDatasetReportRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateDatasetReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createDatasetReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateDatasetReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createDatasetReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateDatasetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createDatasetReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateDatasetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateDatasetReport',
        request,
        metadata || {},
        this.methodInfoCreateDatasetReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateDatasetReport',
    request,
    metadata || {},
    this.methodInfoCreateDatasetReport);
  }

  methodInfoCreateForecastReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateForecastReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateForecastReportRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateForecastReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createForecastReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateForecastReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createForecastReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateForecastReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createForecastReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateForecastReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateForecastReport',
        request,
        metadata || {},
        this.methodInfoCreateForecastReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateForecastReport',
    request,
    metadata || {},
    this.methodInfoCreateForecastReport);
  }

  methodInfoCreateSummaryReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateSummaryReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateSummaryReportRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateSummaryReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createSummaryReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateSummaryReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createSummaryReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateSummaryReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse>;

  createSummaryReport(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateSummaryReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateSummaryReport',
        request,
        metadata || {},
        this.methodInfoCreateSummaryReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/CreateSummaryReport',
    request,
    metadata || {},
    this.methodInfoCreateSummaryReport);
  }

  methodInfoAskFE = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskFE',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse.deserializeBinary
  );

  askFE(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse>;

  askFE(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse>;

  askFE(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskFE',
        request,
        metadata || {},
        this.methodInfoAskFE,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskFE',
    request,
    metadata || {},
    this.methodInfoAskFE);
  }

  methodInfoAskBaseline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskBaseline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineResponse.deserializeBinary
  );

  askBaseline(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineResponse>;

  askBaseline(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineResponse>;

  askBaseline(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskBaselineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskBaseline',
        request,
        metadata || {},
        this.methodInfoAskBaseline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskBaseline',
    request,
    metadata || {},
    this.methodInfoAskBaseline);
  }

  methodInfoAskEnsemble = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskEnsemble',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleResponse.deserializeBinary
  );

  askEnsemble(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleResponse>;

  askEnsemble(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleResponse>;

  askEnsemble(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskEnsembleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskEnsemble',
        request,
        metadata || {},
        this.methodInfoAskEnsemble,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskEnsemble',
    request,
    metadata || {},
    this.methodInfoAskEnsemble);
  }

  methodInfoAskModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse.deserializeBinary
  );

  askModel(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse>;

  askModel(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse>;

  askModel(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskModel',
        request,
        metadata || {},
        this.methodInfoAskModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskModel',
    request,
    metadata || {},
    this.methodInfoAskModel);
  }

  methodInfoAskAllModelsForTask = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskAllModelsForTask',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskResponse.deserializeBinary
  );

  askAllModelsForTask(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskResponse>;

  askAllModelsForTask(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskResponse>;

  askAllModelsForTask(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.AskAllModelsForTaskResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskAllModelsForTask',
        request,
        metadata || {},
        this.methodInfoAskAllModelsForTask,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/AskAllModelsForTask',
    request,
    metadata || {},
    this.methodInfoAskAllModelsForTask);
  }

  methodInfoTellPartialModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/TellPartialModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse.deserializeBinary
  );

  tellPartialModel(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse>;

  tellPartialModel(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse>;

  tellPartialModel(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/TellPartialModel',
        request,
        metadata || {},
        this.methodInfoTellPartialModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/TellPartialModel',
    request,
    metadata || {},
    this.methodInfoTellPartialModel);
  }

  methodInfoTellModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/TellModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse.deserializeBinary
  );

  tellModel(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse>;

  tellModel(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse>;

  tellModel(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.TellModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/TellModel',
        request,
        metadata || {},
        this.methodInfoTellModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/TellModel',
    request,
    metadata || {},
    this.methodInfoTellModel);
  }

  methodInfoPartitionForecastFile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/PartitionForecastFile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse.deserializeBinary
  );

  partitionForecastFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse>;

  partitionForecastFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse>;

  partitionForecastFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/PartitionForecastFile',
        request,
        metadata || {},
        this.methodInfoPartitionForecastFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/PartitionForecastFile',
    request,
    metadata || {},
    this.methodInfoPartitionForecastFile);
  }

  methodInfoMergeForecastFile = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/MergeForecastFile',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileResponse.deserializeBinary
  );

  mergeForecastFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileResponse>;

  mergeForecastFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileResponse>;

  mergeForecastFile(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsMergeForecastFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/MergeForecastFile',
        request,
        metadata || {},
        this.methodInfoMergeForecastFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/MergeForecastFile',
    request,
    metadata || {},
    this.methodInfoMergeForecastFile);
  }

  methodInfoDsTestConnection = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/DsTestConnection',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionResponse.deserializeBinary
  );

  dsTestConnection(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionResponse>;

  dsTestConnection(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionResponse>;

  dsTestConnection(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsTestConnectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/DsTestConnection',
        request,
        metadata || {},
        this.methodInfoDsTestConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/DsTestConnection',
    request,
    metadata || {},
    this.methodInfoDsTestConnection);
  }

  methodInfoShutDown = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/ShutDown',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownResponse.deserializeBinary
  );

  shutDown(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownResponse>;

  shutDown(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownResponse>;

  shutDown(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsShutdownResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/ShutDown',
        request,
        metadata || {},
        this.methodInfoShutDown,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/ShutDown',
    request,
    metadata || {},
    this.methodInfoShutDown);
  }

  methodInfoStudyEnded = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/StudyEnded',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedResponse.deserializeBinary
  );

  studyEnded(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedResponse>;

  studyEnded(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedResponse>;

  studyEnded(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsStudyEndedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/StudyEnded',
        request,
        metadata || {},
        this.methodInfoStudyEnded,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/StudyEnded',
    request,
    metadata || {},
    this.methodInfoStudyEnded);
  }

  methodInfoSaveOptimizerDB = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/SaveOptimizerDB',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBResponse.deserializeBinary
  );

  saveOptimizerDB(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBResponse>;

  saveOptimizerDB(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBResponse>;

  saveOptimizerDB(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.SaveOptimizerDBResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/SaveOptimizerDB',
        request,
        metadata || {},
        this.methodInfoSaveOptimizerDB,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/SaveOptimizerDB',
    request,
    metadata || {},
    this.methodInfoSaveOptimizerDB);
  }

  methodInfoGetDatabases = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/GetDatabases',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesResponse.deserializeBinary
  );

  getDatabases(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesResponse>;

  getDatabases(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesResponse>;

  getDatabases(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetDatabasesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/GetDatabases',
        request,
        metadata || {},
        this.methodInfoGetDatabases,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/GetDatabases',
    request,
    metadata || {},
    this.methodInfoGetDatabases);
  }

  methodInfoGetTables = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/GetTables',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesResponse.deserializeBinary
  );

  getTables(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesResponse>;

  getTables(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesResponse>;

  getTables(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsGetTablesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/GetTables',
        request,
        metadata || {},
        this.methodInfoGetTables,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/GetTables',
    request,
    metadata || {},
    this.methodInfoGetTables);
  }

  methodInfoExecuteSql = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/ExecuteSql',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlResponse.deserializeBinary
  );

  executeSql(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlResponse>;

  executeSql(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlResponse>;

  executeSql(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsExecuteSqlResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/ExecuteSql',
        request,
        metadata || {},
        this.methodInfoExecuteSql,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/ExecuteSql',
    request,
    metadata || {},
    this.methodInfoExecuteSql);
  }

  methodInfoSnapshot = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/Snapshot',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotResponse.deserializeBinary
  );

  snapshot(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotResponse>;

  snapshot(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotResponse>;

  snapshot(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsSnapshotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/Snapshot',
        request,
        metadata || {},
        this.methodInfoSnapshot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/Snapshot',
    request,
    metadata || {},
    this.methodInfoSnapshot);
  }

  methodInfoRunDatasetTests = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunDatasetTests',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsResponse.deserializeBinary
  );

  runDatasetTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsResponse>;

  runDatasetTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsResponse>;

  runDatasetTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.DsRunDatasetTestsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunDatasetTests',
        request,
        metadata || {},
        this.methodInfoRunDatasetTests,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunDatasetTests',
    request,
    metadata || {},
    this.methodInfoRunDatasetTests);
  }

  methodInfoRunModelTests = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunModelTests',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsResponse.deserializeBinary
  );

  runModelTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsResponse>;

  runModelTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsResponse>;

  runModelTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunModelTestsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunModelTests',
        request,
        metadata || {},
        this.methodInfoRunModelTests,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunModelTests',
    request,
    metadata || {},
    this.methodInfoRunModelTests);
  }

  methodInfoRunDataDriftTests = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunDataDriftTests',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsResponse.deserializeBinary
  );

  runDataDriftTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsResponse>;

  runDataDriftTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsResponse>;

  runDataDriftTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunDriftTestsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunDataDriftTests',
        request,
        metadata || {},
        this.methodInfoRunDataDriftTests,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunDataDriftTests',
    request,
    metadata || {},
    this.methodInfoRunDataDriftTests);
  }

  methodInfoRunGroundTrueTests = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunGroundTrueTests',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsRequest,
    github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsResponse,
    (request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsResponse.deserializeBinary
  );

  runGroundTrueTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsResponse>;

  runGroundTrueTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsResponse>;

  runGroundTrueTests(
    request: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_data_v1_data_pb.RunGroundTruthTestsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunGroundTrueTests',
        request,
        metadata || {},
        this.methodInfoRunGroundTrueTests,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.data.v1.DataService/RunGroundTrueTests',
    request,
    metadata || {},
    this.methodInfoRunGroundTrueTests);
  }

}

