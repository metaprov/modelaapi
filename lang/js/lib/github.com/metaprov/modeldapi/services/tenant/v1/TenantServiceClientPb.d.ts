/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.tenant.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb from '../../../../../../github.com/metaprov/modeldapi/services/tenant/v1/tenant_pb';
export declare class TenantServiceClient {
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
    methodInfoListTenants: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.ListTenantsRequest, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.ListTenantsResponse>;
    listTenants(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.ListTenantsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.ListTenantsResponse>;
    listTenants(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.ListTenantsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.ListTenantsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.ListTenantsResponse>;
    methodInfoCreateTenant: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.CreateTenantRequest, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.CreateTenantResponse>;
    createTenant(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.CreateTenantRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.CreateTenantResponse>;
    createTenant(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.CreateTenantRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.CreateTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.CreateTenantResponse>;
    methodInfoGetTenant: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.GetTenantRequest, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.GetTenantResponse>;
    getTenant(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.GetTenantRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.GetTenantResponse>;
    getTenant(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.GetTenantRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.GetTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.GetTenantResponse>;
    methodInfoUpdateTenant: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.UpdateTenantRequest, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.UpdateTenantResponse>;
    updateTenant(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.UpdateTenantRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.UpdateTenantResponse>;
    updateTenant(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.UpdateTenantRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.UpdateTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.UpdateTenantResponse>;
    methodInfoDeleteTenant: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.DeleteTenantRequest, github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.DeleteTenantResponse>;
    deleteTenant(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.DeleteTenantRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.DeleteTenantResponse>;
    deleteTenant(request: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.DeleteTenantRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.DeleteTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_v1_tenant_pb.DeleteTenantResponse>;
}
