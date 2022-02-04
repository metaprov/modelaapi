import * as jspb from 'google-protobuf'

import * as protoc$gen$swagger_options_annotations_pb from '../../../../../../protoc-gen-swagger/options/annotations_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class ServerLiveRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerLiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerLiveRequest): ServerLiveRequest.AsObject;
  static serializeBinaryToWriter(message: ServerLiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerLiveRequest;
  static deserializeBinaryFromReader(message: ServerLiveRequest, reader: jspb.BinaryReader): ServerLiveRequest;
}

export namespace ServerLiveRequest {
  export type AsObject = {
  }
}

export class ServerLiveResponse extends jspb.Message {
  getLive(): boolean;
  setLive(value: boolean): ServerLiveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerLiveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerLiveResponse): ServerLiveResponse.AsObject;
  static serializeBinaryToWriter(message: ServerLiveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerLiveResponse;
  static deserializeBinaryFromReader(message: ServerLiveResponse, reader: jspb.BinaryReader): ServerLiveResponse;
}

export namespace ServerLiveResponse {
  export type AsObject = {
    live: boolean,
  }
}

export class ServerReadyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerReadyRequest): ServerReadyRequest.AsObject;
  static serializeBinaryToWriter(message: ServerReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerReadyRequest;
  static deserializeBinaryFromReader(message: ServerReadyRequest, reader: jspb.BinaryReader): ServerReadyRequest;
}

export namespace ServerReadyRequest {
  export type AsObject = {
  }
}

export class ServerReadyResponse extends jspb.Message {
  getReady(): boolean;
  setReady(value: boolean): ServerReadyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerReadyResponse): ServerReadyResponse.AsObject;
  static serializeBinaryToWriter(message: ServerReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerReadyResponse;
  static deserializeBinaryFromReader(message: ServerReadyResponse, reader: jspb.BinaryReader): ServerReadyResponse;
}

export namespace ServerReadyResponse {
  export type AsObject = {
    ready: boolean,
  }
}

export class ModelReadyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ModelReadyRequest;

  getVersion(): string;
  setVersion(value: string): ModelReadyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelReadyRequest): ModelReadyRequest.AsObject;
  static serializeBinaryToWriter(message: ModelReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelReadyRequest;
  static deserializeBinaryFromReader(message: ModelReadyRequest, reader: jspb.BinaryReader): ModelReadyRequest;
}

export namespace ModelReadyRequest {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export class ModelReadyResponse extends jspb.Message {
  getReady(): boolean;
  setReady(value: boolean): ModelReadyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelReadyResponse): ModelReadyResponse.AsObject;
  static serializeBinaryToWriter(message: ModelReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelReadyResponse;
  static deserializeBinaryFromReader(message: ModelReadyResponse, reader: jspb.BinaryReader): ModelReadyResponse;
}

export namespace ModelReadyResponse {
  export type AsObject = {
    ready: boolean,
  }
}

export class ServerMetadataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMetadataRequest): ServerMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: ServerMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMetadataRequest;
  static deserializeBinaryFromReader(message: ServerMetadataRequest, reader: jspb.BinaryReader): ServerMetadataRequest;
}

export namespace ServerMetadataRequest {
  export type AsObject = {
  }
}

export class ServerMetadataResponse extends jspb.Message {
  getName(): string;
  setName(value: string): ServerMetadataResponse;

  getVersion(): string;
  setVersion(value: string): ServerMetadataResponse;

  getExtensionsList(): Array<string>;
  setExtensionsList(value: Array<string>): ServerMetadataResponse;
  clearExtensionsList(): ServerMetadataResponse;
  addExtensions(value: string, index?: number): ServerMetadataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMetadataResponse): ServerMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: ServerMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMetadataResponse;
  static deserializeBinaryFromReader(message: ServerMetadataResponse, reader: jspb.BinaryReader): ServerMetadataResponse;
}

export namespace ServerMetadataResponse {
  export type AsObject = {
    name: string,
    version: string,
    extensionsList: Array<string>,
  }
}

export class ModelMetadataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ModelMetadataRequest;

  getVersion(): string;
  setVersion(value: string): ModelMetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelMetadataRequest): ModelMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: ModelMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelMetadataRequest;
  static deserializeBinaryFromReader(message: ModelMetadataRequest, reader: jspb.BinaryReader): ModelMetadataRequest;
}

