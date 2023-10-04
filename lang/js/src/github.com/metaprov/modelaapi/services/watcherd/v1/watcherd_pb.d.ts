import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated_pb';
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

export class WatchDataPipelineResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchDataPipelineResponse;

  getEventsList(): Array<WatchDataPipelineResponse.DataPipelineEvent>;
  setEventsList(value: Array<WatchDataPipelineResponse.DataPipelineEvent>): WatchDataPipelineResponse;
  clearEventsList(): WatchDataPipelineResponse;
  addEvents(value?: WatchDataPipelineResponse.DataPipelineEvent, index?: number): WatchDataPipelineResponse.DataPipelineEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchDataPipelineResponse): WatchDataPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: WatchDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchDataPipelineResponse;
  static deserializeBinaryFromReader(message: WatchDataPipelineResponse, reader: jspb.BinaryReader): WatchDataPipelineResponse;
}

export namespace WatchDataPipelineResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchDataPipelineResponse.DataPipelineEvent.AsObject>,
  }

  export class DataPipelineEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): DataPipelineEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): DataPipelineEvent;
    hasObject(): boolean;
    clearObject(): DataPipelineEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataPipelineEvent.AsObject;
    static toObject(includeInstance: boolean, msg: DataPipelineEvent): DataPipelineEvent.AsObject;
    static serializeBinaryToWriter(message: DataPipelineEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataPipelineEvent;
    static deserializeBinaryFromReader(message: DataPipelineEvent, reader: jspb.BinaryReader): DataPipelineEvent;
  }

  export namespace DataPipelineEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
    }
  }

}

export class WatchDataPipelineRunResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchDataPipelineRunResponse;

  getEventsList(): Array<WatchDataPipelineRunResponse.DataPipelineRunEvent>;
  setEventsList(value: Array<WatchDataPipelineRunResponse.DataPipelineRunEvent>): WatchDataPipelineRunResponse;
  clearEventsList(): WatchDataPipelineRunResponse;
  addEvents(value?: WatchDataPipelineRunResponse.DataPipelineRunEvent, index?: number): WatchDataPipelineRunResponse.DataPipelineRunEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchDataPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchDataPipelineRunResponse): WatchDataPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: WatchDataPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchDataPipelineRunResponse;
  static deserializeBinaryFromReader(message: WatchDataPipelineRunResponse, reader: jspb.BinaryReader): WatchDataPipelineRunResponse;
}

export namespace WatchDataPipelineRunResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchDataPipelineRunResponse.DataPipelineRunEvent.AsObject>,
  }

  export class DataPipelineRunEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): DataPipelineRunEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun): DataPipelineRunEvent;
    hasObject(): boolean;
    clearObject(): DataPipelineRunEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataPipelineRunEvent.AsObject;
    static toObject(includeInstance: boolean, msg: DataPipelineRunEvent): DataPipelineRunEvent.AsObject;
    static serializeBinaryToWriter(message: DataPipelineRunEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataPipelineRunEvent;
    static deserializeBinaryFromReader(message: DataPipelineRunEvent, reader: jspb.BinaryReader): DataPipelineRunEvent;
  }

  export namespace DataPipelineRunEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.AsObject,
    }
  }

}

export class WatchDataProductResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchDataProductResponse;

  getEventsList(): Array<WatchDataProductResponse.DataProductEvent>;
  setEventsList(value: Array<WatchDataProductResponse.DataProductEvent>): WatchDataProductResponse;
  clearEventsList(): WatchDataProductResponse;
  addEvents(value?: WatchDataProductResponse.DataProductEvent, index?: number): WatchDataProductResponse.DataProductEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchDataProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchDataProductResponse): WatchDataProductResponse.AsObject;
  static serializeBinaryToWriter(message: WatchDataProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchDataProductResponse;
  static deserializeBinaryFromReader(message: WatchDataProductResponse, reader: jspb.BinaryReader): WatchDataProductResponse;
}

export namespace WatchDataProductResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchDataProductResponse.DataProductEvent.AsObject>,
  }

  export class DataProductEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): DataProductEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DataProductEvent;
    hasObject(): boolean;
    clearObject(): DataProductEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataProductEvent.AsObject;
    static toObject(includeInstance: boolean, msg: DataProductEvent): DataProductEvent.AsObject;
    static serializeBinaryToWriter(message: DataProductEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataProductEvent;
    static deserializeBinaryFromReader(message: DataProductEvent, reader: jspb.BinaryReader): DataProductEvent;
  }

  export namespace DataProductEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    }
  }

}

export class WatchEntityResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchEntityResponse;

  getEventsList(): Array<WatchEntityResponse.EntityEvent>;
  setEventsList(value: Array<WatchEntityResponse.EntityEvent>): WatchEntityResponse;
  clearEventsList(): WatchEntityResponse;
  addEvents(value?: WatchEntityResponse.EntityEvent, index?: number): WatchEntityResponse.EntityEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchEntityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchEntityResponse): WatchEntityResponse.AsObject;
  static serializeBinaryToWriter(message: WatchEntityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchEntityResponse;
  static deserializeBinaryFromReader(message: WatchEntityResponse, reader: jspb.BinaryReader): WatchEntityResponse;
}

