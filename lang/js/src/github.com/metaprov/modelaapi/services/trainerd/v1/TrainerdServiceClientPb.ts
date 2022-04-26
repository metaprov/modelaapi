/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.trainerd.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb from '../../../../../../github.com/metaprov/modelaapi/services/trainerd/v1/trainerd_pb';


export class TrainerdServiceClient {
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

  methodInfoTrain = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Train',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainRequest,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse,
    (request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse.deserializeBinary
  );

  train(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse>;

  train(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse>;

  train(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Train',
        request,
        metadata || {},
        this.methodInfoTrain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Train',
    request,
    metadata || {},
    this.methodInfoTrain);
  }

  methodInfoExplain = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Explain',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainRequest,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainResponse,
    (request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainResponse.deserializeBinary
  );

  explain(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainResponse>;

  explain(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainResponse>;

  explain(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ExplainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Explain',
        request,
        metadata || {},
        this.methodInfoExplain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Explain',
    request,
    metadata || {},
    this.methodInfoExplain);
  }

  methodInfoForecast = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Forecast',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastRequest,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastResponse,
    (request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastResponse.deserializeBinary
  );

  forecast(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastResponse>;

  forecast(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastResponse>;

  forecast(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ForecastResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Forecast',
        request,
        metadata || {},
        this.methodInfoForecast,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Forecast',
    request,
    metadata || {},
    this.methodInfoForecast);
  }

  methodInfoTest = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Test',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestRequest,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse,
    (request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse.deserializeBinary
  );

  test(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse>;

  test(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse>;

  test(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Test',
        request,
        metadata || {},
        this.methodInfoTest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Test',
    request,
    metadata || {},
    this.methodInfoTest);
  }

  methodInfoTrainEnsemble = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/TrainEnsemble',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainEnsembleRequest,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse,
    (request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainEnsembleRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse.deserializeBinary
  );

  trainEnsemble(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainEnsembleRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse>;

  trainEnsemble(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainEnsembleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse>;

  trainEnsemble(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainEnsembleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/TrainEnsemble',
        request,
        metadata || {},
        this.methodInfoTrainEnsemble,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/TrainEnsemble',
    request,
    metadata || {},
    this.methodInfoTrainEnsemble);
  }

  methodInfoTrainDriftDetector = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/TrainDriftDetector',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainDriftDetectorRequest,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse,
    (request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainDriftDetectorRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse.deserializeBinary
  );

  trainDriftDetector(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainDriftDetectorRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse>;

  trainDriftDetector(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainDriftDetectorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse>;

  trainDriftDetector(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainDriftDetectorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TrainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/TrainDriftDetector',
        request,
        metadata || {},
        this.methodInfoTrainDriftDetector,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/TrainDriftDetector',
    request,
    metadata || {},
    this.methodInfoTrainDriftDetector);
  }

  methodInfoTestEnsemble = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/TestEnsemble',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestEnsembleRequest,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse,
    (request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestEnsembleRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse.deserializeBinary
  );

  testEnsemble(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestEnsembleRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse>;

  testEnsemble(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestEnsembleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse>;

  testEnsemble(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestEnsembleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.TestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/TestEnsemble',
        request,
        metadata || {},
        this.methodInfoTestEnsemble,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/TestEnsemble',
    request,
    metadata || {},
    this.methodInfoTestEnsemble);
  }

  methodInfoShutdown = new grpcWeb.MethodDescriptor(
    '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Shutdown',
    grpcWeb.MethodType.UNARY,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownRequest,
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownResponse,
    (request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownResponse.deserializeBinary
  );

  shutdown(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: github_com_metaprov_modelaapi_services_trainerd_v1_trainerd_pb.ShutdownResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Shutdown',
        request,
        metadata || {},
        this.methodInfoShutdown,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.trainerd.v1.TrainerdService/Shutdown',
    request,
    metadata || {},
    this.methodInfoShutdown);
  }

}

