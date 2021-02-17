/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.modelautobuilder.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelautobuilder/v1/modelautobuilder_pb';
export declare class ModelAutobuilderServiceClient {
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
    methodInfoListModelAutobuilders: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersRequest, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse>;
    listModelAutobuilders(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse>;
    listModelAutobuilders(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.ListModelAutobuildersResponse>;
    methodInfoCreateModelAutobuilder: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderRequest, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse>;
    createModelAutobuilder(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse>;
    createModelAutobuilder(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.CreateModelAutobuilderResponse>;
    methodInfoGetModelAutobuilder: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderRequest, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse>;
    getModelAutobuilder(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse>;
    getModelAutobuilder(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.GetModelAutobuilderResponse>;
    methodInfoUpdateModelAutobuilder: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderRequest, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse>;
    updateModelAutobuilder(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse>;
    updateModelAutobuilder(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.UpdateModelAutobuilderResponse>;
    methodInfoDeleteModelAutobuilder: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderRequest, github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse>;
    deleteModelAutobuilder(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse>;
    deleteModelAutobuilder(request: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modelautobuilder_v1_modelautobuilder_pb.DeleteModelAutobuilderResponse>;
}
