/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.notebook.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb from '../../../../../../github.com/metaprov/modeldapi/services/notebook/v1/notebook_pb';
export declare class NotebookServiceClient {
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
    methodInfoListNotebooks: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.ListNotebooksRequest, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.ListNotebooksResponse>;
    listNotebooks(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.ListNotebooksRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.ListNotebooksResponse>;
    listNotebooks(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.ListNotebooksRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.ListNotebooksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.ListNotebooksResponse>;
    methodInfoCreateNotebook: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.CreateNotebookRequest, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.CreateNotebookResponse>;
    createNotebook(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.CreateNotebookRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.CreateNotebookResponse>;
    createNotebook(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.CreateNotebookRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.CreateNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.CreateNotebookResponse>;
    methodInfoGetNotebook: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.GetNotebookRequest, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.GetNotebookResponse>;
    getNotebook(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.GetNotebookRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.GetNotebookResponse>;
    getNotebook(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.GetNotebookRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.GetNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.GetNotebookResponse>;
    methodInfoUpdateNotebook: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.UpdateNotebookRequest, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.UpdateNotebookResponse>;
    updateNotebook(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.UpdateNotebookRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.UpdateNotebookResponse>;
    updateNotebook(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.UpdateNotebookRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.UpdateNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.UpdateNotebookResponse>;
    methodInfoDeleteNotebook: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.DeleteNotebookRequest, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.DeleteNotebookResponse>;
    deleteNotebook(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.DeleteNotebookRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.DeleteNotebookResponse>;
    deleteNotebook(request: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.DeleteNotebookRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.DeleteNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.DeleteNotebookResponse>;
}
