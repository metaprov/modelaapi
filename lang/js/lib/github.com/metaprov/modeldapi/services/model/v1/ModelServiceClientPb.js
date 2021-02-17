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
export class ModelServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListModels = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse.deserializeBinary);
        this.methodInfoCreateModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse.deserializeBinary);
        this.methodInfoGetModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse.deserializeBinary);
        this.methodInfoUpdateModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse.deserializeBinary);
        this.methodInfoDeleteModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse.deserializeBinary);
        this.methodInfoDeployModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse.deserializeBinary);
        this.methodInfoPublishModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse.deserializeBinary);
        this.methodInfoCreateModelProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse.deserializeBinary);
        this.methodInfoGetModelProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse.deserializeBinary);
        this.methodInfoGetModelMisclass = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse.deserializeBinary);
        this.methodInfoGetModelLogs = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse.deserializeBinary);
        this.methodInfoAbortModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse.deserializeBinary);
        this.methodInfoPauseModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse.deserializeBinary);
        this.methodInfoResumeModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse.deserializeBinary);
        this.methodInfoCompareModels = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse, (request) => {
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
    listModels(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/ListModels', request, metadata || {}, this.methodInfoListModels, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/ListModels', request, metadata || {}, this.methodInfoListModels);
    }
    createModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CreateModel', request, metadata || {}, this.methodInfoCreateModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CreateModel', request, metadata || {}, this.methodInfoCreateModel);
    }
    getModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModel', request, metadata || {}, this.methodInfoGetModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModel', request, metadata || {}, this.methodInfoGetModel);
    }
    updateModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/UpdateModel', request, metadata || {}, this.methodInfoUpdateModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/UpdateModel', request, metadata || {}, this.methodInfoUpdateModel);
    }
    deleteModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/DeleteModel', request, metadata || {}, this.methodInfoDeleteModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/DeleteModel', request, metadata || {}, this.methodInfoDeleteModel);
    }
    deployModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/DeployModel', request, metadata || {}, this.methodInfoDeployModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/DeployModel', request, metadata || {}, this.methodInfoDeployModel);
    }
    publishModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/PublishModel', request, metadata || {}, this.methodInfoPublishModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/PublishModel', request, metadata || {}, this.methodInfoPublishModel);
    }
    createModelProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CreateModelProfile', request, metadata || {}, this.methodInfoCreateModelProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CreateModelProfile', request, metadata || {}, this.methodInfoCreateModelProfile);
    }
    getModelProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelProfile', request, metadata || {}, this.methodInfoGetModelProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelProfile', request, metadata || {}, this.methodInfoGetModelProfile);
    }
    getModelMisclass(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelMisclass', request, metadata || {}, this.methodInfoGetModelMisclass, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelMisclass', request, metadata || {}, this.methodInfoGetModelMisclass);
    }
    getModelLogs(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelLogs', request, metadata || {}, this.methodInfoGetModelLogs, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/GetModelLogs', request, metadata || {}, this.methodInfoGetModelLogs);
    }
    abortModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/AbortModel', request, metadata || {}, this.methodInfoAbortModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/AbortModel', request, metadata || {}, this.methodInfoAbortModel);
    }
    pauseModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/PauseModel', request, metadata || {}, this.methodInfoPauseModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/PauseModel', request, metadata || {}, this.methodInfoPauseModel);
    }
    resumeModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/ResumeModel', request, metadata || {}, this.methodInfoResumeModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/ResumeModel', request, metadata || {}, this.methodInfoResumeModel);
    }
    compareModels(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CompareModels', request, metadata || {}, this.methodInfoCompareModels, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.model.v1.ModelService/CompareModels', request, metadata || {}, this.methodInfoCompareModels);
    }
}
