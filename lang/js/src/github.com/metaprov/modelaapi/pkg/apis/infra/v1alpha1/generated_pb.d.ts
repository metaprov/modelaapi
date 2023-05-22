import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_api_resource_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/api/resource/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class Account extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Account;
  hasMetadata(): boolean;
  clearMetadata(): Account;

  getSpec(): AccountSpec | undefined;
  setSpec(value?: AccountSpec): Account;
  hasSpec(): boolean;
  clearSpec(): Account;

  getStatus(): AccountStatus | undefined;
  setStatus(value?: AccountStatus): Account;
  hasStatus(): boolean;
  clearStatus(): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: AccountSpec.AsObject,
    status?: AccountStatus.AsObject,
  }
}

export class AccountList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): AccountList;
  hasMetadata(): boolean;
  clearMetadata(): AccountList;

  getItemsList(): Array<Account>;
  setItemsList(value: Array<Account>): AccountList;
  clearItemsList(): AccountList;
  addItems(value?: Account, index?: number): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountList.AsObject;
  static toObject(includeInstance: boolean, msg: AccountList): AccountList.AsObject;
  static serializeBinaryToWriter(message: AccountList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountList;
  static deserializeBinaryFromReader(message: AccountList, reader: jspb.BinaryReader): AccountList;
}

export namespace AccountList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Account.AsObject>,
  }
}

export class AccountSpec extends jspb.Message {
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): AccountSpec;
  hasTenantref(): boolean;
  clearTenantref(): AccountSpec;

  getType(): string;
  setType(value: string): AccountSpec;
  hasType(): boolean;
  clearType(): AccountSpec;

  getUsername(): string;
  setUsername(value: string): AccountSpec;
  hasUsername(): boolean;
  clearUsername(): AccountSpec;

  getFirstname(): string;
  setFirstname(value: string): AccountSpec;
  hasFirstname(): boolean;
  clearFirstname(): AccountSpec;

  getLastname(): string;
  setLastname(value: string): AccountSpec;
  hasLastname(): boolean;
  clearLastname(): AccountSpec;

  getEmail(): string;
  setEmail(value: string): AccountSpec;
  hasEmail(): boolean;
  clearEmail(): AccountSpec;

  getPhone(): string;
  setPhone(value: string): AccountSpec;
  hasPhone(): boolean;
  clearPhone(): AccountSpec;

  getAdmin(): boolean;
  setAdmin(value: boolean): AccountSpec;
  hasAdmin(): boolean;
  clearAdmin(): AccountSpec;

  getMemberof(): string;
  setMemberof(value: string): AccountSpec;
  hasMemberof(): boolean;
  clearMemberof(): AccountSpec;

  getResetpassword(): boolean;
  setResetpassword(value: boolean): AccountSpec;
  hasResetpassword(): boolean;
  clearResetpassword(): AccountSpec;

  getAvatar(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setAvatar(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): AccountSpec;
  hasAvatar(): boolean;
  clearAvatar(): AccountSpec;

  getFavoriteproductsList(): Array<string>;
  setFavoriteproductsList(value: Array<string>): AccountSpec;
  clearFavoriteproductsList(): AccountSpec;
  addFavoriteproducts(value: string, index?: number): AccountSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AccountSpec): AccountSpec.AsObject;
  static serializeBinaryToWriter(message: AccountSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountSpec;
  static deserializeBinaryFromReader(message: AccountSpec, reader: jspb.BinaryReader): AccountSpec;
}

export namespace AccountSpec {
  export type AsObject = {
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    type?: string,
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    phone?: string,
    admin?: boolean,
    memberof?: string,
    resetpassword?: boolean,
    avatar?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    favoriteproductsList: Array<string>,
  }
}

export class AccountStatus extends jspb.Message {
  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AccountStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): AccountStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): AccountStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): AccountStatus;

  getFailurereason(): string;
  setFailurereason(value: string): AccountStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): AccountStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): AccountStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): AccountStatus;

  getModelscount(): number;
  setModelscount(value: number): AccountStatus;
  hasModelscount(): boolean;
  clearModelscount(): AccountStatus;

  getModelclassescount(): number;
  setModelclassescount(value: number): AccountStatus;
  hasModelclassescount(): boolean;
  clearModelclassescount(): AccountStatus;

  getPredictorscount(): number;
  setPredictorscount(value: number): AccountStatus;
  hasPredictorscount(): boolean;
  clearPredictorscount(): AccountStatus;

  getFeaturegroupscount(): number;
  setFeaturegroupscount(value: number): AccountStatus;
  hasFeaturegroupscount(): boolean;
  clearFeaturegroupscount(): AccountStatus;

  getDatasetscount(): number;
  setDatasetscount(value: number): AccountStatus;
  hasDatasetscount(): boolean;
  clearDatasetscount(): AccountStatus;

  getMemberscount(): number;
  setMemberscount(value: number): AccountStatus;
  hasMemberscount(): boolean;
  clearMemberscount(): AccountStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): AccountStatus;
  clearConditionsList(): AccountStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AccountStatus): AccountStatus.AsObject;
  static serializeBinaryToWriter(message: AccountStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountStatus;
  static deserializeBinaryFromReader(message: AccountStatus, reader: jspb.BinaryReader): AccountStatus;
}

export namespace AccountStatus {
  export type AsObject = {
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration?: number,
    failurereason?: string,
    failuremessage?: string,
    modelscount?: number,
    modelclassescount?: number,
    predictorscount?: number,
    featuregroupscount?: number,
    datasetscount?: number,
    memberscount?: number,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class Alert extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Alert;
  hasMetadata(): boolean;
  clearMetadata(): Alert;

  getSpec(): AlertSpec | undefined;
  setSpec(value?: AlertSpec): Alert;
  hasSpec(): boolean;
  clearSpec(): Alert;

  getStatus(): AlertStatus | undefined;
  setStatus(value?: AlertStatus): Alert;
  hasStatus(): boolean;
  clearStatus(): Alert;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Alert.AsObject;
  static toObject(includeInstance: boolean, msg: Alert): Alert.AsObject;
  static serializeBinaryToWriter(message: Alert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Alert;
  static deserializeBinaryFromReader(message: Alert, reader: jspb.BinaryReader): Alert;
}

export namespace Alert {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: AlertSpec.AsObject,
    status?: AlertStatus.AsObject,
  }
}

export class AlertList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): AlertList;
  hasMetadata(): boolean;
  clearMetadata(): AlertList;

  getItemsList(): Array<Alert>;
  setItemsList(value: Array<Alert>): AlertList;
  clearItemsList(): AlertList;
  addItems(value?: Alert, index?: number): Alert;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertList.AsObject;
  static toObject(includeInstance: boolean, msg: AlertList): AlertList.AsObject;
  static serializeBinaryToWriter(message: AlertList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertList;
  static deserializeBinaryFromReader(message: AlertList, reader: jspb.BinaryReader): AlertList;
}

export namespace AlertList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Alert.AsObject>,
  }
}

