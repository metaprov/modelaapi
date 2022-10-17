/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.dbproxyd.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb from '../../../../../../github.com/metaprov/modelaapi/services/dbproxyd/v1/dbproxyd_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class DatabaseProxyServiceClient {
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

  methodInfoListAccounts = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListAccounts',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse.deserializeBinary
  );

  listAccounts(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse>;

  listAccounts(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse>;

  listAccounts(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListAccounts',
        request,
        metadata || {},
        this.methodInfoListAccounts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListAccounts',
    request,
    metadata || {},
    this.methodInfoListAccounts);
  }

  methodInfoGetAccount = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetAccount',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAccountRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.deserializeBinary
  );

  getAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  getAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  getAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetAccount',
        request,
        metadata || {},
        this.methodInfoGetAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetAccount',
    request,
    metadata || {},
    this.methodInfoGetAccount);
  }

  methodInfoCreateAccount = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateAccount',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAccountRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.deserializeBinary
  );

  createAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  createAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  createAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateAccount',
        request,
        metadata || {},
        this.methodInfoCreateAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateAccount',
    request,
    metadata || {},
    this.methodInfoCreateAccount);
  }

  methodInfoUpdateAccount = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAccount',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAccountRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.deserializeBinary
  );

  updateAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  updateAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  updateAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAccount',
        request,
        metadata || {},
        this.methodInfoUpdateAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAccount',
    request,
    metadata || {},
    this.methodInfoUpdateAccount);
  }

  methodInfoDeleteAccount = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAccount',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAccountRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAccountRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteAccount(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAccount',
        request,
        metadata || {},
        this.methodInfoDeleteAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAccount',
    request,
    metadata || {},
    this.methodInfoDeleteAccount);
  }

  methodInfoListAlerts = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListAlerts',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse.deserializeBinary
  );

  listAlerts(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse>;

  listAlerts(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse>;

  listAlerts(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListAlerts',
        request,
        metadata || {},
        this.methodInfoListAlerts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListAlerts',
    request,
    metadata || {},
    this.methodInfoListAlerts);
  }

  methodInfoGetAlert = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetAlert',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAlertRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.deserializeBinary
  );

  getAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  getAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  getAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetAlert',
        request,
        metadata || {},
        this.methodInfoGetAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetAlert',
    request,
    metadata || {},
    this.methodInfoGetAlert);
  }

  methodInfoCreateAlert = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateAlert',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAlertRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.deserializeBinary
  );

  createAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  createAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  createAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateAlert',
        request,
        metadata || {},
        this.methodInfoCreateAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateAlert',
    request,
    metadata || {},
    this.methodInfoCreateAlert);
  }

  methodInfoUpdateAlert = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAlert',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAlertRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.deserializeBinary
  );

  updateAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  updateAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  updateAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAlert',
        request,
        metadata || {},
        this.methodInfoUpdateAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAlert',
    request,
    metadata || {},
    this.methodInfoUpdateAlert);
  }

  methodInfoDeleteAlert = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAlert',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAlertRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAlertRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteAlert(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAlert',
        request,
        metadata || {},
        this.methodInfoDeleteAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAlert',
    request,
    metadata || {},
    this.methodInfoDeleteAlert);
  }

  methodInfoListTodos = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListTodos',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse.deserializeBinary
  );

  listTodos(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse>;

  listTodos(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse>;

  listTodos(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListTodos',
        request,
        metadata || {},
        this.methodInfoListTodos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListTodos',
    request,
    metadata || {},
    this.methodInfoListTodos);
  }

  methodInfoGetTodo = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetTodo',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTodoRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.deserializeBinary
  );

  getTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  getTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  getTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetTodo',
        request,
        metadata || {},
        this.methodInfoGetTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetTodo',
    request,
    metadata || {},
    this.methodInfoGetTodo);
  }

  methodInfoCreateTodo = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateTodo',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTodoRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.deserializeBinary
  );

  createTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  createTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  createTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateTodo',
        request,
        metadata || {},
        this.methodInfoCreateTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateTodo',
    request,
    metadata || {},
    this.methodInfoCreateTodo);
  }

  methodInfoUpdateTodo = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTodo',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTodoRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.deserializeBinary
  );

  updateTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  updateTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  updateTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTodo',
        request,
        metadata || {},
        this.methodInfoUpdateTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTodo',
    request,
    metadata || {},
    this.methodInfoUpdateTodo);
  }

  methodInfoDeleteTodo = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTodo',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTodoRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTodoRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteTodo(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTodo',
        request,
        metadata || {},
        this.methodInfoDeleteTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTodo',
    request,
    metadata || {},
    this.methodInfoDeleteTodo);
  }

  methodInfoListMeetings = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListMeetings',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsResponse.deserializeBinary
  );

  listMeetings(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsResponse>;

  listMeetings(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsResponse>;

  listMeetings(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListMeetingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListMeetings',
        request,
        metadata || {},
        this.methodInfoListMeetings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListMeetings',
    request,
    metadata || {},
    this.methodInfoListMeetings);
  }

  methodInfoGetMeeting = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetMeeting',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetMeetingRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetMeetingRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting.deserializeBinary
  );

  getMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetMeetingRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting>;

  getMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting>;

  getMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetMeeting',
        request,
        metadata || {},
        this.methodInfoGetMeeting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetMeeting',
    request,
    metadata || {},
    this.methodInfoGetMeeting);
  }

  methodInfoCreateMeeting = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateMeeting',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateMeetingRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateMeetingRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting.deserializeBinary
  );

  createMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateMeetingRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting>;

  createMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting>;

  createMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateMeeting',
        request,
        metadata || {},
        this.methodInfoCreateMeeting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateMeeting',
    request,
    metadata || {},
    this.methodInfoCreateMeeting);
  }

  methodInfoUpdateMeeting = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateMeeting',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateMeetingRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateMeetingRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting.deserializeBinary
  );

  updateMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateMeetingRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting>;

  updateMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting>;

  updateMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateMeeting',
        request,
        metadata || {},
        this.methodInfoUpdateMeeting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateMeeting',
    request,
    metadata || {},
    this.methodInfoUpdateMeeting);
  }

  methodInfoDeleteMeeting = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteMeeting',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteMeetingRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteMeetingRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteMeetingRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteMeeting(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteMeeting',
        request,
        metadata || {},
        this.methodInfoDeleteMeeting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteMeeting',
    request,
    metadata || {},
    this.methodInfoDeleteMeeting);
  }

  methodInfoListAttachments = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListAttachments',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsResponse.deserializeBinary
  );

  listAttachments(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsResponse>;

  listAttachments(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsResponse>;

  listAttachments(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListAttachmentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListAttachments',
        request,
        metadata || {},
        this.methodInfoListAttachments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListAttachments',
    request,
    metadata || {},
    this.methodInfoListAttachments);
  }

  methodInfoGetAttachment = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetAttachment',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAttachmentRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAttachmentRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.deserializeBinary
  );

  getAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAttachmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment>;

  getAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment>;

  getAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetAttachment',
        request,
        metadata || {},
        this.methodInfoGetAttachment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetAttachment',
    request,
    metadata || {},
    this.methodInfoGetAttachment);
  }

  methodInfoCreateAttachment = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateAttachment',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAttachmentRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAttachmentRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.deserializeBinary
  );

  createAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAttachmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment>;

  createAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment>;

  createAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateAttachment',
        request,
        metadata || {},
        this.methodInfoCreateAttachment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateAttachment',
    request,
    metadata || {},
    this.methodInfoCreateAttachment);
  }

  methodInfoUpdateAttachment = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAttachment',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAttachmentRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAttachmentRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.deserializeBinary
  );

  updateAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAttachmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment>;

  updateAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment>;

  updateAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAttachment',
        request,
        metadata || {},
        this.methodInfoUpdateAttachment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAttachment',
    request,
    metadata || {},
    this.methodInfoUpdateAttachment);
  }

  methodInfoDeleteAttachment = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAttachment',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAttachmentRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAttachmentRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAttachmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteAttachment(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAttachmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAttachment',
        request,
        metadata || {},
        this.methodInfoDeleteAttachment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAttachment',
    request,
    metadata || {},
    this.methodInfoDeleteAttachment);
  }

  methodInfoListCommits = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCommits',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse.deserializeBinary
  );

  listCommits(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse>;

  listCommits(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse>;

  listCommits(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCommits',
        request,
        metadata || {},
        this.methodInfoListCommits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCommits',
    request,
    metadata || {},
    this.methodInfoListCommits);
  }

  methodInfoGetCommit = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCommit',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCommitRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.deserializeBinary
  );

  getCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  getCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  getCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCommit',
        request,
        metadata || {},
        this.methodInfoGetCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCommit',
    request,
    metadata || {},
    this.methodInfoGetCommit);
  }

  methodInfoCreateCommit = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCommit',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCommitRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.deserializeBinary
  );

  createCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  createCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  createCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCommit',
        request,
        metadata || {},
        this.methodInfoCreateCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCommit',
    request,
    metadata || {},
    this.methodInfoCreateCommit);
  }

  methodInfoUpdateCommit = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCommit',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCommitRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.deserializeBinary
  );

  updateCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  updateCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  updateCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCommit',
        request,
        metadata || {},
        this.methodInfoUpdateCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCommit',
    request,
    metadata || {},
    this.methodInfoUpdateCommit);
  }

  methodInfoDeleteCommit = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCommit',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCommitRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCommitRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteCommit(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCommit',
        request,
        metadata || {},
        this.methodInfoDeleteCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCommit',
    request,
    metadata || {},
    this.methodInfoDeleteCommit);
  }

  methodInfoListApiTokens = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListApiTokens',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse.deserializeBinary
  );

  listApiTokens(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse>;

  listApiTokens(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse>;

  listApiTokens(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListApiTokens',
        request,
        metadata || {},
        this.methodInfoListApiTokens,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListApiTokens',
    request,
    metadata || {},
    this.methodInfoListApiTokens);
  }

  methodInfoGetApiToken = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetApiToken',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetApiTokenRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.deserializeBinary
  );

  getApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  getApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  getApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetApiToken',
        request,
        metadata || {},
        this.methodInfoGetApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetApiToken',
    request,
    metadata || {},
    this.methodInfoGetApiToken);
  }

  methodInfoCreateApiToken = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateApiToken',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateApiTokenRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.deserializeBinary
  );

  createApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  createApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  createApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateApiToken',
        request,
        metadata || {},
        this.methodInfoCreateApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateApiToken',
    request,
    metadata || {},
    this.methodInfoCreateApiToken);
  }

  methodInfoUpdateApiToken = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateApiToken',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateApiTokenRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.deserializeBinary
  );

  updateApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  updateApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  updateApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateApiToken',
        request,
        metadata || {},
        this.methodInfoUpdateApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateApiToken',
    request,
    metadata || {},
    this.methodInfoUpdateApiToken);
  }

  methodInfoDeleteApiToken = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteApiToken',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteApiTokenRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteApiTokenRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteApiToken(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteApiToken',
        request,
        metadata || {},
        this.methodInfoDeleteApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteApiToken',
    request,
    metadata || {},
    this.methodInfoDeleteApiToken);
  }

  methodInfoListConnections = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListConnections',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse.deserializeBinary
  );

  listConnections(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse>;

  listConnections(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse>;

  listConnections(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListConnections',
        request,
        metadata || {},
        this.methodInfoListConnections,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListConnections',
    request,
    metadata || {},
    this.methodInfoListConnections);
  }

  methodInfoGetConnection = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetConnection',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetConnectionRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinary
  );

  getConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  getConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  getConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetConnection',
        request,
        metadata || {},
        this.methodInfoGetConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetConnection',
    request,
    metadata || {},
    this.methodInfoGetConnection);
  }

  methodInfoCreateConnection = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateConnection',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateConnectionRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinary
  );

  createConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  createConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  createConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateConnection',
        request,
        metadata || {},
        this.methodInfoCreateConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateConnection',
    request,
    metadata || {},
    this.methodInfoCreateConnection);
  }

  methodInfoUpdateConnection = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateConnection',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateConnectionRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinary
  );

  updateConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  updateConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  updateConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateConnection',
        request,
        metadata || {},
        this.methodInfoUpdateConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateConnection',
    request,
    metadata || {},
    this.methodInfoUpdateConnection);
  }

  methodInfoDeleteConnection = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteConnection',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteConnectionRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteConnectionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteConnection(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteConnection',
        request,
        metadata || {},
        this.methodInfoDeleteConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteConnection',
    request,
    metadata || {},
    this.methodInfoDeleteConnection);
  }

  methodInfoListLabs = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLabs',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse.deserializeBinary
  );

  listLabs(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse>;

  listLabs(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse>;

  listLabs(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLabs',
        request,
        metadata || {},
        this.methodInfoListLabs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLabs',
    request,
    metadata || {},
    this.methodInfoListLabs);
  }

  methodInfoGetLab = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLab',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.deserializeBinary
  );

  getLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  getLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  getLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLab',
        request,
        metadata || {},
        this.methodInfoGetLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLab',
    request,
    metadata || {},
    this.methodInfoGetLab);
  }

  methodInfoCreateLab = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLab',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.deserializeBinary
  );

  createLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  createLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  createLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLab',
        request,
        metadata || {},
        this.methodInfoCreateLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLab',
    request,
    metadata || {},
    this.methodInfoCreateLab);
  }

  methodInfoUpdateLab = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLab',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.deserializeBinary
  );

  updateLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  updateLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  updateLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLab',
        request,
        metadata || {},
        this.methodInfoUpdateLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLab',
    request,
    metadata || {},
    this.methodInfoUpdateLab);
  }

  methodInfoDeleteLab = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLab',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteLab(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLab',
        request,
        metadata || {},
        this.methodInfoDeleteLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLab',
    request,
    metadata || {},
    this.methodInfoDeleteLab);
  }

  methodInfoListLicenses = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLicenses',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse.deserializeBinary
  );

  listLicenses(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse>;

  listLicenses(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse>;

  listLicenses(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLicenses',
        request,
        metadata || {},
        this.methodInfoListLicenses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLicenses',
    request,
    metadata || {},
    this.methodInfoListLicenses);
  }

  methodInfoGetLicense = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLicense',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLicenseRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.deserializeBinary
  );

  getLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  getLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  getLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLicense',
        request,
        metadata || {},
        this.methodInfoGetLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLicense',
    request,
    metadata || {},
    this.methodInfoGetLicense);
  }

  methodInfoCreateLicense = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLicense',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLicenseRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.deserializeBinary
  );

  createLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  createLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  createLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLicense',
        request,
        metadata || {},
        this.methodInfoCreateLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLicense',
    request,
    metadata || {},
    this.methodInfoCreateLicense);
  }

  methodInfoUpdateLicense = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLicense',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLicenseRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.deserializeBinary
  );

  updateLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  updateLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  updateLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLicense',
        request,
        metadata || {},
        this.methodInfoUpdateLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLicense',
    request,
    metadata || {},
    this.methodInfoUpdateLicense);
  }

  methodInfoDeleteLicense = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLicense',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLicenseRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLicenseRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteLicense(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLicense',
        request,
        metadata || {},
        this.methodInfoDeleteLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLicense',
    request,
    metadata || {},
    this.methodInfoDeleteLicense);
  }

  methodInfoListNotifiers = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListNotifiers',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse.deserializeBinary
  );

  listNotifiers(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse>;

  listNotifiers(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse>;

  listNotifiers(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListNotifiers',
        request,
        metadata || {},
        this.methodInfoListNotifiers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListNotifiers',
    request,
    metadata || {},
    this.methodInfoListNotifiers);
  }

  methodInfoGetNotifier = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetNotifier',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotifierRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.deserializeBinary
  );

  getNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  getNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  getNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetNotifier',
        request,
        metadata || {},
        this.methodInfoGetNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetNotifier',
    request,
    metadata || {},
    this.methodInfoGetNotifier);
  }

  methodInfoCreateNotifier = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotifier',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotifierRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.deserializeBinary
  );

  createNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  createNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  createNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotifier',
        request,
        metadata || {},
        this.methodInfoCreateNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotifier',
    request,
    metadata || {},
    this.methodInfoCreateNotifier);
  }

  methodInfoUpdateNotifier = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotifier',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotifierRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.deserializeBinary
  );

  updateNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  updateNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  updateNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotifier',
        request,
        metadata || {},
        this.methodInfoUpdateNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotifier',
    request,
    metadata || {},
    this.methodInfoUpdateNotifier);
  }

  methodInfoDeleteNotifier = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotifier',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotifierRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotifierRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteNotifier(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotifier',
        request,
        metadata || {},
        this.methodInfoDeleteNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotifier',
    request,
    metadata || {},
    this.methodInfoDeleteNotifier);
  }

  methodInfoListServingSites = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListServingSites',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse.deserializeBinary
  );

  listServingSites(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse>;

  listServingSites(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse>;

  listServingSites(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListServingSites',
        request,
        metadata || {},
        this.methodInfoListServingSites,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListServingSites',
    request,
    metadata || {},
    this.methodInfoListServingSites);
  }

  methodInfoGetServingSite = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetServingSite',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetServingsiteRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetServingsiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.deserializeBinary
  );

  getServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetServingsiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  getServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  getServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetServingSite',
        request,
        metadata || {},
        this.methodInfoGetServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetServingSite',
    request,
    metadata || {},
    this.methodInfoGetServingSite);
  }

  methodInfoCreateServingSite = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateServingSite',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateServingsiteRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateServingsiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.deserializeBinary
  );

  createServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateServingsiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  createServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  createServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateServingSite',
        request,
        metadata || {},
        this.methodInfoCreateServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateServingSite',
    request,
    metadata || {},
    this.methodInfoCreateServingSite);
  }

  methodInfoUpdateServingSite = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateServingSite',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateServingsiteRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateServingsiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.deserializeBinary
  );

  updateServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateServingsiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  updateServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  updateServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateServingSite',
        request,
        metadata || {},
        this.methodInfoUpdateServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateServingSite',
    request,
    metadata || {},
    this.methodInfoUpdateServingSite);
  }

  methodInfoDeleteServingSite = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteServingSite',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteServingsiteRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteServingsiteRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteServingsiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteServingSite(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteServingSite',
        request,
        metadata || {},
        this.methodInfoDeleteServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteServingSite',
    request,
    metadata || {},
    this.methodInfoDeleteServingSite);
  }

  methodInfoListTenants = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListTenants',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse.deserializeBinary
  );

  listTenants(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse>;

  listTenants(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse>;

  listTenants(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListTenants',
        request,
        metadata || {},
        this.methodInfoListTenants,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListTenants',
    request,
    metadata || {},
    this.methodInfoListTenants);
  }

  methodInfoGetTenant = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetTenant',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTenantRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.deserializeBinary
  );

  getTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  getTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  getTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetTenant',
        request,
        metadata || {},
        this.methodInfoGetTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetTenant',
    request,
    metadata || {},
    this.methodInfoGetTenant);
  }

  methodInfoCreateTenant = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateTenant',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTenantRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.deserializeBinary
  );

  createTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  createTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  createTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateTenant',
        request,
        metadata || {},
        this.methodInfoCreateTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateTenant',
    request,
    metadata || {},
    this.methodInfoCreateTenant);
  }

  methodInfoUpdateTenant = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTenant',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTenantRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.deserializeBinary
  );

  updateTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  updateTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  updateTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTenant',
        request,
        metadata || {},
        this.methodInfoUpdateTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTenant',
    request,
    metadata || {},
    this.methodInfoUpdateTenant);
  }

  methodInfoDeleteTenant = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTenant',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTenantRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTenantRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteTenant(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTenant',
        request,
        metadata || {},
        this.methodInfoDeleteTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTenant',
    request,
    metadata || {},
    this.methodInfoDeleteTenant);
  }

  methodInfoListVirtualBuckets = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualBuckets',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse.deserializeBinary
  );

  listVirtualBuckets(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse>;

  listVirtualBuckets(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse>;

  listVirtualBuckets(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualBuckets',
        request,
        metadata || {},
        this.methodInfoListVirtualBuckets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualBuckets',
    request,
    metadata || {},
    this.methodInfoListVirtualBuckets);
  }

  methodInfoGetVirtualBucket = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualBucket',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualBucketRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinary
  );

  getVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  getVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  getVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualBucket',
        request,
        metadata || {},
        this.methodInfoGetVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualBucket',
    request,
    metadata || {},
    this.methodInfoGetVirtualBucket);
  }

  methodInfoCreateVirtualBucket = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualBucket',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualBucketRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinary
  );

  createVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  createVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  createVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualBucket',
        request,
        metadata || {},
        this.methodInfoCreateVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualBucket',
    request,
    metadata || {},
    this.methodInfoCreateVirtualBucket);
  }

  methodInfoUpdateVirtualBucket = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualBucket',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualBucketRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinary
  );

  updateVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  updateVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  updateVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualBucket',
        request,
        metadata || {},
        this.methodInfoUpdateVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualBucket',
    request,
    metadata || {},
    this.methodInfoUpdateVirtualBucket);
  }

  methodInfoDeleteVirtualBucket = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualBucket',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualBucketRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteVirtualBucket(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualBucket',
        request,
        metadata || {},
        this.methodInfoDeleteVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualBucket',
    request,
    metadata || {},
    this.methodInfoDeleteVirtualBucket);
  }

  methodInfoListVirtualClusters = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualClusters',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse.deserializeBinary
  );

  listVirtualClusters(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse>;

  listVirtualClusters(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse>;

  listVirtualClusters(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualClusters',
        request,
        metadata || {},
        this.methodInfoListVirtualClusters,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualClusters',
    request,
    metadata || {},
    this.methodInfoListVirtualClusters);
  }

  methodInfoGetVirtualCluster = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualCluster',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualClusterRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.deserializeBinary
  );

  getVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  getVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  getVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualCluster',
        request,
        metadata || {},
        this.methodInfoGetVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualCluster',
    request,
    metadata || {},
    this.methodInfoGetVirtualCluster);
  }

  methodInfoCreateVirtualCluster = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualCluster',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualClusterRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.deserializeBinary
  );

  createVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  createVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  createVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualCluster',
        request,
        metadata || {},
        this.methodInfoCreateVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualCluster',
    request,
    metadata || {},
    this.methodInfoCreateVirtualCluster);
  }

  methodInfoUpdateVirtualCluster = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualCluster',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualClusterRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.deserializeBinary
  );

  updateVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  updateVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  updateVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualCluster',
        request,
        metadata || {},
        this.methodInfoUpdateVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualCluster',
    request,
    metadata || {},
    this.methodInfoUpdateVirtualCluster);
  }

  methodInfoDeleteVirtualCluster = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualCluster',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualClusterRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteVirtualCluster(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualCluster',
        request,
        metadata || {},
        this.methodInfoDeleteVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualCluster',
    request,
    metadata || {},
    this.methodInfoDeleteVirtualCluster);
  }

  methodInfoListVirtualVolumes = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualVolumes',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse.deserializeBinary
  );

  listVirtualVolumes(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse>;

  listVirtualVolumes(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse>;

  listVirtualVolumes(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualVolumes',
        request,
        metadata || {},
        this.methodInfoListVirtualVolumes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualVolumes',
    request,
    metadata || {},
    this.methodInfoListVirtualVolumes);
  }

  methodInfoGetVirtualVolume = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualVolume',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualVolumeRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.deserializeBinary
  );

  getVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  getVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  getVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualVolume',
        request,
        metadata || {},
        this.methodInfoGetVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualVolume',
    request,
    metadata || {},
    this.methodInfoGetVirtualVolume);
  }

  methodInfoCreateVirtualVolume = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualVolume',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualVolumeRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.deserializeBinary
  );

  createVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  createVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  createVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualVolume',
        request,
        metadata || {},
        this.methodInfoCreateVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualVolume',
    request,
    metadata || {},
    this.methodInfoCreateVirtualVolume);
  }

  methodInfoUpdateVirtualVolume = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualVolume',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualVolumeRequest,
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.deserializeBinary
  );

  updateVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  updateVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  updateVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualVolume',
        request,
        metadata || {},
        this.methodInfoUpdateVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualVolume',
    request,
    metadata || {},
    this.methodInfoUpdateVirtualVolume);
  }

  methodInfoDeleteVirtualVolume = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualVolume',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualVolumeRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteVirtualVolume(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualVolume',
        request,
        metadata || {},
        this.methodInfoDeleteVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualVolume',
    request,
    metadata || {},
    this.methodInfoDeleteVirtualVolume);
  }

  methodInfoListDataPipelines = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelines',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse.deserializeBinary
  );

  listDataPipelines(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse>;

  listDataPipelines(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse>;

  listDataPipelines(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelines',
        request,
        metadata || {},
        this.methodInfoListDataPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelines',
    request,
    metadata || {},
    this.methodInfoListDataPipelines);
  }

  methodInfoGetDataPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinary
  );

  getDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  getDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  getDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipeline',
        request,
        metadata || {},
        this.methodInfoGetDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipeline',
    request,
    metadata || {},
    this.methodInfoGetDataPipeline);
  }

  methodInfoCreateDataPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinary
  );

  createDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  createDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  createDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipeline',
        request,
        metadata || {},
        this.methodInfoCreateDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipeline',
    request,
    metadata || {},
    this.methodInfoCreateDataPipeline);
  }

  methodInfoUpdateDataPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinary
  );

  updateDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  updateDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  updateDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipeline',
        request,
        metadata || {},
        this.methodInfoUpdateDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipeline',
    request,
    metadata || {},
    this.methodInfoUpdateDataPipeline);
  }

  methodInfoDeleteDataPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipeline',
        request,
        metadata || {},
        this.methodInfoDeleteDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipeline',
    request,
    metadata || {},
    this.methodInfoDeleteDataPipeline);
  }

  methodInfoListDataPipelineRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelineRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse.deserializeBinary
  );

  listDataPipelineRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse>;

  listDataPipelineRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse>;

  listDataPipelineRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListDataPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListDataPipelineRuns);
  }

  methodInfoGetDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.deserializeBinary
  );

  getDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  getDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  getDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetDataPipelineRun);
  }

  methodInfoCreateDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.deserializeBinary
  );

  createDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  createDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  createDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateDataPipelineRun);
  }

  methodInfoUpdateDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.deserializeBinary
  );

  updateDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  updateDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  updateDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateDataPipelineRun);
  }

  methodInfoDeleteDataPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRunRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteDataPipelineRun);
  }

  methodInfoListDataProducts = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProducts',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse.deserializeBinary
  );

  listDataProducts(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse>;

  listDataProducts(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse>;

  listDataProducts(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProducts',
        request,
        metadata || {},
        this.methodInfoListDataProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProducts',
    request,
    metadata || {},
    this.methodInfoListDataProducts);
  }

  methodInfoGetDataProduct = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProduct',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinary
  );

  getDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  getDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  getDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProduct',
        request,
        metadata || {},
        this.methodInfoGetDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProduct',
    request,
    metadata || {},
    this.methodInfoGetDataProduct);
  }

  methodInfoCreateDataProduct = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProduct',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinary
  );

  createDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  createDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  createDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProduct',
        request,
        metadata || {},
        this.methodInfoCreateDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProduct',
    request,
    metadata || {},
    this.methodInfoCreateDataProduct);
  }

  methodInfoUpdateDataProduct = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProduct',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinary
  );

  updateDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  updateDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  updateDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProduct',
        request,
        metadata || {},
        this.methodInfoUpdateDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProduct',
    request,
    metadata || {},
    this.methodInfoUpdateDataProduct);
  }

  methodInfoDeleteDataProduct = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProduct',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataProduct(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProduct',
        request,
        metadata || {},
        this.methodInfoDeleteDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProduct',
    request,
    metadata || {},
    this.methodInfoDeleteDataProduct);
  }

  methodInfoListDataProductVersions = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProductVersions',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse.deserializeBinary
  );

  listDataProductVersions(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse>;

  listDataProductVersions(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse>;

  listDataProductVersions(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProductVersions',
        request,
        metadata || {},
        this.methodInfoListDataProductVersions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProductVersions',
    request,
    metadata || {},
    this.methodInfoListDataProductVersions);
  }

  methodInfoGetDataProductVersion = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProductVersion',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductVersionRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinary
  );

  getDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  getDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  getDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProductVersion',
        request,
        metadata || {},
        this.methodInfoGetDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProductVersion',
    request,
    metadata || {},
    this.methodInfoGetDataProductVersion);
  }

  methodInfoCreateDataProductVersion = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProductVersion',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductVersionRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinary
  );

  createDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  createDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  createDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProductVersion',
        request,
        metadata || {},
        this.methodInfoCreateDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProductVersion',
    request,
    metadata || {},
    this.methodInfoCreateDataProductVersion);
  }

  methodInfoUpdateDataProductVersion = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProductVersion',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductVersionRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinary
  );

  updateDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  updateDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  updateDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProductVersion',
        request,
        metadata || {},
        this.methodInfoUpdateDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProductVersion',
    request,
    metadata || {},
    this.methodInfoUpdateDataProductVersion);
  }

  methodInfoDeleteDataProductVersion = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProductVersion',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductVersionRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataProductVersion(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProductVersion',
        request,
        metadata || {},
        this.methodInfoDeleteDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProductVersion',
    request,
    metadata || {},
    this.methodInfoDeleteDataProductVersion);
  }

  methodInfoListDatasets = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDatasets',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse.deserializeBinary
  );

  listDatasets(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse>;

  listDatasets(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse>;

  listDatasets(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDatasets',
        request,
        metadata || {},
        this.methodInfoListDatasets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDatasets',
    request,
    metadata || {},
    this.methodInfoListDatasets);
  }

  methodInfoGetDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasetRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinary
  );

  getDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  getDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  getDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataset',
        request,
        metadata || {},
        this.methodInfoGetDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataset',
    request,
    metadata || {},
    this.methodInfoGetDataset);
  }

  methodInfoCreateDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasetRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinary
  );

  createDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  createDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  createDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataset',
        request,
        metadata || {},
        this.methodInfoCreateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataset',
    request,
    metadata || {},
    this.methodInfoCreateDataset);
  }

  methodInfoUpdateDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasetRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinary
  );

  updateDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  updateDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  updateDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataset',
        request,
        metadata || {},
        this.methodInfoUpdateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataset',
    request,
    metadata || {},
    this.methodInfoUpdateDataset);
  }

  methodInfoDeleteDataset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasetRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataset',
        request,
        metadata || {},
        this.methodInfoDeleteDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataset',
    request,
    metadata || {},
    this.methodInfoDeleteDataset);
  }

  methodInfoListDataSources = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataSources',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse.deserializeBinary
  );

  listDataSources(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse>;

  listDataSources(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse>;

  listDataSources(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataSources',
        request,
        metadata || {},
        this.methodInfoListDataSources,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataSources',
    request,
    metadata || {},
    this.methodInfoListDataSources);
  }

  methodInfoGetDataSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasourceRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinary
  );

  getDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  getDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  getDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataSource',
        request,
        metadata || {},
        this.methodInfoGetDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataSource',
    request,
    metadata || {},
    this.methodInfoGetDataSource);
  }

  methodInfoCreateDataSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasourceRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinary
  );

  createDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  createDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  createDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataSource',
        request,
        metadata || {},
        this.methodInfoCreateDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataSource',
    request,
    metadata || {},
    this.methodInfoCreateDataSource);
  }

  methodInfoUpdateDataSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasourceRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinary
  );

  updateDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  updateDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  updateDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataSource',
        request,
        metadata || {},
        this.methodInfoUpdateDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataSource',
    request,
    metadata || {},
    this.methodInfoUpdateDataSource);
  }

  methodInfoDeleteDataSource = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataSource',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasourceRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasourceRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataSource(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataSource',
        request,
        metadata || {},
        this.methodInfoDeleteDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataSource',
    request,
    metadata || {},
    this.methodInfoDeleteDataSource);
  }

  methodInfoListEntities = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListEntities',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse.deserializeBinary
  );

  listEntities(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse>;

  listEntities(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse>;

  listEntities(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListEntities',
        request,
        metadata || {},
        this.methodInfoListEntities,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListEntities',
    request,
    metadata || {},
    this.methodInfoListEntities);
  }

  methodInfoGetEntity = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetEntity',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetEntityRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinary
  );

  getEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  getEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  getEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetEntity',
        request,
        metadata || {},
        this.methodInfoGetEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetEntity',
    request,
    metadata || {},
    this.methodInfoGetEntity);
  }

  methodInfoCreateEntity = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateEntity',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateEntityRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinary
  );

  createEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  createEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  createEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateEntity',
        request,
        metadata || {},
        this.methodInfoCreateEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateEntity',
    request,
    metadata || {},
    this.methodInfoCreateEntity);
  }

  methodInfoUpdateEntity = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateEntity',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateEntityRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinary
  );

  updateEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  updateEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  updateEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateEntity',
        request,
        metadata || {},
        this.methodInfoUpdateEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateEntity',
    request,
    metadata || {},
    this.methodInfoUpdateEntity);
  }

  methodInfoDeleteEntity = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteEntity',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteEntityRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteEntityRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteEntity(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteEntity',
        request,
        metadata || {},
        this.methodInfoDeleteEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteEntity',
    request,
    metadata || {},
    this.methodInfoDeleteEntity);
  }

  methodInfoListModelClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesResponse.deserializeBinary
  );

  listModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesResponse>;

  listModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesResponse>;

  listModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelClassesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelClass',
        request,
        metadata || {},
        this.methodInfoListModelClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelClass',
    request,
    metadata || {},
    this.methodInfoListModelClass);
  }

  methodInfoGetModelClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelClassRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinary
  );

  getModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass>;

  getModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass>;

  getModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelClass',
        request,
        metadata || {},
        this.methodInfoGetModelClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelClass',
    request,
    metadata || {},
    this.methodInfoGetModelClass);
  }

  methodInfoCreateModelClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelClassRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinary
  );

  createModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass>;

  createModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass>;

  createModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelClass',
        request,
        metadata || {},
        this.methodInfoCreateModelClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelClass',
    request,
    metadata || {},
    this.methodInfoCreateModelClass);
  }

  methodInfoUpdateModelClas = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelClas',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelClassRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinary
  );

  updateModelClas(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass>;

  updateModelClas(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass>;

  updateModelClas(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelClas',
        request,
        metadata || {},
        this.methodInfoUpdateModelClas,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelClas',
    request,
    metadata || {},
    this.methodInfoUpdateModelClas);
  }

  methodInfoDeleteModelClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelClassRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelClassRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteModelClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelClass',
        request,
        metadata || {},
        this.methodInfoDeleteModelClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelClass',
    request,
    metadata || {},
    this.methodInfoDeleteModelClass);
  }

  methodInfoListFeatureHistograms = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListFeatureHistograms',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsResponse.deserializeBinary
  );

  listFeatureHistograms(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsResponse>;

  listFeatureHistograms(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsResponse>;

  listFeatureHistograms(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeatureHistogramsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListFeatureHistograms',
        request,
        metadata || {},
        this.methodInfoListFeatureHistograms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListFeatureHistograms',
    request,
    metadata || {},
    this.methodInfoListFeatureHistograms);
  }

  methodInfoGetFeatureHistogram = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetFeatureHistogram',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeatureHistogramRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeatureHistogramRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.deserializeBinary
  );

  getFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>;

  getFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>;

  getFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetFeatureHistogram',
        request,
        metadata || {},
        this.methodInfoGetFeatureHistogram,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetFeatureHistogram',
    request,
    metadata || {},
    this.methodInfoGetFeatureHistogram);
  }

  methodInfoCreateFeatureHistogram = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeatureHistogram',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeatureHistogramRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeatureHistogramRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.deserializeBinary
  );

  createFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>;

  createFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>;

  createFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeatureHistogram',
        request,
        metadata || {},
        this.methodInfoCreateFeatureHistogram,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeatureHistogram',
    request,
    metadata || {},
    this.methodInfoCreateFeatureHistogram);
  }

  methodInfoUpdateFeatureHistogram = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeatureHistogram',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeatureHistogramRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeatureHistogramRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.deserializeBinary
  );

  updateFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>;

  updateFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>;

  updateFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeatureHistogram',
        request,
        metadata || {},
        this.methodInfoUpdateFeatureHistogram,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeatureHistogram',
    request,
    metadata || {},
    this.methodInfoUpdateFeatureHistogram);
  }

  methodInfoDeleteFeatureHistogram = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeatureHistogram',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeatureHistogramRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeatureHistogramRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteFeatureHistogram(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeatureHistogramRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeatureHistogram',
        request,
        metadata || {},
        this.methodInfoDeleteFeatureHistogram,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeatureHistogram',
    request,
    metadata || {},
    this.methodInfoDeleteFeatureHistogram);
  }

  methodInfoListFeaturesetClasss = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturesetClasss',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassResponse.deserializeBinary
  );

  listFeaturesetClasss(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassResponse>;

  listFeaturesetClasss(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassResponse>;

  listFeaturesetClasss(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturesetClasss',
        request,
        metadata || {},
        this.methodInfoListFeaturesetClasss,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturesetClasss',
    request,
    metadata || {},
    this.methodInfoListFeaturesetClasss);
  }

  methodInfoGetFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetClassRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass.deserializeBinary
  );

  getFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass>;

  getFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass>;

  getFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoGetFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoGetFeaturesetClass);
  }

  methodInfoCreateFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetClassRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass.deserializeBinary
  );

  createFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass>;

  createFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass>;

  createFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoCreateFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoCreateFeaturesetClass);
  }

  methodInfoUpdateFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetClassRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass.deserializeBinary
  );

  updateFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass>;

  updateFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass>;

  updateFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoUpdateFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoUpdateFeaturesetClass);
  }

  methodInfoDeleteFeaturesetClass = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeaturesetClass',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetClassRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetClassRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteFeaturesetClass(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeaturesetClass',
        request,
        metadata || {},
        this.methodInfoDeleteFeaturesetClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeaturesetClass',
    request,
    metadata || {},
    this.methodInfoDeleteFeaturesetClass);
  }

  methodInfoListFeaturesets = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturesets',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse.deserializeBinary
  );

  listFeaturesets(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse>;

  listFeaturesets(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse>;

  listFeaturesets(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturesets',
        request,
        metadata || {},
        this.methodInfoListFeaturesets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturesets',
    request,
    metadata || {},
    this.methodInfoListFeaturesets);
  }

  methodInfoGetFeatureset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetFeatureset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.deserializeBinary
  );

  getFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  getFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  getFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetFeatureset',
        request,
        metadata || {},
        this.methodInfoGetFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetFeatureset',
    request,
    metadata || {},
    this.methodInfoGetFeatureset);
  }

  methodInfoCreateFeatureset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeatureset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.deserializeBinary
  );

  createFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  createFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  createFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeatureset',
        request,
        metadata || {},
        this.methodInfoCreateFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeatureset',
    request,
    metadata || {},
    this.methodInfoCreateFeatureset);
  }

  methodInfoUpdateFeatureset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeatureset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.deserializeBinary
  );

  updateFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  updateFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  updateFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeatureset',
        request,
        metadata || {},
        this.methodInfoUpdateFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeatureset',
    request,
    metadata || {},
    this.methodInfoUpdateFeatureset);
  }

  methodInfoDeleteFeatureset = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeatureset',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteFeatureset(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeatureset',
        request,
        metadata || {},
        this.methodInfoDeleteFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeatureset',
    request,
    metadata || {},
    this.methodInfoDeleteFeatureset);
  }

  methodInfoListLabelingPipelines = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelines',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse.deserializeBinary
  );

  listLabelingPipelines(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse>;

  listLabelingPipelines(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse>;

  listLabelingPipelines(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelines',
        request,
        metadata || {},
        this.methodInfoListLabelingPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelines',
    request,
    metadata || {},
    this.methodInfoListLabelingPipelines);
  }

  methodInfoGetLabelingPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.deserializeBinary
  );

  getLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  getLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  getLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoGetLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoGetLabelingPipeline);
  }

  methodInfoCreateLabelingPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.deserializeBinary
  );

  createLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  createLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  createLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoCreateLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoCreateLabelingPipeline);
  }

  methodInfoUpdateLabelingPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.deserializeBinary
  );

  updateLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  updateLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  updateLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoUpdateLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoUpdateLabelingPipeline);
  }

  methodInfoDeleteLabelingPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteLabelingPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoDeleteLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoDeleteLabelingPipeline);
  }

  methodInfoListLabelingPipelineRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelineRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse.deserializeBinary
  );

  listLabelingPipelineRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse>;

  listLabelingPipelineRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse>;

  listLabelingPipelineRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListLabelingPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListLabelingPipelineRuns);
  }

  methodInfoGetLabelingPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.deserializeBinary
  );

  getLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  getLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  getLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetLabelingPipelineRun);
  }

  methodInfoCreateLabelingPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.deserializeBinary
  );

  createLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  createLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  createLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateLabelingPipelineRun);
  }

  methodInfoUpdateLabelingPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.deserializeBinary
  );

  updateLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  updateLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  updateLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateLabelingPipelineRun);
  }

  methodInfoDeleteLabelingPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRunRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteLabelingPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteLabelingPipelineRun);
  }

  methodInfoListRecipes = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipes',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse.deserializeBinary
  );

  listRecipes(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse>;

  listRecipes(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse>;

  listRecipes(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipes',
        request,
        metadata || {},
        this.methodInfoListRecipes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipes',
    request,
    metadata || {},
    this.methodInfoListRecipes);
  }

  methodInfoGetRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinary
  );

  getRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  getRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  getRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipe',
        request,
        metadata || {},
        this.methodInfoGetRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipe',
    request,
    metadata || {},
    this.methodInfoGetRecipe);
  }

  methodInfoCreateRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinary
  );

  createRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  createRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  createRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipe',
        request,
        metadata || {},
        this.methodInfoCreateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipe',
    request,
    metadata || {},
    this.methodInfoCreateRecipe);
  }

  methodInfoUpdateRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinary
  );

  updateRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  updateRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  updateRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipe',
        request,
        metadata || {},
        this.methodInfoUpdateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipe',
    request,
    metadata || {},
    this.methodInfoUpdateRecipe);
  }

  methodInfoDeleteRecipe = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipe',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRecipe(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipe',
        request,
        metadata || {},
        this.methodInfoDeleteRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipe',
    request,
    metadata || {},
    this.methodInfoDeleteRecipe);
  }

  methodInfoListRecipeRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipeRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse.deserializeBinary
  );

  listRecipeRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse>;

  listRecipeRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse>;

  listRecipeRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipeRuns',
        request,
        metadata || {},
        this.methodInfoListRecipeRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipeRuns',
    request,
    metadata || {},
    this.methodInfoListRecipeRuns);
  }

  methodInfoGetRecipeRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipeRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinary
  );

  getRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  getRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  getRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipeRun',
        request,
        metadata || {},
        this.methodInfoGetRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipeRun',
    request,
    metadata || {},
    this.methodInfoGetRecipeRun);
  }

  methodInfoCreateRecipeRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipeRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinary
  );

  createRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  createRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  createRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipeRun',
        request,
        metadata || {},
        this.methodInfoCreateRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipeRun',
    request,
    metadata || {},
    this.methodInfoCreateRecipeRun);
  }

  methodInfoUpdateRecipeRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipeRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinary
  );

  updateRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  updateRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  updateRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipeRun',
        request,
        metadata || {},
        this.methodInfoUpdateRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipeRun',
    request,
    metadata || {},
    this.methodInfoUpdateRecipeRun);
  }

  methodInfoDeleteRecipeRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipeRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRunRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRecipeRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipeRun',
        request,
        metadata || {},
        this.methodInfoDeleteRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipeRun',
    request,
    metadata || {},
    this.methodInfoDeleteRecipeRun);
  }

  methodInfoListModelAutobuilders = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelAutobuilders',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse.deserializeBinary
  );

  listModelAutobuilders(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse>;

  listModelAutobuilders(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse>;

  listModelAutobuilders(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelAutobuilders',
        request,
        metadata || {},
        this.methodInfoListModelAutobuilders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelAutobuilders',
    request,
    metadata || {},
    this.methodInfoListModelAutobuilders);
  }

  methodInfoGetModelAutobuilder = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelAutobuilder',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelAutobuilderRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.deserializeBinary
  );

  getModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  getModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  getModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoGetModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoGetModelAutobuilder);
  }

  methodInfoCreateModelAutobuilder = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelAutobuilder',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelAutobuilderRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.deserializeBinary
  );

  createModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  createModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  createModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoCreateModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoCreateModelAutobuilder);
  }

  methodInfoUpdateModelAutobuilder = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelAutobuilder',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelAutobuilderRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.deserializeBinary
  );

  updateModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  updateModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  updateModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoUpdateModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoUpdateModelAutobuilder);
  }

  methodInfoDeleteModelAutobuilder = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelAutobuilder',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelAutobuilderRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteModelAutobuilder(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoDeleteModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoDeleteModelAutobuilder);
  }

  methodInfoListModelPipelines = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelines',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse.deserializeBinary
  );

  listModelPipelines(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse>;

  listModelPipelines(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse>;

  listModelPipelines(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelines',
        request,
        metadata || {},
        this.methodInfoListModelPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelines',
    request,
    metadata || {},
    this.methodInfoListModelPipelines);
  }

  methodInfoGetModelPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.deserializeBinary
  );

  getModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  getModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  getModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipeline',
        request,
        metadata || {},
        this.methodInfoGetModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipeline',
    request,
    metadata || {},
    this.methodInfoGetModelPipeline);
  }

  methodInfoCreateModelPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.deserializeBinary
  );

  createModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  createModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  createModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipeline',
        request,
        metadata || {},
        this.methodInfoCreateModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipeline',
    request,
    metadata || {},
    this.methodInfoCreateModelPipeline);
  }

  methodInfoUpdateModelPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.deserializeBinary
  );

  updateModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  updateModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  updateModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipeline',
        request,
        metadata || {},
        this.methodInfoUpdateModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipeline',
    request,
    metadata || {},
    this.methodInfoUpdateModelPipeline);
  }

  methodInfoDeleteModelPipeline = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipeline',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteModelPipeline(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipeline',
        request,
        metadata || {},
        this.methodInfoDeleteModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipeline',
    request,
    metadata || {},
    this.methodInfoDeleteModelPipeline);
  }

  methodInfoListModelPipelineRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelineRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse.deserializeBinary
  );

  listModelPipelineRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse>;

  listModelPipelineRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse>;

  listModelPipelineRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListModelPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListModelPipelineRuns);
  }

  methodInfoGetModelPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.deserializeBinary
  );

  getModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  getModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  getModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetModelPipelineRun);
  }

  methodInfoCreateModelPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.deserializeBinary
  );

  createModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  createModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  createModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateModelPipelineRun);
  }

  methodInfoUpdateModelPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.deserializeBinary
  );

  updateModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  updateModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  updateModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateModelPipelineRun);
  }

  methodInfoDeleteModelPipelineRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipelineRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRunRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteModelPipelineRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteModelPipelineRun);
  }

  methodInfoListNotebooks = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebooks',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse.deserializeBinary
  );

  listNotebooks(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse>;

  listNotebooks(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse>;

  listNotebooks(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebooks',
        request,
        metadata || {},
        this.methodInfoListNotebooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebooks',
    request,
    metadata || {},
    this.methodInfoListNotebooks);
  }

  methodInfoGetNotebook = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebook',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.deserializeBinary
  );

  getNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  getNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  getNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebook',
        request,
        metadata || {},
        this.methodInfoGetNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebook',
    request,
    metadata || {},
    this.methodInfoGetNotebook);
  }

  methodInfoCreateNotebook = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebook',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.deserializeBinary
  );

  createNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  createNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  createNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebook',
        request,
        metadata || {},
        this.methodInfoCreateNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebook',
    request,
    metadata || {},
    this.methodInfoCreateNotebook);
  }

  methodInfoUpdateNotebook = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebook',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.deserializeBinary
  );

  updateNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  updateNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  updateNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebook',
        request,
        metadata || {},
        this.methodInfoUpdateNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebook',
    request,
    metadata || {},
    this.methodInfoUpdateNotebook);
  }

  methodInfoDeleteNotebook = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebook',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteNotebook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebook',
        request,
        metadata || {},
        this.methodInfoDeleteNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebook',
    request,
    metadata || {},
    this.methodInfoDeleteNotebook);
  }

  methodInfoListNotebookRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebookRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse.deserializeBinary
  );

  listNotebookRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse>;

  listNotebookRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse>;

  listNotebookRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebookRuns',
        request,
        metadata || {},
        this.methodInfoListNotebookRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebookRuns',
    request,
    metadata || {},
    this.methodInfoListNotebookRuns);
  }

  methodInfoGetNotebookRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebookRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.deserializeBinary
  );

  getNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  getNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  getNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebookRun',
        request,
        metadata || {},
        this.methodInfoGetNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebookRun',
    request,
    metadata || {},
    this.methodInfoGetNotebookRun);
  }

  methodInfoCreateNotebookRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebookRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.deserializeBinary
  );

  createNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  createNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  createNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebookRun',
        request,
        metadata || {},
        this.methodInfoCreateNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebookRun',
    request,
    metadata || {},
    this.methodInfoCreateNotebookRun);
  }

  methodInfoUpdateNotebookRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebookRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.deserializeBinary
  );

  updateNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  updateNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  updateNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebookRun',
        request,
        metadata || {},
        this.methodInfoUpdateNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebookRun',
    request,
    metadata || {},
    this.methodInfoUpdateNotebookRun);
  }

  methodInfoDeleteNotebookRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebookRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRunRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteNotebookRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebookRun',
        request,
        metadata || {},
        this.methodInfoDeleteNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebookRun',
    request,
    metadata || {},
    this.methodInfoDeleteNotebookRun);
  }

  methodInfoListReports = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListReports',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse.deserializeBinary
  );

  listReports(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse>;

  listReports(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse>;

  listReports(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListReports',
        request,
        metadata || {},
        this.methodInfoListReports,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListReports',
    request,
    metadata || {},
    this.methodInfoListReports);
  }

  methodInfoGetReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReportRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinary
  );

  getReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  getReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  getReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetReport',
        request,
        metadata || {},
        this.methodInfoGetReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetReport',
    request,
    metadata || {},
    this.methodInfoGetReport);
  }

  methodInfoCreateReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReportRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinary
  );

  createReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  createReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  createReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateReport',
        request,
        metadata || {},
        this.methodInfoCreateReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateReport',
    request,
    metadata || {},
    this.methodInfoCreateReport);
  }

  methodInfoUpdateReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReportRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinary
  );

  updateReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  updateReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  updateReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReport',
        request,
        metadata || {},
        this.methodInfoUpdateReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReport',
    request,
    metadata || {},
    this.methodInfoUpdateReport);
  }

  methodInfoDeleteReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReportRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReportRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReport',
        request,
        metadata || {},
        this.methodInfoDeleteReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReport',
    request,
    metadata || {},
    this.methodInfoDeleteReport);
  }

  methodInfoListCronReports = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCronReports',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse.deserializeBinary
  );

  listCronReports(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse>;

  listCronReports(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse>;

  listCronReports(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCronReports',
        request,
        metadata || {},
        this.methodInfoListCronReports,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCronReports',
    request,
    metadata || {},
    this.methodInfoListCronReports);
  }

  methodInfoGetCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronReportRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.deserializeBinary
  );

  getCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  getCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  getCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCronReport',
        request,
        metadata || {},
        this.methodInfoGetCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCronReport',
    request,
    metadata || {},
    this.methodInfoGetCronReport);
  }

  methodInfoCreateCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronReportRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.deserializeBinary
  );

  createCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  createCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  createCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronReport',
        request,
        metadata || {},
        this.methodInfoCreateCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronReport',
    request,
    metadata || {},
    this.methodInfoCreateCronReport);
  }

  methodInfoUpdateCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronReportRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.deserializeBinary
  );

  updateCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  updateCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  updateCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronReport',
        request,
        metadata || {},
        this.methodInfoUpdateCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronReport',
    request,
    metadata || {},
    this.methodInfoUpdateCronReport);
  }

  methodInfoDeleteCronReport = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronReport',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronReportRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronReportRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteCronReport(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronReport',
        request,
        metadata || {},
        this.methodInfoDeleteCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronReport',
    request,
    metadata || {},
    this.methodInfoDeleteCronReport);
  }

  methodInfoListStudies = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListStudies',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse.deserializeBinary
  );

  listStudies(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse>;

  listStudies(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse>;

  listStudies(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListStudies',
        request,
        metadata || {},
        this.methodInfoListStudies,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListStudies',
    request,
    metadata || {},
    this.methodInfoListStudies);
  }

  methodInfoGetStudy = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetStudy',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetStudyRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinary
  );

  getStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  getStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  getStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetStudy',
        request,
        metadata || {},
        this.methodInfoGetStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetStudy',
    request,
    metadata || {},
    this.methodInfoGetStudy);
  }

  methodInfoCreateStudy = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateStudy',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateStudyRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinary
  );

  createStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  createStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  createStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateStudy',
        request,
        metadata || {},
        this.methodInfoCreateStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateStudy',
    request,
    metadata || {},
    this.methodInfoCreateStudy);
  }

  methodInfoUpdateStudy = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateStudy',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateStudyRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinary
  );

  updateStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  updateStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  updateStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateStudy',
        request,
        metadata || {},
        this.methodInfoUpdateStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateStudy',
    request,
    metadata || {},
    this.methodInfoUpdateStudy);
  }

  methodInfoDeleteStudy = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteStudy',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteStudyRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteStudyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteStudy(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteStudy',
        request,
        metadata || {},
        this.methodInfoDeleteStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteStudy',
    request,
    metadata || {},
    this.methodInfoDeleteStudy);
  }

  methodInfoListModels = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModels',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse.deserializeBinary
  );

  listModels(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse>;

  listModels(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse>;

  listModels(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModels',
        request,
        metadata || {},
        this.methodInfoListModels,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListModels',
    request,
    metadata || {},
    this.methodInfoListModels);
  }

  methodInfoGetModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinary
  );

  getModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  getModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  getModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModel',
        request,
        metadata || {},
        this.methodInfoGetModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetModel',
    request,
    metadata || {},
    this.methodInfoGetModel);
  }

  methodInfoCreateModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinary
  );

  createModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  createModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  createModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModel',
        request,
        metadata || {},
        this.methodInfoCreateModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateModel',
    request,
    metadata || {},
    this.methodInfoCreateModel);
  }

  methodInfoUpdateModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelRequest,
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinary
  );

  updateModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  updateModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  updateModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModel',
        request,
        metadata || {},
        this.methodInfoUpdateModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModel',
    request,
    metadata || {},
    this.methodInfoUpdateModel);
  }

  methodInfoDeleteModel = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModel',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteModel(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModel',
        request,
        metadata || {},
        this.methodInfoDeleteModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModel',
    request,
    metadata || {},
    this.methodInfoDeleteModel);
  }

  methodInfoListCronPredictions = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCronPredictions',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse.deserializeBinary
  );

  listCronPredictions(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse>;

  listCronPredictions(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse>;

  listCronPredictions(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCronPredictions',
        request,
        metadata || {},
        this.methodInfoListCronPredictions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCronPredictions',
    request,
    metadata || {},
    this.methodInfoListCronPredictions);
  }

  methodInfoGetCronPrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCronPrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronPredictionRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.deserializeBinary
  );

  getCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  getCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  getCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCronPrediction',
        request,
        metadata || {},
        this.methodInfoGetCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCronPrediction',
    request,
    metadata || {},
    this.methodInfoGetCronPrediction);
  }

  methodInfoCreateCronPrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronPrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronPredictionRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.deserializeBinary
  );

  createCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  createCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  createCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronPrediction',
        request,
        metadata || {},
        this.methodInfoCreateCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronPrediction',
    request,
    metadata || {},
    this.methodInfoCreateCronPrediction);
  }

  methodInfoUpdateCronPrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronPrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronPredictionRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.deserializeBinary
  );

  updateCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  updateCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  updateCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronPrediction',
        request,
        metadata || {},
        this.methodInfoUpdateCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronPrediction',
    request,
    metadata || {},
    this.methodInfoUpdateCronPrediction);
  }

  methodInfoDeleteCronPrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronPrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronPredictionRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronPredictionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteCronPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronPrediction',
        request,
        metadata || {},
        this.methodInfoDeleteCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronPrediction',
    request,
    metadata || {},
    this.methodInfoDeleteCronPrediction);
  }

  methodInfoListPredictions = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictions',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse.deserializeBinary
  );

  listPredictions(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse>;

  listPredictions(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse>;

  listPredictions(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictions',
        request,
        metadata || {},
        this.methodInfoListPredictions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictions',
    request,
    metadata || {},
    this.methodInfoListPredictions);
  }

  methodInfoGetPrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetPrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictionRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinary
  );

  getPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  getPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  getPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetPrediction',
        request,
        metadata || {},
        this.methodInfoGetPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetPrediction',
    request,
    metadata || {},
    this.methodInfoGetPrediction);
  }

  methodInfoCreatePrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreatePrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictionRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinary
  );

  createPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  createPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  createPrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreatePrediction',
        request,
        metadata || {},
        this.methodInfoCreatePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreatePrediction',
    request,
    metadata || {},
    this.methodInfoCreatePrediction);
  }

  methodInfoUpdatePrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictionRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinary
  );

  updatePrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  updatePrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  updatePrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePrediction',
        request,
        metadata || {},
        this.methodInfoUpdatePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePrediction',
    request,
    metadata || {},
    this.methodInfoUpdatePrediction);
  }

  methodInfoDeletePrediction = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeletePrediction',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictionRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deletePrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deletePrediction(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeletePrediction',
        request,
        metadata || {},
        this.methodInfoDeletePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeletePrediction',
    request,
    metadata || {},
    this.methodInfoDeletePrediction);
  }

  methodInfoListPredictors = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictors',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse.deserializeBinary
  );

  listPredictors(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse>;

  listPredictors(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse>;

  listPredictors(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictors',
        request,
        metadata || {},
        this.methodInfoListPredictors,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictors',
    request,
    metadata || {},
    this.methodInfoListPredictors);
  }

  methodInfoGetPredictor = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetPredictor',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictorRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinary
  );

  getPredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  getPredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  getPredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetPredictor',
        request,
        metadata || {},
        this.methodInfoGetPredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetPredictor',
    request,
    metadata || {},
    this.methodInfoGetPredictor);
  }

  methodInfoCreatePredictor = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreatePredictor',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictorRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinary
  );

  createPredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  createPredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  createPredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreatePredictor',
        request,
        metadata || {},
        this.methodInfoCreatePredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreatePredictor',
    request,
    metadata || {},
    this.methodInfoCreatePredictor);
  }

  methodInfoUpdatePredictor = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePredictor',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictorRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinary
  );

  updatePredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  updatePredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  updatePredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePredictor',
        request,
        metadata || {},
        this.methodInfoUpdatePredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePredictor',
    request,
    metadata || {},
    this.methodInfoUpdatePredictor);
  }

  methodInfoDeletePredictor = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeletePredictor',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictorRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictorRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deletePredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deletePredictor(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeletePredictor',
        request,
        metadata || {},
        this.methodInfoDeletePredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeletePredictor',
    request,
    metadata || {},
    this.methodInfoDeletePredictor);
  }

  methodInfoListCurtains = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCurtains',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse.deserializeBinary
  );

  listCurtains(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse>;

  listCurtains(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse>;

  listCurtains(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCurtains',
        request,
        metadata || {},
        this.methodInfoListCurtains,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListCurtains',
    request,
    metadata || {},
    this.methodInfoListCurtains);
  }

  methodInfoGetCurtain = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCurtain',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCurtainRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.deserializeBinary
  );

  getCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  getCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  getCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCurtain',
        request,
        metadata || {},
        this.methodInfoGetCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetCurtain',
    request,
    metadata || {},
    this.methodInfoGetCurtain);
  }

  methodInfoCreateCurtain = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCurtain',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCurtainRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.deserializeBinary
  );

  createCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  createCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  createCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCurtain',
        request,
        metadata || {},
        this.methodInfoCreateCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateCurtain',
    request,
    metadata || {},
    this.methodInfoCreateCurtain);
  }

  methodInfoUpdateCurtain = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCurtain',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCurtainRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.deserializeBinary
  );

  updateCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  updateCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  updateCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCurtain',
        request,
        metadata || {},
        this.methodInfoUpdateCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCurtain',
    request,
    metadata || {},
    this.methodInfoUpdateCurtain);
  }

  methodInfoDeleteCurtain = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCurtain',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCurtainRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCurtainRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteCurtain(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCurtain',
        request,
        metadata || {},
        this.methodInfoDeleteCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCurtain',
    request,
    metadata || {},
    this.methodInfoDeleteCurtain);
  }

  methodInfoListReviews = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListReviews',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse.deserializeBinary
  );

  listReviews(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse>;

  listReviews(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse>;

  listReviews(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListReviews',
        request,
        metadata || {},
        this.methodInfoListReviews,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListReviews',
    request,
    metadata || {},
    this.methodInfoListReviews);
  }

  methodInfoGetReview = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetReview',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReviewRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.deserializeBinary
  );

  getReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  getReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  getReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetReview',
        request,
        metadata || {},
        this.methodInfoGetReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetReview',
    request,
    metadata || {},
    this.methodInfoGetReview);
  }

  methodInfoCreateReview = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateReview',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReviewRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.deserializeBinary
  );

  createReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  createReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  createReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateReview',
        request,
        metadata || {},
        this.methodInfoCreateReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateReview',
    request,
    metadata || {},
    this.methodInfoCreateReview);
  }

  methodInfoUpdateReview = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReview',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReviewRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.deserializeBinary
  );

  updateReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  updateReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  updateReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReview',
        request,
        metadata || {},
        this.methodInfoUpdateReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReview',
    request,
    metadata || {},
    this.methodInfoUpdateReview);
  }

  methodInfoDeleteReview = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReview',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReviewRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReviewRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteReview(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReview',
        request,
        metadata || {},
        this.methodInfoDeleteReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReview',
    request,
    metadata || {},
    this.methodInfoDeleteReview);
  }

  methodInfoListPostMortems = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListPostMortems',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse.deserializeBinary
  );

  listPostMortems(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse>;

  listPostMortems(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse>;

  listPostMortems(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListPostMortems',
        request,
        metadata || {},
        this.methodInfoListPostMortems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListPostMortems',
    request,
    metadata || {},
    this.methodInfoListPostMortems);
  }

  methodInfoGetPostMortem = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetPostMortem',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPostMortemRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.deserializeBinary
  );

  getPostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  getPostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  getPostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetPostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetPostMortem',
        request,
        metadata || {},
        this.methodInfoGetPostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetPostMortem',
    request,
    metadata || {},
    this.methodInfoGetPostMortem);
  }

  methodInfoCreatePostMortem = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreatePostMortem',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePostMortemRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.deserializeBinary
  );

  createPostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  createPostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  createPostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreatePostMortem',
        request,
        metadata || {},
        this.methodInfoCreatePostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreatePostMortem',
    request,
    metadata || {},
    this.methodInfoCreatePostMortem);
  }

  methodInfoUpdatePostMortem = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePostMortem',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePostMortemRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.deserializeBinary
  );

  updatePostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  updatePostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  updatePostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePostMortem',
        request,
        metadata || {},
        this.methodInfoUpdatePostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePostMortem',
    request,
    metadata || {},
    this.methodInfoUpdatePostMortem);
  }

  methodInfoDeletePostMortem = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeletePostMortem',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePostMortemRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePostMortemRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deletePostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deletePostMortem(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeletePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeletePostMortem',
        request,
        metadata || {},
        this.methodInfoDeletePostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeletePostMortem',
    request,
    metadata || {},
    this.methodInfoDeletePostMortem);
  }

  methodInfoListRunBooks = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListRunBooks',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse.deserializeBinary
  );

  listRunBooks(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse>;

  listRunBooks(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse>;

  listRunBooks(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListRunBooks',
        request,
        metadata || {},
        this.methodInfoListRunBooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListRunBooks',
    request,
    metadata || {},
    this.methodInfoListRunBooks);
  }

  methodInfoGetRunBook = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetRunBook',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRunbookRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRunbookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.deserializeBinary
  );

  getRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRunbookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  getRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  getRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetRunBook',
        request,
        metadata || {},
        this.methodInfoGetRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetRunBook',
    request,
    metadata || {},
    this.methodInfoGetRunBook);
  }

  methodInfoCreateRunBook = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateRunBook',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRunbookRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRunbookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.deserializeBinary
  );

  createRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRunbookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  createRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  createRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateRunBook',
        request,
        metadata || {},
        this.methodInfoCreateRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateRunBook',
    request,
    metadata || {},
    this.methodInfoCreateRunBook);
  }

  methodInfoUpdateRunBook = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRunBook',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRunbookRequest,
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRunbookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.deserializeBinary
  );

  updateRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRunbookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  updateRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  updateRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRunBook',
        request,
        metadata || {},
        this.methodInfoUpdateRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRunBook',
    request,
    metadata || {},
    this.methodInfoUpdateRunBook);
  }

  methodInfoDeleteRunBook = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRunBook',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRunbookRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRunbookRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRunbookRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRunBook(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRunBook',
        request,
        metadata || {},
        this.methodInfoDeleteRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRunBook',
    request,
    metadata || {},
    this.methodInfoDeleteRunBook);
  }

  methodInfoListSqlQueries = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListSqlQueries',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysResponse.deserializeBinary
  );

  listSqlQueries(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysResponse>;

  listSqlQueries(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysResponse>;

  listSqlQueries(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQuerysResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListSqlQueries',
        request,
        metadata || {},
        this.methodInfoListSqlQueries,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListSqlQueries',
    request,
    metadata || {},
    this.methodInfoListSqlQueries);
  }

  methodInfoGetSqlQuery = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetSqlQuery',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery.deserializeBinary
  );

  getSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery>;

  getSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery>;

  getSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetSqlQuery',
        request,
        metadata || {},
        this.methodInfoGetSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetSqlQuery',
    request,
    metadata || {},
    this.methodInfoGetSqlQuery);
  }

  methodInfoCreateSqlQuery = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateSqlQuery',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery.deserializeBinary
  );

  createSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery>;

  createSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery>;

  createSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateSqlQuery',
        request,
        metadata || {},
        this.methodInfoCreateSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateSqlQuery',
    request,
    metadata || {},
    this.methodInfoCreateSqlQuery);
  }

  methodInfoUpdateSqlQuery = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateSqlQuery',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery.deserializeBinary
  );

  updateSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery>;

  updateSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery>;

  updateSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateSqlQuery',
        request,
        metadata || {},
        this.methodInfoUpdateSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateSqlQuery',
    request,
    metadata || {},
    this.methodInfoUpdateSqlQuery);
  }

  methodInfoDeleteSqlQuery = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteSqlQuery',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteSqlQuery(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteSqlQuery',
        request,
        metadata || {},
        this.methodInfoDeleteSqlQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteSqlQuery',
    request,
    metadata || {},
    this.methodInfoDeleteSqlQuery);
  }

  methodInfoListSqlQueryRuns = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListSqlQueryRuns',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsResponse.deserializeBinary
  );

  listSqlQueryRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsResponse>;

  listSqlQueryRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsResponse>;

  listSqlQueryRuns(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListSqlQueryRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListSqlQueryRuns',
        request,
        metadata || {},
        this.methodInfoListSqlQueryRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListSqlQueryRuns',
    request,
    metadata || {},
    this.methodInfoListSqlQueryRuns);
  }

  methodInfoGetSqlQueryRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetSqlQueryRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun.deserializeBinary
  );

  getSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun>;

  getSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun>;

  getSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetSqlQueryRun',
        request,
        metadata || {},
        this.methodInfoGetSqlQueryRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetSqlQueryRun',
    request,
    metadata || {},
    this.methodInfoGetSqlQueryRun);
  }

  methodInfoCreateSqlQueryRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateSqlQueryRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun.deserializeBinary
  );

  createSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun>;

  createSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun>;

  createSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateSqlQueryRun',
        request,
        metadata || {},
        this.methodInfoCreateSqlQueryRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateSqlQueryRun',
    request,
    metadata || {},
    this.methodInfoCreateSqlQueryRun);
  }

  methodInfoUpdateSqlQueryRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateSqlQueryRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun.deserializeBinary
  );

  updateSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun>;

  updateSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun>;

  updateSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateSqlQueryRun',
        request,
        metadata || {},
        this.methodInfoUpdateSqlQueryRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateSqlQueryRun',
    request,
    metadata || {},
    this.methodInfoUpdateSqlQueryRun);
  }

  methodInfoDeleteSqlQueryRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteSqlQueryRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRunRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteSqlQueryRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteSqlQueryRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteSqlQueryRun',
        request,
        metadata || {},
        this.methodInfoDeleteSqlQueryRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteSqlQueryRun',
    request,
    metadata || {},
    this.methodInfoDeleteSqlQueryRun);
  }

  methodInfoListWebRequestRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListWebRequestRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsResponse.deserializeBinary
  );

  listWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsResponse>;

  listWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsResponse>;

  listWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListWebRequestRun',
        request,
        metadata || {},
        this.methodInfoListWebRequestRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListWebRequestRun',
    request,
    metadata || {},
    this.methodInfoListWebRequestRun);
  }

  methodInfoGetWebRequestRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetWebRequestRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.deserializeBinary
  );

  getWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun>;

  getWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun>;

  getWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetWebRequestRun',
        request,
        metadata || {},
        this.methodInfoGetWebRequestRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetWebRequestRun',
    request,
    metadata || {},
    this.methodInfoGetWebRequestRun);
  }

  methodInfoCreateWebRequestRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateWebRequestRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.deserializeBinary
  );

  createWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun>;

  createWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun>;

  createWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateWebRequestRun',
        request,
        metadata || {},
        this.methodInfoCreateWebRequestRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateWebRequestRun',
    request,
    metadata || {},
    this.methodInfoCreateWebRequestRun);
  }

  methodInfoUpdateWebRequestRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateWebRequestRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRunRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.deserializeBinary
  );

  updateWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun>;

  updateWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun>;

  updateWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateWebRequestRun',
        request,
        metadata || {},
        this.methodInfoUpdateWebRequestRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateWebRequestRun',
    request,
    metadata || {},
    this.methodInfoUpdateWebRequestRun);
  }

  methodInfoDeleteWebRequestRun = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteWebRequestRun',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRunRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteWebRequestRun(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteWebRequestRun',
        request,
        metadata || {},
        this.methodInfoDeleteWebRequestRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteWebRequestRun',
    request,
    metadata || {},
    this.methodInfoDeleteWebRequestRun);
  }

  methodInfoListWebRequests = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListWebRequests',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsResponse.deserializeBinary
  );

  listWebRequests(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsResponse>;

  listWebRequests(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsResponse>;

  listWebRequests(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListWebRequestsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListWebRequests',
        request,
        metadata || {},
        this.methodInfoListWebRequests,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListWebRequests',
    request,
    metadata || {},
    this.methodInfoListWebRequests);
  }

  methodInfoGetWebRequest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetWebRequest',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.deserializeBinary
  );

  getWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest>;

  getWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest>;

  getWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetWebRequest',
        request,
        metadata || {},
        this.methodInfoGetWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetWebRequest',
    request,
    metadata || {},
    this.methodInfoGetWebRequest);
  }

  methodInfoCreateWebRequest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateWebRequest',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.deserializeBinary
  );

  createWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest>;

  createWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest>;

  createWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateWebRequest',
        request,
        metadata || {},
        this.methodInfoCreateWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateWebRequest',
    request,
    metadata || {},
    this.methodInfoCreateWebRequest);
  }

  methodInfoUpdateWebRequest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateWebRequest',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRequest,
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.deserializeBinary
  );

  updateWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest>;

  updateWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest>;

  updateWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateWebRequest',
        request,
        metadata || {},
        this.methodInfoUpdateWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateWebRequest',
    request,
    metadata || {},
    this.methodInfoUpdateWebRequest);
  }

  methodInfoDeleteWebRequest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteWebRequest',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteWebRequest(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteWebRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteWebRequest',
        request,
        metadata || {},
        this.methodInfoDeleteWebRequest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteWebRequest',
    request,
    metadata || {},
    this.methodInfoDeleteWebRequest);
  }

  methodInfoListDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppRequest,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppResponse,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppResponse.deserializeBinary
  );

  listDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppResponse>;

  listDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppResponse>;

  listDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.ListDataAppResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataApp',
        request,
        metadata || {},
        this.methodInfoListDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/ListDataApp',
    request,
    metadata || {},
    this.methodInfoListDataApp);
  }

  methodInfoGetDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataAppRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.deserializeBinary
  );

  getDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp>;

  getDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp>;

  getDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.GetDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataApp',
        request,
        metadata || {},
        this.methodInfoGetDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/GetDataApp',
    request,
    metadata || {},
    this.methodInfoGetDataApp);
  }

  methodInfoCreateDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataAppRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.deserializeBinary
  );

  createDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp>;

  createDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp>;

  createDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataApp',
        request,
        metadata || {},
        this.methodInfoCreateDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataApp',
    request,
    metadata || {},
    this.methodInfoCreateDataApp);
  }

  methodInfoUpdateDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataAppRequest,
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataAppRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.deserializeBinary
  );

  updateDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp>;

  updateDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp>;

  updateDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataApp',
        request,
        metadata || {},
        this.methodInfoUpdateDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataApp',
    request,
    metadata || {},
    this.methodInfoUpdateDataApp);
  }

  methodInfoDeleteDataApp = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataApp',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataAppRequest,
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataAppRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataAppRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataApp(
    request: github_com_metaprov_modelaapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataApp',
        request,
        metadata || {},
        this.methodInfoDeleteDataApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataApp',
    request,
    metadata || {},
    this.methodInfoDeleteDataApp);
  }

}

