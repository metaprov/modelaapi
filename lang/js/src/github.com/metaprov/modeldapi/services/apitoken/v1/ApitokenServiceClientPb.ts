/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.apitoken.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb from '../../../../../../github.com/metaprov/modeldapi/services/apitoken/v1/apitoken_pb';


export class ApiTokenServiceClient {
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

  methodInfoListApiTokens = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensResponse,
    (request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensResponse.deserializeBinary
  );

  listApiTokens(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensResponse>;

  listApiTokens(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensResponse>;

  listApiTokens(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.ListApiTokensResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/ListApiTokens',
        request,
        metadata || {},
        this.methodInfoListApiTokens,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/ListApiTokens',
    request,
    metadata || {},
    this.methodInfoListApiTokens);
  }

  methodInfoCreateApiToken = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenResponse,
    (request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenResponse.deserializeBinary
  );

  createApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenResponse>;

  createApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenResponse>;

  createApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.CreateApiTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/CreateApiToken',
        request,
        metadata || {},
        this.methodInfoCreateApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/CreateApiToken',
    request,
    metadata || {},
    this.methodInfoCreateApiToken);
  }

  methodInfoGetApiToken = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenResponse,
    (request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenResponse.deserializeBinary
  );

  getApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenResponse>;

  getApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenResponse>;

  getApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.GetApiTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/GetApiToken',
        request,
        metadata || {},
        this.methodInfoGetApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/GetApiToken',
    request,
    metadata || {},
    this.methodInfoGetApiToken);
  }

  methodInfoUpdateApiToken = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenResponse,
    (request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenResponse.deserializeBinary
  );

  updateApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenResponse>;

  updateApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenResponse>;

  updateApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.UpdateApiTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/UpdateApiToken',
        request,
        metadata || {},
        this.methodInfoUpdateApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/UpdateApiToken',
    request,
    metadata || {},
    this.methodInfoUpdateApiToken);
  }

  methodInfoDeleteApiToken = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenResponse,
    (request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenResponse.deserializeBinary
  );

  deleteApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenResponse>;

  deleteApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenResponse>;

  deleteApiToken(
    request: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_apitoken_v1_apitoken_pb.DeleteApiTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/DeleteApiToken',
        request,
        metadata || {},
        this.methodInfoDeleteApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.apitoken.v1.ApiTokenService/DeleteApiToken',
    request,
    metadata || {},
    this.methodInfoDeleteApiToken);
  }

}

