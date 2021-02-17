/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.modelpipelinerun.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelpipelinerun/v1/modelpipelinerun_pb';
export declare class ModelPipelineRunServiceClient {
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
    methodInfoListModelPipelineRuns: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsRequest, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse>;
    listModelPipelineRuns(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse>;
    listModelPipelineRuns(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.ListModelPipelineRunsResponse>;
    methodInfoCreateModelPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunRequest, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse>;
    createModelPipelineRun(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse>;
    createModelPipelineRun(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.CreateModelPipelineRunResponse>;
    methodInfoGetModelPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunRequest, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse>;
    getModelPipelineRun(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse>;
    getModelPipelineRun(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.GetModelPipelineRunResponse>;
    methodInfoUpdateModelPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunRequest, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse>;
    updateModelPipelineRun(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse>;
    updateModelPipelineRun(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.UpdateModelPipelineRunResponse>;
    methodInfoDeleteModelPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunRequest, github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse>;
    deleteModelPipelineRun(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse>;
    deleteModelPipelineRun(request: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipelinerun_v1_modelpipelinerun_pb.DeleteModelPipelineRunResponse>;
}
