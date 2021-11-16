/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.prediction.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListPredictions = new grpcWeb.MethodDescriptor(
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
        this.methodInfoListPredictions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/ListPredictions',
    request,
    metadata || {},
    this.methodInfoListPredictions);
  }

  methodInfoCreatePrediction = new grpcWeb.MethodDescriptor(
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
        this.methodInfoCreatePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/CreatePrediction',
    request,
    metadata || {},
    this.methodInfoCreatePrediction);
  }

  methodInfoGetPrediction = new grpcWeb.MethodDescriptor(
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
        this.methodInfoGetPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/GetPrediction',
    request,
    metadata || {},
    this.methodInfoGetPrediction);
  }

  methodInfoUpdatePrediction = new grpcWeb.MethodDescriptor(
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
        this.methodInfoUpdatePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/UpdatePrediction',
    request,
    metadata || {},
    this.methodInfoUpdatePrediction);
  }

  methodInfoDeletePrediction = new grpcWeb.MethodDescriptor(
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
        this.methodInfoDeletePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DeletePrediction',
    request,
    metadata || {},
    this.methodInfoDeletePrediction);
  }

  methodInfoDownload = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/Download',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse,
    (request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse.deserializeBinary
  );

  download(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse>;

  download(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse>;

  download(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.DownloadPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/Download',
        request,
        metadata || {},
        this.methodInfoDownload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/Download',
    request,
    metadata || {},
    this.methodInfoDownload);
  }

  methodInfoAbort = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/Abort',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest,
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse,
    (request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse.deserializeBinary
  );

  abort(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse>;

  abort(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse>;

  abort(
    request: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_prediction_v1_prediction_pb.AbortPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/Abort',
        request,
        metadata || {},
        this.methodInfoAbort,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/Abort',
    request,
    metadata || {},
    this.methodInfoAbort);
  }

}

