/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.notifier.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb from '../../../../../../github.com/metaprov/modeldapi/services/notifier/v1/notifier_pb';
export declare class NotifierServiceClient {
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
    methodInfoListNotifiers: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersRequest, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersResponse>;
    listNotifiers(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersResponse>;
    listNotifiers(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersResponse>;
    methodInfoCreateNotifier: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierRequest, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierResponse>;
    createNotifier(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierResponse>;
    createNotifier(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierResponse>;
    methodInfoGetNotifier: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierRequest, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierResponse>;
    getNotifier(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierResponse>;
    getNotifier(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierResponse>;
    methodInfoUpdateNotifier: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierRequest, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse>;
    updateNotifier(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse>;
    updateNotifier(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse>;
    methodInfoDeleteNotifier: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierRequest, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse>;
    deleteNotifier(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse>;
    deleteNotifier(request: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse>;
}
