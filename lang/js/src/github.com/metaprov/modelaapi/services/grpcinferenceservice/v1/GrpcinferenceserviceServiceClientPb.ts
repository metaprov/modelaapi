/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.grpcinferenceservice.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoServerLive = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveResponse>;

  serverLive(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerLiveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerLive',
        request,
        metadata || {},
        this.methodInfoServerLive,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerLive',
    request,
    metadata || {},
    this.methodInfoServerLive);
  }

  methodInfoServerReady = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyResponse>;

  serverReady(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerReadyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerReady',
        request,
        metadata || {},
        this.methodInfoServerReady,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerReady',
    request,
    metadata || {},
    this.methodInfoServerReady);
  }

  methodInfoModelReady = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyResponse>;

  modelReady(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelReadyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelReady',
        request,
        metadata || {},
        this.methodInfoModelReady,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelReady',
    request,
    metadata || {},
    this.methodInfoModelReady);
  }

  methodInfoServerMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataResponse>;

  serverMetadata(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ServerMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerMetadata',
        request,
        metadata || {},
        this.methodInfoServerMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ServerMetadata',
    request,
    metadata || {},
    this.methodInfoServerMetadata);
  }

  methodInfoModelMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataResponse>;

  modelMetadata(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelMetadata',
        request,
        metadata || {},
        this.methodInfoModelMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelMetadata',
    request,
    metadata || {},
    this.methodInfoModelMetadata);
  }

  methodInfoModelInfer = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferResponse>;

  modelInfer(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.ModelInferResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelInfer',
        request,
        metadata || {},
        this.methodInfoModelInfer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/ModelInfer',
    request,
    metadata || {},
    this.methodInfoModelInfer);
  }

  methodInfoGetPredictor = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorResponse>;

  getPredictor(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetPredictorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetPredictor',
        request,
        metadata || {},
        this.methodInfoGetPredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetPredictor',
    request,
    metadata || {},
    this.methodInfoGetPredictor);
  }

  methodInfoGetModel = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelResponse>;

  getModel(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.GetModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetModel',
        request,
        metadata || {},
        this.methodInfoGetModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/GetModel',
    request,
    metadata || {},
    this.methodInfoGetModel);
  }

  methodInfoPredict = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictResponse>;

  predict(
    request: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_grpcinferenceservice_v1_grpcinferenceservice_pb.PredictResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/Predict',
        request,
        metadata || {},
        this.methodInfoPredict,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GRPCInferenceService/Predict',
    request,
    metadata || {},
    this.methodInfoPredict);
  }

}

