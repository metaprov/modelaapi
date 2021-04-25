/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.commit.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_commit_v1_commit_pb from '../../../../../../github.com/metaprov/modeldapi/services/commit/v1/commit_pb';


export class CommitServiceClient {
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

  methodInfoListCommits = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsResponse,
    (request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsResponse.deserializeBinary
  );

  listCommits(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsResponse>;

  listCommits(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsResponse>;

  listCommits(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.ListCommitsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/ListCommits',
        request,
        metadata || {},
        this.methodInfoListCommits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/ListCommits',
    request,
    metadata || {},
    this.methodInfoListCommits);
  }

  methodInfoCreateCommit = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitResponse,
    (request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitResponse.deserializeBinary
  );

  createCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitResponse>;

  createCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitResponse>;

  createCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.CreateCommitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/CreateCommit',
        request,
        metadata || {},
        this.methodInfoCreateCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/CreateCommit',
    request,
    metadata || {},
    this.methodInfoCreateCommit);
  }

  methodInfoGetCommit = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitResponse,
    (request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitResponse.deserializeBinary
  );

  getCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitResponse>;

  getCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitResponse>;

  getCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.GetCommitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/GetCommit',
        request,
        metadata || {},
        this.methodInfoGetCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/GetCommit',
    request,
    metadata || {},
    this.methodInfoGetCommit);
  }

  methodInfoUpdateCommit = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitResponse,
    (request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitResponse.deserializeBinary
  );

  updateCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitResponse>;

  updateCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitResponse>;

  updateCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.UpdateCommitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/UpdateCommit',
        request,
        metadata || {},
        this.methodInfoUpdateCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/UpdateCommit',
    request,
    metadata || {},
    this.methodInfoUpdateCommit);
  }

  methodInfoDeleteCommit = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitResponse,
    (request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitResponse.deserializeBinary
  );

  deleteCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitResponse>;

  deleteCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitResponse>;

  deleteCommit(
    request: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_commit_v1_commit_pb.DeleteCommitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/DeleteCommit',
        request,
        metadata || {},
        this.methodInfoDeleteCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.commit.v1.CommitService/DeleteCommit',
    request,
    metadata || {},
    this.methodInfoDeleteCommit);
  }

}

