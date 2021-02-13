import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modeldapi/services/common/v1/common_pb';


export class ListNotebookRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListNotebookRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListNotebookRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebookRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebookRunsRequest): ListNotebookRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotebookRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebookRunsRequest;
  static deserializeBinaryFromReader(message: ListNotebookRunsRequest, reader: jspb.BinaryReader): ListNotebookRunsRequest;
}

export namespace ListNotebookRunsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListNotebookRunsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunList): ListNotebookRunsResponse;
  hasItems(): boolean;
  clearItems(): ListNotebookRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebookRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebookRunsResponse): ListNotebookRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotebookRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebookRunsResponse;
  static deserializeBinaryFromReader(message: ListNotebookRunsResponse, reader: jspb.BinaryReader): ListNotebookRunsResponse;
}

export namespace ListNotebookRunsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunList.AsObject,
  }
}

export class NotebookRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunResponse): NotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: NotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunResponse;
  static deserializeBinaryFromReader(message: NotebookRunResponse, reader: jspb.BinaryReader): NotebookRunResponse;
}

export namespace NotebookRunResponse {
  export type AsObject = {
  }
}

export class CreateNotebookRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateNotebookRunRequest;

  getName(): string;
  setName(value: string): CreateNotebookRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateNotebookRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunSpec): CreateNotebookRunRequest;
  hasSpec(): boolean;
  clearSpec(): CreateNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotebookRunRequest): CreateNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotebookRunRequest;
  static deserializeBinaryFromReader(message: CreateNotebookRunRequest, reader: jspb.BinaryReader): CreateNotebookRunRequest;
}

export namespace CreateNotebookRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunSpec.AsObject,
  }
}

export class CreateNotebookRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotebookRunResponse): CreateNotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateNotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotebookRunResponse;
  static deserializeBinaryFromReader(message: CreateNotebookRunResponse, reader: jspb.BinaryReader): CreateNotebookRunResponse;
}

export namespace CreateNotebookRunResponse {
  export type AsObject = {
  }
}

export class UpdateNotebookRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateNotebookRunRequest;

  getName(): string;
  setName(value: string): UpdateNotebookRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateNotebookRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunSpec): UpdateNotebookRunRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotebookRunRequest): UpdateNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotebookRunRequest;
  static deserializeBinaryFromReader(message: UpdateNotebookRunRequest, reader: jspb.BinaryReader): UpdateNotebookRunRequest;
}

export namespace UpdateNotebookRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunSpec.AsObject,
  }
}

export class UpdateNotebookRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotebookRunResponse): UpdateNotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateNotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotebookRunResponse;
  static deserializeBinaryFromReader(message: UpdateNotebookRunResponse, reader: jspb.BinaryReader): UpdateNotebookRunResponse;
}

export namespace UpdateNotebookRunResponse {
  export type AsObject = {
  }
}

export class GetNotebookRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetNotebookRunRequest;

  getName(): string;
  setName(value: string): GetNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotebookRunRequest): GetNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotebookRunRequest;
  static deserializeBinaryFromReader(message: GetNotebookRunRequest, reader: jspb.BinaryReader): GetNotebookRunRequest;
}

export namespace GetNotebookRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetNotebookRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun): GetNotebookRunResponse;
  hasItem(): boolean;
  clearItem(): GetNotebookRunResponse;

  getYaml(): string;
  setYaml(value: string): GetNotebookRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotebookRunResponse): GetNotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetNotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotebookRunResponse;
  static deserializeBinaryFromReader(message: GetNotebookRunResponse, reader: jspb.BinaryReader): GetNotebookRunResponse;
}

export namespace GetNotebookRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.AsObject,
    yaml: string,
  }
}

export class DeleteNotebookRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteNotebookRunRequest;

  getName(): string;
  setName(value: string): DeleteNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotebookRunRequest): DeleteNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotebookRunRequest;
  static deserializeBinaryFromReader(message: DeleteNotebookRunRequest, reader: jspb.BinaryReader): DeleteNotebookRunRequest;
}

export namespace DeleteNotebookRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteNotebookRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotebookRunResponse): DeleteNotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteNotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotebookRunResponse;
  static deserializeBinaryFromReader(message: DeleteNotebookRunResponse, reader: jspb.BinaryReader): DeleteNotebookRunResponse;
}

export namespace DeleteNotebookRunResponse {
  export type AsObject = {
  }
}

