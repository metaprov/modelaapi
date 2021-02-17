/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.datapipeline.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/datapipeline/v1/datapipeline_pb';
export declare class DataPipelineServiceClient {
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
    methodInfoListDataPipelines: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesRequest, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse>;
    listDataPipelines(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse>;
    listDataPipelines(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse>;
    methodInfoCreateDataPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineRequest, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse>;
    createDataPipeline(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse>;
    createDataPipeline(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse>;
    methodInfoGetDataPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineRequest, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse>;
    getDataPipeline(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse>;
    getDataPipeline(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse>;
    methodInfoUpdateDataPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineRequest, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse>;
    updateDataPipeline(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse>;
    updateDataPipeline(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse>;
    methodInfoDeleteDataPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineRequest, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse>;
    deleteDataPipeline(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse>;
    deleteDataPipeline(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse>;
    methodInfoRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineRequest, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse>;
    run(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse>;
    run(request: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse>;
}
