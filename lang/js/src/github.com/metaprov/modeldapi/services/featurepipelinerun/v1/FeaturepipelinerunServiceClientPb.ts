/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.featurepipelinerun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb from '../../../../../../github.com/metaprov/modelaapi/services/featurepipelinerun/v1/featurepipelinerun_pb';


export class FeaturePipelineRunServiceClient {
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

  methodInfoListFeaturePipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse.deserializeBinary
  );

  listFeaturePipelineRuns(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse>;

  listFeaturePipelineRuns(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse>;

  listFeaturePipelineRuns(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/ListFeaturePipelineRuns',
        request,
        metadata || {},
        this.methodInfoListFeaturePipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/ListFeaturePipelineRuns',
    request,
    metadata || {},
    this.methodInfoListFeaturePipelineRuns);
  }

  methodInfoCreateFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse.deserializeBinary
  );

  createFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse>;

  createFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse>;

  createFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/CreateFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/CreateFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateFeaturePipelineRun);
  }

  methodInfoGetFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse.deserializeBinary
  );

  getFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse>;

  getFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse>;

  getFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/GetFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoGetFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/GetFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoGetFeaturePipelineRun);
  }

  methodInfoUpdateFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse.deserializeBinary
  );

  updateFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse>;

  updateFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse>;

  updateFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/UpdateFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/UpdateFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateFeaturePipelineRun);
  }

  methodInfoDeleteFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse,
    (request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse.deserializeBinary
  );

  deleteFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse>;

  deleteFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse>;

  deleteFeaturePipelineRun(
    request: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/DeleteFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featurepipelinerun.v1.FeaturePipelineRunService/DeleteFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteFeaturePipelineRun);
  }

}

