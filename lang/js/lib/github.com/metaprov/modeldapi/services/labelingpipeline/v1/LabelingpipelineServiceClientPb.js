/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.labelingpipeline.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/labelingpipeline/v1/labelingpipeline_pb';
var LabelingPipelineServiceClient = /** @class */ (function () {
    function LabelingPipelineServiceClient(hostname, credentials, options) {
        this.methodInfoListLabelingPipelines = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.ListLabelingPipelineResponse.deserializeBinary);
        this.methodInfoCreateLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.CreateLabelingPipelineResponse.deserializeBinary);
        this.methodInfoGetLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.GetLabelingPipelineResponse.deserializeBinary);
        this.methodInfoUpdateLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.UpdateLabelingPipelineResponse.deserializeBinary);
        this.methodInfoDeleteLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_labelingpipeline_v1_labelingpipeline_pb.DeleteLabelingPipelineResponse.deserializeBinary);
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
    LabelingPipelineServiceClient.prototype.listLabelingPipelines = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/ListLabelingPipelines', request, metadata || {}, this.methodInfoListLabelingPipelines, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/ListLabelingPipelines', request, metadata || {}, this.methodInfoListLabelingPipelines);
    };
    LabelingPipelineServiceClient.prototype.createLabelingPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/CreateLabelingPipeline', request, metadata || {}, this.methodInfoCreateLabelingPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/CreateLabelingPipeline', request, metadata || {}, this.methodInfoCreateLabelingPipeline);
    };
    LabelingPipelineServiceClient.prototype.getLabelingPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/GetLabelingPipeline', request, metadata || {}, this.methodInfoGetLabelingPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/GetLabelingPipeline', request, metadata || {}, this.methodInfoGetLabelingPipeline);
    };
    LabelingPipelineServiceClient.prototype.updateLabelingPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/UpdateLabelingPipeline', request, metadata || {}, this.methodInfoUpdateLabelingPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/UpdateLabelingPipeline', request, metadata || {}, this.methodInfoUpdateLabelingPipeline);
    };
    LabelingPipelineServiceClient.prototype.deleteLabelingPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/DeleteLabelingPipeline', request, metadata || {}, this.methodInfoDeleteLabelingPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService/DeleteLabelingPipeline', request, metadata || {}, this.methodInfoDeleteLabelingPipeline);
    };
    return LabelingPipelineServiceClient;
}());
export { LabelingPipelineServiceClient };
//# sourceMappingURL=LabelingpipelineServiceClientPb.js.map