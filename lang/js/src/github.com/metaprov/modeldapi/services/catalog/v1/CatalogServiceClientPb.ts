/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.catalog.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb from '../../../../../../github.com/metaprov/modeldapi/services/catalog/v1/catalog_pb';


export class CatalogServiceClient {
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

  methodInfoListAlgorithm = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse,
    (request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse.deserializeBinary
  );

  listAlgorithm(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse>;

  listAlgorithm(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse>;

  listAlgorithm(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListAlgorithmsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/ListAlgorithm',
        request,
        metadata || {},
        this.methodInfoListAlgorithm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/ListAlgorithm',
    request,
    metadata || {},
    this.methodInfoListAlgorithm);
  }

  methodInfoGetAlgorithm = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse,
    (request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse.deserializeBinary
  );

  getAlgorithm(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse>;

  getAlgorithm(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse>;

  getAlgorithm(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetAlgorithmResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/GetAlgorithm',
        request,
        metadata || {},
        this.methodInfoGetAlgorithm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/GetAlgorithm',
    request,
    metadata || {},
    this.methodInfoGetAlgorithm);
  }

  methodInfoListMLFrameworks = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse,
    (request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse.deserializeBinary
  );

  listMLFrameworks(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse>;

  listMLFrameworks(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse>;

  listMLFrameworks(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListMLFrameworksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/ListMLFrameworks',
        request,
        metadata || {},
        this.methodInfoListMLFrameworks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/ListMLFrameworks',
    request,
    metadata || {},
    this.methodInfoListMLFrameworks);
  }

  methodInfoGetMLFramework = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse,
    (request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse.deserializeBinary
  );

  getMLFramework(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse>;

  getMLFramework(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse>;

  getMLFramework(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetMLFrameworkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/GetMLFramework',
        request,
        metadata || {},
        this.methodInfoGetMLFramework,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/GetMLFramework',
    request,
    metadata || {},
    this.methodInfoGetMLFramework);
  }

  methodInfoListClouds = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse,
    (request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse.deserializeBinary
  );

  listClouds(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse>;

  listClouds(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse>;

  listClouds(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListCloudsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/ListClouds',
        request,
        metadata || {},
        this.methodInfoListClouds,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/ListClouds',
    request,
    metadata || {},
    this.methodInfoListClouds);
  }

  methodInfoGetCloud = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse,
    (request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse.deserializeBinary
  );

  getCloud(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse>;

  getCloud(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse>;

  getCloud(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetCloudResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/GetCloud',
        request,
        metadata || {},
        this.methodInfoGetCloud,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/GetCloud',
    request,
    metadata || {},
    this.methodInfoGetCloud);
  }

  methodInfoListWorkloadClasses = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse,
    (request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse.deserializeBinary
  );

  listWorkloadClasses(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse>;

  listWorkloadClasses(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse>;

  listWorkloadClasses(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.ListWorkloadClassesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/ListWorkloadClasses',
        request,
        metadata || {},
        this.methodInfoListWorkloadClasses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/ListWorkloadClasses',
    request,
    metadata || {},
    this.methodInfoListWorkloadClasses);
  }

  methodInfoGetWorkloadClass = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse,
    (request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse.deserializeBinary
  );

  getWorkloadClass(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse>;

  getWorkloadClass(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse>;

  getWorkloadClass(
    request: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_catalog_v1_catalog_pb.GetWorkloadClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/GetWorkloadClass',
        request,
        metadata || {},
        this.methodInfoGetWorkloadClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.catalog.v1.CatalogService/GetWorkloadClass',
    request,
    metadata || {},
    this.methodInfoGetWorkloadClass);
  }

}

