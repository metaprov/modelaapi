/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.publisherd.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb from '../../../../../../github.com/metaprov/modeldapi/services/publisherd/v1/publisherd_pb';
export declare class PublisherdServiceClient {
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
    methodInfoPublishCombined: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishModelRequest, github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishModelResponse>;
    publishCombined(request: github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishModelResponse>;
    publishCombined(request: github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishModelResponse>;
    methodInfoPublishNotebook: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishNotebookRequest, github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse>;
    publishNotebook(request: github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishNotebookRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse>;
    publishNotebook(request: github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishNotebookRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse>;
    methodInfoShutdown: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.ShutdownRequest, github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.ShutdownResponse>;
    shutdown(request: github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.ShutdownRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.ShutdownResponse>;
    shutdown(request: github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.ShutdownRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.ShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.ShutdownResponse>;
}
