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
var ServingSiteServiceClient = /** @class */ (function () {
    function ServingSiteServiceClient(hostname, credentials, options) {
        this.methodInfoListServingSites = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse.deserializeBinary);
        this.methodInfoCreateServingSite = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse.deserializeBinary);
        this.methodInfoGetServingSite = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse.deserializeBinary);
        this.methodInfoUpdateServingSite = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse.deserializeBinary);
        this.methodInfoDeleteServingSite = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse, function (request) {
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
    ServingSiteServiceClient.prototype.listServingSites = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/ListServingSites', request, metadata || {}, this.methodInfoListServingSites, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/ListServingSites', request, metadata || {}, this.methodInfoListServingSites);
    };
    ServingSiteServiceClient.prototype.createServingSite = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/CreateServingSite', request, metadata || {}, this.methodInfoCreateServingSite, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/CreateServingSite', request, metadata || {}, this.methodInfoCreateServingSite);
    };
    ServingSiteServiceClient.prototype.getServingSite = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/GetServingSite', request, metadata || {}, this.methodInfoGetServingSite, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/GetServingSite', request, metadata || {}, this.methodInfoGetServingSite);
    };
    ServingSiteServiceClient.prototype.updateServingSite = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/UpdateServingSite', request, metadata || {}, this.methodInfoUpdateServingSite, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/UpdateServingSite', request, metadata || {}, this.methodInfoUpdateServingSite);
    };
    ServingSiteServiceClient.prototype.deleteServingSite = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/DeleteServingSite', request, metadata || {}, this.methodInfoDeleteServingSite, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService/DeleteServingSite', request, metadata || {}, this.methodInfoDeleteServingSite);
    };
    return ServingSiteServiceClient;
}());
export { ServingSiteServiceClient };
//# sourceMappingURL=ServingsiteServiceClientPb.js.map