export namespace ModelMetadataRequest {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export class ModelMetadataResponse extends jspb.Message {
  getName(): string;
  setName(value: string): ModelMetadataResponse;

  getVersionsList(): Array<string>;
  setVersionsList(value: Array<string>): ModelMetadataResponse;
  clearVersionsList(): ModelMetadataResponse;
  addVersions(value: string, index?: number): ModelMetadataResponse;

  getPlatform(): string;
  setPlatform(value: string): ModelMetadataResponse;

  getInputsList(): Array<ModelMetadataResponse.TensorMetadata>;
  setInputsList(value: Array<ModelMetadataResponse.TensorMetadata>): ModelMetadataResponse;
  clearInputsList(): ModelMetadataResponse;
  addInputs(value?: ModelMetadataResponse.TensorMetadata, index?: number): ModelMetadataResponse.TensorMetadata;

  getOutputsList(): Array<ModelMetadataResponse.TensorMetadata>;
  setOutputsList(value: Array<ModelMetadataResponse.TensorMetadata>): ModelMetadataResponse;
  clearOutputsList(): ModelMetadataResponse;
  addOutputs(value?: ModelMetadataResponse.TensorMetadata, index?: number): ModelMetadataResponse.TensorMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelMetadataResponse): ModelMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: ModelMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelMetadataResponse;
  static deserializeBinaryFromReader(message: ModelMetadataResponse, reader: jspb.BinaryReader): ModelMetadataResponse;
}

export namespace ModelMetadataResponse {
  export type AsObject = {
    name: string,
    versionsList: Array<string>,
    platform: string,
    inputsList: Array<ModelMetadataResponse.TensorMetadata.AsObject>,
    outputsList: Array<ModelMetadataResponse.TensorMetadata.AsObject>,
  }

  export class TensorMetadata extends jspb.Message {
    getName(): string;
    setName(value: string): TensorMetadata;

    getDatatype(): string;
    setDatatype(value: string): TensorMetadata;

    getShapeList(): Array<number>;
    setShapeList(value: Array<number>): TensorMetadata;
    clearShapeList(): TensorMetadata;
    addShape(value: number, index?: number): TensorMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TensorMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: TensorMetadata): TensorMetadata.AsObject;
    static serializeBinaryToWriter(message: TensorMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TensorMetadata;
    static deserializeBinaryFromReader(message: TensorMetadata, reader: jspb.BinaryReader): TensorMetadata;
  }

  export namespace TensorMetadata {
    export type AsObject = {
      name: string,
      datatype: string,
      shapeList: Array<number>,
    }
  }

}

export class ModelInferRequest extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): ModelInferRequest;

  getModelVersion(): string;
  setModelVersion(value: string): ModelInferRequest;

  getId(): string;
  setId(value: string): ModelInferRequest;

  getParametersMap(): jspb.Map<string, InferParameter>;
  clearParametersMap(): ModelInferRequest;

  getInputsList(): Array<ModelInferRequest.InferInputTensor>;
  setInputsList(value: Array<ModelInferRequest.InferInputTensor>): ModelInferRequest;
  clearInputsList(): ModelInferRequest;
  addInputs(value?: ModelInferRequest.InferInputTensor, index?: number): ModelInferRequest.InferInputTensor;

  getOutputsList(): Array<ModelInferRequest.InferRequestedOutputTensor>;
  setOutputsList(value: Array<ModelInferRequest.InferRequestedOutputTensor>): ModelInferRequest;
  clearOutputsList(): ModelInferRequest;
  addOutputs(value?: ModelInferRequest.InferRequestedOutputTensor, index?: number): ModelInferRequest.InferRequestedOutputTensor;

  getRawInputContentsList(): Array<Uint8Array | string>;
  setRawInputContentsList(value: Array<Uint8Array | string>): ModelInferRequest;
  clearRawInputContentsList(): ModelInferRequest;
  addRawInputContents(value: Uint8Array | string, index?: number): ModelInferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelInferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelInferRequest): ModelInferRequest.AsObject;
  static serializeBinaryToWriter(message: ModelInferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelInferRequest;
  static deserializeBinaryFromReader(message: ModelInferRequest, reader: jspb.BinaryReader): ModelInferRequest;
}

