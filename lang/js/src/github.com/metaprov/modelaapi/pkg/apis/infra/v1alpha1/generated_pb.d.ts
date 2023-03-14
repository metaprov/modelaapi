import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_api_resource_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/api/resource/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class APITokenSpec extends jspb.Message {
  getName(): string;
  setName(value: string): APITokenSpec;
  hasName(): boolean;
  clearName(): APITokenSpec;

  getScopesList(): Array<Scope>;
  setScopesList(value: Array<Scope>): APITokenSpec;
  clearScopesList(): APITokenSpec;
  addScopes(value?: Scope, index?: number): Scope;

  getSecretref(): k8s_io_api_core_v1_generated_pb.SecretReference | undefined;
  setSecretref(value?: k8s_io_api_core_v1_generated_pb.SecretReference): APITokenSpec;
  hasSecretref(): boolean;
  clearSecretref(): APITokenSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APITokenSpec.AsObject;
  static toObject(includeInstance: boolean, msg: APITokenSpec): APITokenSpec.AsObject;
  static serializeBinaryToWriter(message: APITokenSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APITokenSpec;
  static deserializeBinaryFromReader(message: APITokenSpec, reader: jspb.BinaryReader): APITokenSpec;
}

export namespace APITokenSpec {
  export type AsObject = {
    name?: string,
    scopesList: Array<Scope.AsObject>,
    secretref?: k8s_io_api_core_v1_generated_pb.SecretReference.AsObject,
  }
}

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

  getTeam(): boolean;
  setTeam(value: boolean): AccountSpec;
  hasTeam(): boolean;
  clearTeam(): AccountSpec;

  getMemberof(): string;
  setMemberof(value: string): AccountSpec;
  hasMemberof(): boolean;
  clearMemberof(): AccountSpec;

  getEmailpassword(): boolean;
  setEmailpassword(value: boolean): AccountSpec;
  hasEmailpassword(): boolean;
  clearEmailpassword(): AccountSpec;

  getResetpassword(): boolean;
  setResetpassword(value: boolean): AccountSpec;
  hasResetpassword(): boolean;
  clearResetpassword(): AccountSpec;

  getClearancelevel(): string;
  setClearancelevel(value: string): AccountSpec;
  hasClearancelevel(): boolean;
  clearClearancelevel(): AccountSpec;

  getAvatar(): AvatarSpec | undefined;
  setAvatar(value?: AvatarSpec): AccountSpec;
  hasAvatar(): boolean;
  clearAvatar(): AccountSpec;

  getFavoriteproductsList(): Array<string>;
  setFavoriteproductsList(value: Array<string>): AccountSpec;
  clearFavoriteproductsList(): AccountSpec;
  addFavoriteproducts(value: string, index?: number): AccountSpec;

  getTokensList(): Array<APITokenSpec>;
  setTokensList(value: Array<APITokenSpec>): AccountSpec;
  clearTokensList(): AccountSpec;
  addTokens(value?: APITokenSpec, index?: number): APITokenSpec;

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
    team?: boolean,
    memberof?: string,
    emailpassword?: boolean,
    resetpassword?: boolean,
    clearancelevel?: string,
    avatar?: AvatarSpec.AsObject,
    favoriteproductsList: Array<string>,
    tokensList: Array<APITokenSpec.AsObject>,
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

export class AirTableSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): AirTableSpec;
  hasHost(): boolean;
  clearHost(): AirTableSpec;

  getPort(): number;
  setPort(value: number): AirTableSpec;
  hasPort(): boolean;
  clearPort(): AirTableSpec;

  getKeyspace(): string;
  setKeyspace(value: string): AirTableSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): AirTableSpec;

  getUsername(): string;
  setUsername(value: string): AirTableSpec;
  hasUsername(): boolean;
  clearUsername(): AirTableSpec;

  getPassword(): string;
  setPassword(value: string): AirTableSpec;
  hasPassword(): boolean;
  clearPassword(): AirTableSpec;

  getUrl(): string;
  setUrl(value: string): AirTableSpec;
  hasUrl(): boolean;
  clearUrl(): AirTableSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirTableSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AirTableSpec): AirTableSpec.AsObject;
  static serializeBinaryToWriter(message: AirTableSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirTableSpec;
  static deserializeBinaryFromReader(message: AirTableSpec, reader: jspb.BinaryReader): AirTableSpec;
}

export namespace AirTableSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class AirWriteSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): AirWriteSpec;
  hasHost(): boolean;
  clearHost(): AirWriteSpec;

  getPort(): number;
  setPort(value: number): AirWriteSpec;
  hasPort(): boolean;
  clearPort(): AirWriteSpec;

  getKeyspace(): string;
  setKeyspace(value: string): AirWriteSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): AirWriteSpec;

  getUsername(): string;
  setUsername(value: string): AirWriteSpec;
  hasUsername(): boolean;
  clearUsername(): AirWriteSpec;

  getPassword(): string;
  setPassword(value: string): AirWriteSpec;
  hasPassword(): boolean;
  clearPassword(): AirWriteSpec;

  getUrl(): string;
  setUrl(value: string): AirWriteSpec;
  hasUrl(): boolean;
  clearUrl(): AirWriteSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirWriteSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AirWriteSpec): AirWriteSpec.AsObject;
  static serializeBinaryToWriter(message: AirWriteSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirWriteSpec;
  static deserializeBinaryFromReader(message: AirWriteSpec, reader: jspb.BinaryReader): AirWriteSpec;
}

export namespace AirWriteSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
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

export class AliCloudSpec extends jspb.Message {
  getAccesskey(): string;
  setAccesskey(value: string): AliCloudSpec;
  hasAccesskey(): boolean;
  clearAccesskey(): AliCloudSpec;

  getSecretkey(): string;
  setSecretkey(value: string): AliCloudSpec;
  hasSecretkey(): boolean;
  clearSecretkey(): AliCloudSpec;

  getRegion(): string;
  setRegion(value: string): AliCloudSpec;
  hasRegion(): boolean;
  clearRegion(): AliCloudSpec;

  getHost(): string;
  setHost(value: string): AliCloudSpec;
  hasHost(): boolean;
  clearHost(): AliCloudSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AliCloudSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AliCloudSpec): AliCloudSpec.AsObject;
  static serializeBinaryToWriter(message: AliCloudSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AliCloudSpec;
  static deserializeBinaryFromReader(message: AliCloudSpec, reader: jspb.BinaryReader): AliCloudSpec;
}

export namespace AliCloudSpec {
  export type AsObject = {
    accesskey?: string,
    secretkey?: string,
    region?: string,
    host?: string,
  }
}

export class AmazonAthenaSpec extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): AmazonAthenaSpec;
  hasHostname(): boolean;
  clearHostname(): AmazonAthenaSpec;

  getUsername(): string;
  setUsername(value: string): AmazonAthenaSpec;
  hasUsername(): boolean;
  clearUsername(): AmazonAthenaSpec;

  getPassword(): string;
  setPassword(value: string): AmazonAthenaSpec;
  hasPassword(): boolean;
  clearPassword(): AmazonAthenaSpec;

  getRegion(): string;
  setRegion(value: string): AmazonAthenaSpec;
  hasRegion(): boolean;
  clearRegion(): AmazonAthenaSpec;

  getUrl(): string;
  setUrl(value: string): AmazonAthenaSpec;
  hasUrl(): boolean;
  clearUrl(): AmazonAthenaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmazonAthenaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AmazonAthenaSpec): AmazonAthenaSpec.AsObject;
  static serializeBinaryToWriter(message: AmazonAthenaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmazonAthenaSpec;
  static deserializeBinaryFromReader(message: AmazonAthenaSpec, reader: jspb.BinaryReader): AmazonAthenaSpec;
}

export namespace AmazonAthenaSpec {
  export type AsObject = {
    hostname?: string,
    username?: string,
    password?: string,
    region?: string,
    url?: string,
  }
}

export class AmazonRedShiftSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): AmazonRedShiftSpec;
  hasHost(): boolean;
  clearHost(): AmazonRedShiftSpec;

  getPort(): number;
  setPort(value: number): AmazonRedShiftSpec;
  hasPort(): boolean;
  clearPort(): AmazonRedShiftSpec;

  getDatabase(): string;
  setDatabase(value: string): AmazonRedShiftSpec;
  hasDatabase(): boolean;
  clearDatabase(): AmazonRedShiftSpec;

  getUsername(): string;
  setUsername(value: string): AmazonRedShiftSpec;
  hasUsername(): boolean;
  clearUsername(): AmazonRedShiftSpec;

  getPassword(): string;
  setPassword(value: string): AmazonRedShiftSpec;
  hasPassword(): boolean;
  clearPassword(): AmazonRedShiftSpec;

  getUrl(): string;
  setUrl(value: string): AmazonRedShiftSpec;
  hasUrl(): boolean;
  clearUrl(): AmazonRedShiftSpec;

  getRegion(): string;
  setRegion(value: string): AmazonRedShiftSpec;
  hasRegion(): boolean;
  clearRegion(): AmazonRedShiftSpec;

  getClusterid(): string;
  setClusterid(value: string): AmazonRedShiftSpec;
  hasClusterid(): boolean;
  clearClusterid(): AmazonRedShiftSpec;

  getS3staginglocation(): string;
  setS3staginglocation(value: string): AmazonRedShiftSpec;
  hasS3staginglocation(): boolean;
  clearS3staginglocation(): AmazonRedShiftSpec;

  getIamrole(): string;
  setIamrole(value: string): AmazonRedShiftSpec;
  hasIamrole(): boolean;
  clearIamrole(): AmazonRedShiftSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmazonRedShiftSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AmazonRedShiftSpec): AmazonRedShiftSpec.AsObject;
  static serializeBinaryToWriter(message: AmazonRedShiftSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmazonRedShiftSpec;
  static deserializeBinaryFromReader(message: AmazonRedShiftSpec, reader: jspb.BinaryReader): AmazonRedShiftSpec;
}

export namespace AmazonRedShiftSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
    region?: string,
    clusterid?: string,
    s3staginglocation?: string,
    iamrole?: string,
  }
}

export class ApacheCassandraSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheCassandraSpec;
  hasHost(): boolean;
  clearHost(): ApacheCassandraSpec;

  getPort(): number;
  setPort(value: number): ApacheCassandraSpec;
  hasPort(): boolean;
  clearPort(): ApacheCassandraSpec;

  getKeyspace(): string;
  setKeyspace(value: string): ApacheCassandraSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): ApacheCassandraSpec;

  getUsername(): string;
  setUsername(value: string): ApacheCassandraSpec;
  hasUsername(): boolean;
  clearUsername(): ApacheCassandraSpec;

  getPassword(): string;
  setPassword(value: string): ApacheCassandraSpec;
  hasPassword(): boolean;
  clearPassword(): ApacheCassandraSpec;

  getProtocolversion(): string;
  setProtocolversion(value: string): ApacheCassandraSpec;
  hasProtocolversion(): boolean;
  clearProtocolversion(): ApacheCassandraSpec;

  getLocaldc(): string;
  setLocaldc(value: string): ApacheCassandraSpec;
  hasLocaldc(): boolean;
  clearLocaldc(): ApacheCassandraSpec;

  getLoadbalancepolicy(): string;
  setLoadbalancepolicy(value: string): ApacheCassandraSpec;
  hasLoadbalancepolicy(): boolean;
  clearLoadbalancepolicy(): ApacheCassandraSpec;

  getUrl(): string;
  setUrl(value: string): ApacheCassandraSpec;
  hasUrl(): boolean;
  clearUrl(): ApacheCassandraSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheCassandraSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheCassandraSpec): ApacheCassandraSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheCassandraSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheCassandraSpec;
  static deserializeBinaryFromReader(message: ApacheCassandraSpec, reader: jspb.BinaryReader): ApacheCassandraSpec;
}

export namespace ApacheCassandraSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    protocolversion?: string,
    localdc?: string,
    loadbalancepolicy?: string,
    url?: string,
  }
}

export class ApacheDrillSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheDrillSpec;
  hasHost(): boolean;
  clearHost(): ApacheDrillSpec;

  getPort(): number;
  setPort(value: number): ApacheDrillSpec;
  hasPort(): boolean;
  clearPort(): ApacheDrillSpec;

  getKeyspace(): string;
  setKeyspace(value: string): ApacheDrillSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): ApacheDrillSpec;

  getUsername(): string;
  setUsername(value: string): ApacheDrillSpec;
  hasUsername(): boolean;
  clearUsername(): ApacheDrillSpec;

  getPassword(): string;
  setPassword(value: string): ApacheDrillSpec;
  hasPassword(): boolean;
  clearPassword(): ApacheDrillSpec;

  getUrl(): string;
  setUrl(value: string): ApacheDrillSpec;
  hasUrl(): boolean;
  clearUrl(): ApacheDrillSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheDrillSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheDrillSpec): ApacheDrillSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheDrillSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheDrillSpec;
  static deserializeBinaryFromReader(message: ApacheDrillSpec, reader: jspb.BinaryReader): ApacheDrillSpec;
}

export namespace ApacheDrillSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class ApacheDruidSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheDruidSpec;
  hasHost(): boolean;
  clearHost(): ApacheDruidSpec;

  getPort(): number;
  setPort(value: number): ApacheDruidSpec;
  hasPort(): boolean;
  clearPort(): ApacheDruidSpec;

  getKeyspace(): string;
  setKeyspace(value: string): ApacheDruidSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): ApacheDruidSpec;

  getUsername(): string;
  setUsername(value: string): ApacheDruidSpec;
  hasUsername(): boolean;
  clearUsername(): ApacheDruidSpec;

  getPassword(): string;
  setPassword(value: string): ApacheDruidSpec;
  hasPassword(): boolean;
  clearPassword(): ApacheDruidSpec;

  getUrl(): string;
  setUrl(value: string): ApacheDruidSpec;
  hasUrl(): boolean;
  clearUrl(): ApacheDruidSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheDruidSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheDruidSpec): ApacheDruidSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheDruidSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheDruidSpec;
  static deserializeBinaryFromReader(message: ApacheDruidSpec, reader: jspb.BinaryReader): ApacheDruidSpec;
}

