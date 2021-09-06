import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';


export class ListModelAutobuildersRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelAutobuildersRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModelAutobuildersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelAutobuildersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelAutobuildersRequest): ListModelAutobuildersRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelAutobuildersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelAutobuildersRequest;
  static deserializeBinaryFromReader(message: ListModelAutobuildersRequest, reader: jspb.BinaryReader): ListModelAutobuildersRequest;
}

export namespace ListModelAutobuildersRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListModelAutobuildersResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilderList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilderList): ListModelAutobuildersResponse;
  hasItems(): boolean;
  clearItems(): ListModelAutobuildersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelAutobuildersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelAutobuildersResponse): ListModelAutobuildersResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelAutobuildersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelAutobuildersResponse;
  static deserializeBinaryFromReader(message: ListModelAutobuildersResponse, reader: jspb.BinaryReader): ListModelAutobuildersResponse;
}

export namespace ListModelAutobuildersResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilderList.AsObject,
  }
}

export class CreateModelAutobuilderRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder): CreateModelAutobuilderRequest;
  hasItem(): boolean;
  clearItem(): CreateModelAutobuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelAutobuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelAutobuilderRequest): CreateModelAutobuilderRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelAutobuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelAutobuilderRequest;
  static deserializeBinaryFromReader(message: CreateModelAutobuilderRequest, reader: jspb.BinaryReader): CreateModelAutobuilderRequest;
}

export namespace CreateModelAutobuilderRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.AsObject,
  }
}

export class CreateModelAutobuilderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelAutobuilderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelAutobuilderResponse): CreateModelAutobuilderResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelAutobuilderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelAutobuilderResponse;
  static deserializeBinaryFromReader(message: CreateModelAutobuilderResponse, reader: jspb.BinaryReader): CreateModelAutobuilderResponse;
}

export namespace CreateModelAutobuilderResponse {
  export type AsObject = {
  }
}

export class UpdateModelAutobuilderRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder): UpdateModelAutobuilderRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelAutobuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelAutobuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelAutobuilderRequest): UpdateModelAutobuilderRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelAutobuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelAutobuilderRequest;
  static deserializeBinaryFromReader(message: UpdateModelAutobuilderRequest, reader: jspb.BinaryReader): UpdateModelAutobuilderRequest;
}

export namespace UpdateModelAutobuilderRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.AsObject,
  }
}

export class UpdateModelAutobuilderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelAutobuilderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelAutobuilderResponse): UpdateModelAutobuilderResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateModelAutobuilderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelAutobuilderResponse;
  static deserializeBinaryFromReader(message: UpdateModelAutobuilderResponse, reader: jspb.BinaryReader): UpdateModelAutobuilderResponse;
}

export namespace UpdateModelAutobuilderResponse {
  export type AsObject = {
  }
}

export class GetModelAutobuilderRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelAutobuilderRequest;

  getName(): string;
  setName(value: string): GetModelAutobuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelAutobuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelAutobuilderRequest): GetModelAutobuilderRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelAutobuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelAutobuilderRequest;
  static deserializeBinaryFromReader(message: GetModelAutobuilderRequest, reader: jspb.BinaryReader): GetModelAutobuilderRequest;
}

export namespace GetModelAutobuilderRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModelAutobuilderResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder): GetModelAutobuilderResponse;
  hasItem(): boolean;
  clearItem(): GetModelAutobuilderResponse;

  getYaml(): string;
  setYaml(value: string): GetModelAutobuilderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelAutobuilderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelAutobuilderResponse): GetModelAutobuilderResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelAutobuilderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelAutobuilderResponse;
  static deserializeBinaryFromReader(message: GetModelAutobuilderResponse, reader: jspb.BinaryReader): GetModelAutobuilderResponse;
}

export namespace GetModelAutobuilderResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.AsObject,
    yaml: string,
  }
}

export class DeleteModelAutobuilderRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelAutobuilderRequest;

  getName(): string;
  setName(value: string): DeleteModelAutobuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelAutobuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelAutobuilderRequest): DeleteModelAutobuilderRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelAutobuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelAutobuilderRequest;
  static deserializeBinaryFromReader(message: DeleteModelAutobuilderRequest, reader: jspb.BinaryReader): DeleteModelAutobuilderRequest;
}

export namespace DeleteModelAutobuilderRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteModelAutobuilderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelAutobuilderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelAutobuilderResponse): DeleteModelAutobuilderResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModelAutobuilderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelAutobuilderResponse;
  static deserializeBinaryFromReader(message: DeleteModelAutobuilderResponse, reader: jspb.BinaryReader): DeleteModelAutobuilderResponse;
}

export namespace DeleteModelAutobuilderResponse {
  export type AsObject = {
  }
}

