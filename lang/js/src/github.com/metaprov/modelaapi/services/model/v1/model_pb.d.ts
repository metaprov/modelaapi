import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class CreateModelProfileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): CreateModelProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelProfileResponse): CreateModelProfileResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelProfileResponse;
  static deserializeBinaryFromReader(message: CreateModelProfileResponse, reader: jspb.BinaryReader): CreateModelProfileResponse;
}

export namespace CreateModelProfileResponse {
  export type AsObject = {
    uri: string,
  }
}

export class CreateModelProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateModelProfileRequest;

  getName(): string;
  setName(value: string): CreateModelProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelProfileRequest): CreateModelProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelProfileRequest;
  static deserializeBinaryFromReader(message: CreateModelProfileRequest, reader: jspb.BinaryReader): CreateModelProfileRequest;
}

export namespace CreateModelProfileRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListModelProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelProfileRequest;

  getName(): string;
  setName(value: string): ListModelProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelProfileRequest): ListModelProfileRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelProfileRequest;
  static deserializeBinaryFromReader(message: ListModelProfileRequest, reader: jspb.BinaryReader): ListModelProfileRequest;
}

export namespace ListModelProfileRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModelProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelProfileRequest;

  getName(): string;
  setName(value: string): GetModelProfileRequest;

  getUri(): string;
  setUri(value: string): GetModelProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelProfileRequest): GetModelProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelProfileRequest;
  static deserializeBinaryFromReader(message: GetModelProfileRequest, reader: jspb.BinaryReader): GetModelProfileRequest;
}

export namespace GetModelProfileRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    uri: string,
  }
}

export class GetModelProfileResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile): GetModelProfileResponse;
  hasProfile(): boolean;
  clearProfile(): GetModelProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelProfileResponse): GetModelProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelProfileResponse;
  static deserializeBinaryFromReader(message: GetModelProfileResponse, reader: jspb.BinaryReader): GetModelProfileResponse;
}

export namespace GetModelProfileResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile.AsObject,
  }
}

export class GetModelLogsResponse extends jspb.Message {
  getLogsMap(): jspb.Map<string, string>;
  clearLogsMap(): GetModelLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelLogsResponse): GetModelLogsResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelLogsResponse;
  static deserializeBinaryFromReader(message: GetModelLogsResponse, reader: jspb.BinaryReader): GetModelLogsResponse;
}

export namespace GetModelLogsResponse {
  export type AsObject = {
    logsMap: Array<[string, string]>,
  }
}

export class GetModelLogsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelLogsRequest;

  getName(): string;
  setName(value: string): GetModelLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelLogsRequest): GetModelLogsRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelLogsRequest;
  static deserializeBinaryFromReader(message: GetModelLogsRequest, reader: jspb.BinaryReader): GetModelLogsRequest;
}

export namespace GetModelLogsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateModelRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): CreateModelRequest;
  hasItem(): boolean;
  clearItem(): CreateModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelRequest): CreateModelRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelRequest;
  static deserializeBinaryFromReader(message: CreateModelRequest, reader: jspb.BinaryReader): CreateModelRequest;
}

export namespace CreateModelRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class CreateModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelResponse): CreateModelResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelResponse;
  static deserializeBinaryFromReader(message: CreateModelResponse, reader: jspb.BinaryReader): CreateModelResponse;
}

export namespace CreateModelResponse {
  export type AsObject = {
  }
}

export class UpdateModelRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): UpdateModelRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelRequest): UpdateModelRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelRequest;
  static deserializeBinaryFromReader(message: UpdateModelRequest, reader: jspb.BinaryReader): UpdateModelRequest;
}

export namespace UpdateModelRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class UpdateModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelResponse): UpdateModelResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelResponse;
  static deserializeBinaryFromReader(message: UpdateModelResponse, reader: jspb.BinaryReader): UpdateModelResponse;
}

export namespace UpdateModelResponse {
  export type AsObject = {
  }
}

export class GetModelResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): GetModelResponse;
  hasItem(): boolean;
  clearItem(): GetModelResponse;

  getYaml(): string;
  setYaml(value: string): GetModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelResponse): GetModelResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelResponse;
  static deserializeBinaryFromReader(message: GetModelResponse, reader: jspb.BinaryReader): GetModelResponse;
}

export namespace GetModelResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    yaml: string,
  }
}

export class AbortModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AbortModelRequest;

  getName(): string;
  setName(value: string): AbortModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AbortModelRequest): AbortModelRequest.AsObject;
  static serializeBinaryToWriter(message: AbortModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortModelRequest;
  static deserializeBinaryFromReader(message: AbortModelRequest, reader: jspb.BinaryReader): AbortModelRequest;
}

export namespace AbortModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class AbortModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AbortModelResponse): AbortModelResponse.AsObject;
  static serializeBinaryToWriter(message: AbortModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortModelResponse;
  static deserializeBinaryFromReader(message: AbortModelResponse, reader: jspb.BinaryReader): AbortModelResponse;
}