export namespace ModelInferRequest {
  export type AsObject = {
    modelName: string,
    modelVersion: string,
    id: string,
    parametersMap: Array<[string, InferParameter.AsObject]>,
    inputsList: Array<ModelInferRequest.InferInputTensor.AsObject>,
    outputsList: Array<ModelInferRequest.InferRequestedOutputTensor.AsObject>,
    rawInputContentsList: Array<Uint8Array | string>,
  }

  export class InferInputTensor extends jspb.Message {
    getName(): string;
    setName(value: string): InferInputTensor;

    getDatatype(): string;
    setDatatype(value: string): InferInputTensor;

    getShapeList(): Array<number>;
    setShapeList(value: Array<number>): InferInputTensor;
    clearShapeList(): InferInputTensor;
    addShape(value: number, index?: number): InferInputTensor;

    getParametersMap(): jspb.Map<string, InferParameter>;
    clearParametersMap(): InferInputTensor;

    getContents(): InferTensorContents | undefined;
    setContents(value?: InferTensorContents): InferInputTensor;
    hasContents(): boolean;
    clearContents(): InferInputTensor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferInputTensor.AsObject;
    static toObject(includeInstance: boolean, msg: InferInputTensor): InferInputTensor.AsObject;
    static serializeBinaryToWriter(message: InferInputTensor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferInputTensor;
    static deserializeBinaryFromReader(message: InferInputTensor, reader: jspb.BinaryReader): InferInputTensor;
  }

  export namespace InferInputTensor {
    export type AsObject = {
      name: string,
      datatype: string,
      shapeList: Array<number>,
      parametersMap: Array<[string, InferParameter.AsObject]>,
      contents?: InferTensorContents.AsObject,
    }
  }


  export class InferRequestedOutputTensor extends jspb.Message {
    getName(): string;
    setName(value: string): InferRequestedOutputTensor;

    getParametersMap(): jspb.Map<string, InferParameter>;
    clearParametersMap(): InferRequestedOutputTensor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferRequestedOutputTensor.AsObject;
    static toObject(includeInstance: boolean, msg: InferRequestedOutputTensor): InferRequestedOutputTensor.AsObject;
    static serializeBinaryToWriter(message: InferRequestedOutputTensor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferRequestedOutputTensor;
    static deserializeBinaryFromReader(message: InferRequestedOutputTensor, reader: jspb.BinaryReader): InferRequestedOutputTensor;
  }

  export namespace InferRequestedOutputTensor {
    export type AsObject = {
      name: string,
      parametersMap: Array<[string, InferParameter.AsObject]>,
    }
  }

}

export class ModelInferResponse extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): ModelInferResponse;

  getModelVersion(): string;
  setModelVersion(value: string): ModelInferResponse;

  getId(): string;
  setId(value: string): ModelInferResponse;

  getParametersMap(): jspb.Map<string, InferParameter>;
  clearParametersMap(): ModelInferResponse;

  getOutputsList(): Array<ModelInferResponse.InferOutputTensor>;
  setOutputsList(value: Array<ModelInferResponse.InferOutputTensor>): ModelInferResponse;
  clearOutputsList(): ModelInferResponse;
  addOutputs(value?: ModelInferResponse.InferOutputTensor, index?: number): ModelInferResponse.InferOutputTensor;

  getRawOutputContentsList(): Array<Uint8Array | string>;
  setRawOutputContentsList(value: Array<Uint8Array | string>): ModelInferResponse;
  clearRawOutputContentsList(): ModelInferResponse;
  addRawOutputContents(value: Uint8Array | string, index?: number): ModelInferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelInferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelInferResponse): ModelInferResponse.AsObject;
  static serializeBinaryToWriter(message: ModelInferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelInferResponse;
  static deserializeBinaryFromReader(message: ModelInferResponse, reader: jspb.BinaryReader): ModelInferResponse;
}

export namespace ModelInferResponse {
  export type AsObject = {
    modelName: string,
    modelVersion: string,
    id: string,
    parametersMap: Array<[string, InferParameter.AsObject]>,
    outputsList: Array<ModelInferResponse.InferOutputTensor.AsObject>,
    rawOutputContentsList: Array<Uint8Array | string>,
  }

