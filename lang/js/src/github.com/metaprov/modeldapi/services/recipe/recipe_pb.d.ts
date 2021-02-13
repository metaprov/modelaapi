import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_services_common_common_pb from '../../../../../github.com/metaprov/modeldapi/services/common/common_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListRecipesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRecipesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListRecipesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesRequest): ListRecipesRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecipesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesRequest;
  static deserializeBinaryFromReader(message: ListRecipesRequest, reader: jspb.BinaryReader): ListRecipesRequest;
}

export namespace ListRecipesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListRecipesResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeList): ListRecipesResponse;
  hasItems(): boolean;
  clearItems(): ListRecipesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesResponse): ListRecipesResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesResponse;
  static deserializeBinaryFromReader(message: ListRecipesResponse, reader: jspb.BinaryReader): ListRecipesResponse;
}

export namespace ListRecipesResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeList.AsObject,
  }
}

export class CreateRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateRecipeRequest;

  getName(): string;
  setName(value: string): CreateRecipeRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateRecipeRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec): CreateRecipeRequest;
  hasSpec(): boolean;
  clearSpec(): CreateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeRequest): CreateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeRequest;
  static deserializeBinaryFromReader(message: CreateRecipeRequest, reader: jspb.BinaryReader): CreateRecipeRequest;
}

export namespace CreateRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec.AsObject,
  }
}

export class CreateRecipeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeResponse): CreateRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeResponse;
  static deserializeBinaryFromReader(message: CreateRecipeResponse, reader: jspb.BinaryReader): CreateRecipeResponse;
}

export namespace CreateRecipeResponse {
  export type AsObject = {
  }
}

export class UpdateRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateRecipeRequest;

  getName(): string;
  setName(value: string): UpdateRecipeRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateRecipeRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec): UpdateRecipeRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeRequest): UpdateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeRequest;
  static deserializeBinaryFromReader(message: UpdateRecipeRequest, reader: jspb.BinaryReader): UpdateRecipeRequest;
}

export namespace UpdateRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec.AsObject,
  }
}

export class UpdateRecipeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeResponse): UpdateRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeResponse;
  static deserializeBinaryFromReader(message: UpdateRecipeResponse, reader: jspb.BinaryReader): UpdateRecipeResponse;
}

export namespace UpdateRecipeResponse {
  export type AsObject = {
  }
}

export class GetRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetRecipeRequest;

  getName(): string;
  setName(value: string): GetRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRequest): GetRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRequest;
  static deserializeBinaryFromReader(message: GetRecipeRequest, reader: jspb.BinaryReader): GetRecipeRequest;
}

export namespace GetRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ProfileRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ProfileRecipeRequest;

  getName(): string;
  setName(value: string): ProfileRecipeRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec): ProfileRecipeRequest;
  hasSpec(): boolean;
  clearSpec(): ProfileRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileRecipeRequest): ProfileRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: ProfileRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileRecipeRequest;
  static deserializeBinaryFromReader(message: ProfileRecipeRequest, reader: jspb.BinaryReader): ProfileRecipeRequest;
}

export namespace ProfileRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec.AsObject,
  }
}

export class ProfileRecipeResponse extends jspb.Message {
  getTable(): github_com_metaprov_modeldapi_services_common_common_pb.TableView | undefined;
  setTable(value?: github_com_metaprov_modeldapi_services_common_common_pb.TableView): ProfileRecipeResponse;
  hasTable(): boolean;
  clearTable(): ProfileRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileRecipeResponse): ProfileRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: ProfileRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileRecipeResponse;
  static deserializeBinaryFromReader(message: ProfileRecipeResponse, reader: jspb.BinaryReader): ProfileRecipeResponse;
}

export namespace ProfileRecipeResponse {
  export type AsObject = {
    table?: github_com_metaprov_modeldapi_services_common_common_pb.TableView.AsObject,
  }
}

export class RunRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): RunRecipeRequest;

  getName(): string;
  setName(value: string): RunRecipeRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec): RunRecipeRequest;
  hasSpec(): boolean;
  clearSpec(): RunRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunRecipeRequest): RunRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: RunRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunRecipeRequest;
  static deserializeBinaryFromReader(message: RunRecipeRequest, reader: jspb.BinaryReader): RunRecipeRequest;
}

export namespace RunRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    spec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeSpec.AsObject,
  }
}

export class RunRecipeResponse extends jspb.Message {
  getRecipe(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setRecipe(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): RunRecipeResponse;
  hasRecipe(): boolean;
  clearRecipe(): RunRecipeResponse;

  getYaml(): string;
  setYaml(value: string): RunRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunRecipeResponse): RunRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: RunRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunRecipeResponse;
  static deserializeBinaryFromReader(message: RunRecipeResponse, reader: jspb.BinaryReader): RunRecipeResponse;
}

export namespace RunRecipeResponse {
  export type AsObject = {
    recipe?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
    yaml: string,
  }
}

export class GetRecipeResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): GetRecipeResponse;
  hasItem(): boolean;
  clearItem(): GetRecipeResponse;

  getYaml(): string;
  setYaml(value: string): GetRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeResponse): GetRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: GetRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeResponse;
  static deserializeBinaryFromReader(message: GetRecipeResponse, reader: jspb.BinaryReader): GetRecipeResponse;
}

export namespace GetRecipeResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
    yaml: string,
  }
}

export class DeleteRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteRecipeRequest;

  getName(): string;
  setName(value: string): DeleteRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeRequest): DeleteRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeRequest;
  static deserializeBinaryFromReader(message: DeleteRecipeRequest, reader: jspb.BinaryReader): DeleteRecipeRequest;
}

export namespace DeleteRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteRecipeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeResponse): DeleteRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeResponse;
  static deserializeBinaryFromReader(message: DeleteRecipeResponse, reader: jspb.BinaryReader): DeleteRecipeResponse;
}

export namespace DeleteRecipeResponse {
  export type AsObject = {
  }
}

