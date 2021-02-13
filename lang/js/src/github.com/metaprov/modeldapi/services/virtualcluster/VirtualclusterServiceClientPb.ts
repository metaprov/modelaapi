/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.virtualcluster
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb from '../../../../../github.com/metaprov/modeldapi/services/virtualcluster/virtualcluster_pb';


export class VirtualClusterServiceClient {
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

  methodInfoListVirtualClusters = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersResponse,
    (request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersResponse.deserializeBinary
  );

  listVirtualClusters(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersResponse>;

  listVirtualClusters(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersResponse>;

  listVirtualClusters(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.ListVirtualClustersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/ListVirtualClusters',
        request,
        metadata || {},
        this.methodInfoListVirtualClusters,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/ListVirtualClusters',
    request,
    metadata || {},
    this.methodInfoListVirtualClusters);
  }

  methodInfoCreateVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterResponse,
    (request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterResponse.deserializeBinary
  );

  createVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterResponse>;

  createVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterResponse>;

  createVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.CreateVirtualClusterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/CreateVirtualCluster',
        request,
        metadata || {},
        this.methodInfoCreateVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/CreateVirtualCluster',
    request,
    metadata || {},
    this.methodInfoCreateVirtualCluster);
  }

  methodInfoGetVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterResponse,
    (request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterResponse.deserializeBinary
  );

  getVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterResponse>;

  getVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterResponse>;

  getVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.GetVirtualClusterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/GetVirtualCluster',
        request,
        metadata || {},
        this.methodInfoGetVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/GetVirtualCluster',
    request,
    metadata || {},
    this.methodInfoGetVirtualCluster);
  }

  methodInfoUpdateVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterResponse,
    (request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterResponse.deserializeBinary
  );

  updateVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterResponse>;

  updateVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterResponse>;

  updateVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.UpdateVirtualClusterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/UpdateVirtualCluster',
        request,
        metadata || {},
        this.methodInfoUpdateVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/UpdateVirtualCluster',
    request,
    metadata || {},
    this.methodInfoUpdateVirtualCluster);
  }

  methodInfoDeleteVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterResponse,
    (request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterResponse.deserializeBinary
  );

  deleteVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterResponse>;

  deleteVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterResponse>;

  deleteVirtualCluster(
    request: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_virtualcluster_virtualcluster_pb.DeleteVirtualClusterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/DeleteVirtualCluster',
        request,
        metadata || {},
        this.methodInfoDeleteVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.virtualcluster.VirtualClusterService/DeleteVirtualCluster',
    request,
    metadata || {},
    this.methodInfoDeleteVirtualCluster);
  }

}

