/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.featureset.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb from '../../../../../../github.com/metaprov/modeldapi/services/featureset/v1/featureset_pb';
var FeaturesetServiceClient = /** @class */ (function () {
    function FeaturesetServiceClient(hostname, credentials, options) {
        this.methodInfoListFeaturesets = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse.deserializeBinary);
        this.methodInfoCreateFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse.deserializeBinary);
        this.methodInfoGetFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse.deserializeBinary);
        this.methodInfoUpdateFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse.deserializeBinary);
        this.methodInfoDeleteFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse.deserializeBinary);
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
    FeaturesetServiceClient.prototype.listFeaturesets = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/ListFeaturesets', request, metadata || {}, this.methodInfoListFeaturesets, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/ListFeaturesets', request, metadata || {}, this.methodInfoListFeaturesets);
    };
    FeaturesetServiceClient.prototype.createFeatureset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/CreateFeatureset', request, metadata || {}, this.methodInfoCreateFeatureset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/CreateFeatureset', request, metadata || {}, this.methodInfoCreateFeatureset);
    };
    FeaturesetServiceClient.prototype.getFeatureset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/GetFeatureset', request, metadata || {}, this.methodInfoGetFeatureset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/GetFeatureset', request, metadata || {}, this.methodInfoGetFeatureset);
    };
    FeaturesetServiceClient.prototype.updateFeatureset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/UpdateFeatureset', request, metadata || {}, this.methodInfoUpdateFeatureset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/UpdateFeatureset', request, metadata || {}, this.methodInfoUpdateFeatureset);
    };
    FeaturesetServiceClient.prototype.deleteFeatureset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/DeleteFeatureset', request, metadata || {}, this.methodInfoDeleteFeatureset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featureset.v1.FeaturesetService/DeleteFeatureset', request, metadata || {}, this.methodInfoDeleteFeatureset);
    };
    return FeaturesetServiceClient;
}());
export { FeaturesetServiceClient };
//# sourceMappingURL=FeaturesetServiceClientPb.js.map