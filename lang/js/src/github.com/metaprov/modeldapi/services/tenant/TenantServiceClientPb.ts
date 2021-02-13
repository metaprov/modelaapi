/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.tenant
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_tenant_tenant_pb from '../../../../../github.com/metaprov/modeldapi/services/tenant/tenant_pb';


export class TenantServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListTenants = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsResponse,
    (request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsResponse.deserializeBinary
  );

  listTenants(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsResponse>;

  listTenants(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsResponse>;

  listTenants(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.ListTenantsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.tenant.TenantService/ListTenants',
        request,
        metadata || {},
        this.methodInfoListTenants,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.tenant.TenantService/ListTenants',
    request,
    metadata || {},
    this.methodInfoListTenants);
  }

  methodInfoCreateTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantResponse,
    (request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantResponse.deserializeBinary
  );

  createTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantResponse>;

  createTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantResponse>;

  createTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.CreateTenantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.tenant.TenantService/CreateTenant',
        request,
        metadata || {},
        this.methodInfoCreateTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.tenant.TenantService/CreateTenant',
    request,
    metadata || {},
    this.methodInfoCreateTenant);
  }

  methodInfoGetTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantResponse,
    (request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantResponse.deserializeBinary
  );

  getTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantResponse>;

  getTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantResponse>;

  getTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.GetTenantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.tenant.TenantService/GetTenant',
        request,
        metadata || {},
        this.methodInfoGetTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.tenant.TenantService/GetTenant',
    request,
    metadata || {},
    this.methodInfoGetTenant);
  }

  methodInfoUpdateTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantResponse,
    (request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantResponse.deserializeBinary
  );

  updateTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantResponse>;

  updateTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantResponse>;

  updateTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.UpdateTenantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.tenant.TenantService/UpdateTenant',
        request,
        metadata || {},
        this.methodInfoUpdateTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.tenant.TenantService/UpdateTenant',
    request,
    metadata || {},
    this.methodInfoUpdateTenant);
  }

  methodInfoDeleteTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantResponse,
    (request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantResponse.deserializeBinary
  );

  deleteTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantResponse>;

  deleteTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantResponse>;

  deleteTenant(
    request: github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_tenant_tenant_pb.DeleteTenantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.tenant.TenantService/DeleteTenant',
        request,
        metadata || {},
        this.methodInfoDeleteTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.tenant.TenantService/DeleteTenant',
    request,
    metadata || {},
    this.methodInfoDeleteTenant);
  }

}

