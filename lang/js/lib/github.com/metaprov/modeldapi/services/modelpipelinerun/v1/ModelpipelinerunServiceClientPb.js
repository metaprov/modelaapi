/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.modelpipelinerun.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelpipelinerun/v1/modelpipelinerun_pb';
var ModelPipelineRunServiceClient = /** @class */ (function () {
    function ModelPipelineRunServiceClient(hostname, credentials, options) {
        this.methodInfoListModelPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse.deserializeBinary);
        this.methodInfoCreateModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse.deserializeBinary);
        this.methodInfoGetModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse.deserializeBinary);
        this.methodInfoUpdateModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse.deserializeBinary);
        this.methodInfoDeleteModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse.deserializeBinary);
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
    ModelPipelineRunServiceClient.prototype.listModelPipelineRuns = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns', request, metadata || {}, this.methodInfoListModelPipelineRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns', request, metadata || {}, this.methodInfoListModelPipelineRuns);
    };
    ModelPipelineRunServiceClient.prototype.createModelPipelineRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun', request, metadata || {}, this.methodInfoCreateModelPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun', request, metadata || {}, this.methodInfoCreateModelPipelineRun);
    };
    ModelPipelineRunServiceClient.prototype.getModelPipelineRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun', request, metadata || {}, this.methodInfoGetModelPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun', request, metadata || {}, this.methodInfoGetModelPipelineRun);
    };
    ModelPipelineRunServiceClient.prototype.updateModelPipelineRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun', request, metadata || {}, this.methodInfoUpdateModelPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun', request, metadata || {}, this.methodInfoUpdateModelPipelineRun);
    };
    ModelPipelineRunServiceClient.prototype.deleteModelPipelineRun = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun', request, metadata || {}, this.methodInfoDeleteModelPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun', request, metadata || {}, this.methodInfoDeleteModelPipelineRun);
    };
    return ModelPipelineRunServiceClient;
}());
export { ModelPipelineRunServiceClient };
//# sourceMappingURL=ModelpipelinerunServiceClientPb.js.map