export class AlertSpec extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): AlertSpec;
  hasSubject(): boolean;
  clearSubject(): AlertSpec;

  getMessage(): string;
  setMessage(value: string): AlertSpec;
  hasMessage(): boolean;
  clearMessage(): AlertSpec;

  getLevel(): string;
  setLevel(value: string): AlertSpec;
  hasLevel(): boolean;
  clearLevel(): AlertSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): AlertSpec;
  hasEntityref(): boolean;
  clearEntityref(): AlertSpec;

  getNotifiername(): string;
  setNotifiername(value: string): AlertSpec;
  hasNotifiername(): boolean;
  clearNotifiername(): AlertSpec;

  getOwner(): string;
  setOwner(value: string): AlertSpec;
  hasOwner(): boolean;
  clearOwner(): AlertSpec;

  getTtl(): number;
  setTtl(value: number): AlertSpec;
  hasTtl(): boolean;
  clearTtl(): AlertSpec;

  getFieldsMap(): jspb.Map<string, string>;
  clearFieldsMap(): AlertSpec;

  getUrl(): string;
  setUrl(value: string): AlertSpec;
  hasUrl(): boolean;
  clearUrl(): AlertSpec;

  getImage(): string;
  setImage(value: string): AlertSpec;
  hasImage(): boolean;
  clearImage(): AlertSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): AlertSpec;
  hasTenantref(): boolean;
  clearTenantref(): AlertSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AlertSpec): AlertSpec.AsObject;
  static serializeBinaryToWriter(message: AlertSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertSpec;
  static deserializeBinaryFromReader(message: AlertSpec, reader: jspb.BinaryReader): AlertSpec;
}

export namespace AlertSpec {
  export type AsObject = {
    subject?: string,
    message?: string,
    level?: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    notifiername?: string,
    owner?: string,
    ttl?: number,
    fieldsMap: Array<[string, string]>,
    url?: string,
    image?: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class AlertStatus extends jspb.Message {
  getFiredat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setFiredat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AlertStatus;
  hasFiredat(): boolean;
  clearFiredat(): AlertStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): AlertStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): AlertStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AlertStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): AlertStatus;

  getFailurereason(): string;
  setFailurereason(value: string): AlertStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): AlertStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): AlertStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): AlertStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): AlertStatus;
  clearConditionsList(): AlertStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AlertStatus): AlertStatus.AsObject;
  static serializeBinaryToWriter(message: AlertStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertStatus;
  static deserializeBinaryFromReader(message: AlertStatus, reader: jspb.BinaryReader): AlertStatus;
}

export namespace AlertStatus {
  export type AsObject = {
    firedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class Attachment extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Attachment;
  hasMetadata(): boolean;
  clearMetadata(): Attachment;

  getSpec(): AttachmentSpec | undefined;
  setSpec(value?: AttachmentSpec): Attachment;
  hasSpec(): boolean;
  clearSpec(): Attachment;

  getStatus(): AttachmentStatus | undefined;
  setStatus(value?: AttachmentStatus): Attachment;
  hasStatus(): boolean;
  clearStatus(): Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attachment.AsObject;
  static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
  static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attachment;
  static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
}

export namespace Attachment {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: AttachmentSpec.AsObject,
    status?: AttachmentStatus.AsObject,
  }
}

export class AttachmentList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): AttachmentList;
  hasMetadata(): boolean;
  clearMetadata(): AttachmentList;

  getItemsList(): Array<Attachment>;
  setItemsList(value: Array<Attachment>): AttachmentList;
  clearItemsList(): AttachmentList;
  addItems(value?: Attachment, index?: number): Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentList.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentList): AttachmentList.AsObject;
  static serializeBinaryToWriter(message: AttachmentList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentList;
  static deserializeBinaryFromReader(message: AttachmentList, reader: jspb.BinaryReader): AttachmentList;
}

export namespace AttachmentList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Attachment.AsObject>,
  }
}

export class AttachmentSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): AttachmentSpec;
  hasOwner(): boolean;
  clearOwner(): AttachmentSpec;

  getDescription(): string;
  setDescription(value: string): AttachmentSpec;
  hasDescription(): boolean;
  clearDescription(): AttachmentSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): AttachmentSpec;
  hasEntityref(): boolean;
  clearEntityref(): AttachmentSpec;

  getBucketname(): string;
  setBucketname(value: string): AttachmentSpec;
  hasBucketname(): boolean;
  clearBucketname(): AttachmentSpec;

  getPath(): string;
  setPath(value: string): AttachmentSpec;
  hasPath(): boolean;
  clearPath(): AttachmentSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): AttachmentSpec;
  hasTenantref(): boolean;
  clearTenantref(): AttachmentSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentSpec): AttachmentSpec.AsObject;
  static serializeBinaryToWriter(message: AttachmentSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentSpec;
  static deserializeBinaryFromReader(message: AttachmentSpec, reader: jspb.BinaryReader): AttachmentSpec;
}

export namespace AttachmentSpec {
  export type AsObject = {
    owner?: string,
    description?: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    bucketname?: string,
    path?: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class AttachmentStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): AttachmentStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): AttachmentStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AttachmentStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): AttachmentStatus;

  getFailurereason(): string;
  setFailurereason(value: string): AttachmentStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): AttachmentStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): AttachmentStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): AttachmentStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): AttachmentStatus;
  clearConditionsList(): AttachmentStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentStatus): AttachmentStatus.AsObject;
  static serializeBinaryToWriter(message: AttachmentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentStatus;
  static deserializeBinaryFromReader(message: AttachmentStatus, reader: jspb.BinaryReader): AttachmentStatus;
}

export namespace AttachmentStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class BucketResourceQuotas extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): BucketResourceQuotas;
  hasEnabled(): boolean;
  clearEnabled(): BucketResourceQuotas;

  getHardlimit(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setHardlimit(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): BucketResourceQuotas;
  hasHardlimit(): boolean;
  clearHardlimit(): BucketResourceQuotas;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketResourceQuotas.AsObject;
  static toObject(includeInstance: boolean, msg: BucketResourceQuotas): BucketResourceQuotas.AsObject;
  static serializeBinaryToWriter(message: BucketResourceQuotas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketResourceQuotas;
  static deserializeBinaryFromReader(message: BucketResourceQuotas, reader: jspb.BinaryReader): BucketResourceQuotas;
}

export namespace BucketResourceQuotas {
  export type AsObject = {
    enabled?: boolean,
    hardlimit?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class Connection extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Connection;
  hasMetadata(): boolean;
  clearMetadata(): Connection;

  getSpec(): ConnectionSpec | undefined;
  setSpec(value?: ConnectionSpec): Connection;
  hasSpec(): boolean;
  clearSpec(): Connection;

  getStatus(): ConnectionStatus | undefined;
  setStatus(value?: ConnectionStatus): Connection;
  hasStatus(): boolean;
  clearStatus(): Connection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connection.AsObject;
  static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
  static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connection;
  static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ConnectionSpec.AsObject,
    status?: ConnectionStatus.AsObject,
  }
}

export class ConnectionList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ConnectionList;
  hasMetadata(): boolean;
  clearMetadata(): ConnectionList;

  getItemsList(): Array<Connection>;
  setItemsList(value: Array<Connection>): ConnectionList;
  clearItemsList(): ConnectionList;
  addItems(value?: Connection, index?: number): Connection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionList.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionList): ConnectionList.AsObject;
  static serializeBinaryToWriter(message: ConnectionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionList;
  static deserializeBinaryFromReader(message: ConnectionList, reader: jspb.BinaryReader): ConnectionList;
}

export namespace ConnectionList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Connection.AsObject>,
  }
}

export class ConnectionSpec extends jspb.Message {
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ConnectionSpec;
  hasTenantref(): boolean;
  clearTenantref(): ConnectionSpec;

  getCategory(): string;
  setCategory(value: string): ConnectionSpec;
  hasCategory(): boolean;
  clearCategory(): ConnectionSpec;

  getProvider(): string;
  setProvider(value: string): ConnectionSpec;
  hasProvider(): boolean;
  clearProvider(): ConnectionSpec;

  getSecretdataMap(): jspb.Map<string, string>;
  clearSecretdataMap(): ConnectionSpec;

