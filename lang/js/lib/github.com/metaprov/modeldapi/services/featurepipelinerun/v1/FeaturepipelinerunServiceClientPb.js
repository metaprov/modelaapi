/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.featurepipelinerun.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/featurepipelinerun/v1/featurepipelinerun_pb';
export class FeaturePipelineRunServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListFeaturePipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse.deserializeBinary);
        this.methodInfoCreateFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse.deserializeBinary);
        this.methodInfoGetFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse.deserializeBinary);
        this.methodInfoUpdateFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse.deserializeBinary);
        this.methodInfoDeleteFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse.deserializeBinary);
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
    listFeaturePipelineRuns(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/ListFeaturePipelineRuns', request, metadata || {}, this.methodInfoListFeaturePipelineRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/ListFeaturePipelineRuns', request, metadata || {}, this.methodInfoListFeaturePipelineRuns);
    }
    createFeaturePipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/CreateFeaturePipelineRun', request, metadata || {}, this.methodInfoCreateFeaturePipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/CreateFeaturePipelineRun', request, metadata || {}, this.methodInfoCreateFeaturePipelineRun);
    }
    getFeaturePipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/GetFeaturePipelineRun', request, metadata || {}, this.methodInfoGetFeaturePipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/GetFeaturePipelineRun', request, metadata || {}, this.methodInfoGetFeaturePipelineRun);
    }
    updateFeaturePipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/UpdateFeaturePipelineRun', request, metadata || {}, this.methodInfoUpdateFeaturePipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/UpdateFeaturePipelineRun', request, metadata || {}, this.methodInfoUpdateFeaturePipelineRun);
    }
    deleteFeaturePipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/DeleteFeaturePipelineRun', request, metadata || {}, this.methodInfoDeleteFeaturePipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.featurepipelinerun.v1.FeaturePipelineRunService/DeleteFeaturePipelineRun', request, metadata || {}, this.methodInfoDeleteFeaturePipelineRun);
    }
}
