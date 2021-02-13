import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListRecipeRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRecipeRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListRecipeRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipeRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipeRunsRequest): ListRecipeRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecipeRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipeRunsRequest;
  static deserializeBinaryFromReader(message: ListRecipeRunsRequest, reader: jspb.BinaryReader): ListRecipeRunsRequest;
}

export namespace ListRecipeRunsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListRecipeRunsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRunList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRunList): ListRecipeRunsResponse;
  hasItems(): boolean;
  clearItems(): ListRecipeRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipeRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipeRunsResponse): ListRecipeRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipeRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipeRunsResponse;
  static deserializeBinaryFromReader(message: ListRecipeRunsResponse, reader: jspb.BinaryReader): ListRecipeRunsResponse;
}

export namespace ListRecipeRunsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRunList.AsObject,
  }
}

export class CreateRecipeRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateRecipeRunRequest;

  getName(): string;
  setName(value: string): CreateRecipeRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateRecipeRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRunSpec): CreateRecipeRunRequest;
  hasSpec(): boolean;
  clearSpec(): CreateRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeRunRequest): CreateRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeRunRequest;
  static deserializeBinaryFromReader(message: CreateRecipeRunRequest, reader: jspb.BinaryReader): CreateRecipeRunRequest;
}

export namespace CreateRecipeRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRunSpec.AsObject,
  }
}

export class CreateRecipeRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeRunResponse): CreateRecipeRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeRunResponse;
  static deserializeBinaryFromReader(message: CreateRecipeRunResponse, reader: jspb.BinaryReader): CreateRecipeRunResponse;
}

export namespace CreateRecipeRunResponse {
  export type AsObject = {
  }
}

export class UpdateRecipeRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateRecipeRunRequest;

  getName(): string;
  setName(value: string): UpdateRecipeRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateRecipeRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRunSpec): UpdateRecipeRunRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeRunRequest): UpdateRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeRunRequest;
  static deserializeBinaryFromReader(message: UpdateRecipeRunRequest, reader: jspb.BinaryReader): UpdateRecipeRunRequest;
}

export namespace UpdateRecipeRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRunSpec.AsObject,
  }
}

export class UpdateRecipeRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeRunResponse): UpdateRecipeRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeRunResponse;
  static deserializeBinaryFromReader(message: UpdateRecipeRunResponse, reader: jspb.BinaryReader): UpdateRecipeRunResponse;
}

export namespace UpdateRecipeRunResponse {
  export type AsObject = {
  }
}

export class GetRecipeRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetRecipeRunRequest;

  getName(): string;
  setName(value: string): GetRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRunRequest): GetRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRunRequest;
  static deserializeBinaryFromReader(message: GetRecipeRunRequest, reader: jspb.BinaryReader): GetRecipeRunRequest;
}

export namespace GetRecipeRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetRecipeRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun): GetRecipeRunResponse;
  hasItem(): boolean;
  clearItem(): GetRecipeRunResponse;

  getYaml(): string;
  setYaml(value: string): GetRecipeRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRunResponse): GetRecipeRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRunResponse;
  static deserializeBinaryFromReader(message: GetRecipeRunResponse, reader: jspb.BinaryReader): GetRecipeRunResponse;
}

export namespace GetRecipeRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject,
    yaml: string,
  }
}

export class DeleteRecipeRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteRecipeRunRequest;

  getName(): string;
  setName(value: string): DeleteRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeRunRequest): DeleteRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeRunRequest;
  static deserializeBinaryFromReader(message: DeleteRecipeRunRequest, reader: jspb.BinaryReader): DeleteRecipeRunRequest;
}

export namespace DeleteRecipeRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteRecipeRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeRunResponse): DeleteRecipeRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeRunResponse;
  static deserializeBinaryFromReader(message: DeleteRecipeRunResponse, reader: jspb.BinaryReader): DeleteRecipeRunResponse;
}

export namespace DeleteRecipeRunResponse {
  export type AsObject = {
  }
}