export namespace ApacheDruidSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class ApacheHiveSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheHiveSpec;
  hasHost(): boolean;
  clearHost(): ApacheHiveSpec;

  getPort(): number;
  setPort(value: number): ApacheHiveSpec;
  hasPort(): boolean;
  clearPort(): ApacheHiveSpec;

  getSchema(): string;
  setSchema(value: string): ApacheHiveSpec;
  hasSchema(): boolean;
  clearSchema(): ApacheHiveSpec;

  getUsername(): string;
  setUsername(value: string): ApacheHiveSpec;
  hasUsername(): boolean;
  clearUsername(): ApacheHiveSpec;

  getPassword(): string;
  setPassword(value: string): ApacheHiveSpec;
  hasPassword(): boolean;
  clearPassword(): ApacheHiveSpec;

  getUrl(): string;
  setUrl(value: string): ApacheHiveSpec;
  hasUrl(): boolean;
  clearUrl(): ApacheHiveSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheHiveSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheHiveSpec): ApacheHiveSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheHiveSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheHiveSpec;
  static deserializeBinaryFromReader(message: ApacheHiveSpec, reader: jspb.BinaryReader): ApacheHiveSpec;
}

export namespace ApacheHiveSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    schema?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class ApacheSparkSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheSparkSpec;
  hasHost(): boolean;
  clearHost(): ApacheSparkSpec;

  getPort(): number;
  setPort(value: number): ApacheSparkSpec;
  hasPort(): boolean;
  clearPort(): ApacheSparkSpec;

  getSchema(): string;
  setSchema(value: string): ApacheSparkSpec;
  hasSchema(): boolean;
  clearSchema(): ApacheSparkSpec;

  getUsername(): string;
  setUsername(value: string): ApacheSparkSpec;
  hasUsername(): boolean;
  clearUsername(): ApacheSparkSpec;

  getPassword(): string;
  setPassword(value: string): ApacheSparkSpec;
  hasPassword(): boolean;
  clearPassword(): ApacheSparkSpec;

  getUrl(): string;
  setUrl(value: string): ApacheSparkSpec;
  hasUrl(): boolean;
  clearUrl(): ApacheSparkSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheSparkSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheSparkSpec): ApacheSparkSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheSparkSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheSparkSpec;
  static deserializeBinaryFromReader(message: ApacheSparkSpec, reader: jspb.BinaryReader): ApacheSparkSpec;
}

export namespace ApacheSparkSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    schema?: string,
    username?: string,
    password?: string,
    url?: string,
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

export class AvatarSpec extends jspb.Message {
  getBucketname(): string;
  setBucketname(value: string): AvatarSpec;
  hasBucketname(): boolean;
  clearBucketname(): AvatarSpec;

  getPath(): string;
  setPath(value: string): AvatarSpec;
  hasPath(): boolean;
  clearPath(): AvatarSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvatarSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AvatarSpec): AvatarSpec.AsObject;
  static serializeBinaryToWriter(message: AvatarSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvatarSpec;
  static deserializeBinaryFromReader(message: AvatarSpec, reader: jspb.BinaryReader): AvatarSpec;
}

export namespace AvatarSpec {
  export type AsObject = {
    bucketname?: string,
    path?: string,
  }
}

export class AwsS3Spec extends jspb.Message {
  getDefaultregion(): string;
  setDefaultregion(value: string): AwsS3Spec;
  hasDefaultregion(): boolean;
  clearDefaultregion(): AwsS3Spec;

  getAccesskey(): string;
  setAccesskey(value: string): AwsS3Spec;
  hasAccesskey(): boolean;
  clearAccesskey(): AwsS3Spec;

  getSecretkey(): string;
  setSecretkey(value: string): AwsS3Spec;
  hasSecretkey(): boolean;
  clearSecretkey(): AwsS3Spec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwsS3Spec.AsObject;
  static toObject(includeInstance: boolean, msg: AwsS3Spec): AwsS3Spec.AsObject;
  static serializeBinaryToWriter(message: AwsS3Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwsS3Spec;
  static deserializeBinaryFromReader(message: AwsS3Spec, reader: jspb.BinaryReader): AwsS3Spec;
}

export namespace AwsS3Spec {
  export type AsObject = {
    defaultregion?: string,
    accesskey?: string,
    secretkey?: string,
  }
}

export class AzureSQLDatabaseSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): AzureSQLDatabaseSpec;
  hasHost(): boolean;
  clearHost(): AzureSQLDatabaseSpec;

  getPort(): number;
  setPort(value: number): AzureSQLDatabaseSpec;
  hasPort(): boolean;
  clearPort(): AzureSQLDatabaseSpec;

  getUsername(): string;
  setUsername(value: string): AzureSQLDatabaseSpec;
  hasUsername(): boolean;
  clearUsername(): AzureSQLDatabaseSpec;

  getPassword(): string;
  setPassword(value: string): AzureSQLDatabaseSpec;
  hasPassword(): boolean;
  clearPassword(): AzureSQLDatabaseSpec;

  getDatabase(): string;
  setDatabase(value: string): AzureSQLDatabaseSpec;
  hasDatabase(): boolean;
  clearDatabase(): AzureSQLDatabaseSpec;

  getUrl(): string;
  setUrl(value: string): AzureSQLDatabaseSpec;
  hasUrl(): boolean;
  clearUrl(): AzureSQLDatabaseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureSQLDatabaseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AzureSQLDatabaseSpec): AzureSQLDatabaseSpec.AsObject;
  static serializeBinaryToWriter(message: AzureSQLDatabaseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureSQLDatabaseSpec;
  static deserializeBinaryFromReader(message: AzureSQLDatabaseSpec, reader: jspb.BinaryReader): AzureSQLDatabaseSpec;
}

export namespace AzureSQLDatabaseSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    username?: string,
    password?: string,
    database?: string,
    url?: string,
  }
}

export class AzureStorageSpec extends jspb.Message {
  getStorageaccount(): string;
  setStorageaccount(value: string): AzureStorageSpec;
  hasStorageaccount(): boolean;
  clearStorageaccount(): AzureStorageSpec;

  getAccesskey(): string;
  setAccesskey(value: string): AzureStorageSpec;
  hasAccesskey(): boolean;
  clearAccesskey(): AzureStorageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageSpec): AzureStorageSpec.AsObject;
  static serializeBinaryToWriter(message: AzureStorageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageSpec;
  static deserializeBinaryFromReader(message: AzureStorageSpec, reader: jspb.BinaryReader): AzureStorageSpec;
}

export namespace AzureStorageSpec {
  export type AsObject = {
    storageaccount?: string,
    accesskey?: string,
  }
}

export class BitbucketSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): BitbucketSpec;
  hasToken(): boolean;
  clearToken(): BitbucketSpec;

  getUsername(): string;
  setUsername(value: string): BitbucketSpec;
  hasUsername(): boolean;
  clearUsername(): BitbucketSpec;

  getSsh(): string;
  setSsh(value: string): BitbucketSpec;
  hasSsh(): boolean;
  clearSsh(): BitbucketSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BitbucketSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BitbucketSpec): BitbucketSpec.AsObject;
  static serializeBinaryToWriter(message: BitbucketSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BitbucketSpec;
  static deserializeBinaryFromReader(message: BitbucketSpec, reader: jspb.BinaryReader): BitbucketSpec;
}

export namespace BitbucketSpec {
  export type AsObject = {
    token?: string,
    username?: string,
    ssh?: string,
  }
}

export class BoxSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): BoxSpec;
  hasToken(): boolean;
  clearToken(): BoxSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BoxSpec): BoxSpec.AsObject;
  static serializeBinaryToWriter(message: BoxSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxSpec;
  static deserializeBinaryFromReader(message: BoxSpec, reader: jspb.BinaryReader): BoxSpec;
}

export namespace BoxSpec {
  export type AsObject = {
    token?: string,
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

export class ClickHouseSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ClickHouseSpec;
  hasHost(): boolean;
  clearHost(): ClickHouseSpec;

  getPort(): number;
  setPort(value: number): ClickHouseSpec;
  hasPort(): boolean;
  clearPort(): ClickHouseSpec;

  getDatabase(): string;
  setDatabase(value: string): ClickHouseSpec;
  hasDatabase(): boolean;
  clearDatabase(): ClickHouseSpec;

  getUsername(): string;
  setUsername(value: string): ClickHouseSpec;
  hasUsername(): boolean;
  clearUsername(): ClickHouseSpec;

  getPassword(): string;
  setPassword(value: string): ClickHouseSpec;
  hasPassword(): boolean;
  clearPassword(): ClickHouseSpec;

  getUrl(): string;
  setUrl(value: string): ClickHouseSpec;
  hasUrl(): boolean;
  clearUrl(): ClickHouseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickHouseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ClickHouseSpec): ClickHouseSpec.AsObject;
  static serializeBinaryToWriter(message: ClickHouseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickHouseSpec;
  static deserializeBinaryFromReader(message: ClickHouseSpec, reader: jspb.BinaryReader): ClickHouseSpec;
}

export namespace ClickHouseSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class CockroachDBSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): CockroachDBSpec;
  hasHost(): boolean;
  clearHost(): CockroachDBSpec;

  getPort(): number;
  setPort(value: number): CockroachDBSpec;
  hasPort(): boolean;
  clearPort(): CockroachDBSpec;

  getDatabase(): string;
  setDatabase(value: string): CockroachDBSpec;
  hasDatabase(): boolean;
  clearDatabase(): CockroachDBSpec;

  getUsername(): string;
  setUsername(value: string): CockroachDBSpec;
  hasUsername(): boolean;
  clearUsername(): CockroachDBSpec;

  getPassword(): string;
  setPassword(value: string): CockroachDBSpec;
  hasPassword(): boolean;
  clearPassword(): CockroachDBSpec;

  getUrl(): string;
  setUrl(value: string): CockroachDBSpec;
  hasUrl(): boolean;
  clearUrl(): CockroachDBSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CockroachDBSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CockroachDBSpec): CockroachDBSpec.AsObject;
  static serializeBinaryToWriter(message: CockroachDBSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CockroachDBSpec;
  static deserializeBinaryFromReader(message: CockroachDBSpec, reader: jspb.BinaryReader): CockroachDBSpec;
}

