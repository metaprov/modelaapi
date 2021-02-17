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
export class ArchivedServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoRecordModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse.deserializeBinary);
        this.methodInfoRecordStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse.deserializeBinary);
        this.methodInfoRecordDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse.deserializeBinary);
        this.methodInfoRecordPredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse.deserializeBinary);
        this.methodInfoRecordPredictor = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse.deserializeBinary);
        this.methodInfoRecordProduct = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse.deserializeBinary);
        this.methodInfoRecordProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse.deserializeBinary);
        this.methodInfoRecordAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse, (request) => {
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
    recordModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordModel', request, metadata || {}, this.methodInfoRecordModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordModel', request, metadata || {}, this.methodInfoRecordModel);
    }
    recordStudy(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordStudy', request, metadata || {}, this.methodInfoRecordStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordStudy', request, metadata || {}, this.methodInfoRecordStudy);
    }
    recordDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataset', request, metadata || {}, this.methodInfoRecordDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataset', request, metadata || {}, this.methodInfoRecordDataset);
    }
    recordPredictionPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictionPipeline', request, metadata || {}, this.methodInfoRecordPredictionPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictionPipeline', request, metadata || {}, this.methodInfoRecordPredictionPipeline);
    }
    recordPredictor(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictor', request, metadata || {}, this.methodInfoRecordPredictor, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictor', request, metadata || {}, this.methodInfoRecordPredictor);
    }
    recordProduct(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordProduct', request, metadata || {}, this.methodInfoRecordProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordProduct', request, metadata || {}, this.methodInfoRecordProduct);
    }
    recordProductVersion(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordProductVersion', request, metadata || {}, this.methodInfoRecordProductVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordProductVersion', request, metadata || {}, this.methodInfoRecordProductVersion);
    }
    recordAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordAccount', request, metadata || {}, this.methodInfoRecordAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordAccount', request, metadata || {}, this.methodInfoRecordAccount);
    }
}
