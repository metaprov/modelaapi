/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.featureview.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb from '../../../../../../github.com/metaprov/modelaapi/services/featureview/v1/featureview_pb';


export class FeatureViewServiceClient {
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

  methodInfoListFeatureViews = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/ListFeatureViews',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewRequest,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewResponse,
    (request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewResponse.deserializeBinary
  );

  listFeatureViews(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewResponse>;

  listFeatureViews(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewResponse>;

  listFeatureViews(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ListFeatureViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/ListFeatureViews',
        request,
        metadata || {},
        this.methodInfoListFeatureViews,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/ListFeatureViews',
    request,
    metadata || {},
    this.methodInfoListFeatureViews);
  }

  methodInfoCreateFeatureView = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/CreateFeatureView',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewRequest,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewResponse,
    (request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewResponse.deserializeBinary
  );

  createFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewResponse>;

  createFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewResponse>;

  createFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.CreateFeatureViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/CreateFeatureView',
        request,
        metadata || {},
        this.methodInfoCreateFeatureView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/CreateFeatureView',
    request,
    metadata || {},
    this.methodInfoCreateFeatureView);
  }

  methodInfoGetFeatureView = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/GetFeatureView',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewRequest,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewResponse,
    (request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewResponse.deserializeBinary
  );

  getFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewResponse>;

  getFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewResponse>;

  getFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.GetFeatureViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/GetFeatureView',
        request,
        metadata || {},
        this.methodInfoGetFeatureView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/GetFeatureView',
    request,
    metadata || {},
    this.methodInfoGetFeatureView);
  }

  methodInfoUpdateFeatureView = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/UpdateFeatureView',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewRequest,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewResponse,
    (request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewResponse.deserializeBinary
  );

  updateFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewResponse>;

  updateFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewResponse>;

  updateFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.UpdateFeatureViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/UpdateFeatureView',
        request,
        metadata || {},
        this.methodInfoUpdateFeatureView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/UpdateFeatureView',
    request,
    metadata || {},
    this.methodInfoUpdateFeatureView);
  }

  methodInfoDeleteFeatureView = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/DeleteFeatureView',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewRequest,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewResponse,
    (request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewResponse.deserializeBinary
  );

  deleteFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewResponse>;

  deleteFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewResponse>;

  deleteFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.DeleteFeatureViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/DeleteFeatureView',
        request,
        metadata || {},
        this.methodInfoDeleteFeatureView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/DeleteFeatureView',
    request,
    metadata || {},
    this.methodInfoDeleteFeatureView);
  }

  methodInfoPauseFeatureView = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/PauseFeatureView',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewRequest,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewResponse,
    (request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewResponse.deserializeBinary
  );

  pauseFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewResponse>;

  pauseFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewResponse>;

  pauseFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.PauseFeatureViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/PauseFeatureView',
        request,
        metadata || {},
        this.methodInfoPauseFeatureView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/PauseFeatureView',
    request,
    metadata || {},
    this.methodInfoPauseFeatureView);
  }

  methodInfoResumeFeatureView = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/ResumeFeatureView',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewRequest,
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewResponse,
    (request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewResponse.deserializeBinary
  );

  resumeFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewResponse>;

  resumeFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewResponse>;

  resumeFeatureView(
    request: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featureview_v1_featureview_pb.ResumeFeatureViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/ResumeFeatureView',
        request,
        metadata || {},
        this.methodInfoResumeFeatureView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featureview.v1.FeatureViewService/ResumeFeatureView',
    request,
    metadata || {},
    this.methodInfoResumeFeatureView);
  }

}

