/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.conversation.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb from '../../../../../../github.com/metaprov/modeldapi/services/conversation/v1/conversation_pb';


export class ConversationServiceClient {
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

  methodInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse.deserializeBinary
  );

  list(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse>;

  list(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse>;

  list(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ListConversationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse.deserializeBinary
  );

  create(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse>;

  create(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse>;

  create(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.CreateConversationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse.deserializeBinary
  );

  get(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse>;

  get(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse>;

  get(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.GetConversationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse.deserializeBinary
  );

  update(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse>;

  update(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse>;

  update(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.UpdateConversationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse.deserializeBinary
  );

  delete(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse>;

  delete(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse>;

  delete(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.DeleteConversationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

}

