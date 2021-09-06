/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.recipe.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb from '../../../../../../github.com/metaprov/modelaapi/services/recipe/v1/recipe_pb';


export class RecipeServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListRecipes = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesResponse,
    (request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesResponse.deserializeBinary
  );

  listRecipes(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesResponse>;

  listRecipes(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesResponse>;

  listRecipes(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ListRecipes',
        request,
        metadata || {},
        this.methodInfoListRecipes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ListRecipes',
    request,
    metadata || {},
    this.methodInfoListRecipes);
  }

  methodInfoCreateRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeResponse,
    (request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeResponse.deserializeBinary
  );

  createRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeResponse>;

  createRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeResponse>;

  createRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/CreateRecipe',
        request,
        metadata || {},
        this.methodInfoCreateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/CreateRecipe',
    request,
    metadata || {},
    this.methodInfoCreateRecipe);
  }

  methodInfoGetRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeResponse,
    (request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeResponse.deserializeBinary
  );

  getRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeResponse>;

  getRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeResponse>;

  getRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/GetRecipe',
        request,
        metadata || {},
        this.methodInfoGetRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/GetRecipe',
    request,
    metadata || {},
    this.methodInfoGetRecipe);
  }

  methodInfoRunRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeResponse,
    (request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeResponse.deserializeBinary
  );

  runRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeResponse>;

  runRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeResponse>;

  runRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/RunRecipe',
        request,
        metadata || {},
        this.methodInfoRunRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/RunRecipe',
    request,
    metadata || {},
    this.methodInfoRunRecipe);
  }

  methodInfoProfileRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse,
    (request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse.deserializeBinary
  );

  profileRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse>;

  profileRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse>;

  profileRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ProfileRecipe',
        request,
        metadata || {},
        this.methodInfoProfileRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ProfileRecipe',
    request,
    metadata || {},
    this.methodInfoProfileRecipe);
  }

  methodInfoUpdateRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse,
    (request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse.deserializeBinary
  );

  updateRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse>;

  updateRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse>;

  updateRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/UpdateRecipe',
        request,
        metadata || {},
        this.methodInfoUpdateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/UpdateRecipe',
    request,
    metadata || {},
    this.methodInfoUpdateRecipe);
  }

  methodInfoDeleteRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse,
    (request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse.deserializeBinary
  );

  deleteRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse>;

  deleteRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse>;

  deleteRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/DeleteRecipe',
        request,
        metadata || {},
        this.methodInfoDeleteRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/DeleteRecipe',
    request,
    metadata || {},
    this.methodInfoDeleteRecipe);
  }

}