export namespace WatchEntityResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchEntityResponse.EntityEvent.AsObject>,
  }

  export class EntityEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): EntityEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity): EntityEvent;
    hasObject(): boolean;
    clearObject(): EntityEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityEvent.AsObject;
    static toObject(includeInstance: boolean, msg: EntityEvent): EntityEvent.AsObject;
    static serializeBinaryToWriter(message: EntityEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityEvent;
    static deserializeBinaryFromReader(message: EntityEvent, reader: jspb.BinaryReader): EntityEvent;
  }

  export namespace EntityEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject,
    }
  }

}

export class WatchFeatureHistogramResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchFeatureHistogramResponse;

  getEventsList(): Array<WatchFeatureHistogramResponse.FeatureHistogramEvent>;
  setEventsList(value: Array<WatchFeatureHistogramResponse.FeatureHistogramEvent>): WatchFeatureHistogramResponse;
  clearEventsList(): WatchFeatureHistogramResponse;
  addEvents(value?: WatchFeatureHistogramResponse.FeatureHistogramEvent, index?: number): WatchFeatureHistogramResponse.FeatureHistogramEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchFeatureHistogramResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchFeatureHistogramResponse): WatchFeatureHistogramResponse.AsObject;
  static serializeBinaryToWriter(message: WatchFeatureHistogramResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchFeatureHistogramResponse;
  static deserializeBinaryFromReader(message: WatchFeatureHistogramResponse, reader: jspb.BinaryReader): WatchFeatureHistogramResponse;
}

export namespace WatchFeatureHistogramResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchFeatureHistogramResponse.FeatureHistogramEvent.AsObject>,
  }

  export class FeatureHistogramEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): FeatureHistogramEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram): FeatureHistogramEvent;
    hasObject(): boolean;
    clearObject(): FeatureHistogramEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureHistogramEvent.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureHistogramEvent): FeatureHistogramEvent.AsObject;
    static serializeBinaryToWriter(message: FeatureHistogramEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureHistogramEvent;
    static deserializeBinaryFromReader(message: FeatureHistogramEvent, reader: jspb.BinaryReader): FeatureHistogramEvent;
  }

  export namespace FeatureHistogramEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject,
    }
  }

}

export class WatchFeatureGroupResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchFeatureGroupResponse;

  getEventsList(): Array<WatchFeatureGroupResponse.FeatureGroupEvent>;
  setEventsList(value: Array<WatchFeatureGroupResponse.FeatureGroupEvent>): WatchFeatureGroupResponse;
  clearEventsList(): WatchFeatureGroupResponse;
  addEvents(value?: WatchFeatureGroupResponse.FeatureGroupEvent, index?: number): WatchFeatureGroupResponse.FeatureGroupEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchFeatureGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchFeatureGroupResponse): WatchFeatureGroupResponse.AsObject;
  static serializeBinaryToWriter(message: WatchFeatureGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchFeatureGroupResponse;
  static deserializeBinaryFromReader(message: WatchFeatureGroupResponse, reader: jspb.BinaryReader): WatchFeatureGroupResponse;
}

export namespace WatchFeatureGroupResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchFeatureGroupResponse.FeatureGroupEvent.AsObject>,
  }

  export class FeatureGroupEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): FeatureGroupEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): FeatureGroupEvent;
    hasObject(): boolean;
    clearObject(): FeatureGroupEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureGroupEvent.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureGroupEvent): FeatureGroupEvent.AsObject;
    static serializeBinaryToWriter(message: FeatureGroupEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureGroupEvent;
    static deserializeBinaryFromReader(message: FeatureGroupEvent, reader: jspb.BinaryReader): FeatureGroupEvent;
  }

  export namespace FeatureGroupEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
    }
  }

}

export class WatchRecipeResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchRecipeResponse;

  getEventsList(): Array<WatchRecipeResponse.RecipeEvent>;
  setEventsList(value: Array<WatchRecipeResponse.RecipeEvent>): WatchRecipeResponse;
  clearEventsList(): WatchRecipeResponse;
  addEvents(value?: WatchRecipeResponse.RecipeEvent, index?: number): WatchRecipeResponse.RecipeEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchRecipeResponse): WatchRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: WatchRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchRecipeResponse;
  static deserializeBinaryFromReader(message: WatchRecipeResponse, reader: jspb.BinaryReader): WatchRecipeResponse;
}

export namespace WatchRecipeResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchRecipeResponse.RecipeEvent.AsObject>,
  }

  export class RecipeEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): RecipeEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): RecipeEvent;
    hasObject(): boolean;
    clearObject(): RecipeEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeEvent): RecipeEvent.AsObject;
    static serializeBinaryToWriter(message: RecipeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeEvent;
    static deserializeBinaryFromReader(message: RecipeEvent, reader: jspb.BinaryReader): RecipeEvent;
  }

  export namespace RecipeEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
    }
  }

}

