import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListLabelingPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLabelingPipelineRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelineRunRequest): ListLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: ListLabelingPipelineRunRequest, reader: jspb.BinaryReader): ListLabelingPipelineRunRequest;
}

export namespace ListLabelingPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListLabelingPipelineRunResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRunList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRunList): ListLabelingPipelineRunResponse;
  hasItems(): boolean;
  clearItems(): ListLabelingPipelineRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelineRunResponse): ListLabelingPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelineRunResponse;
  static deserializeBinaryFromReader(message: ListLabelingPipelineRunResponse, reader: jspb.BinaryReader): ListLabelingPipelineRunResponse;
}

export namespace ListLabelingPipelineRunResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRunList.AsObject,
  }
}

export class CreateLabelingPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateLabelingPipelineRunRequest;

  getName(): string;
  setName(value: string): CreateLabelingPipelineRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateLabelingPipelineRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRunSpec): CreateLabelingPipelineRunRequest;
  hasSpec(): boolean;
  clearSpec(): CreateLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelingPipelineRunRequest): CreateLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: CreateLabelingPipelineRunRequest, reader: jspb.BinaryReader): CreateLabelingPipelineRunRequest;
}

export namespace CreateLabelingPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRunSpec.AsObject,
  }
}

export class CreateLabelingPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelingPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelingPipelineRunResponse): CreateLabelingPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLabelingPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelingPipelineRunResponse;
  static deserializeBinaryFromReader(message: CreateLabelingPipelineRunResponse, reader: jspb.BinaryReader): CreateLabelingPipelineRunResponse;
}

export namespace CreateLabelingPipelineRunResponse {
  export type AsObject = {
  }
}

export class UpdateLabelingPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateLabelingPipelineRunRequest;

  getName(): string;
  setName(value: string): UpdateLabelingPipelineRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateLabelingPipelineRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRunSpec): UpdateLabelingPipelineRunRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelingPipelineRunRequest): UpdateLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdateLabelingPipelineRunRequest, reader: jspb.BinaryReader): UpdateLabelingPipelineRunRequest;
}

export namespace UpdateLabelingPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRunSpec.AsObject,
  }
}

export class UpdateLabelingPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelingPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelingPipelineRunResponse): UpdateLabelingPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateLabelingPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelingPipelineRunResponse;
  static deserializeBinaryFromReader(message: UpdateLabelingPipelineRunResponse, reader: jspb.BinaryReader): UpdateLabelingPipelineRunResponse;
}

export namespace UpdateLabelingPipelineRunResponse {
  export type AsObject = {
  }
}

export class GetLabelingPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLabelingPipelineRunRequest;

  getName(): string;
  setName(value: string): GetLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelingPipelineRunRequest): GetLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: GetLabelingPipelineRunRequest, reader: jspb.BinaryReader): GetLabelingPipelineRunRequest;
}

export namespace GetLabelingPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetLabelingPipelineRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun): GetLabelingPipelineRunResponse;
  hasItem(): boolean;
  clearItem(): GetLabelingPipelineRunResponse;

  getYaml(): string;
  setYaml(value: string): GetLabelingPipelineRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelingPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelingPipelineRunResponse): GetLabelingPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetLabelingPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelingPipelineRunResponse;
  static deserializeBinaryFromReader(message: GetLabelingPipelineRunResponse, reader: jspb.BinaryReader): GetLabelingPipelineRunResponse;
}

export namespace GetLabelingPipelineRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.AsObject,
    yaml: string,
  }
}

export class DeleteLabelingPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLabelingPipelineRunRequest;

  getName(): string;
  setName(value: string): DeleteLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelingPipelineRunRequest): DeleteLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: DeleteLabelingPipelineRunRequest, reader: jspb.BinaryReader): DeleteLabelingPipelineRunRequest;
}

export namespace DeleteLabelingPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteLabelingPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelingPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelingPipelineRunResponse): DeleteLabelingPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteLabelingPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelingPipelineRunResponse;
  static deserializeBinaryFromReader(message: DeleteLabelingPipelineRunResponse, reader: jspb.BinaryReader): DeleteLabelingPipelineRunResponse;
}

export namespace DeleteLabelingPipelineRunResponse {
  export type AsObject = {
  }
}

