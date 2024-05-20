/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.grpcinferenceservice.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: github.com/metaprov/modelaapi/services/grpcinferenceservice/v1/grpcinferenceservice.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb from '../../../../../../github.com/metaprov/modelaapi/services/grpcinferenceservice/v1/grpcinferenceservice_pb';


export class GRPCInferenceServiceClient {
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

  methodDescriptorServerLive = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerLive',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveResponse.deserializeBinary
  );

  serverLive(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveResponse>;

  serverLive(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveResponse>;

  serverLive(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerLive',
        request,
        metadata || {},
        this.methodDescriptorServerLive,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerLive',
    request,
    metadata || {},
    this.methodDescriptorServerLive);
  }

  methodDescriptorServerReady = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerReady',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyResponse.deserializeBinary
  );

  serverReady(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyResponse>;

  serverReady(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyResponse>;

  serverReady(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerReady',
        request,
        metadata || {},
        this.methodDescriptorServerReady,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerReady',
    request,
    metadata || {},
    this.methodDescriptorServerReady);
  }

  methodDescriptorModelReady = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelReady',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyResponse.deserializeBinary
  );

  modelReady(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyResponse>;

  modelReady(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyResponse>;

  modelReady(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelReady',
        request,
        metadata || {},
        this.methodDescriptorModelReady,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelReady',
    request,
    metadata || {},
    this.methodDescriptorModelReady);
  }

  methodDescriptorServerMetadata = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerMetadata',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataResponse.deserializeBinary
  );

  serverMetadata(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataResponse>;

  serverMetadata(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataResponse>;

  serverMetadata(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerMetadata',
        request,
        metadata || {},
        this.methodDescriptorServerMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerMetadata',
    request,
    metadata || {},
    this.methodDescriptorServerMetadata);
  }

  methodDescriptorModelMetadata = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelMetadata',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataResponse.deserializeBinary
  );

  modelMetadata(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataResponse>;

  modelMetadata(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataResponse>;

  modelMetadata(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelMetadata',
        request,
        metadata || {},
        this.methodDescriptorModelMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelMetadata',
    request,
    metadata || {},
    this.methodDescriptorModelMetadata);
  }

  methodDescriptorModelInfer = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelInfer',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferResponse.deserializeBinary
  );

  modelInfer(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferResponse>;

  modelInfer(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferResponse>;

  modelInfer(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelInfer',
        request,
        metadata || {},
        this.methodDescriptorModelInfer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelInfer',
    request,
    metadata || {},
    this.methodDescriptorModelInfer);
  }

  methodDescriptorGetPredictor = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetPredictor',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorResponse.deserializeBinary
  );

  getPredictor(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorResponse>;

  getPredictor(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorResponse>;

  getPredictor(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetPredictor',
        request,
        metadata || {},
        this.methodDescriptorGetPredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetPredictor',
    request,
    metadata || {},
    this.methodDescriptorGetPredictor);
  }

  methodDescriptorGetModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelResponse.deserializeBinary
  );

  getModel(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelResponse>;

  getModel(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelResponse>;

  getModel(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetModel',
        request,
        metadata || {},
        this.methodDescriptorGetModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetModel',
    request,
    metadata || {},
    this.methodDescriptorGetModel);
  }

  methodDescriptorPredict = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/Predict',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictResponse.deserializeBinary
  );

  predict(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictResponse>;

  predict(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictResponse>;

  predict(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/Predict',
        request,
        metadata || {},
        this.methodDescriptorPredict,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/Predict',
    request,
    metadata || {},
    this.methodDescriptorPredict);
  }

  methodDescriptorShutdown = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/Shutdown',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownRequest,
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownResponse,
    (request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownResponse.deserializeBinary
  );

  shutdown(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerShutdownResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/Shutdown',
        request,
        metadata || {},
        this.methodDescriptorShutdown,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/Shutdown',
    request,
    metadata || {},
    this.methodDescriptorShutdown);
  }

}

