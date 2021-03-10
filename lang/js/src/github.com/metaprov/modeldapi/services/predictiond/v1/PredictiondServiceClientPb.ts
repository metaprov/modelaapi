/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.predictiond.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb from '../../../../../../github.com/metaprov/modeldapi/services/predictiond/v1/predictiond_pb';


export class PredictionServerClient {
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
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveResponse,
    (request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveResponse.deserializeBinary
  );

  serverLive(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveResponse>;

  serverLive(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveResponse>;

  serverLive(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerLiveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerLive',
        request,
        metadata || {},
        this.methodInfoServerLive,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerLive',
    request,
    metadata || {},
    this.methodInfoServerLive);
  }

  methodInfoServerReady = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyResponse,
    (request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyResponse.deserializeBinary
  );

  serverReady(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyResponse>;

  serverReady(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyResponse>;

  serverReady(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerReadyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerReady',
        request,
        metadata || {},
        this.methodInfoServerReady,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerReady',
    request,
    metadata || {},
    this.methodInfoServerReady);
  }

  methodInfoModelReady = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyResponse,
    (request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyResponse.deserializeBinary
  );

  modelReady(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyResponse>;

  modelReady(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyResponse>;

  modelReady(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelReadyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ModelReady',
        request,
        metadata || {},
        this.methodInfoModelReady,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ModelReady',
    request,
    metadata || {},
    this.methodInfoModelReady);
  }

  methodInfoServerMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataResponse,
    (request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataResponse.deserializeBinary
  );

  serverMetadata(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataResponse>;

  serverMetadata(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataResponse>;

  serverMetadata(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ServerMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerMetadata',
        request,
        metadata || {},
        this.methodInfoServerMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerMetadata',
    request,
    metadata || {},
    this.methodInfoServerMetadata);
  }

  methodInfoModelMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataResponse,
    (request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataResponse.deserializeBinary
  );

  modelMetadata(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataResponse>;

  modelMetadata(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataResponse>;

  modelMetadata(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.ModelMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ModelMetadata',
        request,
        metadata || {},
        this.methodInfoModelMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ModelMetadata',
    request,
    metadata || {},
    this.methodInfoModelMetadata);
  }

  methodInfoGetPredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorResponse,
    (request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorResponse.deserializeBinary
  );

  getPredictor(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorResponse>;

  getPredictor(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorResponse>;

  getPredictor(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetPredictorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/GetPredictor',
        request,
        metadata || {},
        this.methodInfoGetPredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/GetPredictor',
    request,
    metadata || {},
    this.methodInfoGetPredictor);
  }

  methodInfoGetModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest,
    (request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest.deserializeBinary
  );

  getModel(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest>;

  getModel(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest>;

  getModel(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.GetModelRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/GetModel',
        request,
        metadata || {},
        this.methodInfoGetModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/GetModel',
    request,
    metadata || {},
    this.methodInfoGetModel);
  }

  methodInfoPredict = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictResponse,
    (request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictResponse.deserializeBinary
  );

  predict(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictResponse>;

  predict(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictResponse>;

  predict(
    request: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictiond_v1_predictiond_pb.PredictResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/Predict',
        request,
        metadata || {},
        this.methodInfoPredict,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/Predict',
    request,
    metadata || {},
    this.methodInfoPredict);
  }

}

