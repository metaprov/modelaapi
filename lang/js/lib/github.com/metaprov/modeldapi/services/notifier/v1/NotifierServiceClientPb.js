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
var NotifierServiceClient = /** @class */ (function () {
    function NotifierServiceClient(hostname, credentials, options) {
        this.methodInfoListNotifiers = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.ListNotifiersResponse.deserializeBinary);
        this.methodInfoCreateNotifier = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.CreateNotifierResponse.deserializeBinary);
        this.methodInfoGetNotifier = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.GetNotifierResponse.deserializeBinary);
        this.methodInfoUpdateNotifier = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.UpdateNotifierResponse.deserializeBinary);
        this.methodInfoDeleteNotifier = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notifier_v1_notifier_pb.DeleteNotifierResponse, function (request) {
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
    NotifierServiceClient.prototype.listNotifiers = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/ListNotifiers', request, metadata || {}, this.methodInfoListNotifiers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/ListNotifiers', request, metadata || {}, this.methodInfoListNotifiers);
    };
    NotifierServiceClient.prototype.createNotifier = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/CreateNotifier', request, metadata || {}, this.methodInfoCreateNotifier, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/CreateNotifier', request, metadata || {}, this.methodInfoCreateNotifier);
    };
    NotifierServiceClient.prototype.getNotifier = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/GetNotifier', request, metadata || {}, this.methodInfoGetNotifier, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/GetNotifier', request, metadata || {}, this.methodInfoGetNotifier);
    };
    NotifierServiceClient.prototype.updateNotifier = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/UpdateNotifier', request, metadata || {}, this.methodInfoUpdateNotifier, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/UpdateNotifier', request, metadata || {}, this.methodInfoUpdateNotifier);
    };
    NotifierServiceClient.prototype.deleteNotifier = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/DeleteNotifier', request, metadata || {}, this.methodInfoDeleteNotifier, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.notifier.v1.NotifierService/DeleteNotifier', request, metadata || {}, this.methodInfoDeleteNotifier);
    };
    return NotifierServiceClient;
}());
export { NotifierServiceClient };
//# sourceMappingURL=NotifierServiceClientPb.js.map