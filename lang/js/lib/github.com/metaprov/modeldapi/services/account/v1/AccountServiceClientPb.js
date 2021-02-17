/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.account.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_account_v1_account_pb from '../../../../../../github.com/metaprov/modeldapi/services/account/v1/account_pb';
export class AccountServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListAccounts = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsResponse.deserializeBinary);
        this.methodInfoCreateAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountResponse.deserializeBinary);
        this.methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountResponse.deserializeBinary);
        this.methodInfoUpdateAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountResponse.deserializeBinary);
        this.methodInfoDeleteAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountResponse.deserializeBinary);
        this.methodInfoGetAccountNamespaces = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesResponse.deserializeBinary);
        this.methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginResponse.deserializeBinary);
        this.methodInfoLogout = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.LogoutResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.LogoutResponse.deserializeBinary);
        this.methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordResponse.deserializeBinary);
        this.methodInfoResetPassword = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordResponse.deserializeBinary);
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
    listAccounts(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ListAccounts', request, metadata || {}, this.methodInfoListAccounts, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ListAccounts', request, metadata || {}, this.methodInfoListAccounts);
    }
    createAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/CreateAccount', request, metadata || {}, this.methodInfoCreateAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/CreateAccount', request, metadata || {}, this.methodInfoCreateAccount);
    }
    getAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccount', request, metadata || {}, this.methodInfoGetAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccount', request, metadata || {}, this.methodInfoGetAccount);
    }
    updateAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/UpdateAccount', request, metadata || {}, this.methodInfoUpdateAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/UpdateAccount', request, metadata || {}, this.methodInfoUpdateAccount);
    }
    deleteAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/DeleteAccount', request, metadata || {}, this.methodInfoDeleteAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/DeleteAccount', request, metadata || {}, this.methodInfoDeleteAccount);
    }
    getAccountNamespaces(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccountNamespaces', request, metadata || {}, this.methodInfoGetAccountNamespaces, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccountNamespaces', request, metadata || {}, this.methodInfoGetAccountNamespaces);
    }
    login(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Login', request, metadata || {}, this.methodInfoLogin, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Login', request, metadata || {}, this.methodInfoLogin);
    }
    logout(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Logout', request, metadata || {}, this.methodInfoLogout, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Logout', request, metadata || {}, this.methodInfoLogout);
    }
    changePassword(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ChangePassword', request, metadata || {}, this.methodInfoChangePassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ChangePassword', request, metadata || {}, this.methodInfoChangePassword);
    }
    resetPassword(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ResetPassword', request, metadata || {}, this.methodInfoResetPassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ResetPassword', request, metadata || {}, this.methodInfoResetPassword);
    }
}