  getOptionsMap(): jspb.Map<string, string>;
  clearOptionsMap(): ConnectionSpec;

  getOwner(): string;
  setOwner(value: string): ConnectionSpec;
  hasOwner(): boolean;
  clearOwner(): ConnectionSpec;

  getSecretref(): k8s_io_api_core_v1_generated_pb.SecretReference | undefined;
  setSecretref(value?: k8s_io_api_core_v1_generated_pb.SecretReference): ConnectionSpec;
  hasSecretref(): boolean;
  clearSecretref(): ConnectionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionSpec): ConnectionSpec.AsObject;
  static serializeBinaryToWriter(message: ConnectionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionSpec;
  static deserializeBinaryFromReader(message: ConnectionSpec, reader: jspb.BinaryReader): ConnectionSpec;
}

export namespace ConnectionSpec {
  export type AsObject = {
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    category?: string,
    provider?: string,
    secretdataMap: Array<[string, string]>,
    optionsMap: Array<[string, string]>,
    owner?: string,
    secretref?: k8s_io_api_core_v1_generated_pb.SecretReference.AsObject,
  }
}

export class ConnectionStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ConnectionStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): ConnectionStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ConnectionStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ConnectionStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ConnectionStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): ConnectionStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ConnectionStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ConnectionStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ConnectionStatus;
  clearConditionsList(): ConnectionStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionStatus): ConnectionStatus.AsObject;
  static serializeBinaryToWriter(message: ConnectionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionStatus;
  static deserializeBinaryFromReader(message: ConnectionStatus, reader: jspb.BinaryReader): ConnectionStatus;
}

export namespace ConnectionStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class IngressSpec extends jspb.Message {
  getFqdn(): string;
  setFqdn(value: string): IngressSpec;
  hasFqdn(): boolean;
  clearFqdn(): IngressSpec;

  getGrpc(): boolean;
  setGrpc(value: boolean): IngressSpec;
  hasGrpc(): boolean;
  clearGrpc(): IngressSpec;

  getRest(): boolean;
  setRest(value: boolean): IngressSpec;
  hasRest(): boolean;
  clearRest(): IngressSpec;

  getIngressclassname(): string;
  setIngressclassname(value: string): IngressSpec;
  hasIngressclassname(): boolean;
  clearIngressclassname(): IngressSpec;

  getIssuername(): string;
  setIssuername(value: string): IngressSpec;
  hasIssuername(): boolean;
  clearIssuername(): IngressSpec;

  getClusterissuername(): string;
  setClusterissuername(value: string): IngressSpec;
  hasClusterissuername(): boolean;
  clearClusterissuername(): IngressSpec;

  getTlssecretname(): string;
  setTlssecretname(value: string): IngressSpec;
  hasTlssecretname(): boolean;
  clearTlssecretname(): IngressSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IngressSpec.AsObject;
  static toObject(includeInstance: boolean, msg: IngressSpec): IngressSpec.AsObject;
  static serializeBinaryToWriter(message: IngressSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IngressSpec;
  static deserializeBinaryFromReader(message: IngressSpec, reader: jspb.BinaryReader): IngressSpec;
}

export namespace IngressSpec {
  export type AsObject = {
    fqdn?: string,
    grpc?: boolean,
    rest?: boolean,
    ingressclassname?: string,
    issuername?: string,
    clusterissuername?: string,
    tlssecretname?: string,
  }
}

export class Lab extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Lab;
  hasMetadata(): boolean;
  clearMetadata(): Lab;

  getSpec(): LabSpec | undefined;
  setSpec(value?: LabSpec): Lab;
  hasSpec(): boolean;
  clearSpec(): Lab;

  getStatus(): LabStatus | undefined;
  setStatus(value?: LabStatus): Lab;
  hasStatus(): boolean;
  clearStatus(): Lab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lab.AsObject;
  static toObject(includeInstance: boolean, msg: Lab): Lab.AsObject;
  static serializeBinaryToWriter(message: Lab, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lab;
  static deserializeBinaryFromReader(message: Lab, reader: jspb.BinaryReader): Lab;
}

export namespace Lab {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: LabSpec.AsObject,
    status?: LabStatus.AsObject,
  }
}

export class LabList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): LabList;
  hasMetadata(): boolean;
  clearMetadata(): LabList;

  getItemsList(): Array<Lab>;
  setItemsList(value: Array<Lab>): LabList;
  clearItemsList(): LabList;
  addItems(value?: Lab, index?: number): Lab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabList.AsObject;
  static toObject(includeInstance: boolean, msg: LabList): LabList.AsObject;
  static serializeBinaryToWriter(message: LabList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabList;
  static deserializeBinaryFromReader(message: LabList, reader: jspb.BinaryReader): LabList;
}

export namespace LabList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Lab.AsObject>,
  }
}

export class LabSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): LabSpec;
  hasDescription(): boolean;
  clearDescription(): LabSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): LabSpec;
  hasTenantref(): boolean;
  clearTenantref(): LabSpec;

  getLimits(): ResourceLimitSpec | undefined;
  setLimits(value?: ResourceLimitSpec): LabSpec;
  hasLimits(): boolean;
  clearLimits(): LabSpec;

  getExternalcluster(): VirtualClusterSpec | undefined;
  setExternalcluster(value?: VirtualClusterSpec): LabSpec;
  hasExternalcluster(): boolean;
  clearExternalcluster(): LabSpec;

  getOwner(): string;
  setOwner(value: string): LabSpec;
  hasOwner(): boolean;
  clearOwner(): LabSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LabSpec): LabSpec.AsObject;
  static serializeBinaryToWriter(message: LabSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabSpec;
  static deserializeBinaryFromReader(message: LabSpec, reader: jspb.BinaryReader): LabSpec;
}

export namespace LabSpec {
  export type AsObject = {
    description?: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    limits?: ResourceLimitSpec.AsObject,
    externalcluster?: VirtualClusterSpec.AsObject,
    owner?: string,
  }
}

export class LabStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): LabStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): LabStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): LabStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): LabStatus;
  clearConditionsList(): LabStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LabStatus): LabStatus.AsObject;
  static serializeBinaryToWriter(message: LabStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabStatus;
  static deserializeBinaryFromReader(message: LabStatus, reader: jspb.BinaryReader): LabStatus;
}

export namespace LabStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class License extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): License;
  hasMetadata(): boolean;
  clearMetadata(): License;

  getSpec(): LicenseSpec | undefined;
  setSpec(value?: LicenseSpec): License;
  hasSpec(): boolean;
  clearSpec(): License;

  getStatus(): LicenseStatus | undefined;
  setStatus(value?: LicenseStatus): License;
  hasStatus(): boolean;
  clearStatus(): License;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): License.AsObject;
  static toObject(includeInstance: boolean, msg: License): License.AsObject;
  static serializeBinaryToWriter(message: License, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): License;
  static deserializeBinaryFromReader(message: License, reader: jspb.BinaryReader): License;
}

export namespace License {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: LicenseSpec.AsObject,
    status?: LicenseStatus.AsObject,
  }
}

export class LicenseList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): LicenseList;
  hasMetadata(): boolean;
  clearMetadata(): LicenseList;

  getItemsList(): Array<License>;
  setItemsList(value: Array<License>): LicenseList;
  clearItemsList(): LicenseList;
  addItems(value?: License, index?: number): License;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LicenseList.AsObject;
  static toObject(includeInstance: boolean, msg: LicenseList): LicenseList.AsObject;
  static serializeBinaryToWriter(message: LicenseList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LicenseList;
  static deserializeBinaryFromReader(message: LicenseList, reader: jspb.BinaryReader): LicenseList;
}

