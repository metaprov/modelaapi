/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.modelpipeline.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelpipeline/v1/modelpipeline_pb';
export declare class ModelPipelineServiceClient {
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
    methodInfoListModelPipelines: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesRequest, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse>;
    listModelPipelines(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse>;
    listModelPipelines(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse>;
    methodInfoCreateModelPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineRequest, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse>;
    createModelPipeline(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse>;
    createModelPipeline(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse>;
    methodInfoGetModelPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineRequest, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse>;
    getModelPipeline(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse>;
    getModelPipeline(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse>;
    methodInfoUpdateModelPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineRequest, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse>;
    updateModelPipeline(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse>;
    updateModelPipeline(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse>;
    methodInfoDeleteModelPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineRequest, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse>;
    deleteModelPipeline(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse>;
    deleteModelPipeline(request: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse>;
}
