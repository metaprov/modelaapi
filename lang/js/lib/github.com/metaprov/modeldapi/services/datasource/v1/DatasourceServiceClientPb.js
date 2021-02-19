/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.datasource.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb from '../../../../../../github.com/metaprov/modeldapi/services/datasource/v1/datasource_pb';
var DataSourceServiceClient = /** @class */ (function () {
    function DataSourceServiceClient(hostname, credentials, options) {
        this.methodInfoListDataSources = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceResponse.deserializeBinary);
        this.methodInfoCreateDataSource = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse.deserializeBinary);
        this.methodInfoGetDataSource = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceResponse.deserializeBinary);
        this.methodInfoUpdateDataSource = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse.deserializeBinary);
        this.methodInfoDeleteDataSource = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse.deserializeBinary);
        this.methodInfoInferSchema = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaResponse.deserializeBinary);
        this.methodInfoGetTableView = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewResponse.deserializeBinary);
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
    DataSourceServiceClient.prototype.listDataSources = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/ListDataSources', request, metadata || {}, this.methodInfoListDataSources, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/ListDataSources', request, metadata || {}, this.methodInfoListDataSources);
    };
    DataSourceServiceClient.prototype.createDataSource = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/CreateDataSource', request, metadata || {}, this.methodInfoCreateDataSource, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/CreateDataSource', request, metadata || {}, this.methodInfoCreateDataSource);
    };
    DataSourceServiceClient.prototype.getDataSource = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/GetDataSource', request, metadata || {}, this.methodInfoGetDataSource, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/GetDataSource', request, metadata || {}, this.methodInfoGetDataSource);
    };
    DataSourceServiceClient.prototype.updateDataSource = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/UpdateDataSource', request, metadata || {}, this.methodInfoUpdateDataSource, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/UpdateDataSource', request, metadata || {}, this.methodInfoUpdateDataSource);
    };
    DataSourceServiceClient.prototype.deleteDataSource = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/DeleteDataSource', request, metadata || {}, this.methodInfoDeleteDataSource, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/DeleteDataSource', request, metadata || {}, this.methodInfoDeleteDataSource);
    };
    DataSourceServiceClient.prototype.inferSchema = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/InferSchema', request, metadata || {}, this.methodInfoInferSchema, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/InferSchema', request, metadata || {}, this.methodInfoInferSchema);
    };
    DataSourceServiceClient.prototype.getTableView = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/GetTableView', request, metadata || {}, this.methodInfoGetTableView, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/GetTableView', request, metadata || {}, this.methodInfoGetTableView);
    };
    return DataSourceServiceClient;
}());
export { DataSourceServiceClient };
//# sourceMappingURL=DatasourceServiceClientPb.js.map