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
var OnlineFeatureStoreServiceClient = /** @class */ (function () {
    function OnlineFeatureStoreServiceClient(hostname, credentials, options) {
        this.methodInfoCreateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse.deserializeBinary);
        this.methodInfoDeleteFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse.deserializeBinary);
        this.methodInfoListFeatures = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse.deserializeBinary);
        this.methodInfoGetFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse.deserializeBinary);
        this.methodInfoUpdateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse.deserializeBinary);
        this.methodInfoEnrich = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse, function (request) {
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
    OnlineFeatureStoreServiceClient.prototype.createFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature);
    };
    OnlineFeatureStoreServiceClient.prototype.deleteFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature);
    };
    OnlineFeatureStoreServiceClient.prototype.listFeatures = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures);
    };
    OnlineFeatureStoreServiceClient.prototype.getFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/GetFeature', request, metadata || {}, this.methodInfoGetFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/GetFeature', request, metadata || {}, this.methodInfoGetFeature);
    };
    OnlineFeatureStoreServiceClient.prototype.updateFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature);
    };
    OnlineFeatureStoreServiceClient.prototype.enrich = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Enrich', request, metadata || {}, this.methodInfoEnrich, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Enrich', request, metadata || {}, this.methodInfoEnrich);
    };
    return OnlineFeatureStoreServiceClient;
}());
export { OnlineFeatureStoreServiceClient };
//# sourceMappingURL=OnlinefeaturestoredServiceClientPb.js.map