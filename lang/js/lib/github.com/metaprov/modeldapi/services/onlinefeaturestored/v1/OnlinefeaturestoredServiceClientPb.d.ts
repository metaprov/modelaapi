/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.onlinefeaturestored.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb from '../../../../../../github.com/metaprov/modeldapi/services/onlinefeaturestored/v1/onlinefeaturestored_pb';
export declare class OnlineFeatureStoreServiceClient {
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
    methodInfoCreateFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureRequest, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse>;
    createFeature(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse>;
    createFeature(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.CreateFeatureResponse>;
    methodInfoDeleteFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureRequest, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse>;
    deleteFeature(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse>;
    deleteFeature(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.DeleteFeatureResponse>;
    methodInfoListFeatures: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesRequest, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse>;
    listFeatures(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse>;
    listFeatures(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.ListFeaturesResponse>;
    methodInfoGetFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureRequest, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse>;
    getFeature(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse>;
    getFeature(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.GetFeatureResponse>;
    methodInfoUpdateFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureRequest, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse>;
    updateFeature(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse>;
    updateFeature(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.UpdateFeatureResponse>;
    methodInfoEnrich: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichRequest, github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse>;
    enrich(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse>;
    enrich(request: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_onlinefeaturestored_v1_onlinefeaturestored_pb.EnrichResponse>;
}
