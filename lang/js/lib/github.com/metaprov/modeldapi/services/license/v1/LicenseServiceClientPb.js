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
export class LicenseServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListLicenses = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesResponse.deserializeBinary);
        this.methodInfoCreateLicense = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse.deserializeBinary);
        this.methodInfoCreateLicenseFromKey = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse.deserializeBinary);
        this.methodInfoGetLicense = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseResponse.deserializeBinary);
        this.methodInfoUpdateLicense = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseResponse.deserializeBinary);
        this.methodInfoDeleteLicense = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseResponse, (request) => {
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
    listLicenses(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/ListLicenses', request, metadata || {}, this.methodInfoListLicenses, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/ListLicenses', request, metadata || {}, this.methodInfoListLicenses);
    }
    createLicense(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/CreateLicense', request, metadata || {}, this.methodInfoCreateLicense, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/CreateLicense', request, metadata || {}, this.methodInfoCreateLicense);
    }
    createLicenseFromKey(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/CreateLicenseFromKey', request, metadata || {}, this.methodInfoCreateLicenseFromKey, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/CreateLicenseFromKey', request, metadata || {}, this.methodInfoCreateLicenseFromKey);
    }
    getLicense(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/GetLicense', request, metadata || {}, this.methodInfoGetLicense, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/GetLicense', request, metadata || {}, this.methodInfoGetLicense);
    }
    updateLicense(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/UpdateLicense', request, metadata || {}, this.methodInfoUpdateLicense, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/UpdateLicense', request, metadata || {}, this.methodInfoUpdateLicense);
    }
    deleteLicense(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/DeleteLicense', request, metadata || {}, this.methodInfoDeleteLicense, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.license.v1.LicenseService/DeleteLicense', request, metadata || {}, this.methodInfoDeleteLicense);
    }
}
