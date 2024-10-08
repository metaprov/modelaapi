/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.prediction.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: github.com/metaprov/modelaapi/services/prediction/v1/prediction.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb from '../../../../../../github.com/metaprov/modelaapi/services/prediction/v1/prediction_pb';


export class PredictionServiceClient {
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

  methodDescriptorListPredictions = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/ListPredictions',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsRequest,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsResponse,
    (request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsResponse.deserializeBinary
  );

  listPredictions(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsResponse>;

  listPredictions(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsResponse>;

  listPredictions(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.ListPredictionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/ListPredictions',
        request,
        metadata || {},
        this.methodDescriptorListPredictions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/ListPredictions',
    request,
    metadata || {},
    this.methodDescriptorListPredictions);
  }

  methodDescriptorCreatePrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/CreatePrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionRequest,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionResponse,
    (request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionResponse.deserializeBinary
  );

  createPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionResponse>;

  createPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionResponse>;

  createPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.CreatePredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/CreatePrediction',
        request,
        metadata || {},
        this.methodDescriptorCreatePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/CreatePrediction',
    request,
    metadata || {},
    this.methodDescriptorCreatePrediction);
  }

  methodDescriptorGetPrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/GetPrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionRequest,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionResponse,
    (request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionResponse.deserializeBinary
  );

  getPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionResponse>;

  getPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionResponse>;

  getPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.GetPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/GetPrediction',
        request,
        metadata || {},
        this.methodDescriptorGetPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/GetPrediction',
    request,
    metadata || {},
    this.methodDescriptorGetPrediction);
  }

  methodDescriptorUpdatePrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/UpdatePrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionRequest,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionResponse,
    (request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionResponse.deserializeBinary
  );

  updatePrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionResponse>;

  updatePrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionResponse>;

  updatePrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.UpdatePredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/UpdatePrediction',
        request,
        metadata || {},
        this.methodDescriptorUpdatePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/UpdatePrediction',
    request,
    metadata || {},
    this.methodDescriptorUpdatePrediction);
  }

  methodDescriptorDeletePrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DeletePrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionRequest,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionResponse,
    (request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionResponse.deserializeBinary
  );

  deletePrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionResponse>;

  deletePrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionResponse>;

  deletePrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DeletePredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DeletePrediction',
        request,
        metadata || {},
        this.methodDescriptorDeletePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DeletePrediction',
    request,
    metadata || {},
    this.methodDescriptorDeletePrediction);
  }

  methodDescriptorDownloadPrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DownloadPrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse,
    (request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse.deserializeBinary
  );

  downloadPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse>;

  downloadPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse>;

  downloadPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DownloadPrediction',
        request,
        metadata || {},
        this.methodDescriptorDownloadPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DownloadPrediction',
    request,
    metadata || {},
    this.methodDescriptorDownloadPrediction);
  }

  methodDescriptorAbortPrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/AbortPrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse,
    (request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse.deserializeBinary
  );

  abortPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse>;

  abortPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse>;

  abortPrediction(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/AbortPrediction',
        request,
        metadata || {},
        this.methodDescriptorAbortPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/AbortPrediction',
    request,
    metadata || {},
    this.methodDescriptorAbortPrediction);
  }

}

