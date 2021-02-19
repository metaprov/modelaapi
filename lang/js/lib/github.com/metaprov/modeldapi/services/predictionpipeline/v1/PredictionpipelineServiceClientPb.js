/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.predictionpipeline.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/predictionpipeline/v1/predictionpipeline_pb';
var PredictionPipelineServiceClient = /** @class */ (function () {
    function PredictionPipelineServiceClient(hostname, credentials, options) {
        this.methodInfoListPredictionPipelines = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.ListPredictionPipelinesResponse.deserializeBinary);
        this.methodInfoCreatePredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.CreatePredictionPipelineResponse.deserializeBinary);
        this.methodInfoGetPredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.GetPredictionPipelineResponse.deserializeBinary);
        this.methodInfoUpdatePredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.UpdatePredictionPipelineResponse.deserializeBinary);
        this.methodInfoDeletePredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DeletePredictionPipelineResponse.deserializeBinary);
        this.methodInfoDownload = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionpipeline_v1_predictionpipeline_pb.DownloadPredictionPipelineResponse.deserializeBinary);
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
    PredictionPipelineServiceClient.prototype.listPredictionPipelines = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/ListPredictionPipelines', request, metadata || {}, this.methodInfoListPredictionPipelines, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/ListPredictionPipelines', request, metadata || {}, this.methodInfoListPredictionPipelines);
    };
    PredictionPipelineServiceClient.prototype.createPredictionPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/CreatePredictionPipeline', request, metadata || {}, this.methodInfoCreatePredictionPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/CreatePredictionPipeline', request, metadata || {}, this.methodInfoCreatePredictionPipeline);
    };
    PredictionPipelineServiceClient.prototype.getPredictionPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/GetPredictionPipeline', request, metadata || {}, this.methodInfoGetPredictionPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/GetPredictionPipeline', request, metadata || {}, this.methodInfoGetPredictionPipeline);
    };
    PredictionPipelineServiceClient.prototype.updatePredictionPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/UpdatePredictionPipeline', request, metadata || {}, this.methodInfoUpdatePredictionPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/UpdatePredictionPipeline', request, metadata || {}, this.methodInfoUpdatePredictionPipeline);
    };
    PredictionPipelineServiceClient.prototype.deletePredictionPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/DeletePredictionPipeline', request, metadata || {}, this.methodInfoDeletePredictionPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/DeletePredictionPipeline', request, metadata || {}, this.methodInfoDeletePredictionPipeline);
    };
    PredictionPipelineServiceClient.prototype.download = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/Download', request, metadata || {}, this.methodInfoDownload, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/Download', request, metadata || {}, this.methodInfoDownload);
    };
    return PredictionPipelineServiceClient;
}());
export { PredictionPipelineServiceClient };
//# sourceMappingURL=PredictionpipelineServiceClientPb.js.map