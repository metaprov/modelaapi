/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.virtualbucket.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb from '../../../../../../github.com/metaprov/modelaapi/services/virtualbucket/v1/virtualbucket_pb';


export class VirtualBucketServiceClient {
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

  methodInfoListVirtualBuckets = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/ListVirtualBuckets',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsRequest,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse,
    (request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse.deserializeBinary
  );

  listVirtualBuckets(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse>;

  listVirtualBuckets(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse>;

  listVirtualBuckets(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/ListVirtualBuckets',
        request,
        metadata || {},
        this.methodInfoListVirtualBuckets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/ListVirtualBuckets',
    request,
    metadata || {},
    this.methodInfoListVirtualBuckets);
  }

  methodInfoCreateVirtualBucket = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/CreateVirtualBucket',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketRequest,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse,
    (request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse.deserializeBinary
  );

  createVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse>;

  createVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse>;

  createVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/CreateVirtualBucket',
        request,
        metadata || {},
        this.methodInfoCreateVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/CreateVirtualBucket',
    request,
    metadata || {},
    this.methodInfoCreateVirtualBucket);
  }

  methodInfoGetVirtualBucket = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/GetVirtualBucket',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketRequest,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse,
    (request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse.deserializeBinary
  );

  getVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse>;

  getVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse>;

  getVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/GetVirtualBucket',
        request,
        metadata || {},
        this.methodInfoGetVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/GetVirtualBucket',
    request,
    metadata || {},
    this.methodInfoGetVirtualBucket);
  }

  methodInfoUpdateVirtualBucket = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/UpdateVirtualBucket',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketRequest,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse,
    (request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse.deserializeBinary
  );

  updateVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse>;

  updateVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse>;

  updateVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/UpdateVirtualBucket',
        request,
        metadata || {},
        this.methodInfoUpdateVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/UpdateVirtualBucket',
    request,
    metadata || {},
    this.methodInfoUpdateVirtualBucket);
  }

  methodInfoDeleteVirtualBucket = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/DeleteVirtualBucket',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketRequest,
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse,
    (request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse.deserializeBinary
  );

  deleteVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse>;

  deleteVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse>;

  deleteVirtualBucket(
    request: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/DeleteVirtualBucket',
        request,
        metadata || {},
        this.methodInfoDeleteVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/DeleteVirtualBucket',
    request,
    metadata || {},
    this.methodInfoDeleteVirtualBucket);
  }

}

