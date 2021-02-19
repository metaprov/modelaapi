/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.modelpipeline.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb from '../../../../../../github.com/metaprov/modeldapi/services/modelpipeline/v1/modelpipeline_pb';
var ModelPipelineServiceClient = /** @class */ (function () {
    function ModelPipelineServiceClient(hostname, credentials, options) {
        this.methodInfoListModelPipelines = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.ListModelPipelinesResponse.deserializeBinary);
        this.methodInfoCreateModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.CreateModelPipelineResponse.deserializeBinary);
        this.methodInfoGetModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.GetModelPipelineResponse.deserializeBinary);
        this.methodInfoUpdateModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.UpdateModelPipelineResponse.deserializeBinary);
        this.methodInfoDeleteModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_modelpipeline_v1_modelpipeline_pb.DeleteModelPipelineResponse.deserializeBinary);
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
    ModelPipelineServiceClient.prototype.listModelPipelines = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/ListModelPipelines', request, metadata || {}, this.methodInfoListModelPipelines, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/ListModelPipelines', request, metadata || {}, this.methodInfoListModelPipelines);
    };
    ModelPipelineServiceClient.prototype.createModelPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/CreateModelPipeline', request, metadata || {}, this.methodInfoCreateModelPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/CreateModelPipeline', request, metadata || {}, this.methodInfoCreateModelPipeline);
    };
    ModelPipelineServiceClient.prototype.getModelPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/GetModelPipeline', request, metadata || {}, this.methodInfoGetModelPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/GetModelPipeline', request, metadata || {}, this.methodInfoGetModelPipeline);
    };
    ModelPipelineServiceClient.prototype.updateModelPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/UpdateModelPipeline', request, metadata || {}, this.methodInfoUpdateModelPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/UpdateModelPipeline', request, metadata || {}, this.methodInfoUpdateModelPipeline);
    };
    ModelPipelineServiceClient.prototype.deleteModelPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/DeleteModelPipeline', request, metadata || {}, this.methodInfoDeleteModelPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.modelpipeline.v1.ModelPipelineService/DeleteModelPipeline', request, metadata || {}, this.methodInfoDeleteModelPipeline);
    };
    return ModelPipelineServiceClient;
}());
export { ModelPipelineServiceClient };
//# sourceMappingURL=ModelpipelineServiceClientPb.js.map