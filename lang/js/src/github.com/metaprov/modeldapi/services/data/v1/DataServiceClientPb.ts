/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.data.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_data_v1_data_pb from '../../../../../../github.com/metaprov/modeldapi/services/data/v1/data_pb';


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

  methodInfoReadFile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary
  );

  readFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFile',
        request,
        metadata || {},
        this.methodInfoReadFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFile',
    request,
    metadata || {},
    this.methodInfoReadFile);
  }

  methodInfoReadFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary
  );

  readFeature(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readFeature(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readFeature(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFeature',
        request,
        metadata || {},
        this.methodInfoReadFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFeature',
    request,
    metadata || {},
    this.methodInfoReadFeature);
  }

  methodInfoReadAudio = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadAudioRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary
  );

  readAudio(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadAudioRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readAudio(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadAudioRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  readAudio(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadAudioRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadAudio',
        request,
        metadata || {},
        this.methodInfoReadAudio,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadAudio',
    request,
    metadata || {},
    this.methodInfoReadAudio);
  }

  methodInfoRunDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse.deserializeBinary
  );

  runDataPipeline(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse>;

  runDataPipeline(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse>;

  runDataPipeline(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunDataPipeline',
        request,
        metadata || {},
        this.methodInfoRunDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunDataPipeline',
    request,
    metadata || {},
    this.methodInfoRunDataPipeline);
  }

  methodInfoRunRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse.deserializeBinary
  );

  runRecipe(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse>;

  runRecipe(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse>;

  runRecipe(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunRecipe',
        request,
        metadata || {},
        this.methodInfoRunRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunRecipe',
    request,
    metadata || {},
    this.methodInfoRunRecipe);
  }

  methodInfoWriteFile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsWriteFileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary
  );

  writeFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsWriteFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  writeFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsWriteFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse>;

  writeFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsWriteFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/WriteFile',
        request,
        metadata || {},
        this.methodInfoWriteFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/WriteFile',
    request,
    metadata || {},
    this.methodInfoWriteFile);
  }

  methodInfoValidateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse.deserializeBinary
  );

  validateDataset(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse>;

  validateDataset(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse>;

  validateDataset(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/ValidateDataset',
        request,
        metadata || {},
        this.methodInfoValidateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/ValidateDataset',
    request,
    metadata || {},
    this.methodInfoValidateDataset);
  }

  methodInfoGenerateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse.deserializeBinary
  );

  generateDataset(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse>;

  generateDataset(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse>;

  generateDataset(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/GenerateDataset',
        request,
        metadata || {},
        this.methodInfoGenerateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/GenerateDataset',
    request,
    metadata || {},
    this.methodInfoGenerateDataset);
  }

  methodInfoSplitDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse.deserializeBinary
  );

  splitDataset(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse>;

  splitDataset(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse>;

  splitDataset(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDataset',
        request,
        metadata || {},
        this.methodInfoSplitDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDataset',
    request,
    metadata || {},
    this.methodInfoSplitDataset);
  }

  methodInfoCreateColumnProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse.deserializeBinary
  );

  createColumnProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse>;

  createColumnProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse>;

  createColumnProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateColumnProfile',
        request,
        metadata || {},
        this.methodInfoCreateColumnProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateColumnProfile',
    request,
    metadata || {},
    this.methodInfoCreateColumnProfile);
  }

  methodInfoInferSchema = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse.deserializeBinary
  );

  inferSchema(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse>;

  inferSchema(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse>;

  inferSchema(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/InferSchema',
        request,
        metadata || {},
        this.methodInfoInferSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/InferSchema',
    request,
    metadata || {},
    this.methodInfoInferSchema);
  }

  methodInfoGetTableView = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse.deserializeBinary
  );

  getTableView(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse>;

  getTableView(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse>;

  getTableView(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetTableView',
        request,
        metadata || {},
        this.methodInfoGetTableView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetTableView',
    request,
    metadata || {},
    this.methodInfoGetTableView);
  }

  methodInfoGetMisclassTableView = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse.deserializeBinary
  );

  getMisclassTableView(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse>;

  getMisclassTableView(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse>;

  getMisclassTableView(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetMisclassTableView',
        request,
        metadata || {},
        this.methodInfoGetMisclassTableView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetMisclassTableView',
    request,
    metadata || {},
    this.methodInfoGetMisclassTableView);
  }

  methodInfoSplitDatasetToRungs = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse.deserializeBinary
  );

  splitDatasetToRungs(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse>;

  splitDatasetToRungs(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse>;

  splitDatasetToRungs(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDatasetToRungs',
        request,
        metadata || {},
        this.methodInfoSplitDatasetToRungs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDatasetToRungs',
    request,
    metadata || {},
    this.methodInfoSplitDatasetToRungs);
  }

  methodInfoCreateDatasetProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse.deserializeBinary
  );

  createDatasetProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse>;

  createDatasetProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse>;

  createDatasetProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetProfile',
        request,
        metadata || {},
        this.methodInfoCreateDatasetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetProfile',
    request,
    metadata || {},
    this.methodInfoCreateDatasetProfile);
  }

  methodInfoCreateModelProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse.deserializeBinary
  );

  createModelProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse>;

  createModelProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse>;

  createModelProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelProfile',
        request,
        metadata || {},
        this.methodInfoCreateModelProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelProfile',
    request,
    metadata || {},
    this.methodInfoCreateModelProfile);
  }

  methodInfoCreateStudyProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse.deserializeBinary
  );

  createStudyProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse>;

  createStudyProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse>;

  createStudyProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyProfile',
        request,
        metadata || {},
        this.methodInfoCreateStudyProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyProfile',
    request,
    metadata || {},
    this.methodInfoCreateStudyProfile);
  }

  methodInfoCreateRecipeProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse.deserializeBinary
  );

  createRecipeProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse>;

  createRecipeProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse>;

  createRecipeProfile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateRecipeProfile',
        request,
        metadata || {},
        this.methodInfoCreateRecipeProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateRecipeProfile',
    request,
    metadata || {},
    this.methodInfoCreateRecipeProfile);
  }

  methodInfoCreateModelReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateModelReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createModelReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateModelReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createModelReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateModelReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createModelReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateModelReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelReport',
        request,
        metadata || {},
        this.methodInfoCreateModelReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelReport',
    request,
    metadata || {},
    this.methodInfoCreateModelReport);
  }

  methodInfoCreateStudyReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateStudyReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createStudyReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateStudyReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createStudyReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateStudyReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createStudyReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateStudyReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyReport',
        request,
        metadata || {},
        this.methodInfoCreateStudyReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyReport',
    request,
    metadata || {},
    this.methodInfoCreateStudyReport);
  }

  methodInfoCreateDatasetReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateDatasetReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createDatasetReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateDatasetReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createDatasetReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateDatasetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createDatasetReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateDatasetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetReport',
        request,
        metadata || {},
        this.methodInfoCreateDatasetReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetReport',
    request,
    metadata || {},
    this.methodInfoCreateDatasetReport);
  }

  methodInfoCreateForecastReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateForecastReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createForecastReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateForecastReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createForecastReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateForecastReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createForecastReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateForecastReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateForecastReport',
        request,
        metadata || {},
        this.methodInfoCreateForecastReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateForecastReport',
    request,
    metadata || {},
    this.methodInfoCreateForecastReport);
  }

  methodInfoCreateSummaryReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateSummaryReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary
  );

  createSummaryReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateSummaryReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createSummaryReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateSummaryReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse>;

  createSummaryReport(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateSummaryReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateSummaryReport',
        request,
        metadata || {},
        this.methodInfoCreateSummaryReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateSummaryReport',
    request,
    metadata || {},
    this.methodInfoCreateSummaryReport);
  }

  methodInfoAskModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse.deserializeBinary
  );

  askModel(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse>;

  askModel(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse>;

  askModel(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/AskModel',
        request,
        metadata || {},
        this.methodInfoAskModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/AskModel',
    request,
    metadata || {},
    this.methodInfoAskModel);
  }

  methodInfoTellModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse.deserializeBinary
  );

  tellModel(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse>;

  tellModel(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse>;

  tellModel(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/TellModel',
        request,
        metadata || {},
        this.methodInfoTellModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/TellModel',
    request,
    metadata || {},
    this.methodInfoTellModel);
  }

  methodInfoPartitionForecastFile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse.deserializeBinary
  );

  partitionForecastFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse>;

  partitionForecastFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse>;

  partitionForecastFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/PartitionForecastFile',
        request,
        metadata || {},
        this.methodInfoPartitionForecastFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/PartitionForecastFile',
    request,
    metadata || {},
    this.methodInfoPartitionForecastFile);
  }

  methodInfoMergeForecastFile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse.deserializeBinary
  );

  mergeForecastFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse>;

  mergeForecastFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse>;

  mergeForecastFile(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/MergeForecastFile',
        request,
        metadata || {},
        this.methodInfoMergeForecastFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/MergeForecastFile',
    request,
    metadata || {},
    this.methodInfoMergeForecastFile);
  }

  methodInfoValidateModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelResponse.deserializeBinary
  );

  validateModel(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelResponse>;

  validateModel(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelResponse>;

  validateModel(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.ValidateModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/ValidateModel',
        request,
        metadata || {},
        this.methodInfoValidateModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/ValidateModel',
    request,
    metadata || {},
    this.methodInfoValidateModel);
  }

  methodInfoDsTestConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionResponse.deserializeBinary
  );

  dsTestConnection(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionResponse>;

  dsTestConnection(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionResponse>;

  dsTestConnection(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsTestConnectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/DsTestConnection',
        request,
        metadata || {},
        this.methodInfoDsTestConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/DsTestConnection',
    request,
    metadata || {},
    this.methodInfoDsTestConnection);
  }

  methodInfoShutDown = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownResponse.deserializeBinary
  );

  shutDown(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownResponse>;

  shutDown(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownResponse>;

  shutDown(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/ShutDown',
        request,
        metadata || {},
        this.methodInfoShutDown,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/ShutDown',
    request,
    metadata || {},
    this.methodInfoShutDown);
  }

  methodInfoStudyEnded = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedResponse.deserializeBinary
  );

  studyEnded(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedResponse>;

  studyEnded(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedResponse>;

  studyEnded(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.DsStudyEndedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/StudyEnded',
        request,
        metadata || {},
        this.methodInfoStudyEnded,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/StudyEnded',
    request,
    metadata || {},
    this.methodInfoStudyEnded);
  }

  methodInfoSaveOptimizerDB = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBResponse,
    (request: github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBResponse.deserializeBinary
  );

  saveOptimizerDB(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBResponse>;

  saveOptimizerDB(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBResponse>;

  saveOptimizerDB(
    request: github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_data_v1_data_pb.SaveOptimizerDBResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.data.v1.DataService/SaveOptimizerDB',
        request,
        metadata || {},
        this.methodInfoSaveOptimizerDB,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.data.v1.DataService/SaveOptimizerDB',
    request,
    metadata || {},
    this.methodInfoSaveOptimizerDB);
  }

}

