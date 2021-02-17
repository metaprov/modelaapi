/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.predictionpipelinerun.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/predictionpipelinerun/v1/predictionpipelinerun_pb';
export class PredictionPipelineRunServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListPredictionPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse.deserializeBinary);
        this.methodInfoCreatePredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse.deserializeBinary);
        this.methodInfoGetPredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.GetPredictionPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.GetPredictionPipelineRunResponse.deserializeBinary);
        this.methodInfoUpdatePredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse.deserializeBinary);
        this.methodInfoDeletePredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse.deserializeBinary);
        this.methodInfoDownload = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.DownloadPredictionPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.DownloadPredictionPipelineRunResponse.deserializeBinary);
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
    listPredictionPipelineRuns(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/ListPredictionPipelineRuns', request, metadata || {}, this.methodInfoListPredictionPipelineRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/ListPredictionPipelineRuns', request, metadata || {}, this.methodInfoListPredictionPipelineRuns);
    }
    createPredictionPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/CreatePredictionPipelineRun', request, metadata || {}, this.methodInfoCreatePredictionPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/CreatePredictionPipelineRun', request, metadata || {}, this.methodInfoCreatePredictionPipelineRun);
    }
    getPredictionPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/GetPredictionPipelineRun', request, metadata || {}, this.methodInfoGetPredictionPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/GetPredictionPipelineRun', request, metadata || {}, this.methodInfoGetPredictionPipelineRun);
    }
    updatePredictionPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/UpdatePredictionPipelineRun', request, metadata || {}, this.methodInfoUpdatePredictionPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/UpdatePredictionPipelineRun', request, metadata || {}, this.methodInfoUpdatePredictionPipelineRun);
    }
    deletePredictionPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/DeletePredictionPipelineRun', request, metadata || {}, this.methodInfoDeletePredictionPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/DeletePredictionPipelineRun', request, metadata || {}, this.methodInfoDeletePredictionPipelineRun);
    }
    download(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/Download', request, metadata || {}, this.methodInfoDownload, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/Download', request, metadata || {}, this.methodInfoDownload);
    }
}
