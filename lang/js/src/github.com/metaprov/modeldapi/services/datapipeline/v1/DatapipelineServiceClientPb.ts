/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.datapipeline.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/datapipeline/v1/datapipeline_pb';


export class DataPipelineServiceClient {
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

  methodInfoListDataPipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse,
    (request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse.deserializeBinary
  );

  listDataPipelines(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse>;

  listDataPipelines(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse>;

  listDataPipelines(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/ListDataPipelines',
        request,
        metadata || {},
        this.methodInfoListDataPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/ListDataPipelines',
    request,
    metadata || {},
    this.methodInfoListDataPipelines);
  }

  methodInfoCreateDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse.deserializeBinary
  );

  createDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse>;

  createDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse>;

  createDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/CreateDataPipeline',
        request,
        metadata || {},
        this.methodInfoCreateDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/CreateDataPipeline',
    request,
    metadata || {},
    this.methodInfoCreateDataPipeline);
  }

  methodInfoGetDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse.deserializeBinary
  );

  getDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse>;

  getDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse>;

  getDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/GetDataPipeline',
        request,
        metadata || {},
        this.methodInfoGetDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/GetDataPipeline',
    request,
    metadata || {},
    this.methodInfoGetDataPipeline);
  }

  methodInfoUpdateDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse.deserializeBinary
  );

  updateDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse>;

  updateDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse>;

  updateDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/UpdateDataPipeline',
        request,
        metadata || {},
        this.methodInfoUpdateDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/UpdateDataPipeline',
    request,
    metadata || {},
    this.methodInfoUpdateDataPipeline);
  }

  methodInfoDeleteDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse.deserializeBinary
  );

  deleteDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse>;

  deleteDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse>;

  deleteDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/DeleteDataPipeline',
        request,
        metadata || {},
        this.methodInfoDeleteDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/DeleteDataPipeline',
    request,
    metadata || {},
    this.methodInfoDeleteDataPipeline);
  }

  methodInfoPauseDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineResponse.deserializeBinary
  );

  pauseDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineResponse>;

  pauseDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineResponse>;

  pauseDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.PauseDataPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/PauseDataPipeline',
        request,
        metadata || {},
        this.methodInfoPauseDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/PauseDataPipeline',
    request,
    metadata || {},
    this.methodInfoPauseDataPipeline);
  }

  methodInfoResumeDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineResponse.deserializeBinary
  );

  resumeDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineResponse>;

  resumeDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineResponse>;

  resumeDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ResumeDataPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/ResumeDataPipeline',
        request,
        metadata || {},
        this.methodInfoResumeDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/ResumeDataPipeline',
    request,
    metadata || {},
    this.methodInfoResumeDataPipeline);
  }

  methodInfoRunDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse.deserializeBinary
  );

  runDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse>;

  runDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse>;

  runDataPipeline(
    request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/RunDataPipeline',
        request,
        metadata || {},
        this.methodInfoRunDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/RunDataPipeline',
    request,
    metadata || {},
    this.methodInfoRunDataPipeline);
  }

}

