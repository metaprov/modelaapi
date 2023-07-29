/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.recipe.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: github.com/metaprov/modelaapi/services/recipe/v1/recipe.proto


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
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListRecipes = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ListRecipes',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesRequest,
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
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesResponse>;

  listRecipes(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ListRecipesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ListRecipes',
        request,
        metadata || {},
        this.methodDescriptorListRecipes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ListRecipes',
    request,
    metadata || {},
    this.methodDescriptorListRecipes);
  }

  methodDescriptorCreateRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/CreateRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeRequest,
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
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeResponse>;

  createRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.CreateRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/CreateRecipe',
        request,
        metadata || {},
        this.methodDescriptorCreateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/CreateRecipe',
    request,
    metadata || {},
    this.methodDescriptorCreateRecipe);
  }

  methodDescriptorGetRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/GetRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeRequest,
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
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeResponse>;

  getRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.GetRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/GetRecipe',
        request,
        metadata || {},
        this.methodDescriptorGetRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/GetRecipe',
    request,
    metadata || {},
    this.methodDescriptorGetRecipe);
  }

  methodDescriptorRunRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/RunRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeRequest,
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
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeResponse>;

  runRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.RunRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/RunRecipe',
        request,
        metadata || {},
        this.methodDescriptorRunRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/RunRecipe',
    request,
    metadata || {},
    this.methodDescriptorRunRecipe);
  }

  methodDescriptorProfileRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ProfileRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeRequest,
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
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse>;

  profileRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.ProfileRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ProfileRecipe',
        request,
        metadata || {},
        this.methodDescriptorProfileRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/ProfileRecipe',
    request,
    metadata || {},
    this.methodDescriptorProfileRecipe);
  }

  methodDescriptorUpdateRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/UpdateRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeRequest,
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
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse>;

  updateRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.UpdateRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/UpdateRecipe',
        request,
        metadata || {},
        this.methodDescriptorUpdateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/UpdateRecipe',
    request,
    metadata || {},
    this.methodDescriptorUpdateRecipe);
  }

  methodDescriptorDeleteRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/DeleteRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeRequest,
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
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse>;

  deleteRecipe(
    request: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_recipe_v1_recipe_pb.DeleteRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/DeleteRecipe',
        request,
        metadata || {},
        this.methodDescriptorDeleteRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.recipe.v1.RecipeService/DeleteRecipe',
    request,
    metadata || {},
    this.methodDescriptorDeleteRecipe);
  }

}