export namespace CockroachDBSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
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

  getSecretref(): k8s_io_api_core_v1_generated_pb.SecretReference | undefined;
  setSecretref(value?: k8s_io_api_core_v1_generated_pb.SecretReference): ConnectionSpec;
  hasSecretref(): boolean;
  clearSecretref(): ConnectionSpec;

  getAthena(): AmazonAthenaSpec | undefined;
  setAthena(value?: AmazonAthenaSpec): ConnectionSpec;
  hasAthena(): boolean;
  clearAthena(): ConnectionSpec;

  getDrill(): ApacheDrillSpec | undefined;
  setDrill(value?: ApacheDrillSpec): ConnectionSpec;
  hasDrill(): boolean;
  clearDrill(): ConnectionSpec;

  getDruid(): ApacheDruidSpec | undefined;
  setDruid(value?: ApacheDruidSpec): ConnectionSpec;
  hasDruid(): boolean;
  clearDruid(): ConnectionSpec;

  getHive(): ApacheHiveSpec | undefined;
  setHive(value?: ApacheHiveSpec): ConnectionSpec;
  hasHive(): boolean;
  clearHive(): ConnectionSpec;

  getRedshift(): AmazonRedShiftSpec | undefined;
  setRedshift(value?: AmazonRedShiftSpec): ConnectionSpec;
  hasRedshift(): boolean;
  clearRedshift(): ConnectionSpec;

  getDremio(): DremioSpec | undefined;
  setDremio(value?: DremioSpec): ConnectionSpec;
  hasDremio(): boolean;
  clearDremio(): ConnectionSpec;

  getDb2(): DB2Spec | undefined;
  setDb2(value?: DB2Spec): ConnectionSpec;
  hasDb2(): boolean;
  clearDb2(): ConnectionSpec;

  getBigquery(): GcpBigQuerySpec | undefined;
  setBigquery(value?: GcpBigQuerySpec): ConnectionSpec;
  hasBigquery(): boolean;
  clearBigquery(): ConnectionSpec;

  getCassandra(): ApacheCassandraSpec | undefined;
  setCassandra(value?: ApacheCassandraSpec): ConnectionSpec;
  hasCassandra(): boolean;
  clearCassandra(): ConnectionSpec;

  getAzuresqldatabase(): AzureSQLDatabaseSpec | undefined;
  setAzuresqldatabase(value?: AzureSQLDatabaseSpec): ConnectionSpec;
  hasAzuresqldatabase(): boolean;
  clearAzuresqldatabase(): ConnectionSpec;

  getMongodb(): MongoDbSpec | undefined;
  setMongodb(value?: MongoDbSpec): ConnectionSpec;
  hasMongodb(): boolean;
  clearMongodb(): ConnectionSpec;

  getMysql(): MySqlSpec | undefined;
  setMysql(value?: MySqlSpec): ConnectionSpec;
  hasMysql(): boolean;
  clearMysql(): ConnectionSpec;

  getOdbc(): OdbcSpec | undefined;
  setOdbc(value?: OdbcSpec): ConnectionSpec;
  hasOdbc(): boolean;
  clearOdbc(): ConnectionSpec;

  getOracle(): OracleSpec | undefined;
  setOracle(value?: OracleSpec): ConnectionSpec;
  hasOracle(): boolean;
  clearOracle(): ConnectionSpec;

  getPostgres(): PostgresSQLSpec | undefined;
  setPostgres(value?: PostgresSQLSpec): ConnectionSpec;
  hasPostgres(): boolean;
  clearPostgres(): ConnectionSpec;

  getPresto(): PrestoSpec | undefined;
  setPresto(value?: PrestoSpec): ConnectionSpec;
  hasPresto(): boolean;
  clearPresto(): ConnectionSpec;

  getSnowflake(): SnowflakeSpec | undefined;
  setSnowflake(value?: SnowflakeSpec): ConnectionSpec;
  hasSnowflake(): boolean;
  clearSnowflake(): ConnectionSpec;

  getSybase(): SybaseSpec | undefined;
  setSybase(value?: SybaseSpec): ConnectionSpec;
  hasSybase(): boolean;
  clearSybase(): ConnectionSpec;

  getVertica(): VerticaSpec | undefined;
  setVertica(value?: VerticaSpec): ConnectionSpec;
  hasVertica(): boolean;
  clearVertica(): ConnectionSpec;

  getCockroachdb(): CockroachDBSpec | undefined;
  setCockroachdb(value?: CockroachDBSpec): ConnectionSpec;
  hasCockroachdb(): boolean;
  clearCockroachdb(): ConnectionSpec;

  getElasticsearch(): ElasticSearchSpec | undefined;
  setElasticsearch(value?: ElasticSearchSpec): ConnectionSpec;
  hasElasticsearch(): boolean;
  clearElasticsearch(): ConnectionSpec;

  getInformix(): InformixSpec | undefined;
  setInformix(value?: InformixSpec): ConnectionSpec;
  hasInformix(): boolean;
  clearInformix(): ConnectionSpec;

  getHana(): SAPHanaSpec | undefined;
  setHana(value?: SAPHanaSpec): ConnectionSpec;
  hasHana(): boolean;
  clearHana(): ConnectionSpec;

  getTeradata(): TeradataSpec | undefined;
  setTeradata(value?: TeradataSpec): ConnectionSpec;
  hasTeradata(): boolean;
  clearTeradata(): ConnectionSpec;

  getSpanner(): GcpSpannerSpec | undefined;
  setSpanner(value?: GcpSpannerSpec): ConnectionSpec;
  hasSpanner(): boolean;
  clearSpanner(): ConnectionSpec;

  getSpark(): ApacheSparkSpec | undefined;
  setSpark(value?: ApacheSparkSpec): ConnectionSpec;
  hasSpark(): boolean;
  clearSpark(): ConnectionSpec;

  getMssqlserver(): MSSqlServerSpec | undefined;
  setMssqlserver(value?: MSSqlServerSpec): ConnectionSpec;
  hasMssqlserver(): boolean;
  clearMssqlserver(): ConnectionSpec;

  getClickhouse(): ClickHouseSpec | undefined;
  setClickhouse(value?: ClickHouseSpec): ConnectionSpec;
  hasClickhouse(): boolean;
  clearClickhouse(): ConnectionSpec;

  getGreenplum(): GreenPlumSpec | undefined;
  setGreenplum(value?: GreenPlumSpec): ConnectionSpec;
  hasGreenplum(): boolean;
  clearGreenplum(): ConnectionSpec;

  getCouchbase(): CouchbaseSpec | undefined;
  setCouchbase(value?: CouchbaseSpec): ConnectionSpec;
  hasCouchbase(): boolean;
  clearCouchbase(): ConnectionSpec;

  getExasol(): ExasolSpec | undefined;
  setExasol(value?: ExasolSpec): ConnectionSpec;
  hasExasol(): boolean;
  clearExasol(): ConnectionSpec;

  getSqlite(): SqliteSpec | undefined;
  setSqlite(value?: SqliteSpec): ConnectionSpec;
  hasSqlite(): boolean;
  clearSqlite(): ConnectionSpec;

  getSinglestore(): SingleStoreSpec | undefined;
  setSinglestore(value?: SingleStoreSpec): ConnectionSpec;
  hasSinglestore(): boolean;
  clearSinglestore(): ConnectionSpec;

  getGsheets(): GoogleSheetsSpec | undefined;
  setGsheets(value?: GoogleSheetsSpec): ConnectionSpec;
  hasGsheets(): boolean;
  clearGsheets(): ConnectionSpec;

  getAzurestorage(): AzureStorageSpec | undefined;
  setAzurestorage(value?: AzureStorageSpec): ConnectionSpec;
  hasAzurestorage(): boolean;
  clearAzurestorage(): ConnectionSpec;

  getAlicloud(): AliCloudSpec | undefined;
  setAlicloud(value?: AliCloudSpec): ConnectionSpec;
  hasAlicloud(): boolean;
  clearAlicloud(): ConnectionSpec;

  getDigitalocean(): DigitalOceanSpec | undefined;
  setDigitalocean(value?: DigitalOceanSpec): ConnectionSpec;
  hasDigitalocean(): boolean;
  clearDigitalocean(): ConnectionSpec;

  getHetzner(): HetznerSpec | undefined;
  setHetzner(value?: HetznerSpec): ConnectionSpec;
  hasHetzner(): boolean;
  clearHetzner(): ConnectionSpec;

  getGcpstorage(): GcpStorageSpec | undefined;
  setGcpstorage(value?: GcpStorageSpec): ConnectionSpec;
  hasGcpstorage(): boolean;
  clearGcpstorage(): ConnectionSpec;

  getLinode(): LinodeSpec | undefined;
  setLinode(value?: LinodeSpec): ConnectionSpec;
  hasLinode(): boolean;
  clearLinode(): ConnectionSpec;

  getMinio(): MinioSpec | undefined;
  setMinio(value?: MinioSpec): ConnectionSpec;
  hasMinio(): boolean;
  clearMinio(): ConnectionSpec;

  getOpenstack(): OpenstackSpec | undefined;
  setOpenstack(value?: OpenstackSpec): ConnectionSpec;
  hasOpenstack(): boolean;
  clearOpenstack(): ConnectionSpec;

  getOvh(): OvhSpec | undefined;
  setOvh(value?: OvhSpec): ConnectionSpec;
  hasOvh(): boolean;
  clearOvh(): ConnectionSpec;

  getAws(): AwsS3Spec | undefined;
  setAws(value?: AwsS3Spec): ConnectionSpec;
  hasAws(): boolean;
  clearAws(): ConnectionSpec;

  getSmtp(): SmtpSpec | undefined;
  setSmtp(value?: SmtpSpec): ConnectionSpec;
  hasSmtp(): boolean;
  clearSmtp(): ConnectionSpec;

  getFtp(): FtpSpec | undefined;
  setFtp(value?: FtpSpec): ConnectionSpec;
  hasFtp(): boolean;
  clearFtp(): ConnectionSpec;

  getSftp(): SFtpSpec | undefined;
  setSftp(value?: SFtpSpec): ConnectionSpec;
  hasSftp(): boolean;
  clearSftp(): ConnectionSpec;

  getDropbox(): DropboxSpec | undefined;
  setDropbox(value?: DropboxSpec): ConnectionSpec;
  hasDropbox(): boolean;
  clearDropbox(): ConnectionSpec;

  getBox(): BoxSpec | undefined;
  setBox(value?: BoxSpec): ConnectionSpec;
  hasBox(): boolean;
  clearBox(): ConnectionSpec;

  getImageregistry(): ImageRegistrySpec | undefined;
  setImageregistry(value?: ImageRegistrySpec): ConnectionSpec;
  hasImageregistry(): boolean;
  clearImageregistry(): ConnectionSpec;

  getGithub(): GithubSpec | undefined;
  setGithub(value?: GithubSpec): ConnectionSpec;
  hasGithub(): boolean;
  clearGithub(): ConnectionSpec;

  getGitlab(): GitlabSpec | undefined;
  setGitlab(value?: GitlabSpec): ConnectionSpec;
  hasGitlab(): boolean;
  clearGitlab(): ConnectionSpec;

  getBitbucket(): BitbucketSpec | undefined;
  setBitbucket(value?: BitbucketSpec): ConnectionSpec;
  hasBitbucket(): boolean;
  clearBitbucket(): ConnectionSpec;

  getSlack(): SlackSpec | undefined;
  setSlack(value?: SlackSpec): ConnectionSpec;
  hasSlack(): boolean;
  clearSlack(): ConnectionSpec;

  getMsteam(): MSTeamSpec | undefined;
  setMsteam(value?: MSTeamSpec): ConnectionSpec;
  hasMsteam(): boolean;
  clearMsteam(): ConnectionSpec;

  getMattermost(): MattermostSpec | undefined;
  setMattermost(value?: MattermostSpec): ConnectionSpec;
  hasMattermost(): boolean;
  clearMattermost(): ConnectionSpec;

  getHipchat(): HipchatSpec | undefined;
  setHipchat(value?: HipchatSpec): ConnectionSpec;
  hasHipchat(): boolean;
  clearHipchat(): ConnectionSpec;

  getVictorop(): VictorOpSpec | undefined;
  setVictorop(value?: VictorOpSpec): ConnectionSpec;
  hasVictorop(): boolean;
  clearVictorop(): ConnectionSpec;

  getPagerduty(): PagerDutySpec | undefined;
  setPagerduty(value?: PagerDutySpec): ConnectionSpec;
  hasPagerduty(): boolean;
  clearPagerduty(): ConnectionSpec;

  getPushover(): PushoverSpec | undefined;
  setPushover(value?: PushoverSpec): ConnectionSpec;
  hasPushover(): boolean;
  clearPushover(): ConnectionSpec;

  getOpsgenie(): OpsgenieSpec | undefined;
  setOpsgenie(value?: OpsgenieSpec): ConnectionSpec;
  hasOpsgenie(): boolean;
  clearOpsgenie(): ConnectionSpec;

  getWebhook(): WebhookSpec | undefined;
  setWebhook(value?: WebhookSpec): ConnectionSpec;
  hasWebhook(): boolean;
  clearWebhook(): ConnectionSpec;

  getFacebook(): FacebookSpec | undefined;
  setFacebook(value?: FacebookSpec): ConnectionSpec;
  hasFacebook(): boolean;
  clearFacebook(): ConnectionSpec;

  getTwitter(): TwitterSpec | undefined;
  setTwitter(value?: TwitterSpec): ConnectionSpec;
  hasTwitter(): boolean;
  clearTwitter(): ConnectionSpec;

  getRabbitmq(): RabbitMQSpec | undefined;
  setRabbitmq(value?: RabbitMQSpec): ConnectionSpec;
  hasRabbitmq(): boolean;
  clearRabbitmq(): ConnectionSpec;

  getKafka(): KafkaSpec | undefined;
  setKafka(value?: KafkaSpec): ConnectionSpec;
  hasKafka(): boolean;
  clearKafka(): ConnectionSpec;

  getNeo4j(): Neo4JSpec | undefined;
  setNeo4j(value?: Neo4JSpec): ConnectionSpec;
  hasNeo4j(): boolean;
  clearNeo4j(): ConnectionSpec;

  getDiscord(): DiscordSpec | undefined;
  setDiscord(value?: DiscordSpec): ConnectionSpec;
  hasDiscord(): boolean;
  clearDiscord(): ConnectionSpec;

  getInflux(): InfluxDBSpec | undefined;
  setInflux(value?: InfluxDBSpec): ConnectionSpec;
  hasInflux(): boolean;
  clearInflux(): ConnectionSpec;

  getTimescale(): TimescaleDBSpec | undefined;
  setTimescale(value?: TimescaleDBSpec): ConnectionSpec;
  hasTimescale(): boolean;
  clearTimescale(): ConnectionSpec;

  getVictoriametrics(): VictoriaMetricsSpec | undefined;
  setVictoriametrics(value?: VictoriaMetricsSpec): ConnectionSpec;
  hasVictoriametrics(): boolean;
  clearVictoriametrics(): ConnectionSpec;

  getSaleforce(): SaleforceSpec | undefined;
  setSaleforce(value?: SaleforceSpec): ConnectionSpec;
  hasSaleforce(): boolean;
  clearSaleforce(): ConnectionSpec;

  getSapcrm(): SapCRMSpec | undefined;
  setSapcrm(value?: SapCRMSpec): ConnectionSpec;
  hasSapcrm(): boolean;
  clearSapcrm(): ConnectionSpec;

  getAirtable(): AirTableSpec | undefined;
  setAirtable(value?: AirTableSpec): ConnectionSpec;
  hasAirtable(): boolean;
  clearAirtable(): ConnectionSpec;

  getAppwrite(): AirWriteSpec | undefined;
  setAppwrite(value?: AirWriteSpec): ConnectionSpec;
  hasAppwrite(): boolean;
  clearAppwrite(): ConnectionSpec;

  getOwner(): string;
  setOwner(value: string): ConnectionSpec;
  hasOwner(): boolean;
  clearOwner(): ConnectionSpec;

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
    secretref?: k8s_io_api_core_v1_generated_pb.SecretReference.AsObject,
    athena?: AmazonAthenaSpec.AsObject,
    drill?: ApacheDrillSpec.AsObject,
    druid?: ApacheDruidSpec.AsObject,
    hive?: ApacheHiveSpec.AsObject,
    redshift?: AmazonRedShiftSpec.AsObject,
    dremio?: DremioSpec.AsObject,
    db2?: DB2Spec.AsObject,
    bigquery?: GcpBigQuerySpec.AsObject,
    cassandra?: ApacheCassandraSpec.AsObject,
    azuresqldatabase?: AzureSQLDatabaseSpec.AsObject,
    mongodb?: MongoDbSpec.AsObject,
    mysql?: MySqlSpec.AsObject,
    odbc?: OdbcSpec.AsObject,
    oracle?: OracleSpec.AsObject,
    postgres?: PostgresSQLSpec.AsObject,
    presto?: PrestoSpec.AsObject,
    snowflake?: SnowflakeSpec.AsObject,
    sybase?: SybaseSpec.AsObject,
    vertica?: VerticaSpec.AsObject,
    cockroachdb?: CockroachDBSpec.AsObject,
    elasticsearch?: ElasticSearchSpec.AsObject,
    informix?: InformixSpec.AsObject,
    hana?: SAPHanaSpec.AsObject,
    teradata?: TeradataSpec.AsObject,
    spanner?: GcpSpannerSpec.AsObject,
    spark?: ApacheSparkSpec.AsObject,
    mssqlserver?: MSSqlServerSpec.AsObject,
    clickhouse?: ClickHouseSpec.AsObject,
    greenplum?: GreenPlumSpec.AsObject,
    couchbase?: CouchbaseSpec.AsObject,
    exasol?: ExasolSpec.AsObject,
    sqlite?: SqliteSpec.AsObject,
    singlestore?: SingleStoreSpec.AsObject,
    gsheets?: GoogleSheetsSpec.AsObject,
    azurestorage?: AzureStorageSpec.AsObject,
    alicloud?: AliCloudSpec.AsObject,
    digitalocean?: DigitalOceanSpec.AsObject,
    hetzner?: HetznerSpec.AsObject,
    gcpstorage?: GcpStorageSpec.AsObject,
    linode?: LinodeSpec.AsObject,
    minio?: MinioSpec.AsObject,
    openstack?: OpenstackSpec.AsObject,
    ovh?: OvhSpec.AsObject,
    aws?: AwsS3Spec.AsObject,
    smtp?: SmtpSpec.AsObject,
    ftp?: FtpSpec.AsObject,
    sftp?: SFtpSpec.AsObject,
    dropbox?: DropboxSpec.AsObject,
    box?: BoxSpec.AsObject,
    imageregistry?: ImageRegistrySpec.AsObject,
    github?: GithubSpec.AsObject,
    gitlab?: GitlabSpec.AsObject,
    bitbucket?: BitbucketSpec.AsObject,
    slack?: SlackSpec.AsObject,
    msteam?: MSTeamSpec.AsObject,
    mattermost?: MattermostSpec.AsObject,
    hipchat?: HipchatSpec.AsObject,
    victorop?: VictorOpSpec.AsObject,
    pagerduty?: PagerDutySpec.AsObject,
    pushover?: PushoverSpec.AsObject,
    opsgenie?: OpsgenieSpec.AsObject,
    webhook?: WebhookSpec.AsObject,
    facebook?: FacebookSpec.AsObject,
    twitter?: TwitterSpec.AsObject,
    rabbitmq?: RabbitMQSpec.AsObject,
    kafka?: KafkaSpec.AsObject,
    neo4j?: Neo4JSpec.AsObject,
    discord?: DiscordSpec.AsObject,
    influx?: InfluxDBSpec.AsObject,
    timescale?: TimescaleDBSpec.AsObject,
    victoriametrics?: VictoriaMetricsSpec.AsObject,
    saleforce?: SaleforceSpec.AsObject,
    sapcrm?: SapCRMSpec.AsObject,
    airtable?: AirTableSpec.AsObject,
    appwrite?: AirWriteSpec.AsObject,
    owner?: string,
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

