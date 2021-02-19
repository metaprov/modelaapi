/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.featurepipeline.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/featurepipeline/v1/featurepipeline_pb';
var FeaturePipelineServiceClient = /** @class */ (function () {
    function FeaturePipelineServiceClient(hostname, credentials, options) {
        this.methodInfoListFeaturePipelines = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse.deserializeBinary);
        this.methodInfoCreateFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse.deserializeBinary);
        this.methodInfoGetFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse.deserializeBinary);
        this.methodInfoUpdateFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse.deserializeBinary);
        this.methodInfoDeleteFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse.deserializeBinary);
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
    FeaturePipelineServiceClient.prototype.listFeaturePipelines = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines', request, metadata || {}, this.methodInfoListFeaturePipelines, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines', request, metadata || {}, this.methodInfoListFeaturePipelines);
    };
    FeaturePipelineServiceClient.prototype.createFeaturePipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline', request, metadata || {}, this.methodInfoCreateFeaturePipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline', request, metadata || {}, this.methodInfoCreateFeaturePipeline);
    };
    FeaturePipelineServiceClient.prototype.getFeaturePipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline', request, metadata || {}, this.methodInfoGetFeaturePipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline', request, metadata || {}, this.methodInfoGetFeaturePipeline);
    };
    FeaturePipelineServiceClient.prototype.updateFeaturePipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline', request, metadata || {}, this.methodInfoUpdateFeaturePipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline', request, metadata || {}, this.methodInfoUpdateFeaturePipeline);
    };
    FeaturePipelineServiceClient.prototype.deleteFeaturePipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline', request, metadata || {}, this.methodInfoDeleteFeaturePipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline', request, metadata || {}, this.methodInfoDeleteFeaturePipeline);
    };
    return FeaturePipelineServiceClient;
}());
export { FeaturePipelineServiceClient };
//# sourceMappingURL=FeaturepipelineServiceClientPb.js.map