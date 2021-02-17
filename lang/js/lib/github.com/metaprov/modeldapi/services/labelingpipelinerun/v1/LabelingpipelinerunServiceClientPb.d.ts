/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.labelingpipelinerun.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/labelingpipelinerun/v1/labelingpipelinerun_pb';
export declare class LabelingPipelineRunServiceClient {
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
    methodInfoListLabelingPipelineRuns: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.ListLabelingPipelineRunRequest, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.ListLabelingPipelineRunResponse>;
    listLabelingPipelineRuns(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.ListLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.ListLabelingPipelineRunResponse>;
    listLabelingPipelineRuns(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.ListLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.ListLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.ListLabelingPipelineRunResponse>;
    methodInfoCreateLabelingPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.CreateLabelingPipelineRunRequest, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse>;
    createLabelingPipelineRun(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.CreateLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse>;
    createLabelingPipelineRun(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.CreateLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse>;
    methodInfoGetLabelingPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.GetLabelingPipelineRunRequest, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.GetLabelingPipelineRunResponse>;
    getLabelingPipelineRun(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.GetLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.GetLabelingPipelineRunResponse>;
    getLabelingPipelineRun(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.GetLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.GetLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.GetLabelingPipelineRunResponse>;
    methodInfoUpdateLabelingPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.UpdateLabelingPipelineRunRequest, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse>;
    updateLabelingPipelineRun(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.UpdateLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse>;
    updateLabelingPipelineRun(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.UpdateLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse>;
    methodInfoDeleteLabelingPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.DeleteLabelingPipelineRunRequest, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse>;
    deleteLabelingPipelineRun(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.DeleteLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse>;
    deleteLabelingPipelineRun(request: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.DeleteLabelingPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse>;
}
