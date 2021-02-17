/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.offlinefeaturestored.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb from '../../../../../../github.com/metaprov/modeldapi/services/offlinefeaturestored/v1/offlinefeaturestored_pb';
export declare class OfflineFeatureStoreServiceClient {
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
    methodInfoCreateFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureRequest, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse>;
    createFeature(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse>;
    createFeature(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.CreateFeatureResponse>;
    methodInfoDeleteFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureRequest, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse>;
    deleteFeature(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse>;
    deleteFeature(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.DeleteFeatureResponse>;
    methodInfoUpdateFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureRequest, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse>;
    updateFeature(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse>;
    updateFeature(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.UpdateFeatureResponse>;
    methodInfoListFeatures: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesRequest, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse>;
    listFeatures(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse>;
    listFeatures(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.ListFeaturesResponse>;
    methodInfoGetFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureRequest, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse>;
    getFeature(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse>;
    getFeature(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GetFeatureResponse>;
    methodInfoGenerateTrainingDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetRequest, github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse>;
    generateTrainingDataset(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse>;
    generateTrainingDataset(request: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_offlinefeaturestored_v1_offlinefeaturestored_pb.GenerateTrainingDatasetResponse>;
}
