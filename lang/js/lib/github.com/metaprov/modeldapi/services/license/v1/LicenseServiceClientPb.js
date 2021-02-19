/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.license.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_license_v1_license_pb from '../../../../../../github.com/metaprov/modeldapi/services/license/v1/license_pb';
var LicenseServiceClient = /** @class */ (function () {
    function LicenseServiceClient(hostname, credentials, options) {
        this.methodInfoListLicenses = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesResponse.deserializeBinary);
        this.methodInfoCreateLicense = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse.deserializeBinary);
        this.methodInfoCreateLicenseFromKey = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse.deserializeBinary);
        this.methodInfoGetLicense = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseResponse.deserializeBinary);
        this.methodInfoUpdateLicense = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseResponse.deserializeBinary);
        this.methodInfoDeleteLicense = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseResponse.deserializeBinary);
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
    LicenseServiceClient.prototype.listLicenses = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/ListLicenses', request, metadata || {}, this.methodInfoListLicenses, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/ListLicenses', request, metadata || {}, this.methodInfoListLicenses);
    };
    LicenseServiceClient.prototype.createLicense = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/CreateLicense', request, metadata || {}, this.methodInfoCreateLicense, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/CreateLicense', request, metadata || {}, this.methodInfoCreateLicense);
    };
    LicenseServiceClient.prototype.createLicenseFromKey = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/CreateLicenseFromKey', request, metadata || {}, this.methodInfoCreateLicenseFromKey, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/CreateLicenseFromKey', request, metadata || {}, this.methodInfoCreateLicenseFromKey);
    };
    LicenseServiceClient.prototype.getLicense = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/GetLicense', request, metadata || {}, this.methodInfoGetLicense, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/GetLicense', request, metadata || {}, this.methodInfoGetLicense);
    };
    LicenseServiceClient.prototype.updateLicense = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/UpdateLicense', request, metadata || {}, this.methodInfoUpdateLicense, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/UpdateLicense', request, metadata || {}, this.methodInfoUpdateLicense);
    };
    LicenseServiceClient.prototype.deleteLicense = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/DeleteLicense', request, metadata || {}, this.methodInfoDeleteLicense, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/DeleteLicense', request, metadata || {}, this.methodInfoDeleteLicense);
    };
    return LicenseServiceClient;
}());
export { LicenseServiceClient };
//# sourceMappingURL=LicenseServiceClientPb.js.map