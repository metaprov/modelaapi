/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.authd.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_authd_v1_authd_pb from '../../../../../../github.com/metaprov/modeldapi/services/authd/v1/authd_pb';
var AuthdServiceClient = /** @class */ (function () {
    function AuthdServiceClient(hostname, credentials, options) {
        this.methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse.deserializeBinary);
        this.methodInfoCreateAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse.deserializeBinary);
        this.methodInfoDeleteAccount = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse.deserializeBinary);
        this.methodInfoLogout = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse.deserializeBinary);
        this.methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse.deserializeBinary);
        this.methodInfoResetPassword = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse.deserializeBinary);
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
    AuthdServiceClient.prototype.login = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/Login', request, metadata || {}, this.methodInfoLogin, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/Login', request, metadata || {}, this.methodInfoLogin);
    };
    AuthdServiceClient.prototype.createAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/CreateAccount', request, metadata || {}, this.methodInfoCreateAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/CreateAccount', request, metadata || {}, this.methodInfoCreateAccount);
    };
    AuthdServiceClient.prototype.deleteAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/DeleteAccount', request, metadata || {}, this.methodInfoDeleteAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/DeleteAccount', request, metadata || {}, this.methodInfoDeleteAccount);
    };
    AuthdServiceClient.prototype.logout = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/Logout', request, metadata || {}, this.methodInfoLogout, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/Logout', request, metadata || {}, this.methodInfoLogout);
    };
    AuthdServiceClient.prototype.changePassword = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/ChangePassword', request, metadata || {}, this.methodInfoChangePassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/ChangePassword', request, metadata || {}, this.methodInfoChangePassword);
    };
    AuthdServiceClient.prototype.resetPassword = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/ResetPassword', request, metadata || {}, this.methodInfoResetPassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.authd.v1.AuthdService/ResetPassword', request, metadata || {}, this.methodInfoResetPassword);
    };
    return AuthdServiceClient;
}());
export { AuthdServiceClient };
//# sourceMappingURL=AuthdServiceClientPb.js.map