/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.featuregroup.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb from '../../../../../../github.com/metaprov/modelaapi/services/featuregroup/v1/featuregroup_pb';


export class FeatureGroupServiceClient {
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

  methodInfoListFeatureGroups = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/ListFeatureGroups',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupRequest,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupResponse,
    (request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupResponse.deserializeBinary
  );

  listFeatureGroups(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupResponse>;

  listFeatureGroups(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupResponse>;

  listFeatureGroups(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ListFeatureGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/ListFeatureGroups',
        request,
        metadata || {},
        this.methodInfoListFeatureGroups,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/ListFeatureGroups',
    request,
    metadata || {},
    this.methodInfoListFeatureGroups);
  }

  methodInfoCreateFeatureGroup = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/CreateFeatureGroup',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupRequest,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupResponse,
    (request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupResponse.deserializeBinary
  );

  createFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupResponse>;

  createFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupResponse>;

  createFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.CreateFeatureGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/CreateFeatureGroup',
        request,
        metadata || {},
        this.methodInfoCreateFeatureGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/CreateFeatureGroup',
    request,
    metadata || {},
    this.methodInfoCreateFeatureGroup);
  }

  methodInfoGetFeatureGroup = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/GetFeatureGroup',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupRequest,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupResponse,
    (request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupResponse.deserializeBinary
  );

  getFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupResponse>;

  getFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupResponse>;

  getFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.GetFeatureGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/GetFeatureGroup',
        request,
        metadata || {},
        this.methodInfoGetFeatureGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/GetFeatureGroup',
    request,
    metadata || {},
    this.methodInfoGetFeatureGroup);
  }

  methodInfoUpdateFeatureGroup = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/UpdateFeatureGroup',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupRequest,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupResponse,
    (request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupResponse.deserializeBinary
  );

  updateFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupResponse>;

  updateFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupResponse>;

  updateFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.UpdateFeatureGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/UpdateFeatureGroup',
        request,
        metadata || {},
        this.methodInfoUpdateFeatureGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/UpdateFeatureGroup',
    request,
    metadata || {},
    this.methodInfoUpdateFeatureGroup);
  }

  methodInfoDeleteFeatureGroup = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/DeleteFeatureGroup',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupRequest,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupResponse,
    (request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupResponse.deserializeBinary
  );

  deleteFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupResponse>;

  deleteFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupResponse>;

  deleteFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.DeleteFeatureGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/DeleteFeatureGroup',
        request,
        metadata || {},
        this.methodInfoDeleteFeatureGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/DeleteFeatureGroup',
    request,
    metadata || {},
    this.methodInfoDeleteFeatureGroup);
  }

  methodInfoPauseFeatureGroup = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/PauseFeatureGroup',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupRequest,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupResponse,
    (request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupResponse.deserializeBinary
  );

  pauseFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupResponse>;

  pauseFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupResponse>;

  pauseFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.PauseFeatureGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/PauseFeatureGroup',
        request,
        metadata || {},
        this.methodInfoPauseFeatureGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/PauseFeatureGroup',
    request,
    metadata || {},
    this.methodInfoPauseFeatureGroup);
  }

  methodInfoResumeFeatureGroup = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/ResumeFeatureGroup',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupRequest,
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupResponse,
    (request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupResponse.deserializeBinary
  );

  resumeFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupResponse>;

  resumeFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupResponse>;

  resumeFeatureGroup(
    request: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_featuregroup_v1_featuregroup_pb.ResumeFeatureGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/ResumeFeatureGroup',
        request,
        metadata || {},
        this.methodInfoResumeFeatureGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.featuregroup.v1.FeatureGroupService/ResumeFeatureGroup',
    request,
    metadata || {},
    this.methodInfoResumeFeatureGroup);
  }

}

