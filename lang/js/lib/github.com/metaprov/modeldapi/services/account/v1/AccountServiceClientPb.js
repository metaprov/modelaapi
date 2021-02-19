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
var AccountServiceClient = /** @class */ (function () {
    function AccountServiceClient(hostname, credentials, options) {
        this.methodInfoListAccounts = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.ListAccountsResponse.deserializeBinary);
        this.methodInfoCreateAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.CreateAccountResponse.deserializeBinary);
        this.methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountResponse.deserializeBinary);
        this.methodInfoUpdateAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.UpdateAccountResponse.deserializeBinary);
        this.methodInfoDeleteAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.DeleteAccountResponse.deserializeBinary);
        this.methodInfoGetAccountNamespaces = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.GetAccountNamespacesResponse.deserializeBinary);
        this.methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.AccountLoginResponse.deserializeBinary);
        this.methodInfoLogout = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.LogoutResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.LogoutResponse.deserializeBinary);
        this.methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_account_v1_account_pb.ChangePasswordResponse.deserializeBinary);
        this.methodInfoResetPassword = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_account_v1_account_pb.ResetPasswordResponse, function (request) {
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
    AccountServiceClient.prototype.listAccounts = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ListAccounts', request, metadata || {}, this.methodInfoListAccounts, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ListAccounts', request, metadata || {}, this.methodInfoListAccounts);
    };
    AccountServiceClient.prototype.createAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/CreateAccount', request, metadata || {}, this.methodInfoCreateAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/CreateAccount', request, metadata || {}, this.methodInfoCreateAccount);
    };
    AccountServiceClient.prototype.getAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccount', request, metadata || {}, this.methodInfoGetAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccount', request, metadata || {}, this.methodInfoGetAccount);
    };
    AccountServiceClient.prototype.updateAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/UpdateAccount', request, metadata || {}, this.methodInfoUpdateAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/UpdateAccount', request, metadata || {}, this.methodInfoUpdateAccount);
    };
    AccountServiceClient.prototype.deleteAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/DeleteAccount', request, metadata || {}, this.methodInfoDeleteAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/DeleteAccount', request, metadata || {}, this.methodInfoDeleteAccount);
    };
    AccountServiceClient.prototype.getAccountNamespaces = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccountNamespaces', request, metadata || {}, this.methodInfoGetAccountNamespaces, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccountNamespaces', request, metadata || {}, this.methodInfoGetAccountNamespaces);
    };
    AccountServiceClient.prototype.login = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Login', request, metadata || {}, this.methodInfoLogin, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Login', request, metadata || {}, this.methodInfoLogin);
    };
    AccountServiceClient.prototype.logout = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Logout', request, metadata || {}, this.methodInfoLogout, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Logout', request, metadata || {}, this.methodInfoLogout);
    };
    AccountServiceClient.prototype.changePassword = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ChangePassword', request, metadata || {}, this.methodInfoChangePassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ChangePassword', request, metadata || {}, this.methodInfoChangePassword);
    };
    AccountServiceClient.prototype.resetPassword = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ResetPassword', request, metadata || {}, this.methodInfoResetPassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ResetPassword', request, metadata || {}, this.methodInfoResetPassword);
    };
    return AccountServiceClient;
}());
export { AccountServiceClient };
//# sourceMappingURL=AccountServiceClientPb.js.map