export class WatchRecipeRunResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchRecipeRunResponse;

  getEventsList(): Array<WatchRecipeRunResponse.RecipeRunEvent>;
  setEventsList(value: Array<WatchRecipeRunResponse.RecipeRunEvent>): WatchRecipeRunResponse;
  clearEventsList(): WatchRecipeRunResponse;
  addEvents(value?: WatchRecipeRunResponse.RecipeRunEvent, index?: number): WatchRecipeRunResponse.RecipeRunEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchRecipeRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchRecipeRunResponse): WatchRecipeRunResponse.AsObject;
  static serializeBinaryToWriter(message: WatchRecipeRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchRecipeRunResponse;
  static deserializeBinaryFromReader(message: WatchRecipeRunResponse, reader: jspb.BinaryReader): WatchRecipeRunResponse;
}

export namespace WatchRecipeRunResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchRecipeRunResponse.RecipeRunEvent.AsObject>,
  }

  export class RecipeRunEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): RecipeRunEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun): RecipeRunEvent;
    hasObject(): boolean;
    clearObject(): RecipeRunEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecipeRunEvent.AsObject;
    static toObject(includeInstance: boolean, msg: RecipeRunEvent): RecipeRunEvent.AsObject;
    static serializeBinaryToWriter(message: RecipeRunEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecipeRunEvent;
    static deserializeBinaryFromReader(message: RecipeRunEvent, reader: jspb.BinaryReader): RecipeRunEvent;
  }

  export namespace RecipeRunEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject,
    }
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

export class WatchDataSourceResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchDataSourceResponse;

  getEventsList(): Array<WatchDataSourceResponse.DataSourceEvent>;
  setEventsList(value: Array<WatchDataSourceResponse.DataSourceEvent>): WatchDataSourceResponse;
  clearEventsList(): WatchDataSourceResponse;
  addEvents(value?: WatchDataSourceResponse.DataSourceEvent, index?: number): WatchDataSourceResponse.DataSourceEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchDataSourceResponse): WatchDataSourceResponse.AsObject;
  static serializeBinaryToWriter(message: WatchDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchDataSourceResponse;
  static deserializeBinaryFromReader(message: WatchDataSourceResponse, reader: jspb.BinaryReader): WatchDataSourceResponse;
}

export namespace WatchDataSourceResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchDataSourceResponse.DataSourceEvent.AsObject>,
  }

  export class DataSourceEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): DataSourceEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DataSourceEvent;
    hasObject(): boolean;
    clearObject(): DataSourceEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataSourceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: DataSourceEvent): DataSourceEvent.AsObject;
    static serializeBinaryToWriter(message: DataSourceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataSourceEvent;
    static deserializeBinaryFromReader(message: DataSourceEvent, reader: jspb.BinaryReader): DataSourceEvent;
  }

  export namespace DataSourceEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
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

export class WatchModelClassResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchModelClassResponse;

  getEventsList(): Array<WatchModelClassResponse.ModelClassEvent>;
  setEventsList(value: Array<WatchModelClassResponse.ModelClassEvent>): WatchModelClassResponse;
  clearEventsList(): WatchModelClassResponse;
  addEvents(value?: WatchModelClassResponse.ModelClassEvent, index?: number): WatchModelClassResponse.ModelClassEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchModelClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchModelClassResponse): WatchModelClassResponse.AsObject;
  static serializeBinaryToWriter(message: WatchModelClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchModelClassResponse;
  static deserializeBinaryFromReader(message: WatchModelClassResponse, reader: jspb.BinaryReader): WatchModelClassResponse;
}

export namespace WatchModelClassResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchModelClassResponse.ModelClassEvent.AsObject>,
  }

  export class ModelClassEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): ModelClassEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): ModelClassEvent;
    hasObject(): boolean;
    clearObject(): ModelClassEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelClassEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ModelClassEvent): ModelClassEvent.AsObject;
    static serializeBinaryToWriter(message: ModelClassEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelClassEvent;
    static deserializeBinaryFromReader(message: ModelClassEvent, reader: jspb.BinaryReader): ModelClassEvent;
  }

  export namespace ModelClassEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    }
  }

}

export class WatchModelClassRunResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchModelClassRunResponse;

  getEventsList(): Array<WatchModelClassRunResponse.ModelClassRunEvent>;
  setEventsList(value: Array<WatchModelClassRunResponse.ModelClassRunEvent>): WatchModelClassRunResponse;
  clearEventsList(): WatchModelClassRunResponse;
  addEvents(value?: WatchModelClassRunResponse.ModelClassRunEvent, index?: number): WatchModelClassRunResponse.ModelClassRunEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchModelClassRunResponse): WatchModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: WatchModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchModelClassRunResponse;
  static deserializeBinaryFromReader(message: WatchModelClassRunResponse, reader: jspb.BinaryReader): WatchModelClassRunResponse;
}

export namespace WatchModelClassRunResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchModelClassRunResponse.ModelClassRunEvent.AsObject>,
  }

  export class ModelClassRunEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): ModelClassRunEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun): ModelClassRunEvent;
    hasObject(): boolean;
    clearObject(): ModelClassRunEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelClassRunEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ModelClassRunEvent): ModelClassRunEvent.AsObject;
    static serializeBinaryToWriter(message: ModelClassRunEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelClassRunEvent;
    static deserializeBinaryFromReader(message: ModelClassRunEvent, reader: jspb.BinaryReader): ModelClassRunEvent;
  }

  export namespace ModelClassRunEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.AsObject,
    }
  }

}

