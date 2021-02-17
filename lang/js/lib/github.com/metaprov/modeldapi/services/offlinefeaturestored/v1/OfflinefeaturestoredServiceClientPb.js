/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.offlinefeaturestored.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb from '../../../../../../github.com/metaprov/modeldapi/services/offlinefeaturestored/v1/offlinefeaturestored_pb';
export class OfflineFeatureStoreServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoCreateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse.deserializeBinary);
        this.methodInfoDeleteFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse.deserializeBinary);
        this.methodInfoUpdateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse.deserializeBinary);
        this.methodInfoListFeatures = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse.deserializeBinary);
        this.methodInfoGetFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse.deserializeBinary);
        this.methodInfoGenerateTrainingDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse.deserializeBinary);
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
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature);
    }
    deleteFeature(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature);
    }
    updateFeature(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature);
    }
    listFeatures(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures);
    }
    getFeature(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GetFeature', request, metadata || {}, this.methodInfoGetFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GetFeature', request, metadata || {}, this.methodInfoGetFeature);
    }
    generateTrainingDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GenerateTrainingDataset', request, metadata || {}, this.methodInfoGenerateTrainingDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GenerateTrainingDataset', request, metadata || {}, this.methodInfoGenerateTrainingDataset);
    }
}
