/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.reciperun.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb from '../../../../../../github.com/metaprov/modeldapi/services/reciperun/v1/reciperun_pb';
export class RecipeRunServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListRecipeRuns = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse.deserializeBinary);
        this.methodInfoCreateRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse.deserializeBinary);
        this.methodInfoGetRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse.deserializeBinary);
        this.methodInfoUpdateRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse.deserializeBinary);
        this.methodInfoDeleteRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse.deserializeBinary);
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
    listRecipeRuns(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/ListRecipeRuns', request, metadata || {}, this.methodInfoListRecipeRuns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/ListRecipeRuns', request, metadata || {}, this.methodInfoListRecipeRuns);
    }
    createRecipeRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/CreateRecipeRun', request, metadata || {}, this.methodInfoCreateRecipeRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/CreateRecipeRun', request, metadata || {}, this.methodInfoCreateRecipeRun);
    }
    getRecipeRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/GetRecipeRun', request, metadata || {}, this.methodInfoGetRecipeRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/GetRecipeRun', request, metadata || {}, this.methodInfoGetRecipeRun);
    }
    updateRecipeRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/UpdateRecipeRun', request, metadata || {}, this.methodInfoUpdateRecipeRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/UpdateRecipeRun', request, metadata || {}, this.methodInfoUpdateRecipeRun);
    }
    deleteRecipeRun(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/DeleteRecipeRun', request, metadata || {}, this.methodInfoDeleteRecipeRun, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.reciperun.v1.RecipeRunService/DeleteRecipeRun', request, metadata || {}, this.methodInfoDeleteRecipeRun);
    }
}