export class WatchReportResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchReportResponse;

  getEventsList(): Array<WatchReportResponse.ReportEvent>;
  setEventsList(value: Array<WatchReportResponse.ReportEvent>): WatchReportResponse;
  clearEventsList(): WatchReportResponse;
  addEvents(value?: WatchReportResponse.ReportEvent, index?: number): WatchReportResponse.ReportEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchReportResponse): WatchReportResponse.AsObject;
  static serializeBinaryToWriter(message: WatchReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchReportResponse;
  static deserializeBinaryFromReader(message: WatchReportResponse, reader: jspb.BinaryReader): WatchReportResponse;
}

export namespace WatchReportResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchReportResponse.ReportEvent.AsObject>,
  }

  export class ReportEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): ReportEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report): ReportEvent;
    hasObject(): boolean;
    clearObject(): ReportEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ReportEvent): ReportEvent.AsObject;
    static serializeBinaryToWriter(message: ReportEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportEvent;
    static deserializeBinaryFromReader(message: ReportEvent, reader: jspb.BinaryReader): ReportEvent;
  }

  export namespace ReportEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
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

export class WatchAccountResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchAccountResponse;

  getEventsList(): Array<WatchAccountResponse.AccountEvent>;
  setEventsList(value: Array<WatchAccountResponse.AccountEvent>): WatchAccountResponse;
  clearEventsList(): WatchAccountResponse;
  addEvents(value?: WatchAccountResponse.AccountEvent, index?: number): WatchAccountResponse.AccountEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchAccountResponse): WatchAccountResponse.AsObject;
  static serializeBinaryToWriter(message: WatchAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchAccountResponse;
  static deserializeBinaryFromReader(message: WatchAccountResponse, reader: jspb.BinaryReader): WatchAccountResponse;
}

export namespace WatchAccountResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchAccountResponse.AccountEvent.AsObject>,
  }

  export class AccountEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): AccountEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account): AccountEvent;
    hasObject(): boolean;
    clearObject(): AccountEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountEvent.AsObject;
    static toObject(includeInstance: boolean, msg: AccountEvent): AccountEvent.AsObject;
    static serializeBinaryToWriter(message: AccountEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountEvent;
    static deserializeBinaryFromReader(message: AccountEvent, reader: jspb.BinaryReader): AccountEvent;
  }

  export namespace AccountEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
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

export class WatchAttachmentResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchAttachmentResponse;

  getEventsList(): Array<WatchAttachmentResponse.AttachmentEvent>;
  setEventsList(value: Array<WatchAttachmentResponse.AttachmentEvent>): WatchAttachmentResponse;
  clearEventsList(): WatchAttachmentResponse;
  addEvents(value?: WatchAttachmentResponse.AttachmentEvent, index?: number): WatchAttachmentResponse.AttachmentEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchAttachmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchAttachmentResponse): WatchAttachmentResponse.AsObject;
  static serializeBinaryToWriter(message: WatchAttachmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchAttachmentResponse;
  static deserializeBinaryFromReader(message: WatchAttachmentResponse, reader: jspb.BinaryReader): WatchAttachmentResponse;
}

export namespace WatchAttachmentResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchAttachmentResponse.AttachmentEvent.AsObject>,
  }

  export class AttachmentEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): AttachmentEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment): AttachmentEvent;
    hasObject(): boolean;
    clearObject(): AttachmentEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachmentEvent.AsObject;
    static toObject(includeInstance: boolean, msg: AttachmentEvent): AttachmentEvent.AsObject;
    static serializeBinaryToWriter(message: AttachmentEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachmentEvent;
    static deserializeBinaryFromReader(message: AttachmentEvent, reader: jspb.BinaryReader): AttachmentEvent;
  }

  export namespace AttachmentEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.AsObject,
    }
  }

}

export class WatchConnectionResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchConnectionResponse;

  getEventsList(): Array<WatchConnectionResponse.ConnectionEvent>;
  setEventsList(value: Array<WatchConnectionResponse.ConnectionEvent>): WatchConnectionResponse;
  clearEventsList(): WatchConnectionResponse;
  addEvents(value?: WatchConnectionResponse.ConnectionEvent, index?: number): WatchConnectionResponse.ConnectionEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchConnectionResponse): WatchConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: WatchConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchConnectionResponse;
  static deserializeBinaryFromReader(message: WatchConnectionResponse, reader: jspb.BinaryReader): WatchConnectionResponse;
}

export namespace WatchConnectionResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchConnectionResponse.ConnectionEvent.AsObject>,
  }

  export class ConnectionEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): ConnectionEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): ConnectionEvent;
    hasObject(): boolean;
    clearObject(): ConnectionEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionEvent): ConnectionEvent.AsObject;
    static serializeBinaryToWriter(message: ConnectionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionEvent;
    static deserializeBinaryFromReader(message: ConnectionEvent, reader: jspb.BinaryReader): ConnectionEvent;
  }

  export namespace ConnectionEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    }
  }

}

