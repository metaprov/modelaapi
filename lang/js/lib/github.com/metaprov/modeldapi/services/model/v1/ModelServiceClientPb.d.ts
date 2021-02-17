/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.model.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_model_v1_model_pb from '../../../../../../github.com/metaprov/modeldapi/services/model/v1/model_pb';
export declare class ModelServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodInfoListModels: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse>;
    listModels(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse>;
    listModels(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse>;
    methodInfoCreateModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse>;
    createModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse>;
    createModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse>;
    methodInfoGetModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse>;
    getModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse>;
    getModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse>;
    methodInfoUpdateModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse>;
    updateModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse>;
    updateModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse>;
    methodInfoDeleteModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse>;
    deleteModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse>;
    deleteModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse>;
    methodInfoDeployModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse>;
    deployModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse>;
    deployModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse>;
    methodInfoPublishModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse>;
    publishModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse>;
    publishModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse>;
    methodInfoCreateModelProfile: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse>;
    createModelProfile(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse>;
    createModelProfile(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse>;
    methodInfoGetModelProfile: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse>;
    getModelProfile(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse>;
    getModelProfile(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse>;
    methodInfoGetModelMisclass: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse>;
    getModelMisclass(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse>;
    getModelMisclass(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse>;
    methodInfoGetModelLogs: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse>;
    getModelLogs(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse>;
    getModelLogs(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse>;
    methodInfoAbortModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse>;
    abortModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse>;
    abortModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse>;
    methodInfoPauseModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse>;
    pauseModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse>;
    pauseModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse>;
    methodInfoResumeModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse>;
    resumeModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse>;
    resumeModel(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse>;
    methodInfoCompareModels: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsRequest, github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse>;
    compareModels(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse>;
    compareModels(request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse>;
}
