/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.catalog.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb from '../../../../../../github.com/metaprov/modeldapi/services/catalog/v1/catalog_pb';
export declare class CatalogServiceClient {
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
    methodInfoListAlgorithm: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse>;
    listAlgorithm(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse>;
    listAlgorithm(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse>;
    methodInfoGetAlgorithm: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse>;
    getAlgorithm(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse>;
    getAlgorithm(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse>;
    methodInfoListMLFrameworks: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse>;
    listMLFrameworks(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse>;
    listMLFrameworks(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse>;
    methodInfoGetMLFramework: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse>;
    getMLFramework(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse>;
    getMLFramework(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse>;
    methodInfoListClouds: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse>;
    listClouds(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse>;
    listClouds(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse>;
    methodInfoGetCloud: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse>;
    getCloud(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse>;
    getCloud(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse>;
    methodInfoListWorkloadClasses: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse>;
    listWorkloadClasses(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse>;
    listWorkloadClasses(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse>;
    methodInfoGetWorkloadClass: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse>;
    getWorkloadClass(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse>;
    getWorkloadClass(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse>;
    methodInfoListUserRoleClasses: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesResponse>;
    listUserRoleClasses(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesResponse>;
    listUserRoleClasses(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListUserRoleClassesResponse>;
    methodInfoGetUserRoleClass: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassResponse>;
    getUserRoleClass(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassResponse>;
    getUserRoleClass(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetUserRoleClassResponse>;
    methodInfoListPublicDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsResponse>;
    listPublicDataset(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsResponse>;
    listPublicDataset(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListPublicDatasetsResponse>;
    methodInfoGetPublicDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetRequest, github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetResponse>;
    getPublicDataset(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetResponse>;
    getPublicDataset(request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetPublicDatasetResponse>;
}
