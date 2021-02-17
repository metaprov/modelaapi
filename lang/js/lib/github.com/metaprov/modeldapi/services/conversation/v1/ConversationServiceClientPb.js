/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.conversation.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb from '../../../../../../github.com/metaprov/modeldapi/services/conversation/v1/conversation_pb';
export class ConversationServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoList = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse.deserializeBinary);
        this.methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse.deserializeBinary);
        this.methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse.deserializeBinary);
        this.methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse.deserializeBinary);
        this.methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse.deserializeBinary);
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
    list(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/List', request, metadata || {}, this.methodInfoList, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/List', request, metadata || {}, this.methodInfoList);
    }
    create(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Create', request, metadata || {}, this.methodInfoCreate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Create', request, metadata || {}, this.methodInfoCreate);
    }
    get(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Get', request, metadata || {}, this.methodInfoGet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Get', request, metadata || {}, this.methodInfoGet);
    }
    update(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Update', request, metadata || {}, this.methodInfoUpdate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Update', request, metadata || {}, this.methodInfoUpdate);
    }
    delete(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Delete', request, metadata || {}, this.methodInfoDelete, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Delete', request, metadata || {}, this.methodInfoDelete);
    }
}
