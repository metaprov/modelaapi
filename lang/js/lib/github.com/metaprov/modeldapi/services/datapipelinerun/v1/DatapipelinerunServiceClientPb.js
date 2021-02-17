/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.datapipelinerun.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/datapipelinerun/v1/datapipelinerun_pb';
export class DataPipelineRunServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListDataPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.ListDataPipelineRunResponse.deserializeBinary);
        this.methodInfoCreateDataPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.CreateDataPipelineRunResponse.deserializeBinary);
        this.methodInfoGetDataPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.GetDataPipelineRunResponse.deserializeBinary);
        this.methodInfoUpdateDataPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.UpdateDataPipelineRunResponse.deserializeBinary);
        this.methodInfoDeleteDataPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_datapipelinerun_v1_datapipelinerun_pb.DeleteDataPipelineRunResponse.deserializeBinary);
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
    listDataPipelineRuns(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/ListDataPipelineRuns', request, metadata || {}, this.methodInfoListDataPipelineRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/ListDataPipelineRuns', request, metadata || {}, this.methodInfoListDataPipelineRuns);
    }
    createDataPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/CreateDataPipelineRun', request, metadata || {}, this.methodInfoCreateDataPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/CreateDataPipelineRun', request, metadata || {}, this.methodInfoCreateDataPipelineRun);
    }
    getDataPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/GetDataPipelineRun', request, metadata || {}, this.methodInfoGetDataPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/GetDataPipelineRun', request, metadata || {}, this.methodInfoGetDataPipelineRun);
    }
    updateDataPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/UpdateDataPipelineRun', request, metadata || {}, this.methodInfoUpdateDataPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/UpdateDataPipelineRun', request, metadata || {}, this.methodInfoUpdateDataPipelineRun);
    }
    deleteDataPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/DeleteDataPipelineRun', request, metadata || {}, this.methodInfoDeleteDataPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.datapipelinerun.v1.DataPipelineRunService/DeleteDataPipelineRun', request, metadata || {}, this.methodInfoDeleteDataPipelineRun);
    }
}
