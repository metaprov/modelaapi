/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.forecast.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb from '../../../../../../github.com/metaprov/modelaapi/services/forecast/v1/forecast_pb';


export class ForecastServiceClient {
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

  methodInfoListForecasts = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/ListForecasts',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsRequest,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsResponse,
    (request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsResponse.deserializeBinary
  );

  listForecasts(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsResponse>;

  listForecasts(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsResponse>;

  listForecasts(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.ListForecastsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/ListForecasts',
        request,
        metadata || {},
        this.methodInfoListForecasts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/ListForecasts',
    request,
    metadata || {},
    this.methodInfoListForecasts);
  }

  methodInfoCreateForecast = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/CreateForecast',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastRequest,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastResponse,
    (request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastResponse.deserializeBinary
  );

  createForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastResponse>;

  createForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastResponse>;

  createForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.CreateForecastResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/CreateForecast',
        request,
        metadata || {},
        this.methodInfoCreateForecast,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/CreateForecast',
    request,
    metadata || {},
    this.methodInfoCreateForecast);
  }

  methodInfoGetForecast = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/GetForecast',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastRequest,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastResponse,
    (request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastResponse.deserializeBinary
  );

  getForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastResponse>;

  getForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastResponse>;

  getForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.GetForecastResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/GetForecast',
        request,
        metadata || {},
        this.methodInfoGetForecast,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/GetForecast',
    request,
    metadata || {},
    this.methodInfoGetForecast);
  }

  methodInfoUpdateForecast = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/UpdateForecast',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastRequest,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastResponse,
    (request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastResponse.deserializeBinary
  );

  updateForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastResponse>;

  updateForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastResponse>;

  updateForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.UpdateForecastResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/UpdateForecast',
        request,
        metadata || {},
        this.methodInfoUpdateForecast,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/UpdateForecast',
    request,
    metadata || {},
    this.methodInfoUpdateForecast);
  }

  methodInfoDeleteForecast = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/DeleteForecast',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastRequest,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastResponse,
    (request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastResponse.deserializeBinary
  );

  deleteForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastResponse>;

  deleteForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastResponse>;

  deleteForecast(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DeleteForecastResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/DeleteForecast',
        request,
        metadata || {},
        this.methodInfoDeleteForecast,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/DeleteForecast',
    request,
    metadata || {},
    this.methodInfoDeleteForecast);
  }

  methodInfoDownload = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/Download',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastRequest,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastResponse,
    (request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastResponse.deserializeBinary
  );

  download(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastResponse>;

  download(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastResponse>;

  download(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.DownloadForecastResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/Download',
        request,
        metadata || {},
        this.methodInfoDownload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/Download',
    request,
    metadata || {},
    this.methodInfoDownload);
  }

  methodInfoAbort = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/Abort',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastRequest,
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastResponse,
    (request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastResponse.deserializeBinary
  );

  abort(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastResponse>;

  abort(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastResponse>;

  abort(
    request: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_forecast_v1_forecast_pb.AbortForecastResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/Abort',
        request,
        metadata || {},
        this.methodInfoAbort,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.forecast.v1.ForecastService/Abort',
    request,
    metadata || {},
    this.methodInfoAbort);
  }

}

