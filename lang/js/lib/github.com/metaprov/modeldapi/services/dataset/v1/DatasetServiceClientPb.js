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
var DatasetServiceClient = /** @class */ (function () {
    function DatasetServiceClient(hostname, credentials, options) {
        this.methodInfoListDatasets = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse.deserializeBinary);
        this.methodInfoGetDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse.deserializeBinary);
        this.methodInfoCreateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse.deserializeBinary);
        this.methodInfoUpdateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse.deserializeBinary);
        this.methodInfoDeleteDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse.deserializeBinary);
        this.methodInfoCompareDatasets = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse.deserializeBinary);
        this.methodInfoGetDatasetProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse.deserializeBinary);
        this.methodInfoCreateDatasetProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse.deserializeBinary);
        this.methodInfoCreateColumnProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse.deserializeBinary);
        this.methodInfoGenerateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse.deserializeBinary);
        this.methodInfoValidateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse.deserializeBinary);
        this.methodInfoUploadChunk = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse, function (request) {
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
    DatasetServiceClient.prototype.listDatasets = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/ListDatasets', request, metadata || {}, this.methodInfoListDatasets, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/ListDatasets', request, metadata || {}, this.methodInfoListDatasets);
    };
    DatasetServiceClient.prototype.getDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GetDataset', request, metadata || {}, this.methodInfoGetDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GetDataset', request, metadata || {}, this.methodInfoGetDataset);
    };
    DatasetServiceClient.prototype.createDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateDataset', request, metadata || {}, this.methodInfoCreateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateDataset', request, metadata || {}, this.methodInfoCreateDataset);
    };
    DatasetServiceClient.prototype.updateDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/UpdateDataset', request, metadata || {}, this.methodInfoUpdateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/UpdateDataset', request, metadata || {}, this.methodInfoUpdateDataset);
    };
    DatasetServiceClient.prototype.deleteDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/DeleteDataset', request, metadata || {}, this.methodInfoDeleteDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/DeleteDataset', request, metadata || {}, this.methodInfoDeleteDataset);
    };
    DatasetServiceClient.prototype.compareDatasets = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CompareDatasets', request, metadata || {}, this.methodInfoCompareDatasets, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CompareDatasets', request, metadata || {}, this.methodInfoCompareDatasets);
    };
    DatasetServiceClient.prototype.getDatasetProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GetDatasetProfile', request, metadata || {}, this.methodInfoGetDatasetProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GetDatasetProfile', request, metadata || {}, this.methodInfoGetDatasetProfile);
    };
    DatasetServiceClient.prototype.createDatasetProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateDatasetProfile', request, metadata || {}, this.methodInfoCreateDatasetProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateDatasetProfile', request, metadata || {}, this.methodInfoCreateDatasetProfile);
    };
    DatasetServiceClient.prototype.createColumnProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateColumnProfile', request, metadata || {}, this.methodInfoCreateColumnProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/CreateColumnProfile', request, metadata || {}, this.methodInfoCreateColumnProfile);
    };
    DatasetServiceClient.prototype.generateDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GenerateDataset', request, metadata || {}, this.methodInfoGenerateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/GenerateDataset', request, metadata || {}, this.methodInfoGenerateDataset);
    };
    DatasetServiceClient.prototype.validateDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/ValidateDataset', request, metadata || {}, this.methodInfoValidateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/ValidateDataset', request, metadata || {}, this.methodInfoValidateDataset);
    };
    DatasetServiceClient.prototype.uploadChunk = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/UploadChunk', request, metadata || {}, this.methodInfoUploadChunk, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataset.v1.DatasetService/UploadChunk', request, metadata || {}, this.methodInfoUploadChunk);
    };
    return DatasetServiceClient;
}());
export { DatasetServiceClient };
//# sourceMappingURL=DatasetServiceClientPb.js.map