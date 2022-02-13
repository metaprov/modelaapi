import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListMeetingsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListMeetingsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListMeetingsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListMeetingsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListMeetingsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListMeetingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMeetingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMeetingsRequest): ListMeetingsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMeetingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMeetingsRequest;
  static deserializeBinaryFromReader(message: ListMeetingsRequest, reader: jspb.BinaryReader): ListMeetingsRequest;
}

export namespace ListMeetingsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListMeetingsResponse extends jspb.Message {
  getMeetings(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.MeetingList | undefined;
  setMeetings(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.MeetingList): ListMeetingsResponse;
  hasMeetings(): boolean;
  clearMeetings(): ListMeetingsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListMeetingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMeetingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMeetingsResponse): ListMeetingsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMeetingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMeetingsResponse;
  static deserializeBinaryFromReader(message: ListMeetingsResponse, reader: jspb.BinaryReader): ListMeetingsResponse;
}

export namespace ListMeetingsResponse {
  export type AsObject = {
    meetings?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.MeetingList.AsObject,
    nextPageToken: string,
  }
}

export class MeetingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeetingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MeetingResponse): MeetingResponse.AsObject;
  static serializeBinaryToWriter(message: MeetingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeetingResponse;
  static deserializeBinaryFromReader(message: MeetingResponse, reader: jspb.BinaryReader): MeetingResponse;
}

export namespace MeetingResponse {
  export type AsObject = {
  }
}

export class CreateMeetingRequest extends jspb.Message {
  getMeeting(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting | undefined;
  setMeeting(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting): CreateMeetingRequest;
  hasMeeting(): boolean;
  clearMeeting(): CreateMeetingRequest;

  getPassword(): string;
  setPassword(value: string): CreateMeetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMeetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMeetingRequest): CreateMeetingRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMeetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMeetingRequest;
  static deserializeBinaryFromReader(message: CreateMeetingRequest, reader: jspb.BinaryReader): CreateMeetingRequest;
}

export namespace CreateMeetingRequest {
  export type AsObject = {
    meeting?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting.AsObject,
    password: string,
  }
}

export class CreateMeetingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMeetingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMeetingResponse): CreateMeetingResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMeetingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMeetingResponse;
  static deserializeBinaryFromReader(message: CreateMeetingResponse, reader: jspb.BinaryReader): CreateMeetingResponse;
}

export namespace CreateMeetingResponse {
  export type AsObject = {
  }
}

export class UpdateMeetingRequest extends jspb.Message {
  getMeeting(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting | undefined;
  setMeeting(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting): UpdateMeetingRequest;
  hasMeeting(): boolean;
  clearMeeting(): UpdateMeetingRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateMeetingRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateMeetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMeetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMeetingRequest): UpdateMeetingRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMeetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMeetingRequest;
  static deserializeBinaryFromReader(message: UpdateMeetingRequest, reader: jspb.BinaryReader): UpdateMeetingRequest;
}

export namespace UpdateMeetingRequest {
  export type AsObject = {
    meeting?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateMeetingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMeetingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMeetingResponse): UpdateMeetingResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMeetingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMeetingResponse;
  static deserializeBinaryFromReader(message: UpdateMeetingResponse, reader: jspb.BinaryReader): UpdateMeetingResponse;
}

export namespace UpdateMeetingResponse {
  export type AsObject = {
  }
}

export class GetMeetingRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetMeetingRequest;

  getName(): string;
  setName(value: string): GetMeetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeetingRequest): GetMeetingRequest.AsObject;
  static serializeBinaryToWriter(message: GetMeetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeetingRequest;
  static deserializeBinaryFromReader(message: GetMeetingRequest, reader: jspb.BinaryReader): GetMeetingRequest;
}

export namespace GetMeetingRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetMeetingResponse extends jspb.Message {
  getMeeting(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting | undefined;
  setMeeting(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting): GetMeetingResponse;
  hasMeeting(): boolean;
  clearMeeting(): GetMeetingResponse;

  getYaml(): string;
  setYaml(value: string): GetMeetingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeetingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeetingResponse): GetMeetingResponse.AsObject;
  static serializeBinaryToWriter(message: GetMeetingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeetingResponse;
  static deserializeBinaryFromReader(message: GetMeetingResponse, reader: jspb.BinaryReader): GetMeetingResponse;
}

export namespace GetMeetingResponse {
  export type AsObject = {
    meeting?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting.AsObject,
    yaml: string,
  }
}

export class DeleteMeetingRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteMeetingRequest;

  getName(): string;
  setName(value: string): DeleteMeetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMeetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMeetingRequest): DeleteMeetingRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMeetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMeetingRequest;
  static deserializeBinaryFromReader(message: DeleteMeetingRequest, reader: jspb.BinaryReader): DeleteMeetingRequest;
}

export namespace DeleteMeetingRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteMeetingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMeetingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMeetingResponse): DeleteMeetingResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteMeetingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMeetingResponse;
  static deserializeBinaryFromReader(message: DeleteMeetingResponse, reader: jspb.BinaryReader): DeleteMeetingResponse;
}

export namespace DeleteMeetingResponse {
  export type AsObject = {
  }
}

