/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.notifier.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb from '../../../../../../github.com/metaprov/modeldapi/services/notifier/v1/notifier_pb';
export class NotifierServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListNotifiers = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersResponse.deserializeBinary);
        this.methodInfoCreateNotifier = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierResponse.deserializeBinary);
        this.methodInfoGetNotifier = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierResponse.deserializeBinary);
        this.methodInfoUpdateNotifier = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse.deserializeBinary);
        this.methodInfoDeleteNotifier = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse.deserializeBinary);
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
    listNotifiers(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/ListNotifiers', request, metadata || {}, this.methodInfoListNotifiers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/ListNotifiers', request, metadata || {}, this.methodInfoListNotifiers);
    }
    createNotifier(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/CreateNotifier', request, metadata || {}, this.methodInfoCreateNotifier, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/CreateNotifier', request, metadata || {}, this.methodInfoCreateNotifier);
    }
    getNotifier(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/GetNotifier', request, metadata || {}, this.methodInfoGetNotifier, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/GetNotifier', request, metadata || {}, this.methodInfoGetNotifier);
    }
    updateNotifier(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/UpdateNotifier', request, metadata || {}, this.methodInfoUpdateNotifier, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/UpdateNotifier', request, metadata || {}, this.methodInfoUpdateNotifier);
    }
    deleteNotifier(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/DeleteNotifier', request, metadata || {}, this.methodInfoDeleteNotifier, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/DeleteNotifier', request, metadata || {}, this.methodInfoDeleteNotifier);
    }
}