export class WatchLabResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchLabResponse;

  getEventsList(): Array<WatchLabResponse.LabEvent>;
  setEventsList(value: Array<WatchLabResponse.LabEvent>): WatchLabResponse;
  clearEventsList(): WatchLabResponse;
  addEvents(value?: WatchLabResponse.LabEvent, index?: number): WatchLabResponse.LabEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchLabResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchLabResponse): WatchLabResponse.AsObject;
  static serializeBinaryToWriter(message: WatchLabResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchLabResponse;
  static deserializeBinaryFromReader(message: WatchLabResponse, reader: jspb.BinaryReader): WatchLabResponse;
}

export namespace WatchLabResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchLabResponse.LabEvent.AsObject>,
  }

  export class LabEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): LabEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab): LabEvent;
    hasObject(): boolean;
    clearObject(): LabEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LabEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LabEvent): LabEvent.AsObject;
    static serializeBinaryToWriter(message: LabEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LabEvent;
    static deserializeBinaryFromReader(message: LabEvent, reader: jspb.BinaryReader): LabEvent;
  }

  export namespace LabEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject,
    }
  }

}

export class WatchLicenseResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchLicenseResponse;

  getEventsList(): Array<WatchLicenseResponse.LicenseEvent>;
  setEventsList(value: Array<WatchLicenseResponse.LicenseEvent>): WatchLicenseResponse;
  clearEventsList(): WatchLicenseResponse;
  addEvents(value?: WatchLicenseResponse.LicenseEvent, index?: number): WatchLicenseResponse.LicenseEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchLicenseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchLicenseResponse): WatchLicenseResponse.AsObject;
  static serializeBinaryToWriter(message: WatchLicenseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchLicenseResponse;
  static deserializeBinaryFromReader(message: WatchLicenseResponse, reader: jspb.BinaryReader): WatchLicenseResponse;
}

export namespace WatchLicenseResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchLicenseResponse.LicenseEvent.AsObject>,
  }

  export class LicenseEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): LicenseEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License): LicenseEvent;
    hasObject(): boolean;
    clearObject(): LicenseEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseEvent): LicenseEvent.AsObject;
    static serializeBinaryToWriter(message: LicenseEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseEvent;
    static deserializeBinaryFromReader(message: LicenseEvent, reader: jspb.BinaryReader): LicenseEvent;
  }

  export namespace LicenseEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.AsObject,
    }
  }

}

export class WatchNotifierResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchNotifierResponse;

  getEventsList(): Array<WatchNotifierResponse.NotifierEvent>;
  setEventsList(value: Array<WatchNotifierResponse.NotifierEvent>): WatchNotifierResponse;
  clearEventsList(): WatchNotifierResponse;
  addEvents(value?: WatchNotifierResponse.NotifierEvent, index?: number): WatchNotifierResponse.NotifierEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchNotifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchNotifierResponse): WatchNotifierResponse.AsObject;
  static serializeBinaryToWriter(message: WatchNotifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchNotifierResponse;
  static deserializeBinaryFromReader(message: WatchNotifierResponse, reader: jspb.BinaryReader): WatchNotifierResponse;
}

export namespace WatchNotifierResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchNotifierResponse.NotifierEvent.AsObject>,
  }

  export class NotifierEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): NotifierEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier): NotifierEvent;
    hasObject(): boolean;
    clearObject(): NotifierEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotifierEvent.AsObject;
    static toObject(includeInstance: boolean, msg: NotifierEvent): NotifierEvent.AsObject;
    static serializeBinaryToWriter(message: NotifierEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotifierEvent;
    static deserializeBinaryFromReader(message: NotifierEvent, reader: jspb.BinaryReader): NotifierEvent;
  }

  export namespace NotifierEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject,
    }
  }

}

export class WatchServingSiteResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchServingSiteResponse;

  getEventsList(): Array<WatchServingSiteResponse.ServingSiteEvent>;
  setEventsList(value: Array<WatchServingSiteResponse.ServingSiteEvent>): WatchServingSiteResponse;
  clearEventsList(): WatchServingSiteResponse;
  addEvents(value?: WatchServingSiteResponse.ServingSiteEvent, index?: number): WatchServingSiteResponse.ServingSiteEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchServingSiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchServingSiteResponse): WatchServingSiteResponse.AsObject;
  static serializeBinaryToWriter(message: WatchServingSiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchServingSiteResponse;
  static deserializeBinaryFromReader(message: WatchServingSiteResponse, reader: jspb.BinaryReader): WatchServingSiteResponse;
}

export namespace WatchServingSiteResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchServingSiteResponse.ServingSiteEvent.AsObject>,
  }

  export class ServingSiteEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): ServingSiteEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): ServingSiteEvent;
    hasObject(): boolean;
    clearObject(): ServingSiteEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServingSiteEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ServingSiteEvent): ServingSiteEvent.AsObject;
    static serializeBinaryToWriter(message: ServingSiteEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServingSiteEvent;
    static deserializeBinaryFromReader(message: ServingSiteEvent, reader: jspb.BinaryReader): ServingSiteEvent;
  }

  export namespace ServingSiteEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
    }
  }

}

