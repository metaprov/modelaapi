/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.dataproduct.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb from '../../../../../../github.com/metaprov/modeldapi/services/dataproduct/v1/dataproduct_pb';
export declare class DataProductServiceClient {
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
    methodInfoListDataProducts: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsRequest, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse>;
    listDataProducts(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse>;
    listDataProducts(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse>;
    methodInfoCreateDataProduct: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductRequest, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse>;
    createDataProduct(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse>;
    createDataProduct(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse>;
    methodInfoGetDataProduct: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.GetDataProductRequest, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse>;
    getDataProduct(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.GetDataProductRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse>;
    getDataProduct(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.GetDataProductRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse>;
    methodInfoUpdateDataProduct: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductRequest, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse>;
    updateDataProduct(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse>;
    updateDataProduct(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse>;
    methodInfoDeleteDataProduct: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductRequest, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse>;
    deleteDataProduct(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse>;
    deleteDataProduct(request: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse>;
}
