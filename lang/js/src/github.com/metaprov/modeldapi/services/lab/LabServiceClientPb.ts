/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.lab
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_lab_lab_pb from '../../../../../github.com/metaprov/modeldapi/services/lab/lab_pb';


export class LabServiceClient {
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

  methodInfoListLabs = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsResponse,
    (request: github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsResponse.deserializeBinary
  );

  listLabs(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsResponse>;

  listLabs(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsResponse>;

  listLabs(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.ListLabsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.lab.LabService/ListLabs',
        request,
        metadata || {},
        this.methodInfoListLabs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.lab.LabService/ListLabs',
    request,
    metadata || {},
    this.methodInfoListLabs);
  }

  methodInfoCreateLab = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabResponse,
    (request: github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabResponse.deserializeBinary
  );

  createLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabResponse>;

  createLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabResponse>;

  createLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.CreateLabResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.lab.LabService/CreateLab',
        request,
        metadata || {},
        this.methodInfoCreateLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.lab.LabService/CreateLab',
    request,
    metadata || {},
    this.methodInfoCreateLab);
  }

  methodInfoGetLab = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabResponse,
    (request: github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabResponse.deserializeBinary
  );

  getLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabResponse>;

  getLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabResponse>;

  getLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.GetLabResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.lab.LabService/GetLab',
        request,
        metadata || {},
        this.methodInfoGetLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.lab.LabService/GetLab',
    request,
    metadata || {},
    this.methodInfoGetLab);
  }

  methodInfoUpdateLab = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabResponse,
    (request: github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabResponse.deserializeBinary
  );

  updateLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabResponse>;

  updateLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabResponse>;

  updateLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.UpdateLabResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.lab.LabService/UpdateLab',
        request,
        metadata || {},
        this.methodInfoUpdateLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.lab.LabService/UpdateLab',
    request,
    metadata || {},
    this.methodInfoUpdateLab);
  }

  methodInfoDeleteLab = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabResponse,
    (request: github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabResponse.deserializeBinary
  );

  deleteLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabResponse>;

  deleteLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabResponse>;

  deleteLab(
    request: github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_lab_lab_pb.DeleteLabResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.lab.LabService/DeleteLab',
        request,
        metadata || {},
        this.methodInfoDeleteLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.lab.LabService/DeleteLab',
    request,
    metadata || {},
    this.methodInfoDeleteLab);
  }

}

