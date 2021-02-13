import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListLabelingPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLabelingPipelineRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelineRequest): ListLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: ListLabelingPipelineRequest, reader: jspb.BinaryReader): ListLabelingPipelineRequest;
}

export namespace ListLabelingPipelineRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListLabelingPipelineResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineList): ListLabelingPipelineResponse;
  hasItems(): boolean;
  clearItems(): ListLabelingPipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelineResponse): ListLabelingPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelineResponse;
  static deserializeBinaryFromReader(message: ListLabelingPipelineResponse, reader: jspb.BinaryReader): ListLabelingPipelineResponse;
}

export namespace ListLabelingPipelineResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineList.AsObject,
  }
}

export class CreateLabelingPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateLabelingPipelineRequest;

  getName(): string;
  setName(value: string): CreateLabelingPipelineRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateLabelingPipelineRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineSpec): CreateLabelingPipelineRequest;
  hasSpec(): boolean;
  clearSpec(): CreateLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelingPipelineRequest): CreateLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: CreateLabelingPipelineRequest, reader: jspb.BinaryReader): CreateLabelingPipelineRequest;
}

export namespace CreateLabelingPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineSpec.AsObject,
  }
}

export class CreateLabelingPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelingPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelingPipelineResponse): CreateLabelingPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLabelingPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelingPipelineResponse;
  static deserializeBinaryFromReader(message: CreateLabelingPipelineResponse, reader: jspb.BinaryReader): CreateLabelingPipelineResponse;
}

export namespace CreateLabelingPipelineResponse {
  export type AsObject = {
  }
}

export class UpdateLabelingPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateLabelingPipelineRequest;

  getName(): string;
  setName(value: string): UpdateLabelingPipelineRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateLabelingPipelineRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineSpec): UpdateLabelingPipelineRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelingPipelineRequest): UpdateLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: UpdateLabelingPipelineRequest, reader: jspb.BinaryReader): UpdateLabelingPipelineRequest;
}

export namespace UpdateLabelingPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineSpec.AsObject,
  }
}

export class UpdateLabelingPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelingPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelingPipelineResponse): UpdateLabelingPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateLabelingPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelingPipelineResponse;
  static deserializeBinaryFromReader(message: UpdateLabelingPipelineResponse, reader: jspb.BinaryReader): UpdateLabelingPipelineResponse;
}

export namespace UpdateLabelingPipelineResponse {
  export type AsObject = {
  }
}

export class GetLabelingPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLabelingPipelineRequest;

  getName(): string;
  setName(value: string): GetLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelingPipelineRequest): GetLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: GetLabelingPipelineRequest, reader: jspb.BinaryReader): GetLabelingPipelineRequest;
}

export namespace GetLabelingPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetLabelingPipelineResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline): GetLabelingPipelineResponse;
  hasItem(): boolean;
  clearItem(): GetLabelingPipelineResponse;

  getYaml(): string;
  setYaml(value: string): GetLabelingPipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelingPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelingPipelineResponse): GetLabelingPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: GetLabelingPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelingPipelineResponse;
  static deserializeBinaryFromReader(message: GetLabelingPipelineResponse, reader: jspb.BinaryReader): GetLabelingPipelineResponse;
}

export namespace GetLabelingPipelineResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.AsObject,
    yaml: string,
  }
}

export class DeleteLabelingPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLabelingPipelineRequest;

  getName(): string;
  setName(value: string): DeleteLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelingPipelineRequest): DeleteLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: DeleteLabelingPipelineRequest, reader: jspb.BinaryReader): DeleteLabelingPipelineRequest;
}

export namespace DeleteLabelingPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteLabelingPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelingPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelingPipelineResponse): DeleteLabelingPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteLabelingPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelingPipelineResponse;
  static deserializeBinaryFromReader(message: DeleteLabelingPipelineResponse, reader: jspb.BinaryReader): DeleteLabelingPipelineResponse;
}

export namespace DeleteLabelingPipelineResponse {
  export type AsObject = {
  }
}

