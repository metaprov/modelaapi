/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.virtualbucket.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb from '../../../../../../github.com/metaprov/modeldapi/services/virtualbucket/v1/virtualbucket_pb';
export class VirtualBucketServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListVirtualBuckets = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse.deserializeBinary);
        this.methodInfoCreateVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse.deserializeBinary);
        this.methodInfoGetVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse.deserializeBinary);
        this.methodInfoUpdateVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse.deserializeBinary);
        this.methodInfoDeleteVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse.deserializeBinary);
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
    listVirtualBuckets(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/ListVirtualBuckets', request, metadata || {}, this.methodInfoListVirtualBuckets, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/ListVirtualBuckets', request, metadata || {}, this.methodInfoListVirtualBuckets);
    }
    createVirtualBucket(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/CreateVirtualBucket', request, metadata || {}, this.methodInfoCreateVirtualBucket, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/CreateVirtualBucket', request, metadata || {}, this.methodInfoCreateVirtualBucket);
    }
    getVirtualBucket(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/GetVirtualBucket', request, metadata || {}, this.methodInfoGetVirtualBucket, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/GetVirtualBucket', request, metadata || {}, this.methodInfoGetVirtualBucket);
    }
    updateVirtualBucket(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/UpdateVirtualBucket', request, metadata || {}, this.methodInfoUpdateVirtualBucket, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/UpdateVirtualBucket', request, metadata || {}, this.methodInfoUpdateVirtualBucket);
    }
    deleteVirtualBucket(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/DeleteVirtualBucket', request, metadata || {}, this.methodInfoDeleteVirtualBucket, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualbucket.v1.VirtualBucketService/DeleteVirtualBucket', request, metadata || {}, this.methodInfoDeleteVirtualBucket);
    }
}
