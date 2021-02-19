/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.entity.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_entity_v1_entity_pb from '../../../../../../github.com/metaprov/modeldapi/services/entity/v1/entity_pb';
var EntityServiceClient = /** @class */ (function () {
    function EntityServiceClient(hostname, credentials, options) {
        this.methodInfoListEntities = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse.deserializeBinary);
        this.methodInfoCreateEntity = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse.deserializeBinary);
        this.methodInfoGetEntity = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse.deserializeBinary);
        this.methodInfoUpdateEntity = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse.deserializeBinary);
        this.methodInfoDeleteEntity = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse.deserializeBinary);
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
    EntityServiceClient.prototype.listEntities = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/ListEntities', request, metadata || {}, this.methodInfoListEntities, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/ListEntities', request, metadata || {}, this.methodInfoListEntities);
    };
    EntityServiceClient.prototype.createEntity = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/CreateEntity', request, metadata || {}, this.methodInfoCreateEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/CreateEntity', request, metadata || {}, this.methodInfoCreateEntity);
    };
    EntityServiceClient.prototype.getEntity = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/GetEntity', request, metadata || {}, this.methodInfoGetEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/GetEntity', request, metadata || {}, this.methodInfoGetEntity);
    };
    EntityServiceClient.prototype.updateEntity = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/UpdateEntity', request, metadata || {}, this.methodInfoUpdateEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/UpdateEntity', request, metadata || {}, this.methodInfoUpdateEntity);
    };
    EntityServiceClient.prototype.deleteEntity = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/DeleteEntity', request, metadata || {}, this.methodInfoDeleteEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/DeleteEntity', request, metadata || {}, this.methodInfoDeleteEntity);
    };
    return EntityServiceClient;
}());
export { EntityServiceClient };
//# sourceMappingURL=EntityServiceClientPb.js.map