export namespace LicenseList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<License.AsObject>,
  }
}

export class LicenseSpec extends jspb.Message {
  getSecretref(): k8s_io_api_core_v1_generated_pb.SecretReference | undefined;
  setSecretref(value?: k8s_io_api_core_v1_generated_pb.SecretReference): LicenseSpec;
  hasSecretref(): boolean;
  clearSecretref(): LicenseSpec;

  getEmail(): string;
  setEmail(value: string): LicenseSpec;
  hasEmail(): boolean;
  clearEmail(): LicenseSpec;

  getTrialstartat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrialstartat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LicenseSpec;
  hasTrialstartat(): boolean;
  clearTrialstartat(): LicenseSpec;

  getTrialendat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrialendat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LicenseSpec;
  hasTrialendat(): boolean;
  clearTrialendat(): LicenseSpec;

  getMaxproducts(): number;
  setMaxproducts(value: number): LicenseSpec;
  hasMaxproducts(): boolean;
  clearMaxproducts(): LicenseSpec;

  getMaxtrainers(): number;
  setMaxtrainers(value: number): LicenseSpec;
  hasMaxtrainers(): boolean;
  clearMaxtrainers(): LicenseSpec;

  getMaxservers(): number;
  setMaxservers(value: number): LicenseSpec;
  hasMaxservers(): boolean;
  clearMaxservers(): LicenseSpec;

  getMaxusers(): number;
  setMaxusers(value: number): LicenseSpec;
  hasMaxusers(): boolean;
  clearMaxusers(): LicenseSpec;

  getMaxdataplanes(): number;
  setMaxdataplanes(value: number): LicenseSpec;
  hasMaxdataplanes(): boolean;
  clearMaxdataplanes(): LicenseSpec;

  getForecast(): boolean;
  setForecast(value: boolean): LicenseSpec;
  hasForecast(): boolean;
  clearForecast(): LicenseSpec;

  getNlp(): boolean;
  setNlp(value: boolean): LicenseSpec;
  hasNlp(): boolean;
  clearNlp(): LicenseSpec;

  getVision(): boolean;
  setVision(value: boolean): LicenseSpec;
  hasVision(): boolean;
  clearVision(): LicenseSpec;

  getChatbot(): boolean;
  setChatbot(value: boolean): LicenseSpec;
  hasChatbot(): boolean;
  clearChatbot(): LicenseSpec;

  getProductname(): string;
  setProductname(value: string): LicenseSpec;
  hasProductname(): boolean;
  clearProductname(): LicenseSpec;

  getPricename(): string;
  setPricename(value: string): LicenseSpec;
  hasPricename(): boolean;
  clearPricename(): LicenseSpec;

  getExpireat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setExpireat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LicenseSpec;
  hasExpireat(): boolean;
  clearExpireat(): LicenseSpec;

  getNotifiername(): string;
  setNotifiername(value: string): LicenseSpec;
  hasNotifiername(): boolean;
  clearNotifiername(): LicenseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LicenseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LicenseSpec): LicenseSpec.AsObject;
  static serializeBinaryToWriter(message: LicenseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LicenseSpec;
  static deserializeBinaryFromReader(message: LicenseSpec, reader: jspb.BinaryReader): LicenseSpec;
}

export namespace LicenseSpec {
  export type AsObject = {
    secretref?: k8s_io_api_core_v1_generated_pb.SecretReference.AsObject,
    email?: string,
    trialstartat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trialendat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    maxproducts?: number,
    maxtrainers?: number,
    maxservers?: number,
    maxusers?: number,
    maxdataplanes?: number,
    forecast?: boolean,
    nlp?: boolean,
    vision?: boolean,
    chatbot?: boolean,
    productname?: string,
    pricename?: string,
    expireat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    notifiername?: string,
  }
}

export class LicenseStatus extends jspb.Message {
  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LicenseStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): LicenseStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): LicenseStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): LicenseStatus;

  getFailurereason(): string;
  setFailurereason(value: string): LicenseStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): LicenseStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): LicenseStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): LicenseStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): LicenseStatus;
  clearConditionsList(): LicenseStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LicenseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LicenseStatus): LicenseStatus.AsObject;
  static serializeBinaryToWriter(message: LicenseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LicenseStatus;
  static deserializeBinaryFromReader(message: LicenseStatus, reader: jspb.BinaryReader): LicenseStatus;
}

export namespace LicenseStatus {
  export type AsObject = {
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration?: number,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class ModelaSystem extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelaSystem;
  hasMetadata(): boolean;
  clearMetadata(): ModelaSystem;

  getSpec(): ModelaSystemSpec | undefined;
  setSpec(value?: ModelaSystemSpec): ModelaSystem;
  hasSpec(): boolean;
  clearSpec(): ModelaSystem;

  getStatus(): ModelaSystemStatus | undefined;
  setStatus(value?: ModelaSystemStatus): ModelaSystem;
  hasStatus(): boolean;
  clearStatus(): ModelaSystem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystem.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystem): ModelaSystem.AsObject;
  static serializeBinaryToWriter(message: ModelaSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystem;
  static deserializeBinaryFromReader(message: ModelaSystem, reader: jspb.BinaryReader): ModelaSystem;
}

export namespace ModelaSystem {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelaSystemSpec.AsObject,
    status?: ModelaSystemStatus.AsObject,
  }
}

export class ModelaSystemList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelaSystemList;
  hasMetadata(): boolean;
  clearMetadata(): ModelaSystemList;

  getItemsList(): Array<ModelaSystem>;
  setItemsList(value: Array<ModelaSystem>): ModelaSystemList;
  clearItemsList(): ModelaSystemList;
  addItems(value?: ModelaSystem, index?: number): ModelaSystem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemList): ModelaSystemList.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemList;
  static deserializeBinaryFromReader(message: ModelaSystemList, reader: jspb.BinaryReader): ModelaSystemList;
}

export namespace ModelaSystemList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelaSystem.AsObject>,
  }
}

export class ModelaSystemSpec extends jspb.Message {
  getRelease(): string;
  setRelease(value: string): ModelaSystemSpec;
  hasRelease(): boolean;
  clearRelease(): ModelaSystemSpec;

  getImagepullpolicy(): string;
  setImagepullpolicy(value: string): ModelaSystemSpec;
  hasImagepullpolicy(): boolean;
  clearImagepullpolicy(): ModelaSystemSpec;

  getVaultaddress(): string;
  setVaultaddress(value: string): ModelaSystemSpec;
  hasVaultaddress(): boolean;
  clearVaultaddress(): ModelaSystemSpec;

  getVaultmountpath(): string;
  setVaultmountpath(value: string): ModelaSystemSpec;
  hasVaultmountpath(): boolean;
  clearVaultmountpath(): ModelaSystemSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemSpec): ModelaSystemSpec.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemSpec;
  static deserializeBinaryFromReader(message: ModelaSystemSpec, reader: jspb.BinaryReader): ModelaSystemSpec;
}

export namespace ModelaSystemSpec {
  export type AsObject = {
    release?: string,
    imagepullpolicy?: string,
    vaultaddress?: string,
    vaultmountpath?: string,
  }
}

export class ModelaSystemStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelaSystemStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): ModelaSystemStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelaSystemStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): ModelaSystemStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelaSystemStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ModelaSystemStatus;

  getLastrelease(): string;
  setLastrelease(value: string): ModelaSystemStatus;
  hasLastrelease(): boolean;
  clearLastrelease(): ModelaSystemStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ModelaSystemStatus;
  clearConditionsList(): ModelaSystemStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemStatus): ModelaSystemStatus.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemStatus;
  static deserializeBinaryFromReader(message: ModelaSystemStatus, reader: jspb.BinaryReader): ModelaSystemStatus;
}

