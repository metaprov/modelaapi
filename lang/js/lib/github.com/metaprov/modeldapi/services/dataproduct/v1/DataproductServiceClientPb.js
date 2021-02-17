/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.dataproduct.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb from '../../../../../../github.com/metaprov/modeldapi/services/dataproduct/v1/dataproduct_pb';
export class DataProductServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListDataProducts = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.ListDataProductsResponse.deserializeBinary);
        this.methodInfoCreateDataProduct = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.CreateDataProductResponse.deserializeBinary);
        this.methodInfoGetDataProduct = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.GetDataProductResponse.deserializeBinary);
        this.methodInfoUpdateDataProduct = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.UpdateDataProductResponse.deserializeBinary);
        this.methodInfoDeleteDataProduct = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_dataproduct_v1_dataproduct_pb.DeleteDataProductResponse.deserializeBinary);
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
    listDataProducts(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/ListDataProducts', request, metadata || {}, this.methodInfoListDataProducts, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/ListDataProducts', request, metadata || {}, this.methodInfoListDataProducts);
    }
    createDataProduct(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/CreateDataProduct', request, metadata || {}, this.methodInfoCreateDataProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/CreateDataProduct', request, metadata || {}, this.methodInfoCreateDataProduct);
    }
    getDataProduct(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/GetDataProduct', request, metadata || {}, this.methodInfoGetDataProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/GetDataProduct', request, metadata || {}, this.methodInfoGetDataProduct);
    }
    updateDataProduct(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/UpdateDataProduct', request, metadata || {}, this.methodInfoUpdateDataProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/UpdateDataProduct', request, metadata || {}, this.methodInfoUpdateDataProduct);
    }
    deleteDataProduct(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/DeleteDataProduct', request, metadata || {}, this.methodInfoDeleteDataProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService/DeleteDataProduct', request, metadata || {}, this.methodInfoDeleteDataProduct);
    }
}