export class CouchbaseSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): CouchbaseSpec;
  hasHost(): boolean;
  clearHost(): CouchbaseSpec;

  getPort(): number;
  setPort(value: number): CouchbaseSpec;
  hasPort(): boolean;
  clearPort(): CouchbaseSpec;

  getDatabase(): string;
  setDatabase(value: string): CouchbaseSpec;
  hasDatabase(): boolean;
  clearDatabase(): CouchbaseSpec;

  getUsername(): string;
  setUsername(value: string): CouchbaseSpec;
  hasUsername(): boolean;
  clearUsername(): CouchbaseSpec;

  getPassword(): string;
  setPassword(value: string): CouchbaseSpec;
  hasPassword(): boolean;
  clearPassword(): CouchbaseSpec;

  getDefaultbucket(): string;
  setDefaultbucket(value: string): CouchbaseSpec;
  hasDefaultbucket(): boolean;
  clearDefaultbucket(): CouchbaseSpec;

  getUrl(): string;
  setUrl(value: string): CouchbaseSpec;
  hasUrl(): boolean;
  clearUrl(): CouchbaseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CouchbaseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CouchbaseSpec): CouchbaseSpec.AsObject;
  static serializeBinaryToWriter(message: CouchbaseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CouchbaseSpec;
  static deserializeBinaryFromReader(message: CouchbaseSpec, reader: jspb.BinaryReader): CouchbaseSpec;
}

export namespace CouchbaseSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    defaultbucket?: string,
    url?: string,
  }
}

export class DB2Spec extends jspb.Message {
  getHost(): string;
  setHost(value: string): DB2Spec;
  hasHost(): boolean;
  clearHost(): DB2Spec;

  getPort(): number;
  setPort(value: number): DB2Spec;
  hasPort(): boolean;
  clearPort(): DB2Spec;

  getKeyspace(): string;
  setKeyspace(value: string): DB2Spec;
  hasKeyspace(): boolean;
  clearKeyspace(): DB2Spec;

  getUsername(): string;
  setUsername(value: string): DB2Spec;
  hasUsername(): boolean;
  clearUsername(): DB2Spec;

  getPassword(): string;
  setPassword(value: string): DB2Spec;
  hasPassword(): boolean;
  clearPassword(): DB2Spec;

  getUrl(): string;
  setUrl(value: string): DB2Spec;
  hasUrl(): boolean;
  clearUrl(): DB2Spec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DB2Spec.AsObject;
  static toObject(includeInstance: boolean, msg: DB2Spec): DB2Spec.AsObject;
  static serializeBinaryToWriter(message: DB2Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DB2Spec;
  static deserializeBinaryFromReader(message: DB2Spec, reader: jspb.BinaryReader): DB2Spec;
}

export namespace DB2Spec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class DigitalOceanSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): DigitalOceanSpec;
  hasToken(): boolean;
  clearToken(): DigitalOceanSpec;

  getAccesskey(): string;
  setAccesskey(value: string): DigitalOceanSpec;
  hasAccesskey(): boolean;
  clearAccesskey(): DigitalOceanSpec;

  getSecretkey(): string;
  setSecretkey(value: string): DigitalOceanSpec;
  hasSecretkey(): boolean;
  clearSecretkey(): DigitalOceanSpec;

  getDefaultregion(): string;
  setDefaultregion(value: string): DigitalOceanSpec;
  hasDefaultregion(): boolean;
  clearDefaultregion(): DigitalOceanSpec;

  getHost(): string;
  setHost(value: string): DigitalOceanSpec;
  hasHost(): boolean;
  clearHost(): DigitalOceanSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalOceanSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalOceanSpec): DigitalOceanSpec.AsObject;
  static serializeBinaryToWriter(message: DigitalOceanSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalOceanSpec;
  static deserializeBinaryFromReader(message: DigitalOceanSpec, reader: jspb.BinaryReader): DigitalOceanSpec;
}

export namespace DigitalOceanSpec {
  export type AsObject = {
    token?: string,
    accesskey?: string,
    secretkey?: string,
    defaultregion?: string,
    host?: string,
  }
}

export class DiscordSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): DiscordSpec;
  hasUrl(): boolean;
  clearUrl(): DiscordSpec;

  getContenttype(): string;
  setContenttype(value: string): DiscordSpec;
  hasContenttype(): boolean;
  clearContenttype(): DiscordSpec;

  getToken(): string;
  setToken(value: string): DiscordSpec;
  hasToken(): boolean;
  clearToken(): DiscordSpec;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): DiscordSpec;

  getSsl(): boolean;
  setSsl(value: boolean): DiscordSpec;
  hasSsl(): boolean;
  clearSsl(): DiscordSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscordSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DiscordSpec): DiscordSpec.AsObject;
  static serializeBinaryToWriter(message: DiscordSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscordSpec;
  static deserializeBinaryFromReader(message: DiscordSpec, reader: jspb.BinaryReader): DiscordSpec;
}

export namespace DiscordSpec {
  export type AsObject = {
    url?: string,
    contenttype?: string,
    token?: string,
    headersMap: Array<[string, string]>,
    ssl?: boolean,
  }
}

export class DremioSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): DremioSpec;
  hasHost(): boolean;
  clearHost(): DremioSpec;

  getPort(): number;
  setPort(value: number): DremioSpec;
  hasPort(): boolean;
  clearPort(): DremioSpec;

  getKeyspace(): string;
  setKeyspace(value: string): DremioSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): DremioSpec;

  getUsername(): string;
  setUsername(value: string): DremioSpec;
  hasUsername(): boolean;
  clearUsername(): DremioSpec;

  getPassword(): string;
  setPassword(value: string): DremioSpec;
  hasPassword(): boolean;
  clearPassword(): DremioSpec;

  getUrl(): string;
  setUrl(value: string): DremioSpec;
  hasUrl(): boolean;
  clearUrl(): DremioSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DremioSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DremioSpec): DremioSpec.AsObject;
  static serializeBinaryToWriter(message: DremioSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DremioSpec;
  static deserializeBinaryFromReader(message: DremioSpec, reader: jspb.BinaryReader): DremioSpec;
}

export namespace DremioSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class DropboxSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): DropboxSpec;
  hasToken(): boolean;
  clearToken(): DropboxSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxSpec): DropboxSpec.AsObject;
  static serializeBinaryToWriter(message: DropboxSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxSpec;
  static deserializeBinaryFromReader(message: DropboxSpec, reader: jspb.BinaryReader): DropboxSpec;
}

export namespace DropboxSpec {
  export type AsObject = {
    token?: string,
  }
}

export class ElasticSearchSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ElasticSearchSpec;
  hasHost(): boolean;
  clearHost(): ElasticSearchSpec;

  getPort(): number;
  setPort(value: number): ElasticSearchSpec;
  hasPort(): boolean;
  clearPort(): ElasticSearchSpec;

  getPrefix(): string;
  setPrefix(value: string): ElasticSearchSpec;
  hasPrefix(): boolean;
  clearPrefix(): ElasticSearchSpec;

  getUsername(): string;
  setUsername(value: string): ElasticSearchSpec;
  hasUsername(): boolean;
  clearUsername(): ElasticSearchSpec;

  getPassword(): string;
  setPassword(value: string): ElasticSearchSpec;
  hasPassword(): boolean;
  clearPassword(): ElasticSearchSpec;

  getUrl(): string;
  setUrl(value: string): ElasticSearchSpec;
  hasUrl(): boolean;
  clearUrl(): ElasticSearchSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElasticSearchSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ElasticSearchSpec): ElasticSearchSpec.AsObject;
  static serializeBinaryToWriter(message: ElasticSearchSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElasticSearchSpec;
  static deserializeBinaryFromReader(message: ElasticSearchSpec, reader: jspb.BinaryReader): ElasticSearchSpec;
}

export namespace ElasticSearchSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    prefix?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class ExasolSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ExasolSpec;
  hasHost(): boolean;
  clearHost(): ExasolSpec;

  getPort(): number;
  setPort(value: number): ExasolSpec;
  hasPort(): boolean;
  clearPort(): ExasolSpec;

  getUsername(): string;
  setUsername(value: string): ExasolSpec;
  hasUsername(): boolean;
  clearUsername(): ExasolSpec;

  getPassword(): string;
  setPassword(value: string): ExasolSpec;
  hasPassword(): boolean;
  clearPassword(): ExasolSpec;

  getUrl(): string;
  setUrl(value: string): ExasolSpec;
  hasUrl(): boolean;
  clearUrl(): ExasolSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExasolSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ExasolSpec): ExasolSpec.AsObject;
  static serializeBinaryToWriter(message: ExasolSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExasolSpec;
  static deserializeBinaryFromReader(message: ExasolSpec, reader: jspb.BinaryReader): ExasolSpec;
}

export namespace ExasolSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class FTPSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): FTPSpec;
  hasHost(): boolean;
  clearHost(): FTPSpec;

  getPort(): number;
  setPort(value: number): FTPSpec;
  hasPort(): boolean;
  clearPort(): FTPSpec;

  getKeyspace(): string;
  setKeyspace(value: string): FTPSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): FTPSpec;

  getUsername(): string;
  setUsername(value: string): FTPSpec;
  hasUsername(): boolean;
  clearUsername(): FTPSpec;

  getPassword(): string;
  setPassword(value: string): FTPSpec;
  hasPassword(): boolean;
  clearPassword(): FTPSpec;

  getUrl(): string;
  setUrl(value: string): FTPSpec;
  hasUrl(): boolean;
  clearUrl(): FTPSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FTPSpec): FTPSpec.AsObject;
  static serializeBinaryToWriter(message: FTPSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPSpec;
  static deserializeBinaryFromReader(message: FTPSpec, reader: jspb.BinaryReader): FTPSpec;
}

export namespace FTPSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class FacebookSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): FacebookSpec;
  hasToken(): boolean;
  clearToken(): FacebookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FacebookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FacebookSpec): FacebookSpec.AsObject;
  static serializeBinaryToWriter(message: FacebookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FacebookSpec;
  static deserializeBinaryFromReader(message: FacebookSpec, reader: jspb.BinaryReader): FacebookSpec;
}

export namespace FacebookSpec {
  export type AsObject = {
    token?: string,
  }
}

export class FeatureStoreSpec extends jspb.Message {
  getName(): string;
  setName(value: string): FeatureStoreSpec;
  hasName(): boolean;
  clearName(): FeatureStoreSpec;

  getConnectionref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setConnectionref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): FeatureStoreSpec;
  hasConnectionref(): boolean;
  clearConnectionref(): FeatureStoreSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureStoreSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureStoreSpec): FeatureStoreSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureStoreSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureStoreSpec;
  static deserializeBinaryFromReader(message: FeatureStoreSpec, reader: jspb.BinaryReader): FeatureStoreSpec;
}

export namespace FeatureStoreSpec {
  export type AsObject = {
    name?: string,
    connectionref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class FeatureStoreStatus extends jspb.Message {
  getName(): string;
  setName(value: string): FeatureStoreStatus;
  hasName(): boolean;
  clearName(): FeatureStoreStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeatureStoreStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): FeatureStoreStatus;

  getFailurereason(): string;
  setFailurereason(value: string): FeatureStoreStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): FeatureStoreStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): FeatureStoreStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): FeatureStoreStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureStoreStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureStoreStatus): FeatureStoreStatus.AsObject;
  static serializeBinaryToWriter(message: FeatureStoreStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureStoreStatus;
  static deserializeBinaryFromReader(message: FeatureStoreStatus, reader: jspb.BinaryReader): FeatureStoreStatus;
}

