/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.entity.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_entity_v1_entity_pb from '../../../../../../github.com/metaprov/modeldapi/services/entity/v1/entity_pb';


export class EntityServiceClient {
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

  methodInfoListEntities = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse,
    (request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse.deserializeBinary
  );

  listEntities(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse>;

  listEntities(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse>;

  listEntities(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/ListEntities',
        request,
        metadata || {},
        this.methodInfoListEntities,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/ListEntities',
    request,
    metadata || {},
    this.methodInfoListEntities);
  }

  methodInfoCreateEntity = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse,
    (request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse.deserializeBinary
  );

  createEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse>;

  createEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse>;

  createEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/CreateEntity',
        request,
        metadata || {},
        this.methodInfoCreateEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/CreateEntity',
    request,
    metadata || {},
    this.methodInfoCreateEntity);
  }

  methodInfoGetEntity = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse,
    (request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse.deserializeBinary
  );

  getEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse>;

  getEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse>;

  getEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/GetEntity',
        request,
        metadata || {},
        this.methodInfoGetEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/GetEntity',
    request,
    metadata || {},
    this.methodInfoGetEntity);
  }

  methodInfoUpdateEntity = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse,
    (request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse.deserializeBinary
  );

  updateEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse>;

  updateEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse>;

  updateEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/UpdateEntity',
        request,
        metadata || {},
        this.methodInfoUpdateEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/UpdateEntity',
    request,
    metadata || {},
    this.methodInfoUpdateEntity);
  }

  methodInfoDeleteEntity = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse,
    (request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse.deserializeBinary
  );

  deleteEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse>;

  deleteEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse>;

  deleteEntity(
    request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/DeleteEntity',
        request,
        metadata || {},
        this.methodInfoDeleteEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.entity.v1.EntityService/DeleteEntity',
    request,
    metadata || {},
    this.methodInfoDeleteEntity);
  }

}

