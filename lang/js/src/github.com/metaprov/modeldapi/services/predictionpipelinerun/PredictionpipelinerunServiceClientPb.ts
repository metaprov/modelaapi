/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.predictionpipelinerun
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb from '../../../../../github.com/metaprov/modeldapi/services/predictionpipelinerun/predictionpipelinerun_pb';


export class PredictionPipelineRunServiceClient {
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

  methodInfoListPredictionPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse.deserializeBinary
  );

  listPredictionPipelineRuns(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse>;

  listPredictionPipelineRuns(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse>;

  listPredictionPipelineRuns(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/ListPredictionPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListPredictionPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/ListPredictionPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListPredictionPipelineRuns);
  }

  methodInfoCreatePredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse.deserializeBinary
  );

  createPredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse>;

  createPredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse>;

  createPredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/CreatePredictionPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreatePredictionPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/CreatePredictionPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreatePredictionPipelineRun);
  }

  methodInfoGetPredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunResponse.deserializeBinary
  );

  getPredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunResponse>;

  getPredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunResponse>;

  getPredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.GetPredictionPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/GetPredictionPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetPredictionPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/GetPredictionPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetPredictionPipelineRun);
  }

  methodInfoUpdatePredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse.deserializeBinary
  );

  updatePredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse>;

  updatePredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse>;

  updatePredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/UpdatePredictionPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdatePredictionPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/UpdatePredictionPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdatePredictionPipelineRun);
  }

  methodInfoDeletePredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse.deserializeBinary
  );

  deletePredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse>;

  deletePredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse>;

  deletePredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/DeletePredictionPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeletePredictionPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/DeletePredictionPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeletePredictionPipelineRun);
  }

  methodInfoDownload = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunResponse.deserializeBinary
  );

  download(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunResponse>;

  download(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunResponse>;

  download(
    request: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_predictionpipelinerun_predictionpipelinerun_pb.DownloadPredictionPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/Download',
        request,
        metadata || {},
        this.methodInfoDownload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.predictionpipelinerun.PredictionPipelineRunService/Download',
    request,
    metadata || {},
    this.methodInfoDownload);
  }

}