export namespace ModelaSystemStatus {
  export type AsObject = {
    observedgeneration?: number,
    failurereason?: string,
    failuremessage?: string,
    lastrelease?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class NotificationChannelSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): NotificationChannelSpec;
  hasEnabled(): boolean;
  clearEnabled(): NotificationChannelSpec;

  getConnectionname(): string;
  setConnectionname(value: string): NotificationChannelSpec;
  hasConnectionname(): boolean;
  clearConnectionname(): NotificationChannelSpec;

  getInfo(): boolean;
  setInfo(value: boolean): NotificationChannelSpec;
  hasInfo(): boolean;
  clearInfo(): NotificationChannelSpec;

  getError(): boolean;
  setError(value: boolean): NotificationChannelSpec;
  hasError(): boolean;
  clearError(): NotificationChannelSpec;

  getFrom(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setFrom(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotificationChannelSpec;
  hasFrom(): boolean;
  clearFrom(): NotificationChannelSpec;

  getTo(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTo(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotificationChannelSpec;
  hasTo(): boolean;
  clearTo(): NotificationChannelSpec;

  getDestination(): string;
  setDestination(value: string): NotificationChannelSpec;
  hasDestination(): boolean;
  clearDestination(): NotificationChannelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationChannelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationChannelSpec): NotificationChannelSpec.AsObject;
  static serializeBinaryToWriter(message: NotificationChannelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationChannelSpec;
  static deserializeBinaryFromReader(message: NotificationChannelSpec, reader: jspb.BinaryReader): NotificationChannelSpec;
}

export namespace NotificationChannelSpec {
  export type AsObject = {
    enabled?: boolean,
    connectionname?: string,
    info?: boolean,
    error?: boolean,
    from?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    to?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    destination?: string,
  }
}

export class NotificationChannelStatus extends jspb.Message {
  getLastmessageat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastmessageat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotificationChannelStatus;
  hasLastmessageat(): boolean;
  clearLastmessageat(): NotificationChannelStatus;

  getFailurereason(): string;
  setFailurereason(value: string): NotificationChannelStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): NotificationChannelStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): NotificationChannelStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): NotificationChannelStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationChannelStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationChannelStatus): NotificationChannelStatus.AsObject;
  static serializeBinaryToWriter(message: NotificationChannelStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationChannelStatus;
  static deserializeBinaryFromReader(message: NotificationChannelStatus, reader: jspb.BinaryReader): NotificationChannelStatus;
}

export namespace NotificationChannelStatus {
  export type AsObject = {
    lastmessageat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason?: string,
    failuremessage?: string,
  }
}

export class Notifier extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Notifier;
  hasMetadata(): boolean;
  clearMetadata(): Notifier;

  getSpec(): NotifierSpec | undefined;
  setSpec(value?: NotifierSpec): Notifier;
  hasSpec(): boolean;
  clearSpec(): Notifier;

  getStatus(): NotifierStatus | undefined;
  setStatus(value?: NotifierStatus): Notifier;
  hasStatus(): boolean;
  clearStatus(): Notifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notifier.AsObject;
  static toObject(includeInstance: boolean, msg: Notifier): Notifier.AsObject;
  static serializeBinaryToWriter(message: Notifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notifier;
  static deserializeBinaryFromReader(message: Notifier, reader: jspb.BinaryReader): Notifier;
}

export namespace Notifier {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: NotifierSpec.AsObject,
    status?: NotifierStatus.AsObject,
  }
}

export class NotifierList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): NotifierList;
  hasMetadata(): boolean;
  clearMetadata(): NotifierList;

  getItemsList(): Array<Notifier>;
  setItemsList(value: Array<Notifier>): NotifierList;
  clearItemsList(): NotifierList;
  addItems(value?: Notifier, index?: number): Notifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifierList.AsObject;
  static toObject(includeInstance: boolean, msg: NotifierList): NotifierList.AsObject;
  static serializeBinaryToWriter(message: NotifierList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifierList;
  static deserializeBinaryFromReader(message: NotifierList, reader: jspb.BinaryReader): NotifierList;
}

export namespace NotifierList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Notifier.AsObject>,
  }
}

export class NotifierSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): NotifierSpec;
  hasEnabled(): boolean;
  clearEnabled(): NotifierSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): NotifierSpec;
  hasTenantref(): boolean;
  clearTenantref(): NotifierSpec;

  getDescription(): string;
  setDescription(value: string): NotifierSpec;
  hasDescription(): boolean;
  clearDescription(): NotifierSpec;

  getOwner(): string;
  setOwner(value: string): NotifierSpec;
  hasOwner(): boolean;
  clearOwner(): NotifierSpec;

  getChannelsList(): Array<NotificationChannelSpec>;
  setChannelsList(value: Array<NotificationChannelSpec>): NotifierSpec;
  clearChannelsList(): NotifierSpec;
  addChannels(value?: NotificationChannelSpec, index?: number): NotificationChannelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifierSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NotifierSpec): NotifierSpec.AsObject;
  static serializeBinaryToWriter(message: NotifierSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifierSpec;
  static deserializeBinaryFromReader(message: NotifierSpec, reader: jspb.BinaryReader): NotifierSpec;
}

export namespace NotifierSpec {
  export type AsObject = {
    enabled?: boolean,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    description?: string,
    owner?: string,
    channelsList: Array<NotificationChannelSpec.AsObject>,
  }
}

export class NotifierStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): NotifierStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): NotifierStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotifierStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): NotifierStatus;

  getChannelsstatusList(): Array<NotificationChannelStatus>;
  setChannelsstatusList(value: Array<NotificationChannelStatus>): NotifierStatus;
  clearChannelsstatusList(): NotifierStatus;
  addChannelsstatus(value?: NotificationChannelStatus, index?: number): NotificationChannelStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): NotifierStatus;
  clearConditionsList(): NotifierStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifierStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NotifierStatus): NotifierStatus.AsObject;
  static serializeBinaryToWriter(message: NotifierStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifierStatus;
  static deserializeBinaryFromReader(message: NotifierStatus, reader: jspb.BinaryReader): NotifierStatus;
}

