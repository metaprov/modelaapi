/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.report.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_report_v1_report_pb from '../../../../../../github.com/metaprov/modeldapi/services/report/v1/report_pb';
export declare class ReportServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodInfoListReports: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_report_v1_report_pb.ListReportsRequest, github_com_metaprov_modeldapi_services_report_v1_report_pb.ListReportsResponse>;
    listReports(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.ListReportsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_report_v1_report_pb.ListReportsResponse>;
    listReports(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.ListReportsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_report_v1_report_pb.ListReportsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_report_v1_report_pb.ListReportsResponse>;
    methodInfoCreateReport: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_report_v1_report_pb.CreateReportRequest, github_com_metaprov_modeldapi_services_report_v1_report_pb.CreateReportResponse>;
    createReport(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.CreateReportRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_report_v1_report_pb.CreateReportResponse>;
    createReport(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.CreateReportRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_report_v1_report_pb.CreateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_report_v1_report_pb.CreateReportResponse>;
    methodInfoGetReport: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_report_v1_report_pb.GetReportRequest, github_com_metaprov_modeldapi_services_report_v1_report_pb.GetReportResponse>;
    getReport(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.GetReportRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_report_v1_report_pb.GetReportResponse>;
    getReport(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.GetReportRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_report_v1_report_pb.GetReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_report_v1_report_pb.GetReportResponse>;
    methodInfoUpdateReport: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_report_v1_report_pb.UpdateReportRequest, github_com_metaprov_modeldapi_services_report_v1_report_pb.UpdateReportResponse>;
    updateReport(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.UpdateReportRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_report_v1_report_pb.UpdateReportResponse>;
    updateReport(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.UpdateReportRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_report_v1_report_pb.UpdateReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_report_v1_report_pb.UpdateReportResponse>;
    methodInfoDeleteReport: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_report_v1_report_pb.DeleteReportRequest, github_com_metaprov_modeldapi_services_report_v1_report_pb.DeleteReportResponse>;
    deleteReport(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.DeleteReportRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_report_v1_report_pb.DeleteReportResponse>;
    deleteReport(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.DeleteReportRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_report_v1_report_pb.DeleteReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_report_v1_report_pb.DeleteReportResponse>;
    methodInfoDownload: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_report_v1_report_pb.DownloadReportRequest, github_com_metaprov_modeldapi_services_report_v1_report_pb.DownloadReportResponse>;
    download(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.DownloadReportRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_report_v1_report_pb.DownloadReportResponse>;
    download(request: github_com_metaprov_modeldapi_services_report_v1_report_pb.DownloadReportRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_report_v1_report_pb.DownloadReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_report_v1_report_pb.DownloadReportResponse>;
}
