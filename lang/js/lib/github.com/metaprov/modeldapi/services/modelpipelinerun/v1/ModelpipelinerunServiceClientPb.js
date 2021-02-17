/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.modelpipelinerun.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelpipelinerun/v1/modelpipelinerun_pb';
export class ModelPipelineRunServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListModelPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse.deserializeBinary);
        this.methodInfoCreateModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse.deserializeBinary);
        this.methodInfoGetModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse.deserializeBinary);
        this.methodInfoUpdateModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse.deserializeBinary);
        this.methodInfoDeleteModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse.deserializeBinary);
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
    listModelPipelineRuns(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns', request, metadata || {}, this.methodInfoListModelPipelineRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns', request, metadata || {}, this.methodInfoListModelPipelineRuns);
    }
    createModelPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun', request, metadata || {}, this.methodInfoCreateModelPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun', request, metadata || {}, this.methodInfoCreateModelPipelineRun);
    }
    getModelPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun', request, metadata || {}, this.methodInfoGetModelPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun', request, metadata || {}, this.methodInfoGetModelPipelineRun);
    }
    updateModelPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun', request, metadata || {}, this.methodInfoUpdateModelPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun', request, metadata || {}, this.methodInfoUpdateModelPipelineRun);
    }
    deleteModelPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun', request, metadata || {}, this.methodInfoDeleteModelPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun', request, metadata || {}, this.methodInfoDeleteModelPipelineRun);
    }
}
