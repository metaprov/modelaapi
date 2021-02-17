/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.dataset.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb from '../../../../../../github.com/metaprov/modeldapi/services/dataset/v1/dataset_pb';
export declare class DatasetServiceClient {
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
    methodInfoListDatasets: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse>;
    listDatasets(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse>;
    listDatasets(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ListDatasetsResponse>;
    methodInfoGetDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse>;
    getDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse>;
    getDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetResponse>;
    methodInfoCreateDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse>;
    createDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse>;
    createDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetResponse>;
    methodInfoUpdateDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse>;
    updateDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse>;
    updateDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UpdateDatasetResponse>;
    methodInfoDeleteDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse>;
    deleteDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse>;
    deleteDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.DeleteDatasetResponse>;
    methodInfoCompareDatasets: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse>;
    compareDatasets(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse>;
    compareDatasets(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CompareDatasetsResponse>;
    methodInfoGetDatasetProfile: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse>;
    getDatasetProfile(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse>;
    getDatasetProfile(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GetDatasetProfileResponse>;
    methodInfoCreateDatasetProfile: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse>;
    createDatasetProfile(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse>;
    createDatasetProfile(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateDatasetProfileResponse>;
    methodInfoCreateColumnProfile: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse>;
    createColumnProfile(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse>;
    createColumnProfile(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.CreateColumnProfileResponse>;
    methodInfoGenerateDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse>;
    generateDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse>;
    generateDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.GenerateDatasetResponse>;
    methodInfoValidateDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse>;
    validateDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse>;
    validateDataset(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.ValidateDatasetResponse>;
    methodInfoUploadChunk: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkRequest, github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse>;
    uploadChunk(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse>;
    uploadChunk(request: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataset_v1_dataset_pb.UploadChunkResponse>;
}
