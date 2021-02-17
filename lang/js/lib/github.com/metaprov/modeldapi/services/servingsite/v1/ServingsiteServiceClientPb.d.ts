/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.servingsite.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb from '../../../../../../github.com/metaprov/modeldapi/services/servingsite/v1/servingsite_pb';
export declare class ServingSiteServiceClient {
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
    methodInfoListServingSites: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesRequest, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse>;
    listServingSites(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse>;
    listServingSites(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse>;
    methodInfoCreateServingSite: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteRequest, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse>;
    createServingSite(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse>;
    createServingSite(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse>;
    methodInfoGetServingSite: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteRequest, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse>;
    getServingSite(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse>;
    getServingSite(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse>;
    methodInfoUpdateServingSite: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteRequest, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse>;
    updateServingSite(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse>;
    updateServingSite(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse>;
    methodInfoDeleteServingSite: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteRequest, github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse>;
    deleteServingSite(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse>;
    deleteServingSite(request: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse>;
}