export namespace FeatureStoreStatus {
  export type AsObject = {
    name?: string,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason?: string,
    failuremessage?: string,
  }
}

export class FtpSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): FtpSpec;
  hasHost(): boolean;
  clearHost(): FtpSpec;

  getPort(): number;
  setPort(value: number): FtpSpec;
  hasPort(): boolean;
  clearPort(): FtpSpec;

  getUsername(): string;
  setUsername(value: string): FtpSpec;
  hasUsername(): boolean;
  clearUsername(): FtpSpec;

  getPassword(): string;
  setPassword(value: string): FtpSpec;
  hasPassword(): boolean;
  clearPassword(): FtpSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FtpSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FtpSpec): FtpSpec.AsObject;
  static serializeBinaryToWriter(message: FtpSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FtpSpec;
  static deserializeBinaryFromReader(message: FtpSpec, reader: jspb.BinaryReader): FtpSpec;
}

export namespace FtpSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    username?: string,
    password?: string,
  }
}

export class GcpBigQuerySpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): GcpBigQuerySpec;
  hasHost(): boolean;
  clearHost(): GcpBigQuerySpec;

  getPort(): number;
  setPort(value: number): GcpBigQuerySpec;
  hasPort(): boolean;
  clearPort(): GcpBigQuerySpec;

  getUsername(): string;
  setUsername(value: string): GcpBigQuerySpec;
  hasUsername(): boolean;
  clearUsername(): GcpBigQuerySpec;

  getPassword(): string;
  setPassword(value: string): GcpBigQuerySpec;
  hasPassword(): boolean;
  clearPassword(): GcpBigQuerySpec;

  getProjectid(): string;
  setProjectid(value: string): GcpBigQuerySpec;
  hasProjectid(): boolean;
  clearProjectid(): GcpBigQuerySpec;

  getOauthtype(): string;
  setOauthtype(value: string): GcpBigQuerySpec;
  hasOauthtype(): boolean;
  clearOauthtype(): GcpBigQuerySpec;

  getServiceaccountkeypath(): string;
  setServiceaccountkeypath(value: string): GcpBigQuerySpec;
  hasServiceaccountkeypath(): boolean;
  clearServiceaccountkeypath(): GcpBigQuerySpec;

  getUrl(): string;
  setUrl(value: string): GcpBigQuerySpec;
  hasUrl(): boolean;
  clearUrl(): GcpBigQuerySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcpBigQuerySpec.AsObject;
  static toObject(includeInstance: boolean, msg: GcpBigQuerySpec): GcpBigQuerySpec.AsObject;
  static serializeBinaryToWriter(message: GcpBigQuerySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcpBigQuerySpec;
  static deserializeBinaryFromReader(message: GcpBigQuerySpec, reader: jspb.BinaryReader): GcpBigQuerySpec;
}

export namespace GcpBigQuerySpec {
  export type AsObject = {
    host?: string,
    port?: number,
    username?: string,
    password?: string,
    projectid?: string,
    oauthtype?: string,
    serviceaccountkeypath?: string,
    url?: string,
  }
}

export class GcpSpannerSpec extends jspb.Message {
  getProject(): string;
  setProject(value: string): GcpSpannerSpec;
  hasProject(): boolean;
  clearProject(): GcpSpannerSpec;

  getInstance(): string;
  setInstance(value: string): GcpSpannerSpec;
  hasInstance(): boolean;
  clearInstance(): GcpSpannerSpec;

  getUsername(): string;
  setUsername(value: string): GcpSpannerSpec;
  hasUsername(): boolean;
  clearUsername(): GcpSpannerSpec;

  getPassword(): string;
  setPassword(value: string): GcpSpannerSpec;
  hasPassword(): boolean;
  clearPassword(): GcpSpannerSpec;

  getDatabase(): string;
  setDatabase(value: string): GcpSpannerSpec;
  hasDatabase(): boolean;
  clearDatabase(): GcpSpannerSpec;

  getUrl(): string;
  setUrl(value: string): GcpSpannerSpec;
  hasUrl(): boolean;
  clearUrl(): GcpSpannerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcpSpannerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GcpSpannerSpec): GcpSpannerSpec.AsObject;
  static serializeBinaryToWriter(message: GcpSpannerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcpSpannerSpec;
  static deserializeBinaryFromReader(message: GcpSpannerSpec, reader: jspb.BinaryReader): GcpSpannerSpec;
}

export namespace GcpSpannerSpec {
  export type AsObject = {
    project?: string,
    instance?: string,
    username?: string,
    password?: string,
    database?: string,
    url?: string,
  }
}

export class GcpStorageSpec extends jspb.Message {
  getKeyfile(): string;
  setKeyfile(value: string): GcpStorageSpec;
  hasKeyfile(): boolean;
  clearKeyfile(): GcpStorageSpec;

  getProject(): string;
  setProject(value: string): GcpStorageSpec;
  hasProject(): boolean;
  clearProject(): GcpStorageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcpStorageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GcpStorageSpec): GcpStorageSpec.AsObject;
  static serializeBinaryToWriter(message: GcpStorageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcpStorageSpec;
  static deserializeBinaryFromReader(message: GcpStorageSpec, reader: jspb.BinaryReader): GcpStorageSpec;
}

export namespace GcpStorageSpec {
  export type AsObject = {
    keyfile?: string,
    project?: string,
  }
}

export class GithubSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): GithubSpec;
  hasToken(): boolean;
  clearToken(): GithubSpec;

  getUsername(): string;
  setUsername(value: string): GithubSpec;
  hasUsername(): boolean;
  clearUsername(): GithubSpec;

  getSsh(): string;
  setSsh(value: string): GithubSpec;
  hasSsh(): boolean;
  clearSsh(): GithubSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GithubSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GithubSpec): GithubSpec.AsObject;
  static serializeBinaryToWriter(message: GithubSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GithubSpec;
  static deserializeBinaryFromReader(message: GithubSpec, reader: jspb.BinaryReader): GithubSpec;
}

export namespace GithubSpec {
  export type AsObject = {
    token?: string,
    username?: string,
    ssh?: string,
  }
}

export class GitlabSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): GitlabSpec;
  hasToken(): boolean;
  clearToken(): GitlabSpec;

  getSsh(): string;
  setSsh(value: string): GitlabSpec;
  hasSsh(): boolean;
  clearSsh(): GitlabSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitlabSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GitlabSpec): GitlabSpec.AsObject;
  static serializeBinaryToWriter(message: GitlabSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitlabSpec;
  static deserializeBinaryFromReader(message: GitlabSpec, reader: jspb.BinaryReader): GitlabSpec;
}

export namespace GitlabSpec {
  export type AsObject = {
    token?: string,
    ssh?: string,
  }
}

export class GoogleSheetsSpec extends jspb.Message {
  getScopes(): string;
  setScopes(value: string): GoogleSheetsSpec;
  hasScopes(): boolean;
  clearScopes(): GoogleSheetsSpec;

  getId(): string;
  setId(value: string): GoogleSheetsSpec;
  hasId(): boolean;
  clearId(): GoogleSheetsSpec;

  getDatatopull(): string;
  setDatatopull(value: string): GoogleSheetsSpec;
  hasDatatopull(): boolean;
  clearDatatopull(): GoogleSheetsSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleSheetsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleSheetsSpec): GoogleSheetsSpec.AsObject;
  static serializeBinaryToWriter(message: GoogleSheetsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleSheetsSpec;
  static deserializeBinaryFromReader(message: GoogleSheetsSpec, reader: jspb.BinaryReader): GoogleSheetsSpec;
}

export namespace GoogleSheetsSpec {
  export type AsObject = {
    scopes?: string,
    id?: string,
    datatopull?: string,
  }
}

export class GreenPlumSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): GreenPlumSpec;
  hasHost(): boolean;
  clearHost(): GreenPlumSpec;

  getPort(): number;
  setPort(value: number): GreenPlumSpec;
  hasPort(): boolean;
  clearPort(): GreenPlumSpec;

  getDatabase(): string;
  setDatabase(value: string): GreenPlumSpec;
  hasDatabase(): boolean;
  clearDatabase(): GreenPlumSpec;

  getUsername(): string;
  setUsername(value: string): GreenPlumSpec;
  hasUsername(): boolean;
  clearUsername(): GreenPlumSpec;

  getPassword(): string;
  setPassword(value: string): GreenPlumSpec;
  hasPassword(): boolean;
  clearPassword(): GreenPlumSpec;

  getUrl(): string;
  setUrl(value: string): GreenPlumSpec;
  hasUrl(): boolean;
  clearUrl(): GreenPlumSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreenPlumSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GreenPlumSpec): GreenPlumSpec.AsObject;
  static serializeBinaryToWriter(message: GreenPlumSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreenPlumSpec;
  static deserializeBinaryFromReader(message: GreenPlumSpec, reader: jspb.BinaryReader): GreenPlumSpec;
}

export namespace GreenPlumSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class HetznerSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): HetznerSpec;
  hasToken(): boolean;
  clearToken(): HetznerSpec;

  getSsh(): string;
  setSsh(value: string): HetznerSpec;
  hasSsh(): boolean;
  clearSsh(): HetznerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HetznerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: HetznerSpec): HetznerSpec.AsObject;
  static serializeBinaryToWriter(message: HetznerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HetznerSpec;
  static deserializeBinaryFromReader(message: HetznerSpec, reader: jspb.BinaryReader): HetznerSpec;
}

export namespace HetznerSpec {
  export type AsObject = {
    token?: string,
    ssh?: string,
  }
}

export class HipchatSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): HipchatSpec;
  hasUrl(): boolean;
  clearUrl(): HipchatSpec;

  getToken(): string;
  setToken(value: string): HipchatSpec;
  hasToken(): boolean;
  clearToken(): HipchatSpec;

  getRoom(): string;
  setRoom(value: string): HipchatSpec;
  hasRoom(): boolean;
  clearRoom(): HipchatSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HipchatSpec.AsObject;
  static toObject(includeInstance: boolean, msg: HipchatSpec): HipchatSpec.AsObject;
  static serializeBinaryToWriter(message: HipchatSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HipchatSpec;
  static deserializeBinaryFromReader(message: HipchatSpec, reader: jspb.BinaryReader): HipchatSpec;
}

export namespace HipchatSpec {
  export type AsObject = {
    url?: string,
    token?: string,
    room?: string,
  }
}

export class ImageRegistrySpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ImageRegistrySpec;
  hasHost(): boolean;
  clearHost(): ImageRegistrySpec;

  getUsername(): string;
  setUsername(value: string): ImageRegistrySpec;
  hasUsername(): boolean;
  clearUsername(): ImageRegistrySpec;

  getPassword(): string;
  setPassword(value: string): ImageRegistrySpec;
  hasPassword(): boolean;
  clearPassword(): ImageRegistrySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageRegistrySpec.AsObject;
  static toObject(includeInstance: boolean, msg: ImageRegistrySpec): ImageRegistrySpec.AsObject;
  static serializeBinaryToWriter(message: ImageRegistrySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageRegistrySpec;
  static deserializeBinaryFromReader(message: ImageRegistrySpec, reader: jspb.BinaryReader): ImageRegistrySpec;
}

export namespace ImageRegistrySpec {
  export type AsObject = {
    host?: string,
    username?: string,
    password?: string,
  }
}

export class InfluxDBSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): InfluxDBSpec;
  hasHost(): boolean;
  clearHost(): InfluxDBSpec;

  getPort(): number;
  setPort(value: number): InfluxDBSpec;
  hasPort(): boolean;
  clearPort(): InfluxDBSpec;

  getDatabase(): string;
  setDatabase(value: string): InfluxDBSpec;
  hasDatabase(): boolean;
  clearDatabase(): InfluxDBSpec;

  getUsername(): string;
  setUsername(value: string): InfluxDBSpec;
  hasUsername(): boolean;
  clearUsername(): InfluxDBSpec;

  getPassword(): string;
  setPassword(value: string): InfluxDBSpec;
  hasPassword(): boolean;
  clearPassword(): InfluxDBSpec;

  getUrl(): string;
  setUrl(value: string): InfluxDBSpec;
  hasUrl(): boolean;
  clearUrl(): InfluxDBSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfluxDBSpec.AsObject;
  static toObject(includeInstance: boolean, msg: InfluxDBSpec): InfluxDBSpec.AsObject;
  static serializeBinaryToWriter(message: InfluxDBSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfluxDBSpec;
  static deserializeBinaryFromReader(message: InfluxDBSpec, reader: jspb.BinaryReader): InfluxDBSpec;
}

export namespace InfluxDBSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class InformixSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): InformixSpec;
  hasHost(): boolean;
  clearHost(): InformixSpec;

  getPort(): number;
  setPort(value: number): InformixSpec;
  hasPort(): boolean;
  clearPort(): InformixSpec;

  getDatabase(): string;
  setDatabase(value: string): InformixSpec;
  hasDatabase(): boolean;
  clearDatabase(): InformixSpec;

  getUsername(): string;
  setUsername(value: string): InformixSpec;
  hasUsername(): boolean;
  clearUsername(): InformixSpec;

  getPassword(): string;
  setPassword(value: string): InformixSpec;
  hasPassword(): boolean;
  clearPassword(): InformixSpec;

  getUrl(): string;
  setUrl(value: string): InformixSpec;
  hasUrl(): boolean;
  clearUrl(): InformixSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InformixSpec.AsObject;
  static toObject(includeInstance: boolean, msg: InformixSpec): InformixSpec.AsObject;
  static serializeBinaryToWriter(message: InformixSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InformixSpec;
  static deserializeBinaryFromReader(message: InformixSpec, reader: jspb.BinaryReader): InformixSpec;
}

export namespace InformixSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
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

