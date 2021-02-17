/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.labelingpipelinerun.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb from '../../../../../../github.com/metaprov/modeldapi/services/labelingpipelinerun/v1/labelingpipelinerun_pb';
export class LabelingPipelineRunServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListLabelingPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.ListLabelingPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.ListLabelingPipelineRunResponse.deserializeBinary);
        this.methodInfoCreateLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.CreateLabelingPipelineRunResponse.deserializeBinary);
        this.methodInfoGetLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.GetLabelingPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.GetLabelingPipelineRunResponse.deserializeBinary);
        this.methodInfoUpdateLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.UpdateLabelingPipelineRunResponse.deserializeBinary);
        this.methodInfoDeleteLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipelinerun_v1_labelingpipelinerun_pb.DeleteLabelingPipelineRunResponse.deserializeBinary);
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
    listLabelingPipelineRuns(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/ListLabelingPipelineRuns', request, metadata || {}, this.methodInfoListLabelingPipelineRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/ListLabelingPipelineRuns', request, metadata || {}, this.methodInfoListLabelingPipelineRuns);
    }
    createLabelingPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/CreateLabelingPipelineRun', request, metadata || {}, this.methodInfoCreateLabelingPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/CreateLabelingPipelineRun', request, metadata || {}, this.methodInfoCreateLabelingPipelineRun);
    }
    getLabelingPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/GetLabelingPipelineRun', request, metadata || {}, this.methodInfoGetLabelingPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/GetLabelingPipelineRun', request, metadata || {}, this.methodInfoGetLabelingPipelineRun);
    }
    updateLabelingPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/UpdateLabelingPipelineRun', request, metadata || {}, this.methodInfoUpdateLabelingPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/UpdateLabelingPipelineRun', request, metadata || {}, this.methodInfoUpdateLabelingPipelineRun);
    }
    deleteLabelingPipelineRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/DeleteLabelingPipelineRun', request, metadata || {}, this.methodInfoDeleteLabelingPipelineRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/DeleteLabelingPipelineRun', request, metadata || {}, this.methodInfoDeleteLabelingPipelineRun);
    }
}
