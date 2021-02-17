/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.modelpipeline.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelpipeline/v1/modelpipeline_pb';
export class ModelPipelineServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListModelPipelines = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse.deserializeBinary);
        this.methodInfoCreateModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse.deserializeBinary);
        this.methodInfoGetModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse.deserializeBinary);
        this.methodInfoUpdateModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse.deserializeBinary);
        this.methodInfoDeleteModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse.deserializeBinary);
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
    listModelPipelines(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/ListModelPipelines', request, metadata || {}, this.methodInfoListModelPipelines, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/ListModelPipelines', request, metadata || {}, this.methodInfoListModelPipelines);
    }
    createModelPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/CreateModelPipeline', request, metadata || {}, this.methodInfoCreateModelPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/CreateModelPipeline', request, metadata || {}, this.methodInfoCreateModelPipeline);
    }
    getModelPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/GetModelPipeline', request, metadata || {}, this.methodInfoGetModelPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/GetModelPipeline', request, metadata || {}, this.methodInfoGetModelPipeline);
    }
    updateModelPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/UpdateModelPipeline', request, metadata || {}, this.methodInfoUpdateModelPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/UpdateModelPipeline', request, metadata || {}, this.methodInfoUpdateModelPipeline);
    }
    deleteModelPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/DeleteModelPipeline', request, metadata || {}, this.methodInfoDeleteModelPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/DeleteModelPipeline', request, metadata || {}, this.methodInfoDeleteModelPipeline);
    }
}
