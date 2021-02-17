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
export class EntityServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListEntities = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse.deserializeBinary);
        this.methodInfoCreateEntity = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse.deserializeBinary);
        this.methodInfoGetEntity = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse.deserializeBinary);
        this.methodInfoUpdateEntity = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse.deserializeBinary);
        this.methodInfoDeleteEntity = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse, (request) => {
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
    listEntities(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/ListEntities', request, metadata || {}, this.methodInfoListEntities, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/ListEntities', request, metadata || {}, this.methodInfoListEntities);
    }
    createEntity(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/CreateEntity', request, metadata || {}, this.methodInfoCreateEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/CreateEntity', request, metadata || {}, this.methodInfoCreateEntity);
    }
    getEntity(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/GetEntity', request, metadata || {}, this.methodInfoGetEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/GetEntity', request, metadata || {}, this.methodInfoGetEntity);
    }
    updateEntity(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/UpdateEntity', request, metadata || {}, this.methodInfoUpdateEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/UpdateEntity', request, metadata || {}, this.methodInfoUpdateEntity);
    }
    deleteEntity(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/DeleteEntity', request, metadata || {}, this.methodInfoDeleteEntity, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/DeleteEntity', request, metadata || {}, this.methodInfoDeleteEntity);
    }
}
