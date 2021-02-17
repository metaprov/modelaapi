/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.runbook.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb from '../../../../../../github.com/metaprov/modeldapi/services/runbook/v1/runbook_pb';
export declare class RunBookServiceClient {
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
    methodInfoListRunBooks: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.ListRunBooksRequest, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.ListRunBooksResponse>;
    listRunBooks(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.ListRunBooksRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.ListRunBooksResponse>;
    listRunBooks(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.ListRunBooksRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.ListRunBooksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.ListRunBooksResponse>;
    methodInfoCreateRunBook: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.CreateRunBookRequest, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.CreateRunBookResponse>;
    createRunBook(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.CreateRunBookRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.CreateRunBookResponse>;
    createRunBook(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.CreateRunBookRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.CreateRunBookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.CreateRunBookResponse>;
    methodInfoGetRunBook: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.GetRunBookRequest, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.GetRunBookResponse>;
    getRunBook(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.GetRunBookRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.GetRunBookResponse>;
    getRunBook(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.GetRunBookRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.GetRunBookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.GetRunBookResponse>;
    methodInfoUpdateRunBook: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.UpdateRunBookRequest, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse>;
    updateRunBook(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.UpdateRunBookRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse>;
    updateRunBook(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.UpdateRunBookRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse>;
    methodInfoDeleteRunBook: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.DeleteRunBookRequest, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse>;
    deleteRunBook(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.DeleteRunBookRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse>;
    deleteRunBook(request: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.DeleteRunBookRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse>;
}
