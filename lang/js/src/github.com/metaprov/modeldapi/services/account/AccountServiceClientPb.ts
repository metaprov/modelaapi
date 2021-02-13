/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.account
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_account_account_pb from '../../../../../github.com/metaprov/modeldapi/services/account/account_pb';


export class AccountServiceClient {
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

  methodInfoListAccounts = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsResponse.deserializeBinary
  );

  listAccounts(
    request: github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsResponse>;

  listAccounts(
    request: github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsResponse>;

  listAccounts(
    request: github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.ListAccountsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/ListAccounts',
        request,
        metadata || {},
        this.methodInfoListAccounts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/ListAccounts',
    request,
    metadata || {},
    this.methodInfoListAccounts);
  }

  methodInfoCreateAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountResponse.deserializeBinary
  );

  createAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountResponse>;

  createAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountResponse>;

  createAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.CreateAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/CreateAccount',
        request,
        metadata || {},
        this.methodInfoCreateAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/CreateAccount',
    request,
    metadata || {},
    this.methodInfoCreateAccount);
  }

  methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.GetAccountResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.GetAccountResponse.deserializeBinary
  );

  getAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.GetAccountResponse>;

  getAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.GetAccountResponse>;

  getAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/GetAccount',
        request,
        metadata || {},
        this.methodInfoGetAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/GetAccount',
    request,
    metadata || {},
    this.methodInfoGetAccount);
  }

  methodInfoUpdateAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountResponse.deserializeBinary
  );

  updateAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountResponse>;

  updateAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountResponse>;

  updateAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.UpdateAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/UpdateAccount',
        request,
        metadata || {},
        this.methodInfoUpdateAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/UpdateAccount',
    request,
    metadata || {},
    this.methodInfoUpdateAccount);
  }

  methodInfoDeleteAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountResponse.deserializeBinary
  );

  deleteAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountResponse>;

  deleteAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountResponse>;

  deleteAccount(
    request: github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.DeleteAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/DeleteAccount',
        request,
        metadata || {},
        this.methodInfoDeleteAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/DeleteAccount',
    request,
    metadata || {},
    this.methodInfoDeleteAccount);
  }

  methodInfoGetAccountNamespaces = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesResponse.deserializeBinary
  );

  getAccountNamespaces(
    request: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesResponse>;

  getAccountNamespaces(
    request: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesResponse>;

  getAccountNamespaces(
    request: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.GetAccountNamespacesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/GetAccountNamespaces',
        request,
        metadata || {},
        this.methodInfoGetAccountNamespaces,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/GetAccountNamespaces',
    request,
    metadata || {},
    this.methodInfoGetAccountNamespaces);
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginResponse.deserializeBinary
  );

  login(
    request: github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginResponse>;

  login(
    request: github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginResponse>;

  login(
    request: github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.AccountLoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoLogout = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.LogoutResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.AccountLogoutRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.LogoutResponse.deserializeBinary
  );

  logout(
    request: github_com_metaprov_modeldapi_services_account_account_pb.AccountLogoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.LogoutResponse>;

  logout(
    request: github_com_metaprov_modeldapi_services_account_account_pb.AccountLogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.LogoutResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.LogoutResponse>;

  logout(
    request: github_com_metaprov_modeldapi_services_account_account_pb.AccountLogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.LogoutResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/Logout',
        request,
        metadata || {},
        this.methodInfoLogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/Logout',
    request,
    metadata || {},
    this.methodInfoLogout);
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordResponse.deserializeBinary
  );

  changePassword(
    request: github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordResponse>;

  changePassword(
    request: github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordResponse>;

  changePassword(
    request: github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.ChangePasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/ChangePassword',
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
  }

  methodInfoResetPassword = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordResponse,
    (request: github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordResponse.deserializeBinary
  );

  resetPassword(
    request: github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordResponse>;

  resetPassword(
    request: github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordResponse>;

  resetPassword(
    request: github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_account_account_pb.ResetPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.account.AccountService/ResetPassword',
        request,
        metadata || {},
        this.methodInfoResetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.account.AccountService/ResetPassword',
    request,
    metadata || {},
    this.methodInfoResetPassword);
  }

}

