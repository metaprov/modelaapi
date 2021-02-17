/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.license.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_license_v1_license_pb from '../../../../../../github.com/metaprov/modeldapi/services/license/v1/license_pb';
export declare class LicenseServiceClient {
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
    methodInfoListLicenses: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesRequest, github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesResponse>;
    listLicenses(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesResponse>;
    listLicenses(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_license_v1_license_pb.ListLicensesResponse>;
    methodInfoCreateLicense: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseRequest, github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse>;
    createLicense(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse>;
    createLicense(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse>;
    methodInfoCreateLicenseFromKey: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseFromKeyRequest, github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse>;
    createLicenseFromKey(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseFromKeyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse>;
    createLicenseFromKey(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseFromKeyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_license_v1_license_pb.CreateLicenseResponse>;
    methodInfoGetLicense: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseRequest, github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseResponse>;
    getLicense(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseResponse>;
    getLicense(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_license_v1_license_pb.GetLicenseResponse>;
    methodInfoUpdateLicense: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseRequest, github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseResponse>;
    updateLicense(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseResponse>;
    updateLicense(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_license_v1_license_pb.UpdateLicenseResponse>;
    methodInfoDeleteLicense: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseRequest, github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseResponse>;
    deleteLicense(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseResponse>;
    deleteLicense(request: github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_license_v1_license_pb.DeleteLicenseResponse>;
}
