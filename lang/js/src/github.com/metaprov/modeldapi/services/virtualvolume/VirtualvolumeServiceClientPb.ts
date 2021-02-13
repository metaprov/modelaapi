/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.virtualvolume
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb from '../../../../../github.com/metaprov/modeldapi/services/virtualvolume/virtualvolume_pb';


export class VirtualVolumeServiceClient {
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

  methodInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeList,
    (request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeList.deserializeBinary
  );

  list(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeList>;

  list(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeList) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeList>;

  list(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeCreateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  create(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  create(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  create(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeGetResponse,
    (request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeGetResponse.deserializeBinary
  );

  get(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeGetResponse>;

  get(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeGetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeGetResponse>;

  get(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeUpdateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  delete(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  delete(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  delete(
    request: github_com_metaprov_modeldapi_services_virtualvolume_virtualvolume_pb.VirtualVolumeQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualvolume.VirtualVolumeService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

}

