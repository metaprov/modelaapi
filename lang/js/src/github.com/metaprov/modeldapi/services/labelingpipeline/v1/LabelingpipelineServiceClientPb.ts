/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.labelingpipeline.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/labelingpipeline/v1/labelingpipeline_pb';


export class LabelingPipelineServiceClient {
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

  methodInfoListLabelingPipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse.deserializeBinary
  );

  listLabelingPipelines(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse>;

  listLabelingPipelines(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse>;

  listLabelingPipelines(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/ListLabelingPipelines',
        request,
        metadata || {},
        this.methodInfoListLabelingPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/ListLabelingPipelines',
    request,
    metadata || {},
    this.methodInfoListLabelingPipelines);
  }

  methodInfoCreateLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse.deserializeBinary
  );

  createLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse>;

  createLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse>;

  createLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/CreateLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoCreateLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/CreateLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoCreateLabelingPipeline);
  }

  methodInfoGetLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse.deserializeBinary
  );

  getLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse>;

  getLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse>;

  getLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/GetLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoGetLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/GetLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoGetLabelingPipeline);
  }

  methodInfoUpdateLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse.deserializeBinary
  );

  updateLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse>;

  updateLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse>;

  updateLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/UpdateLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoUpdateLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/UpdateLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoUpdateLabelingPipeline);
  }

  methodInfoDeleteLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse.deserializeBinary
  );

  deleteLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse>;

  deleteLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse>;

  deleteLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/DeleteLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoDeleteLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/DeleteLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoDeleteLabelingPipeline);
  }

  methodInfoPauseLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineResponse.deserializeBinary
  );

  pauseLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineResponse>;

  pauseLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineResponse>;

  pauseLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.PauseLabelingPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/PauseLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoPauseLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/PauseLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoPauseLabelingPipeline);
  }

  methodInfoResumeLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineResponse.deserializeBinary
  );

  resumeLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineResponse>;

  resumeLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineResponse>;

  resumeLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ResumeLabelingPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/ResumeLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoResumeLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/ResumeLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoResumeLabelingPipeline);
  }

}