  export class InferOutputTensor extends jspb.Message {
    getName(): string;
    setName(value: string): InferOutputTensor;

    getDatatype(): string;
    setDatatype(value: string): InferOutputTensor;

    getShapeList(): Array<number>;
    setShapeList(value: Array<number>): InferOutputTensor;
    clearShapeList(): InferOutputTensor;
    addShape(value: number, index?: number): InferOutputTensor;

    getParametersMap(): jspb.Map<string, InferParameter>;
    clearParametersMap(): InferOutputTensor;

    getContents(): InferTensorContents | undefined;
    setContents(value?: InferTensorContents): InferOutputTensor;
    hasContents(): boolean;
    clearContents(): InferOutputTensor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InferOutputTensor.AsObject;
    static toObject(includeInstance: boolean, msg: InferOutputTensor): InferOutputTensor.AsObject;
    static serializeBinaryToWriter(message: InferOutputTensor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InferOutputTensor;
    static deserializeBinaryFromReader(message: InferOutputTensor, reader: jspb.BinaryReader): InferOutputTensor;
  }

  export namespace InferOutputTensor {
    export type AsObject = {
      name: string,
      datatype: string,
      shapeList: Array<number>,
      parametersMap: Array<[string, InferParameter.AsObject]>,
      contents?: InferTensorContents.AsObject,
    }
  }

}

export class InferParameter extends jspb.Message {
  getBoolParam(): boolean;
  setBoolParam(value: boolean): InferParameter;

  getInt64Param(): number;
  setInt64Param(value: number): InferParameter;

  getStringParam(): string;
  setStringParam(value: string): InferParameter;

  getParameterChoiceCase(): InferParameter.ParameterChoiceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferParameter.AsObject;
  static toObject(includeInstance: boolean, msg: InferParameter): InferParameter.AsObject;
  static serializeBinaryToWriter(message: InferParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferParameter;
  static deserializeBinaryFromReader(message: InferParameter, reader: jspb.BinaryReader): InferParameter;
}

export namespace InferParameter {
  export type AsObject = {
    boolParam: boolean,
    int64Param: number,
    stringParam: string,
  }

  export enum ParameterChoiceCase { 
    PARAMETER_CHOICE_NOT_SET = 0,
    BOOL_PARAM = 1,
    INT64_PARAM = 2,
    STRING_PARAM = 3,
  }
}

export class InferTensorContents extends jspb.Message {
  getBoolContentsList(): Array<boolean>;
  setBoolContentsList(value: Array<boolean>): InferTensorContents;
  clearBoolContentsList(): InferTensorContents;
  addBoolContents(value: boolean, index?: number): InferTensorContents;

  getIntContentsList(): Array<number>;
  setIntContentsList(value: Array<number>): InferTensorContents;
  clearIntContentsList(): InferTensorContents;
  addIntContents(value: number, index?: number): InferTensorContents;

  getInt64ContentsList(): Array<number>;
  setInt64ContentsList(value: Array<number>): InferTensorContents;
  clearInt64ContentsList(): InferTensorContents;
  addInt64Contents(value: number, index?: number): InferTensorContents;

  getUintContentsList(): Array<number>;
  setUintContentsList(value: Array<number>): InferTensorContents;
  clearUintContentsList(): InferTensorContents;
  addUintContents(value: number, index?: number): InferTensorContents;

  getUint64ContentsList(): Array<number>;
  setUint64ContentsList(value: Array<number>): InferTensorContents;
  clearUint64ContentsList(): InferTensorContents;
  addUint64Contents(value: number, index?: number): InferTensorContents;

  getFp32ContentsList(): Array<number>;
  setFp32ContentsList(value: Array<number>): InferTensorContents;
  clearFp32ContentsList(): InferTensorContents;
  addFp32Contents(value: number, index?: number): InferTensorContents;

  getFp64ContentsList(): Array<number>;
  setFp64ContentsList(value: Array<number>): InferTensorContents;
  clearFp64ContentsList(): InferTensorContents;
  addFp64Contents(value: number, index?: number): InferTensorContents;