export namespace NotifierStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    channelsstatusList: Array<NotificationChannelStatus.AsObject>,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class ResourceLimitSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ResourceLimitSpec;
  hasEnabled(): boolean;
  clearEnabled(): ResourceLimitSpec;

  getMaxmem(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setMaxmem(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): ResourceLimitSpec;
  hasMaxmem(): boolean;
  clearMaxmem(): ResourceLimitSpec;

  getMaxcpu(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setMaxcpu(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): ResourceLimitSpec;
  hasMaxcpu(): boolean;
  clearMaxcpu(): ResourceLimitSpec;

  getMaxpods(): number;
  setMaxpods(value: number): ResourceLimitSpec;
  hasMaxpods(): boolean;
  clearMaxpods(): ResourceLimitSpec;

  getMaxpvc(): number;
  setMaxpvc(value: number): ResourceLimitSpec;
  hasMaxpvc(): boolean;
  clearMaxpvc(): ResourceLimitSpec;

  getQuota(): k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec | undefined;
  setQuota(value?: k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec): ResourceLimitSpec;
  hasQuota(): boolean;
  clearQuota(): ResourceLimitSpec;

  getLimitrange(): k8s_io_api_core_v1_generated_pb.LimitRangeSpec | undefined;
  setLimitrange(value?: k8s_io_api_core_v1_generated_pb.LimitRangeSpec): ResourceLimitSpec;
  hasLimitrange(): boolean;
  clearLimitrange(): ResourceLimitSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceLimitSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceLimitSpec): ResourceLimitSpec.AsObject;
  static serializeBinaryToWriter(message: ResourceLimitSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceLimitSpec;
  static deserializeBinaryFromReader(message: ResourceLimitSpec, reader: jspb.BinaryReader): ResourceLimitSpec;
}

export namespace ResourceLimitSpec {
  export type AsObject = {
    enabled?: boolean,
    maxmem?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    maxcpu?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    maxpods?: number,
    maxpvc?: number,
    quota?: k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.AsObject,
    limitrange?: k8s_io_api_core_v1_generated_pb.LimitRangeSpec.AsObject,
  }
}

export class RuleSpec extends jspb.Message {
  getResource(): string;
  setResource(value: string): RuleSpec;
  hasResource(): boolean;
  clearResource(): RuleSpec;

  getVerbsList(): Array<string>;
  setVerbsList(value: Array<string>): RuleSpec;
  clearVerbsList(): RuleSpec;
  addVerbs(value: string, index?: number): RuleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RuleSpec): RuleSpec.AsObject;
  static serializeBinaryToWriter(message: RuleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuleSpec;
  static deserializeBinaryFromReader(message: RuleSpec, reader: jspb.BinaryReader): RuleSpec;
}

export namespace RuleSpec {
  export type AsObject = {
    resource?: string,
    verbsList: Array<string>,
  }
}

export class ServingSite extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ServingSite;
  hasMetadata(): boolean;
  clearMetadata(): ServingSite;

  getSpec(): ServingSiteSpec | undefined;
  setSpec(value?: ServingSiteSpec): ServingSite;
  hasSpec(): boolean;
  clearSpec(): ServingSite;

  getStatus(): ServingSiteStatus | undefined;
  setStatus(value?: ServingSiteStatus): ServingSite;
  hasStatus(): boolean;
  clearStatus(): ServingSite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSite.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSite): ServingSite.AsObject;
  static serializeBinaryToWriter(message: ServingSite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSite;
  static deserializeBinaryFromReader(message: ServingSite, reader: jspb.BinaryReader): ServingSite;
}

export namespace ServingSite {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ServingSiteSpec.AsObject,
    status?: ServingSiteStatus.AsObject,
  }
}

export class ServingSiteList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ServingSiteList;
  hasMetadata(): boolean;
  clearMetadata(): ServingSiteList;

  getItemsList(): Array<ServingSite>;
  setItemsList(value: Array<ServingSite>): ServingSiteList;
  clearItemsList(): ServingSiteList;
  addItems(value?: ServingSite, index?: number): ServingSite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSiteList.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSiteList): ServingSiteList.AsObject;
  static serializeBinaryToWriter(message: ServingSiteList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSiteList;
  static deserializeBinaryFromReader(message: ServingSiteList, reader: jspb.BinaryReader): ServingSiteList;
}

export namespace ServingSiteList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ServingSite.AsObject>,
  }
}

export class ServingSiteSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): ServingSiteSpec;
  hasDescription(): boolean;
  clearDescription(): ServingSiteSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ServingSiteSpec;
  hasTenantref(): boolean;
  clearTenantref(): ServingSiteSpec;

  getLimits(): ResourceLimitSpec | undefined;
  setLimits(value?: ResourceLimitSpec): ServingSiteSpec;
  hasLimits(): boolean;
  clearLimits(): ServingSiteSpec;

  getIngress(): IngressSpec | undefined;
  setIngress(value?: IngressSpec): ServingSiteSpec;
  hasIngress(): boolean;
  clearIngress(): ServingSiteSpec;

  getExternalcluster(): VirtualClusterSpec | undefined;
  setExternalcluster(value?: VirtualClusterSpec): ServingSiteSpec;
  hasExternalcluster(): boolean;
  clearExternalcluster(): ServingSiteSpec;

  getOwner(): string;
  setOwner(value: string): ServingSiteSpec;
  hasOwner(): boolean;
  clearOwner(): ServingSiteSpec;

  getStage(): string;
  setStage(value: string): ServingSiteSpec;
  hasStage(): boolean;
  clearStage(): ServingSiteSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSiteSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSiteSpec): ServingSiteSpec.AsObject;
  static serializeBinaryToWriter(message: ServingSiteSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSiteSpec;
  static deserializeBinaryFromReader(message: ServingSiteSpec, reader: jspb.BinaryReader): ServingSiteSpec;
}

export namespace ServingSiteSpec {
  export type AsObject = {
    description?: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    limits?: ResourceLimitSpec.AsObject,
    ingress?: IngressSpec.AsObject,
    externalcluster?: VirtualClusterSpec.AsObject,
    owner?: string,
    stage?: string,
  }
}

export class ServingSiteStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ServingSiteStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): ServingSiteStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ServingSiteStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ServingSiteStatus;

  getActivepredictors(): number;
  setActivepredictors(value: number): ServingSiteStatus;
  hasActivepredictors(): boolean;
  clearActivepredictors(): ServingSiteStatus;

  getInactivepredictors(): number;
  setInactivepredictors(value: number): ServingSiteStatus;
  hasInactivepredictors(): boolean;
  clearInactivepredictors(): ServingSiteStatus;

  getTotalpredictorservicefailed(): number;
  setTotalpredictorservicefailed(value: number): ServingSiteStatus;
  hasTotalpredictorservicefailed(): boolean;
  clearTotalpredictorservicefailed(): ServingSiteStatus;

  getTotalpredictordatadriftfailed(): number;
  setTotalpredictordatadriftfailed(value: number): ServingSiteStatus;
  hasTotalpredictordatadriftfailed(): boolean;
  clearTotalpredictordatadriftfailed(): ServingSiteStatus;

  getTotalpredictoraccuracyfailed(): number;
  setTotalpredictoraccuracyfailed(value: number): ServingSiteStatus;
  hasTotalpredictoraccuracyfailed(): boolean;
  clearTotalpredictoraccuracyfailed(): ServingSiteStatus;

  getDailypredictionscountsList(): Array<number>;
  setDailypredictionscountsList(value: Array<number>): ServingSiteStatus;
  clearDailypredictionscountsList(): ServingSiteStatus;
  addDailypredictionscounts(value: number, index?: number): ServingSiteStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ServingSiteStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): ServingSiteStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ServingSiteStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ServingSiteStatus;

  getGrpcingressname(): string;
  setGrpcingressname(value: string): ServingSiteStatus;
  hasGrpcingressname(): boolean;
  clearGrpcingressname(): ServingSiteStatus;

  getRestingressname(): string;
  setRestingressname(value: string): ServingSiteStatus;
  hasRestingressname(): boolean;
  clearRestingressname(): ServingSiteStatus;

  getGrpcingressready(): boolean;
  setGrpcingressready(value: boolean): ServingSiteStatus;
  hasGrpcingressready(): boolean;
  clearGrpcingressready(): ServingSiteStatus;

  getRestingressready(): boolean;
  setRestingressready(value: boolean): ServingSiteStatus;
  hasRestingressready(): boolean;
  clearRestingressready(): ServingSiteStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ServingSiteStatus;
  clearConditionsList(): ServingSiteStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSiteStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSiteStatus): ServingSiteStatus.AsObject;
  static serializeBinaryToWriter(message: ServingSiteStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSiteStatus;
  static deserializeBinaryFromReader(message: ServingSiteStatus, reader: jspb.BinaryReader): ServingSiteStatus;
}

