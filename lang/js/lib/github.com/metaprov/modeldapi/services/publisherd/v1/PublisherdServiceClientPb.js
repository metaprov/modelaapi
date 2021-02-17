/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.publisherd.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb from '../../../../../../github.com/metaprov/modeldapi/services/publisherd/v1/publisherd_pb';
export class PublisherdServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoPublishCombined = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishModelResponse.deserializeBinary);
        this.methodInfoPublishNotebook = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.PublishNotebookResponse.deserializeBinary);
        this.methodInfoShutdown = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.ShutdownResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_publisherd_v1_publisherd_pb.ShutdownResponse.deserializeBinary);
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
    publishCombined(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.publisherd.v1.PublisherdService/PublishCombined', request, metadata || {}, this.methodInfoPublishCombined, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.publisherd.v1.PublisherdService/PublishCombined', request, metadata || {}, this.methodInfoPublishCombined);
    }
    publishNotebook(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.publisherd.v1.PublisherdService/PublishNotebook', request, metadata || {}, this.methodInfoPublishNotebook, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.publisherd.v1.PublisherdService/PublishNotebook', request, metadata || {}, this.methodInfoPublishNotebook);
    }
    shutdown(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.publisherd.v1.PublisherdService/Shutdown', request, metadata || {}, this.methodInfoShutdown, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.publisherd.v1.PublisherdService/Shutdown', request, metadata || {}, this.methodInfoShutdown);
    }
}
