/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.archived.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_archived_v1_archived_pb from '../../../../../../github.com/metaprov/modeldapi/services/archived/v1/archived_pb';


export class ArchivedServiceClient {
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

  methodInfoRecordModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse.deserializeBinary
  );

  recordModel(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse>;

  recordModel(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse>;

  recordModel(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordModel',
        request,
        metadata || {},
        this.methodInfoRecordModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordModel',
    request,
    metadata || {},
    this.methodInfoRecordModel);
  }

  methodInfoRecordStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse.deserializeBinary
  );

  recordStudy(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse>;

  recordStudy(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse>;

  recordStudy(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordStudy',
        request,
        metadata || {},
        this.methodInfoRecordStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordStudy',
    request,
    metadata || {},
    this.methodInfoRecordStudy);
  }

  methodInfoRecordDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse.deserializeBinary
  );

  recordDataset(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse>;

  recordDataset(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse>;

  recordDataset(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordDataset',
        request,
        metadata || {},
        this.methodInfoRecordDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordDataset',
    request,
    metadata || {},
    this.methodInfoRecordDataset);
  }

  methodInfoRecordPredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse.deserializeBinary
  );

  recordPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse>;

  recordPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse>;

  recordPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordPredictionPipeline',
        request,
        metadata || {},
        this.methodInfoRecordPredictionPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordPredictionPipeline',
    request,
    metadata || {},
    this.methodInfoRecordPredictionPipeline);
  }

  methodInfoRecordPredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse.deserializeBinary
  );

  recordPredictor(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse>;

  recordPredictor(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse>;

  recordPredictor(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordPredictor',
        request,
        metadata || {},
        this.methodInfoRecordPredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordPredictor',
    request,
    metadata || {},
    this.methodInfoRecordPredictor);
  }

  methodInfoRecordProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse.deserializeBinary
  );

  recordProduct(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse>;

  recordProduct(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse>;

  recordProduct(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordProduct',
        request,
        metadata || {},
        this.methodInfoRecordProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordProduct',
    request,
    metadata || {},
    this.methodInfoRecordProduct);
  }

  methodInfoRecordProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse.deserializeBinary
  );

  recordProductVersion(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse>;

  recordProductVersion(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse>;

  recordProductVersion(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordProductVersion',
        request,
        metadata || {},
        this.methodInfoRecordProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordProductVersion',
    request,
    metadata || {},
    this.methodInfoRecordProductVersion);
  }

  methodInfoRecordAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse.deserializeBinary
  );

  recordAccount(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse>;

  recordAccount(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse>;

  recordAccount(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordAccount',
        request,
        metadata || {},
        this.methodInfoRecordAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.archived.v1.ArchivedService/RecordAccount',
    request,
    metadata || {},
    this.methodInfoRecordAccount);
  }

}

