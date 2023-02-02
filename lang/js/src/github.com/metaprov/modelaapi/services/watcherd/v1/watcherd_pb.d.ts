import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../k8s.io/api/core/v1/generated_pb';


export class DatasetEvent extends jspb.Message {
  getEvent(): EventType;
  setEvent(value: EventType): DatasetEvent;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DatasetEvent;
  hasDataset(): boolean;
  clearDataset(): DatasetEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetEvent): DatasetEvent.AsObject;
  static serializeBinaryToWriter(message: DatasetEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetEvent;
  static deserializeBinaryFromReader(message: DatasetEvent, reader: jspb.BinaryReader): DatasetEvent;
}

export namespace DatasetEvent {
  export type AsObject = {
    event: EventType,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class WatchDatasetRequest extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchDatasetRequest;

  getNamespace(): string;
  setNamespace(value: string): WatchDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchDatasetRequest): WatchDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: WatchDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchDatasetRequest;
  static deserializeBinaryFromReader(message: WatchDatasetRequest, reader: jspb.BinaryReader): WatchDatasetRequest;
}

export namespace WatchDatasetRequest {
  export type AsObject = {
    generation: number,
    namespace: string,
  }
}

export class WatchDatasetResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchDatasetResponse;

  getEventsList(): Array<DatasetEvent>;
  setEventsList(value: Array<DatasetEvent>): WatchDatasetResponse;
  clearEventsList(): WatchDatasetResponse;
  addEvents(value?: DatasetEvent, index?: number): DatasetEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchDatasetResponse): WatchDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: WatchDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchDatasetResponse;
  static deserializeBinaryFromReader(message: WatchDatasetResponse, reader: jspb.BinaryReader): WatchDatasetResponse;
}

export namespace WatchDatasetResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<DatasetEvent.AsObject>,
  }
}

export class ModelEvent extends jspb.Message {
  getEvent(): EventType;
  setEvent(value: EventType): ModelEvent;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): ModelEvent;
  hasModel(): boolean;
  clearModel(): ModelEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ModelEvent): ModelEvent.AsObject;
  static serializeBinaryToWriter(message: ModelEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelEvent;
  static deserializeBinaryFromReader(message: ModelEvent, reader: jspb.BinaryReader): ModelEvent;
}

export namespace ModelEvent {
  export type AsObject = {
    event: EventType,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class WatchModelRequest extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchModelRequest;

  getNamespace(): string;
  setNamespace(value: string): WatchModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchModelRequest): WatchModelRequest.AsObject;
  static serializeBinaryToWriter(message: WatchModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchModelRequest;
  static deserializeBinaryFromReader(message: WatchModelRequest, reader: jspb.BinaryReader): WatchModelRequest;
}

export namespace WatchModelRequest {
  export type AsObject = {
    generation: number,
    namespace: string,
  }
}

export class WatchModelResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchModelResponse;

  getEventsList(): Array<ModelEvent>;
  setEventsList(value: Array<ModelEvent>): WatchModelResponse;
  clearEventsList(): WatchModelResponse;
  addEvents(value?: ModelEvent, index?: number): ModelEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchModelResponse): WatchModelResponse.AsObject;
  static serializeBinaryToWriter(message: WatchModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchModelResponse;
  static deserializeBinaryFromReader(message: WatchModelResponse, reader: jspb.BinaryReader): WatchModelResponse;
}

export namespace WatchModelResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<ModelEvent.AsObject>,
  }
}

export class AlertEvent extends jspb.Message {
  getEvent(): EventType;
  setEvent(value: EventType): AlertEvent;

  getAlert(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert | undefined;
  setAlert(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert): AlertEvent;
  hasAlert(): boolean;
  clearAlert(): AlertEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AlertEvent): AlertEvent.AsObject;
  static serializeBinaryToWriter(message: AlertEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertEvent;
  static deserializeBinaryFromReader(message: AlertEvent, reader: jspb.BinaryReader): AlertEvent;
}

export namespace AlertEvent {
  export type AsObject = {
    event: EventType,
    alert?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject,
  }
}

export class WatchAlertRequest extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchAlertRequest;

  getNamespace(): string;
  setNamespace(value: string): WatchAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchAlertRequest): WatchAlertRequest.AsObject;
  static serializeBinaryToWriter(message: WatchAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchAlertRequest;
  static deserializeBinaryFromReader(message: WatchAlertRequest, reader: jspb.BinaryReader): WatchAlertRequest;
}

export namespace WatchAlertRequest {
  export type AsObject = {
    generation: number,
    namespace: string,
  }
}

export class WatchAlertResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchAlertResponse;

  getEventsList(): Array<AlertEvent>;
  setEventsList(value: Array<AlertEvent>): WatchAlertResponse;
  clearEventsList(): WatchAlertResponse;
  addEvents(value?: AlertEvent, index?: number): AlertEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchAlertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchAlertResponse): WatchAlertResponse.AsObject;
  static serializeBinaryToWriter(message: WatchAlertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchAlertResponse;
  static deserializeBinaryFromReader(message: WatchAlertResponse, reader: jspb.BinaryReader): WatchAlertResponse;
}

export namespace WatchAlertResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<AlertEvent.AsObject>,
  }
}

export enum EventType { 
  EVENT_UPDATE = 0,
  EVENT_ADD = 1,
  EVENT_DELETE = 2,
}