export class KafkaSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): KafkaSpec;
  hasHost(): boolean;
  clearHost(): KafkaSpec;

  getPort(): number;
  setPort(value: number): KafkaSpec;
  hasPort(): boolean;
  clearPort(): KafkaSpec;

  getChannel(): string;
  setChannel(value: string): KafkaSpec;
  hasChannel(): boolean;
  clearChannel(): KafkaSpec;

  getUsername(): string;
  setUsername(value: string): KafkaSpec;
  hasUsername(): boolean;
  clearUsername(): KafkaSpec;

  getPassword(): string;
  setPassword(value: string): KafkaSpec;
  hasPassword(): boolean;
  clearPassword(): KafkaSpec;

  getUrl(): string;
  setUrl(value: string): KafkaSpec;
  hasUrl(): boolean;
  clearUrl(): KafkaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KafkaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: KafkaSpec): KafkaSpec.AsObject;
  static serializeBinaryToWriter(message: KafkaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KafkaSpec;
  static deserializeBinaryFromReader(message: KafkaSpec, reader: jspb.BinaryReader): KafkaSpec;
}

export namespace KafkaSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    channel?: string,
    username?: string,
    password?: string,
    url?: string,
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

export class LinodeSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): LinodeSpec;
  hasToken(): boolean;
  clearToken(): LinodeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinodeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LinodeSpec): LinodeSpec.AsObject;
  static serializeBinaryToWriter(message: LinodeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinodeSpec;
  static deserializeBinaryFromReader(message: LinodeSpec, reader: jspb.BinaryReader): LinodeSpec;
}

export namespace LinodeSpec {
  export type AsObject = {
    token?: string,
  }
}

export class MSSqlServerSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): MSSqlServerSpec;
  hasHost(): boolean;
  clearHost(): MSSqlServerSpec;

  getPort(): number;
  setPort(value: number): MSSqlServerSpec;
  hasPort(): boolean;
  clearPort(): MSSqlServerSpec;

  getDatabase(): string;
  setDatabase(value: string): MSSqlServerSpec;
  hasDatabase(): boolean;
  clearDatabase(): MSSqlServerSpec;

  getInstance(): string;
  setInstance(value: string): MSSqlServerSpec;
  hasInstance(): boolean;
  clearInstance(): MSSqlServerSpec;

  getUsername(): string;
  setUsername(value: string): MSSqlServerSpec;
  hasUsername(): boolean;
  clearUsername(): MSSqlServerSpec;

  getPassword(): string;
  setPassword(value: string): MSSqlServerSpec;
  hasPassword(): boolean;
  clearPassword(): MSSqlServerSpec;

  getUrl(): string;
  setUrl(value: string): MSSqlServerSpec;
  hasUrl(): boolean;
  clearUrl(): MSSqlServerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MSSqlServerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MSSqlServerSpec): MSSqlServerSpec.AsObject;
  static serializeBinaryToWriter(message: MSSqlServerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MSSqlServerSpec;
  static deserializeBinaryFromReader(message: MSSqlServerSpec, reader: jspb.BinaryReader): MSSqlServerSpec;
}

export namespace MSSqlServerSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    instance?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class MSTeamSpec extends jspb.Message {
  getWebhook(): string;
  setWebhook(value: string): MSTeamSpec;
  hasWebhook(): boolean;
  clearWebhook(): MSTeamSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MSTeamSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MSTeamSpec): MSTeamSpec.AsObject;
  static serializeBinaryToWriter(message: MSTeamSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MSTeamSpec;
  static deserializeBinaryFromReader(message: MSTeamSpec, reader: jspb.BinaryReader): MSTeamSpec;
}

export namespace MSTeamSpec {
  export type AsObject = {
    webhook?: string,
  }
}

export class MattermostSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): MattermostSpec;
  hasUrl(): boolean;
  clearUrl(): MattermostSpec;

  getChannel(): string;
  setChannel(value: string): MattermostSpec;
  hasChannel(): boolean;
  clearChannel(): MattermostSpec;

  getUsername(): string;
  setUsername(value: string): MattermostSpec;
  hasUsername(): boolean;
  clearUsername(): MattermostSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MattermostSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MattermostSpec): MattermostSpec.AsObject;
  static serializeBinaryToWriter(message: MattermostSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MattermostSpec;
  static deserializeBinaryFromReader(message: MattermostSpec, reader: jspb.BinaryReader): MattermostSpec;
}

export namespace MattermostSpec {
  export type AsObject = {
    url?: string,
    channel?: string,
    username?: string,
  }
}

export class MinioSpec extends jspb.Message {
  getAccesskey(): string;
  setAccesskey(value: string): MinioSpec;
  hasAccesskey(): boolean;
  clearAccesskey(): MinioSpec;

  getSecretkey(): string;
  setSecretkey(value: string): MinioSpec;
  hasSecretkey(): boolean;
  clearSecretkey(): MinioSpec;

  getHost(): string;
  setHost(value: string): MinioSpec;
  hasHost(): boolean;
  clearHost(): MinioSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinioSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MinioSpec): MinioSpec.AsObject;
  static serializeBinaryToWriter(message: MinioSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinioSpec;
  static deserializeBinaryFromReader(message: MinioSpec, reader: jspb.BinaryReader): MinioSpec;
}

export namespace MinioSpec {
  export type AsObject = {
    accesskey?: string,
    secretkey?: string,
    host?: string,
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

export class MongoDbSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): MongoDbSpec;
  hasHost(): boolean;
  clearHost(): MongoDbSpec;

  getPort(): number;
  setPort(value: number): MongoDbSpec;
  hasPort(): boolean;
  clearPort(): MongoDbSpec;

  getDatabase(): string;
  setDatabase(value: string): MongoDbSpec;
  hasDatabase(): boolean;
  clearDatabase(): MongoDbSpec;

  getUsername(): string;
  setUsername(value: string): MongoDbSpec;
  hasUsername(): boolean;
  clearUsername(): MongoDbSpec;

  getPassword(): string;
  setPassword(value: string): MongoDbSpec;
  hasPassword(): boolean;
  clearPassword(): MongoDbSpec;

  getUrl(): string;
  setUrl(value: string): MongoDbSpec;
  hasUrl(): boolean;
  clearUrl(): MongoDbSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MongoDbSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MongoDbSpec): MongoDbSpec.AsObject;
  static serializeBinaryToWriter(message: MongoDbSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MongoDbSpec;
  static deserializeBinaryFromReader(message: MongoDbSpec, reader: jspb.BinaryReader): MongoDbSpec;
}

export namespace MongoDbSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class MySqlSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): MySqlSpec;
  hasHost(): boolean;
  clearHost(): MySqlSpec;

  getPort(): number;
  setPort(value: number): MySqlSpec;
  hasPort(): boolean;
  clearPort(): MySqlSpec;

  getDatabase(): string;
  setDatabase(value: string): MySqlSpec;
  hasDatabase(): boolean;
  clearDatabase(): MySqlSpec;

  getUsername(): string;
  setUsername(value: string): MySqlSpec;
  hasUsername(): boolean;
  clearUsername(): MySqlSpec;

  getPassword(): string;
  setPassword(value: string): MySqlSpec;
  hasPassword(): boolean;
  clearPassword(): MySqlSpec;

  getUrl(): string;
  setUrl(value: string): MySqlSpec;
  hasUrl(): boolean;
  clearUrl(): MySqlSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MySqlSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MySqlSpec): MySqlSpec.AsObject;
  static serializeBinaryToWriter(message: MySqlSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MySqlSpec;
  static deserializeBinaryFromReader(message: MySqlSpec, reader: jspb.BinaryReader): MySqlSpec;
}

export namespace MySqlSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class Neo4JSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): Neo4JSpec;
  hasHost(): boolean;
  clearHost(): Neo4JSpec;

  getPort(): number;
  setPort(value: number): Neo4JSpec;
  hasPort(): boolean;
  clearPort(): Neo4JSpec;

  getUsername(): string;
  setUsername(value: string): Neo4JSpec;
  hasUsername(): boolean;
  clearUsername(): Neo4JSpec;

  getPassword(): string;
  setPassword(value: string): Neo4JSpec;
  hasPassword(): boolean;
  clearPassword(): Neo4JSpec;

  getUrl(): string;
  setUrl(value: string): Neo4JSpec;
  hasUrl(): boolean;
  clearUrl(): Neo4JSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Neo4JSpec.AsObject;
  static toObject(includeInstance: boolean, msg: Neo4JSpec): Neo4JSpec.AsObject;
  static serializeBinaryToWriter(message: Neo4JSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Neo4JSpec;
  static deserializeBinaryFromReader(message: Neo4JSpec, reader: jspb.BinaryReader): Neo4JSpec;
}

export namespace Neo4JSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    username?: string,
    password?: string,
    url?: string,
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

export class OdbcSpec extends jspb.Message {
  getConntectionstring(): string;
  setConntectionstring(value: string): OdbcSpec;
  hasConntectionstring(): boolean;
  clearConntectionstring(): OdbcSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OdbcSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OdbcSpec): OdbcSpec.AsObject;
  static serializeBinaryToWriter(message: OdbcSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OdbcSpec;
  static deserializeBinaryFromReader(message: OdbcSpec, reader: jspb.BinaryReader): OdbcSpec;
}

export namespace OdbcSpec {
  export type AsObject = {
    conntectionstring?: string,
  }
}

export class OpenstackSpec extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): OpenstackSpec;
  hasUsername(): boolean;
  clearUsername(): OpenstackSpec;

  getTenantname(): string;
  setTenantname(value: string): OpenstackSpec;
  hasTenantname(): boolean;
  clearTenantname(): OpenstackSpec;

  getPassword(): string;
  setPassword(value: string): OpenstackSpec;
  hasPassword(): boolean;
  clearPassword(): OpenstackSpec;

  getAuthurl(): string;
  setAuthurl(value: string): OpenstackSpec;
  hasAuthurl(): boolean;
  clearAuthurl(): OpenstackSpec;

  getRegion(): string;
  setRegion(value: string): OpenstackSpec;
  hasRegion(): boolean;
  clearRegion(): OpenstackSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenstackSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OpenstackSpec): OpenstackSpec.AsObject;
  static serializeBinaryToWriter(message: OpenstackSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenstackSpec;
  static deserializeBinaryFromReader(message: OpenstackSpec, reader: jspb.BinaryReader): OpenstackSpec;
}

export namespace OpenstackSpec {
  export type AsObject = {
    username?: string,
    tenantname?: string,
    password?: string,
    authurl?: string,
    region?: string,
  }
}

export class OpsgenieSpec extends jspb.Message {
  getApiid(): string;
  setApiid(value: string): OpsgenieSpec;
  hasApiid(): boolean;
  clearApiid(): OpsgenieSpec;

  getApikey(): string;
  setApikey(value: string): OpsgenieSpec;
  hasApikey(): boolean;
  clearApikey(): OpsgenieSpec;

  getUrl(): string;
  setUrl(value: string): OpsgenieSpec;
  hasUrl(): boolean;
  clearUrl(): OpsgenieSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpsgenieSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OpsgenieSpec): OpsgenieSpec.AsObject;
  static serializeBinaryToWriter(message: OpsgenieSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpsgenieSpec;
  static deserializeBinaryFromReader(message: OpsgenieSpec, reader: jspb.BinaryReader): OpsgenieSpec;
}

export namespace OpsgenieSpec {
  export type AsObject = {
    apiid?: string,
    apikey?: string,
    url?: string,
  }
}

export class OracleSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): OracleSpec;
  hasHost(): boolean;
  clearHost(): OracleSpec;

  getPort(): number;
  setPort(value: number): OracleSpec;
  hasPort(): boolean;
  clearPort(): OracleSpec;

  getSid(): string;
  setSid(value: string): OracleSpec;
  hasSid(): boolean;
  clearSid(): OracleSpec;

  getDriver(): string;
  setDriver(value: string): OracleSpec;
  hasDriver(): boolean;
  clearDriver(): OracleSpec;

  getUsername(): string;
  setUsername(value: string): OracleSpec;
  hasUsername(): boolean;
  clearUsername(): OracleSpec;

  getPassword(): string;
  setPassword(value: string): OracleSpec;
  hasPassword(): boolean;
  clearPassword(): OracleSpec;

  getUrl(): string;
  setUrl(value: string): OracleSpec;
  hasUrl(): boolean;
  clearUrl(): OracleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSpec): OracleSpec.AsObject;
  static serializeBinaryToWriter(message: OracleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSpec;
  static deserializeBinaryFromReader(message: OracleSpec, reader: jspb.BinaryReader): OracleSpec;
}

export namespace OracleSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    sid?: string,
    driver?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class OvhSpec extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): OvhSpec;
  hasEndpoint(): boolean;
  clearEndpoint(): OvhSpec;

  getApplication(): string;
  setApplication(value: string): OvhSpec;
  hasApplication(): boolean;
  clearApplication(): OvhSpec;

  getSecret(): string;
  setSecret(value: string): OvhSpec;
  hasSecret(): boolean;
  clearSecret(): OvhSpec;

  getConsumerkey(): string;
  setConsumerkey(value: string): OvhSpec;
  hasConsumerkey(): boolean;
  clearConsumerkey(): OvhSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OvhSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OvhSpec): OvhSpec.AsObject;
  static serializeBinaryToWriter(message: OvhSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OvhSpec;
  static deserializeBinaryFromReader(message: OvhSpec, reader: jspb.BinaryReader): OvhSpec;
}

export namespace OvhSpec {
  export type AsObject = {
    endpoint?: string,
    application?: string,
    secret?: string,
    consumerkey?: string,
  }
}

export class PagerDutySpec extends jspb.Message {
  getApiid(): string;
  setApiid(value: string): PagerDutySpec;
  hasApiid(): boolean;
  clearApiid(): PagerDutySpec;

  getApikey(): string;
  setApikey(value: string): PagerDutySpec;
  hasApikey(): boolean;
  clearApikey(): PagerDutySpec;

