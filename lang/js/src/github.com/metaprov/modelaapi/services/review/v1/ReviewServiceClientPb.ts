/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.review.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_review_v1_review_pb from '../../../../../../github.com/metaprov/modelaapi/services/review/v1/review_pb';


export class ReviewServiceClient {
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

  methodInfoListReviews = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/ListReviews',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewRequest,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewResponse,
    (request: github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewResponse.deserializeBinary
  );

  listReviews(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewResponse>;

  listReviews(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewResponse>;

  listReviews(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.ListReviewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/ListReviews',
        request,
        metadata || {},
        this.methodInfoListReviews,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/ListReviews',
    request,
    metadata || {},
    this.methodInfoListReviews);
  }

  methodInfoCreateReview = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/CreateReview',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewRequest,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewResponse,
    (request: github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewResponse.deserializeBinary
  );

  createReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewResponse>;

  createReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewResponse>;

  createReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.CreateReviewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/CreateReview',
        request,
        metadata || {},
        this.methodInfoCreateReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/CreateReview',
    request,
    metadata || {},
    this.methodInfoCreateReview);
  }

  methodInfoGetReview = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/GetReview',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewRequest,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewResponse,
    (request: github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewResponse.deserializeBinary
  );

  getReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewResponse>;

  getReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewResponse>;

  getReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.GetReviewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/GetReview',
        request,
        metadata || {},
        this.methodInfoGetReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/GetReview',
    request,
    metadata || {},
    this.methodInfoGetReview);
  }

  methodInfoUpdateReview = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/UpdateReview',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewRequest,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewResponse,
    (request: github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewResponse.deserializeBinary
  );

  updateReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewResponse>;

  updateReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewResponse>;

  updateReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.UpdateReviewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/UpdateReview',
        request,
        metadata || {},
        this.methodInfoUpdateReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/UpdateReview',
    request,
    metadata || {},
    this.methodInfoUpdateReview);
  }

  methodInfoDeleteReview = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/DeleteReview',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewRequest,
    github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewResponse,
    (request: github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewResponse.deserializeBinary
  );

  deleteReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewResponse>;

  deleteReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewResponse>;

  deleteReview(
    request: github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_review_v1_review_pb.DeleteReviewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/DeleteReview',
        request,
        metadata || {},
        this.methodInfoDeleteReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.review.v1.ReviewService/DeleteReview',
    request,
    metadata || {},
    this.methodInfoDeleteReview);
  }

}

