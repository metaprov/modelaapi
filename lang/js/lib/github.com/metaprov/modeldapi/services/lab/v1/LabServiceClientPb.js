/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.lab.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_lab_v1_lab_pb from '../../../../../../github.com/metaprov/modeldapi/services/lab/v1/lab_pb';
var LabServiceClient = /** @class */ (function () {
    function LabServiceClient(hostname, credentials, options) {
        this.methodInfoListLabs = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_lab_v1_lab_pb.ListLabsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.ListLabsResponse.deserializeBinary);
        this.methodInfoCreateLab = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_lab_v1_lab_pb.CreateLabResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.CreateLabResponse.deserializeBinary);
        this.methodInfoGetLab = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_lab_v1_lab_pb.GetLabResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.GetLabResponse.deserializeBinary);
        this.methodInfoUpdateLab = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_lab_v1_lab_pb.UpdateLabResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.UpdateLabResponse.deserializeBinary);
        this.methodInfoDeleteLab = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_lab_v1_lab_pb.DeleteLabResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_lab_v1_lab_pb.DeleteLabResponse.deserializeBinary);
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
    LabServiceClient.prototype.listLabs = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.lab.v1.LabService/ListLabs', request, metadata || {}, this.methodInfoListLabs, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.lab.v1.LabService/ListLabs', request, metadata || {}, this.methodInfoListLabs);
    };
    LabServiceClient.prototype.createLab = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.lab.v1.LabService/CreateLab', request, metadata || {}, this.methodInfoCreateLab, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.lab.v1.LabService/CreateLab', request, metadata || {}, this.methodInfoCreateLab);
    };
    LabServiceClient.prototype.getLab = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.lab.v1.LabService/GetLab', request, metadata || {}, this.methodInfoGetLab, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.lab.v1.LabService/GetLab', request, metadata || {}, this.methodInfoGetLab);
    };
    LabServiceClient.prototype.updateLab = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.lab.v1.LabService/UpdateLab', request, metadata || {}, this.methodInfoUpdateLab, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.lab.v1.LabService/UpdateLab', request, metadata || {}, this.methodInfoUpdateLab);
    };
    LabServiceClient.prototype.deleteLab = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.lab.v1.LabService/DeleteLab', request, metadata || {}, this.methodInfoDeleteLab, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.lab.v1.LabService/DeleteLab', request, metadata || {}, this.methodInfoDeleteLab);
    };
    return LabServiceClient;
}());
export { LabServiceClient };
//# sourceMappingURL=LabServiceClientPb.js.map