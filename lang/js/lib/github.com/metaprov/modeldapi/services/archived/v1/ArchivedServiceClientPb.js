/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.archived.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_archived_v1_archived_pb from '../../../../../../github.com/metaprov/modeldapi/services/archived/v1/archived_pb';
var ArchivedServiceClient = /** @class */ (function () {
    function ArchivedServiceClient(hostname, credentials, options) {
        this.methodInfoRecordModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse.deserializeBinary);
        this.methodInfoRecordStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse.deserializeBinary);
        this.methodInfoRecordDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse.deserializeBinary);
        this.methodInfoRecordPredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse.deserializeBinary);
        this.methodInfoRecordPredictor = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse.deserializeBinary);
        this.methodInfoRecordProduct = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse.deserializeBinary);
        this.methodInfoRecordProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse.deserializeBinary);
        this.methodInfoRecordAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse.deserializeBinary);
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
    ArchivedServiceClient.prototype.recordModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordModel', request, metadata || {}, this.methodInfoRecordModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordModel', request, metadata || {}, this.methodInfoRecordModel);
    };
    ArchivedServiceClient.prototype.recordStudy = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordStudy', request, metadata || {}, this.methodInfoRecordStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordStudy', request, metadata || {}, this.methodInfoRecordStudy);
    };
    ArchivedServiceClient.prototype.recordDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataset', request, metadata || {}, this.methodInfoRecordDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataset', request, metadata || {}, this.methodInfoRecordDataset);
    };
    ArchivedServiceClient.prototype.recordPredictionPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictionPipeline', request, metadata || {}, this.methodInfoRecordPredictionPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictionPipeline', request, metadata || {}, this.methodInfoRecordPredictionPipeline);
    };
    ArchivedServiceClient.prototype.recordPredictor = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictor', request, metadata || {}, this.methodInfoRecordPredictor, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictor', request, metadata || {}, this.methodInfoRecordPredictor);
    };
    ArchivedServiceClient.prototype.recordProduct = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordProduct', request, metadata || {}, this.methodInfoRecordProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordProduct', request, metadata || {}, this.methodInfoRecordProduct);
    };
    ArchivedServiceClient.prototype.recordProductVersion = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordProductVersion', request, metadata || {}, this.methodInfoRecordProductVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordProductVersion', request, metadata || {}, this.methodInfoRecordProductVersion);
    };
    ArchivedServiceClient.prototype.recordAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordAccount', request, metadata || {}, this.methodInfoRecordAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordAccount', request, metadata || {}, this.methodInfoRecordAccount);
    };
    return ArchivedServiceClient;
}());
export { ArchivedServiceClient };
//# sourceMappingURL=ArchivedServiceClientPb.js.map