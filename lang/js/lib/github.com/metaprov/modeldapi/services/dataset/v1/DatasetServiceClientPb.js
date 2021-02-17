/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.dataset.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb from '../../../../../../github.com/metaprov/modeldapi/services/dataset/v1/dataset_pb';
export class DatasetServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListDatasets = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse.deserializeBinary);
        this.methodInfoGetDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse.deserializeBinary);
        this.methodInfoCreateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse.deserializeBinary);
        this.methodInfoUpdateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse.deserializeBinary);
        this.methodInfoDeleteDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse.deserializeBinary);
        this.methodInfoCompareDatasets = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse.deserializeBinary);
        this.methodInfoGetDatasetProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse.deserializeBinary);
        this.methodInfoCreateDatasetProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse.deserializeBinary);
        this.methodInfoCreateColumnProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse.deserializeBinary);
        this.methodInfoGenerateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse.deserializeBinary);
        this.methodInfoValidateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse.deserializeBinary);
        this.methodInfoUploadChunk = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse.deserializeBinary);
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
    listDatasets(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/ListDatasets', request, metadata || {}, this.methodInfoListDatasets, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/ListDatasets', request, metadata || {}, this.methodInfoListDatasets);
    }
    getDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GetDataset', request, metadata || {}, this.methodInfoGetDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GetDataset', request, metadata || {}, this.methodInfoGetDataset);
    }
    createDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateDataset', request, metadata || {}, this.methodInfoCreateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateDataset', request, metadata || {}, this.methodInfoCreateDataset);
    }
    updateDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/UpdateDataset', request, metadata || {}, this.methodInfoUpdateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/UpdateDataset', request, metadata || {}, this.methodInfoUpdateDataset);
    }
    deleteDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/DeleteDataset', request, metadata || {}, this.methodInfoDeleteDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/DeleteDataset', request, metadata || {}, this.methodInfoDeleteDataset);
    }
    compareDatasets(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CompareDatasets', request, metadata || {}, this.methodInfoCompareDatasets, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CompareDatasets', request, metadata || {}, this.methodInfoCompareDatasets);
    }
    getDatasetProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GetDatasetProfile', request, metadata || {}, this.methodInfoGetDatasetProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GetDatasetProfile', request, metadata || {}, this.methodInfoGetDatasetProfile);
    }
    createDatasetProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateDatasetProfile', request, metadata || {}, this.methodInfoCreateDatasetProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateDatasetProfile', request, metadata || {}, this.methodInfoCreateDatasetProfile);
    }
    createColumnProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateColumnProfile', request, metadata || {}, this.methodInfoCreateColumnProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateColumnProfile', request, metadata || {}, this.methodInfoCreateColumnProfile);
    }
    generateDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GenerateDataset', request, metadata || {}, this.methodInfoGenerateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GenerateDataset', request, metadata || {}, this.methodInfoGenerateDataset);
    }
    validateDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/ValidateDataset', request, metadata || {}, this.methodInfoValidateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/ValidateDataset', request, metadata || {}, this.methodInfoValidateDataset);
    }
    uploadChunk(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/UploadChunk', request, metadata || {}, this.methodInfoUploadChunk, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/UploadChunk', request, metadata || {}, this.methodInfoUploadChunk);
    }
}
