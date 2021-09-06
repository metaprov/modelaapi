/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.virtualvolume.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb from '../../../../../../github.com/metaprov/modelaapi/services/virtualvolume/v1/virtualvolume_pb';


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

  methodInfoListVirtualVolumes = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse,
    (request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse.deserializeBinary
  );

  listVirtualVolumes(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse>;

  listVirtualVolumes(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse>;

  listVirtualVolumes(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.ListVirtualVolumesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/ListVirtualVolumes',
        request,
        metadata || {},
        this.methodInfoListVirtualVolumes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/ListVirtualVolumes',
    request,
    metadata || {},
    this.methodInfoListVirtualVolumes);
  }

  methodInfoCreateVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse,
    (request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse.deserializeBinary
  );

  createVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse>;

  createVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse>;

  createVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.CreateVirtualVolumeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/CreateVirtualVolume',
        request,
        metadata || {},
        this.methodInfoCreateVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/CreateVirtualVolume',
    request,
    metadata || {},
    this.methodInfoCreateVirtualVolume);
  }

  methodInfoGetVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse,
    (request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse.deserializeBinary
  );

  getVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse>;

  getVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse>;

  getVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.GetVirtualVolumeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/GetVirtualVolume',
        request,
        metadata || {},
        this.methodInfoGetVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/GetVirtualVolume',
    request,
    metadata || {},
    this.methodInfoGetVirtualVolume);
  }

  methodInfoUpdateVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse,
    (request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse.deserializeBinary
  );

  updateVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse>;

  updateVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse>;

  updateVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.UpdateVirtualVolumeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/UpdateVirtualVolume',
        request,
        metadata || {},
        this.methodInfoUpdateVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/UpdateVirtualVolume',
    request,
    metadata || {},
    this.methodInfoUpdateVirtualVolume);
  }

  methodInfoDeleteVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse,
    (request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse.deserializeBinary
  );

  deleteVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse>;

  deleteVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse>;

  deleteVirtualVolume(
    request: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_virtualvolume_v1_virtualvolume_pb.DeleteVirtualVolumeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/DeleteVirtualVolume',
        request,
        metadata || {},
        this.methodInfoDeleteVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService/DeleteVirtualVolume',
    request,
    metadata || {},
    this.methodInfoDeleteVirtualVolume);
  }

}

