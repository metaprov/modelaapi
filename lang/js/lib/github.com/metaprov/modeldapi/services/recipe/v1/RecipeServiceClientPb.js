/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.recipe.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb from '../../../../../../github.com/metaprov/modeldapi/services/recipe/v1/recipe_pb';
var RecipeServiceClient = /** @class */ (function () {
    function RecipeServiceClient(hostname, credentials, options) {
        this.methodInfoListRecipes = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ListRecipesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ListRecipesResponse.deserializeBinary);
        this.methodInfoCreateRecipe = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.CreateRecipeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.CreateRecipeResponse.deserializeBinary);
        this.methodInfoGetRecipe = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.GetRecipeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.GetRecipeResponse.deserializeBinary);
        this.methodInfoRunRecipe = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.RunRecipeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.RunRecipeResponse.deserializeBinary);
        this.methodInfoProfileRecipe = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse.deserializeBinary);
        this.methodInfoUpdateRecipe = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse.deserializeBinary);
        this.methodInfoDeleteRecipe = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse.deserializeBinary);
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
    RecipeServiceClient.prototype.listRecipes = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/ListRecipes', request, metadata || {}, this.methodInfoListRecipes, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/ListRecipes', request, metadata || {}, this.methodInfoListRecipes);
    };
    RecipeServiceClient.prototype.createRecipe = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/CreateRecipe', request, metadata || {}, this.methodInfoCreateRecipe, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/CreateRecipe', request, metadata || {}, this.methodInfoCreateRecipe);
    };
    RecipeServiceClient.prototype.getRecipe = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/GetRecipe', request, metadata || {}, this.methodInfoGetRecipe, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/GetRecipe', request, metadata || {}, this.methodInfoGetRecipe);
    };
    RecipeServiceClient.prototype.runRecipe = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/RunRecipe', request, metadata || {}, this.methodInfoRunRecipe, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/RunRecipe', request, metadata || {}, this.methodInfoRunRecipe);
    };
    RecipeServiceClient.prototype.profileRecipe = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/ProfileRecipe', request, metadata || {}, this.methodInfoProfileRecipe, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/ProfileRecipe', request, metadata || {}, this.methodInfoProfileRecipe);
    };
    RecipeServiceClient.prototype.updateRecipe = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/UpdateRecipe', request, metadata || {}, this.methodInfoUpdateRecipe, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/UpdateRecipe', request, metadata || {}, this.methodInfoUpdateRecipe);
    };
    RecipeServiceClient.prototype.deleteRecipe = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/DeleteRecipe', request, metadata || {}, this.methodInfoDeleteRecipe, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.recipe.v1.RecipeService/DeleteRecipe', request, metadata || {}, this.methodInfoDeleteRecipe);
    };
    return RecipeServiceClient;
}());
export { RecipeServiceClient };
//# sourceMappingURL=RecipeServiceClientPb.js.map