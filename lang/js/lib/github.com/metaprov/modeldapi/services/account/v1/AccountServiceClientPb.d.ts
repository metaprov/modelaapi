/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.account.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_account_v1_account_pb from '../../../../../../github.com/metaprov/modeldapi/services/account/v1/account_pb';
export declare class AccountServiceClient {
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
    methodInfoListAccounts: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsResponse>;
    listAccounts(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsResponse>;
    listAccounts(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsResponse>;
    methodInfoCreateAccount: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountResponse>;
    createAccount(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountResponse>;
    createAccount(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountResponse>;
    methodInfoGetAccount: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountResponse>;
    getAccount(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountResponse>;
    getAccount(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountResponse>;
    methodInfoUpdateAccount: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountResponse>;
    updateAccount(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountResponse>;
    updateAccount(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountResponse>;
    methodInfoDeleteAccount: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountResponse>;
    deleteAccount(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountResponse>;
    deleteAccount(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountResponse>;
    methodInfoGetAccountNamespaces: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesResponse>;
    getAccountNamespaces(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesResponse>;
    getAccountNamespaces(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesResponse>;
    methodInfoLogin: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginResponse>;
    login(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginResponse>;
    login(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginResponse>;
    methodInfoLogout: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLogoutRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.LogoutResponse>;
    logout(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLogoutRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.LogoutResponse>;
    logout(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLogoutRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.LogoutResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.LogoutResponse>;
    methodInfoChangePassword: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordResponse>;
    changePassword(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordResponse>;
    changePassword(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordResponse>;
    methodInfoResetPassword: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordRequest, github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordResponse>;
    resetPassword(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordResponse>;
    resetPassword(request: github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordResponse>;
}
