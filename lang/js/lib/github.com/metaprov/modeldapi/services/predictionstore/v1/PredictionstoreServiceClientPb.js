/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.predictionstore.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb from '../../../../../../github.com/metaprov/modeldapi/services/predictionstore/v1/predictionstore_pb';
var PredictionStoreServiceClient = /** @class */ (function () {
    function PredictionStoreServiceClient(hostname, credentials, options) {
        this.methodInfoIngest = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb.PredictionIngestResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb.PredictionIngestResponse.deserializeBinary);
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
    PredictionStoreServiceClient.prototype.ingest = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionStoreService/Ingest', request, metadata || {}, this.methodInfoIngest, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionStoreService/Ingest', request, metadata || {}, this.methodInfoIngest);
    };
    return PredictionStoreServiceClient;
}());
export { PredictionStoreServiceClient };
//# sourceMappingURL=PredictionstoreServiceClientPb.js.map