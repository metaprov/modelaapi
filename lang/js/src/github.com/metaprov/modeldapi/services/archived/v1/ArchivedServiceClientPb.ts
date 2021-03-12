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

  methodInfoRecordAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordAccount(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordAccount(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordAccount(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordAccount',
        request,
        metadata || {},
        this.methodInfoRecordAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordAccount',
    request,
    metadata || {},
    this.methodInfoRecordAccount);
  }

  methodInfoRecordConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordConnectionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordConnection(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordConnection(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordConnection(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordConnection',
        request,
        metadata || {},
        this.methodInfoRecordConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordConnection',
    request,
    metadata || {},
    this.methodInfoRecordConnection);
  }

  methodInfoRecordLab = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordLab(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordLab(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordLab(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordLab',
        request,
        metadata || {},
        this.methodInfoRecordLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordLab',
    request,
    metadata || {},
    this.methodInfoRecordLab);
  }

  methodInfoRecordServingSite = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordServingSiteRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordServingSite(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordServingSiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordServingSite(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordServingSite(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordServingSiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordServingSite',
        request,
        metadata || {},
        this.methodInfoRecordServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordServingSite',
    request,
    metadata || {},
    this.methodInfoRecordServingSite);
  }

  methodInfoRecordLicense = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLicenseRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordLicense(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordLicense(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordLicense(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordLicense',
        request,
        metadata || {},
        this.methodInfoRecordLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordLicense',
    request,
    metadata || {},
    this.methodInfoRecordLicense);
  }

  methodInfoRecordNotifier = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotifierRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordNotifier(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordNotifier(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordNotifier(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordNotifier',
        request,
        metadata || {},
        this.methodInfoRecordNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordNotifier',
    request,
    metadata || {},
    this.methodInfoRecordNotifier);
  }

  methodInfoRecordVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordVirtualBucket(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordVirtualBucket(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordVirtualBucket(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordVirtualBucket',
        request,
        metadata || {},
        this.methodInfoRecordVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordVirtualBucket',
    request,
    metadata || {},
    this.methodInfoRecordVirtualBucket);
  }

  methodInfoRecordVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordVirtualCluster(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordVirtualCluster(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordVirtualCluster(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordVirtualCluster',
        request,
        metadata || {},
        this.methodInfoRecordVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordVirtualCluster',
    request,
    metadata || {},
    this.methodInfoRecordVirtualCluster);
  }

  methodInfoRecordVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordVirtualVolume(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordVirtualVolume(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordVirtualVolume(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordVirtualVolume',
        request,
        metadata || {},
        this.methodInfoRecordVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordVirtualVolume',
    request,
    metadata || {},
    this.methodInfoRecordVirtualVolume);
  }

  methodInfoRecordTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordTenantRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordTenant(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordTenant(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordTenant(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordTenant',
        request,
        metadata || {},
        this.methodInfoRecordTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordTenant',
    request,
    metadata || {},
    this.methodInfoRecordTenant);
  }

  methodInfoRecordDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordDataPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordDataPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordDataPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataPipeline',
        request,
        metadata || {},
        this.methodInfoRecordDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataPipeline',
    request,
    metadata || {},
    this.methodInfoRecordDataPipeline);
  }

  methodInfoRecordDataPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoRecordDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoRecordDataPipelineRun);
  }

  methodInfoRecordDataProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordDataProduct(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordDataProduct(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordDataProduct(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataProduct',
        request,
        metadata || {},
        this.methodInfoRecordDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataProduct',
    request,
    metadata || {},
    this.methodInfoRecordDataProduct);
  }

  methodInfoRecordDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordDataProductVersion(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordDataProductVersion(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordDataProductVersion(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataProductVersion',
        request,
        metadata || {},
        this.methodInfoRecordDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataProductVersion',
    request,
    metadata || {},
    this.methodInfoRecordDataProductVersion);
  }

  methodInfoRecordDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataSourceRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordDataSource(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordDataSource(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordDataSource(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataSource',
        request,
        metadata || {},
        this.methodInfoRecordDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataSource',
    request,
    metadata || {},
    this.methodInfoRecordDataSource);
  }

  methodInfoRecordDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordDataset(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordDataset(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordDataset(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataset',
        request,
        metadata || {},
        this.methodInfoRecordDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordDataset',
    request,
    metadata || {},
    this.methodInfoRecordDataset);
  }

  methodInfoRecordFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeatureRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordFeature(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordFeature(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordFeature(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordFeature',
        request,
        metadata || {},
        this.methodInfoRecordFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordFeature',
    request,
    metadata || {},
    this.methodInfoRecordFeature);
  }

  methodInfoRecordFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordFeaturePipeline',
        request,
        metadata || {},
        this.methodInfoRecordFeaturePipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordFeaturePipeline',
    request,
    metadata || {},
    this.methodInfoRecordFeaturePipeline);
  }

  methodInfoRecordFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoRecordFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoRecordFeaturePipelineRun);
  }

  methodInfoRecordFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturesetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordFeatureset(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordFeatureset(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordFeatureset(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordFeatureset',
        request,
        metadata || {},
        this.methodInfoRecordFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordFeatureset',
    request,
    metadata || {},
    this.methodInfoRecordFeatureset);
  }

  methodInfoRecordEntity = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordEntityRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordEntity(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordEntity(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordEntity(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordEntity',
        request,
        metadata || {},
        this.methodInfoRecordEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordEntity',
    request,
    metadata || {},
    this.methodInfoRecordEntity);
  }

  methodInfoRecordLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoRecordLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoRecordLabelingPipeline);
  }

  methodInfoRecordLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoRecordLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoRecordLabelingPipelineRun);
  }

  methodInfoRecordRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRecipeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordRecipe(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordRecipe(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordRecipe(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordRecipe',
        request,
        metadata || {},
        this.methodInfoRecordRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordRecipe',
    request,
    metadata || {},
    this.methodInfoRecordRecipe);
  }

  methodInfoRecordRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRecipeRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordRecipeRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordRecipeRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordRecipeRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordRecipeRun',
        request,
        metadata || {},
        this.methodInfoRecordRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordRecipeRun',
    request,
    metadata || {},
    this.methodInfoRecordRecipeRun);
  }

  methodInfoRecordModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordModel(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordModel(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordModel(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordModel',
        request,
        metadata || {},
        this.methodInfoRecordModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordModel',
    request,
    metadata || {},
    this.methodInfoRecordModel);
  }

  methodInfoRecordModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordModelPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordModelPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordModelPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordModelPipeline',
        request,
        metadata || {},
        this.methodInfoRecordModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordModelPipeline',
    request,
    metadata || {},
    this.methodInfoRecordModelPipeline);
  }

  methodInfoRecordNotebook = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotebookRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordNotebook(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordNotebook(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordNotebook(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordNotebook',
        request,
        metadata || {},
        this.methodInfoRecordNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordNotebook',
    request,
    metadata || {},
    this.methodInfoRecordNotebook);
  }

  methodInfoRecordNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotebookRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordNotebookRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordNotebookRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordNotebookRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordNotebookRun',
        request,
        metadata || {},
        this.methodInfoRecordNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordNotebookRun',
    request,
    metadata || {},
    this.methodInfoRecordNotebookRun);
  }

  methodInfoRecordReport = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordReportRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordReport(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordReport(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordReport(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordReport',
        request,
        metadata || {},
        this.methodInfoRecordReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordReport',
    request,
    metadata || {},
    this.methodInfoRecordReport);
  }

  methodInfoRecordStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordStudy(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordStudy(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordStudy(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordStudy',
        request,
        metadata || {},
        this.methodInfoRecordStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordStudy',
    request,
    metadata || {},
    this.methodInfoRecordStudy);
  }

  methodInfoRecordCurtain = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordCurtainRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordCurtain(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordCurtain(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordCurtain(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordCurtain',
        request,
        metadata || {},
        this.methodInfoRecordCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordCurtain',
    request,
    metadata || {},
    this.methodInfoRecordCurtain);
  }

  methodInfoRecordPredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordPredictor(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordPredictor(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordPredictor(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictor',
        request,
        metadata || {},
        this.methodInfoRecordPredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictor',
    request,
    metadata || {},
    this.methodInfoRecordPredictor);
  }

  methodInfoRecordPredictionPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordPredictionPipeline(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictionPipeline',
        request,
        metadata || {},
        this.methodInfoRecordPredictionPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictionPipeline',
    request,
    metadata || {},
    this.methodInfoRecordPredictionPipeline);
  }

  methodInfoRecordPredictionPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordPredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordPredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordPredictionPipelineRun(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictionPipelineRun',
        request,
        metadata || {},
        this.methodInfoRecordPredictionPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPredictionPipelineRun',
    request,
    metadata || {},
    this.methodInfoRecordPredictionPipelineRun);
  }

  methodInfoRecordConversation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordConversationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordConversation(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordConversationRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordConversation(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordConversation(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordConversation',
        request,
        metadata || {},
        this.methodInfoRecordConversation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordConversation',
    request,
    metadata || {},
    this.methodInfoRecordConversation);
  }

  methodInfoRecordPostmortem = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPostmortemRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordPostmortem(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPostmortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordPostmortem(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPostmortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordPostmortem(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPostmortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPostmortem',
        request,
        metadata || {},
        this.methodInfoRecordPostmortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordPostmortem',
    request,
    metadata || {},
    this.methodInfoRecordPostmortem);
  }

  methodInfoRecordRunbook = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRunbookRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  recordRunbook(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRunbookRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  recordRunbook(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  recordRunbook(
    request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordRunbook',
        request,
        metadata || {},
        this.methodInfoRecordRunbook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.archived.v1.ArchivedService/RecordRunbook',
    request,
    metadata || {},
    this.methodInfoRecordRunbook);
  }

}