export namespace AbortModelResponse {
  export type AsObject = {
  }
}

export class PauseModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseModelRequest;

  getName(): string;
  setName(value: string): PauseModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseModelRequest): PauseModelRequest.AsObject;
  static serializeBinaryToWriter(message: PauseModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseModelRequest;
  static deserializeBinaryFromReader(message: PauseModelRequest, reader: jspb.BinaryReader): PauseModelRequest;
}

export namespace PauseModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PauseModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseModelResponse): PauseModelResponse.AsObject;
  static serializeBinaryToWriter(message: PauseModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseModelResponse;
  static deserializeBinaryFromReader(message: PauseModelResponse, reader: jspb.BinaryReader): PauseModelResponse;
}

export namespace PauseModelResponse {
  export type AsObject = {
  }
}

export class ResumeModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeModelRequest;

  getName(): string;
  setName(value: string): ResumeModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeModelRequest): ResumeModelRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeModelRequest;
  static deserializeBinaryFromReader(message: ResumeModelRequest, reader: jspb.BinaryReader): ResumeModelRequest;
}

export namespace ResumeModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeModelResponse): ResumeModelResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeModelResponse;
  static deserializeBinaryFromReader(message: ResumeModelResponse, reader: jspb.BinaryReader): ResumeModelResponse;
}

export namespace ResumeModelResponse {
  export type AsObject = {
  }
}

export class CompareModelsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompareModelsRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): CompareModelsRequest;
  clearNamesList(): CompareModelsRequest;
  addNames(value: string, index?: number): CompareModelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompareModelsRequest): CompareModelsRequest.AsObject;
  static serializeBinaryToWriter(message: CompareModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareModelsRequest;
  static deserializeBinaryFromReader(message: CompareModelsRequest, reader: jspb.BinaryReader): CompareModelsRequest;
}

export namespace CompareModelsRequest {
  export type AsObject = {
    namespace: string,
    namesList: Array<string>,
  }
}

export class CompareModelsResponse extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompareModelsResponse;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): CompareModelsResponse;
  clearNamesList(): CompareModelsResponse;
  addNames(value: string, index?: number): CompareModelsResponse;

  getProfilesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile>;
  setProfilesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile>): CompareModelsResponse;
  clearProfilesList(): CompareModelsResponse;
  addProfiles(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompareModelsResponse): CompareModelsResponse.AsObject;
  static serializeBinaryToWriter(message: CompareModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareModelsResponse;
  static deserializeBinaryFromReader(message: CompareModelsResponse, reader: jspb.BinaryReader): CompareModelsResponse;
}

export namespace CompareModelsResponse {
  export type AsObject = {
    namespace: string,
    namesList: Array<string>,
    profilesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile.AsObject>,
  }
}

export class CompileModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompileModelRequest;

  getName(): string;
  setName(value: string): CompileModelRequest;

  getTarget(): string;
  setTarget(value: string): CompileModelRequest;

  getCompiler(): string;
  setCompiler(value: string): CompileModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompileModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompileModelRequest): CompileModelRequest.AsObject;
  static serializeBinaryToWriter(message: CompileModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompileModelRequest;
  static deserializeBinaryFromReader(message: CompileModelRequest, reader: jspb.BinaryReader): CompileModelRequest;
}

export namespace CompileModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    target: string,
    compiler: string,
  }
}

export class CompileModelResponse extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompileModelResponse;

  getNames(): string;
  setNames(value: string): CompileModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompileModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompileModelResponse): CompileModelResponse.AsObject;
  static serializeBinaryToWriter(message: CompileModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompileModelResponse;
  static deserializeBinaryFromReader(message: CompileModelResponse, reader: jspb.BinaryReader): CompileModelResponse;
}

export namespace CompileModelResponse {
  export type AsObject = {
    namespace: string,
    names: string,
  }
}

export class DeployModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeployModelRequest;

  getName(): string;
  setName(value: string): DeployModelRequest;

  getPredictor(): string;
  setPredictor(value: string): DeployModelRequest;

  getReplicas(): number;
  setReplicas(value: number): DeployModelRequest;

  getTraffic(): number;
  setTraffic(value: number): DeployModelRequest;

  getRole(): string;
  setRole(value: string): DeployModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployModelRequest): DeployModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeployModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployModelRequest;
  static deserializeBinaryFromReader(message: DeployModelRequest, reader: jspb.BinaryReader): DeployModelRequest;
}

export namespace DeployModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    predictor: string,
    replicas: number,
    traffic: number,
    role: string,
  }
}

export class PublishModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PublishModelRequest;

  getName(): string;
  setName(value: string): PublishModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishModelRequest): PublishModelRequest.AsObject;
  static serializeBinaryToWriter(message: PublishModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishModelRequest;
  static deserializeBinaryFromReader(message: PublishModelRequest, reader: jspb.BinaryReader): PublishModelRequest;
}

