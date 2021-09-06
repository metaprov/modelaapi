/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.predictor.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb from '../../../../../../github.com/metaprov/modelaapi/services/predictor/v1/predictor_pb';


export class PredictorServiceClient {
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

  methodInfoListPredictors = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsResponse,
    (request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsResponse.deserializeBinary
  );

  listPredictors(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsResponse>;

  listPredictors(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsResponse>;

  listPredictors(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.ListPredictorsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/ListPredictors',
        request,
        metadata || {},
        this.methodInfoListPredictors,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/ListPredictors',
    request,
    metadata || {},
    this.methodInfoListPredictors);
  }

  methodInfoCreatePredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorResponse,
    (request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorResponse.deserializeBinary
  );

  createPredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorResponse>;

  createPredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorResponse>;

  createPredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.CreatePredictorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/CreatePredictor',
        request,
        metadata || {},
        this.methodInfoCreatePredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/CreatePredictor',
    request,
    metadata || {},
    this.methodInfoCreatePredictor);
  }

  methodInfoGetPredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorResponse,
    (request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorResponse.deserializeBinary
  );

  getPredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorResponse>;

  getPredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorResponse>;

  getPredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.GetPredictorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/GetPredictor',
        request,
        metadata || {},
        this.methodInfoGetPredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/GetPredictor',
    request,
    metadata || {},
    this.methodInfoGetPredictor);
  }

  methodInfoUpdatePredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse,
    (request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse.deserializeBinary
  );

  updatePredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse>;

  updatePredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse>;

  updatePredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/UpdatePredictor',
        request,
        metadata || {},
        this.methodInfoUpdatePredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/UpdatePredictor',
    request,
    metadata || {},
    this.methodInfoUpdatePredictor);
  }

  methodInfoRollBack = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackResponse,
    (request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackResponse.deserializeBinary
  );

  rollBack(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackResponse>;

  rollBack(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackResponse>;

  rollBack(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.RollbackResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/RollBack',
        request,
        metadata || {},
        this.methodInfoRollBack,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/RollBack',
    request,
    metadata || {},
    this.methodInfoRollBack);
  }

  methodInfoDeletePredictor = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorResponse,
    (request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorResponse.deserializeBinary
  );

  deletePredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorResponse>;

  deletePredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorResponse>;

  deletePredictor(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.DeletePredictorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/DeletePredictor',
        request,
        metadata || {},
        this.methodInfoDeletePredictor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/DeletePredictor',
    request,
    metadata || {},
    this.methodInfoDeletePredictor);
  }

  methodInfoPredictOne = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneResponse,
    (request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneResponse.deserializeBinary
  );

  predictOne(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneResponse>;

  predictOne(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneResponse>;

  predictOne(
    request: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_predictor_v1_predictor_pb.PredictOneResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/PredictOne',
        request,
        metadata || {},
        this.methodInfoPredictOne,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/PredictOne',
    request,
    metadata || {},
    this.methodInfoPredictOne);
  }

}

