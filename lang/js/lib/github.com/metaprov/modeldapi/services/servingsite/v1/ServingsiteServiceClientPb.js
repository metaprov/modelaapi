/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.servingsite.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb from '../../../../../../github.com/metaprov/modeldapi/services/servingsite/v1/servingsite_pb';
export class ServingSiteServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListServingSites = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse.deserializeBinary);
        this.methodInfoCreateServingSite = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse.deserializeBinary);
        this.methodInfoGetServingSite = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse.deserializeBinary);
        this.methodInfoUpdateServingSite = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse.deserializeBinary);
        this.methodInfoDeleteServingSite = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse.deserializeBinary);
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
    listServingSites(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/ListServingSites', request, metadata || {}, this.methodInfoListServingSites, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/ListServingSites', request, metadata || {}, this.methodInfoListServingSites);
    }
    createServingSite(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/CreateServingSite', request, metadata || {}, this.methodInfoCreateServingSite, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/CreateServingSite', request, metadata || {}, this.methodInfoCreateServingSite);
    }
    getServingSite(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/GetServingSite', request, metadata || {}, this.methodInfoGetServingSite, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/GetServingSite', request, metadata || {}, this.methodInfoGetServingSite);
    }
    updateServingSite(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/UpdateServingSite', request, metadata || {}, this.methodInfoUpdateServingSite, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/UpdateServingSite', request, metadata || {}, this.methodInfoUpdateServingSite);
    }
    deleteServingSite(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/DeleteServingSite', request, metadata || {}, this.methodInfoDeleteServingSite, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/DeleteServingSite', request, metadata || {}, this.methodInfoDeleteServingSite);
    }
}
