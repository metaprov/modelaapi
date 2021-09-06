/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.servingsite.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb from '../../../../../../github.com/metaprov/modelaapi/services/servingsite/v1/servingsite_pb';


export class ServingSiteServiceClient {
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

  methodInfoListServingSites = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse,
    (request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse.deserializeBinary
  );

  listServingSites(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse>;

  listServingSites(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse>;

  listServingSites(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.ListServingSitesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/ListServingSites',
        request,
        metadata || {},
        this.methodInfoListServingSites,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/ListServingSites',
    request,
    metadata || {},
    this.methodInfoListServingSites);
  }

  methodInfoCreateServingSite = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse,
    (request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse.deserializeBinary
  );

  createServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse>;

  createServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse>;

  createServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.CreateServingSiteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/CreateServingSite',
        request,
        metadata || {},
        this.methodInfoCreateServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/CreateServingSite',
    request,
    metadata || {},
    this.methodInfoCreateServingSite);
  }

  methodInfoGetServingSite = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse,
    (request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse.deserializeBinary
  );

  getServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse>;

  getServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse>;

  getServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.GetServingSiteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetServingSite',
        request,
        metadata || {},
        this.methodInfoGetServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetServingSite',
    request,
    metadata || {},
    this.methodInfoGetServingSite);
  }

  methodInfoUpdateServingSite = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse,
    (request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse.deserializeBinary
  );

  updateServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse>;

  updateServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse>;

  updateServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.UpdateServingSiteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/UpdateServingSite',
        request,
        metadata || {},
        this.methodInfoUpdateServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/UpdateServingSite',
    request,
    metadata || {},
    this.methodInfoUpdateServingSite);
  }

  methodInfoDeleteServingSite = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse,
    (request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse.deserializeBinary
  );

  deleteServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse>;

  deleteServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse>;

  deleteServingSite(
    request: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_servingsite_v1_servingsite_pb.DeleteServingSiteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/DeleteServingSite',
        request,
        metadata || {},
        this.methodInfoDeleteServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/DeleteServingSite',
    request,
    metadata || {},
    this.methodInfoDeleteServingSite);
  }

}

