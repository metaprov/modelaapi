/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.labelingpipeline.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/labelingpipeline/v1/labelingpipeline_pb';
export declare class LabelingPipelineServiceClient {
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
    methodInfoListLabelingPipelines: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineRequest, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse>;
    listLabelingPipelines(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse>;
    listLabelingPipelines(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse>;
    methodInfoCreateLabelingPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineRequest, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse>;
    createLabelingPipeline(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse>;
    createLabelingPipeline(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse>;
    methodInfoGetLabelingPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineRequest, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse>;
    getLabelingPipeline(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse>;
    getLabelingPipeline(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse>;
    methodInfoUpdateLabelingPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineRequest, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse>;
    updateLabelingPipeline(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse>;
    updateLabelingPipeline(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse>;
    methodInfoDeleteLabelingPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineRequest, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse>;
    deleteLabelingPipeline(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse>;
    deleteLabelingPipeline(request: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse>;
}
