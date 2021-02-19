/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.dataproductversion.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb from '../../../../../../github.com/metaprov/modeldapi/services/dataproductversion/v1/dataproductversion_pb';
var DataProductVersionServiceClient = /** @class */ (function () {
    function DataProductVersionServiceClient(hostname, credentials, options) {
        this.methodInfoListDataProductVersions = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse.deserializeBinary);
        this.methodInfoCreateDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse.deserializeBinary);
        this.methodInfoGetDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse.deserializeBinary);
        this.methodInfoUpdateDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse.deserializeBinary);
        this.methodInfoDeleteDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse.deserializeBinary);
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
    DataProductVersionServiceClient.prototype.listDataProductVersions = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/ListDataProductVersions', request, metadata || {}, this.methodInfoListDataProductVersions, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/ListDataProductVersions', request, metadata || {}, this.methodInfoListDataProductVersions);
    };
    DataProductVersionServiceClient.prototype.createDataProductVersion = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/CreateDataProductVersion', request, metadata || {}, this.methodInfoCreateDataProductVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/CreateDataProductVersion', request, metadata || {}, this.methodInfoCreateDataProductVersion);
    };
    DataProductVersionServiceClient.prototype.getDataProductVersion = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/GetDataProductVersion', request, metadata || {}, this.methodInfoGetDataProductVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/GetDataProductVersion', request, metadata || {}, this.methodInfoGetDataProductVersion);
    };
    DataProductVersionServiceClient.prototype.updateDataProductVersion = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/UpdateDataProductVersion', request, metadata || {}, this.methodInfoUpdateDataProductVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/UpdateDataProductVersion', request, metadata || {}, this.methodInfoUpdateDataProductVersion);
    };
    DataProductVersionServiceClient.prototype.deleteDataProductVersion = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/DeleteDataProductVersion', request, metadata || {}, this.methodInfoDeleteDataProductVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService/DeleteDataProductVersion', request, metadata || {}, this.methodInfoDeleteDataProductVersion);
    };
    return DataProductVersionServiceClient;
}());
export { DataProductVersionServiceClient };
//# sourceMappingURL=DataproductversionServiceClientPb.js.map