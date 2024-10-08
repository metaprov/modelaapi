import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListStudyRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudyRequest): ListStudyRequest.AsObject;
  static serializeBinaryToWriter(message: ListStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudyRequest;
  static deserializeBinaryFromReader(message: ListStudyRequest, reader: jspb.BinaryReader): ListStudyRequest;
}

export namespace ListStudyRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListStudyResponse extends jspb.Message {
  getStudies(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyList | undefined;
  setStudies(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyList): ListStudyResponse;
  hasStudies(): boolean;
  clearStudies(): ListStudyResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListStudyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudyResponse): ListStudyResponse.AsObject;
  static serializeBinaryToWriter(message: ListStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudyResponse;
  static deserializeBinaryFromReader(message: ListStudyResponse, reader: jspb.BinaryReader): ListStudyResponse;
}

export namespace ListStudyResponse {
  export type AsObject = {
    studies?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyList.AsObject,
    nextPageToken: string,
  }
}

export class GetStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetStudyRequest;

  getName(): string;
  setName(value: string): GetStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyRequest): GetStudyRequest.AsObject;
  static serializeBinaryToWriter(message: GetStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyRequest;
  static deserializeBinaryFromReader(message: GetStudyRequest, reader: jspb.BinaryReader): GetStudyRequest;
}

export namespace GetStudyRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetStudyResponse extends jspb.Message {
  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): GetStudyResponse;
  hasStudy(): boolean;
  clearStudy(): GetStudyResponse;

  getYaml(): string;
  setYaml(value: string): GetStudyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyResponse): GetStudyResponse.AsObject;
  static serializeBinaryToWriter(message: GetStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyResponse;
  static deserializeBinaryFromReader(message: GetStudyResponse, reader: jspb.BinaryReader): GetStudyResponse;
}

export namespace GetStudyResponse {
  export type AsObject = {
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    yaml: string,
  }
}

export class GetStudyRunReferenceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetStudyRunReferenceRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference): GetStudyRunReferenceRequest;
  hasRun(): boolean;
  clearRun(): GetStudyRunReferenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyRunReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyRunReferenceRequest): GetStudyRunReferenceRequest.AsObject;
  static serializeBinaryToWriter(message: GetStudyRunReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyRunReferenceRequest;
  static deserializeBinaryFromReader(message: GetStudyRunReferenceRequest, reader: jspb.BinaryReader): GetStudyRunReferenceRequest;
}

export namespace GetStudyRunReferenceRequest {
  export type AsObject = {
    namespace: string,
    run?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference.AsObject,
  }
}

export class GetStudyRunReferenceResponse extends jspb.Message {
  getRun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): GetStudyRunReferenceResponse;
  hasRun(): boolean;
  clearRun(): GetStudyRunReferenceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyRunReferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyRunReferenceResponse): GetStudyRunReferenceResponse.AsObject;
  static serializeBinaryToWriter(message: GetStudyRunReferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyRunReferenceResponse;
  static deserializeBinaryFromReader(message: GetStudyRunReferenceResponse, reader: jspb.BinaryReader): GetStudyRunReferenceResponse;
}

export namespace GetStudyRunReferenceResponse {
  export type AsObject = {
    run?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
  }
}

export class DeleteStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteStudyRequest;

  getName(): string;
  setName(value: string): DeleteStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStudyRequest): DeleteStudyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStudyRequest;
  static deserializeBinaryFromReader(message: DeleteStudyRequest, reader: jspb.BinaryReader): DeleteStudyRequest;
}

export namespace DeleteStudyRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteStudyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStudyResponse): DeleteStudyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStudyResponse;
  static deserializeBinaryFromReader(message: DeleteStudyResponse, reader: jspb.BinaryReader): DeleteStudyResponse;
}

export namespace DeleteStudyResponse {
  export type AsObject = {
  }
}

export class CreateStudyRequest extends jspb.Message {
  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): CreateStudyRequest;
  hasStudy(): boolean;
  clearStudy(): CreateStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStudyRequest): CreateStudyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStudyRequest;
  static deserializeBinaryFromReader(message: CreateStudyRequest, reader: jspb.BinaryReader): CreateStudyRequest;
}

export namespace CreateStudyRequest {
  export type AsObject = {
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
  }
}

export class CreateStudyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStudyResponse): CreateStudyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStudyResponse;
  static deserializeBinaryFromReader(message: CreateStudyResponse, reader: jspb.BinaryReader): CreateStudyResponse;
}

export namespace CreateStudyResponse {
  export type AsObject = {
  }
}

export class UpdateStudyRequest extends jspb.Message {
  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): UpdateStudyRequest;
  hasStudy(): boolean;
  clearStudy(): UpdateStudyRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateStudyRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStudyRequest): UpdateStudyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStudyRequest;
  static deserializeBinaryFromReader(message: UpdateStudyRequest, reader: jspb.BinaryReader): UpdateStudyRequest;
}

export namespace UpdateStudyRequest {
  export type AsObject = {
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateStudyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStudyResponse): UpdateStudyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStudyResponse;
  static deserializeBinaryFromReader(message: UpdateStudyResponse, reader: jspb.BinaryReader): UpdateStudyResponse;
}

