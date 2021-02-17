/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.curtain.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb from '../../../../../../github.com/metaprov/modeldapi/services/curtain/v1/curtain_pb';
export class CurtainServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListCurtains = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.ListCurtainsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.ListCurtainsResponse.deserializeBinary);
        this.methodInfoCreateCurtain = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.CreateCurtainResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.CreateCurtainResponse.deserializeBinary);
        this.methodInfoGetCurtain = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.GetCurtainResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.GetCurtainResponse.deserializeBinary);
        this.methodInfoUpdateCurtain = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.UpdateCurtainResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.UpdateCurtainResponse.deserializeBinary);
        this.methodInfoDeleteCurtain = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.DeleteCurtainResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.DeleteCurtainResponse.deserializeBinary);
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
    listCurtains(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/ListCurtains', request, metadata || {}, this.methodInfoListCurtains, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/ListCurtains', request, metadata || {}, this.methodInfoListCurtains);
    }
    createCurtain(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/CreateCurtain', request, metadata || {}, this.methodInfoCreateCurtain, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/CreateCurtain', request, metadata || {}, this.methodInfoCreateCurtain);
    }
    getCurtain(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/GetCurtain', request, metadata || {}, this.methodInfoGetCurtain, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/GetCurtain', request, metadata || {}, this.methodInfoGetCurtain);
    }
    updateCurtain(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/UpdateCurtain', request, metadata || {}, this.methodInfoUpdateCurtain, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/UpdateCurtain', request, metadata || {}, this.methodInfoUpdateCurtain);
    }
    deleteCurtain(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/DeleteCurtain', request, metadata || {}, this.methodInfoDeleteCurtain, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.curtain.v1.CurtainService/DeleteCurtain', request, metadata || {}, this.methodInfoDeleteCurtain);
    }
}
