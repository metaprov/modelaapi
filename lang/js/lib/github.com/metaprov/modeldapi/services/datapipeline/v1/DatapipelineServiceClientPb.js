/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.datapipeline.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/datapipeline/v1/datapipeline_pb';
var DataPipelineServiceClient = /** @class */ (function () {
    function DataPipelineServiceClient(hostname, credentials, options) {
        this.methodInfoListDataPipelines = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.ListDataPipelinesResponse.deserializeBinary);
        this.methodInfoCreateDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.CreateDataPipelineResponse.deserializeBinary);
        this.methodInfoGetDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.GetDataPipelineResponse.deserializeBinary);
        this.methodInfoUpdateDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.UpdateDataPipelineResponse.deserializeBinary);
        this.methodInfoDeleteDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.DeleteDataPipelineResponse.deserializeBinary);
        this.methodInfoRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipeline_v1_datapipeline_pb.RunDataPipelineResponse.deserializeBinary);
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
    DataPipelineServiceClient.prototype.listDataPipelines = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/ListDataPipelines', request, metadata || {}, this.methodInfoListDataPipelines, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/ListDataPipelines', request, metadata || {}, this.methodInfoListDataPipelines);
    };
    DataPipelineServiceClient.prototype.createDataPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/CreateDataPipeline', request, metadata || {}, this.methodInfoCreateDataPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/CreateDataPipeline', request, metadata || {}, this.methodInfoCreateDataPipeline);
    };
    DataPipelineServiceClient.prototype.getDataPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/GetDataPipeline', request, metadata || {}, this.methodInfoGetDataPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/GetDataPipeline', request, metadata || {}, this.methodInfoGetDataPipeline);
    };
    DataPipelineServiceClient.prototype.updateDataPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/UpdateDataPipeline', request, metadata || {}, this.methodInfoUpdateDataPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/UpdateDataPipeline', request, metadata || {}, this.methodInfoUpdateDataPipeline);
    };
    DataPipelineServiceClient.prototype.deleteDataPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/DeleteDataPipeline', request, metadata || {}, this.methodInfoDeleteDataPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/DeleteDataPipeline', request, metadata || {}, this.methodInfoDeleteDataPipeline);
    };
    DataPipelineServiceClient.prototype.run = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/Run', request, metadata || {}, this.methodInfoRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/Run', request, metadata || {}, this.methodInfoRun);
    };
    return DataPipelineServiceClient;
}());
export { DataPipelineServiceClient };
//# sourceMappingURL=DatapipelineServiceClientPb.js.map