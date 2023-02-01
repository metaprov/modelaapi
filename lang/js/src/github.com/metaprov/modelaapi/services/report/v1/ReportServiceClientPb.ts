/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.report.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: github.com/metaprov/modelaapi/services/report/v1/report.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_report_v1_report_pb from '../../../../../../github.com/metaprov/modelaapi/services/report/v1/report_pb';


export class ReportServiceClient {
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
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListReports = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.report.v1.ReportService/ListReports',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsRequest,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsResponse,
    (request: github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsResponse.deserializeBinary
  );

  listReports(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsResponse>;

  listReports(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsResponse>;

  listReports(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.ListReportsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.report.v1.ReportService/ListReports',
        request,
        metadata || {},
        this.methodDescriptorListReports,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.report.v1.ReportService/ListReports',
    request,
    metadata || {},
    this.methodDescriptorListReports);
  }

  methodDescriptorCreateReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.report.v1.ReportService/CreateReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportRequest,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportResponse,
    (request: github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportResponse.deserializeBinary
  );

  createReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportResponse>;

  createReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportResponse>;

  createReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.CreateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.report.v1.ReportService/CreateReport',
        request,
        metadata || {},
        this.methodDescriptorCreateReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.report.v1.ReportService/CreateReport',
    request,
    metadata || {},
    this.methodDescriptorCreateReport);
  }

  methodDescriptorGetReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.report.v1.ReportService/GetReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportRequest,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportResponse,
    (request: github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportResponse.deserializeBinary
  );

  getReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportResponse>;

  getReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportResponse>;

  getReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.GetReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.report.v1.ReportService/GetReport',
        request,
        metadata || {},
        this.methodDescriptorGetReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.report.v1.ReportService/GetReport',
    request,
    metadata || {},
    this.methodDescriptorGetReport);
  }

  methodDescriptorUpdateReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.report.v1.ReportService/UpdateReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportRequest,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportResponse,
    (request: github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportResponse.deserializeBinary
  );

  updateReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportResponse>;

  updateReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportResponse>;

  updateReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.UpdateReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.report.v1.ReportService/UpdateReport',
        request,
        metadata || {},
        this.methodDescriptorUpdateReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.report.v1.ReportService/UpdateReport',
    request,
    metadata || {},
    this.methodDescriptorUpdateReport);
  }

  methodDescriptorDeleteReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.report.v1.ReportService/DeleteReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportRequest,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportResponse,
    (request: github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportResponse.deserializeBinary
  );

  deleteReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportResponse>;

  deleteReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportResponse>;

  deleteReport(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.DeleteReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.report.v1.ReportService/DeleteReport',
        request,
        metadata || {},
        this.methodDescriptorDeleteReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.report.v1.ReportService/DeleteReport',
    request,
    metadata || {},
    this.methodDescriptorDeleteReport);
  }

  methodDescriptorDownload = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.report.v1.ReportService/Download',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportRequest,
    github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportResponse,
    (request: github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportResponse.deserializeBinary
  );

  download(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportResponse>;

  download(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportResponse>;

  download(
    request: github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_report_v1_report_pb.DownloadReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.report.v1.ReportService/Download',
        request,
        metadata || {},
        this.methodDescriptorDownload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.report.v1.ReportService/Download',
    request,
    metadata || {},
    this.methodDescriptorDownload);
  }

}

