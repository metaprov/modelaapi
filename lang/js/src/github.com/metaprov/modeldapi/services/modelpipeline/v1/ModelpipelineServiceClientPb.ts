/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.modelpipeline.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelpipeline/v1/modelpipeline_pb';


export class ModelPipelineServiceClient {
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

  methodInfoListModelPipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse.deserializeBinary
  );

  listModelPipelines(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse>;

  listModelPipelines(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse>;

  listModelPipelines(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/ListModelPipelines',
        request,
        metadata || {},
        this.methodInfoListModelPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/ListModelPipelines',
    request,
    metadata || {},
    this.methodInfoListModelPipelines);
  }

  methodInfoCreateModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse.deserializeBinary
  );

  createModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse>;

  createModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse>;

  createModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/CreateModelPipeline',
        request,
        metadata || {},
        this.methodInfoCreateModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/CreateModelPipeline',
    request,
    metadata || {},
    this.methodInfoCreateModelPipeline);
  }

  methodInfoGetModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse.deserializeBinary
  );

  getModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse>;

  getModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse>;

  getModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/GetModelPipeline',
        request,
        metadata || {},
        this.methodInfoGetModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/GetModelPipeline',
    request,
    metadata || {},
    this.methodInfoGetModelPipeline);
  }

  methodInfoUpdateModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse.deserializeBinary
  );

  updateModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse>;

  updateModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse>;

  updateModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/UpdateModelPipeline',
        request,
        metadata || {},
        this.methodInfoUpdateModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/UpdateModelPipeline',
    request,
    metadata || {},
    this.methodInfoUpdateModelPipeline);
  }

  methodInfoDeleteModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse.deserializeBinary
  );

  deleteModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse>;

  deleteModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse>;

  deleteModelPipeline(
    request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/DeleteModelPipeline',
        request,
        metadata || {},
        this.methodInfoDeleteModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/DeleteModelPipeline',
    request,
    metadata || {},
    this.methodInfoDeleteModelPipeline);
  }

}

