/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.model.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_model_v1_model_pb from '../../../../../../github.com/metaprov/modeldapi/services/model/v1/model_pb';
var ModelServiceClient = /** @class */ (function () {
    function ModelServiceClient(hostname, credentials, options) {
        this.methodInfoListModels = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse.deserializeBinary);
        this.methodInfoCreateModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse.deserializeBinary);
        this.methodInfoGetModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse.deserializeBinary);
        this.methodInfoUpdateModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse.deserializeBinary);
        this.methodInfoDeleteModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse.deserializeBinary);
        this.methodInfoDeployModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse.deserializeBinary);
        this.methodInfoPublishModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse.deserializeBinary);
        this.methodInfoCreateModelProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse.deserializeBinary);
        this.methodInfoGetModelProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse.deserializeBinary);
        this.methodInfoGetModelMisclass = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse.deserializeBinary);
        this.methodInfoGetModelLogs = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse.deserializeBinary);
        this.methodInfoAbortModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse.deserializeBinary);
        this.methodInfoPauseModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse.deserializeBinary);
        this.methodInfoResumeModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse.deserializeBinary);
        this.methodInfoCompareModels = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse.deserializeBinary);
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
    ModelServiceClient.prototype.listModels = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/ListModels', request, metadata || {}, this.methodInfoListModels, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/ListModels', request, metadata || {}, this.methodInfoListModels);
    };
    ModelServiceClient.prototype.createModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CreateModel', request, metadata || {}, this.methodInfoCreateModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CreateModel', request, metadata || {}, this.methodInfoCreateModel);
    };
    ModelServiceClient.prototype.getModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModel', request, metadata || {}, this.methodInfoGetModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModel', request, metadata || {}, this.methodInfoGetModel);
    };
    ModelServiceClient.prototype.updateModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/UpdateModel', request, metadata || {}, this.methodInfoUpdateModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/UpdateModel', request, metadata || {}, this.methodInfoUpdateModel);
    };
    ModelServiceClient.prototype.deleteModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/DeleteModel', request, metadata || {}, this.methodInfoDeleteModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/DeleteModel', request, metadata || {}, this.methodInfoDeleteModel);
    };
    ModelServiceClient.prototype.deployModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/DeployModel', request, metadata || {}, this.methodInfoDeployModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/DeployModel', request, metadata || {}, this.methodInfoDeployModel);
    };
    ModelServiceClient.prototype.publishModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/PublishModel', request, metadata || {}, this.methodInfoPublishModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/PublishModel', request, metadata || {}, this.methodInfoPublishModel);
    };
    ModelServiceClient.prototype.createModelProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CreateModelProfile', request, metadata || {}, this.methodInfoCreateModelProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CreateModelProfile', request, metadata || {}, this.methodInfoCreateModelProfile);
    };
    ModelServiceClient.prototype.getModelProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelProfile', request, metadata || {}, this.methodInfoGetModelProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelProfile', request, metadata || {}, this.methodInfoGetModelProfile);
    };
    ModelServiceClient.prototype.getModelMisclass = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelMisclass', request, metadata || {}, this.methodInfoGetModelMisclass, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelMisclass', request, metadata || {}, this.methodInfoGetModelMisclass);
    };
    ModelServiceClient.prototype.getModelLogs = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelLogs', request, metadata || {}, this.methodInfoGetModelLogs, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelLogs', request, metadata || {}, this.methodInfoGetModelLogs);
    };
    ModelServiceClient.prototype.abortModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/AbortModel', request, metadata || {}, this.methodInfoAbortModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/AbortModel', request, metadata || {}, this.methodInfoAbortModel);
    };
    ModelServiceClient.prototype.pauseModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/PauseModel', request, metadata || {}, this.methodInfoPauseModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/PauseModel', request, metadata || {}, this.methodInfoPauseModel);
    };
    ModelServiceClient.prototype.resumeModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/ResumeModel', request, metadata || {}, this.methodInfoResumeModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/ResumeModel', request, metadata || {}, this.methodInfoResumeModel);
    };
    ModelServiceClient.prototype.compareModels = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CompareModels', request, metadata || {}, this.methodInfoCompareModels, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CompareModels', request, metadata || {}, this.methodInfoCompareModels);
    };
    return ModelServiceClient;
}());
export { ModelServiceClient };
//# sourceMappingURL=ModelServiceClientPb.js.map