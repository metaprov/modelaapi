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
export class CatalogServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListAlgorithm = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse.deserializeBinary);
        this.methodInfoGetAlgorithm = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse.deserializeBinary);
        this.methodInfoListMLFrameworks = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse.deserializeBinary);
        this.methodInfoGetMLFramework = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse.deserializeBinary);
        this.methodInfoListClouds = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse.deserializeBinary);
        this.methodInfoGetCloud = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse.deserializeBinary);
        this.methodInfoListWorkloadClasses = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse.deserializeBinary);
        this.methodInfoGetWorkloadClass = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse.deserializeBinary);
        this.methodInfoListUserRoleClasses = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesResponse.deserializeBinary);
        this.methodInfoGetUserRoleClass = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassResponse.deserializeBinary);
        this.methodInfoListPublicDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsResponse.deserializeBinary);
        this.methodInfoGetPublicDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetResponse, (request) => {
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
    listAlgorithm(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListAlgorithm', request, metadata || {}, this.methodInfoListAlgorithm, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListAlgorithm', request, metadata || {}, this.methodInfoListAlgorithm);
    }
    getAlgorithm(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetAlgorithm', request, metadata || {}, this.methodInfoGetAlgorithm, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetAlgorithm', request, metadata || {}, this.methodInfoGetAlgorithm);
    }
    listMLFrameworks(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListMLFrameworks', request, metadata || {}, this.methodInfoListMLFrameworks, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListMLFrameworks', request, metadata || {}, this.methodInfoListMLFrameworks);
    }
    getMLFramework(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetMLFramework', request, metadata || {}, this.methodInfoGetMLFramework, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetMLFramework', request, metadata || {}, this.methodInfoGetMLFramework);
    }
    listClouds(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListClouds', request, metadata || {}, this.methodInfoListClouds, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListClouds', request, metadata || {}, this.methodInfoListClouds);
    }
    getCloud(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetCloud', request, metadata || {}, this.methodInfoGetCloud, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetCloud', request, metadata || {}, this.methodInfoGetCloud);
    }
    listWorkloadClasses(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListWorkloadClasses', request, metadata || {}, this.methodInfoListWorkloadClasses, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListWorkloadClasses', request, metadata || {}, this.methodInfoListWorkloadClasses);
    }
    getWorkloadClass(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetWorkloadClass', request, metadata || {}, this.methodInfoGetWorkloadClass, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetWorkloadClass', request, metadata || {}, this.methodInfoGetWorkloadClass);
    }
    listUserRoleClasses(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListUserRoleClasses', request, metadata || {}, this.methodInfoListUserRoleClasses, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListUserRoleClasses', request, metadata || {}, this.methodInfoListUserRoleClasses);
    }
    getUserRoleClass(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetUserRoleClass', request, metadata || {}, this.methodInfoGetUserRoleClass, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetUserRoleClass', request, metadata || {}, this.methodInfoGetUserRoleClass);
    }
    listPublicDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListPublicDataset', request, metadata || {}, this.methodInfoListPublicDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/ListPublicDataset', request, metadata || {}, this.methodInfoListPublicDataset);
    }
    getPublicDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetPublicDataset', request, metadata || {}, this.methodInfoGetPublicDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.catalog.v1.CatalogService/GetPublicDataset', request, metadata || {}, this.methodInfoGetPublicDataset);
    }
}
