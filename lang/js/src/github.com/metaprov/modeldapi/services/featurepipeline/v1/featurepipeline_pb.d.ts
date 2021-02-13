import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListFeaturePipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeaturePipelineRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelineRequest): ListFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: ListFeaturePipelineRequest, reader: jspb.BinaryReader): ListFeaturePipelineRequest;
}

export namespace ListFeaturePipelineRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListFeaturePipelineResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineList): ListFeaturePipelineResponse;
  hasItems(): boolean;
  clearItems(): ListFeaturePipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelineResponse): ListFeaturePipelineResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelineResponse;
  static deserializeBinaryFromReader(message: ListFeaturePipelineResponse, reader: jspb.BinaryReader): ListFeaturePipelineResponse;
}

export namespace ListFeaturePipelineResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineList.AsObject,
  }
}

export class CreateFeaturePipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateFeaturePipelineRequest;

  getName(): string;
  setName(value: string): CreateFeaturePipelineRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateFeaturePipelineRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineSpec): CreateFeaturePipelineRequest;
  hasSpec(): boolean;
  clearSpec(): CreateFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturePipelineRequest): CreateFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: CreateFeaturePipelineRequest, reader: jspb.BinaryReader): CreateFeaturePipelineRequest;
}

export namespace CreateFeaturePipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineSpec.AsObject,
  }
}

export class CreateFeaturePipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturePipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturePipelineResponse): CreateFeaturePipelineResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturePipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturePipelineResponse;
  static deserializeBinaryFromReader(message: CreateFeaturePipelineResponse, reader: jspb.BinaryReader): CreateFeaturePipelineResponse;
}

export namespace CreateFeaturePipelineResponse {
  export type AsObject = {
  }
}

export class UpdateFeaturePipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateFeaturePipelineRequest;

  getName(): string;
  setName(value: string): UpdateFeaturePipelineRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateFeaturePipelineRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineSpec): UpdateFeaturePipelineRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturePipelineRequest): UpdateFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: UpdateFeaturePipelineRequest, reader: jspb.BinaryReader): UpdateFeaturePipelineRequest;
}

export namespace UpdateFeaturePipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineSpec.AsObject,
  }
}

export class UpdateFeaturePipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturePipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturePipelineResponse): UpdateFeaturePipelineResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturePipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturePipelineResponse;
  static deserializeBinaryFromReader(message: UpdateFeaturePipelineResponse, reader: jspb.BinaryReader): UpdateFeaturePipelineResponse;
}

export namespace UpdateFeaturePipelineResponse {
  export type AsObject = {
  }
}

export class GetFeaturePipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeaturePipelineRequest;

  getName(): string;
  setName(value: string): GetFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturePipelineRequest): GetFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: GetFeaturePipelineRequest, reader: jspb.BinaryReader): GetFeaturePipelineRequest;
}

export namespace GetFeaturePipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetFeaturePipelineResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline): GetFeaturePipelineResponse;
  hasItem(): boolean;
  clearItem(): GetFeaturePipelineResponse;

  getYaml(): string;
  setYaml(value: string): GetFeaturePipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturePipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturePipelineResponse): GetFeaturePipelineResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeaturePipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturePipelineResponse;
  static deserializeBinaryFromReader(message: GetFeaturePipelineResponse, reader: jspb.BinaryReader): GetFeaturePipelineResponse;
}

export namespace GetFeaturePipelineResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.AsObject,
    yaml: string,
  }
}

export class DeleteFeaturePipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeaturePipelineRequest;

  getName(): string;
  setName(value: string): DeleteFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturePipelineRequest): DeleteFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: DeleteFeaturePipelineRequest, reader: jspb.BinaryReader): DeleteFeaturePipelineRequest;
}

export namespace DeleteFeaturePipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteFeaturePipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturePipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturePipelineResponse): DeleteFeaturePipelineResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturePipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturePipelineResponse;
  static deserializeBinaryFromReader(message: DeleteFeaturePipelineResponse, reader: jspb.BinaryReader): DeleteFeaturePipelineResponse;
}

export namespace DeleteFeaturePipelineResponse {
  export type AsObject = {
  }
}

