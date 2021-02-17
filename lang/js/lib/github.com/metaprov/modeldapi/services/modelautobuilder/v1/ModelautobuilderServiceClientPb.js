/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.modelautobuilder.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelautobuilder/v1/modelautobuilder_pb';
export class ModelAutobuilderServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListModelAutobuilders = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse.deserializeBinary);
        this.methodInfoCreateModelAutobuilder = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse.deserializeBinary);
        this.methodInfoGetModelAutobuilder = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse.deserializeBinary);
        this.methodInfoUpdateModelAutobuilder = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse.deserializeBinary);
        this.methodInfoDeleteModelAutobuilder = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse.deserializeBinary);
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
    listModelAutobuilders(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/ListModelAutobuilders', request, metadata || {}, this.methodInfoListModelAutobuilders, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/ListModelAutobuilders', request, metadata || {}, this.methodInfoListModelAutobuilders);
    }
    createModelAutobuilder(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/CreateModelAutobuilder', request, metadata || {}, this.methodInfoCreateModelAutobuilder, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/CreateModelAutobuilder', request, metadata || {}, this.methodInfoCreateModelAutobuilder);
    }
    getModelAutobuilder(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/GetModelAutobuilder', request, metadata || {}, this.methodInfoGetModelAutobuilder, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/GetModelAutobuilder', request, metadata || {}, this.methodInfoGetModelAutobuilder);
    }
    updateModelAutobuilder(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/UpdateModelAutobuilder', request, metadata || {}, this.methodInfoUpdateModelAutobuilder, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/UpdateModelAutobuilder', request, metadata || {}, this.methodInfoUpdateModelAutobuilder);
    }
    deleteModelAutobuilder(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/DeleteModelAutobuilder', request, metadata || {}, this.methodInfoDeleteModelAutobuilder, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.modelautobuilder.v1.ModelAutobuilderService/DeleteModelAutobuilder', request, metadata || {}, this.methodInfoDeleteModelAutobuilder);
    }
}
