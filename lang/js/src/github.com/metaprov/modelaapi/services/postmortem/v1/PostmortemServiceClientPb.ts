/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.postmortem.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb from '../../../../../../github.com/metaprov/modelaapi/services/postmortem/v1/postmortem_pb';


export class PostMortemServiceClient {
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

  methodInfoListPostMortems = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse,
    (request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse.deserializeBinary
  );

  listPostMortems(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse>;

  listPostMortems(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse>;

  listPostMortems(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/ListPostMortems',
        request,
        metadata || {},
        this.methodInfoListPostMortems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/ListPostMortems',
    request,
    metadata || {},
    this.methodInfoListPostMortems);
  }

  methodInfoCreatePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse,
    (request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse.deserializeBinary
  );

  createPostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse>;

  createPostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse>;

  createPostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/CreatePostMortem',
        request,
        metadata || {},
        this.methodInfoCreatePostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/CreatePostMortem',
    request,
    metadata || {},
    this.methodInfoCreatePostMortem);
  }

  methodInfoGetPostMortem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse,
    (request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse.deserializeBinary
  );

  getPostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse>;

  getPostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse>;

  getPostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/GetPostMortem',
        request,
        metadata || {},
        this.methodInfoGetPostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/GetPostMortem',
    request,
    metadata || {},
    this.methodInfoGetPostMortem);
  }

  methodInfoUpdatePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse,
    (request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse.deserializeBinary
  );

  updatePostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse>;

  updatePostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse>;

  updatePostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/UpdatePostMortem',
        request,
        metadata || {},
        this.methodInfoUpdatePostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/UpdatePostMortem',
    request,
    metadata || {},
    this.methodInfoUpdatePostMortem);
  }

  methodInfoDeletePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse,
    (request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse.deserializeBinary
  );

  deletePostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse>;

  deletePostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse>;

  deletePostMortem(
    request: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/DeletePostMortem',
        request,
        metadata || {},
        this.methodInfoDeletePostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/DeletePostMortem',
    request,
    metadata || {},
    this.methodInfoDeletePostMortem);
  }

}

