/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.feature.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_feature_v1_feature_pb from '../../../../../../github.com/metaprov/modeldapi/services/feature/v1/feature_pb';
var FeatureServiceClient = /** @class */ (function () {
    function FeatureServiceClient(hostname, credentials, options) {
        this.methodInfoListFeatures = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_feature_v1_feature_pb.ListFeaturesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.ListFeaturesResponse.deserializeBinary);
        this.methodInfoCreateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_feature_v1_feature_pb.CreateFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.CreateFeatureResponse.deserializeBinary);
        this.methodInfoGetFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_feature_v1_feature_pb.GetFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.GetFeatureResponse.deserializeBinary);
        this.methodInfoUpdateFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_feature_v1_feature_pb.UpdateFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.UpdateFeatureResponse.deserializeBinary);
        this.methodInfoDeleteFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_feature_v1_feature_pb.DeleteFeatureResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.DeleteFeatureResponse.deserializeBinary);
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
    FeatureServiceClient.prototype.listFeatures = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/ListFeatures', request, metadata || {}, this.methodInfoListFeatures);
    };
    FeatureServiceClient.prototype.createFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/CreateFeature', request, metadata || {}, this.methodInfoCreateFeature);
    };
    FeatureServiceClient.prototype.getFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/GetFeature', request, metadata || {}, this.methodInfoGetFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/GetFeature', request, metadata || {}, this.methodInfoGetFeature);
    };
    FeatureServiceClient.prototype.updateFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/UpdateFeature', request, metadata || {}, this.methodInfoUpdateFeature);
    };
    FeatureServiceClient.prototype.deleteFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.feature.v1.FeatureService/DeleteFeature', request, metadata || {}, this.methodInfoDeleteFeature);
    };
    return FeatureServiceClient;
}());
export { FeatureServiceClient };
//# sourceMappingURL=FeatureServiceClientPb.js.map