export namespace ServingSiteStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    activepredictors?: number,
    inactivepredictors?: number,
    totalpredictorservicefailed?: number,
    totalpredictordatadriftfailed?: number,
    totalpredictoraccuracyfailed?: number,
    dailypredictionscountsList: Array<number>,
    failurereason?: string,
    failuremessage?: string,
    grpcingressname?: string,
    restingressname?: string,
    grpcingressready?: boolean,
    restingressready?: boolean,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class Tenant extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Tenant;
  hasMetadata(): boolean;
  clearMetadata(): Tenant;

  getSpec(): TenantSpec | undefined;
  setSpec(value?: TenantSpec): Tenant;
  hasSpec(): boolean;
  clearSpec(): Tenant;

  getStatus(): TenantStatus | undefined;
  setStatus(value?: TenantStatus): Tenant;
  hasStatus(): boolean;
  clearStatus(): Tenant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tenant.AsObject;
  static toObject(includeInstance: boolean, msg: Tenant): Tenant.AsObject;
  static serializeBinaryToWriter(message: Tenant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tenant;
  static deserializeBinaryFromReader(message: Tenant, reader: jspb.BinaryReader): Tenant;
}

export namespace Tenant {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: TenantSpec.AsObject,
    status?: TenantStatus.AsObject,
  }
}

export class TenantList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): TenantList;
  hasMetadata(): boolean;
  clearMetadata(): TenantList;

  getItemsList(): Array<Tenant>;
  setItemsList(value: Array<Tenant>): TenantList;
  clearItemsList(): TenantList;
  addItems(value?: Tenant, index?: number): Tenant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantList.AsObject;
  static toObject(includeInstance: boolean, msg: TenantList): TenantList.AsObject;
  static serializeBinaryToWriter(message: TenantList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantList;
  static deserializeBinaryFromReader(message: TenantList, reader: jspb.BinaryReader): TenantList;
}

export namespace TenantList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Tenant.AsObject>,
  }
}

export class TenantSpec extends jspb.Message {
  getDefaultlabname(): string;
  setDefaultlabname(value: string): TenantSpec;
  hasDefaultlabname(): boolean;
  clearDefaultlabname(): TenantSpec;

  getDefaultservingsitename(): string;
  setDefaultservingsitename(value: string): TenantSpec;
  hasDefaultservingsitename(): boolean;
  clearDefaultservingsitename(): TenantSpec;

  getDefaultbucketname(): string;
  setDefaultbucketname(value: string): TenantSpec;
  hasDefaultbucketname(): boolean;
  clearDefaultbucketname(): TenantSpec;

  getPermissions(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec | undefined;
  setPermissions(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec): TenantSpec;
  hasPermissions(): boolean;
  clearPermissions(): TenantSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): TenantSpec;
  hasNotification(): boolean;
  clearNotification(): TenantSpec;

  getOnlinestoreconnection(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setOnlinestoreconnection(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TenantSpec;
  hasOnlinestoreconnection(): boolean;
  clearOnlinestoreconnection(): TenantSpec;

  getMetricstoreconnection(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setMetricstoreconnection(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TenantSpec;
  hasMetricstoreconnection(): boolean;
  clearMetricstoreconnection(): TenantSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TenantSpec): TenantSpec.AsObject;
  static serializeBinaryToWriter(message: TenantSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantSpec;
  static deserializeBinaryFromReader(message: TenantSpec, reader: jspb.BinaryReader): TenantSpec;
}

export namespace TenantSpec {
  export type AsObject = {
    defaultlabname?: string,
    defaultservingsitename?: string,
    defaultbucketname?: string,
    permissions?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    onlinestoreconnection?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    metricstoreconnection?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class TenantStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): TenantStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): TenantStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TenantStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): TenantStatus;

  getFailurereason(): string;
  setFailurereason(value: string): TenantStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): TenantStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): TenantStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): TenantStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): TenantStatus;
  clearConditionsList(): TenantStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TenantStatus): TenantStatus.AsObject;
  static serializeBinaryToWriter(message: TenantStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantStatus;
  static deserializeBinaryFromReader(message: TenantStatus, reader: jspb.BinaryReader): TenantStatus;
}

export namespace TenantStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class UserRoleClass extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): UserRoleClass;
  hasMetadata(): boolean;
  clearMetadata(): UserRoleClass;

  getSpec(): UserRoleClassSpec | undefined;
  setSpec(value?: UserRoleClassSpec): UserRoleClass;
  hasSpec(): boolean;
  clearSpec(): UserRoleClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClass.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClass): UserRoleClass.AsObject;
  static serializeBinaryToWriter(message: UserRoleClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClass;
  static deserializeBinaryFromReader(message: UserRoleClass, reader: jspb.BinaryReader): UserRoleClass;
}

export namespace UserRoleClass {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: UserRoleClassSpec.AsObject,
  }
}

export class UserRoleClassList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): UserRoleClassList;
  hasMetadata(): boolean;
  clearMetadata(): UserRoleClassList;

  getItemsList(): Array<UserRoleClass>;
  setItemsList(value: Array<UserRoleClass>): UserRoleClassList;
  clearItemsList(): UserRoleClassList;
  addItems(value?: UserRoleClass, index?: number): UserRoleClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClassList.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClassList): UserRoleClassList.AsObject;
  static serializeBinaryToWriter(message: UserRoleClassList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClassList;
  static deserializeBinaryFromReader(message: UserRoleClassList, reader: jspb.BinaryReader): UserRoleClassList;
}

export namespace UserRoleClassList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<UserRoleClass.AsObject>,
  }
}

export class UserRoleClassSpec extends jspb.Message {
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): UserRoleClassSpec;
  hasTenantref(): boolean;
  clearTenantref(): UserRoleClassSpec;

  getDescription(): string;
  setDescription(value: string): UserRoleClassSpec;
  hasDescription(): boolean;
  clearDescription(): UserRoleClassSpec;

  getOwner(): string;
  setOwner(value: string): UserRoleClassSpec;
  hasOwner(): boolean;
  clearOwner(): UserRoleClassSpec;

  getRulesList(): Array<RuleSpec>;
  setRulesList(value: Array<RuleSpec>): UserRoleClassSpec;
  clearRulesList(): UserRoleClassSpec;
  addRules(value?: RuleSpec, index?: number): RuleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClassSpec.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClassSpec): UserRoleClassSpec.AsObject;
  static serializeBinaryToWriter(message: UserRoleClassSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClassSpec;
  static deserializeBinaryFromReader(message: UserRoleClassSpec, reader: jspb.BinaryReader): UserRoleClassSpec;
}

export namespace UserRoleClassSpec {
  export type AsObject = {
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    description?: string,
    owner?: string,
    rulesList: Array<RuleSpec.AsObject>,
  }
}

export class VirtualBucket extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): VirtualBucket;
  hasMetadata(): boolean;
  clearMetadata(): VirtualBucket;

  getSpec(): VirtualBucketSpec | undefined;
  setSpec(value?: VirtualBucketSpec): VirtualBucket;
  hasSpec(): boolean;
  clearSpec(): VirtualBucket;

  getStatus(): VirtualBucketStatus | undefined;
  setStatus(value?: VirtualBucketStatus): VirtualBucket;
  hasStatus(): boolean;
  clearStatus(): VirtualBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualBucket.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualBucket): VirtualBucket.AsObject;
  static serializeBinaryToWriter(message: VirtualBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualBucket;
  static deserializeBinaryFromReader(message: VirtualBucket, reader: jspb.BinaryReader): VirtualBucket;
}

