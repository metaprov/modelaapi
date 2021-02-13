/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.connection.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_connection_v1_connection_pb from '../../../../../../github.com/metaprov/modeldapi/services/connection/v1/connection_pb';


export class ConnectionServiceClient {
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

  methodInfoListConnections = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse,
    (request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse.deserializeBinary
  );

  listConnections(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse>;

  listConnections(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse>;

  listConnections(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/ListConnections',
        request,
        metadata || {},
        this.methodInfoListConnections,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/ListConnections',
    request,
    metadata || {},
    this.methodInfoListConnections);
  }

  methodInfoCreateConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse,
    (request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse.deserializeBinary
  );

  createConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse>;

  createConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse>;

  createConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/CreateConnection',
        request,
        metadata || {},
        this.methodInfoCreateConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/CreateConnection',
    request,
    metadata || {},
    this.methodInfoCreateConnection);
  }

  methodInfoGetConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse,
    (request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse.deserializeBinary
  );

  getConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse>;

  getConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse>;

  getConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/GetConnection',
        request,
        metadata || {},
        this.methodInfoGetConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/GetConnection',
    request,
    metadata || {},
    this.methodInfoGetConnection);
  }

  methodInfoUpdateConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse,
    (request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse.deserializeBinary
  );

  updateConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse>;

  updateConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse>;

  updateConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/UpdateConnection',
        request,
        metadata || {},
        this.methodInfoUpdateConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/UpdateConnection',
    request,
    metadata || {},
    this.methodInfoUpdateConnection);
  }

  methodInfoDeleteConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse,
    (request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse.deserializeBinary
  );

  deleteConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse>;

  deleteConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse>;

  deleteConnection(
    request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/DeleteConnection',
        request,
        metadata || {},
        this.methodInfoDeleteConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.connection.v1.ConnectionService/DeleteConnection',
    request,
    metadata || {},
    this.methodInfoDeleteConnection);
  }

}

