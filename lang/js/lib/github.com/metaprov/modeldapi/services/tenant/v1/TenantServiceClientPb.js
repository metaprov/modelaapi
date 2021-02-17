/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.tenant.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb from '../../../../../../github.com/metaprov/modeldapi/services/tenant/v1/tenant_pb';
export class TenantServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListTenants = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.ListTenantsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.ListTenantsResponse.deserializeBinary);
        this.methodInfoCreateTenant = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.CreateTenantResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.CreateTenantResponse.deserializeBinary);
        this.methodInfoGetTenant = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.GetTenantResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.GetTenantResponse.deserializeBinary);
        this.methodInfoUpdateTenant = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.UpdateTenantResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.UpdateTenantResponse.deserializeBinary);
        this.methodInfoDeleteTenant = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.DeleteTenantResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.DeleteTenantResponse.deserializeBinary);
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
    listTenants(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/ListTenants', request, metadata || {}, this.methodInfoListTenants, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/ListTenants', request, metadata || {}, this.methodInfoListTenants);
    }
    createTenant(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/CreateTenant', request, metadata || {}, this.methodInfoCreateTenant, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/CreateTenant', request, metadata || {}, this.methodInfoCreateTenant);
    }
    getTenant(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/GetTenant', request, metadata || {}, this.methodInfoGetTenant, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/GetTenant', request, metadata || {}, this.methodInfoGetTenant);
    }
    updateTenant(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/UpdateTenant', request, metadata || {}, this.methodInfoUpdateTenant, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/UpdateTenant', request, metadata || {}, this.methodInfoUpdateTenant);
    }
    deleteTenant(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/DeleteTenant', request, metadata || {}, this.methodInfoDeleteTenant, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.tenant.v1.TenantService/DeleteTenant', request, metadata || {}, this.methodInfoDeleteTenant);
    }
}
