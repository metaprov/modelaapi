/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.virtualcluster.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb from '../../../../../../github.com/metaprov/modeldapi/services/virtualcluster/v1/virtualcluster_pb';
export declare class VirtualClusterServiceClient {
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
    methodInfoListVirtualClusters: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.ListVirtualClustersRequest, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.ListVirtualClustersResponse>;
    listVirtualClusters(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.ListVirtualClustersRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.ListVirtualClustersResponse>;
    listVirtualClusters(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.ListVirtualClustersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.ListVirtualClustersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.ListVirtualClustersResponse>;
    methodInfoCreateVirtualCluster: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.CreateVirtualClusterRequest, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.CreateVirtualClusterResponse>;
    createVirtualCluster(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.CreateVirtualClusterRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.CreateVirtualClusterResponse>;
    createVirtualCluster(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.CreateVirtualClusterRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.CreateVirtualClusterResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.CreateVirtualClusterResponse>;
    methodInfoGetVirtualCluster: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.GetVirtualClusterRequest, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.GetVirtualClusterResponse>;
    getVirtualCluster(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.GetVirtualClusterRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.GetVirtualClusterResponse>;
    getVirtualCluster(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.GetVirtualClusterRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.GetVirtualClusterResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.GetVirtualClusterResponse>;
    methodInfoUpdateVirtualCluster: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.UpdateVirtualClusterRequest, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.UpdateVirtualClusterResponse>;
    updateVirtualCluster(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.UpdateVirtualClusterRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.UpdateVirtualClusterResponse>;
    updateVirtualCluster(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.UpdateVirtualClusterRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.UpdateVirtualClusterResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.UpdateVirtualClusterResponse>;
    methodInfoDeleteVirtualCluster: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.DeleteVirtualClusterRequest, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.DeleteVirtualClusterResponse>;
    deleteVirtualCluster(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.DeleteVirtualClusterRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.DeleteVirtualClusterResponse>;
    deleteVirtualCluster(request: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.DeleteVirtualClusterRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.DeleteVirtualClusterResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.DeleteVirtualClusterResponse>;
}
