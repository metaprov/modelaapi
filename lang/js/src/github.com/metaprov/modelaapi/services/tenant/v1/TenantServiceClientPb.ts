/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.tenant.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: github.com/metaprov/modelaapi/services/tenant/v1/tenant.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb from '../../../../../../github.com/metaprov/modelaapi/services/tenant/v1/tenant_pb';


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
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListTenantAlerts = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/ListTenantAlerts',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsRequest,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsResponse,
    (request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsResponse.deserializeBinary
  );

  listTenantAlerts(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsResponse>;

  listTenantAlerts(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsResponse>;

  listTenantAlerts(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantAlertsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/ListTenantAlerts',
        request,
        metadata || {},
        this.methodDescriptorListTenantAlerts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/ListTenantAlerts',
    request,
    metadata || {},
    this.methodDescriptorListTenantAlerts);
  }

  methodDescriptorListTenants = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/ListTenants',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsRequest,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsResponse,
    (request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsResponse.deserializeBinary
  );

  listTenants(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsResponse>;

  listTenants(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsResponse>;

  listTenants(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.ListTenantsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/ListTenants',
        request,
        metadata || {},
        this.methodDescriptorListTenants,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/ListTenants',
    request,
    metadata || {},
    this.methodDescriptorListTenants);
  }

  methodDescriptorCreateTenant = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/CreateTenant',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantRequest,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantResponse,
    (request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantResponse.deserializeBinary
  );

  createTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantResponse>;

  createTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantResponse>;

  createTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.CreateTenantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/CreateTenant',
        request,
        metadata || {},
        this.methodDescriptorCreateTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/CreateTenant',
    request,
    metadata || {},
    this.methodDescriptorCreateTenant);
  }

  methodDescriptorGetTenant = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/GetTenant',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantRequest,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantResponse,
    (request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantResponse.deserializeBinary
  );

  getTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantResponse>;

  getTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantResponse>;

  getTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.GetTenantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/GetTenant',
        request,
        metadata || {},
        this.methodDescriptorGetTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/GetTenant',
    request,
    metadata || {},
    this.methodDescriptorGetTenant);
  }

  methodDescriptorUpdateTenant = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/UpdateTenant',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantRequest,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantResponse,
    (request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantResponse.deserializeBinary
  );

  updateTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantResponse>;

  updateTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantResponse>;

  updateTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.UpdateTenantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/UpdateTenant',
        request,
        metadata || {},
        this.methodDescriptorUpdateTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/UpdateTenant',
    request,
    metadata || {},
    this.methodDescriptorUpdateTenant);
  }

  methodDescriptorDeleteTenant = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/DeleteTenant',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantRequest,
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantResponse,
    (request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantResponse.deserializeBinary
  );

  deleteTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantResponse>;

  deleteTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantResponse>;

  deleteTenant(
    request: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_tenant_v1_tenant_pb.DeleteTenantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/DeleteTenant',
        request,
        metadata || {},
        this.methodDescriptorDeleteTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.tenant.v1.TenantService/DeleteTenant',
    request,
    metadata || {},
    this.methodDescriptorDeleteTenant);
  }

}

