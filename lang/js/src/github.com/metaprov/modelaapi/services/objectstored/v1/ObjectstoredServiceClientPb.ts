/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.objectstored.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb from '../../../../../../github.com/metaprov/modelaapi/services/objectstored/v1/objectstored_pb';


export class ObjectstoreServiceClient {
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

  methodInfoIngest = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse,
    (request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse.deserializeBinary
  );

  ingest(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;

  ingest(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;

  ingest(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.objectstored.v1.ObjectstoreService/Ingest',
        request,
        metadata || {},
        this.methodInfoIngest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.objectstored.v1.ObjectstoreService/Ingest',
    request,
    metadata || {},
    this.methodInfoIngest);
  }

  methodInfoArchive = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse,
    (request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse.deserializeBinary
  );

  archive(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;

  archive(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;

  archive(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.objectstored.v1.ObjectstoreService/Archive',
        request,
        metadata || {},
        this.methodInfoArchive,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.objectstored.v1.ObjectstoreService/Archive',
    request,
    metadata || {},
    this.methodInfoArchive);
  }

  methodInfoRecover = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse,
    (request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse.deserializeBinary
  );

  recover(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;

  recover(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;

  recover(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.objectstored.v1.ObjectstoreService/Recover',
        request,
        metadata || {},
        this.methodInfoRecover,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.objectstored.v1.ObjectstoreService/Recover',
    request,
    metadata || {},
    this.methodInfoRecover);
  }

  methodInfoExistInVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse,
    (request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse.deserializeBinary
  );

  existInVirtualBucket(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse>;

  existInVirtualBucket(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse>;

  existInVirtualBucket(
    request: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.objectstored.v1.ObjectstoreService/ExistInVirtualBucket',
        request,
        metadata || {},
        this.methodInfoExistInVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.objectstored.v1.ObjectstoreService/ExistInVirtualBucket',
    request,
    metadata || {},
    this.methodInfoExistInVirtualBucket);
  }

}

