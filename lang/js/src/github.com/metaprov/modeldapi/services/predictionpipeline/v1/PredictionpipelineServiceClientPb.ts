/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.predictionpipeline.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/predictionpipeline/v1/predictionpipeline_pb';


export class PredictionPipelineServiceClient {
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

  methodInfoListPredictionPipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesResponse.deserializeBinary
  );

  listPredictionPipelines(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesResponse>;

  listPredictionPipelines(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesResponse>;

  listPredictionPipelines(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/ListPredictionPipelines',
        request,
        metadata || {},
        this.methodInfoListPredictionPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/ListPredictionPipelines',
    request,
    metadata || {},
    this.methodInfoListPredictionPipelines);
  }

  methodInfoCreatePredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineResponse.deserializeBinary
  );

  createPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineResponse>;

  createPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineResponse>;

  createPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/CreatePredictionPipeline',
        request,
        metadata || {},
        this.methodInfoCreatePredictionPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/CreatePredictionPipeline',
    request,
    metadata || {},
    this.methodInfoCreatePredictionPipeline);
  }

  methodInfoGetPredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineResponse.deserializeBinary
  );

  getPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineResponse>;

  getPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineResponse>;

  getPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/GetPredictionPipeline',
        request,
        metadata || {},
        this.methodInfoGetPredictionPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/GetPredictionPipeline',
    request,
    metadata || {},
    this.methodInfoGetPredictionPipeline);
  }

  methodInfoUpdatePredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineResponse.deserializeBinary
  );

  updatePredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineResponse>;

  updatePredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineResponse>;

  updatePredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/UpdatePredictionPipeline',
        request,
        metadata || {},
        this.methodInfoUpdatePredictionPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/UpdatePredictionPipeline',
    request,
    metadata || {},
    this.methodInfoUpdatePredictionPipeline);
  }

  methodInfoDeletePredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineResponse.deserializeBinary
  );

  deletePredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineResponse>;

  deletePredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineResponse>;

  deletePredictionPipeline(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/DeletePredictionPipeline',
        request,
        metadata || {},
        this.methodInfoDeletePredictionPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/DeletePredictionPipeline',
    request,
    metadata || {},
    this.methodInfoDeletePredictionPipeline);
  }

  methodInfoDownload = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineResponse.deserializeBinary
  );

  download(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineResponse>;

  download(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineResponse>;

  download(
    request: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/Download',
        request,
        metadata || {},
        this.methodInfoDownload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipeline.v1.PredictionPipelineService/Download',
    request,
    metadata || {},
    this.methodInfoDownload);
  }

}

