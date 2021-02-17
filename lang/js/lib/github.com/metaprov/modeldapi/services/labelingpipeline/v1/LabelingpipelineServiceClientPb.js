/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.labelingpipeline.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/labelingpipeline/v1/labelingpipeline_pb';
export class LabelingPipelineServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListLabelingPipelines = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse.deserializeBinary);
        this.methodInfoCreateLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse.deserializeBinary);
        this.methodInfoGetLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse.deserializeBinary);
        this.methodInfoUpdateLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse.deserializeBinary);
        this.methodInfoDeleteLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse.deserializeBinary);
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
    listLabelingPipelines(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/ListLabelingPipelines', request, metadata || {}, this.methodInfoListLabelingPipelines, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/ListLabelingPipelines', request, metadata || {}, this.methodInfoListLabelingPipelines);
    }
    createLabelingPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/CreateLabelingPipeline', request, metadata || {}, this.methodInfoCreateLabelingPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/CreateLabelingPipeline', request, metadata || {}, this.methodInfoCreateLabelingPipeline);
    }
    getLabelingPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/GetLabelingPipeline', request, metadata || {}, this.methodInfoGetLabelingPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/GetLabelingPipeline', request, metadata || {}, this.methodInfoGetLabelingPipeline);
    }
    updateLabelingPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/UpdateLabelingPipeline', request, metadata || {}, this.methodInfoUpdateLabelingPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/UpdateLabelingPipeline', request, metadata || {}, this.methodInfoUpdateLabelingPipeline);
    }
    deleteLabelingPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/DeleteLabelingPipeline', request, metadata || {}, this.methodInfoDeleteLabelingPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/DeleteLabelingPipeline', request, metadata || {}, this.methodInfoDeleteLabelingPipeline);
    }
}
