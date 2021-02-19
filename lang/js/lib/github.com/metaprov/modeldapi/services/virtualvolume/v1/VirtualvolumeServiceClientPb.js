/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.virtualvolume.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb from '../../../../../../github.com/metaprov/modeldapi/services/virtualvolume/v1/virtualvolume_pb';
var VirtualVolumeServiceClient = /** @class */ (function () {
    function VirtualVolumeServiceClient(hostname, credentials, options) {
        this.methodInfoListVirtualVolumes = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse.deserializeBinary);
        this.methodInfoCreateVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse.deserializeBinary);
        this.methodInfoGetVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse.deserializeBinary);
        this.methodInfoUpdateVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse.deserializeBinary);
        this.methodInfoDeleteVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse.deserializeBinary);
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
    VirtualVolumeServiceClient.prototype.listVirtualVolumes = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/ListVirtualVolumes', request, metadata || {}, this.methodInfoListVirtualVolumes, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/ListVirtualVolumes', request, metadata || {}, this.methodInfoListVirtualVolumes);
    };
    VirtualVolumeServiceClient.prototype.createVirtualVolume = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/CreateVirtualVolume', request, metadata || {}, this.methodInfoCreateVirtualVolume, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/CreateVirtualVolume', request, metadata || {}, this.methodInfoCreateVirtualVolume);
    };
    VirtualVolumeServiceClient.prototype.getVirtualVolume = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/GetVirtualVolume', request, metadata || {}, this.methodInfoGetVirtualVolume, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/GetVirtualVolume', request, metadata || {}, this.methodInfoGetVirtualVolume);
    };
    VirtualVolumeServiceClient.prototype.updateVirtualVolume = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/UpdateVirtualVolume', request, metadata || {}, this.methodInfoUpdateVirtualVolume, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/UpdateVirtualVolume', request, metadata || {}, this.methodInfoUpdateVirtualVolume);
    };
    VirtualVolumeServiceClient.prototype.deleteVirtualVolume = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/DeleteVirtualVolume', request, metadata || {}, this.methodInfoDeleteVirtualVolume, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService/DeleteVirtualVolume', request, metadata || {}, this.methodInfoDeleteVirtualVolume);
    };
    return VirtualVolumeServiceClient;
}());
export { VirtualVolumeServiceClient };
//# sourceMappingURL=VirtualvolumeServiceClientPb.js.map