  getBytesContentsList(): Array<Uint8Array | string>;
  setBytesContentsList(value: Array<Uint8Array | string>): InferTensorContents;
  clearBytesContentsList(): InferTensorContents;
  addBytesContents(value: Uint8Array | string, index?: number): InferTensorContents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferTensorContents.AsObject;
  static toObject(includeInstance: boolean, msg: InferTensorContents): InferTensorContents.AsObject;
  static serializeBinaryToWriter(message: InferTensorContents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferTensorContents;
  static deserializeBinaryFromReader(message: InferTensorContents, reader: jspb.BinaryReader): InferTensorContents;
}

export namespace InferTensorContents {
  export type AsObject = {
    boolContentsList: Array<boolean>,
    intContentsList: Array<number>,
    int64ContentsList: Array<number>,
    uintContentsList: Array<number>,
    uint64ContentsList: Array<number>,
    fp32ContentsList: Array<number>,
    fp64ContentsList: Array<number>,
    bytesContentsList: Array<Uint8Array | string>,
  }
}

export class PredictorInfo extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PredictorInfo;

  getName(): string;
  setName(value: string): PredictorInfo;

  getTask(): string;
  setTask(value: string): PredictorInfo;

  getModelsList(): Array<ModelInfo>;
  setModelsList(value: Array<ModelInfo>): PredictorInfo;
  clearModelsList(): PredictorInfo;
  addModels(value?: ModelInfo, index?: number): ModelInfo;

  getSchema(): SchemaInfo | undefined;
  setSchema(value?: SchemaInfo): PredictorInfo;
  hasSchema(): boolean;
  clearSchema(): PredictorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorInfo): PredictorInfo.AsObject;
  static serializeBinaryToWriter(message: PredictorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorInfo;
  static deserializeBinaryFromReader(message: PredictorInfo, reader: jspb.BinaryReader): PredictorInfo;
}

export namespace PredictorInfo {
  export type AsObject = {
    namespace: string,
    name: string,
    task: string,
    modelsList: Array<ModelInfo.AsObject>,
    schema?: SchemaInfo.AsObject,
  }
}

export class ModelInfo extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ModelInfo;

  getName(): string;
  setName(value: string): ModelInfo;

  getVersion(): string;
  setVersion(value: string): ModelInfo;

  getProduct(): string;
  setProduct(value: string): ModelInfo;

  getTrainingmetric(): string;
  setTrainingmetric(value: string): ModelInfo;

  getTrainingscore(): number;
  setTrainingscore(value: number): ModelInfo;

  getStatus(): string;
  setStatus(value: string): ModelInfo;

  getCanary(): boolean;
  setCanary(value: boolean): ModelInfo;

  getShadow(): boolean;
  setShadow(value: boolean): ModelInfo;

  getTraffic(): number;
  setTraffic(value: number): ModelInfo;

  getFilter(): string;
  setFilter(value: string): ModelInfo;

  getRank(): number;
  setRank(value: number): ModelInfo;

  getLogpath(): string;
  setLogpath(value: string): ModelInfo;

  getP95(): number;
  setP95(value: number): ModelInfo;

  getP99(): number;
  setP99(value: number): ModelInfo;

  getLastprediction(): number;
  setLastprediction(value: number): ModelInfo;

  getDailypredictionavg(): number;
  setDailypredictionavg(value: number): ModelInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ModelInfo): ModelInfo.AsObject;
  static serializeBinaryToWriter(message: ModelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelInfo;
  static deserializeBinaryFromReader(message: ModelInfo, reader: jspb.BinaryReader): ModelInfo;
}

export namespace ModelInfo {
  export type AsObject = {
    namespace: string,
    name: string,
    version: string,
    product: string,
    trainingmetric: string,
    trainingscore: number,
    status: string,
    canary: boolean,
    shadow: boolean,
    traffic: number,
    filter: string,
    rank: number,
    logpath: string,
    p95: number,
    p99: number,
    lastprediction: number,
    dailypredictionavg: number,
  }
}

export class SchemaInfo extends jspb.Message {
  getColumnsList(): Array<ColumnInfo>;
  setColumnsList(value: Array<ColumnInfo>): SchemaInfo;
  clearColumnsList(): SchemaInfo;
  addColumns(value?: ColumnInfo, index?: number): ColumnInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaInfo): SchemaInfo.AsObject;
  static serializeBinaryToWriter(message: SchemaInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaInfo;
  static deserializeBinaryFromReader(message: SchemaInfo, reader: jspb.BinaryReader): SchemaInfo;
}

export namespace SchemaInfo {
  export type AsObject = {
    columnsList: Array<ColumnInfo.AsObject>,
  }
}

export class ColumnInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ColumnInfo;

