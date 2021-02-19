/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.trainerd.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb from '../../../../../../github.com/metaprov/modeldapi/services/trainerd/v1/trainerd_pb';
var TrainerdServiceClient = /** @class */ (function () {
    function TrainerdServiceClient(hostname, credentials, options) {
        this.methodInfoTrain = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse.deserializeBinary);
        this.methodInfoForecast = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ForecastResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ForecastResponse.deserializeBinary);
        this.methodInfoTest = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse.deserializeBinary);
        this.methodInfoTrainEnsemble = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse.deserializeBinary);
        this.methodInfoTestEnsemble = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse.deserializeBinary);
        this.methodInfoShutdown = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ShutdownResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ShutdownResponse.deserializeBinary);
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
    TrainerdServiceClient.prototype.train = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/Train', request, metadata || {}, this.methodInfoTrain, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/Train', request, metadata || {}, this.methodInfoTrain);
    };
    TrainerdServiceClient.prototype.forecast = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/Forecast', request, metadata || {}, this.methodInfoForecast, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/Forecast', request, metadata || {}, this.methodInfoForecast);
    };
    TrainerdServiceClient.prototype.test = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/Test', request, metadata || {}, this.methodInfoTest, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/Test', request, metadata || {}, this.methodInfoTest);
    };
    TrainerdServiceClient.prototype.trainEnsemble = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/TrainEnsemble', request, metadata || {}, this.methodInfoTrainEnsemble, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/TrainEnsemble', request, metadata || {}, this.methodInfoTrainEnsemble);
    };
    TrainerdServiceClient.prototype.testEnsemble = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/TestEnsemble', request, metadata || {}, this.methodInfoTestEnsemble, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/TestEnsemble', request, metadata || {}, this.methodInfoTestEnsemble);
    };
    TrainerdServiceClient.prototype.shutdown = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/Shutdown', request, metadata || {}, this.methodInfoShutdown, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.trainerd.v1.TrainerdService/Shutdown', request, metadata || {}, this.methodInfoShutdown);
    };
    return TrainerdServiceClient;
}());
export { TrainerdServiceClient };
//# sourceMappingURL=TrainerdServiceClientPb.js.map