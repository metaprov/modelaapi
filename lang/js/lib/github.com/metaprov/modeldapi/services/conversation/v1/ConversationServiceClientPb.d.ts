/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.conversation.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb from '../../../../../../github.com/metaprov/modeldapi/services/conversation/v1/conversation_pb';
export declare class ConversationServiceClient {
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
    methodInfoList: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationRequest, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse>;
    list(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse>;
    list(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse>;
    methodInfoCreate: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationRequest, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse>;
    create(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse>;
    create(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse>;
    methodInfoGet: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationRequest, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse>;
    get(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse>;
    get(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse>;
    methodInfoUpdate: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationRequest, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse>;
    update(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse>;
    update(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse>;
    methodInfoDelete: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationRequest, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse>;
    delete(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse>;
    delete(request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse>;
}