  getType(): string;
  setType(value: string): ColumnInfo;

  getDatasetmin(): number;
  setDatasetmin(value: number): ColumnInfo;

  getDatasetmean(): number;
  setDatasetmean(value: number): ColumnInfo;

  getDatasetstddev(): number;
  setDatasetstddev(value: number): ColumnInfo;

  getDatasetmax(): number;
  setDatasetmax(value: number): ColumnInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnInfo): ColumnInfo.AsObject;
  static serializeBinaryToWriter(message: ColumnInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnInfo;
  static deserializeBinaryFromReader(message: ColumnInfo, reader: jspb.BinaryReader): ColumnInfo;
}

export namespace ColumnInfo {
  export type AsObject = {
    name: string,
    type: string,
    datasetmin: number,
    datasetmean: number,
    datasetstddev: number,
    datasetmax: number,
  }
}

export class GetPredictorRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictorRequest;

  getName(): string;
  setName(value: string): GetPredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictorRequest): GetPredictorRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictorRequest;
  static deserializeBinaryFromReader(message: GetPredictorRequest, reader: jspb.BinaryReader): GetPredictorRequest;
}

export namespace GetPredictorRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetPredictorResponse extends jspb.Message {
  getItem(): PredictorInfo | undefined;
  setItem(value?: PredictorInfo): GetPredictorResponse;
  hasItem(): boolean;
  clearItem(): GetPredictorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictorResponse): GetPredictorResponse.AsObject;
  static serializeBinaryToWriter(message: GetPredictorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictorResponse;
  static deserializeBinaryFromReader(message: GetPredictorResponse, reader: jspb.BinaryReader): GetPredictorResponse;
}

export namespace GetPredictorResponse {
  export type AsObject = {
    item?: PredictorInfo.AsObject,
  }
}

export class GetModelRequest extends jspb.Message {
  getPredictornamespace(): string;
  setPredictornamespace(value: string): GetModelRequest;

  getPredictorname(): string;
  setPredictorname(value: string): GetModelRequest;

  getName(): string;
  setName(value: string): GetModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    predictornamespace: string,
    predictorname: string,
    name: string,
  }
}

export class GetModelResponse extends jspb.Message {
  getItem(): ModelInfo | undefined;
  setItem(value?: ModelInfo): GetModelResponse;
  hasItem(): boolean;
  clearItem(): GetModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelResponse): GetModelResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelResponse;
  static deserializeBinaryFromReader(message: GetModelResponse, reader: jspb.BinaryReader): GetModelResponse;
}

export namespace GetModelResponse {
  export type AsObject = {
    item?: ModelInfo.AsObject,
  }
}

export class PredictRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PredictRequest;

  getName(): string;
  setName(value: string): PredictRequest;

  getValidate(): boolean;
  setValidate(value: boolean): PredictRequest;

  getExplain(): boolean;
  setExplain(value: boolean): PredictRequest;

  getFormat(): string;
  setFormat(value: string): PredictRequest;

  getPayload(): string;
  setPayload(value: string): PredictRequest;

  getLabeled(): boolean;
  setLabeled(value: boolean): PredictRequest;

  getMetricsList(): Array<string>;
  setMetricsList(value: Array<string>): PredictRequest;
  clearMetricsList(): PredictRequest;
  addMetrics(value: string, index?: number): PredictRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictRequest): PredictRequest.AsObject;
  static serializeBinaryToWriter(message: PredictRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictRequest;
  static deserializeBinaryFromReader(message: PredictRequest, reader: jspb.BinaryReader): PredictRequest;
}

export namespace PredictRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    validate: boolean,
    explain: boolean,
    format: string,
    payload: string,
    labeled: boolean,
    metricsList: Array<string>,
  }
}

