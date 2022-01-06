/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.dataapp.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb from '../../../../../../github.com/metaprov/modelaapi/services/dataapp/v1/dataapp_pb';


export class DataAppServiceClient {
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

  methodInfoListDataApps = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ListDataApps',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsRequest,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsResponse,
    (request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsResponse.deserializeBinary
  );

  listDataApps(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsResponse>;

  listDataApps(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsResponse>;

  listDataApps(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ListDataAppsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ListDataApps',
        request,
        metadata || {},
        this.methodInfoListDataApps,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ListDataApps',
    request,
    metadata || {},
    this.methodInfoListDataApps);
  }

  methodInfoCreateDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/CreateDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppRequest,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppResponse,
    (request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppResponse.deserializeBinary
  );

  createDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppResponse>;

  createDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppResponse>;

  createDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.CreateDataAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/CreateDataApp',
        request,
        metadata || {},
        this.methodInfoCreateDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/CreateDataApp',
    request,
    metadata || {},
    this.methodInfoCreateDataApp);
  }

  methodInfoGetDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/GetDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppRequest,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppResponse,
    (request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppResponse.deserializeBinary
  );

  getDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppResponse>;

  getDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppResponse>;

  getDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.GetDataAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/GetDataApp',
        request,
        metadata || {},
        this.methodInfoGetDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/GetDataApp',
    request,
    metadata || {},
    this.methodInfoGetDataApp);
  }

  methodInfoUpdateDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/UpdateDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppRequest,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppResponse,
    (request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppResponse.deserializeBinary
  );

  updateDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppResponse>;

  updateDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppResponse>;

  updateDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.UpdateDataAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/UpdateDataApp',
        request,
        metadata || {},
        this.methodInfoUpdateDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/UpdateDataApp',
    request,
    metadata || {},
    this.methodInfoUpdateDataApp);
  }

  methodInfoDeleteDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/DeleteDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppRequest,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppResponse,
    (request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppResponse.deserializeBinary
  );

  deleteDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppResponse>;

  deleteDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppResponse>;

  deleteDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.DeleteDataAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/DeleteDataApp',
        request,
        metadata || {},
        this.methodInfoDeleteDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/DeleteDataApp',
    request,
    metadata || {},
    this.methodInfoDeleteDataApp);
  }

  methodInfoPauseDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/PauseDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppRequest,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppResponse,
    (request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppResponse.deserializeBinary
  );

  pauseDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppResponse>;

  pauseDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppResponse>;

  pauseDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.PauseDataAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/PauseDataApp',
        request,
        metadata || {},
        this.methodInfoPauseDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/PauseDataApp',
    request,
    metadata || {},
    this.methodInfoPauseDataApp);
  }

  methodInfoRunDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/RunDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppRequest,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppResponse,
    (request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppResponse.deserializeBinary
  );

  runDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppResponse>;

  runDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppResponse>;

  runDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.RunDataAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/RunDataApp',
        request,
        metadata || {},
        this.methodInfoRunDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/RunDataApp',
    request,
    metadata || {},
    this.methodInfoRunDataApp);
  }

  methodInfoResumeDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ResumeDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppRequest,
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppResponse,
    (request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppResponse.deserializeBinary
  );

  resumeDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppResponse>;

  resumeDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppResponse>;

  resumeDataApp(
    request: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dataapp_v1_dataapp_pb.ResumeDataAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ResumeDataApp',
        request,
        metadata || {},
        this.methodInfoResumeDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ResumeDataApp',
    request,
    metadata || {},
    this.methodInfoResumeDataApp);
  }

}