export class WatchTenantResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchTenantResponse;

  getEventsList(): Array<WatchTenantResponse.TenantEvent>;
  setEventsList(value: Array<WatchTenantResponse.TenantEvent>): WatchTenantResponse;
  clearEventsList(): WatchTenantResponse;
  addEvents(value?: WatchTenantResponse.TenantEvent, index?: number): WatchTenantResponse.TenantEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchTenantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchTenantResponse): WatchTenantResponse.AsObject;
  static serializeBinaryToWriter(message: WatchTenantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchTenantResponse;
  static deserializeBinaryFromReader(message: WatchTenantResponse, reader: jspb.BinaryReader): WatchTenantResponse;
}

export namespace WatchTenantResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchTenantResponse.TenantEvent.AsObject>,
  }

  export class TenantEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): TenantEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant): TenantEvent;
    hasObject(): boolean;
    clearObject(): TenantEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TenantEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TenantEvent): TenantEvent.AsObject;
    static serializeBinaryToWriter(message: TenantEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TenantEvent;
    static deserializeBinaryFromReader(message: TenantEvent, reader: jspb.BinaryReader): TenantEvent;
  }

  export namespace TenantEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.AsObject,
    }
  }

}

export class WatchUserRoleClassResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchUserRoleClassResponse;

  getEventsList(): Array<WatchUserRoleClassResponse.UserRoleClassEvent>;
  setEventsList(value: Array<WatchUserRoleClassResponse.UserRoleClassEvent>): WatchUserRoleClassResponse;
  clearEventsList(): WatchUserRoleClassResponse;
  addEvents(value?: WatchUserRoleClassResponse.UserRoleClassEvent, index?: number): WatchUserRoleClassResponse.UserRoleClassEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchUserRoleClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchUserRoleClassResponse): WatchUserRoleClassResponse.AsObject;
  static serializeBinaryToWriter(message: WatchUserRoleClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchUserRoleClassResponse;
  static deserializeBinaryFromReader(message: WatchUserRoleClassResponse, reader: jspb.BinaryReader): WatchUserRoleClassResponse;
}

export namespace WatchUserRoleClassResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchUserRoleClassResponse.UserRoleClassEvent.AsObject>,
  }

  export class UserRoleClassEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): UserRoleClassEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass): UserRoleClassEvent;
    hasObject(): boolean;
    clearObject(): UserRoleClassEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRoleClassEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UserRoleClassEvent): UserRoleClassEvent.AsObject;
    static serializeBinaryToWriter(message: UserRoleClassEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRoleClassEvent;
    static deserializeBinaryFromReader(message: UserRoleClassEvent, reader: jspb.BinaryReader): UserRoleClassEvent;
  }

  export namespace UserRoleClassEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass.AsObject,
    }
  }

}

export class WatchVirtualBucketResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchVirtualBucketResponse;

  getEventsList(): Array<WatchVirtualBucketResponse.VirtualBucketEvent>;
  setEventsList(value: Array<WatchVirtualBucketResponse.VirtualBucketEvent>): WatchVirtualBucketResponse;
  clearEventsList(): WatchVirtualBucketResponse;
  addEvents(value?: WatchVirtualBucketResponse.VirtualBucketEvent, index?: number): WatchVirtualBucketResponse.VirtualBucketEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchVirtualBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchVirtualBucketResponse): WatchVirtualBucketResponse.AsObject;
  static serializeBinaryToWriter(message: WatchVirtualBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchVirtualBucketResponse;
  static deserializeBinaryFromReader(message: WatchVirtualBucketResponse, reader: jspb.BinaryReader): WatchVirtualBucketResponse;
}

export namespace WatchVirtualBucketResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchVirtualBucketResponse.VirtualBucketEvent.AsObject>,
  }

  export class VirtualBucketEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): VirtualBucketEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): VirtualBucketEvent;
    hasObject(): boolean;
    clearObject(): VirtualBucketEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VirtualBucketEvent.AsObject;
    static toObject(includeInstance: boolean, msg: VirtualBucketEvent): VirtualBucketEvent.AsObject;
    static serializeBinaryToWriter(message: VirtualBucketEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VirtualBucketEvent;
    static deserializeBinaryFromReader(message: VirtualBucketEvent, reader: jspb.BinaryReader): VirtualBucketEvent;
  }

  export namespace VirtualBucketEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    }
  }

}

export class WatchDataAppResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchDataAppResponse;

  getEventsList(): Array<WatchDataAppResponse.DataAppEvent>;
  setEventsList(value: Array<WatchDataAppResponse.DataAppEvent>): WatchDataAppResponse;
  clearEventsList(): WatchDataAppResponse;
  addEvents(value?: WatchDataAppResponse.DataAppEvent, index?: number): WatchDataAppResponse.DataAppEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchDataAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchDataAppResponse): WatchDataAppResponse.AsObject;
  static serializeBinaryToWriter(message: WatchDataAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchDataAppResponse;
  static deserializeBinaryFromReader(message: WatchDataAppResponse, reader: jspb.BinaryReader): WatchDataAppResponse;
}

