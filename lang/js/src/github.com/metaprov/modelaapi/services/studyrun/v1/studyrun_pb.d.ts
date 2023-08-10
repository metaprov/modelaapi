import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListStudyRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListStudyRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListStudyRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudyRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudyRunRequest): ListStudyRunRequest.AsObject;
  static serializeBinaryToWriter(message: ListStudyRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudyRunRequest;
  static deserializeBinaryFromReader(message: ListStudyRunRequest, reader: jspb.BinaryReader): ListStudyRunRequest;
}

export namespace ListStudyRunRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListStudyRunResponse extends jspb.Message {
  getStudyruns(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRunList | undefined;
  setStudyruns(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRunList): ListStudyRunResponse;
  hasStudyruns(): boolean;
  clearStudyruns(): ListStudyRunResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListStudyRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudyRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudyRunResponse): ListStudyRunResponse.AsObject;
  static serializeBinaryToWriter(message: ListStudyRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudyRunResponse;
  static deserializeBinaryFromReader(message: ListStudyRunResponse, reader: jspb.BinaryReader): ListStudyRunResponse;
}

export namespace ListStudyRunResponse {
  export type AsObject = {
    studyruns?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRunList.AsObject,
    nextPageToken: string,
  }
}

export class GetStudyRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetStudyRunRequest;

  getName(): string;
  setName(value: string): GetStudyRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyRunRequest): GetStudyRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetStudyRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyRunRequest;
  static deserializeBinaryFromReader(message: GetStudyRunRequest, reader: jspb.BinaryReader): GetStudyRunRequest;
}

export namespace GetStudyRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetStudyRunResponse extends jspb.Message {
  getStudyrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
  setStudyrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): GetStudyRunResponse;
  hasStudyrun(): boolean;
  clearStudyrun(): GetStudyRunResponse;

  getYaml(): string;
  setYaml(value: string): GetStudyRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyRunResponse): GetStudyRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetStudyRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyRunResponse;
  static deserializeBinaryFromReader(message: GetStudyRunResponse, reader: jspb.BinaryReader): GetStudyRunResponse;
}

export namespace GetStudyRunResponse {
  export type AsObject = {
    studyrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
    yaml: string,
  }
}

export class DeleteStudyRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteStudyRunRequest;

  getName(): string;
  setName(value: string): DeleteStudyRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStudyRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStudyRunRequest): DeleteStudyRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteStudyRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStudyRunRequest;
  static deserializeBinaryFromReader(message: DeleteStudyRunRequest, reader: jspb.BinaryReader): DeleteStudyRunRequest;
}

export namespace DeleteStudyRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteStudyRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStudyRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStudyRunResponse): DeleteStudyRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteStudyRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStudyRunResponse;
  static deserializeBinaryFromReader(message: DeleteStudyRunResponse, reader: jspb.BinaryReader): DeleteStudyRunResponse;
}

export namespace DeleteStudyRunResponse {
  export type AsObject = {
  }
}

export class CreateStudyRunRequest extends jspb.Message {
  getStudyrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
  setStudyrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): CreateStudyRunRequest;
  hasStudyrun(): boolean;
  clearStudyrun(): CreateStudyRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStudyRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStudyRunRequest): CreateStudyRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateStudyRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStudyRunRequest;
  static deserializeBinaryFromReader(message: CreateStudyRunRequest, reader: jspb.BinaryReader): CreateStudyRunRequest;
}

export namespace CreateStudyRunRequest {
  export type AsObject = {
    studyrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
  }
}

export class CreateStudyRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStudyRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStudyRunResponse): CreateStudyRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateStudyRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStudyRunResponse;
  static deserializeBinaryFromReader(message: CreateStudyRunResponse, reader: jspb.BinaryReader): CreateStudyRunResponse;
}

export namespace CreateStudyRunResponse {
  export type AsObject = {
  }
}

export class UpdateStudyRunRequest extends jspb.Message {
  getStudyrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
  setStudyrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): UpdateStudyRunRequest;
  hasStudyrun(): boolean;
  clearStudyrun(): UpdateStudyRunRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateStudyRunRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateStudyRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStudyRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStudyRunRequest): UpdateStudyRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateStudyRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStudyRunRequest;
  static deserializeBinaryFromReader(message: UpdateStudyRunRequest, reader: jspb.BinaryReader): UpdateStudyRunRequest;
}

export namespace UpdateStudyRunRequest {
  export type AsObject = {
    studyrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateStudyRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStudyRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStudyRunResponse): UpdateStudyRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateStudyRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStudyRunResponse;
  static deserializeBinaryFromReader(message: UpdateStudyRunResponse, reader: jspb.BinaryReader): UpdateStudyRunResponse;
}

export namespace UpdateStudyRunResponse {
  export type AsObject = {
  }
}

