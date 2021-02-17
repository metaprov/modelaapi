/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.authd.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_authd_v1_authd_pb from '../../../../../../github.com/metaprov/modeldapi/services/authd/v1/authd_pb';
export declare class AuthdServiceClient {
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
    methodInfoLogin: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginRequest, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse>;
    login(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse>;
    login(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLoginResponse>;
    methodInfoCreateAccount: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateRequest, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse>;
    createAccount(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse>;
    createAccount(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountCreateResponse>;
    methodInfoDeleteAccount: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountDeleteRequest, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse>;
    deleteAccount(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountDeleteRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse>;
    deleteAccount(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountDeleteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.DeleteAccountResponse>;
    methodInfoLogout: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLogoutRequest, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse>;
    logout(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLogoutRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse>;
    logout(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.AccountLogoutRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.LogoutResponse>;
    methodInfoChangePassword: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordRequest, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse>;
    changePassword(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse>;
    changePassword(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ChangePasswordResponse>;
    methodInfoResetPassword: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordRequest, github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse>;
    resetPassword(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse>;
    resetPassword(request: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_authd_v1_authd_pb.ResetPasswordResponse>;
}
