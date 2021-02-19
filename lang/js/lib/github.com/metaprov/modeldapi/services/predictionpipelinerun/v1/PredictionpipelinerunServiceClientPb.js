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
var PredictionPipelineRunServiceClient = /** @class */ (function () {
    function PredictionPipelineRunServiceClient(hostname, credentials, options) {
        this.methodInfoListPredictionPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.ListPredictionPipelineRunsResponse.deserializeBinary);
        this.methodInfoCreatePredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.CreatePredictionPipelineRunResponse.deserializeBinary);
        this.methodInfoGetPredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.GetPredictionPipelineRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.GetPredictionPipelineRunResponse.deserializeBinary);
        this.methodInfoUpdatePredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.UpdatePredictionPipelineRunResponse.deserializeBinary);
        this.methodInfoDeletePredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.DeletePredictionPipelineRunResponse.deserializeBinary);
        this.methodInfoDownload = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipelinerun_v1_predictionpipelinerun_pb.DownloadPredictionPipelineRunResponse, function (request) {
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
    PredictionPipelineRunServiceClient.prototype.listPredictionPipelineRuns = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/ListPredictionPipelineRuns', request, metadata || {}, this.methodInfoListPredictionPipelineRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/ListPredictionPipelineRuns', request, metadata || {}, this.methodInfoListPredictionPipelineRuns);
    };
    PredictionPipelineRunServiceClient.prototype.createPredictionPipelineRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/CreatePredictionPipelineRun', request, metadata || {}, this.methodInfoCreatePredictionPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/CreatePredictionPipelineRun', request, metadata || {}, this.methodInfoCreatePredictionPipelineRun);
    };
    PredictionPipelineRunServiceClient.prototype.getPredictionPipelineRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/GetPredictionPipelineRun', request, metadata || {}, this.methodInfoGetPredictionPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/GetPredictionPipelineRun', request, metadata || {}, this.methodInfoGetPredictionPipelineRun);
    };
    PredictionPipelineRunServiceClient.prototype.updatePredictionPipelineRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/UpdatePredictionPipelineRun', request, metadata || {}, this.methodInfoUpdatePredictionPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/UpdatePredictionPipelineRun', request, metadata || {}, this.methodInfoUpdatePredictionPipelineRun);
    };
    PredictionPipelineRunServiceClient.prototype.deletePredictionPipelineRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/DeletePredictionPipelineRun', request, metadata || {}, this.methodInfoDeletePredictionPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/DeletePredictionPipelineRun', request, metadata || {}, this.methodInfoDeletePredictionPipelineRun);
    };
    PredictionPipelineRunServiceClient.prototype.download = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/Download', request, metadata || {}, this.methodInfoDownload, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipelinerun.v1.PredictionPipelineRunService/Download', request, metadata || {}, this.methodInfoDownload);
    };
    return PredictionPipelineRunServiceClient;
}());
export { PredictionPipelineRunServiceClient };
//# sourceMappingURL=PredictionpipelinerunServiceClientPb.js.map