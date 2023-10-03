import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../k8s.io/api/core/v1/generated_pb';


export class WatchRequestOptions extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchRequestOptions;

  getNamespace(): string;
  setNamespace(value: string): WatchRequestOptions;

  getLatest(): boolean;
  setLatest(value: boolean): WatchRequestOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchRequestOptions.AsObject;
  static toObject(includeInstance: boolean, msg: WatchRequestOptions): WatchRequestOptions.AsObject;
  static serializeBinaryToWriter(message: WatchRequestOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchRequestOptions;
  static deserializeBinaryFromReader(message: WatchRequestOptions, reader: jspb.BinaryReader): WatchRequestOptions;
}

export namespace WatchRequestOptions {
  export type AsObject = {
    generation: number,
    namespace: string,
    latest: boolean,
  }
}

export class WatchDatasetResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchDatasetResponse;

  getEventsList(): Array<WatchDatasetResponse.DatasetEvent>;
  setEventsList(value: Array<WatchDatasetResponse.DatasetEvent>): WatchDatasetResponse;
  clearEventsList(): WatchDatasetResponse;
  addEvents(value?: WatchDatasetResponse.DatasetEvent, index?: number): WatchDatasetResponse.DatasetEvent;

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
    eventsList: Array<WatchDatasetResponse.DatasetEvent.AsObject>,
  }

  export class DatasetEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): DatasetEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DatasetEvent;
    hasObject(): boolean;
    clearObject(): DatasetEvent;

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
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    }
  }

}

export class WatchModelResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchModelResponse;

  getEventsList(): Array<WatchModelResponse.ModelEvent>;
  setEventsList(value: Array<WatchModelResponse.ModelEvent>): WatchModelResponse;
  clearEventsList(): WatchModelResponse;
  addEvents(value?: WatchModelResponse.ModelEvent, index?: number): WatchModelResponse.ModelEvent;

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
    eventsList: Array<WatchModelResponse.ModelEvent.AsObject>,
  }

  export class ModelEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): ModelEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): ModelEvent;
    hasObject(): boolean;
    clearObject(): ModelEvent;

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
      object?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    }
  }

}

export class WatchAlertResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchAlertResponse;

  getEventsList(): Array<WatchAlertResponse.AlertEvent>;
  setEventsList(value: Array<WatchAlertResponse.AlertEvent>): WatchAlertResponse;
  clearEventsList(): WatchAlertResponse;
  addEvents(value?: WatchAlertResponse.AlertEvent, index?: number): WatchAlertResponse.AlertEvent;

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
    eventsList: Array<WatchAlertResponse.AlertEvent.AsObject>,
  }

  export class AlertEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): AlertEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert): AlertEvent;
    hasObject(): boolean;
    clearObject(): AlertEvent;

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
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject,
    }
  }

}

export class WatchDatasetSnapshotResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchDatasetSnapshotResponse;

  getEventsList(): Array<WatchDatasetSnapshotResponse.DatasetSnapshotEvent>;
  setEventsList(value: Array<WatchDatasetSnapshotResponse.DatasetSnapshotEvent>): WatchDatasetSnapshotResponse;
  clearEventsList(): WatchDatasetSnapshotResponse;
  addEvents(value?: WatchDatasetSnapshotResponse.DatasetSnapshotEvent, index?: number): WatchDatasetSnapshotResponse.DatasetSnapshotEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchDatasetSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchDatasetSnapshotResponse): WatchDatasetSnapshotResponse.AsObject;
  static serializeBinaryToWriter(message: WatchDatasetSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchDatasetSnapshotResponse;
  static deserializeBinaryFromReader(message: WatchDatasetSnapshotResponse, reader: jspb.BinaryReader): WatchDatasetSnapshotResponse;
}

export namespace WatchDatasetSnapshotResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchDatasetSnapshotResponse.DatasetSnapshotEvent.AsObject>,
  }

  export class DatasetSnapshotEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): DatasetSnapshotEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot): DatasetSnapshotEvent;
    hasObject(): boolean;
    clearObject(): DatasetSnapshotEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatasetSnapshotEvent.AsObject;
    static toObject(includeInstance: boolean, msg: DatasetSnapshotEvent): DatasetSnapshotEvent.AsObject;
    static serializeBinaryToWriter(message: DatasetSnapshotEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatasetSnapshotEvent;
    static deserializeBinaryFromReader(message: DatasetSnapshotEvent, reader: jspb.BinaryReader): DatasetSnapshotEvent;
  }

  export namespace DatasetSnapshotEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.AsObject,
    }
  }

}

export class WatchStudyResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchStudyResponse;

  getEventsList(): Array<WatchStudyResponse.StudyEvent>;
  setEventsList(value: Array<WatchStudyResponse.StudyEvent>): WatchStudyResponse;
  clearEventsList(): WatchStudyResponse;
  addEvents(value?: WatchStudyResponse.StudyEvent, index?: number): WatchStudyResponse.StudyEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchStudyResponse): WatchStudyResponse.AsObject;
  static serializeBinaryToWriter(message: WatchStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchStudyResponse;
  static deserializeBinaryFromReader(message: WatchStudyResponse, reader: jspb.BinaryReader): WatchStudyResponse;
}

export namespace WatchStudyResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchStudyResponse.StudyEvent.AsObject>,
  }

  export class StudyEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): StudyEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): StudyEvent;
    hasObject(): boolean;
    clearObject(): StudyEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StudyEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StudyEvent): StudyEvent.AsObject;
    static serializeBinaryToWriter(message: StudyEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StudyEvent;
    static deserializeBinaryFromReader(message: StudyEvent, reader: jspb.BinaryReader): StudyEvent;
  }

  export namespace StudyEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    }
  }

}

export class WatchStudyRunResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchStudyRunResponse;

  getEventsList(): Array<WatchStudyRunResponse.StudyRunEvent>;
  setEventsList(value: Array<WatchStudyRunResponse.StudyRunEvent>): WatchStudyRunResponse;
  clearEventsList(): WatchStudyRunResponse;
  addEvents(value?: WatchStudyRunResponse.StudyRunEvent, index?: number): WatchStudyRunResponse.StudyRunEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchStudyRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchStudyRunResponse): WatchStudyRunResponse.AsObject;
  static serializeBinaryToWriter(message: WatchStudyRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchStudyRunResponse;
  static deserializeBinaryFromReader(message: WatchStudyRunResponse, reader: jspb.BinaryReader): WatchStudyRunResponse;
}

export namespace WatchStudyRunResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchStudyRunResponse.StudyRunEvent.AsObject>,
  }

  export class StudyRunEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): StudyRunEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): StudyRunEvent;
    hasObject(): boolean;
    clearObject(): StudyRunEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StudyRunEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StudyRunEvent): StudyRunEvent.AsObject;
    static serializeBinaryToWriter(message: StudyRunEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StudyRunEvent;
    static deserializeBinaryFromReader(message: StudyRunEvent, reader: jspb.BinaryReader): StudyRunEvent;
  }

  export namespace StudyRunEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
    }
  }

}

export enum EventType { 
  EVENT_UPDATE = 0,
  EVENT_DELETE = 1,
}
