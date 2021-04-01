/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.archived.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
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

  methodInfoRecordObject = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordObjectRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordObject(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordObject(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordObject(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordObject',
        request,
        metadata || {},
        this.methodInfoRecordObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordObject',
    request,
    metadata || {},
    this.methodInfoRecordObject);
  }

  methodInfoGetObject = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectResponse.deserializeBinary
  );

  getObject(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectResponse>;

  getObject(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectResponse>;

  getObject(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.GetObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/GetObject',
        request,
        metadata || {},
        this.methodInfoGetObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/GetObject',
    request,
    metadata || {},
    this.methodInfoGetObject);
  }

  methodInfoListObjects = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectResponse.deserializeBinary
  );

  listObjects(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectResponse>;

  listObjects(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectResponse>;

  listObjects(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListObjects',
        request,
        metadata || {},
        this.methodInfoListObjects,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListObjects',
    request,
    metadata || {},
    this.methodInfoListObjects);
  }

  methodInfoDeleteObject = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.DeleteObjectRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteObject(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.DeleteObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteObject(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.DeleteObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteObject(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.DeleteObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/DeleteObject',
        request,
        metadata || {},
        this.methodInfoDeleteObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/DeleteObject',
    request,
    metadata || {},
    this.methodInfoDeleteObject);
  }

  methodInfoListDatasets = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetResponse.deserializeBinary
  );

  listDatasets(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetResponse>;

  listDatasets(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetResponse>;

  listDatasets(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListDatasetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListDatasets',
        request,
        metadata || {},
        this.methodInfoListDatasets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListDatasets',
    request,
    metadata || {},
    this.methodInfoListDatasets);
  }

  methodInfoListFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunResponse.deserializeBinary
  );

  listFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunResponse>;

  listFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunResponse>;

  listFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListFeaturePipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoListFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoListFeaturePipelineRun);
  }

  methodInfoListLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunResponse.deserializeBinary
  );

  listLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunResponse>;

  listLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunResponse>;

  listLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListLabelingPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoListLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoListLabelingPipelineRun);
  }

  methodInfoListRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunResponse.deserializeBinary
  );

  listRecipeRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunResponse>;

  listRecipeRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunResponse>;

  listRecipeRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListRecipeRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListRecipeRun',
        request,
        metadata || {},
        this.methodInfoListRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListRecipeRun',
    request,
    metadata || {},
    this.methodInfoListRecipeRun);
  }

  methodInfoListModelAutoBuilders = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderResponse.deserializeBinary
  );

  listModelAutoBuilders(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderResponse>;

  listModelAutoBuilders(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderResponse>;

  listModelAutoBuilders(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelAutoBuilderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListModelAutoBuilders',
        request,
        metadata || {},
        this.methodInfoListModelAutoBuilders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListModelAutoBuilders',
    request,
    metadata || {},
    this.methodInfoListModelAutoBuilders);
  }

  methodInfoListModels = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelResponse.deserializeBinary
  );

  listModels(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelResponse>;

  listModels(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelResponse>;

  listModels(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListModels',
        request,
        metadata || {},
        this.methodInfoListModels,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListModels',
    request,
    metadata || {},
    this.methodInfoListModels);
  }

  methodInfoListModelPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunResponse.deserializeBinary
  );

  listModelPipelineRuns(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunResponse>;

  listModelPipelineRuns(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunResponse>;

  listModelPipelineRuns(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListModelPipelineRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListModelPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListModelPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListModelPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListModelPipelineRuns);
  }

  methodInfoListNotebookRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunResponse.deserializeBinary
  );

  listNotebookRuns(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunResponse>;

  listNotebookRuns(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunResponse>;

  listNotebookRuns(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListNotebookRunResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListNotebookRuns',
        request,
        metadata || {},
        this.methodInfoListNotebookRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListNotebookRuns',
    request,
    metadata || {},
    this.methodInfoListNotebookRuns);
  }

  methodInfoListReports = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportResponse.deserializeBinary
  );

  listReports(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportResponse>;

  listReports(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportResponse>;

  listReports(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListReports',
        request,
        metadata || {},
        this.methodInfoListReports,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListReports',
    request,
    metadata || {},
    this.methodInfoListReports);
  }

  methodInfoListStudies = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyResponse.deserializeBinary
  );

  listStudies(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyResponse>;

  listStudies(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyResponse>;

  listStudies(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListStudyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListStudies',
        request,
        metadata || {},
        this.methodInfoListStudies,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListStudies',
    request,
    metadata || {},
    this.methodInfoListStudies);
  }

  methodInfoListPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionResponse.deserializeBinary
  );

  listPrediction(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionResponse>;

  listPrediction(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionResponse>;

  listPrediction(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListPredictionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListPrediction',
        request,
        metadata || {},
        this.methodInfoListPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListPrediction',
    request,
    metadata || {},
    this.methodInfoListPrediction);
  }

  methodInfoListCronPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsResponse,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsResponse.deserializeBinary
  );

  listCronPrediction(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsResponse>;

  listCronPrediction(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsResponse>;

  listCronPrediction(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.ListCronPredictionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListCronPrediction',
        request,
        metadata || {},
        this.methodInfoListCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/ListCronPrediction',
    request,
    metadata || {},
    this.methodInfoListCronPrediction);
  }

}

