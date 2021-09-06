/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.license.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_license_v1_license_pb from '../../../../../../github.com/metaprov/modelaapi/services/license/v1/license_pb';


export class LicenseServiceClient {
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

  methodInfoListLicenses = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesResponse,
    (request: github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesResponse.deserializeBinary
  );

  listLicenses(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesResponse>;

  listLicenses(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesResponse>;

  listLicenses(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.ListLicensesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/ListLicenses',
        request,
        metadata || {},
        this.methodInfoListLicenses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/ListLicenses',
    request,
    metadata || {},
    this.methodInfoListLicenses);
  }

  methodInfoCreateLicense = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse,
    (request: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse.deserializeBinary
  );

  createLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse>;

  createLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse>;

  createLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/CreateLicense',
        request,
        metadata || {},
        this.methodInfoCreateLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/CreateLicense',
    request,
    metadata || {},
    this.methodInfoCreateLicense);
  }

  methodInfoCreateLicenseFromKey = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse,
    (request: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseFromKeyRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse.deserializeBinary
  );

  createLicenseFromKey(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseFromKeyRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse>;

  createLicenseFromKey(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseFromKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse>;

  createLicenseFromKey(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseFromKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.CreateLicenseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/CreateLicenseFromKey',
        request,
        metadata || {},
        this.methodInfoCreateLicenseFromKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/CreateLicenseFromKey',
    request,
    metadata || {},
    this.methodInfoCreateLicenseFromKey);
  }

  methodInfoGetLicense = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseResponse,
    (request: github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseResponse.deserializeBinary
  );

  getLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseResponse>;

  getLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseResponse>;

  getLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.GetLicenseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/GetLicense',
        request,
        metadata || {},
        this.methodInfoGetLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/GetLicense',
    request,
    metadata || {},
    this.methodInfoGetLicense);
  }

  methodInfoUpdateLicense = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseResponse,
    (request: github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseResponse.deserializeBinary
  );

  updateLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseResponse>;

  updateLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseResponse>;

  updateLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.UpdateLicenseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/UpdateLicense',
        request,
        metadata || {},
        this.methodInfoUpdateLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/UpdateLicense',
    request,
    metadata || {},
    this.methodInfoUpdateLicense);
  }

  methodInfoDeleteLicense = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseResponse,
    (request: github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseResponse.deserializeBinary
  );

  deleteLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseResponse>;

  deleteLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseResponse>;

  deleteLicense(
    request: github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_license_v1_license_pb.DeleteLicenseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/DeleteLicense',
        request,
        metadata || {},
        this.methodInfoDeleteLicense,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.license.v1.LicenseService/DeleteLicense',
    request,
    metadata || {},
    this.methodInfoDeleteLicense);
  }

}

