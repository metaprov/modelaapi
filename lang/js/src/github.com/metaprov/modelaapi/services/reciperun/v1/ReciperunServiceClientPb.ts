/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.reciperun.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb from '../../../../../../github.com/metaprov/modelaapi/services/reciperun/v1/reciperun_pb';


export class RecipeRunServiceClient {
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

  methodInfoListRecipeRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/ListRecipeRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsRequest,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse,
    (request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse.deserializeBinary
  );

  listRecipeRuns(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse>;

  listRecipeRuns(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse>;

  listRecipeRuns(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/ListRecipeRuns',
        request,
        metadata || {},
        this.methodInfoListRecipeRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/ListRecipeRuns',
    request,
    metadata || {},
    this.methodInfoListRecipeRuns);
  }

  methodInfoCreateRecipeRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/CreateRecipeRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunRequest,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse,
    (request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse.deserializeBinary
  );

  createRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse>;

  createRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse>;

  createRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/CreateRecipeRun',
        request,
        metadata || {},
        this.methodInfoCreateRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/CreateRecipeRun',
    request,
    metadata || {},
    this.methodInfoCreateRecipeRun);
  }

  methodInfoGetRecipeRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/GetRecipeRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunRequest,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse,
    (request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse.deserializeBinary
  );

  getRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse>;

  getRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse>;

  getRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/GetRecipeRun',
        request,
        metadata || {},
        this.methodInfoGetRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/GetRecipeRun',
    request,
    metadata || {},
    this.methodInfoGetRecipeRun);
  }

  methodInfoUpdateRecipeRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/UpdateRecipeRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunRequest,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse,
    (request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse.deserializeBinary
  );

  updateRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse>;

  updateRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse>;

  updateRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/UpdateRecipeRun',
        request,
        metadata || {},
        this.methodInfoUpdateRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/UpdateRecipeRun',
    request,
    metadata || {},
    this.methodInfoUpdateRecipeRun);
  }

  methodInfoDeleteRecipeRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/DeleteRecipeRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunRequest,
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse,
    (request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse.deserializeBinary
  );

  deleteRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse>;

  deleteRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse>;

  deleteRecipeRun(
    request: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/DeleteRecipeRun',
        request,
        metadata || {},
        this.methodInfoDeleteRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/DeleteRecipeRun',
    request,
    metadata || {},
    this.methodInfoDeleteRecipeRun);
  }

}

