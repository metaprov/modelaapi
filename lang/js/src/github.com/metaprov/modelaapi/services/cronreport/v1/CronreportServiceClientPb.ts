/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.cronreport.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb from '../../../../../../github.com/metaprov/modelaapi/services/cronreport/v1/cronreport_pb';


export class CronReportServiceClient {
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

  methodInfoListCronReports = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ListCronReports',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsRequest,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsResponse,
    (request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsResponse.deserializeBinary
  );

  listCronReports(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsResponse>;

  listCronReports(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsResponse>;

  listCronReports(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ListCronReportsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ListCronReports',
        request,
        metadata || {},
        this.methodInfoListCronReports,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ListCronReports',
    request,
    metadata || {},
    this.methodInfoListCronReports);
  }

  methodInfoCreateCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/CreateCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportRequest,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportResponse,
    (request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportResponse.deserializeBinary
  );

  createCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportResponse>;

  createCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportResponse>;

  createCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.CreateCronReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/CreateCronReport',
        request,
        metadata || {},
        this.methodInfoCreateCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/CreateCronReport',
    request,
    metadata || {},
    this.methodInfoCreateCronReport);
  }

  methodInfoGetCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/GetCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportRequest,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportResponse,
    (request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportResponse.deserializeBinary
  );

  getCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportResponse>;

  getCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportResponse>;

  getCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.GetCronReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/GetCronReport',
        request,
        metadata || {},
        this.methodInfoGetCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/GetCronReport',
    request,
    metadata || {},
    this.methodInfoGetCronReport);
  }

  methodInfoUpdateCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/UpdateCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportRequest,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportResponse,
    (request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportResponse.deserializeBinary
  );

  updateCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportResponse>;

  updateCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportResponse>;

  updateCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.UpdateCronReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/UpdateCronReport',
        request,
        metadata || {},
        this.methodInfoUpdateCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/UpdateCronReport',
    request,
    metadata || {},
    this.methodInfoUpdateCronReport);
  }

  methodInfoDeleteCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/DeleteCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportRequest,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportResponse,
    (request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportResponse.deserializeBinary
  );

  deleteCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportResponse>;

  deleteCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportResponse>;

  deleteCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.DeleteCronReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/DeleteCronReport',
        request,
        metadata || {},
        this.methodInfoDeleteCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/DeleteCronReport',
    request,
    metadata || {},
    this.methodInfoDeleteCronReport);
  }

  methodInfoRunReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/RunReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportRequest,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportResponse,
    (request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportResponse.deserializeBinary
  );

  runReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportResponse>;

  runReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportResponse>;

  runReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.RunCronReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/RunReport',
        request,
        metadata || {},
        this.methodInfoRunReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/RunReport',
    request,
    metadata || {},
    this.methodInfoRunReport);
  }

  methodInfoPauseCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/PauseCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportRequest,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportResponse,
    (request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportResponse.deserializeBinary
  );

  pauseCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportResponse>;

  pauseCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportResponse>;

  pauseCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.PauseCronReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/PauseCronReport',
        request,
        metadata || {},
        this.methodInfoPauseCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/PauseCronReport',
    request,
    metadata || {},
    this.methodInfoPauseCronReport);
  }

  methodInfoResumeCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ResumeCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportRequest,
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportResponse,
    (request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportResponse.deserializeBinary
  );

  resumeCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportResponse>;

  resumeCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportResponse>;

  resumeCronReport(
    request: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_cronreport_v1_cronreport_pb.ResumeCronReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ResumeCronReport',
        request,
        metadata || {},
        this.methodInfoResumeCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ResumeCronReport',
    request,
    metadata || {},
    this.methodInfoResumeCronReport);
  }

}

