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
var ConversationServiceClient = /** @class */ (function () {
    function ConversationServiceClient(hostname, credentials, options) {
        this.methodInfoList = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse.deserializeBinary);
        this.methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse.deserializeBinary);
        this.methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse.deserializeBinary);
        this.methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse.deserializeBinary);
        this.methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse, function (request) {
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
    ConversationServiceClient.prototype.list = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/List', request, metadata || {}, this.methodInfoList, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/List', request, metadata || {}, this.methodInfoList);
    };
    ConversationServiceClient.prototype.create = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Create', request, metadata || {}, this.methodInfoCreate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Create', request, metadata || {}, this.methodInfoCreate);
    };
    ConversationServiceClient.prototype.get = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Get', request, metadata || {}, this.methodInfoGet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Get', request, metadata || {}, this.methodInfoGet);
    };
    ConversationServiceClient.prototype.update = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Update', request, metadata || {}, this.methodInfoUpdate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Update', request, metadata || {}, this.methodInfoUpdate);
    };
    ConversationServiceClient.prototype.delete = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Delete', request, metadata || {}, this.methodInfoDelete, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.conversation.v1.ConversationService/Delete', request, metadata || {}, this.methodInfoDelete);
    };
    return ConversationServiceClient;
}());
export { ConversationServiceClient };
//# sourceMappingURL=ConversationServiceClientPb.js.map