export namespace VirtualBucket {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: VirtualBucketSpec.AsObject,
    status?: VirtualBucketStatus.AsObject,
  }
}

export class VirtualBucketList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): VirtualBucketList;
  hasMetadata(): boolean;
  clearMetadata(): VirtualBucketList;

  getItemsList(): Array<VirtualBucket>;
  setItemsList(value: Array<VirtualBucket>): VirtualBucketList;
  clearItemsList(): VirtualBucketList;
  addItems(value?: VirtualBucket, index?: number): VirtualBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualBucketList.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualBucketList): VirtualBucketList.AsObject;
  static serializeBinaryToWriter(message: VirtualBucketList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualBucketList;
  static deserializeBinaryFromReader(message: VirtualBucketList, reader: jspb.BinaryReader): VirtualBucketList;
}

export namespace VirtualBucketList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<VirtualBucket.AsObject>,
  }
}

export class VirtualBucketSpec extends jspb.Message {
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): VirtualBucketSpec;
  hasTenantref(): boolean;
  clearTenantref(): VirtualBucketSpec;

  getConnectionname(): string;
  setConnectionname(value: string): VirtualBucketSpec;
  hasConnectionname(): boolean;
  clearConnectionname(): VirtualBucketSpec;

  getDescription(): string;
  setDescription(value: string): VirtualBucketSpec;
  hasDescription(): boolean;
  clearDescription(): VirtualBucketSpec;

  getOwner(): string;
  setOwner(value: string): VirtualBucketSpec;
  hasOwner(): boolean;
  clearOwner(): VirtualBucketSpec;

  getRegion(): string;
  setRegion(value: string): VirtualBucketSpec;
  hasRegion(): boolean;
  clearRegion(): VirtualBucketSpec;

  getVersioning(): boolean;
  setVersioning(value: boolean): VirtualBucketSpec;
  hasVersioning(): boolean;
  clearVersioning(): VirtualBucketSpec;

  getQuotas(): BucketResourceQuotas | undefined;
  setQuotas(value?: BucketResourceQuotas): VirtualBucketSpec;
  hasQuotas(): boolean;
  clearQuotas(): VirtualBucketSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualBucketSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualBucketSpec): VirtualBucketSpec.AsObject;
  static serializeBinaryToWriter(message: VirtualBucketSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualBucketSpec;
  static deserializeBinaryFromReader(message: VirtualBucketSpec, reader: jspb.BinaryReader): VirtualBucketSpec;
}

export namespace VirtualBucketSpec {
  export type AsObject = {
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    connectionname?: string,
    description?: string,
    owner?: string,
    region?: string,
    versioning?: boolean,
    quotas?: BucketResourceQuotas.AsObject,
  }
}

export class VirtualBucketStatus extends jspb.Message {
  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): VirtualBucketStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): VirtualBucketStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): VirtualBucketStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): VirtualBucketStatus;

  getFailurereason(): string;
  setFailurereason(value: string): VirtualBucketStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): VirtualBucketStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): VirtualBucketStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): VirtualBucketStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): VirtualBucketStatus;
  clearConditionsList(): VirtualBucketStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualBucketStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualBucketStatus): VirtualBucketStatus.AsObject;
  static serializeBinaryToWriter(message: VirtualBucketStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualBucketStatus;
  static deserializeBinaryFromReader(message: VirtualBucketStatus, reader: jspb.BinaryReader): VirtualBucketStatus;
}

export namespace VirtualBucketStatus {
  export type AsObject = {
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration?: number,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class VirtualClusterSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): VirtualClusterSpec;
  hasEnabled(): boolean;
  clearEnabled(): VirtualClusterSpec;

  getDescription(): string;
  setDescription(value: string): VirtualClusterSpec;
  hasDescription(): boolean;
  clearDescription(): VirtualClusterSpec;

  getNodes(): number;
  setNodes(value: number): VirtualClusterSpec;
  hasNodes(): boolean;
  clearNodes(): VirtualClusterSpec;

  getInstancetype(): string;
  setInstancetype(value: string): VirtualClusterSpec;
  hasInstancetype(): boolean;
  clearInstancetype(): VirtualClusterSpec;

  getGpus(): number;
  setGpus(value: number): VirtualClusterSpec;
  hasGpus(): boolean;
  clearGpus(): VirtualClusterSpec;

  getGpuclassname(): string;
  setGpuclassname(value: string): VirtualClusterSpec;
  hasGpuclassname(): boolean;
  clearGpuclassname(): VirtualClusterSpec;

  getVolumesize(): number;
  setVolumesize(value: number): VirtualClusterSpec;
  hasVolumesize(): boolean;
  clearVolumesize(): VirtualClusterSpec;

  getSpot(): boolean;
  setSpot(value: boolean): VirtualClusterSpec;
  hasSpot(): boolean;
  clearSpot(): VirtualClusterSpec;

  getConnectionname(): string;
  setConnectionname(value: string): VirtualClusterSpec;
  hasConnectionname(): boolean;
  clearConnectionname(): VirtualClusterSpec;

  getOwner(): string;
  setOwner(value: string): VirtualClusterSpec;
  hasOwner(): boolean;
  clearOwner(): VirtualClusterSpec;

  getLimits(): ResourceLimitSpec | undefined;
  setLimits(value?: ResourceLimitSpec): VirtualClusterSpec;
  hasLimits(): boolean;
  clearLimits(): VirtualClusterSpec;

  getRegion(): string;
  setRegion(value: string): VirtualClusterSpec;
  hasRegion(): boolean;
  clearRegion(): VirtualClusterSpec;

  getAz(): string;
  setAz(value: string): VirtualClusterSpec;
  hasAz(): boolean;
  clearAz(): VirtualClusterSpec;

  getKubernetesversion(): string;
  setKubernetesversion(value: string): VirtualClusterSpec;
  hasKubernetesversion(): boolean;
  clearKubernetesversion(): VirtualClusterSpec;

  getAutoscale(): boolean;
  setAutoscale(value: boolean): VirtualClusterSpec;
  hasAutoscale(): boolean;
  clearAutoscale(): VirtualClusterSpec;

  getMinnodes(): number;
  setMinnodes(value: number): VirtualClusterSpec;
  hasMinnodes(): boolean;
  clearMinnodes(): VirtualClusterSpec;

  getMaxnodes(): number;
  setMaxnodes(value: number): VirtualClusterSpec;
  hasMaxnodes(): boolean;
  clearMaxnodes(): VirtualClusterSpec;

  getCloudref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setCloudref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): VirtualClusterSpec;
  hasCloudref(): boolean;
  clearCloudref(): VirtualClusterSpec;

  getSshkey(): string;
  setSshkey(value: string): VirtualClusterSpec;
  hasSshkey(): boolean;
  clearSshkey(): VirtualClusterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualClusterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualClusterSpec): VirtualClusterSpec.AsObject;
  static serializeBinaryToWriter(message: VirtualClusterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualClusterSpec;
  static deserializeBinaryFromReader(message: VirtualClusterSpec, reader: jspb.BinaryReader): VirtualClusterSpec;
}

export namespace VirtualClusterSpec {
  export type AsObject = {
    enabled?: boolean,
    description?: string,
    nodes?: number,
    instancetype?: string,
    gpus?: number,
    gpuclassname?: string,
    volumesize?: number,
    spot?: boolean,
    connectionname?: string,
    owner?: string,
    limits?: ResourceLimitSpec.AsObject,
    region?: string,
    az?: string,
    kubernetesversion?: string,
    autoscale?: boolean,
    minnodes?: number,
    maxnodes?: number,
    cloudref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    sshkey?: string,
  }
}

