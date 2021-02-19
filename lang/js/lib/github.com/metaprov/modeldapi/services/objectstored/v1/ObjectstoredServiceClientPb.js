/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.objectstored.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb from '../../../../../../github.com/metaprov/modeldapi/services/objectstored/v1/objectstored_pb';
var ObjectstoreServiceClient = /** @class */ (function () {
    function ObjectstoreServiceClient(hostname, credentials, options) {
        this.methodInfoIngest = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse.deserializeBinary);
        this.methodInfoArchive = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse.deserializeBinary);
        this.methodInfoRecover = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse.deserializeBinary);
        this.methodInfoExistInVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse.deserializeBinary);
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
    ObjectstoreServiceClient.prototype.ingest = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.objectstored.v1.ObjectstoreService/Ingest', request, metadata || {}, this.methodInfoIngest, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.objectstored.v1.ObjectstoreService/Ingest', request, metadata || {}, this.methodInfoIngest);
    };
    ObjectstoreServiceClient.prototype.archive = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.objectstored.v1.ObjectstoreService/Archive', request, metadata || {}, this.methodInfoArchive, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.objectstored.v1.ObjectstoreService/Archive', request, metadata || {}, this.methodInfoArchive);
    };
    ObjectstoreServiceClient.prototype.recover = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.objectstored.v1.ObjectstoreService/Recover', request, metadata || {}, this.methodInfoRecover, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.objectstored.v1.ObjectstoreService/Recover', request, metadata || {}, this.methodInfoRecover);
    };
    ObjectstoreServiceClient.prototype.existInVirtualBucket = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.objectstored.v1.ObjectstoreService/ExistInVirtualBucket', request, metadata || {}, this.methodInfoExistInVirtualBucket, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.objectstored.v1.ObjectstoreService/ExistInVirtualBucket', request, metadata || {}, this.methodInfoExistInVirtualBucket);
    };
    return ObjectstoreServiceClient;
}());
export { ObjectstoreServiceClient };
//# sourceMappingURL=ObjectstoredServiceClientPb.js.map