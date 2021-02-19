/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.predictor.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb from '../../../../../../github.com/metaprov/modeldapi/services/predictor/v1/predictor_pb';
var PredictorServiceClient = /** @class */ (function () {
    function PredictorServiceClient(hostname, credentials, options) {
        this.methodInfoListPredictors = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.ListPredictorsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.ListPredictorsResponse.deserializeBinary);
        this.methodInfoCreatePredictor = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.CreatePredictorResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.CreatePredictorResponse.deserializeBinary);
        this.methodInfoGetPredictor = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.GetPredictorResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.GetPredictorResponse.deserializeBinary);
        this.methodInfoUpdatePredictor = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse.deserializeBinary);
        this.methodInfoDeletePredictor = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.DeletePredictorResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.DeletePredictorResponse.deserializeBinary);
        this.methodInfoPredictOne = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.PredictOneResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.PredictOneResponse.deserializeBinary);
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
    PredictorServiceClient.prototype.listPredictors = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/ListPredictors', request, metadata || {}, this.methodInfoListPredictors, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/ListPredictors', request, metadata || {}, this.methodInfoListPredictors);
    };
    PredictorServiceClient.prototype.createPredictor = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/CreatePredictor', request, metadata || {}, this.methodInfoCreatePredictor, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/CreatePredictor', request, metadata || {}, this.methodInfoCreatePredictor);
    };
    PredictorServiceClient.prototype.getPredictor = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/GetPredictor', request, metadata || {}, this.methodInfoGetPredictor, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/GetPredictor', request, metadata || {}, this.methodInfoGetPredictor);
    };
    PredictorServiceClient.prototype.updatePredictor = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/UpdatePredictor', request, metadata || {}, this.methodInfoUpdatePredictor, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/UpdatePredictor', request, metadata || {}, this.methodInfoUpdatePredictor);
    };
    PredictorServiceClient.prototype.deletePredictor = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/DeletePredictor', request, metadata || {}, this.methodInfoDeletePredictor, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/DeletePredictor', request, metadata || {}, this.methodInfoDeletePredictor);
    };
    PredictorServiceClient.prototype.predictOne = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/PredictOne', request, metadata || {}, this.methodInfoPredictOne, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictor.v1.PredictorService/PredictOne', request, metadata || {}, this.methodInfoPredictOne);
    };
    return PredictorServiceClient;
}());
export { PredictorServiceClient };
//# sourceMappingURL=PredictorServiceClientPb.js.map