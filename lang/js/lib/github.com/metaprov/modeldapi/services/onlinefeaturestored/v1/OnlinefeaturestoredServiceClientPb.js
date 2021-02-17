/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.onlinefeaturestored.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb from '../../../../../../github.com/metaprov/modeldapi/services/onlinefeaturestored/v1/onlinefeaturestored_pb';
export class OnlineFeatureStoreServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoCreateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse.deserializeBinary);
        this.methodInfoDeleteFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse.deserializeBinary);
        this.methodInfoListFeatures = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse.deserializeBinary);
        this.methodInfoGetFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse.deserializeBinary);
        this.methodInfoUpdateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse.deserializeBinary);
        this.methodInfoEnrich = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse.deserializeBinary);
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
    createFeature(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature);
    }
    deleteFeature(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature);
    }
    listFeatures(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures);
    }
    getFeature(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/GetFeature', request, metadata || {}, this.methodInfoGetFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/GetFeature', request, metadata || {}, this.methodInfoGetFeature);
    }
    updateFeature(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature);
    }
    enrich(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Enrich', request, metadata || {}, this.methodInfoEnrich, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Enrich', request, metadata || {}, this.methodInfoEnrich);
    }
}