  getUrl(): string;
  setUrl(value: string): PagerDutySpec;
  hasUrl(): boolean;
  clearUrl(): PagerDutySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PagerDutySpec.AsObject;
  static toObject(includeInstance: boolean, msg: PagerDutySpec): PagerDutySpec.AsObject;
  static serializeBinaryToWriter(message: PagerDutySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PagerDutySpec;
  static deserializeBinaryFromReader(message: PagerDutySpec, reader: jspb.BinaryReader): PagerDutySpec;
}

export namespace PagerDutySpec {
  export type AsObject = {
    apiid?: string,
    apikey?: string,
    url?: string,
  }
}

export class PostgresSQLSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): PostgresSQLSpec;
  hasHost(): boolean;
  clearHost(): PostgresSQLSpec;

  getPort(): number;
  setPort(value: number): PostgresSQLSpec;
  hasPort(): boolean;
  clearPort(): PostgresSQLSpec;

  getDatabase(): string;
  setDatabase(value: string): PostgresSQLSpec;
  hasDatabase(): boolean;
  clearDatabase(): PostgresSQLSpec;

  getSchema(): string;
  setSchema(value: string): PostgresSQLSpec;
  hasSchema(): boolean;
  clearSchema(): PostgresSQLSpec;

  getUsername(): string;
  setUsername(value: string): PostgresSQLSpec;
  hasUsername(): boolean;
  clearUsername(): PostgresSQLSpec;

  getPassword(): string;
  setPassword(value: string): PostgresSQLSpec;
  hasPassword(): boolean;
  clearPassword(): PostgresSQLSpec;

  getUrl(): string;
  setUrl(value: string): PostgresSQLSpec;
  hasUrl(): boolean;
  clearUrl(): PostgresSQLSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostgresSQLSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PostgresSQLSpec): PostgresSQLSpec.AsObject;
  static serializeBinaryToWriter(message: PostgresSQLSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostgresSQLSpec;
  static deserializeBinaryFromReader(message: PostgresSQLSpec, reader: jspb.BinaryReader): PostgresSQLSpec;
}

export namespace PostgresSQLSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    schema?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class PrestoSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): PrestoSpec;
  hasHost(): boolean;
  clearHost(): PrestoSpec;

  getPort(): number;
  setPort(value: number): PrestoSpec;
  hasPort(): boolean;
  clearPort(): PrestoSpec;

  getCatalog(): string;
  setCatalog(value: string): PrestoSpec;
  hasCatalog(): boolean;
  clearCatalog(): PrestoSpec;

  getSchema(): string;
  setSchema(value: string): PrestoSpec;
  hasSchema(): boolean;
  clearSchema(): PrestoSpec;

  getUsername(): string;
  setUsername(value: string): PrestoSpec;
  hasUsername(): boolean;
  clearUsername(): PrestoSpec;

  getPassword(): string;
  setPassword(value: string): PrestoSpec;
  hasPassword(): boolean;
  clearPassword(): PrestoSpec;

  getUrl(): string;
  setUrl(value: string): PrestoSpec;
  hasUrl(): boolean;
  clearUrl(): PrestoSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrestoSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PrestoSpec): PrestoSpec.AsObject;
  static serializeBinaryToWriter(message: PrestoSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrestoSpec;
  static deserializeBinaryFromReader(message: PrestoSpec, reader: jspb.BinaryReader): PrestoSpec;
}

export namespace PrestoSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    catalog?: string,
    schema?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class PushoverSpec extends jspb.Message {
  getApiid(): string;
  setApiid(value: string): PushoverSpec;
  hasApiid(): boolean;
  clearApiid(): PushoverSpec;

  getApikey(): string;
  setApikey(value: string): PushoverSpec;
  hasApikey(): boolean;
  clearApikey(): PushoverSpec;

  getUrl(): string;
  setUrl(value: string): PushoverSpec;
  hasUrl(): boolean;
  clearUrl(): PushoverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushoverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PushoverSpec): PushoverSpec.AsObject;
  static serializeBinaryToWriter(message: PushoverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushoverSpec;
  static deserializeBinaryFromReader(message: PushoverSpec, reader: jspb.BinaryReader): PushoverSpec;
}

export namespace PushoverSpec {
  export type AsObject = {
    apiid?: string,
    apikey?: string,
    url?: string,
  }
}

export class RabbitMQSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): RabbitMQSpec;
  hasHost(): boolean;
  clearHost(): RabbitMQSpec;

  getPort(): number;
  setPort(value: number): RabbitMQSpec;
  hasPort(): boolean;
  clearPort(): RabbitMQSpec;

  getUsername(): string;
  setUsername(value: string): RabbitMQSpec;
  hasUsername(): boolean;
  clearUsername(): RabbitMQSpec;

  getPassword(): string;
  setPassword(value: string): RabbitMQSpec;
  hasPassword(): boolean;
  clearPassword(): RabbitMQSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RabbitMQSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RabbitMQSpec): RabbitMQSpec.AsObject;
  static serializeBinaryToWriter(message: RabbitMQSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RabbitMQSpec;
  static deserializeBinaryFromReader(message: RabbitMQSpec, reader: jspb.BinaryReader): RabbitMQSpec;
}

export namespace RabbitMQSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    username?: string,
    password?: string,
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

export class SAPHanaSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SAPHanaSpec;
  hasHost(): boolean;
  clearHost(): SAPHanaSpec;

  getPort(): number;
  setPort(value: number): SAPHanaSpec;
  hasPort(): boolean;
  clearPort(): SAPHanaSpec;

  getDatabase(): string;
  setDatabase(value: string): SAPHanaSpec;
  hasDatabase(): boolean;
  clearDatabase(): SAPHanaSpec;

  getUsername(): string;
  setUsername(value: string): SAPHanaSpec;
  hasUsername(): boolean;
  clearUsername(): SAPHanaSpec;

  getPassword(): string;
  setPassword(value: string): SAPHanaSpec;
  hasPassword(): boolean;
  clearPassword(): SAPHanaSpec;

  getUrl(): string;
  setUrl(value: string): SAPHanaSpec;
  hasUrl(): boolean;
  clearUrl(): SAPHanaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SAPHanaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SAPHanaSpec): SAPHanaSpec.AsObject;
  static serializeBinaryToWriter(message: SAPHanaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SAPHanaSpec;
  static deserializeBinaryFromReader(message: SAPHanaSpec, reader: jspb.BinaryReader): SAPHanaSpec;
}

export namespace SAPHanaSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class SFTPSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SFTPSpec;
  hasHost(): boolean;
  clearHost(): SFTPSpec;

  getPort(): number;
  setPort(value: number): SFTPSpec;
  hasPort(): boolean;
  clearPort(): SFTPSpec;

  getKeyspace(): string;
  setKeyspace(value: string): SFTPSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): SFTPSpec;

  getUsername(): string;
  setUsername(value: string): SFTPSpec;
  hasUsername(): boolean;
  clearUsername(): SFTPSpec;

  getPassword(): string;
  setPassword(value: string): SFTPSpec;
  hasPassword(): boolean;
  clearPassword(): SFTPSpec;

  getUrl(): string;
  setUrl(value: string): SFTPSpec;
  hasUrl(): boolean;
  clearUrl(): SFTPSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SFTPSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SFTPSpec): SFTPSpec.AsObject;
  static serializeBinaryToWriter(message: SFTPSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SFTPSpec;
  static deserializeBinaryFromReader(message: SFTPSpec, reader: jspb.BinaryReader): SFTPSpec;
}

export namespace SFTPSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class SFtpSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SFtpSpec;
  hasHost(): boolean;
  clearHost(): SFtpSpec;

  getPort(): number;
  setPort(value: number): SFtpSpec;
  hasPort(): boolean;
  clearPort(): SFtpSpec;

  getUsername(): string;
  setUsername(value: string): SFtpSpec;
  hasUsername(): boolean;
  clearUsername(): SFtpSpec;

  getPassword(): string;
  setPassword(value: string): SFtpSpec;
  hasPassword(): boolean;
  clearPassword(): SFtpSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SFtpSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SFtpSpec): SFtpSpec.AsObject;
  static serializeBinaryToWriter(message: SFtpSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SFtpSpec;
  static deserializeBinaryFromReader(message: SFtpSpec, reader: jspb.BinaryReader): SFtpSpec;
}

export namespace SFtpSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    username?: string,
    password?: string,
  }
}

export class SaleforceSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SaleforceSpec;
  hasHost(): boolean;
  clearHost(): SaleforceSpec;

  getPort(): number;
  setPort(value: number): SaleforceSpec;
  hasPort(): boolean;
  clearPort(): SaleforceSpec;

  getKeyspace(): string;
  setKeyspace(value: string): SaleforceSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): SaleforceSpec;

  getUsername(): string;
  setUsername(value: string): SaleforceSpec;
  hasUsername(): boolean;
  clearUsername(): SaleforceSpec;

  getPassword(): string;
  setPassword(value: string): SaleforceSpec;
  hasPassword(): boolean;
  clearPassword(): SaleforceSpec;

  getUrl(): string;
  setUrl(value: string): SaleforceSpec;
  hasUrl(): boolean;
  clearUrl(): SaleforceSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaleforceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SaleforceSpec): SaleforceSpec.AsObject;
  static serializeBinaryToWriter(message: SaleforceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaleforceSpec;
  static deserializeBinaryFromReader(message: SaleforceSpec, reader: jspb.BinaryReader): SaleforceSpec;
}

export namespace SaleforceSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class SapCRMSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SapCRMSpec;
  hasHost(): boolean;
  clearHost(): SapCRMSpec;

  getPort(): number;
  setPort(value: number): SapCRMSpec;
  hasPort(): boolean;
  clearPort(): SapCRMSpec;

  getKeyspace(): string;
  setKeyspace(value: string): SapCRMSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): SapCRMSpec;

  getUsername(): string;
  setUsername(value: string): SapCRMSpec;
  hasUsername(): boolean;
  clearUsername(): SapCRMSpec;

  getPassword(): string;
  setPassword(value: string): SapCRMSpec;
  hasPassword(): boolean;
  clearPassword(): SapCRMSpec;

  getUrl(): string;
  setUrl(value: string): SapCRMSpec;
  hasUrl(): boolean;
  clearUrl(): SapCRMSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SapCRMSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SapCRMSpec): SapCRMSpec.AsObject;
  static serializeBinaryToWriter(message: SapCRMSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SapCRMSpec;
  static deserializeBinaryFromReader(message: SapCRMSpec, reader: jspb.BinaryReader): SapCRMSpec;
}

export namespace SapCRMSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class Scope extends jspb.Message {
  getName(): string;
  setName(value: string): Scope;
  hasName(): boolean;
  clearName(): Scope;

  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): Scope;
  clearActionsList(): Scope;
  addActions(value: string, index?: number): Scope;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scope.AsObject;
  static toObject(includeInstance: boolean, msg: Scope): Scope.AsObject;
  static serializeBinaryToWriter(message: Scope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scope;
  static deserializeBinaryFromReader(message: Scope, reader: jspb.BinaryReader): Scope;
}

export namespace Scope {
  export type AsObject = {
    name?: string,
    actionsList: Array<string>,
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

export class SingleStoreSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SingleStoreSpec;
  hasHost(): boolean;
  clearHost(): SingleStoreSpec;

  getPort(): number;
  setPort(value: number): SingleStoreSpec;
  hasPort(): boolean;
  clearPort(): SingleStoreSpec;

  getUsername(): string;
  setUsername(value: string): SingleStoreSpec;
  hasUsername(): boolean;
  clearUsername(): SingleStoreSpec;

  getPassword(): string;
  setPassword(value: string): SingleStoreSpec;
  hasPassword(): boolean;
  clearPassword(): SingleStoreSpec;

  getUrl(): string;
  setUrl(value: string): SingleStoreSpec;
  hasUrl(): boolean;
  clearUrl(): SingleStoreSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleStoreSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SingleStoreSpec): SingleStoreSpec.AsObject;
  static serializeBinaryToWriter(message: SingleStoreSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleStoreSpec;
  static deserializeBinaryFromReader(message: SingleStoreSpec, reader: jspb.BinaryReader): SingleStoreSpec;
}

export namespace SingleStoreSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class SlackSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): SlackSpec;
  hasToken(): boolean;
  clearToken(): SlackSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlackSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SlackSpec): SlackSpec.AsObject;
  static serializeBinaryToWriter(message: SlackSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlackSpec;
  static deserializeBinaryFromReader(message: SlackSpec, reader: jspb.BinaryReader): SlackSpec;
}

export namespace SlackSpec {
  export type AsObject = {
    token?: string,
  }
}

export class SmtpSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SmtpSpec;
  hasHost(): boolean;
  clearHost(): SmtpSpec;

  getPort(): number;
  setPort(value: number): SmtpSpec;
  hasPort(): boolean;
  clearPort(): SmtpSpec;

  getHelo(): string;
  setHelo(value: string): SmtpSpec;
  hasHelo(): boolean;
  clearHelo(): SmtpSpec;

  getEmail(): string;
  setEmail(value: string): SmtpSpec;
  hasEmail(): boolean;
  clearEmail(): SmtpSpec;

  getSsl(): boolean;
  setSsl(value: boolean): SmtpSpec;
  hasSsl(): boolean;
  clearSsl(): SmtpSpec;

  getVerifypeer(): boolean;
  setVerifypeer(value: boolean): SmtpSpec;
  hasVerifypeer(): boolean;
  clearVerifypeer(): SmtpSpec;

  getVerifyhost(): boolean;
  setVerifyhost(value: boolean): SmtpSpec;
  hasVerifyhost(): boolean;
  clearVerifyhost(): SmtpSpec;

  getPasswordauth(): boolean;
  setPasswordauth(value: boolean): SmtpSpec;
  hasPasswordauth(): boolean;
  clearPasswordauth(): SmtpSpec;

  getUsername(): string;
  setUsername(value: string): SmtpSpec;
  hasUsername(): boolean;
  clearUsername(): SmtpSpec;

  getPassword(): string;
  setPassword(value: string): SmtpSpec;
  hasPassword(): boolean;
  clearPassword(): SmtpSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmtpSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SmtpSpec): SmtpSpec.AsObject;
  static serializeBinaryToWriter(message: SmtpSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmtpSpec;
  static deserializeBinaryFromReader(message: SmtpSpec, reader: jspb.BinaryReader): SmtpSpec;
}

