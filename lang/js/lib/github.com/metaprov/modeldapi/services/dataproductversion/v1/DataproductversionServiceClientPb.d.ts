/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.dataproductversion.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb from '../../../../../../github.com/metaprov/modeldapi/services/dataproductversion/v1/dataproductversion_pb';
export declare class DataProductVersionServiceClient {
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
    methodInfoListDataProductVersions: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsRequest, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse>;
    listDataProductVersions(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse>;
    listDataProductVersions(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.ListDataProductVersionsResponse>;
    methodInfoCreateDataProductVersion: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionRequest, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse>;
    createDataProductVersion(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse>;
    createDataProductVersion(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.CreateDataProductVersionResponse>;
    methodInfoGetDataProductVersion: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionRequest, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse>;
    getDataProductVersion(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse>;
    getDataProductVersion(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.GetDataProductVersionResponse>;
    methodInfoUpdateDataProductVersion: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionRequest, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse>;
    updateDataProductVersion(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse>;
    updateDataProductVersion(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.UpdateDataProductVersionResponse>;
    methodInfoDeleteDataProductVersion: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionRequest, github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse>;
    deleteDataProductVersion(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse>;
    deleteDataProductVersion(request: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproductversion_v1_dataproductversion_pb.DeleteDataProductVersionResponse>;
}
