/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.lab.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_lab_v1_lab_pb from '../../../../../../github.com/metaprov/modeldapi/services/lab/v1/lab_pb';
export declare class LabServiceClient {
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
    methodInfoListLabs: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.ListLabsRequest, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.ListLabsResponse>;
    listLabs(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.ListLabsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.ListLabsResponse>;
    listLabs(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.ListLabsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.ListLabsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.ListLabsResponse>;
    methodInfoCreateLab: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.CreateLabRequest, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.CreateLabResponse>;
    createLab(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.CreateLabRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.CreateLabResponse>;
    createLab(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.CreateLabRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.CreateLabResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.CreateLabResponse>;
    methodInfoGetLab: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.GetLabRequest, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.GetLabResponse>;
    getLab(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.GetLabRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.GetLabResponse>;
    getLab(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.GetLabRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.GetLabResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.GetLabResponse>;
    methodInfoUpdateLab: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.UpdateLabRequest, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.UpdateLabResponse>;
    updateLab(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.UpdateLabRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.UpdateLabResponse>;
    updateLab(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.UpdateLabRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.UpdateLabResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.UpdateLabResponse>;
    methodInfoDeleteLab: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.DeleteLabRequest, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.DeleteLabResponse>;
    deleteLab(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.DeleteLabRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.DeleteLabResponse>;
    deleteLab(request: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.DeleteLabRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_lab_v1_lab_pb.DeleteLabResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_v1_lab_pb.DeleteLabResponse>;
}
