/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.datapipelinerun.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/datapipelinerun/v1/datapipelinerun_pb';
export declare class DataPipelineRunServiceClient {
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
    methodInfoListDataPipelineRuns: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunRequest, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse>;
    listDataPipelineRuns(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse>;
    listDataPipelineRuns(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse>;
    methodInfoCreateDataPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunRequest, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse>;
    createDataPipelineRun(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse>;
    createDataPipelineRun(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse>;
    methodInfoGetDataPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunRequest, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse>;
    getDataPipelineRun(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse>;
    getDataPipelineRun(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse>;
    methodInfoUpdateDataPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunRequest, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse>;
    updateDataPipelineRun(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse>;
    updateDataPipelineRun(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse>;
    methodInfoDeleteDataPipelineRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunRequest, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse>;
    deleteDataPipelineRun(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse>;
    deleteDataPipelineRun(request: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse>;
}
