/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.cloudsd.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb from '../../../../../../github.com/metaprov/modeldapi/services/cloudsd/v1/cloudsd_pb';
var CloudsServiceClient = /** @class */ (function () {
    function CloudsServiceClient(hostname, credentials, options) {
        this.methodInfoDownload = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileDownloadResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileDownloadResponse.deserializeBinary);
        this.methodInfoUpload = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileUploadResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileUploadResponse.deserializeBinary);
        this.methodInfoKeyExistInVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.KeyExistInVirtualBucketResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.KeyExistInVirtualBucketResponse.deserializeBinary);
        this.methodInfoVirtualBucketExist = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.VirtualBucketExistResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.VirtualBucketExistResponse.deserializeBinary);
        this.methodInfoCreateVirtualBucketIfNotExist = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.CreateVirtualBucketResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.CreateVirtualBucketResponse.deserializeBinary);
        this.methodInfoShutdown = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.ShutdownResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.ShutdownResponse.deserializeBinary);
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
    CloudsServiceClient.prototype.download = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/Download', request, metadata || {}, this.methodInfoDownload, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/Download', request, metadata || {}, this.methodInfoDownload);
    };
    CloudsServiceClient.prototype.upload = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/Upload', request, metadata || {}, this.methodInfoUpload, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/Upload', request, metadata || {}, this.methodInfoUpload);
    };
    CloudsServiceClient.prototype.keyExistInVirtualBucket = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/KeyExistInVirtualBucket', request, metadata || {}, this.methodInfoKeyExistInVirtualBucket, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/KeyExistInVirtualBucket', request, metadata || {}, this.methodInfoKeyExistInVirtualBucket);
    };
    CloudsServiceClient.prototype.virtualBucketExist = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/VirtualBucketExist', request, metadata || {}, this.methodInfoVirtualBucketExist, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/VirtualBucketExist', request, metadata || {}, this.methodInfoVirtualBucketExist);
    };
    CloudsServiceClient.prototype.createVirtualBucketIfNotExist = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/CreateVirtualBucketIfNotExist', request, metadata || {}, this.methodInfoCreateVirtualBucketIfNotExist, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/CreateVirtualBucketIfNotExist', request, metadata || {}, this.methodInfoCreateVirtualBucketIfNotExist);
    };
    CloudsServiceClient.prototype.shutdown = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/Shutdown', request, metadata || {}, this.methodInfoShutdown, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.cloudsd.v1.CloudsService/Shutdown', request, metadata || {}, this.methodInfoShutdown);
    };
    return CloudsServiceClient;
}());
export { CloudsServiceClient };
//# sourceMappingURL=CloudsdServiceClientPb.js.map