/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.datasource.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb from '../../../../../../github.com/metaprov/modeldapi/services/datasource/v1/datasource_pb';
export declare class DataSourceServiceClient {
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
    methodInfoListDataSources: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceRequest, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceResponse>;
    listDataSources(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceResponse>;
    listDataSources(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.ListDataSourceResponse>;
    methodInfoCreateDataSource: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceRequest, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse>;
    createDataSource(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse>;
    createDataSource(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.CreateDataSourceResponse>;
    methodInfoGetDataSource: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceRequest, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceResponse>;
    getDataSource(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceResponse>;
    getDataSource(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetDataSourceResponse>;
    methodInfoUpdateDataSource: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceRequest, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse>;
    updateDataSource(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse>;
    updateDataSource(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.UpdateDataSourceResponse>;
    methodInfoDeleteDataSource: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceRequest, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse>;
    deleteDataSource(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse>;
    deleteDataSource(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.DeleteDataSourceResponse>;
    methodInfoInferSchema: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaRequest, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaResponse>;
    inferSchema(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaResponse>;
    inferSchema(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.InferSchemaResponse>;
    methodInfoGetTableView: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewRequest, github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewResponse>;
    getTableView(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewResponse>;
    getTableView(request: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_v1_datasource_pb.GetTableViewResponse>;
}