export namespace WatchDataAppResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchDataAppResponse.DataAppEvent.AsObject>,
  }

  export class DataAppEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): DataAppEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp): DataAppEvent;
    hasObject(): boolean;
    clearObject(): DataAppEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataAppEvent.AsObject;
    static toObject(includeInstance: boolean, msg: DataAppEvent): DataAppEvent.AsObject;
    static serializeBinaryToWriter(message: DataAppEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataAppEvent;
    static deserializeBinaryFromReader(message: DataAppEvent, reader: jspb.BinaryReader): DataAppEvent;
  }

  export namespace DataAppEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.AsObject,
    }
  }

}

export class WatchPredictionResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchPredictionResponse;

  getEventsList(): Array<WatchPredictionResponse.PredictionEvent>;
  setEventsList(value: Array<WatchPredictionResponse.PredictionEvent>): WatchPredictionResponse;
  clearEventsList(): WatchPredictionResponse;
  addEvents(value?: WatchPredictionResponse.PredictionEvent, index?: number): WatchPredictionResponse.PredictionEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPredictionResponse): WatchPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: WatchPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPredictionResponse;
  static deserializeBinaryFromReader(message: WatchPredictionResponse, reader: jspb.BinaryReader): WatchPredictionResponse;
}

export namespace WatchPredictionResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchPredictionResponse.PredictionEvent.AsObject>,
  }

  export class PredictionEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): PredictionEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): PredictionEvent;
    hasObject(): boolean;
    clearObject(): PredictionEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: PredictionEvent): PredictionEvent.AsObject;
    static serializeBinaryToWriter(message: PredictionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictionEvent;
    static deserializeBinaryFromReader(message: PredictionEvent, reader: jspb.BinaryReader): PredictionEvent;
  }

  export namespace PredictionEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
    }
  }

}

export class WatchPredictionRunResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchPredictionRunResponse;

  getEventsList(): Array<WatchPredictionRunResponse.PredictionRunEvent>;
  setEventsList(value: Array<WatchPredictionRunResponse.PredictionRunEvent>): WatchPredictionRunResponse;
  clearEventsList(): WatchPredictionRunResponse;
  addEvents(value?: WatchPredictionRunResponse.PredictionRunEvent, index?: number): WatchPredictionRunResponse.PredictionRunEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPredictionRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPredictionRunResponse): WatchPredictionRunResponse.AsObject;
  static serializeBinaryToWriter(message: WatchPredictionRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPredictionRunResponse;
  static deserializeBinaryFromReader(message: WatchPredictionRunResponse, reader: jspb.BinaryReader): WatchPredictionRunResponse;
}

export namespace WatchPredictionRunResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchPredictionRunResponse.PredictionRunEvent.AsObject>,
  }

  export class PredictionRunEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): PredictionRunEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun): PredictionRunEvent;
    hasObject(): boolean;
    clearObject(): PredictionRunEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictionRunEvent.AsObject;
    static toObject(includeInstance: boolean, msg: PredictionRunEvent): PredictionRunEvent.AsObject;
    static serializeBinaryToWriter(message: PredictionRunEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictionRunEvent;
    static deserializeBinaryFromReader(message: PredictionRunEvent, reader: jspb.BinaryReader): PredictionRunEvent;
  }

  export namespace PredictionRunEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun.AsObject,
    }
  }

}

export class WatchPredictorResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchPredictorResponse;

  getEventsList(): Array<WatchPredictorResponse.PredictorEvent>;
  setEventsList(value: Array<WatchPredictorResponse.PredictorEvent>): WatchPredictorResponse;
  clearEventsList(): WatchPredictorResponse;
  addEvents(value?: WatchPredictorResponse.PredictorEvent, index?: number): WatchPredictorResponse.PredictorEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPredictorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPredictorResponse): WatchPredictorResponse.AsObject;
  static serializeBinaryToWriter(message: WatchPredictorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPredictorResponse;
  static deserializeBinaryFromReader(message: WatchPredictorResponse, reader: jspb.BinaryReader): WatchPredictorResponse;
}

export namespace WatchPredictorResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchPredictorResponse.PredictorEvent.AsObject>,
  }

  export class PredictorEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): PredictorEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor): PredictorEvent;
    hasObject(): boolean;
    clearObject(): PredictorEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictorEvent.AsObject;
    static toObject(includeInstance: boolean, msg: PredictorEvent): PredictorEvent.AsObject;
    static serializeBinaryToWriter(message: PredictorEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictorEvent;
    static deserializeBinaryFromReader(message: PredictorEvent, reader: jspb.BinaryReader): PredictorEvent;
  }

  export namespace PredictorEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject,
    }
  }

}

export class WatchPostmortemResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchPostmortemResponse;

  getEventsList(): Array<WatchPostmortemResponse.PostmortemEvent>;
  setEventsList(value: Array<WatchPostmortemResponse.PostmortemEvent>): WatchPostmortemResponse;
  clearEventsList(): WatchPostmortemResponse;
  addEvents(value?: WatchPostmortemResponse.PostmortemEvent, index?: number): WatchPostmortemResponse.PostmortemEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPostmortemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPostmortemResponse): WatchPostmortemResponse.AsObject;
  static serializeBinaryToWriter(message: WatchPostmortemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPostmortemResponse;
  static deserializeBinaryFromReader(message: WatchPostmortemResponse, reader: jspb.BinaryReader): WatchPostmortemResponse;
}

