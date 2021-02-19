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
var OfflineFeatureStoreServiceClient = /** @class */ (function () {
    function OfflineFeatureStoreServiceClient(hostname, credentials, options) {
        this.methodInfoCreateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse.deserializeBinary);
        this.methodInfoDeleteFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse.deserializeBinary);
        this.methodInfoUpdateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse.deserializeBinary);
        this.methodInfoListFeatures = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse.deserializeBinary);
        this.methodInfoGetFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse.deserializeBinary);
        this.methodInfoGenerateTrainingDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse, function (request) {
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
    OfflineFeatureStoreServiceClient.prototype.createFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature);
    };
    OfflineFeatureStoreServiceClient.prototype.deleteFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature);
    };
    OfflineFeatureStoreServiceClient.prototype.updateFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature);
    };
    OfflineFeatureStoreServiceClient.prototype.listFeatures = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures);
    };
    OfflineFeatureStoreServiceClient.prototype.getFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GetFeature', request, metadata || {}, this.methodInfoGetFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GetFeature', request, metadata || {}, this.methodInfoGetFeature);
    };
    OfflineFeatureStoreServiceClient.prototype.generateTrainingDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GenerateTrainingDataset', request, metadata || {}, this.methodInfoGenerateTrainingDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GenerateTrainingDataset', request, metadata || {}, this.methodInfoGenerateTrainingDataset);
    };
    return OfflineFeatureStoreServiceClient;
}());
export { OfflineFeatureStoreServiceClient };
//# sourceMappingURL=OfflinefeaturestoredServiceClientPb.js.map