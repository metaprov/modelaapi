/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.model.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_model_v1_model_pb from '../../../../../../github.com/metaprov/modeldapi/services/model/v1/model_pb';


export class ModelServiceClient {
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

  methodInfoListModels = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse.deserializeBinary
  );

  listModels(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse>;

  listModels(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse>;

  listModels(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.ListModelsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/ListModels',
        request,
        metadata || {},
        this.methodInfoListModels,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/ListModels',
    request,
    metadata || {},
    this.methodInfoListModels);
  }

  methodInfoCreateModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse.deserializeBinary
  );

  createModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse>;

  createModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse>;

  createModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/CreateModel',
        request,
        metadata || {},
        this.methodInfoCreateModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/CreateModel',
    request,
    metadata || {},
    this.methodInfoCreateModel);
  }

  methodInfoGetModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse.deserializeBinary
  );

  getModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse>;

  getModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse>;

  getModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/GetModel',
        request,
        metadata || {},
        this.methodInfoGetModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/GetModel',
    request,
    metadata || {},
    this.methodInfoGetModel);
  }

  methodInfoUpdateModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse.deserializeBinary
  );

  updateModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse>;

  updateModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse>;

  updateModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.UpdateModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/UpdateModel',
        request,
        metadata || {},
        this.methodInfoUpdateModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/UpdateModel',
    request,
    metadata || {},
    this.methodInfoUpdateModel);
  }

  methodInfoDeleteModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse.deserializeBinary
  );

  deleteModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse>;

  deleteModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse>;

  deleteModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeleteModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/DeleteModel',
        request,
        metadata || {},
        this.methodInfoDeleteModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/DeleteModel',
    request,
    metadata || {},
    this.methodInfoDeleteModel);
  }

  methodInfoDeployModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse.deserializeBinary
  );

  deployModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse>;

  deployModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse>;

  deployModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.DeployModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/DeployModel',
        request,
        metadata || {},
        this.methodInfoDeployModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/DeployModel',
    request,
    metadata || {},
    this.methodInfoDeployModel);
  }

  methodInfoPublishModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse.deserializeBinary
  );

  publishModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse>;

  publishModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse>;

  publishModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.PublishModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/PublishModel',
        request,
        metadata || {},
        this.methodInfoPublishModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/PublishModel',
    request,
    metadata || {},
    this.methodInfoPublishModel);
  }

  methodInfoCreateModelProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse.deserializeBinary
  );

  createModelProfile(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse>;

  createModelProfile(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse>;

  createModelProfile(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.CreateModelProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/CreateModelProfile',
        request,
        metadata || {},
        this.methodInfoCreateModelProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/CreateModelProfile',
    request,
    metadata || {},
    this.methodInfoCreateModelProfile);
  }

  methodInfoGetModelProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse.deserializeBinary
  );

  getModelProfile(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse>;

  getModelProfile(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse>;

  getModelProfile(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/GetModelProfile',
        request,
        metadata || {},
        this.methodInfoGetModelProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/GetModelProfile',
    request,
    metadata || {},
    this.methodInfoGetModelProfile);
  }

  methodInfoGetModelMisclass = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse.deserializeBinary
  );

  getModelMisclass(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse>;

  getModelMisclass(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse>;

  getModelMisclass(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetMisclassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/GetModelMisclass',
        request,
        metadata || {},
        this.methodInfoGetModelMisclass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/GetModelMisclass',
    request,
    metadata || {},
    this.methodInfoGetModelMisclass);
  }

  methodInfoGetModelLogs = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse.deserializeBinary
  );

  getModelLogs(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse>;

  getModelLogs(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse>;

  getModelLogs(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.GetModelLogsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/GetModelLogs',
        request,
        metadata || {},
        this.methodInfoGetModelLogs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/GetModelLogs',
    request,
    metadata || {},
    this.methodInfoGetModelLogs);
  }

  methodInfoAbortModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse.deserializeBinary
  );

  abortModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse>;

  abortModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse>;

  abortModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.AbortModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/AbortModel',
        request,
        metadata || {},
        this.methodInfoAbortModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/AbortModel',
    request,
    metadata || {},
    this.methodInfoAbortModel);
  }

  methodInfoPauseModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse.deserializeBinary
  );

  pauseModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse>;

  pauseModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse>;

  pauseModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.PauseModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/PauseModel',
        request,
        metadata || {},
        this.methodInfoPauseModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/PauseModel',
    request,
    metadata || {},
    this.methodInfoPauseModel);
  }

  methodInfoResumeModel = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse.deserializeBinary
  );

  resumeModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse>;

  resumeModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse>;

  resumeModel(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.ResumeModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/ResumeModel',
        request,
        metadata || {},
        this.methodInfoResumeModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/ResumeModel',
    request,
    metadata || {},
    this.methodInfoResumeModel);
  }

  methodInfoCompareModels = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse,
    (request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse.deserializeBinary
  );

  compareModels(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse>;

  compareModels(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse>;

  compareModels(
    request: github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_model_v1_model_pb.CompareModelsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.model.v1.ModelService/CompareModels',
        request,
        metadata || {},
        this.methodInfoCompareModels,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.model.v1.ModelService/CompareModels',
    request,
    metadata || {},
    this.methodInfoCompareModels);
  }

}

