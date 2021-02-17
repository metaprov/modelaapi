/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.postmortem.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb from '../../../../../../github.com/metaprov/modeldapi/services/postmortem/v1/postmortem_pb';
export declare class PostMortemServiceClient {
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
    methodInfoListPostMortems: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsRequest, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse>;
    listPostMortems(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse>;
    listPostMortems(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse>;
    methodInfoCreatePostMortem: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemRequest, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse>;
    createPostMortem(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse>;
    createPostMortem(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse>;
    methodInfoGetPostMortem: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemRequest, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse>;
    getPostMortem(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse>;
    getPostMortem(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse>;
    methodInfoUpdatePostMortem: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemRequest, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse>;
    updatePostMortem(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse>;
    updatePostMortem(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse>;
    methodInfoDeletePostMortem: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemRequest, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse>;
    deletePostMortem(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse>;
    deletePostMortem(request: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse>;
}
