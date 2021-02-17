/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.featurepipeline.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/featurepipeline/v1/featurepipeline_pb';
export declare class FeaturePipelineServiceClient {
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
    methodInfoListFeaturePipelines: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineRequest, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse>;
    listFeaturePipelines(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse>;
    listFeaturePipelines(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.ListFeaturePipelineResponse>;
    methodInfoCreateFeaturePipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineRequest, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse>;
    createFeaturePipeline(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse>;
    createFeaturePipeline(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.CreateFeaturePipelineResponse>;
    methodInfoGetFeaturePipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineRequest, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse>;
    getFeaturePipeline(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse>;
    getFeaturePipeline(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.GetFeaturePipelineResponse>;
    methodInfoUpdateFeaturePipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineRequest, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse>;
    updateFeaturePipeline(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse>;
    updateFeaturePipeline(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.UpdateFeaturePipelineResponse>;
    methodInfoDeleteFeaturePipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineRequest, github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse>;
    deleteFeaturePipeline(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse>;
    deleteFeaturePipeline(request: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipeline_v1_featurepipeline_pb.DeleteFeaturePipelineResponse>;
}
