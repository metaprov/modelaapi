/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.runbook.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb from '../../../../../../github.com/metaprov/modeldapi/services/runbook/v1/runbook_pb';
export class RunBookServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListRunBooks = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.ListRunBooksResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.ListRunBooksResponse.deserializeBinary);
        this.methodInfoCreateRunBook = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.CreateRunBookResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.CreateRunBookResponse.deserializeBinary);
        this.methodInfoGetRunBook = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.GetRunBookResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.GetRunBookResponse.deserializeBinary);
        this.methodInfoUpdateRunBook = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.UpdateRunBookResponse.deserializeBinary);
        this.methodInfoDeleteRunBook = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_runbook_v1_runbook_pb.DeleteRunBookResponse.deserializeBinary);
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
    listRunBooks(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/ListRunBooks', request, metadata || {}, this.methodInfoListRunBooks, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/ListRunBooks', request, metadata || {}, this.methodInfoListRunBooks);
    }
    createRunBook(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/CreateRunBook', request, metadata || {}, this.methodInfoCreateRunBook, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/CreateRunBook', request, metadata || {}, this.methodInfoCreateRunBook);
    }
    getRunBook(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/GetRunBook', request, metadata || {}, this.methodInfoGetRunBook, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/GetRunBook', request, metadata || {}, this.methodInfoGetRunBook);
    }
    updateRunBook(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/UpdateRunBook', request, metadata || {}, this.methodInfoUpdateRunBook, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/UpdateRunBook', request, metadata || {}, this.methodInfoUpdateRunBook);
    }
    deleteRunBook(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/DeleteRunBook', request, metadata || {}, this.methodInfoDeleteRunBook, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.runbook.v1.RunBookService/DeleteRunBook', request, metadata || {}, this.methodInfoDeleteRunBook);
    }
}
