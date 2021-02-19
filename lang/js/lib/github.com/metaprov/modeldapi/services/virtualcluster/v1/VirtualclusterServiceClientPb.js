/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.virtualcluster.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb from '../../../../../../github.com/metaprov/modeldapi/services/virtualcluster/v1/virtualcluster_pb';
var VirtualClusterServiceClient = /** @class */ (function () {
    function VirtualClusterServiceClient(hostname, credentials, options) {
        this.methodInfoListVirtualClusters = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.ListVirtualClustersResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.ListVirtualClustersResponse.deserializeBinary);
        this.methodInfoCreateVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.CreateVirtualClusterResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.CreateVirtualClusterResponse.deserializeBinary);
        this.methodInfoGetVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.GetVirtualClusterResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.GetVirtualClusterResponse.deserializeBinary);
        this.methodInfoUpdateVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.UpdateVirtualClusterResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.UpdateVirtualClusterResponse.deserializeBinary);
        this.methodInfoDeleteVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.DeleteVirtualClusterResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualcluster_v1_virtualcluster_pb.DeleteVirtualClusterResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    VirtualClusterServiceClient.prototype.listVirtualClusters = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/ListVirtualClusters', request, metadata || {}, this.methodInfoListVirtualClusters, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/ListVirtualClusters', request, metadata || {}, this.methodInfoListVirtualClusters);
    };
    VirtualClusterServiceClient.prototype.createVirtualCluster = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/CreateVirtualCluster', request, metadata || {}, this.methodInfoCreateVirtualCluster, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/CreateVirtualCluster', request, metadata || {}, this.methodInfoCreateVirtualCluster);
    };
    VirtualClusterServiceClient.prototype.getVirtualCluster = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/GetVirtualCluster', request, metadata || {}, this.methodInfoGetVirtualCluster, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/GetVirtualCluster', request, metadata || {}, this.methodInfoGetVirtualCluster);
    };
    VirtualClusterServiceClient.prototype.updateVirtualCluster = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/UpdateVirtualCluster', request, metadata || {}, this.methodInfoUpdateVirtualCluster, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/UpdateVirtualCluster', request, metadata || {}, this.methodInfoUpdateVirtualCluster);
    };
    VirtualClusterServiceClient.prototype.deleteVirtualCluster = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/DeleteVirtualCluster', request, metadata || {}, this.methodInfoDeleteVirtualCluster, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService/DeleteVirtualCluster', request, metadata || {}, this.methodInfoDeleteVirtualCluster);
    };
    return VirtualClusterServiceClient;
}());
export { VirtualClusterServiceClient };
//# sourceMappingURL=VirtualclusterServiceClientPb.js.map