/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.catalog.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb from '../../../../../../github.com/metaprov/modeldapi/services/catalog/v1/catalog_pb';
var CatalogServiceClient = /** @class */ (function () {
    function CatalogServiceClient(hostname, credentials, options) {
        this.methodInfoListAlgorithm = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse.deserializeBinary);
        this.methodInfoGetAlgorithm = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse.deserializeBinary);
        this.methodInfoListMLFrameworks = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse.deserializeBinary);
        this.methodInfoGetMLFramework = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse.deserializeBinary);
        this.methodInfoListClouds = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse.deserializeBinary);
        this.methodInfoGetCloud = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse.deserializeBinary);
        this.methodInfoListWorkloadClasses = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse.deserializeBinary);
        this.methodInfoGetWorkloadClass = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse.deserializeBinary);
        this.methodInfoListUserRoleClasses = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesResponse.deserializeBinary);
        this.methodInfoGetUserRoleClass = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassResponse.deserializeBinary);
        this.methodInfoListPublicDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsResponse.deserializeBinary);
        this.methodInfoGetPublicDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetResponse.deserializeBinary);
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
    CatalogServiceClient.prototype.listAlgorithm = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListAlgorithm', request, metadata || {}, this.methodInfoListAlgorithm, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListAlgorithm', request, metadata || {}, this.methodInfoListAlgorithm);
    };
    CatalogServiceClient.prototype.getAlgorithm = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetAlgorithm', request, metadata || {}, this.methodInfoGetAlgorithm, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetAlgorithm', request, metadata || {}, this.methodInfoGetAlgorithm);
    };
    CatalogServiceClient.prototype.listMLFrameworks = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListMLFrameworks', request, metadata || {}, this.methodInfoListMLFrameworks, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListMLFrameworks', request, metadata || {}, this.methodInfoListMLFrameworks);
    };
    CatalogServiceClient.prototype.getMLFramework = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetMLFramework', request, metadata || {}, this.methodInfoGetMLFramework, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetMLFramework', request, metadata || {}, this.methodInfoGetMLFramework);
    };
    CatalogServiceClient.prototype.listClouds = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListClouds', request, metadata || {}, this.methodInfoListClouds, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListClouds', request, metadata || {}, this.methodInfoListClouds);
    };
    CatalogServiceClient.prototype.getCloud = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetCloud', request, metadata || {}, this.methodInfoGetCloud, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetCloud', request, metadata || {}, this.methodInfoGetCloud);
    };
    CatalogServiceClient.prototype.listWorkloadClasses = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListWorkloadClasses', request, metadata || {}, this.methodInfoListWorkloadClasses, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListWorkloadClasses', request, metadata || {}, this.methodInfoListWorkloadClasses);
    };
    CatalogServiceClient.prototype.getWorkloadClass = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetWorkloadClass', request, metadata || {}, this.methodInfoGetWorkloadClass, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetWorkloadClass', request, metadata || {}, this.methodInfoGetWorkloadClass);
    };
    CatalogServiceClient.prototype.listUserRoleClasses = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListUserRoleClasses', request, metadata || {}, this.methodInfoListUserRoleClasses, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListUserRoleClasses', request, metadata || {}, this.methodInfoListUserRoleClasses);
    };
    CatalogServiceClient.prototype.getUserRoleClass = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetUserRoleClass', request, metadata || {}, this.methodInfoGetUserRoleClass, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetUserRoleClass', request, metadata || {}, this.methodInfoGetUserRoleClass);
    };
    CatalogServiceClient.prototype.listPublicDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListPublicDataset', request, metadata || {}, this.methodInfoListPublicDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListPublicDataset', request, metadata || {}, this.methodInfoListPublicDataset);
    };
    CatalogServiceClient.prototype.getPublicDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetPublicDataset', request, metadata || {}, this.methodInfoGetPublicDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetPublicDataset', request, metadata || {}, this.methodInfoGetPublicDataset);
    };
    return CatalogServiceClient;
}());
export { CatalogServiceClient };
//# sourceMappingURL=CatalogServiceClientPb.js.map