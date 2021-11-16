/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.attachment.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb from '../../../../../../github.com/metaprov/modelaapi/services/attachment/v1/attachment_pb';


export class AttachmentServiceClient {
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

  methodInfoListAttachments = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/ListAttachments',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsRequest,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsResponse,
    (request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsResponse.deserializeBinary
  );

  listAttachments(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsResponse>;

  listAttachments(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsResponse>;

  listAttachments(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.ListAttachmentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/ListAttachments',
        request,
        metadata || {},
        this.methodInfoListAttachments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/ListAttachments',
    request,
    metadata || {},
    this.methodInfoListAttachments);
  }

  methodInfoCreateAttachment = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/CreateAttachment',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentRequest,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentResponse,
    (request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentResponse.deserializeBinary
  );

  createAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentResponse>;

  createAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentResponse>;

  createAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.CreateAttachmentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/CreateAttachment',
        request,
        metadata || {},
        this.methodInfoCreateAttachment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/CreateAttachment',
    request,
    metadata || {},
    this.methodInfoCreateAttachment);
  }

  methodInfoGetAttachment = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/GetAttachment',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentRequest,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentResponse,
    (request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentResponse.deserializeBinary
  );

  getAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentResponse>;

  getAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentResponse>;

  getAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.GetAttachmentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/GetAttachment',
        request,
        metadata || {},
        this.methodInfoGetAttachment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/GetAttachment',
    request,
    metadata || {},
    this.methodInfoGetAttachment);
  }

  methodInfoUpdateAttachment = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/UpdateAttachment',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentRequest,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentResponse,
    (request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentResponse.deserializeBinary
  );

  updateAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentResponse>;

  updateAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentResponse>;

  updateAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.UpdateAttachmentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/UpdateAttachment',
        request,
        metadata || {},
        this.methodInfoUpdateAttachment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/UpdateAttachment',
    request,
    metadata || {},
    this.methodInfoUpdateAttachment);
  }

  methodInfoDeleteAttachment = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/DeleteAttachment',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentRequest,
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentResponse,
    (request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentResponse.deserializeBinary
  );

  deleteAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentResponse>;

  deleteAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentResponse>;

  deleteAttachment(
    request: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_attachment_v1_attachment_pb.DeleteAttachmentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/DeleteAttachment',
        request,
        metadata || {},
        this.methodInfoDeleteAttachment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.attachment.v1.AttachmentService/DeleteAttachment',
    request,
    metadata || {},
    this.methodInfoDeleteAttachment);
  }

}

