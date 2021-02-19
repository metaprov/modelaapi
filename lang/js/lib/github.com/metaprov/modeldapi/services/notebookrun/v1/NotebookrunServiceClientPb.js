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
var NotebookRunServiceClient = /** @class */ (function () {
    function NotebookRunServiceClient(hostname, credentials, options) {
        this.methodInfoListNotebookRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.ListNotebookRunsResponse.deserializeBinary);
        this.methodInfoCreateNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.CreateNotebookRunResponse.deserializeBinary);
        this.methodInfoGetNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.GetNotebookRunResponse.deserializeBinary);
        this.methodInfoUpdateNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.UpdateNotebookRunResponse.deserializeBinary);
        this.methodInfoDeleteNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_notebookrun_v1_notebookrun_pb.DeleteNotebookRunResponse, function (request) {
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
    NotebookRunServiceClient.prototype.listNotebookRuns = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/ListNotebookRuns', request, metadata || {}, this.methodInfoListNotebookRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/ListNotebookRuns', request, metadata || {}, this.methodInfoListNotebookRuns);
    };
    NotebookRunServiceClient.prototype.createNotebookRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/CreateNotebookRun', request, metadata || {}, this.methodInfoCreateNotebookRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/CreateNotebookRun', request, metadata || {}, this.methodInfoCreateNotebookRun);
    };
    NotebookRunServiceClient.prototype.getNotebookRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/GetNotebookRun', request, metadata || {}, this.methodInfoGetNotebookRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/GetNotebookRun', request, metadata || {}, this.methodInfoGetNotebookRun);
    };
    NotebookRunServiceClient.prototype.updateNotebookRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/UpdateNotebookRun', request, metadata || {}, this.methodInfoUpdateNotebookRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/UpdateNotebookRun', request, metadata || {}, this.methodInfoUpdateNotebookRun);
    };
    NotebookRunServiceClient.prototype.deleteNotebookRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/DeleteNotebookRun', request, metadata || {}, this.methodInfoDeleteNotebookRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.notebookrun.v1.NotebookRunService/DeleteNotebookRun', request, metadata || {}, this.methodInfoDeleteNotebookRun);
    };
    return NotebookRunServiceClient;
}());
export { NotebookRunServiceClient };
//# sourceMappingURL=NotebookrunServiceClientPb.js.map