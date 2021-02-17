/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.notebookrun.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb from '../../../../../../github.com/metaprov/modeldapi/services/notebookrun/v1/notebookrun_pb';
export declare class NotebookRunServiceClient {
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
    methodInfoListNotebookRuns: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsRequest, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse>;
    listNotebookRuns(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse>;
    listNotebookRuns(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse>;
    methodInfoCreateNotebookRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunRequest, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse>;
    createNotebookRun(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse>;
    createNotebookRun(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse>;
    methodInfoGetNotebookRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunRequest, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse>;
    getNotebookRun(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse>;
    getNotebookRun(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse>;
    methodInfoUpdateNotebookRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunRequest, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse>;
    updateNotebookRun(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse>;
    updateNotebookRun(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse>;
    methodInfoDeleteNotebookRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunRequest, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse>;
    deleteNotebookRun(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse>;
    deleteNotebookRun(request: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse>;
}
