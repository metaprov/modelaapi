/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.curtain
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_curtain_curtain_pb from '../../../../../github.com/metaprov/modeldapi/services/curtain/curtain_pb';


export class CurtainServiceClient {
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

  methodInfoListCurtains = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsResponse,
    (request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsResponse.deserializeBinary
  );

  listCurtains(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsResponse>;

  listCurtains(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsResponse>;

  listCurtains(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.ListCurtainsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.curtain.CurtainService/ListCurtains',
        request,
        metadata || {},
        this.methodInfoListCurtains,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.curtain.CurtainService/ListCurtains',
    request,
    metadata || {},
    this.methodInfoListCurtains);
  }

  methodInfoCreateCurtain = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainResponse,
    (request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainResponse.deserializeBinary
  );

  createCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainResponse>;

  createCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainResponse>;

  createCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.CreateCurtainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.curtain.CurtainService/CreateCurtain',
        request,
        metadata || {},
        this.methodInfoCreateCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.curtain.CurtainService/CreateCurtain',
    request,
    metadata || {},
    this.methodInfoCreateCurtain);
  }

  methodInfoGetCurtain = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainResponse,
    (request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainResponse.deserializeBinary
  );

  getCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainResponse>;

  getCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainResponse>;

  getCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.GetCurtainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.curtain.CurtainService/GetCurtain',
        request,
        metadata || {},
        this.methodInfoGetCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.curtain.CurtainService/GetCurtain',
    request,
    metadata || {},
    this.methodInfoGetCurtain);
  }

  methodInfoUpdateCurtain = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainResponse,
    (request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainResponse.deserializeBinary
  );

  updateCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainResponse>;

  updateCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainResponse>;

  updateCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.UpdateCurtainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.curtain.CurtainService/UpdateCurtain',
        request,
        metadata || {},
        this.methodInfoUpdateCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.curtain.CurtainService/UpdateCurtain',
    request,
    metadata || {},
    this.methodInfoUpdateCurtain);
  }

  methodInfoDeleteCurtain = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainResponse,
    (request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainResponse.deserializeBinary
  );

  deleteCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainResponse>;

  deleteCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainResponse>;

  deleteCurtain(
    request: github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_curtain_curtain_pb.DeleteCurtainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.curtain.CurtainService/DeleteCurtain',
        request,
        metadata || {},
        this.methodInfoDeleteCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.curtain.CurtainService/DeleteCurtain',
    request,
    metadata || {},
    this.methodInfoDeleteCurtain);
  }

}