export namespace WatchPostmortemResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchPostmortemResponse.PostmortemEvent.AsObject>,
  }

  export class PostmortemEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): PostmortemEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem): PostmortemEvent;
    hasObject(): boolean;
    clearObject(): PostmortemEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostmortemEvent.AsObject;
    static toObject(includeInstance: boolean, msg: PostmortemEvent): PostmortemEvent.AsObject;
    static serializeBinaryToWriter(message: PostmortemEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostmortemEvent;
    static deserializeBinaryFromReader(message: PostmortemEvent, reader: jspb.BinaryReader): PostmortemEvent;
  }

  export namespace PostmortemEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject,
    }
  }

}

export class WatchReviewResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchReviewResponse;

  getEventsList(): Array<WatchReviewResponse.ReviewEvent>;
  setEventsList(value: Array<WatchReviewResponse.ReviewEvent>): WatchReviewResponse;
  clearEventsList(): WatchReviewResponse;
  addEvents(value?: WatchReviewResponse.ReviewEvent, index?: number): WatchReviewResponse.ReviewEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchReviewResponse): WatchReviewResponse.AsObject;
  static serializeBinaryToWriter(message: WatchReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchReviewResponse;
  static deserializeBinaryFromReader(message: WatchReviewResponse, reader: jspb.BinaryReader): WatchReviewResponse;
}

export namespace WatchReviewResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchReviewResponse.ReviewEvent.AsObject>,
  }

  export class ReviewEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): ReviewEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review): ReviewEvent;
    hasObject(): boolean;
    clearObject(): ReviewEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewEvent): ReviewEvent.AsObject;
    static serializeBinaryToWriter(message: ReviewEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewEvent;
    static deserializeBinaryFromReader(message: ReviewEvent, reader: jspb.BinaryReader): ReviewEvent;
  }

  export namespace ReviewEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.AsObject,
    }
  }

}

export class WatchRunbookResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchRunbookResponse;

  getEventsList(): Array<WatchRunbookResponse.RunbookEvent>;
  setEventsList(value: Array<WatchRunbookResponse.RunbookEvent>): WatchRunbookResponse;
  clearEventsList(): WatchRunbookResponse;
  addEvents(value?: WatchRunbookResponse.RunbookEvent, index?: number): WatchRunbookResponse.RunbookEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchRunbookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchRunbookResponse): WatchRunbookResponse.AsObject;
  static serializeBinaryToWriter(message: WatchRunbookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchRunbookResponse;
  static deserializeBinaryFromReader(message: WatchRunbookResponse, reader: jspb.BinaryReader): WatchRunbookResponse;
}

export namespace WatchRunbookResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchRunbookResponse.RunbookEvent.AsObject>,
  }

  export class RunbookEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): RunbookEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook): RunbookEvent;
    hasObject(): boolean;
    clearObject(): RunbookEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunbookEvent.AsObject;
    static toObject(includeInstance: boolean, msg: RunbookEvent): RunbookEvent.AsObject;
    static serializeBinaryToWriter(message: RunbookEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunbookEvent;
    static deserializeBinaryFromReader(message: RunbookEvent, reader: jspb.BinaryReader): RunbookEvent;
  }

  export namespace RunbookEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject,
    }
  }

}

export class WatchTodoResponse extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): WatchTodoResponse;

  getEventsList(): Array<WatchTodoResponse.TodoEvent>;
  setEventsList(value: Array<WatchTodoResponse.TodoEvent>): WatchTodoResponse;
  clearEventsList(): WatchTodoResponse;
  addEvents(value?: WatchTodoResponse.TodoEvent, index?: number): WatchTodoResponse.TodoEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchTodoResponse): WatchTodoResponse.AsObject;
  static serializeBinaryToWriter(message: WatchTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchTodoResponse;
  static deserializeBinaryFromReader(message: WatchTodoResponse, reader: jspb.BinaryReader): WatchTodoResponse;
}

export namespace WatchTodoResponse {
  export type AsObject = {
    generation: number,
    eventsList: Array<WatchTodoResponse.TodoEvent.AsObject>,
  }

  export class TodoEvent extends jspb.Message {
    getEvent(): EventType;
    setEvent(value: EventType): TodoEvent;

    getObject(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo | undefined;
    setObject(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo): TodoEvent;
    hasObject(): boolean;
    clearObject(): TodoEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TodoEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TodoEvent): TodoEvent.AsObject;
    static serializeBinaryToWriter(message: TodoEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TodoEvent;
    static deserializeBinaryFromReader(message: TodoEvent, reader: jspb.BinaryReader): TodoEvent;
  }

  export namespace TodoEvent {
    export type AsObject = {
      event: EventType,
      object?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.AsObject,
    }
  }

}

export enum EventType { 
  EVENT_UPDATE = 0,
  EVENT_DELETE = 1,
}
