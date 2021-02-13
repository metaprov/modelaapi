/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.authd.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_authd_v1_authd_pb from '../../../../../../github.com/metaprov/modeldapi/services/authd/v1/authd_pb';


export class AuthdServiceClient {
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

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse,
    (request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse.deserializeBinary
  );

  login(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse>;

  login(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse>;

  login(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.authd.v1.AuthdService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.authd.v1.AuthdService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoCreateAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse,
    (request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse.deserializeBinary
  );

  createAccount(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse>;

  createAccount(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse>;

  createAccount(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.authd.v1.AuthdService/CreateAccount',
        request,
        metadata || {},
        this.methodInfoCreateAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.authd.v1.AuthdService/CreateAccount',
    request,
    metadata || {},
    this.methodInfoCreateAccount);
  }

  methodInfoDeleteAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse,
    (request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountDeleteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse.deserializeBinary
  );

  deleteAccount(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountDeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse>;

  deleteAccount(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse>;

  deleteAccount(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.authd.v1.AuthdService/DeleteAccount',
        request,
        metadata || {},
        this.methodInfoDeleteAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.authd.v1.AuthdService/DeleteAccount',
    request,
    metadata || {},
    this.methodInfoDeleteAccount);
  }

  methodInfoLogout = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse,
    (request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLogoutRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse.deserializeBinary
  );

  logout(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLogoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse>;

  logout(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse>;

  logout(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.authd.v1.AuthdService/Logout',
        request,
        metadata || {},
        this.methodInfoLogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.authd.v1.AuthdService/Logout',
    request,
    metadata || {},
    this.methodInfoLogout);
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse,
    (request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse.deserializeBinary
  );

  changePassword(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse>;

  changePassword(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse>;

  changePassword(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.authd.v1.AuthdService/ChangePassword',
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.authd.v1.AuthdService/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
  }

  methodInfoResetPassword = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse,
    (request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse.deserializeBinary
  );

  resetPassword(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse>;

  resetPassword(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse>;

  resetPassword(
    request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.authd.v1.AuthdService/ResetPassword',
        request,
        metadata || {},
        this.methodInfoResetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.authd.v1.AuthdService/ResetPassword',
    request,
    metadata || {},
    this.methodInfoResetPassword);
  }

}

