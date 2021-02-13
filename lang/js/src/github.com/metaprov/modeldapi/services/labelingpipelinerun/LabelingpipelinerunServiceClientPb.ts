/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.labelingpipelinerun
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb from '../../../../../github.com/metaprov/modeldapi/services/labelingpipelinerun/labelingpipelinerun_pb';


export class LabelingPipelineRunServiceClient {
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

  methodInfoListLabelingPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunResponse.deserializeBinary
  );

  listLabelingPipelineRuns(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunResponse>;

  listLabelingPipelineRuns(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunResponse>;

  listLabelingPipelineRuns(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.ListLabelingPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/ListLabelingPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListLabelingPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/ListLabelingPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListLabelingPipelineRuns);
  }

  methodInfoCreateLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse.deserializeBinary
  );

  createLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse>;

  createLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse>;

  createLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/CreateLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/CreateLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateLabelingPipelineRun);
  }

  methodInfoGetLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunResponse.deserializeBinary
  );

  getLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunResponse>;

  getLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunResponse>;

  getLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.GetLabelingPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/GetLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/GetLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetLabelingPipelineRun);
  }

  methodInfoUpdateLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse.deserializeBinary
  );

  updateLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse>;

  updateLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse>;

  updateLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/UpdateLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/UpdateLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateLabelingPipelineRun);
  }

  methodInfoDeleteLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse.deserializeBinary
  );

  deleteLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse>;

  deleteLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse>;

  deleteLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipelinerun_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/DeleteLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.labelingpipelinerun.LabelingPipelineRunService/DeleteLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteLabelingPipelineRun);
  }

}

