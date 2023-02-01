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

export enum EventType { 
  EVENT_UPDATE = 0,
  EVENT_DELETE = 1,
}
