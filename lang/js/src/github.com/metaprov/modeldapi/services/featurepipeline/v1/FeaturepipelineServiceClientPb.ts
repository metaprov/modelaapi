/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.featurepipeline.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/featurepipeline/v1/featurepipeline_pb';


export class FeaturePipelineServiceClient {
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

  methodInfoListFeaturePipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse,
    (request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse.deserializeBinary
  );

  listFeaturePipelines(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse>;

  listFeaturePipelines(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse>;

  listFeaturePipelines(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines',
        request,
        metadata || {},
        this.methodInfoListFeaturePipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines',
    request,
    metadata || {},
    this.methodInfoListFeaturePipelines);
  }

  methodInfoCreateFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse,
    (request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse.deserializeBinary
  );

  createFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse>;

  createFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse>;

  createFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline',
        request,
        metadata || {},
        this.methodInfoCreateFeaturePipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline',
    request,
    metadata || {},
    this.methodInfoCreateFeaturePipeline);
  }

  methodInfoGetFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse,
    (request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse.deserializeBinary
  );

  getFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse>;

  getFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse>;

  getFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline',
        request,
        metadata || {},
        this.methodInfoGetFeaturePipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline',
    request,
    metadata || {},
    this.methodInfoGetFeaturePipeline);
  }

  methodInfoUpdateFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse,
    (request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse.deserializeBinary
  );

  updateFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse>;

  updateFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse>;

  updateFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline',
        request,
        metadata || {},
        this.methodInfoUpdateFeaturePipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline',
    request,
    metadata || {},
    this.methodInfoUpdateFeaturePipeline);
  }

  methodInfoDeleteFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse,
    (request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse.deserializeBinary
  );

  deleteFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse>;

  deleteFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse>;

  deleteFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline',
        request,
        metadata || {},
        this.methodInfoDeleteFeaturePipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline',
    request,
    metadata || {},
    this.methodInfoDeleteFeaturePipeline);
  }

}