export namespace SmtpSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    helo?: string,
    email?: string,
    ssl?: boolean,
    verifypeer?: boolean,
    verifyhost?: boolean,
    passwordauth?: boolean,
    username?: string,
    password?: string,
  }
}

export class SnowflakeSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SnowflakeSpec;
  hasHost(): boolean;
  clearHost(): SnowflakeSpec;

  getPort(): number;
  setPort(value: number): SnowflakeSpec;
  hasPort(): boolean;
  clearPort(): SnowflakeSpec;

  getUsername(): string;
  setUsername(value: string): SnowflakeSpec;
  hasUsername(): boolean;
  clearUsername(): SnowflakeSpec;

  getPassword(): string;
  setPassword(value: string): SnowflakeSpec;
  hasPassword(): boolean;
  clearPassword(): SnowflakeSpec;

  getDatabase(): string;
  setDatabase(value: string): SnowflakeSpec;
  hasDatabase(): boolean;
  clearDatabase(): SnowflakeSpec;

  getSchema(): string;
  setSchema(value: string): SnowflakeSpec;
  hasSchema(): boolean;
  clearSchema(): SnowflakeSpec;

  getWarehouse(): string;
  setWarehouse(value: string): SnowflakeSpec;
  hasWarehouse(): boolean;
  clearWarehouse(): SnowflakeSpec;

  getRole(): string;
  setRole(value: string): SnowflakeSpec;
  hasRole(): boolean;
  clearRole(): SnowflakeSpec;

  getUrl(): string;
  setUrl(value: string): SnowflakeSpec;
  hasUrl(): boolean;
  clearUrl(): SnowflakeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnowflakeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SnowflakeSpec): SnowflakeSpec.AsObject;
  static serializeBinaryToWriter(message: SnowflakeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnowflakeSpec;
  static deserializeBinaryFromReader(message: SnowflakeSpec, reader: jspb.BinaryReader): SnowflakeSpec;
}

export namespace SnowflakeSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    username?: string,
    password?: string,
    database?: string,
    schema?: string,
    warehouse?: string,
    role?: string,
    url?: string,
  }
}

export class SqliteSpec extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): SqliteSpec;
  hasFilename(): boolean;
  clearFilename(): SqliteSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqliteSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SqliteSpec): SqliteSpec.AsObject;
  static serializeBinaryToWriter(message: SqliteSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqliteSpec;
  static deserializeBinaryFromReader(message: SqliteSpec, reader: jspb.BinaryReader): SqliteSpec;
}

export namespace SqliteSpec {
  export type AsObject = {
    filename?: string,
  }
}

export class SybaseSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SybaseSpec;
  hasHost(): boolean;
  clearHost(): SybaseSpec;

  getPort(): number;
  setPort(value: number): SybaseSpec;
  hasPort(): boolean;
  clearPort(): SybaseSpec;

  getDatabase(): string;
  setDatabase(value: string): SybaseSpec;
  hasDatabase(): boolean;
  clearDatabase(): SybaseSpec;

  getUsername(): string;
  setUsername(value: string): SybaseSpec;
  hasUsername(): boolean;
  clearUsername(): SybaseSpec;

  getPassword(): string;
  setPassword(value: string): SybaseSpec;
  hasPassword(): boolean;
  clearPassword(): SybaseSpec;

  getUrl(): string;
  setUrl(value: string): SybaseSpec;
  hasUrl(): boolean;
  clearUrl(): SybaseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SybaseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SybaseSpec): SybaseSpec.AsObject;
  static serializeBinaryToWriter(message: SybaseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SybaseSpec;
  static deserializeBinaryFromReader(message: SybaseSpec, reader: jspb.BinaryReader): SybaseSpec;
}

export namespace SybaseSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
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
  getDefaultlab(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDefaultlab(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TenantSpec;
  hasDefaultlab(): boolean;
  clearDefaultlab(): TenantSpec;

  getDefaultservingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDefaultservingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TenantSpec;
  hasDefaultservingsiteref(): boolean;
  clearDefaultservingsiteref(): TenantSpec;

  getDescription(): string;
  setDescription(value: string): TenantSpec;
  hasDescription(): boolean;
  clearDescription(): TenantSpec;

  getOwner(): string;
  setOwner(value: string): TenantSpec;
  hasOwner(): boolean;
  clearOwner(): TenantSpec;

  getBucketname(): string;
  setBucketname(value: string): TenantSpec;
  hasBucketname(): boolean;
  clearBucketname(): TenantSpec;

  getPath(): string;
  setPath(value: string): TenantSpec;
  hasPath(): boolean;
  clearPath(): TenantSpec;

  getPermissions(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec | undefined;
  setPermissions(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec): TenantSpec;
  hasPermissions(): boolean;
  clearPermissions(): TenantSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): TenantSpec;
  hasNotification(): boolean;
  clearNotification(): TenantSpec;

  getOnline(): FeatureStoreSpec | undefined;
  setOnline(value?: FeatureStoreSpec): TenantSpec;
  hasOnline(): boolean;
  clearOnline(): TenantSpec;

  getOffline(): FeatureStoreSpec | undefined;
  setOffline(value?: FeatureStoreSpec): TenantSpec;
  hasOffline(): boolean;
  clearOffline(): TenantSpec;

  getMetrics(): FeatureStoreSpec | undefined;
  setMetrics(value?: FeatureStoreSpec): TenantSpec;
  hasMetrics(): boolean;
  clearMetrics(): TenantSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TenantSpec): TenantSpec.AsObject;
  static serializeBinaryToWriter(message: TenantSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantSpec;
  static deserializeBinaryFromReader(message: TenantSpec, reader: jspb.BinaryReader): TenantSpec;
}

export namespace TenantSpec {
  export type AsObject = {
    defaultlab?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    defaultservingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    description?: string,
    owner?: string,
    bucketname?: string,
    path?: string,
    permissions?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    online?: FeatureStoreSpec.AsObject,
    offline?: FeatureStoreSpec.AsObject,
    metrics?: FeatureStoreSpec.AsObject,
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

  getOnline(): FeatureStoreStatus | undefined;
  setOnline(value?: FeatureStoreStatus): TenantStatus;
  hasOnline(): boolean;
  clearOnline(): TenantStatus;

  getOffline(): FeatureStoreStatus | undefined;
  setOffline(value?: FeatureStoreStatus): TenantStatus;
  hasOffline(): boolean;
  clearOffline(): TenantStatus;

  getMetrics(): FeatureStoreStatus | undefined;
  setMetrics(value?: FeatureStoreStatus): TenantStatus;
  hasMetrics(): boolean;
  clearMetrics(): TenantStatus;

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
    online?: FeatureStoreStatus.AsObject,
    offline?: FeatureStoreStatus.AsObject,
    metrics?: FeatureStoreStatus.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class TeradataSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): TeradataSpec;
  hasHost(): boolean;
  clearHost(): TeradataSpec;

  getPort(): number;
  setPort(value: number): TeradataSpec;
  hasPort(): boolean;
  clearPort(): TeradataSpec;

  getDatabase(): string;
  setDatabase(value: string): TeradataSpec;
  hasDatabase(): boolean;
  clearDatabase(): TeradataSpec;

  getUsername(): string;
  setUsername(value: string): TeradataSpec;
  hasUsername(): boolean;
  clearUsername(): TeradataSpec;

  getPassword(): string;
  setPassword(value: string): TeradataSpec;
  hasPassword(): boolean;
  clearPassword(): TeradataSpec;

  getUrl(): string;
  setUrl(value: string): TeradataSpec;
  hasUrl(): boolean;
  clearUrl(): TeradataSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeradataSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TeradataSpec): TeradataSpec.AsObject;
  static serializeBinaryToWriter(message: TeradataSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeradataSpec;
  static deserializeBinaryFromReader(message: TeradataSpec, reader: jspb.BinaryReader): TeradataSpec;
}

export namespace TeradataSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class TimescaleDBSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): TimescaleDBSpec;
  hasHost(): boolean;
  clearHost(): TimescaleDBSpec;

  getPort(): number;
  setPort(value: number): TimescaleDBSpec;
  hasPort(): boolean;
  clearPort(): TimescaleDBSpec;

  getKeyspace(): string;
  setKeyspace(value: string): TimescaleDBSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): TimescaleDBSpec;

  getUsername(): string;
  setUsername(value: string): TimescaleDBSpec;
  hasUsername(): boolean;
  clearUsername(): TimescaleDBSpec;

  getPassword(): string;
  setPassword(value: string): TimescaleDBSpec;
  hasPassword(): boolean;
  clearPassword(): TimescaleDBSpec;

  getUrl(): string;
  setUrl(value: string): TimescaleDBSpec;
  hasUrl(): boolean;
  clearUrl(): TimescaleDBSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimescaleDBSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TimescaleDBSpec): TimescaleDBSpec.AsObject;
  static serializeBinaryToWriter(message: TimescaleDBSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimescaleDBSpec;
  static deserializeBinaryFromReader(message: TimescaleDBSpec, reader: jspb.BinaryReader): TimescaleDBSpec;
}

export namespace TimescaleDBSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class TwitterSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): TwitterSpec;
  hasToken(): boolean;
  clearToken(): TwitterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TwitterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TwitterSpec): TwitterSpec.AsObject;
  static serializeBinaryToWriter(message: TwitterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TwitterSpec;
  static deserializeBinaryFromReader(message: TwitterSpec, reader: jspb.BinaryReader): TwitterSpec;
}

export namespace TwitterSpec {
  export type AsObject = {
    token?: string,
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

export class VerticaSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): VerticaSpec;
  hasHost(): boolean;
  clearHost(): VerticaSpec;

  getPort(): number;
  setPort(value: number): VerticaSpec;
  hasPort(): boolean;
  clearPort(): VerticaSpec;

  getDatabase(): string;
  setDatabase(value: string): VerticaSpec;
  hasDatabase(): boolean;
  clearDatabase(): VerticaSpec;

  getUsername(): string;
  setUsername(value: string): VerticaSpec;
  hasUsername(): boolean;
  clearUsername(): VerticaSpec;

  getPassword(): string;
  setPassword(value: string): VerticaSpec;
  hasPassword(): boolean;
  clearPassword(): VerticaSpec;

  getUrl(): string;
  setUrl(value: string): VerticaSpec;
  hasUrl(): boolean;
  clearUrl(): VerticaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerticaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VerticaSpec): VerticaSpec.AsObject;
  static serializeBinaryToWriter(message: VerticaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerticaSpec;
  static deserializeBinaryFromReader(message: VerticaSpec, reader: jspb.BinaryReader): VerticaSpec;
}

export namespace VerticaSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    database?: string,
    username?: string,
    password?: string,
    url?: string,
  }
}

export class VictorOpSpec extends jspb.Message {
  getApiid(): string;
  setApiid(value: string): VictorOpSpec;
  hasApiid(): boolean;
  clearApiid(): VictorOpSpec;

  getApikey(): string;
  setApikey(value: string): VictorOpSpec;
  hasApikey(): boolean;
  clearApikey(): VictorOpSpec;

  getUrl(): string;
  setUrl(value: string): VictorOpSpec;
  hasUrl(): boolean;
  clearUrl(): VictorOpSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VictorOpSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VictorOpSpec): VictorOpSpec.AsObject;
  static serializeBinaryToWriter(message: VictorOpSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VictorOpSpec;
  static deserializeBinaryFromReader(message: VictorOpSpec, reader: jspb.BinaryReader): VictorOpSpec;
}

export namespace VictorOpSpec {
  export type AsObject = {
    apiid?: string,
    apikey?: string,
    url?: string,
  }
}

export class VictoriaMetricsSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): VictoriaMetricsSpec;
  hasHost(): boolean;
  clearHost(): VictoriaMetricsSpec;

  getPort(): number;
  setPort(value: number): VictoriaMetricsSpec;
  hasPort(): boolean;
  clearPort(): VictoriaMetricsSpec;

  getKeyspace(): string;
  setKeyspace(value: string): VictoriaMetricsSpec;
  hasKeyspace(): boolean;
  clearKeyspace(): VictoriaMetricsSpec;

  getUsername(): string;
  setUsername(value: string): VictoriaMetricsSpec;
  hasUsername(): boolean;
  clearUsername(): VictoriaMetricsSpec;

  getPassword(): string;
  setPassword(value: string): VictoriaMetricsSpec;
  hasPassword(): boolean;
  clearPassword(): VictoriaMetricsSpec;

  getUrl(): string;
  setUrl(value: string): VictoriaMetricsSpec;
  hasUrl(): boolean;
  clearUrl(): VictoriaMetricsSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VictoriaMetricsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VictoriaMetricsSpec): VictoriaMetricsSpec.AsObject;
  static serializeBinaryToWriter(message: VictoriaMetricsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VictoriaMetricsSpec;
  static deserializeBinaryFromReader(message: VictoriaMetricsSpec, reader: jspb.BinaryReader): VictoriaMetricsSpec;
}

export namespace VictoriaMetricsSpec {
  export type AsObject = {
    host?: string,
    port?: number,
    keyspace?: string,
    username?: string,
    password?: string,
    url?: string,
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

export class WebhookSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): WebhookSpec;
  hasUrl(): boolean;
  clearUrl(): WebhookSpec;

  getContenttype(): string;
  setContenttype(value: string): WebhookSpec;
  hasContenttype(): boolean;
  clearContenttype(): WebhookSpec;

  getToken(): string;
  setToken(value: string): WebhookSpec;
  hasToken(): boolean;
  clearToken(): WebhookSpec;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): WebhookSpec;

  getSsl(): boolean;
  setSsl(value: boolean): WebhookSpec;
  hasSsl(): boolean;
  clearSsl(): WebhookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookSpec): WebhookSpec.AsObject;
  static serializeBinaryToWriter(message: WebhookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookSpec;
  static deserializeBinaryFromReader(message: WebhookSpec, reader: jspb.BinaryReader): WebhookSpec;
}

export namespace WebhookSpec {
  export type AsObject = {
    url?: string,
    contenttype?: string,
    token?: string,
    headersMap: Array<[string, string]>,
    ssl?: boolean,
  }
}