export namespace UpdateStudyResponse {
  export type AsObject = {
  }
}

export class GetStudyProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetStudyProfileRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference): GetStudyProfileRequest;
  hasRun(): boolean;
  clearRun(): GetStudyProfileRequest;

  getModels(): number;
  setModels(value: number): GetStudyProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyProfileRequest): GetStudyProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetStudyProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyProfileRequest;
  static deserializeBinaryFromReader(message: GetStudyProfileRequest, reader: jspb.BinaryReader): GetStudyProfileRequest;
}

export namespace GetStudyProfileRequest {
  export type AsObject = {
    namespace: string,
    run?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference.AsObject,
    models: number,
  }
}

export class GetStudyProfileResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.StudyProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.StudyProfile): GetStudyProfileResponse;
  hasProfile(): boolean;
  clearProfile(): GetStudyProfileResponse;

  getModelsprofileList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile>;
  setModelsprofileList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile>): GetStudyProfileResponse;
  clearModelsprofileList(): GetStudyProfileResponse;
  addModelsprofile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyProfileResponse): GetStudyProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetStudyProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyProfileResponse;
  static deserializeBinaryFromReader(message: GetStudyProfileResponse, reader: jspb.BinaryReader): GetStudyProfileResponse;
}

export namespace GetStudyProfileResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.StudyProfile.AsObject,
    modelsprofileList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.ModelProfile.AsObject>,
  }
}

export class AbortStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AbortStudyRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference): AbortStudyRequest;
  hasRun(): boolean;
  clearRun(): AbortStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AbortStudyRequest): AbortStudyRequest.AsObject;
  static serializeBinaryToWriter(message: AbortStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortStudyRequest;
  static deserializeBinaryFromReader(message: AbortStudyRequest, reader: jspb.BinaryReader): AbortStudyRequest;
}

export namespace AbortStudyRequest {
  export type AsObject = {
    namespace: string,
    run?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference.AsObject,
  }
}

export class AbortStudyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AbortStudyResponse): AbortStudyResponse.AsObject;
  static serializeBinaryToWriter(message: AbortStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortStudyResponse;
  static deserializeBinaryFromReader(message: AbortStudyResponse, reader: jspb.BinaryReader): AbortStudyResponse;
}

export namespace AbortStudyResponse {
  export type AsObject = {
  }
}

export class PauseStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseStudyRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference): PauseStudyRequest;
  hasRun(): boolean;
  clearRun(): PauseStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseStudyRequest): PauseStudyRequest.AsObject;
  static serializeBinaryToWriter(message: PauseStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseStudyRequest;
  static deserializeBinaryFromReader(message: PauseStudyRequest, reader: jspb.BinaryReader): PauseStudyRequest;
}

export namespace PauseStudyRequest {
  export type AsObject = {
    namespace: string,
    run?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference.AsObject,
  }
}

export class PauseStudyResponse extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): PauseStudyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseStudyResponse): PauseStudyResponse.AsObject;
  static serializeBinaryToWriter(message: PauseStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseStudyResponse;
  static deserializeBinaryFromReader(message: PauseStudyResponse, reader: jspb.BinaryReader): PauseStudyResponse;
}

export namespace PauseStudyResponse {
  export type AsObject = {
    version: number,
  }
}

export class ResumeStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeStudyRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference): ResumeStudyRequest;
  hasRun(): boolean;
  clearRun(): ResumeStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeStudyRequest): ResumeStudyRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeStudyRequest;
  static deserializeBinaryFromReader(message: ResumeStudyRequest, reader: jspb.BinaryReader): ResumeStudyRequest;
}

export namespace ResumeStudyRequest {
  export type AsObject = {
    namespace: string,
    run?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference.AsObject,
  }
}

export class ResumeStudyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeStudyResponse): ResumeStudyResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeStudyResponse;
  static deserializeBinaryFromReader(message: ResumeStudyResponse, reader: jspb.BinaryReader): ResumeStudyResponse;
}

export namespace ResumeStudyResponse {
  export type AsObject = {
  }
}

export class CompleteStudySearchRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompleteStudySearchRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference): CompleteStudySearchRequest;
  hasRun(): boolean;
  clearRun(): CompleteStudySearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteStudySearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteStudySearchRequest): CompleteStudySearchRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteStudySearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteStudySearchRequest;
  static deserializeBinaryFromReader(message: CompleteStudySearchRequest, reader: jspb.BinaryReader): CompleteStudySearchRequest;
}

export namespace CompleteStudySearchRequest {
  export type AsObject = {
    namespace: string,
    run?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference.AsObject,
  }
}

export class CompleteStudySearchResponse extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): CompleteStudySearchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteStudySearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteStudySearchResponse): CompleteStudySearchResponse.AsObject;
  static serializeBinaryToWriter(message: CompleteStudySearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteStudySearchResponse;
  static deserializeBinaryFromReader(message: CompleteStudySearchResponse, reader: jspb.BinaryReader): CompleteStudySearchResponse;
}

export namespace CompleteStudySearchResponse {
  export type AsObject = {
    version: number,
  }
}

