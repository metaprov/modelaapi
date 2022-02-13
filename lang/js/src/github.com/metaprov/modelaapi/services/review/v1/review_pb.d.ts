import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';


export class GetReviewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetReviewRequest;

  getName(): string;
  setName(value: string): GetReviewRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): GetReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReviewRequest): GetReviewRequest.AsObject;
  static serializeBinaryToWriter(message: GetReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReviewRequest;
  static deserializeBinaryFromReader(message: GetReviewRequest, reader: jspb.BinaryReader): GetReviewRequest;
}

export namespace GetReviewRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class GetReviewResponse extends jspb.Message {
  getReview(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review | undefined;
  setReview(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review): GetReviewResponse;
  hasReview(): boolean;
  clearReview(): GetReviewResponse;

  getYaml(): string;
  setYaml(value: string): GetReviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReviewResponse): GetReviewResponse.AsObject;
  static serializeBinaryToWriter(message: GetReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReviewResponse;
  static deserializeBinaryFromReader(message: GetReviewResponse, reader: jspb.BinaryReader): GetReviewResponse;
}

export namespace GetReviewResponse {
  export type AsObject = {
    review?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.AsObject,
    yaml: string,
  }
}

export class CreateReviewRequest extends jspb.Message {
  getReview(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review | undefined;
  setReview(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review): CreateReviewRequest;
  hasReview(): boolean;
  clearReview(): CreateReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReviewRequest): CreateReviewRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReviewRequest;
  static deserializeBinaryFromReader(message: CreateReviewRequest, reader: jspb.BinaryReader): CreateReviewRequest;
}

export namespace CreateReviewRequest {
  export type AsObject = {
    review?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.AsObject,
  }
}

export class CreateReviewResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReviewResponse): CreateReviewResponse.AsObject;
  static serializeBinaryToWriter(message: CreateReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReviewResponse;
  static deserializeBinaryFromReader(message: CreateReviewResponse, reader: jspb.BinaryReader): CreateReviewResponse;
}

export namespace CreateReviewResponse {
  export type AsObject = {
  }
}

export class UpdateReviewRequest extends jspb.Message {
  getReview(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review | undefined;
  setReview(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review): UpdateReviewRequest;
  hasReview(): boolean;
  clearReview(): UpdateReviewRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateReviewRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReviewRequest): UpdateReviewRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReviewRequest;
  static deserializeBinaryFromReader(message: UpdateReviewRequest, reader: jspb.BinaryReader): UpdateReviewRequest;
}

export namespace UpdateReviewRequest {
  export type AsObject = {
    review?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateReviewResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReviewResponse): UpdateReviewResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReviewResponse;
  static deserializeBinaryFromReader(message: UpdateReviewResponse, reader: jspb.BinaryReader): UpdateReviewResponse;
}

export namespace UpdateReviewResponse {
  export type AsObject = {
  }
}

export class DeleteReviewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteReviewRequest;

  getName(): string;
  setName(value: string): DeleteReviewRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): DeleteReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReviewRequest): DeleteReviewRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReviewRequest;
  static deserializeBinaryFromReader(message: DeleteReviewRequest, reader: jspb.BinaryReader): DeleteReviewRequest;
}

export namespace DeleteReviewRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class DeleteReviewResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReviewResponse): DeleteReviewResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReviewResponse;
  static deserializeBinaryFromReader(message: DeleteReviewResponse, reader: jspb.BinaryReader): DeleteReviewResponse;
}

export namespace DeleteReviewResponse {
  export type AsObject = {
  }
}

export class ListReviewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListReviewRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListReviewRequest;

  getPageSize(): number;
  setPageSize(value: number): ListReviewRequest;

  getPageToken(): string;
  setPageToken(value: string): ListReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReviewRequest): ListReviewRequest.AsObject;
  static serializeBinaryToWriter(message: ListReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReviewRequest;
  static deserializeBinaryFromReader(message: ListReviewRequest, reader: jspb.BinaryReader): ListReviewRequest;
}

export namespace ListReviewRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
  }
}

export class ListReviewResponse extends jspb.Message {
  getReviewes(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.ReviewList | undefined;
  setReviewes(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.ReviewList): ListReviewResponse;
  hasReviewes(): boolean;
  clearReviewes(): ListReviewResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListReviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReviewResponse): ListReviewResponse.AsObject;
  static serializeBinaryToWriter(message: ListReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReviewResponse;
  static deserializeBinaryFromReader(message: ListReviewResponse, reader: jspb.BinaryReader): ListReviewResponse;
}

export namespace ListReviewResponse {
  export type AsObject = {
    reviewes?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.ReviewList.AsObject,
    nextPageToken: string,
  }
}

