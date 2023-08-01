import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListConnectionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListConnectionsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListConnectionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListConnectionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListConnectionsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListConnectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsRequest): ListConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsRequest;
  static deserializeBinaryFromReader(message: ListConnectionsRequest, reader: jspb.BinaryReader): ListConnectionsRequest;
}

export namespace ListConnectionsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListConnectionsResponse extends jspb.Message {
  getConnections(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionList | undefined;
  setConnections(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionList): ListConnectionsResponse;
  hasConnections(): boolean;
  clearConnections(): ListConnectionsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListConnectionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsResponse): ListConnectionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsResponse;
  static deserializeBinaryFromReader(message: ListConnectionsResponse, reader: jspb.BinaryReader): ListConnectionsResponse;
}

export namespace ListConnectionsResponse {
  export type AsObject = {
    connections?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionList.AsObject,
    nextPageToken: string,
  }
}

export class CreateConnectionRequest extends jspb.Message {
  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateConnectionRequest;
  hasConnection(): boolean;
  clearConnection(): CreateConnectionRequest;

  getSecretMap(): jspb.Map<string, string>;
  clearSecretMap(): CreateConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionRequest): CreateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionRequest;
  static deserializeBinaryFromReader(message: CreateConnectionRequest, reader: jspb.BinaryReader): CreateConnectionRequest;
}

export namespace CreateConnectionRequest {
  export type AsObject = {
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, string]>,
  }
}

export class CreateConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionResponse): CreateConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionResponse;
  static deserializeBinaryFromReader(message: CreateConnectionResponse, reader: jspb.BinaryReader): CreateConnectionResponse;
}

export namespace CreateConnectionResponse {
  export type AsObject = {
  }
}

export class UpdateConnectionRequest extends jspb.Message {
  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): UpdateConnectionRequest;
  hasConnection(): boolean;
  clearConnection(): UpdateConnectionRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateConnectionRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionRequest): UpdateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionRequest;
  static deserializeBinaryFromReader(message: UpdateConnectionRequest, reader: jspb.BinaryReader): UpdateConnectionRequest;
}

export namespace UpdateConnectionRequest {
  export type AsObject = {
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionResponse): UpdateConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionResponse;
  static deserializeBinaryFromReader(message: UpdateConnectionResponse, reader: jspb.BinaryReader): UpdateConnectionResponse;
}

export namespace UpdateConnectionResponse {
  export type AsObject = {
  }
}

export class GetConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetConnectionRequest;

  getName(): string;
  setName(value: string): GetConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionRequest): GetConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: GetConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionRequest;
  static deserializeBinaryFromReader(message: GetConnectionRequest, reader: jspb.BinaryReader): GetConnectionRequest;
}

export namespace GetConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetConnectionResponse extends jspb.Message {
  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): GetConnectionResponse;
  hasConnection(): boolean;
  clearConnection(): GetConnectionResponse;

  getSecretMap(): jspb.Map<string, string>;
  clearSecretMap(): GetConnectionResponse;

  getIsadmin(): boolean;
  setIsadmin(value: boolean): GetConnectionResponse;

  getYaml(): string;
  setYaml(value: string): GetConnectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionResponse): GetConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: GetConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionResponse;
  static deserializeBinaryFromReader(message: GetConnectionResponse, reader: jspb.BinaryReader): GetConnectionResponse;
}

export namespace GetConnectionResponse {
  export type AsObject = {
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, string]>,
    isadmin: boolean,
    yaml: string,
  }
}

export class DeleteConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteConnectionRequest;

  getName(): string;
  setName(value: string): DeleteConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionRequest): DeleteConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionRequest;
  static deserializeBinaryFromReader(message: DeleteConnectionRequest, reader: jspb.BinaryReader): DeleteConnectionRequest;
}

export namespace DeleteConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionResponse): DeleteConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionResponse;
  static deserializeBinaryFromReader(message: DeleteConnectionResponse, reader: jspb.BinaryReader): DeleteConnectionResponse;
}

