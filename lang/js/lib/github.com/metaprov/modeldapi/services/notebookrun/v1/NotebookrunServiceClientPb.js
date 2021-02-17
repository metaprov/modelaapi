/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.notebookrun.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb from '../../../../../../github.com/metaprov/modeldapi/services/notebookrun/v1/notebookrun_pb';
export class NotebookRunServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListNotebookRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse.deserializeBinary);
        this.methodInfoCreateNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse.deserializeBinary);
        this.methodInfoGetNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse.deserializeBinary);
        this.methodInfoUpdateNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse.deserializeBinary);
        this.methodInfoDeleteNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse.deserializeBinary);
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
    listNotebookRuns(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/ListNotebookRuns', request, metadata || {}, this.methodInfoListNotebookRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/ListNotebookRuns', request, metadata || {}, this.methodInfoListNotebookRuns);
    }
    createNotebookRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/CreateNotebookRun', request, metadata || {}, this.methodInfoCreateNotebookRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/CreateNotebookRun', request, metadata || {}, this.methodInfoCreateNotebookRun);
    }
    getNotebookRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/GetNotebookRun', request, metadata || {}, this.methodInfoGetNotebookRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/GetNotebookRun', request, metadata || {}, this.methodInfoGetNotebookRun);
    }
    updateNotebookRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/UpdateNotebookRun', request, metadata || {}, this.methodInfoUpdateNotebookRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/UpdateNotebookRun', request, metadata || {}, this.methodInfoUpdateNotebookRun);
    }
    deleteNotebookRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/DeleteNotebookRun', request, metadata || {}, this.methodInfoDeleteNotebookRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/DeleteNotebookRun', request, metadata || {}, this.methodInfoDeleteNotebookRun);
    }
}
