/**
 * @fileoverview gRPC-Web generated client stub for grpc.health.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb from '../../../../../../../github.com/metaprov/modelaapi/services/grpc/health/v1/health_pb';


export class HealthClient {
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

  methodInfoCheck = new grpcWeb.MethodDescriptor(
    '/grpc.health.v1.Health/Check',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckRequest,
    github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckResponse,
    (request: github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckResponse.deserializeBinary
  );

  check(
    request: github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckResponse>;

  check(
    request: github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckResponse>;

  check(
    request: github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_grpc_health_v1_health_pb.HealthCheckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc.health.v1.Health/Check',
        request,
        metadata || {},
        this.methodInfoCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc.health.v1.Health/Check',
    request,
    metadata || {},
    this.methodInfoCheck);
  }

}

