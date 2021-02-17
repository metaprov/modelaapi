/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.virtualvolume.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb from '../../../../../../github.com/metaprov/modeldapi/services/virtualvolume/v1/virtualvolume_pb';
export declare class VirtualVolumeServiceClient {
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
    methodInfoListVirtualVolumes: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesRequest, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse>;
    listVirtualVolumes(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse>;
    listVirtualVolumes(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse>;
    methodInfoCreateVirtualVolume: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeRequest, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse>;
    createVirtualVolume(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse>;
    createVirtualVolume(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse>;
    methodInfoGetVirtualVolume: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeRequest, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse>;
    getVirtualVolume(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse>;
    getVirtualVolume(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse>;
    methodInfoUpdateVirtualVolume: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeRequest, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse>;
    updateVirtualVolume(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse>;
    updateVirtualVolume(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse>;
    methodInfoDeleteVirtualVolume: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeRequest, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse>;
    deleteVirtualVolume(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse>;
    deleteVirtualVolume(request: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse>;
}