export class GetStudyRunProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetStudyRunProfileRequest;

  getName(): string;
  setName(value: string): GetStudyRunProfileRequest;

  getModels(): number;
  setModels(value: number): GetStudyRunProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyRunProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyRunProfileRequest): GetStudyRunProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetStudyRunProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyRunProfileRequest;
  static deserializeBinaryFromReader(message: GetStudyRunProfileRequest, reader: jspb.BinaryReader): GetStudyRunProfileRequest;
}

export namespace GetStudyRunProfileRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    models: number,
  }
}

export class GetStudyRunProfileResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.StudyProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.StudyProfile): GetStudyRunProfileResponse;
  hasProfile(): boolean;
  clearProfile(): GetStudyRunProfileResponse;

  getModelsprofileList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile>;
  setModelsprofileList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile>): GetStudyRunProfileResponse;
  clearModelsprofileList(): GetStudyRunProfileResponse;
  addModelsprofile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyRunProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyRunProfileResponse): GetStudyRunProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetStudyRunProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyRunProfileResponse;
  static deserializeBinaryFromReader(message: GetStudyRunProfileResponse, reader: jspb.BinaryReader): GetStudyRunProfileResponse;
}

export namespace GetStudyRunProfileResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.StudyProfile.AsObject,
    modelsprofileList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile.AsObject>,
  }
}

export class AbortStudyRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AbortStudyRunRequest;

  getName(): string;
  setName(value: string): AbortStudyRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortStudyRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AbortStudyRunRequest): AbortStudyRunRequest.AsObject;
  static serializeBinaryToWriter(message: AbortStudyRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortStudyRunRequest;
  static deserializeBinaryFromReader(message: AbortStudyRunRequest, reader: jspb.BinaryReader): AbortStudyRunRequest;
}

export namespace AbortStudyRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class AbortStudyRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortStudyRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AbortStudyRunResponse): AbortStudyRunResponse.AsObject;
  static serializeBinaryToWriter(message: AbortStudyRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortStudyRunResponse;
  static deserializeBinaryFromReader(message: AbortStudyRunResponse, reader: jspb.BinaryReader): AbortStudyRunResponse;
}

export namespace AbortStudyRunResponse {
  export type AsObject = {
  }
}

export class PauseStudyRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseStudyRunRequest;

  getName(): string;
  setName(value: string): PauseStudyRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseStudyRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseStudyRunRequest): PauseStudyRunRequest.AsObject;
  static serializeBinaryToWriter(message: PauseStudyRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseStudyRunRequest;
  static deserializeBinaryFromReader(message: PauseStudyRunRequest, reader: jspb.BinaryReader): PauseStudyRunRequest;
}

export namespace PauseStudyRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PauseStudyRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseStudyRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseStudyRunResponse): PauseStudyRunResponse.AsObject;
  static serializeBinaryToWriter(message: PauseStudyRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseStudyRunResponse;
  static deserializeBinaryFromReader(message: PauseStudyRunResponse, reader: jspb.BinaryReader): PauseStudyRunResponse;
}

export namespace PauseStudyRunResponse {
  export type AsObject = {
  }
}

export class ResumeStudyRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeStudyRunRequest;

  getName(): string;
  setName(value: string): ResumeStudyRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeStudyRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeStudyRunRequest): ResumeStudyRunRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeStudyRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeStudyRunRequest;
  static deserializeBinaryFromReader(message: ResumeStudyRunRequest, reader: jspb.BinaryReader): ResumeStudyRunRequest;
}

export namespace ResumeStudyRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeStudyRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeStudyRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeStudyRunResponse): ResumeStudyRunResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeStudyRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeStudyRunResponse;
  static deserializeBinaryFromReader(message: ResumeStudyRunResponse, reader: jspb.BinaryReader): ResumeStudyRunResponse;
}

export namespace ResumeStudyRunResponse {
  export type AsObject = {
  }
}

export class CompleteStudyRunSearchRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompleteStudyRunSearchRequest;

  getName(): string;
  setName(value: string): CompleteStudyRunSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteStudyRunSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteStudyRunSearchRequest): CompleteStudyRunSearchRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteStudyRunSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteStudyRunSearchRequest;
  static deserializeBinaryFromReader(message: CompleteStudyRunSearchRequest, reader: jspb.BinaryReader): CompleteStudyRunSearchRequest;
}

export namespace CompleteStudyRunSearchRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CompleteStudyRunSearchResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteStudyRunSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteStudyRunSearchResponse): CompleteStudyRunSearchResponse.AsObject;
  static serializeBinaryToWriter(message: CompleteStudyRunSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteStudyRunSearchResponse;
  static deserializeBinaryFromReader(message: CompleteStudyRunSearchResponse, reader: jspb.BinaryReader): CompleteStudyRunSearchResponse;
}

export namespace CompleteStudyRunSearchResponse {
  export type AsObject = {
  }
}

