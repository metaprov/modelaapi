/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.alert.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: github.com/metaprov/modelaapi/services/alert/v1/alert.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_alert_v1_alert_pb from '../../../../../../github.com/metaprov/modelaapi/services/alert/v1/alert_pb';


export class AlertServiceClient {
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
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListAlerts = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/ListAlerts',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsRequest,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsResponse,
    (request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsResponse.deserializeBinary
  );

  listAlerts(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsResponse>;

  listAlerts(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsResponse>;

  listAlerts(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.ListAlertsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/ListAlerts',
        request,
        metadata || {},
        this.methodDescriptorListAlerts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/ListAlerts',
    request,
    metadata || {},
    this.methodDescriptorListAlerts);
  }

  methodDescriptorCreateAlert = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/CreateAlert',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertRequest,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertResponse,
    (request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertResponse.deserializeBinary
  );

  createAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertResponse>;

  createAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertResponse>;

  createAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.CreateAlertResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/CreateAlert',
        request,
        metadata || {},
        this.methodDescriptorCreateAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/CreateAlert',
    request,
    metadata || {},
    this.methodDescriptorCreateAlert);
  }

  methodDescriptorGetAlert = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/GetAlert',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertRequest,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertResponse,
    (request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertResponse.deserializeBinary
  );

  getAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertResponse>;

  getAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertResponse>;

  getAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.GetAlertResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/GetAlert',
        request,
        metadata || {},
        this.methodDescriptorGetAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/GetAlert',
    request,
    metadata || {},
    this.methodDescriptorGetAlert);
  }

  methodDescriptorUpdateAlert = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/UpdateAlert',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertRequest,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertResponse,
    (request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertResponse.deserializeBinary
  );

  updateAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertResponse>;

  updateAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertResponse>;

  updateAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.UpdateAlertResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/UpdateAlert',
        request,
        metadata || {},
        this.methodDescriptorUpdateAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/UpdateAlert',
    request,
    metadata || {},
    this.methodDescriptorUpdateAlert);
  }

  methodDescriptorDeleteAlert = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/DeleteAlert',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertRequest,
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertResponse,
    (request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertResponse.deserializeBinary
  );

  deleteAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertResponse>;

  deleteAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertResponse>;

  deleteAlert(
    request: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_alert_v1_alert_pb.DeleteAlertResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/DeleteAlert',
        request,
        metadata || {},
        this.methodDescriptorDeleteAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.alert.v1.AlertService/DeleteAlert',
    request,
    metadata || {},
    this.methodDescriptorDeleteAlert);
  }

}