export namespace PublishModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeployModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeployModelResponse): DeployModelResponse.AsObject;
  static serializeBinaryToWriter(message: DeployModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployModelResponse;
  static deserializeBinaryFromReader(message: DeployModelResponse, reader: jspb.BinaryReader): DeployModelResponse;
}

export namespace DeployModelResponse {
  export type AsObject = {
  }
}

export class ListModelsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModelsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListModelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListModelsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList): ListModelsResponse;
  hasItems(): boolean;
  clearItems(): ListModelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
  static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.AsObject,
  }
}

export class GetModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelRequest;

  getName(): string;
  setName(value: string): GetModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class UpdateModelResult extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelResult): UpdateModelResult.AsObject;
  static serializeBinaryToWriter(message: UpdateModelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelResult;
  static deserializeBinaryFromReader(message: UpdateModelResult, reader: jspb.BinaryReader): UpdateModelResult;
}

export namespace UpdateModelResult {
  export type AsObject = {
  }
}

export class DeleteModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelRequest;

  getName(): string;
  setName(value: string): DeleteModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelResponse): DeleteModelResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelResponse;
  static deserializeBinaryFromReader(message: DeleteModelResponse, reader: jspb.BinaryReader): DeleteModelResponse;
}

export namespace DeleteModelResponse {
  export type AsObject = {
  }
}

export class PublishModelResponse extends jspb.Message {
  getModeltarhash(): string;
  setModeltarhash(value: string): PublishModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishModelResponse): PublishModelResponse.AsObject;
  static serializeBinaryToWriter(message: PublishModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishModelResponse;
  static deserializeBinaryFromReader(message: PublishModelResponse, reader: jspb.BinaryReader): PublishModelResponse;
}

export namespace PublishModelResponse {
  export type AsObject = {
    modeltarhash: string,
  }
}

export class GetMisclassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetMisclassRequest;

  getName(): string;
  setName(value: string): GetMisclassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMisclassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMisclassRequest): GetMisclassRequest.AsObject;
  static serializeBinaryToWriter(message: GetMisclassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMisclassRequest;
  static deserializeBinaryFromReader(message: GetMisclassRequest, reader: jspb.BinaryReader): GetMisclassRequest;
}

export namespace GetMisclassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetMisclassResponse extends jspb.Message {
  getTable(): github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView | undefined;
  setTable(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView): GetMisclassResponse;
  hasTable(): boolean;
  clearTable(): GetMisclassResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMisclassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMisclassResponse): GetMisclassResponse.AsObject;
  static serializeBinaryToWriter(message: GetMisclassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMisclassResponse;
  static deserializeBinaryFromReader(message: GetMisclassResponse, reader: jspb.BinaryReader): GetMisclassResponse;
}

export namespace GetMisclassResponse {
  export type AsObject = {
    table?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.AsObject,
  }
}

export class DownloadModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadModelRequest;

  getName(): string;
  setName(value: string): DownloadModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadModelRequest): DownloadModelRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadModelRequest;
  static deserializeBinaryFromReader(message: DownloadModelRequest, reader: jspb.BinaryReader): DownloadModelRequest;
}

export namespace DownloadModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DownloadModelResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadModelResponse): DownloadModelResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadModelResponse;
  static deserializeBinaryFromReader(message: DownloadModelResponse, reader: jspb.BinaryReader): DownloadModelResponse;
}

export namespace DownloadModelResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class FlagModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): FlagModelRequest;

  getName(): string;
  setName(value: string): FlagModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlagModelRequest): FlagModelRequest.AsObject;
  static serializeBinaryToWriter(message: FlagModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagModelRequest;
  static deserializeBinaryFromReader(message: FlagModelRequest, reader: jspb.BinaryReader): FlagModelRequest;
}

export namespace FlagModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class FlagModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FlagModelResponse): FlagModelResponse.AsObject;
  static serializeBinaryToWriter(message: FlagModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagModelResponse;
  static deserializeBinaryFromReader(message: FlagModelResponse, reader: jspb.BinaryReader): FlagModelResponse;
}

export namespace FlagModelResponse {
  export type AsObject = {
  }
}

export class TestModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): TestModelRequest;

  getName(): string;
  setName(value: string): TestModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestModelRequest): TestModelRequest.AsObject;
  static serializeBinaryToWriter(message: TestModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestModelRequest;
  static deserializeBinaryFromReader(message: TestModelRequest, reader: jspb.BinaryReader): TestModelRequest;
}

export namespace TestModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class TestModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestModelResponse): TestModelResponse.AsObject;
  static serializeBinaryToWriter(message: TestModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestModelResponse;
  static deserializeBinaryFromReader(message: TestModelResponse, reader: jspb.BinaryReader): TestModelResponse;
}

export namespace TestModelResponse {
  export type AsObject = {
  }
}

