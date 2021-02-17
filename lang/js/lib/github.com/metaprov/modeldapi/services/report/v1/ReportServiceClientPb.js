/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.report.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_report_v1_report_pb from '../../../../../../github.com/metaprov/modeldapi/services/report/v1/report_pb';
export class ReportServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListReports = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_report_v1_report_pb.ListReportsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_report_v1_report_pb.ListReportsResponse.deserializeBinary);
        this.methodInfoCreateReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_report_v1_report_pb.CreateReportResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_report_v1_report_pb.CreateReportResponse.deserializeBinary);
        this.methodInfoGetReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_report_v1_report_pb.GetReportResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_report_v1_report_pb.GetReportResponse.deserializeBinary);
        this.methodInfoUpdateReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_report_v1_report_pb.UpdateReportResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_report_v1_report_pb.UpdateReportResponse.deserializeBinary);
        this.methodInfoDeleteReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_report_v1_report_pb.DeleteReportResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_report_v1_report_pb.DeleteReportResponse.deserializeBinary);
        this.methodInfoDownload = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_report_v1_report_pb.DownloadReportResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_report_v1_report_pb.DownloadReportResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    listReports(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.report.v1.ReportService/ListReports', request, metadata || {}, this.methodInfoListReports, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.report.v1.ReportService/ListReports', request, metadata || {}, this.methodInfoListReports);
    }
    createReport(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.report.v1.ReportService/CreateReport', request, metadata || {}, this.methodInfoCreateReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.report.v1.ReportService/CreateReport', request, metadata || {}, this.methodInfoCreateReport);
    }
    getReport(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.report.v1.ReportService/GetReport', request, metadata || {}, this.methodInfoGetReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.report.v1.ReportService/GetReport', request, metadata || {}, this.methodInfoGetReport);
    }
    updateReport(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.report.v1.ReportService/UpdateReport', request, metadata || {}, this.methodInfoUpdateReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.report.v1.ReportService/UpdateReport', request, metadata || {}, this.methodInfoUpdateReport);
    }
    deleteReport(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.report.v1.ReportService/DeleteReport', request, metadata || {}, this.methodInfoDeleteReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.report.v1.ReportService/DeleteReport', request, metadata || {}, this.methodInfoDeleteReport);
    }
    download(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.report.v1.ReportService/Download', request, metadata || {}, this.methodInfoDownload, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.report.v1.ReportService/Download', request, metadata || {}, this.methodInfoDownload);
    }
}
