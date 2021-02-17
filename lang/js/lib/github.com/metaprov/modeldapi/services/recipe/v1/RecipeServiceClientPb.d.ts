/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.recipe.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb from '../../../../../../github.com/metaprov/modeldapi/services/recipe/v1/recipe_pb';
export declare class RecipeServiceClient {
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
    methodInfoListRecipes: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ListRecipesRequest, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ListRecipesResponse>;
    listRecipes(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ListRecipesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ListRecipesResponse>;
    listRecipes(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ListRecipesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ListRecipesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ListRecipesResponse>;
    methodInfoCreateRecipe: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.CreateRecipeRequest, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.CreateRecipeResponse>;
    createRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.CreateRecipeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.CreateRecipeResponse>;
    createRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.CreateRecipeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.CreateRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.CreateRecipeResponse>;
    methodInfoGetRecipe: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.GetRecipeRequest, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.GetRecipeResponse>;
    getRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.GetRecipeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.GetRecipeResponse>;
    getRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.GetRecipeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.GetRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.GetRecipeResponse>;
    methodInfoRunRecipe: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.RunRecipeRequest, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.RunRecipeResponse>;
    runRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.RunRecipeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.RunRecipeResponse>;
    runRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.RunRecipeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.RunRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.RunRecipeResponse>;
    methodInfoProfileRecipe: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ProfileRecipeRequest, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse>;
    profileRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ProfileRecipeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse>;
    profileRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ProfileRecipeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse>;
    methodInfoUpdateRecipe: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.UpdateRecipeRequest, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse>;
    updateRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.UpdateRecipeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse>;
    updateRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.UpdateRecipeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse>;
    methodInfoDeleteRecipe: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.DeleteRecipeRequest, github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse>;
    deleteRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.DeleteRecipeRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse>;
    deleteRecipe(request: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.DeleteRecipeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse>;
}
