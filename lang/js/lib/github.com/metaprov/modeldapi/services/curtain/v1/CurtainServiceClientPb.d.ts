/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.curtain.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb from '../../../../../../github.com/metaprov/modeldapi/services/curtain/v1/curtain_pb';
export declare class CurtainServiceClient {
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
    methodInfoListCurtains: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.ListCurtainsRequest, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.ListCurtainsResponse>;
    listCurtains(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.ListCurtainsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.ListCurtainsResponse>;
    listCurtains(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.ListCurtainsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.ListCurtainsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.ListCurtainsResponse>;
    methodInfoCreateCurtain: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.CreateCurtainRequest, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.CreateCurtainResponse>;
    createCurtain(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.CreateCurtainRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.CreateCurtainResponse>;
    createCurtain(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.CreateCurtainRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.CreateCurtainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.CreateCurtainResponse>;
    methodInfoGetCurtain: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.GetCurtainRequest, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.GetCurtainResponse>;
    getCurtain(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.GetCurtainRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.GetCurtainResponse>;
    getCurtain(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.GetCurtainRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.GetCurtainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.GetCurtainResponse>;
    methodInfoUpdateCurtain: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.UpdateCurtainRequest, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.UpdateCurtainResponse>;
    updateCurtain(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.UpdateCurtainRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.UpdateCurtainResponse>;
    updateCurtain(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.UpdateCurtainRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.UpdateCurtainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.UpdateCurtainResponse>;
    methodInfoDeleteCurtain: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.DeleteCurtainRequest, github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.DeleteCurtainResponse>;
    deleteCurtain(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.DeleteCurtainRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.DeleteCurtainResponse>;
    deleteCurtain(request: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.DeleteCurtainRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.DeleteCurtainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_v1_curtain_pb.DeleteCurtainResponse>;
}
