/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.featureset.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb from '../../../../../../github.com/metaprov/modeldapi/services/featureset/v1/featureset_pb';
export declare class FeaturesetServiceClient {
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
    methodInfoListFeaturesets: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetRequest, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse>;
    listFeaturesets(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse>;
    listFeaturesets(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.ListFeaturesetResponse>;
    methodInfoCreateFeatureset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetRequest, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse>;
    createFeatureset(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse>;
    createFeatureset(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.CreateFeaturesetResponse>;
    methodInfoGetFeatureset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetRequest, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse>;
    getFeatureset(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse>;
    getFeatureset(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.GetFeaturesetResponse>;
    methodInfoUpdateFeatureset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetRequest, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse>;
    updateFeatureset(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse>;
    updateFeatureset(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.UpdateFeaturesetResponse>;
    methodInfoDeleteFeatureset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetRequest, github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse>;
    deleteFeatureset(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse>;
    deleteFeatureset(request: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_featureset_v1_featureset_pb.DeleteFeaturesetResponse>;
}