export namespace DeleteConnectionResponse {
  export type AsObject = {
  }
}

export class TestConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): TestConnectionRequest;

  getName(): string;
  setName(value: string): TestConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestConnectionRequest): TestConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: TestConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestConnectionRequest;
  static deserializeBinaryFromReader(message: TestConnectionRequest, reader: jspb.BinaryReader): TestConnectionRequest;
}

export namespace TestConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class TestConnectionResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): TestConnectionResponse;

  getMsg(): string;
  setMsg(value: string): TestConnectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestConnectionResponse): TestConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: TestConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestConnectionResponse;
  static deserializeBinaryFromReader(message: TestConnectionResponse, reader: jspb.BinaryReader): TestConnectionResponse;
}

export namespace TestConnectionResponse {
  export type AsObject = {
    status: boolean,
    msg: string,
  }
}

export class GetDatabasesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatabasesRequest;

  getName(): string;
  setName(value: string): GetDatabasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabasesRequest): GetDatabasesRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatabasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabasesRequest;
  static deserializeBinaryFromReader(message: GetDatabasesRequest, reader: jspb.BinaryReader): GetDatabasesRequest;
}

export namespace GetDatabasesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetDatabasesResponse extends jspb.Message {
  getDatabasesList(): Array<string>;
  setDatabasesList(value: Array<string>): GetDatabasesResponse;
  clearDatabasesList(): GetDatabasesResponse;
  addDatabases(value: string, index?: number): GetDatabasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabasesResponse): GetDatabasesResponse.AsObject;
  static serializeBinaryToWriter(message: GetDatabasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabasesResponse;
  static deserializeBinaryFromReader(message: GetDatabasesResponse, reader: jspb.BinaryReader): GetDatabasesResponse;
}

export namespace GetDatabasesResponse {
  export type AsObject = {
    databasesList: Array<string>,
  }
}

export class GetTablesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetTablesRequest;

  getName(): string;
  setName(value: string): GetTablesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTablesRequest): GetTablesRequest.AsObject;
  static serializeBinaryToWriter(message: GetTablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTablesRequest;
  static deserializeBinaryFromReader(message: GetTablesRequest, reader: jspb.BinaryReader): GetTablesRequest;
}

export namespace GetTablesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetTablesResponse extends jspb.Message {
  getTablesList(): Array<string>;
  setTablesList(value: Array<string>): GetTablesResponse;
  clearTablesList(): GetTablesResponse;
  addTables(value: string, index?: number): GetTablesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTablesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTablesResponse): GetTablesResponse.AsObject;
  static serializeBinaryToWriter(message: GetTablesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTablesResponse;
  static deserializeBinaryFromReader(message: GetTablesResponse, reader: jspb.BinaryReader): GetTablesResponse;
}

export namespace GetTablesResponse {
  export type AsObject = {
    tablesList: Array<string>,
  }
}

export class ExecuteSqlRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ExecuteSqlRequest;

  getName(): string;
  setName(value: string): ExecuteSqlRequest;

  getSql(): string;
  setSql(value: string): ExecuteSqlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSqlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSqlRequest): ExecuteSqlRequest.AsObject;
  static serializeBinaryToWriter(message: ExecuteSqlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSqlRequest;
  static deserializeBinaryFromReader(message: ExecuteSqlRequest, reader: jspb.BinaryReader): ExecuteSqlRequest;
}

export namespace ExecuteSqlRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    sql: string,
  }
}

export class ExecuteSqlResponse extends jspb.Message {
  getTableview(): github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView | undefined;
  setTableview(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView): ExecuteSqlResponse;
  hasTableview(): boolean;
  clearTableview(): ExecuteSqlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSqlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSqlResponse): ExecuteSqlResponse.AsObject;
  static serializeBinaryToWriter(message: ExecuteSqlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSqlResponse;
  static deserializeBinaryFromReader(message: ExecuteSqlResponse, reader: jspb.BinaryReader): ExecuteSqlResponse;
}

export namespace ExecuteSqlResponse {
  export type AsObject = {
    tableview?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.AsObject,
  }
}

