/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.dbproxyd.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb from '../../../../../../github.com/metaprov/modeldapi/services/dbproxyd/v1/dbproxyd_pb';


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

  methodInfoListAccounts = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse.deserializeBinary
  );

  listAccounts(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse>;

  listAccounts(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse>;

  listAccounts(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAccountsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListAccounts',
        request,
        metadata || {},
        this.methodInfoListAccounts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListAccounts',
    request,
    metadata || {},
    this.methodInfoListAccounts);
  }

  methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.deserializeBinary
  );

  getAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  getAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  getAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetAccount',
        request,
        metadata || {},
        this.methodInfoGetAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetAccount',
    request,
    metadata || {},
    this.methodInfoGetAccount);
  }

  methodInfoCreateAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.deserializeBinary
  );

  createAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  createAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  createAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateAccount',
        request,
        metadata || {},
        this.methodInfoCreateAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateAccount',
    request,
    metadata || {},
    this.methodInfoCreateAccount);
  }

  methodInfoUpdateAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAccountRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.deserializeBinary
  );

  updateAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  updateAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;

  updateAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAccount',
        request,
        metadata || {},
        this.methodInfoUpdateAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAccount',
    request,
    metadata || {},
    this.methodInfoUpdateAccount);
  }

  methodInfoDeleteAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAccountRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteAccount(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAccount',
        request,
        metadata || {},
        this.methodInfoDeleteAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAccount',
    request,
    metadata || {},
    this.methodInfoDeleteAccount);
  }

  methodInfoListAlerts = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse.deserializeBinary
  );

  listAlerts(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse>;

  listAlerts(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse>;

  listAlerts(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListAlertsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListAlerts',
        request,
        metadata || {},
        this.methodInfoListAlerts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListAlerts',
    request,
    metadata || {},
    this.methodInfoListAlerts);
  }

  methodInfoGetAlert = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.deserializeBinary
  );

  getAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  getAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  getAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetAlert',
        request,
        metadata || {},
        this.methodInfoGetAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetAlert',
    request,
    metadata || {},
    this.methodInfoGetAlert);
  }

  methodInfoCreateAlert = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.deserializeBinary
  );

  createAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  createAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  createAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateAlert',
        request,
        metadata || {},
        this.methodInfoCreateAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateAlert',
    request,
    metadata || {},
    this.methodInfoCreateAlert);
  }

  methodInfoUpdateAlert = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAlertRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.deserializeBinary
  );

  updateAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  updateAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;

  updateAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAlert',
        request,
        metadata || {},
        this.methodInfoUpdateAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateAlert',
    request,
    metadata || {},
    this.methodInfoUpdateAlert);
  }

  methodInfoDeleteAlert = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAlertRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAlertRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteAlert(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteAlertRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAlert',
        request,
        metadata || {},
        this.methodInfoDeleteAlert,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteAlert',
    request,
    metadata || {},
    this.methodInfoDeleteAlert);
  }

  methodInfoListTodos = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse.deserializeBinary
  );

  listTodos(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse>;

  listTodos(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse>;

  listTodos(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTodosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListTodos',
        request,
        metadata || {},
        this.methodInfoListTodos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListTodos',
    request,
    metadata || {},
    this.methodInfoListTodos);
  }

  methodInfoGetTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo.deserializeBinary
  );

  getTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  getTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  getTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetTodo',
        request,
        metadata || {},
        this.methodInfoGetTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetTodo',
    request,
    metadata || {},
    this.methodInfoGetTodo);
  }

  methodInfoCreateTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo.deserializeBinary
  );

  createTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  createTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  createTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateTodo',
        request,
        metadata || {},
        this.methodInfoCreateTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateTodo',
    request,
    metadata || {},
    this.methodInfoCreateTodo);
  }

  methodInfoUpdateTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTodoRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo.deserializeBinary
  );

  updateTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  updateTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;

  updateTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTodo',
        request,
        metadata || {},
        this.methodInfoUpdateTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTodo',
    request,
    metadata || {},
    this.methodInfoUpdateTodo);
  }

  methodInfoDeleteTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTodoRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteTodo(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTodo',
        request,
        metadata || {},
        this.methodInfoDeleteTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTodo',
    request,
    metadata || {},
    this.methodInfoDeleteTodo);
  }

  methodInfoListCommits = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse.deserializeBinary
  );

  listCommits(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse>;

  listCommits(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse>;

  listCommits(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCommitsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListCommits',
        request,
        metadata || {},
        this.methodInfoListCommits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListCommits',
    request,
    metadata || {},
    this.methodInfoListCommits);
  }

  methodInfoGetCommit = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.deserializeBinary
  );

  getCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  getCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  getCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetCommit',
        request,
        metadata || {},
        this.methodInfoGetCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetCommit',
    request,
    metadata || {},
    this.methodInfoGetCommit);
  }

  methodInfoCreateCommit = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.deserializeBinary
  );

  createCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  createCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  createCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateCommit',
        request,
        metadata || {},
        this.methodInfoCreateCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateCommit',
    request,
    metadata || {},
    this.methodInfoCreateCommit);
  }

  methodInfoUpdateCommit = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCommitRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.deserializeBinary
  );

  updateCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  updateCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;

  updateCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCommit',
        request,
        metadata || {},
        this.methodInfoUpdateCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCommit',
    request,
    metadata || {},
    this.methodInfoUpdateCommit);
  }

  methodInfoDeleteCommit = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCommitRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCommitRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteCommit(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCommit',
        request,
        metadata || {},
        this.methodInfoDeleteCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCommit',
    request,
    metadata || {},
    this.methodInfoDeleteCommit);
  }

  methodInfoListApiTokens = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse.deserializeBinary
  );

  listApiTokens(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse>;

  listApiTokens(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse>;

  listApiTokens(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListApiTokensResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListApiTokens',
        request,
        metadata || {},
        this.methodInfoListApiTokens,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListApiTokens',
    request,
    metadata || {},
    this.methodInfoListApiTokens);
  }

  methodInfoGetApiToken = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.deserializeBinary
  );

  getApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  getApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  getApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetApiToken',
        request,
        metadata || {},
        this.methodInfoGetApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetApiToken',
    request,
    metadata || {},
    this.methodInfoGetApiToken);
  }

  methodInfoCreateApiToken = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.deserializeBinary
  );

  createApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  createApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  createApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateApiToken',
        request,
        metadata || {},
        this.methodInfoCreateApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateApiToken',
    request,
    metadata || {},
    this.methodInfoCreateApiToken);
  }

  methodInfoUpdateApiToken = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateApiTokenRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.deserializeBinary
  );

  updateApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  updateApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;

  updateApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateApiToken',
        request,
        metadata || {},
        this.methodInfoUpdateApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateApiToken',
    request,
    metadata || {},
    this.methodInfoUpdateApiToken);
  }

  methodInfoDeleteApiToken = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteApiTokenRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteApiTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteApiToken(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteApiTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteApiToken',
        request,
        metadata || {},
        this.methodInfoDeleteApiToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteApiToken',
    request,
    metadata || {},
    this.methodInfoDeleteApiToken);
  }

  methodInfoListConnections = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse.deserializeBinary
  );

  listConnections(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse>;

  listConnections(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse>;

  listConnections(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListConnectionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListConnections',
        request,
        metadata || {},
        this.methodInfoListConnections,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListConnections',
    request,
    metadata || {},
    this.methodInfoListConnections);
  }

  methodInfoGetConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinary
  );

  getConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  getConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  getConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetConnection',
        request,
        metadata || {},
        this.methodInfoGetConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetConnection',
    request,
    metadata || {},
    this.methodInfoGetConnection);
  }

  methodInfoCreateConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinary
  );

  createConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  createConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  createConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateConnection',
        request,
        metadata || {},
        this.methodInfoCreateConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateConnection',
    request,
    metadata || {},
    this.methodInfoCreateConnection);
  }

  methodInfoUpdateConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateConnectionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinary
  );

  updateConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  updateConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;

  updateConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateConnection',
        request,
        metadata || {},
        this.methodInfoUpdateConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateConnection',
    request,
    metadata || {},
    this.methodInfoUpdateConnection);
  }

  methodInfoDeleteConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteConnectionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteConnection(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteConnection',
        request,
        metadata || {},
        this.methodInfoDeleteConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteConnection',
    request,
    metadata || {},
    this.methodInfoDeleteConnection);
  }

  methodInfoListLabs = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse.deserializeBinary
  );

  listLabs(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse>;

  listLabs(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse>;

  listLabs(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListLabs',
        request,
        metadata || {},
        this.methodInfoListLabs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListLabs',
    request,
    metadata || {},
    this.methodInfoListLabs);
  }

  methodInfoGetLab = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.deserializeBinary
  );

  getLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  getLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  getLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetLab',
        request,
        metadata || {},
        this.methodInfoGetLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetLab',
    request,
    metadata || {},
    this.methodInfoGetLab);
  }

  methodInfoCreateLab = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.deserializeBinary
  );

  createLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  createLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  createLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateLab',
        request,
        metadata || {},
        this.methodInfoCreateLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateLab',
    request,
    metadata || {},
    this.methodInfoCreateLab);
  }

  methodInfoUpdateLab = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.deserializeBinary
  );

  updateLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  updateLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;

  updateLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLab',
        request,
        metadata || {},
        this.methodInfoUpdateLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLab',
    request,
    metadata || {},
    this.methodInfoUpdateLab);
  }

  methodInfoDeleteLab = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteLab(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLab',
        request,
        metadata || {},
        this.methodInfoDeleteLab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLab',
    request,
    metadata || {},
    this.methodInfoDeleteLab);
  }

  methodInfoListLicenses = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse.deserializeBinary
  );

  listLicenses(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse>;

  listLicenses(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse>;

  listLicenses(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLicensesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListLicenses',
        request,
        metadata || {},
        this.methodInfoListLicenses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListLicenses',
    request,
    metadata || {},
    this.methodInfoListLicenses);
  }

  methodInfoGetLicense = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.deserializeBinary
  );

  getLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  getLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  getLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetLicense',
        request,
        metadata || {},
        this.methodInfoGetLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetLicense',
    request,
    metadata || {},
    this.methodInfoGetLicense);
  }

  methodInfoCreateLicense = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.deserializeBinary
  );

  createLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  createLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  createLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateLicense',
        request,
        metadata || {},
        this.methodInfoCreateLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateLicense',
    request,
    metadata || {},
    this.methodInfoCreateLicense);
  }

  methodInfoUpdateLicense = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.deserializeBinary
  );

  updateLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  updateLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License>;

  updateLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLicense',
        request,
        metadata || {},
        this.methodInfoUpdateLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLicense',
    request,
    metadata || {},
    this.methodInfoUpdateLicense);
  }

  methodInfoDeleteLicense = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLicenseRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteLicense(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLicense',
        request,
        metadata || {},
        this.methodInfoDeleteLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLicense',
    request,
    metadata || {},
    this.methodInfoDeleteLicense);
  }

  methodInfoListNotifiers = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse.deserializeBinary
  );

  listNotifiers(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse>;

  listNotifiers(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse>;

  listNotifiers(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotifiersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListNotifiers',
        request,
        metadata || {},
        this.methodInfoListNotifiers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListNotifiers',
    request,
    metadata || {},
    this.methodInfoListNotifiers);
  }

  methodInfoGetNotifier = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.deserializeBinary
  );

  getNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  getNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  getNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetNotifier',
        request,
        metadata || {},
        this.methodInfoGetNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetNotifier',
    request,
    metadata || {},
    this.methodInfoGetNotifier);
  }

  methodInfoCreateNotifier = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.deserializeBinary
  );

  createNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  createNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  createNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotifier',
        request,
        metadata || {},
        this.methodInfoCreateNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotifier',
    request,
    metadata || {},
    this.methodInfoCreateNotifier);
  }

  methodInfoUpdateNotifier = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotifierRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.deserializeBinary
  );

  updateNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  updateNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;

  updateNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotifier',
        request,
        metadata || {},
        this.methodInfoUpdateNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotifier',
    request,
    metadata || {},
    this.methodInfoUpdateNotifier);
  }

  methodInfoDeleteNotifier = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotifierRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotifierRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteNotifier(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotifier',
        request,
        metadata || {},
        this.methodInfoDeleteNotifier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotifier',
    request,
    metadata || {},
    this.methodInfoDeleteNotifier);
  }

  methodInfoListServingSites = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse.deserializeBinary
  );

  listServingSites(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse>;

  listServingSites(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse>;

  listServingSites(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListServingsitesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListServingSites',
        request,
        metadata || {},
        this.methodInfoListServingSites,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListServingSites',
    request,
    metadata || {},
    this.methodInfoListServingSites);
  }

  methodInfoGetServingSite = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetServingsiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.deserializeBinary
  );

  getServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetServingsiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  getServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  getServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetServingSite',
        request,
        metadata || {},
        this.methodInfoGetServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetServingSite',
    request,
    metadata || {},
    this.methodInfoGetServingSite);
  }

  methodInfoCreateServingSite = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateServingsiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.deserializeBinary
  );

  createServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateServingsiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  createServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  createServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateServingSite',
        request,
        metadata || {},
        this.methodInfoCreateServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateServingSite',
    request,
    metadata || {},
    this.methodInfoCreateServingSite);
  }

  methodInfoUpdateServingSite = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateServingsiteRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.deserializeBinary
  );

  updateServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateServingsiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  updateServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;

  updateServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateServingSite',
        request,
        metadata || {},
        this.methodInfoUpdateServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateServingSite',
    request,
    metadata || {},
    this.methodInfoUpdateServingSite);
  }

  methodInfoDeleteServingSite = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteServingsiteRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteServingsiteRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteServingSite(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteServingsiteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteServingSite',
        request,
        metadata || {},
        this.methodInfoDeleteServingSite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteServingSite',
    request,
    metadata || {},
    this.methodInfoDeleteServingSite);
  }

  methodInfoListTenants = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse.deserializeBinary
  );

  listTenants(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse>;

  listTenants(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse>;

  listTenants(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListTenantsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListTenants',
        request,
        metadata || {},
        this.methodInfoListTenants,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListTenants',
    request,
    metadata || {},
    this.methodInfoListTenants);
  }

  methodInfoGetTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.deserializeBinary
  );

  getTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  getTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  getTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetTenant',
        request,
        metadata || {},
        this.methodInfoGetTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetTenant',
    request,
    metadata || {},
    this.methodInfoGetTenant);
  }

  methodInfoCreateTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.deserializeBinary
  );

  createTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  createTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  createTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateTenant',
        request,
        metadata || {},
        this.methodInfoCreateTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateTenant',
    request,
    metadata || {},
    this.methodInfoCreateTenant);
  }

  methodInfoUpdateTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTenantRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.deserializeBinary
  );

  updateTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  updateTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;

  updateTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTenant',
        request,
        metadata || {},
        this.methodInfoUpdateTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateTenant',
    request,
    metadata || {},
    this.methodInfoUpdateTenant);
  }

  methodInfoDeleteTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTenantRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteTenant(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTenant',
        request,
        metadata || {},
        this.methodInfoDeleteTenant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteTenant',
    request,
    metadata || {},
    this.methodInfoDeleteTenant);
  }

  methodInfoListVirtualBuckets = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse.deserializeBinary
  );

  listVirtualBuckets(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse>;

  listVirtualBuckets(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse>;

  listVirtualBuckets(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualBucketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualBuckets',
        request,
        metadata || {},
        this.methodInfoListVirtualBuckets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualBuckets',
    request,
    metadata || {},
    this.methodInfoListVirtualBuckets);
  }

  methodInfoGetVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinary
  );

  getVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  getVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  getVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualBucket',
        request,
        metadata || {},
        this.methodInfoGetVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualBucket',
    request,
    metadata || {},
    this.methodInfoGetVirtualBucket);
  }

  methodInfoCreateVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinary
  );

  createVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  createVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  createVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualBucket',
        request,
        metadata || {},
        this.methodInfoCreateVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualBucket',
    request,
    metadata || {},
    this.methodInfoCreateVirtualBucket);
  }

  methodInfoUpdateVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinary
  );

  updateVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  updateVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;

  updateVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualBucket',
        request,
        metadata || {},
        this.methodInfoUpdateVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualBucket',
    request,
    metadata || {},
    this.methodInfoUpdateVirtualBucket);
  }

  methodInfoDeleteVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteVirtualBucket(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualBucket',
        request,
        metadata || {},
        this.methodInfoDeleteVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualBucket',
    request,
    metadata || {},
    this.methodInfoDeleteVirtualBucket);
  }

  methodInfoListVirtualClusters = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse.deserializeBinary
  );

  listVirtualClusters(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse>;

  listVirtualClusters(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse>;

  listVirtualClusters(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualClustersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualClusters',
        request,
        metadata || {},
        this.methodInfoListVirtualClusters,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualClusters',
    request,
    metadata || {},
    this.methodInfoListVirtualClusters);
  }

  methodInfoGetVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.deserializeBinary
  );

  getVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  getVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  getVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualCluster',
        request,
        metadata || {},
        this.methodInfoGetVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualCluster',
    request,
    metadata || {},
    this.methodInfoGetVirtualCluster);
  }

  methodInfoCreateVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.deserializeBinary
  );

  createVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  createVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  createVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualCluster',
        request,
        metadata || {},
        this.methodInfoCreateVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualCluster',
    request,
    metadata || {},
    this.methodInfoCreateVirtualCluster);
  }

  methodInfoUpdateVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.deserializeBinary
  );

  updateVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  updateVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;

  updateVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualCluster',
        request,
        metadata || {},
        this.methodInfoUpdateVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualCluster',
    request,
    metadata || {},
    this.methodInfoUpdateVirtualCluster);
  }

  methodInfoDeleteVirtualCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualClusterRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteVirtualCluster(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualCluster',
        request,
        metadata || {},
        this.methodInfoDeleteVirtualCluster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualCluster',
    request,
    metadata || {},
    this.methodInfoDeleteVirtualCluster);
  }

  methodInfoListVirtualVolumes = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse.deserializeBinary
  );

  listVirtualVolumes(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse>;

  listVirtualVolumes(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse>;

  listVirtualVolumes(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListVirtualVolumesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualVolumes',
        request,
        metadata || {},
        this.methodInfoListVirtualVolumes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListVirtualVolumes',
    request,
    metadata || {},
    this.methodInfoListVirtualVolumes);
  }

  methodInfoGetVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.deserializeBinary
  );

  getVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  getVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  getVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualVolume',
        request,
        metadata || {},
        this.methodInfoGetVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetVirtualVolume',
    request,
    metadata || {},
    this.methodInfoGetVirtualVolume);
  }

  methodInfoCreateVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.deserializeBinary
  );

  createVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  createVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  createVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualVolume',
        request,
        metadata || {},
        this.methodInfoCreateVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateVirtualVolume',
    request,
    metadata || {},
    this.methodInfoCreateVirtualVolume);
  }

  methodInfoUpdateVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.deserializeBinary
  );

  updateVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  updateVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;

  updateVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualVolume',
        request,
        metadata || {},
        this.methodInfoUpdateVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateVirtualVolume',
    request,
    metadata || {},
    this.methodInfoUpdateVirtualVolume);
  }

  methodInfoDeleteVirtualVolume = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualVolumeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteVirtualVolume(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteVirtualVolumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualVolume',
        request,
        metadata || {},
        this.methodInfoDeleteVirtualVolume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteVirtualVolume',
    request,
    metadata || {},
    this.methodInfoDeleteVirtualVolume);
  }

  methodInfoListDataPipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse.deserializeBinary
  );

  listDataPipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse>;

  listDataPipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse>;

  listDataPipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelines',
        request,
        metadata || {},
        this.methodInfoListDataPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelines',
    request,
    metadata || {},
    this.methodInfoListDataPipelines);
  }

  methodInfoGetDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinary
  );

  getDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  getDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  getDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipeline',
        request,
        metadata || {},
        this.methodInfoGetDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipeline',
    request,
    metadata || {},
    this.methodInfoGetDataPipeline);
  }

  methodInfoCreateDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinary
  );

  createDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  createDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  createDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipeline',
        request,
        metadata || {},
        this.methodInfoCreateDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipeline',
    request,
    metadata || {},
    this.methodInfoCreateDataPipeline);
  }

  methodInfoUpdateDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinary
  );

  updateDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  updateDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;

  updateDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipeline',
        request,
        metadata || {},
        this.methodInfoUpdateDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipeline',
    request,
    metadata || {},
    this.methodInfoUpdateDataPipeline);
  }

  methodInfoDeleteDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipeline',
        request,
        metadata || {},
        this.methodInfoDeleteDataPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipeline',
    request,
    metadata || {},
    this.methodInfoDeleteDataPipeline);
  }

  methodInfoListDataPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse.deserializeBinary
  );

  listDataPipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse>;

  listDataPipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse>;

  listDataPipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataPipelineRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListDataPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListDataPipelineRuns);
  }

  methodInfoGetDataPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.deserializeBinary
  );

  getDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  getDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  getDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetDataPipelineRun);
  }

  methodInfoCreateDataPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.deserializeBinary
  );

  createDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  createDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  createDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateDataPipelineRun);
  }

  methodInfoUpdateDataPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.deserializeBinary
  );

  updateDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  updateDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;

  updateDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateDataPipelineRun);
  }

  methodInfoDeleteDataPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteDataPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteDataPipelineRun);
  }

  methodInfoListDataProducts = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse.deserializeBinary
  );

  listDataProducts(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse>;

  listDataProducts(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse>;

  listDataProducts(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProducts',
        request,
        metadata || {},
        this.methodInfoListDataProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProducts',
    request,
    metadata || {},
    this.methodInfoListDataProducts);
  }

  methodInfoGetDataProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinary
  );

  getDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  getDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  getDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProduct',
        request,
        metadata || {},
        this.methodInfoGetDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProduct',
    request,
    metadata || {},
    this.methodInfoGetDataProduct);
  }

  methodInfoCreateDataProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinary
  );

  createDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  createDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  createDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProduct',
        request,
        metadata || {},
        this.methodInfoCreateDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProduct',
    request,
    metadata || {},
    this.methodInfoCreateDataProduct);
  }

  methodInfoUpdateDataProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinary
  );

  updateDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  updateDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;

  updateDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProduct',
        request,
        metadata || {},
        this.methodInfoUpdateDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProduct',
    request,
    metadata || {},
    this.methodInfoUpdateDataProduct);
  }

  methodInfoDeleteDataProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataProduct(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProduct',
        request,
        metadata || {},
        this.methodInfoDeleteDataProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProduct',
    request,
    metadata || {},
    this.methodInfoDeleteDataProduct);
  }

  methodInfoListDataProductVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse.deserializeBinary
  );

  listDataProductVersions(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse>;

  listDataProductVersions(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse>;

  listDataProductVersions(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDataProductVersionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProductVersions',
        request,
        metadata || {},
        this.methodInfoListDataProductVersions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataProductVersions',
    request,
    metadata || {},
    this.methodInfoListDataProductVersions);
  }

  methodInfoGetDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinary
  );

  getDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  getDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  getDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProductVersion',
        request,
        metadata || {},
        this.methodInfoGetDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataProductVersion',
    request,
    metadata || {},
    this.methodInfoGetDataProductVersion);
  }

  methodInfoCreateDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinary
  );

  createDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  createDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  createDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProductVersion',
        request,
        metadata || {},
        this.methodInfoCreateDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataProductVersion',
    request,
    metadata || {},
    this.methodInfoCreateDataProductVersion);
  }

  methodInfoUpdateDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinary
  );

  updateDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  updateDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;

  updateDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProductVersion',
        request,
        metadata || {},
        this.methodInfoUpdateDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataProductVersion',
    request,
    metadata || {},
    this.methodInfoUpdateDataProductVersion);
  }

  methodInfoDeleteDataProductVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductVersionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataProductVersion(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDataProductVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProductVersion',
        request,
        metadata || {},
        this.methodInfoDeleteDataProductVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataProductVersion',
    request,
    metadata || {},
    this.methodInfoDeleteDataProductVersion);
  }

  methodInfoListDatasets = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse.deserializeBinary
  );

  listDatasets(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse>;

  listDatasets(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse>;

  listDatasets(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasetsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDatasets',
        request,
        metadata || {},
        this.methodInfoListDatasets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDatasets',
    request,
    metadata || {},
    this.methodInfoListDatasets);
  }

  methodInfoGetDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinary
  );

  getDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  getDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  getDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataset',
        request,
        metadata || {},
        this.methodInfoGetDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataset',
    request,
    metadata || {},
    this.methodInfoGetDataset);
  }

  methodInfoCreateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinary
  );

  createDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  createDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  createDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataset',
        request,
        metadata || {},
        this.methodInfoCreateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataset',
    request,
    metadata || {},
    this.methodInfoCreateDataset);
  }

  methodInfoUpdateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinary
  );

  updateDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  updateDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;

  updateDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataset',
        request,
        metadata || {},
        this.methodInfoUpdateDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataset',
    request,
    metadata || {},
    this.methodInfoUpdateDataset);
  }

  methodInfoDeleteDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataset',
        request,
        metadata || {},
        this.methodInfoDeleteDataset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataset',
    request,
    metadata || {},
    this.methodInfoDeleteDataset);
  }

  methodInfoListDataSources = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse.deserializeBinary
  );

  listDataSources(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse>;

  listDataSources(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse>;

  listDataSources(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListDatasourcesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataSources',
        request,
        metadata || {},
        this.methodInfoListDataSources,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListDataSources',
    request,
    metadata || {},
    this.methodInfoListDataSources);
  }

  methodInfoGetDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinary
  );

  getDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  getDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  getDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataSource',
        request,
        metadata || {},
        this.methodInfoGetDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetDataSource',
    request,
    metadata || {},
    this.methodInfoGetDataSource);
  }

  methodInfoCreateDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinary
  );

  createDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  createDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  createDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataSource',
        request,
        metadata || {},
        this.methodInfoCreateDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateDataSource',
    request,
    metadata || {},
    this.methodInfoCreateDataSource);
  }

  methodInfoUpdateDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinary
  );

  updateDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  updateDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;

  updateDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataSource',
        request,
        metadata || {},
        this.methodInfoUpdateDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateDataSource',
    request,
    metadata || {},
    this.methodInfoUpdateDataSource);
  }

  methodInfoDeleteDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasourceRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDataSource(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteDatasourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataSource',
        request,
        metadata || {},
        this.methodInfoDeleteDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteDataSource',
    request,
    metadata || {},
    this.methodInfoDeleteDataSource);
  }

  methodInfoListEntities = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse.deserializeBinary
  );

  listEntities(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse>;

  listEntities(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse>;

  listEntities(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListEntitiesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListEntities',
        request,
        metadata || {},
        this.methodInfoListEntities,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListEntities',
    request,
    metadata || {},
    this.methodInfoListEntities);
  }

  methodInfoGetEntity = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinary
  );

  getEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  getEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  getEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetEntity',
        request,
        metadata || {},
        this.methodInfoGetEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetEntity',
    request,
    metadata || {},
    this.methodInfoGetEntity);
  }

  methodInfoCreateEntity = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinary
  );

  createEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  createEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  createEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateEntity',
        request,
        metadata || {},
        this.methodInfoCreateEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateEntity',
    request,
    metadata || {},
    this.methodInfoCreateEntity);
  }

  methodInfoUpdateEntity = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateEntityRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinary
  );

  updateEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  updateEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;

  updateEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateEntity',
        request,
        metadata || {},
        this.methodInfoUpdateEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateEntity',
    request,
    metadata || {},
    this.methodInfoUpdateEntity);
  }

  methodInfoDeleteEntity = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteEntityRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteEntityRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteEntity(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteEntityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteEntity',
        request,
        metadata || {},
        this.methodInfoDeleteEntity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteEntity',
    request,
    metadata || {},
    this.methodInfoDeleteEntity);
  }

  methodInfoListFeatures = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesResponse.deserializeBinary
  );

  listFeatures(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesResponse>;

  listFeatures(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesResponse>;

  listFeatures(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListFeatures',
        request,
        metadata || {},
        this.methodInfoListFeatures,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListFeatures',
    request,
    metadata || {},
    this.methodInfoListFeatures);
  }

  methodInfoGetFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.deserializeBinary
  );

  getFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature>;

  getFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature>;

  getFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetFeature',
        request,
        metadata || {},
        this.methodInfoGetFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetFeature',
    request,
    metadata || {},
    this.methodInfoGetFeature);
  }

  methodInfoCreateFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.deserializeBinary
  );

  createFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature>;

  createFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature>;

  createFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeature',
        request,
        metadata || {},
        this.methodInfoCreateFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeature',
    request,
    metadata || {},
    this.methodInfoCreateFeature);
  }

  methodInfoUpdateFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeatureRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.deserializeBinary
  );

  updateFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature>;

  updateFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature>;

  updateFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeature',
        request,
        metadata || {},
        this.methodInfoUpdateFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeature',
    request,
    metadata || {},
    this.methodInfoUpdateFeature);
  }

  methodInfoDeleteFeature = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeatureRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteFeature(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeatureRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeature',
        request,
        metadata || {},
        this.methodInfoDeleteFeature,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeature',
    request,
    metadata || {},
    this.methodInfoDeleteFeature);
  }

  methodInfoListFeaturePipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesResponse.deserializeBinary
  );

  listFeaturePipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesResponse>;

  listFeaturePipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesResponse>;

  listFeaturePipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturePipelines',
        request,
        metadata || {},
        this.methodInfoListFeaturePipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturePipelines',
    request,
    metadata || {},
    this.methodInfoListFeaturePipelines);
  }

  methodInfoGetFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.deserializeBinary
  );

  getFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline>;

  getFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline>;

  getFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetFeaturePipeline',
        request,
        metadata || {},
        this.methodInfoGetFeaturePipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetFeaturePipeline',
    request,
    metadata || {},
    this.methodInfoGetFeaturePipeline);
  }

  methodInfoCreateFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.deserializeBinary
  );

  createFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline>;

  createFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline>;

  createFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeaturePipeline',
        request,
        metadata || {},
        this.methodInfoCreateFeaturePipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeaturePipeline',
    request,
    metadata || {},
    this.methodInfoCreateFeaturePipeline);
  }

  methodInfoUpdateFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.deserializeBinary
  );

  updateFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline>;

  updateFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline>;

  updateFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeaturePipeline',
        request,
        metadata || {},
        this.methodInfoUpdateFeaturePipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeaturePipeline',
    request,
    metadata || {},
    this.methodInfoUpdateFeaturePipeline);
  }

  methodInfoDeleteFeaturePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturePipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteFeaturePipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeaturePipeline',
        request,
        metadata || {},
        this.methodInfoDeleteFeaturePipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeaturePipeline',
    request,
    metadata || {},
    this.methodInfoDeleteFeaturePipeline);
  }

  methodInfoListFeaturePipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsResponse.deserializeBinary
  );

  listFeaturePipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsResponse>;

  listFeaturePipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsResponse>;

  listFeaturePipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturePipelineRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturePipelineRuns',
        request,
        metadata || {},
        this.methodInfoListFeaturePipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturePipelineRuns',
    request,
    metadata || {},
    this.methodInfoListFeaturePipelineRuns);
  }

  methodInfoGetFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.deserializeBinary
  );

  getFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>;

  getFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>;

  getFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoGetFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoGetFeaturePipelineRun);
  }

  methodInfoCreateFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.deserializeBinary
  );

  createFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>;

  createFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>;

  createFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateFeaturePipelineRun);
  }

  methodInfoUpdateFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.deserializeBinary
  );

  updateFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>;

  updateFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>;

  updateFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateFeaturePipelineRun);
  }

  methodInfoDeleteFeaturePipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturePipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteFeaturePipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturePipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeaturePipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteFeaturePipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeaturePipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteFeaturePipelineRun);
  }

  methodInfoListFeaturesets = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse.deserializeBinary
  );

  listFeaturesets(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse>;

  listFeaturesets(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse>;

  listFeaturesets(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListFeaturesetsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturesets',
        request,
        metadata || {},
        this.methodInfoListFeaturesets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListFeaturesets',
    request,
    metadata || {},
    this.methodInfoListFeaturesets);
  }

  methodInfoGetFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.deserializeBinary
  );

  getFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  getFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  getFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetFeatureset',
        request,
        metadata || {},
        this.methodInfoGetFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetFeatureset',
    request,
    metadata || {},
    this.methodInfoGetFeatureset);
  }

  methodInfoCreateFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.deserializeBinary
  );

  createFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  createFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  createFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeatureset',
        request,
        metadata || {},
        this.methodInfoCreateFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateFeatureset',
    request,
    metadata || {},
    this.methodInfoCreateFeatureset);
  }

  methodInfoUpdateFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.deserializeBinary
  );

  updateFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  updateFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;

  updateFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeatureset',
        request,
        metadata || {},
        this.methodInfoUpdateFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateFeatureset',
    request,
    metadata || {},
    this.methodInfoUpdateFeatureset);
  }

  methodInfoDeleteFeatureset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteFeatureset(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteFeaturesetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeatureset',
        request,
        metadata || {},
        this.methodInfoDeleteFeatureset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteFeatureset',
    request,
    metadata || {},
    this.methodInfoDeleteFeatureset);
  }

  methodInfoListLabelingPipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse.deserializeBinary
  );

  listLabelingPipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse>;

  listLabelingPipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse>;

  listLabelingPipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelines',
        request,
        metadata || {},
        this.methodInfoListLabelingPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelines',
    request,
    metadata || {},
    this.methodInfoListLabelingPipelines);
  }

  methodInfoGetLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.deserializeBinary
  );

  getLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  getLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  getLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoGetLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoGetLabelingPipeline);
  }

  methodInfoCreateLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.deserializeBinary
  );

  createLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  createLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  createLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoCreateLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoCreateLabelingPipeline);
  }

  methodInfoUpdateLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.deserializeBinary
  );

  updateLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  updateLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;

  updateLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoUpdateLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoUpdateLabelingPipeline);
  }

  methodInfoDeleteLabelingPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteLabelingPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipeline',
        request,
        metadata || {},
        this.methodInfoDeleteLabelingPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipeline',
    request,
    metadata || {},
    this.methodInfoDeleteLabelingPipeline);
  }

  methodInfoListLabelingPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse.deserializeBinary
  );

  listLabelingPipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse>;

  listLabelingPipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse>;

  listLabelingPipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListLabelingPipelineRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListLabelingPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListLabelingPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListLabelingPipelineRuns);
  }

  methodInfoGetLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.deserializeBinary
  );

  getLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  getLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  getLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetLabelingPipelineRun);
  }

  methodInfoCreateLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.deserializeBinary
  );

  createLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  createLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  createLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateLabelingPipelineRun);
  }

  methodInfoUpdateLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.deserializeBinary
  );

  updateLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  updateLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;

  updateLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateLabelingPipelineRun);
  }

  methodInfoDeleteLabelingPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteLabelingPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteLabelingPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteLabelingPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteLabelingPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteLabelingPipelineRun);
  }

  methodInfoListRecipes = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse.deserializeBinary
  );

  listRecipes(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse>;

  listRecipes(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse>;

  listRecipes(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipes',
        request,
        metadata || {},
        this.methodInfoListRecipes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipes',
    request,
    metadata || {},
    this.methodInfoListRecipes);
  }

  methodInfoGetRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinary
  );

  getRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  getRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  getRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipe',
        request,
        metadata || {},
        this.methodInfoGetRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipe',
    request,
    metadata || {},
    this.methodInfoGetRecipe);
  }

  methodInfoCreateRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinary
  );

  createRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  createRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  createRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipe',
        request,
        metadata || {},
        this.methodInfoCreateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipe',
    request,
    metadata || {},
    this.methodInfoCreateRecipe);
  }

  methodInfoUpdateRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinary
  );

  updateRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  updateRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;

  updateRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipe',
        request,
        metadata || {},
        this.methodInfoUpdateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipe',
    request,
    metadata || {},
    this.methodInfoUpdateRecipe);
  }

  methodInfoDeleteRecipe = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRecipe(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipe',
        request,
        metadata || {},
        this.methodInfoDeleteRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipe',
    request,
    metadata || {},
    this.methodInfoDeleteRecipe);
  }

  methodInfoListRecipeRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse.deserializeBinary
  );

  listRecipeRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse>;

  listRecipeRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse>;

  listRecipeRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRecipeRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipeRuns',
        request,
        metadata || {},
        this.methodInfoListRecipeRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListRecipeRuns',
    request,
    metadata || {},
    this.methodInfoListRecipeRuns);
  }

  methodInfoGetRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinary
  );

  getRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  getRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  getRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipeRun',
        request,
        metadata || {},
        this.methodInfoGetRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetRecipeRun',
    request,
    metadata || {},
    this.methodInfoGetRecipeRun);
  }

  methodInfoCreateRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinary
  );

  createRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  createRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  createRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipeRun',
        request,
        metadata || {},
        this.methodInfoCreateRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateRecipeRun',
    request,
    metadata || {},
    this.methodInfoCreateRecipeRun);
  }

  methodInfoUpdateRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinary
  );

  updateRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  updateRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;

  updateRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipeRun',
        request,
        metadata || {},
        this.methodInfoUpdateRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRecipeRun',
    request,
    metadata || {},
    this.methodInfoUpdateRecipeRun);
  }

  methodInfoDeleteRecipeRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRecipeRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRecipeRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipeRun',
        request,
        metadata || {},
        this.methodInfoDeleteRecipeRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRecipeRun',
    request,
    metadata || {},
    this.methodInfoDeleteRecipeRun);
  }

  methodInfoListModelAutobuilders = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse.deserializeBinary
  );

  listModelAutobuilders(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse>;

  listModelAutobuilders(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse>;

  listModelAutobuilders(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelAutobuildersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListModelAutobuilders',
        request,
        metadata || {},
        this.methodInfoListModelAutobuilders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListModelAutobuilders',
    request,
    metadata || {},
    this.methodInfoListModelAutobuilders);
  }

  methodInfoGetModelAutobuilder = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.deserializeBinary
  );

  getModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  getModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  getModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoGetModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoGetModelAutobuilder);
  }

  methodInfoCreateModelAutobuilder = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.deserializeBinary
  );

  createModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  createModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  createModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoCreateModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoCreateModelAutobuilder);
  }

  methodInfoUpdateModelAutobuilder = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.deserializeBinary
  );

  updateModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  updateModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;

  updateModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoUpdateModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoUpdateModelAutobuilder);
  }

  methodInfoDeleteModelAutobuilder = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelAutobuilderRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteModelAutobuilder(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelAutobuilderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelAutobuilder',
        request,
        metadata || {},
        this.methodInfoDeleteModelAutobuilder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelAutobuilder',
    request,
    metadata || {},
    this.methodInfoDeleteModelAutobuilder);
  }

  methodInfoListModelPipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse.deserializeBinary
  );

  listModelPipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse>;

  listModelPipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse>;

  listModelPipelines(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelinesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelines',
        request,
        metadata || {},
        this.methodInfoListModelPipelines,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelines',
    request,
    metadata || {},
    this.methodInfoListModelPipelines);
  }

  methodInfoGetModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.deserializeBinary
  );

  getModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  getModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  getModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipeline',
        request,
        metadata || {},
        this.methodInfoGetModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipeline',
    request,
    metadata || {},
    this.methodInfoGetModelPipeline);
  }

  methodInfoCreateModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.deserializeBinary
  );

  createModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  createModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  createModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipeline',
        request,
        metadata || {},
        this.methodInfoCreateModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipeline',
    request,
    metadata || {},
    this.methodInfoCreateModelPipeline);
  }

  methodInfoUpdateModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.deserializeBinary
  );

  updateModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  updateModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;

  updateModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipeline',
        request,
        metadata || {},
        this.methodInfoUpdateModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipeline',
    request,
    metadata || {},
    this.methodInfoUpdateModelPipeline);
  }

  methodInfoDeleteModelPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteModelPipeline(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipeline',
        request,
        metadata || {},
        this.methodInfoDeleteModelPipeline,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipeline',
    request,
    metadata || {},
    this.methodInfoDeleteModelPipeline);
  }

  methodInfoListModelPipelineRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse.deserializeBinary
  );

  listModelPipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse>;

  listModelPipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse>;

  listModelPipelineRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelPipelineRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelineRuns',
        request,
        metadata || {},
        this.methodInfoListModelPipelineRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListModelPipelineRuns',
    request,
    metadata || {},
    this.methodInfoListModelPipelineRuns);
  }

  methodInfoGetModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.deserializeBinary
  );

  getModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  getModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  getModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoGetModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoGetModelPipelineRun);
  }

  methodInfoCreateModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.deserializeBinary
  );

  createModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  createModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  createModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoCreateModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoCreateModelPipelineRun);
  }

  methodInfoUpdateModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.deserializeBinary
  );

  updateModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  updateModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;

  updateModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoUpdateModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoUpdateModelPipelineRun);
  }

  methodInfoDeleteModelPipelineRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteModelPipelineRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelPipelineRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipelineRun',
        request,
        metadata || {},
        this.methodInfoDeleteModelPipelineRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModelPipelineRun',
    request,
    metadata || {},
    this.methodInfoDeleteModelPipelineRun);
  }

  methodInfoListNotebooks = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse.deserializeBinary
  );

  listNotebooks(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse>;

  listNotebooks(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse>;

  listNotebooks(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebooksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebooks',
        request,
        metadata || {},
        this.methodInfoListNotebooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebooks',
    request,
    metadata || {},
    this.methodInfoListNotebooks);
  }

  methodInfoGetNotebook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.deserializeBinary
  );

  getNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  getNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  getNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebook',
        request,
        metadata || {},
        this.methodInfoGetNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebook',
    request,
    metadata || {},
    this.methodInfoGetNotebook);
  }

  methodInfoCreateNotebook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.deserializeBinary
  );

  createNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  createNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  createNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebook',
        request,
        metadata || {},
        this.methodInfoCreateNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebook',
    request,
    metadata || {},
    this.methodInfoCreateNotebook);
  }

  methodInfoUpdateNotebook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.deserializeBinary
  );

  updateNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  updateNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;

  updateNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebook',
        request,
        metadata || {},
        this.methodInfoUpdateNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebook',
    request,
    metadata || {},
    this.methodInfoUpdateNotebook);
  }

  methodInfoDeleteNotebook = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteNotebook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebook',
        request,
        metadata || {},
        this.methodInfoDeleteNotebook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebook',
    request,
    metadata || {},
    this.methodInfoDeleteNotebook);
  }

  methodInfoListNotebookRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse.deserializeBinary
  );

  listNotebookRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse>;

  listNotebookRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse>;

  listNotebookRuns(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListNotebookRunsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebookRuns',
        request,
        metadata || {},
        this.methodInfoListNotebookRuns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListNotebookRuns',
    request,
    metadata || {},
    this.methodInfoListNotebookRuns);
  }

  methodInfoGetNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.deserializeBinary
  );

  getNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  getNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  getNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebookRun',
        request,
        metadata || {},
        this.methodInfoGetNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetNotebookRun',
    request,
    metadata || {},
    this.methodInfoGetNotebookRun);
  }

  methodInfoCreateNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.deserializeBinary
  );

  createNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  createNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  createNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebookRun',
        request,
        metadata || {},
        this.methodInfoCreateNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateNotebookRun',
    request,
    metadata || {},
    this.methodInfoCreateNotebookRun);
  }

  methodInfoUpdateNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRunRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.deserializeBinary
  );

  updateNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  updateNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;

  updateNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebookRun',
        request,
        metadata || {},
        this.methodInfoUpdateNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateNotebookRun',
    request,
    metadata || {},
    this.methodInfoUpdateNotebookRun);
  }

  methodInfoDeleteNotebookRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRunRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteNotebookRun(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteNotebookRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebookRun',
        request,
        metadata || {},
        this.methodInfoDeleteNotebookRun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteNotebookRun',
    request,
    metadata || {},
    this.methodInfoDeleteNotebookRun);
  }

  methodInfoListReports = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse.deserializeBinary
  );

  listReports(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse>;

  listReports(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse>;

  listReports(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReportsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListReports',
        request,
        metadata || {},
        this.methodInfoListReports,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListReports',
    request,
    metadata || {},
    this.methodInfoListReports);
  }

  methodInfoGetReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinary
  );

  getReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  getReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  getReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetReport',
        request,
        metadata || {},
        this.methodInfoGetReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetReport',
    request,
    metadata || {},
    this.methodInfoGetReport);
  }

  methodInfoCreateReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinary
  );

  createReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  createReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  createReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateReport',
        request,
        metadata || {},
        this.methodInfoCreateReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateReport',
    request,
    metadata || {},
    this.methodInfoCreateReport);
  }

  methodInfoUpdateReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinary
  );

  updateReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  updateReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>;

  updateReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReport',
        request,
        metadata || {},
        this.methodInfoUpdateReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReport',
    request,
    metadata || {},
    this.methodInfoUpdateReport);
  }

  methodInfoDeleteReport = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReportRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReport',
        request,
        metadata || {},
        this.methodInfoDeleteReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReport',
    request,
    metadata || {},
    this.methodInfoDeleteReport);
  }

  methodInfoListCronReports = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse.deserializeBinary
  );

  listCronReports(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse>;

  listCronReports(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse>;

  listCronReports(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronReportsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListCronReports',
        request,
        metadata || {},
        this.methodInfoListCronReports,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListCronReports',
    request,
    metadata || {},
    this.methodInfoListCronReports);
  }

  methodInfoGetCronReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.deserializeBinary
  );

  getCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  getCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  getCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetCronReport',
        request,
        metadata || {},
        this.methodInfoGetCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetCronReport',
    request,
    metadata || {},
    this.methodInfoGetCronReport);
  }

  methodInfoCreateCronReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.deserializeBinary
  );

  createCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  createCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  createCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronReport',
        request,
        metadata || {},
        this.methodInfoCreateCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronReport',
    request,
    metadata || {},
    this.methodInfoCreateCronReport);
  }

  methodInfoUpdateCronReport = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronReportRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.deserializeBinary
  );

  updateCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  updateCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;

  updateCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronReport',
        request,
        metadata || {},
        this.methodInfoUpdateCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronReport',
    request,
    metadata || {},
    this.methodInfoUpdateCronReport);
  }

  methodInfoDeleteCronReport = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronReportRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteCronReport(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronReport',
        request,
        metadata || {},
        this.methodInfoDeleteCronReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronReport',
    request,
    metadata || {},
    this.methodInfoDeleteCronReport);
  }

  methodInfoListStudies = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse.deserializeBinary
  );

  listStudies(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse>;

  listStudies(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse>;

  listStudies(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListStudiesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListStudies',
        request,
        metadata || {},
        this.methodInfoListStudies,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListStudies',
    request,
    metadata || {},
    this.methodInfoListStudies);
  }

  methodInfoGetStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinary
  );

  getStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  getStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  getStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetStudy',
        request,
        metadata || {},
        this.methodInfoGetStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetStudy',
    request,
    metadata || {},
    this.methodInfoGetStudy);
  }

  methodInfoCreateStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinary
  );

  createStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  createStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  createStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateStudy',
        request,
        metadata || {},
        this.methodInfoCreateStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateStudy',
    request,
    metadata || {},
    this.methodInfoCreateStudy);
  }

  methodInfoUpdateStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateStudyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinary
  );

  updateStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  updateStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>;

  updateStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateStudy',
        request,
        metadata || {},
        this.methodInfoUpdateStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateStudy',
    request,
    metadata || {},
    this.methodInfoUpdateStudy);
  }

  methodInfoDeleteStudy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteStudyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteStudyRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteStudy(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteStudyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteStudy',
        request,
        metadata || {},
        this.methodInfoDeleteStudy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteStudy',
    request,
    metadata || {},
    this.methodInfoDeleteStudy);
  }

  methodInfoListModels = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse.deserializeBinary
  );

  listModels(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse>;

  listModels(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse>;

  listModels(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListModelsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListModels',
        request,
        metadata || {},
        this.methodInfoListModels,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListModels',
    request,
    metadata || {},
    this.methodInfoListModels);
  }

  methodInfoGetModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinary
  );

  getModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  getModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  getModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetModel',
        request,
        metadata || {},
        this.methodInfoGetModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetModel',
    request,
    metadata || {},
    this.methodInfoGetModel);
  }

  methodInfoCreateModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinary
  );

  createModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  createModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  createModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateModel',
        request,
        metadata || {},
        this.methodInfoCreateModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateModel',
    request,
    metadata || {},
    this.methodInfoCreateModel);
  }

  methodInfoUpdateModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinary
  );

  updateModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  updateModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>;

  updateModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModel',
        request,
        metadata || {},
        this.methodInfoUpdateModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateModel',
    request,
    metadata || {},
    this.methodInfoUpdateModel);
  }

  methodInfoDeleteModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteModel(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModel',
        request,
        metadata || {},
        this.methodInfoDeleteModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteModel',
    request,
    metadata || {},
    this.methodInfoDeleteModel);
  }

  methodInfoListCronPredictions = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse.deserializeBinary
  );

  listCronPredictions(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse>;

  listCronPredictions(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse>;

  listCronPredictions(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCronPredictionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListCronPredictions',
        request,
        metadata || {},
        this.methodInfoListCronPredictions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListCronPredictions',
    request,
    metadata || {},
    this.methodInfoListCronPredictions);
  }

  methodInfoGetCronPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.deserializeBinary
  );

  getCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  getCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  getCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetCronPrediction',
        request,
        metadata || {},
        this.methodInfoGetCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetCronPrediction',
    request,
    metadata || {},
    this.methodInfoGetCronPrediction);
  }

  methodInfoCreateCronPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.deserializeBinary
  );

  createCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  createCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  createCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronPrediction',
        request,
        metadata || {},
        this.methodInfoCreateCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateCronPrediction',
    request,
    metadata || {},
    this.methodInfoCreateCronPrediction);
  }

  methodInfoUpdateCronPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.deserializeBinary
  );

  updateCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  updateCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;

  updateCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronPrediction',
        request,
        metadata || {},
        this.methodInfoUpdateCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCronPrediction',
    request,
    metadata || {},
    this.methodInfoUpdateCronPrediction);
  }

  methodInfoDeleteCronPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronPredictionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteCronPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCronPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronPrediction',
        request,
        metadata || {},
        this.methodInfoDeleteCronPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCronPrediction',
    request,
    metadata || {},
    this.methodInfoDeleteCronPrediction);
  }

  methodInfoListPredictions = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse.deserializeBinary
  );

  listPredictions(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse>;

  listPredictions(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse>;

  listPredictions(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictions',
        request,
        metadata || {},
        this.methodInfoListPredictions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictions',
    request,
    metadata || {},
    this.methodInfoListPredictions);
  }

  methodInfoGetPrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinary
  );

  getPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  getPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  getPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetPrediction',
        request,
        metadata || {},
        this.methodInfoGetPrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetPrediction',
    request,
    metadata || {},
    this.methodInfoGetPrediction);
  }

  methodInfoCreatePrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinary
  );

  createPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  createPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  createPrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreatePrediction',
        request,
        metadata || {},
        this.methodInfoCreatePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreatePrediction',
    request,
    metadata || {},
    this.methodInfoCreatePrediction);
  }

  methodInfoUpdatePrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictionRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinary
  );

  updatePrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  updatePrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;

  updatePrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePrediction',
        request,
        metadata || {},
        this.methodInfoUpdatePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePrediction',
    request,
    metadata || {},
    this.methodInfoUpdatePrediction);
  }

  methodInfoDeletePrediction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deletePrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deletePrediction(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeletePrediction',
        request,
        metadata || {},
        this.methodInfoDeletePrediction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeletePrediction',
    request,
    metadata || {},
    this.methodInfoDeletePrediction);
  }

  methodInfoListPredictors = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse.deserializeBinary
  );

  listPredictors(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse>;

  listPredictors(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse>;

  listPredictors(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPredictorsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictors',
        request,
        metadata || {},
        this.methodInfoListPredictors,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListPredictors',
    request,
    metadata || {},
    this.methodInfoListPredictors);
  }

  methodInfoGetPredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinary
  );

  getPredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  getPredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  getPredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetPredictor',
        request,
        metadata || {},
        this.methodInfoGetPredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetPredictor',
    request,
    metadata || {},
    this.methodInfoGetPredictor);
  }

  methodInfoCreatePredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinary
  );

  createPredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  createPredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  createPredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreatePredictor',
        request,
        metadata || {},
        this.methodInfoCreatePredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreatePredictor',
    request,
    metadata || {},
    this.methodInfoCreatePredictor);
  }

  methodInfoUpdatePredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinary
  );

  updatePredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  updatePredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;

  updatePredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePredictor',
        request,
        metadata || {},
        this.methodInfoUpdatePredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePredictor',
    request,
    metadata || {},
    this.methodInfoUpdatePredictor);
  }

  methodInfoDeletePredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictorRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deletePredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deletePredictor(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeletePredictor',
        request,
        metadata || {},
        this.methodInfoDeletePredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeletePredictor',
    request,
    metadata || {},
    this.methodInfoDeletePredictor);
  }

  methodInfoListCurtains = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse.deserializeBinary
  );

  listCurtains(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse>;

  listCurtains(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse>;

  listCurtains(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListCurtainsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListCurtains',
        request,
        metadata || {},
        this.methodInfoListCurtains,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListCurtains',
    request,
    metadata || {},
    this.methodInfoListCurtains);
  }

  methodInfoGetCurtain = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.deserializeBinary
  );

  getCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  getCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  getCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetCurtain',
        request,
        metadata || {},
        this.methodInfoGetCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetCurtain',
    request,
    metadata || {},
    this.methodInfoGetCurtain);
  }

  methodInfoCreateCurtain = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.deserializeBinary
  );

  createCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  createCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  createCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateCurtain',
        request,
        metadata || {},
        this.methodInfoCreateCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateCurtain',
    request,
    metadata || {},
    this.methodInfoCreateCurtain);
  }

  methodInfoUpdateCurtain = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCurtainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.deserializeBinary
  );

  updateCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  updateCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;

  updateCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCurtain',
        request,
        metadata || {},
        this.methodInfoUpdateCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateCurtain',
    request,
    metadata || {},
    this.methodInfoUpdateCurtain);
  }

  methodInfoDeleteCurtain = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCurtainRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCurtainRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteCurtain(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteCurtainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCurtain',
        request,
        metadata || {},
        this.methodInfoDeleteCurtain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteCurtain',
    request,
    metadata || {},
    this.methodInfoDeleteCurtain);
  }

  methodInfoListReviews = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse.deserializeBinary
  );

  listReviews(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse>;

  listReviews(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse>;

  listReviews(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListReviewsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListReviews',
        request,
        metadata || {},
        this.methodInfoListReviews,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListReviews',
    request,
    metadata || {},
    this.methodInfoListReviews);
  }

  methodInfoGetReview = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review.deserializeBinary
  );

  getReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  getReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  getReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetReview',
        request,
        metadata || {},
        this.methodInfoGetReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetReview',
    request,
    metadata || {},
    this.methodInfoGetReview);
  }

  methodInfoCreateReview = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review.deserializeBinary
  );

  createReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  createReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  createReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateReview',
        request,
        metadata || {},
        this.methodInfoCreateReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateReview',
    request,
    metadata || {},
    this.methodInfoCreateReview);
  }

  methodInfoUpdateReview = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReviewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review.deserializeBinary
  );

  updateReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  updateReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review>;

  updateReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Review) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReview',
        request,
        metadata || {},
        this.methodInfoUpdateReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateReview',
    request,
    metadata || {},
    this.methodInfoUpdateReview);
  }

  methodInfoDeleteReview = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReviewRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteReview(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReview',
        request,
        metadata || {},
        this.methodInfoDeleteReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteReview',
    request,
    metadata || {},
    this.methodInfoDeleteReview);
  }

  methodInfoListPostMortems = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse.deserializeBinary
  );

  listPostMortems(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse>;

  listPostMortems(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse>;

  listPostMortems(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListPostMortemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListPostMortems',
        request,
        metadata || {},
        this.methodInfoListPostMortems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListPostMortems',
    request,
    metadata || {},
    this.methodInfoListPostMortems);
  }

  methodInfoGetPostMortem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.deserializeBinary
  );

  getPostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  getPostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  getPostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetPostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetPostMortem',
        request,
        metadata || {},
        this.methodInfoGetPostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetPostMortem',
    request,
    metadata || {},
    this.methodInfoGetPostMortem);
  }

  methodInfoCreatePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.deserializeBinary
  );

  createPostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  createPostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  createPostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreatePostMortem',
        request,
        metadata || {},
        this.methodInfoCreatePostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreatePostMortem',
    request,
    metadata || {},
    this.methodInfoCreatePostMortem);
  }

  methodInfoUpdatePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePostMortemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.deserializeBinary
  );

  updatePostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  updatePostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;

  updatePostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdatePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePostMortem',
        request,
        metadata || {},
        this.methodInfoUpdatePostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdatePostMortem',
    request,
    metadata || {},
    this.methodInfoUpdatePostMortem);
  }

  methodInfoDeletePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePostMortemRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePostMortemRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deletePostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deletePostMortem(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeletePostMortemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeletePostMortem',
        request,
        metadata || {},
        this.methodInfoDeletePostMortem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeletePostMortem',
    request,
    metadata || {},
    this.methodInfoDeletePostMortem);
  }

  methodInfoListRunBooks = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse.deserializeBinary
  );

  listRunBooks(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse>;

  listRunBooks(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse>;

  listRunBooks(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.ListRunbooksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListRunBooks',
        request,
        metadata || {},
        this.methodInfoListRunBooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/ListRunBooks',
    request,
    metadata || {},
    this.methodInfoListRunBooks);
  }

  methodInfoGetRunBook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRunbookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.deserializeBinary
  );

  getRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRunbookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  getRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  getRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.GetRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetRunBook',
        request,
        metadata || {},
        this.methodInfoGetRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/GetRunBook',
    request,
    metadata || {},
    this.methodInfoGetRunBook);
  }

  methodInfoCreateRunBook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRunbookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.deserializeBinary
  );

  createRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRunbookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  createRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  createRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.CreateRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateRunBook',
        request,
        metadata || {},
        this.methodInfoCreateRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/CreateRunBook',
    request,
    metadata || {},
    this.methodInfoCreateRunBook);
  }

  methodInfoUpdateRunBook = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRunbookRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.deserializeBinary
  );

  updateRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRunbookRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  updateRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;

  updateRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.UpdateRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRunBook',
        request,
        metadata || {},
        this.methodInfoUpdateRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/UpdateRunBook',
    request,
    metadata || {},
    this.methodInfoUpdateRunBook);
  }

  methodInfoDeleteRunBook = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRunbookRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRunbookRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRunBook(
    request: github_com_metaprov_modeldapi_services_dbproxyd_v1_dbproxyd_pb.DeleteRunbookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRunBook',
        request,
        metadata || {},
        this.methodInfoDeleteRunBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.dbproxyd.v1.DatabaseProxyService/DeleteRunBook',
    request,
    metadata || {},
    this.methodInfoDeleteRunBook);
  }

}

