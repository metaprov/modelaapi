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
export class FeaturePipelineServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListFeaturePipelines = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse.deserializeBinary);
        this.methodInfoCreateFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse.deserializeBinary);
        this.methodInfoGetFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse.deserializeBinary);
        this.methodInfoUpdateFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse.deserializeBinary);
        this.methodInfoDeleteFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse, (request) => {
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
    listFeaturePipelines(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines', request, metadata || {}, this.methodInfoListFeaturePipelines, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines', request, metadata || {}, this.methodInfoListFeaturePipelines);
    }
    createFeaturePipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline', request, metadata || {}, this.methodInfoCreateFeaturePipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline', request, metadata || {}, this.methodInfoCreateFeaturePipeline);
    }
    getFeaturePipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline', request, metadata || {}, this.methodInfoGetFeaturePipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline', request, metadata || {}, this.methodInfoGetFeaturePipeline);
    }
    updateFeaturePipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline', request, metadata || {}, this.methodInfoUpdateFeaturePipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline', request, metadata || {}, this.methodInfoUpdateFeaturePipeline);
    }
    deleteFeaturePipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline', request, metadata || {}, this.methodInfoDeleteFeaturePipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline', request, metadata || {}, this.methodInfoDeleteFeaturePipeline);
    }
}