export class PredictResponse extends jspb.Message {
  getItemsList(): Array<PredictResultLineItem>;
  setItemsList(value: Array<PredictResultLineItem>): PredictResponse;
  clearItemsList(): PredictResponse;
  addItems(value?: PredictResultLineItem, index?: number): PredictResultLineItem;

  getScoresMap(): jspb.Map<string, number>;
  clearScoresMap(): PredictResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PredictResponse): PredictResponse.AsObject;
  static serializeBinaryToWriter(message: PredictResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictResponse;
  static deserializeBinaryFromReader(message: PredictResponse, reader: jspb.BinaryReader): PredictResponse;
}

export namespace PredictResponse {
  export type AsObject = {
    itemsList: Array<PredictResultLineItem.AsObject>,
    scoresMap: Array<[string, number]>,
  }
}

export class PredictResultLineItem extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): PredictResultLineItem;

  getScore(): number;
  setScore(value: number): PredictResultLineItem;

  getLabel(): string;
  setLabel(value: string): PredictResultLineItem;

  getProbabilitiesList(): Array<ProbabilityValue>;
  setProbabilitiesList(value: Array<ProbabilityValue>): PredictResultLineItem;
  clearProbabilitiesList(): PredictResultLineItem;
  addProbabilities(value?: ProbabilityValue, index?: number): ProbabilityValue;

  getMissingcolumnsList(): Array<string>;
  setMissingcolumnsList(value: Array<string>): PredictResultLineItem;
  clearMissingcolumnsList(): PredictResultLineItem;
  addMissingcolumns(value: string, index?: number): PredictResultLineItem;

  getOutofboundList(): Array<string>;
  setOutofboundList(value: Array<string>): PredictResultLineItem;
  clearOutofboundList(): PredictResultLineItem;
  addOutofbound(value: string, index?: number): PredictResultLineItem;

  getBaseshapvalue(): number;
  setBaseshapvalue(value: number): PredictResultLineItem;

  getShapvaluesList(): Array<ShapValue>;
  setShapvaluesList(value: Array<ShapValue>): PredictResultLineItem;
  clearShapvaluesList(): PredictResultLineItem;
  addShapvalues(value?: ShapValue, index?: number): ShapValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictResultLineItem.AsObject;
  static toObject(includeInstance: boolean, msg: PredictResultLineItem): PredictResultLineItem.AsObject;
  static serializeBinaryToWriter(message: PredictResultLineItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictResultLineItem;
  static deserializeBinaryFromReader(message: PredictResultLineItem, reader: jspb.BinaryReader): PredictResultLineItem;
}

export namespace PredictResultLineItem {
  export type AsObject = {
    success: boolean,
    score: number,
    label: string,
    probabilitiesList: Array<ProbabilityValue.AsObject>,
    missingcolumnsList: Array<string>,
    outofboundList: Array<string>,
    baseshapvalue: number,
    shapvaluesList: Array<ShapValue.AsObject>,
  }
}

export class ProbabilityValue extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): ProbabilityValue;

  getProbability(): number;
  setProbability(value: number): ProbabilityValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbabilityValue.AsObject;
  static toObject(includeInstance: boolean, msg: ProbabilityValue): ProbabilityValue.AsObject;
  static serializeBinaryToWriter(message: ProbabilityValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbabilityValue;
  static deserializeBinaryFromReader(message: ProbabilityValue, reader: jspb.BinaryReader): ProbabilityValue;
}

export namespace ProbabilityValue {
  export type AsObject = {
    label: string,
    probability: number,
  }
}

export class ShapValue extends jspb.Message {
  getFeature(): string;
  setFeature(value: string): ShapValue;

  getValue(): number;
  setValue(value: number): ShapValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShapValue.AsObject;
  static toObject(includeInstance: boolean, msg: ShapValue): ShapValue.AsObject;
  static serializeBinaryToWriter(message: ShapValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShapValue;
  static deserializeBinaryFromReader(message: ShapValue, reader: jspb.BinaryReader): ShapValue;
}

export namespace ShapValue {
  export type AsObject = {
    feature: string,
    value: number,
  }
}

