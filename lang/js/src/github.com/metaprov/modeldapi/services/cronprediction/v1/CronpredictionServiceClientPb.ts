/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.cronprediction.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb from '../../../../../../github.com/metaprov/modeldapi/services/cronprediction/v1/cronprediction_pb';


export class CronPredictionServiceClient {
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

  methodInfoListCronPredictions = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsResponse,
    (request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsResponse.deserializeBinary
  );

  listCronPredictions(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsResponse>;

  listCronPredictions(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsResponse>;

  listCronPredictions(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.ListCronPredictionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/ListCronPredictions',
        request,
        metadata || {},
        this.methodInfoListCronPredictions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/ListCronPredictions',
    request,
    metadata || {},
    this.methodInfoListCronPredictions);
  }

  methodInfoCreateCronPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionResponse,
    (request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionResponse.deserializeBinary
  );

  createCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionResponse>;

  createCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionResponse>;

  createCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.CreateCronPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/CreateCronPrediction',
        request,
        metadata || {},
        this.methodInfoCreateCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/CreateCronPrediction',
    request,
    metadata || {},
    this.methodInfoCreateCronPrediction);
  }

  methodInfoGetCronPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionResponse,
    (request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionResponse.deserializeBinary
  );

  getCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionResponse>;

  getCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionResponse>;

  getCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.GetCronPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/GetCronPrediction',
        request,
        metadata || {},
        this.methodInfoGetCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/GetCronPrediction',
    request,
    metadata || {},
    this.methodInfoGetCronPrediction);
  }

  methodInfoUpdateCronPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionResponse,
    (request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionResponse.deserializeBinary
  );

  updateCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionResponse>;

  updateCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionResponse>;

  updateCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.UpdateCronPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/UpdateCronPrediction',
        request,
        metadata || {},
        this.methodInfoUpdateCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/UpdateCronPrediction',
    request,
    metadata || {},
    this.methodInfoUpdateCronPrediction);
  }

  methodInfoDeleteCronPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionResponse,
    (request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionResponse.deserializeBinary
  );

  deleteCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionResponse>;

  deleteCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionResponse>;

  deleteCronPrediction(
    request: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cronprediction_v1_cronprediction_pb.DeleteCronPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/DeleteCronPrediction',
        request,
        metadata || {},
        this.methodInfoDeleteCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cronprediction.v1.CronPredictionService/DeleteCronPrediction',
    request,
    metadata || {},
    this.methodInfoDeleteCronPrediction);
  }

}

