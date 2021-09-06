/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.featurehistogram.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb from '../../../../../../github.com/metaprov/modelaapi/services/featurehistogram/v1/featurehistogram_pb';


export class FeatureHistogramServiceClient {
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

  methodInfoListFeatureHistograms = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsResponse,
    (request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsResponse.deserializeBinary
  );

  listFeatureHistograms(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsResponse>;

  listFeatureHistograms(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsResponse>;

  listFeatureHistograms(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.ListFeatureHistogramsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/ListFeatureHistograms',
        request,
        metadata || {},
        this.methodInfoListFeatureHistograms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/ListFeatureHistograms',
    request,
    metadata || {},
    this.methodInfoListFeatureHistograms);
  }

  methodInfoCreateFeatureHistogram = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramResponse,
    (request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramResponse.deserializeBinary
  );

  createFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramResponse>;

  createFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramResponse>;

  createFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.CreateFeatureHistogramResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/CreateFeatureHistogram',
        request,
        metadata || {},
        this.methodInfoCreateFeatureHistogram,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/CreateFeatureHistogram',
    request,
    metadata || {},
    this.methodInfoCreateFeatureHistogram);
  }

  methodInfoGetFeatureHistogram = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramResponse,
    (request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramResponse.deserializeBinary
  );

  getFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramResponse>;

  getFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramResponse>;

  getFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.GetFeatureHistogramResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/GetFeatureHistogram',
        request,
        metadata || {},
        this.methodInfoGetFeatureHistogram,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/GetFeatureHistogram',
    request,
    metadata || {},
    this.methodInfoGetFeatureHistogram);
  }

  methodInfoUpdateFeatureHistogram = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramResponse,
    (request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramResponse.deserializeBinary
  );

  updateFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramResponse>;

  updateFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramResponse>;

  updateFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.UpdateFeatureHistogramResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/UpdateFeatureHistogram',
        request,
        metadata || {},
        this.methodInfoUpdateFeatureHistogram,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/UpdateFeatureHistogram',
    request,
    metadata || {},
    this.methodInfoUpdateFeatureHistogram);
  }

  methodInfoDeleteFeatureHistogram = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramResponse,
    (request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramResponse.deserializeBinary
  );

  deleteFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramResponse>;

  deleteFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramResponse>;

  deleteFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurehistogram_v1_featurehistogram_pb.DeleteFeatureHistogramResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/DeleteFeatureHistogram',
        request,
        metadata || {},
        this.methodInfoDeleteFeatureHistogram,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/DeleteFeatureHistogram',
    request,
    metadata || {},
    this.methodInfoDeleteFeatureHistogram);
  }

}

