/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.feature.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_feature_v1_feature_pb from '../../../../../../github.com/metaprov/modeldapi/services/feature/v1/feature_pb';
export declare class FeatureServiceClient {
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
    methodInfoListFeatures: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.ListFeaturesRequest, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.ListFeaturesResponse>;
    listFeatures(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.ListFeaturesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.ListFeaturesResponse>;
    listFeatures(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.ListFeaturesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.ListFeaturesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.ListFeaturesResponse>;
    methodInfoCreateFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.CreateFeatureRequest, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.CreateFeatureResponse>;
    createFeature(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.CreateFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.CreateFeatureResponse>;
    createFeature(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.CreateFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.CreateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.CreateFeatureResponse>;
    methodInfoGetFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.GetFeatureRequest, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.GetFeatureResponse>;
    getFeature(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.GetFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.GetFeatureResponse>;
    getFeature(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.GetFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.GetFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.GetFeatureResponse>;
    methodInfoUpdateFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.UpdateFeatureRequest, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.UpdateFeatureResponse>;
    updateFeature(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.UpdateFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.UpdateFeatureResponse>;
    updateFeature(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.UpdateFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.UpdateFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.UpdateFeatureResponse>;
    methodInfoDeleteFeature: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.DeleteFeatureRequest, github_com_metaprov_modeldapi_services_feature_v1_feature_pb.DeleteFeatureResponse>;
    deleteFeature(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.DeleteFeatureRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.DeleteFeatureResponse>;
    deleteFeature(request: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.DeleteFeatureRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_feature_v1_feature_pb.DeleteFeatureResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_feature_v1_feature_pb.DeleteFeatureResponse>;
}
