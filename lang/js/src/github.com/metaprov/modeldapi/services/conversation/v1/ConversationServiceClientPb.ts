/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.conversation.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb';
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
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationList,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationList.deserializeBinary
  );

  list(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationList>;

  list(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationList) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationList>;

  list(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationList) => void) {
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
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationCreateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  create(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  create(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  create(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
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
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationGetResponse,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationGetResponse.deserializeBinary
  );

  get(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationGetResponse>;

  get(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationGetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationGetResponse>;

  get(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationGetResponse) => void) {
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
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationUpdateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
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
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  delete(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  delete(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  delete(
    request: github_com_metaprov_modeldapi_services_conversation_v1_conversation_pb.ConversationQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
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

