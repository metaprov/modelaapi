/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.featurepipelinerun.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/featurepipelinerun/v1/featurepipelinerun_pb';
export declare class FeaturePipelineRunServiceClient {
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
    methodInfoListFeaturePipelineRuns: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunRequest, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse>;
    listFeaturePipelineRuns(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse>;
    listFeaturePipelineRuns(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.ListFeaturePipelineRunResponse>;
    methodInfoCreateFeaturePipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunRequest, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse>;
    createFeaturePipelineRun(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse>;
    createFeaturePipelineRun(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.CreateFeaturePipelineRunResponse>;
    methodInfoGetFeaturePipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunRequest, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse>;
    getFeaturePipelineRun(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse>;
    getFeaturePipelineRun(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.GetFeaturePipelineRunResponse>;
    methodInfoUpdateFeaturePipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunRequest, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse>;
    updateFeaturePipelineRun(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse>;
    updateFeaturePipelineRun(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.UpdateFeaturePipelineRunResponse>;
    methodInfoDeleteFeaturePipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunRequest, github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse>;
    deleteFeaturePipelineRun(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse>;
    deleteFeaturePipelineRun(request: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featurepipelinerun_v1_featurepipelinerun_pb.DeleteFeaturePipelineRunResponse>;
}
