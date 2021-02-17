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
export class DataSourceServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListDataSources = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceResponse.deserializeBinary);
        this.methodInfoCreateDataSource = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse.deserializeBinary);
        this.methodInfoGetDataSource = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceResponse.deserializeBinary);
        this.methodInfoUpdateDataSource = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse.deserializeBinary);
        this.methodInfoDeleteDataSource = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse.deserializeBinary);
        this.methodInfoInferSchema = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaResponse.deserializeBinary);
        this.methodInfoGetTableView = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewResponse, (request) => {
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
    listDataSources(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/ListDataSources', request, metadata || {}, this.methodInfoListDataSources, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/ListDataSources', request, metadata || {}, this.methodInfoListDataSources);
    }
    createDataSource(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/CreateDataSource', request, metadata || {}, this.methodInfoCreateDataSource, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/CreateDataSource', request, metadata || {}, this.methodInfoCreateDataSource);
    }
    getDataSource(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/GetDataSource', request, metadata || {}, this.methodInfoGetDataSource, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/GetDataSource', request, metadata || {}, this.methodInfoGetDataSource);
    }
    updateDataSource(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/UpdateDataSource', request, metadata || {}, this.methodInfoUpdateDataSource, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/UpdateDataSource', request, metadata || {}, this.methodInfoUpdateDataSource);
    }
    deleteDataSource(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/DeleteDataSource', request, metadata || {}, this.methodInfoDeleteDataSource, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/DeleteDataSource', request, metadata || {}, this.methodInfoDeleteDataSource);
    }
    inferSchema(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/InferSchema', request, metadata || {}, this.methodInfoInferSchema, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/InferSchema', request, metadata || {}, this.methodInfoInferSchema);
    }
    getTableView(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/GetTableView', request, metadata || {}, this.methodInfoGetTableView, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datasource.v1.DataSourceService/GetTableView', request, metadata || {}, this.methodInfoGetTableView);
    }
}
