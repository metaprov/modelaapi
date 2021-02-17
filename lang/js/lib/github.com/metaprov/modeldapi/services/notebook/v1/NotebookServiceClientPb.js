/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.notebook.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb from '../../../../../../github.com/metaprov/modeldapi/services/notebook/v1/notebook_pb';
export class NotebookServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListNotebooks = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.ListNotebooksResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.ListNotebooksResponse.deserializeBinary);
        this.methodInfoCreateNotebook = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.CreateNotebookResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.CreateNotebookResponse.deserializeBinary);
        this.methodInfoGetNotebook = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.GetNotebookResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.GetNotebookResponse.deserializeBinary);
        this.methodInfoUpdateNotebook = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.UpdateNotebookResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.UpdateNotebookResponse.deserializeBinary);
        this.methodInfoDeleteNotebook = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.DeleteNotebookResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebook_v1_notebook_pb.DeleteNotebookResponse.deserializeBinary);
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
    listNotebooks(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/ListNotebooks', request, metadata || {}, this.methodInfoListNotebooks, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/ListNotebooks', request, metadata || {}, this.methodInfoListNotebooks);
    }
    createNotebook(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/CreateNotebook', request, metadata || {}, this.methodInfoCreateNotebook, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/CreateNotebook', request, metadata || {}, this.methodInfoCreateNotebook);
    }
    getNotebook(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/GetNotebook', request, metadata || {}, this.methodInfoGetNotebook, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/GetNotebook', request, metadata || {}, this.methodInfoGetNotebook);
    }
    updateNotebook(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/UpdateNotebook', request, metadata || {}, this.methodInfoUpdateNotebook, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/UpdateNotebook', request, metadata || {}, this.methodInfoUpdateNotebook);
    }
    deleteNotebook(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/DeleteNotebook', request, metadata || {}, this.methodInfoDeleteNotebook, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebook.v1.NotebookService/DeleteNotebook', request, metadata || {}, this.methodInfoDeleteNotebook);
    }
}
