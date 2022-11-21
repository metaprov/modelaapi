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

export class AccountCondition extends jspb.Message {
  getType(): string;
  setType(value: string): AccountCondition;

  getStatus(): string;
  setStatus(value: string): AccountCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AccountCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): AccountCondition;

  getReason(): string;
  setReason(value: string): AccountCondition;

  getMessage(): string;
  setMessage(value: string): AccountCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCondition.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCondition): AccountCondition.AsObject;
  static serializeBinaryToWriter(message: AccountCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCondition;
  static deserializeBinaryFromReader(message: AccountCondition, reader: jspb.BinaryReader): AccountCondition;
}

export namespace AccountCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getUsername(): string;
  setUsername(value: string): AccountSpec;

  getFirstname(): string;
  setFirstname(value: string): AccountSpec;

  getLastname(): string;
  setLastname(value: string): AccountSpec;

  getEmail(): string;
  setEmail(value: string): AccountSpec;

  getPhone(): string;
  setPhone(value: string): AccountSpec;

  getAdmin(): boolean;
  setAdmin(value: boolean): AccountSpec;

  getTeam(): boolean;
  setTeam(value: boolean): AccountSpec;

  getMemberof(): string;
  setMemberof(value: string): AccountSpec;

  getEmailpassword(): boolean;
  setEmailpassword(value: boolean): AccountSpec;

  getResetpassword(): boolean;
  setResetpassword(value: boolean): AccountSpec;

  getClearancelevel(): string;
  setClearancelevel(value: string): AccountSpec;

  getAvatar(): AvatarSpec | undefined;
  setAvatar(value?: AvatarSpec): AccountSpec;
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
    type: string,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    admin: boolean,
    team: boolean,
    memberof: string,
    emailpassword: boolean,
    resetpassword: boolean,
    clearancelevel: string,
    avatar?: AvatarSpec.AsObject,
    favoriteproductsList: Array<string>,
  }
}

export class AccountStatus extends jspb.Message {
  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AccountStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): AccountStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): AccountStatus;

  getFailurereason(): string;
  setFailurereason(value: string): AccountStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): AccountStatus;

  getTotalmodels(): number;
  setTotalmodels(value: number): AccountStatus;

  getTotalmodelclasses(): number;
  setTotalmodelclasses(value: number): AccountStatus;

  getTotalpredictors(): number;
  setTotalpredictors(value: number): AccountStatus;

  getTotalfeaturegroups(): number;
  setTotalfeaturegroups(value: number): AccountStatus;

  getConditionsList(): Array<AccountCondition>;
  setConditionsList(value: Array<AccountCondition>): AccountStatus;
  clearConditionsList(): AccountStatus;
  addConditions(value?: AccountCondition, index?: number): AccountCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AccountStatus): AccountStatus.AsObject;
  static serializeBinaryToWriter(message: AccountStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountStatus;
  static deserializeBinaryFromReader(message: AccountStatus, reader: jspb.BinaryReader): AccountStatus;
}

export namespace AccountStatus {
  export type AsObject = {
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
    totalmodels: number,
    totalmodelclasses: number,
    totalpredictors: number,
    totalfeaturegroups: number,
    conditionsList: Array<AccountCondition.AsObject>,
  }
}

export class AirTableSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): AirTableSpec;

  getPort(): number;
  setPort(value: number): AirTableSpec;

  getKeyspace(): string;
  setKeyspace(value: string): AirTableSpec;

  getUsername(): string;
  setUsername(value: string): AirTableSpec;

  getPassword(): string;
  setPassword(value: string): AirTableSpec;

  getUrl(): string;
  setUrl(value: string): AirTableSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirTableSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AirTableSpec): AirTableSpec.AsObject;
  static serializeBinaryToWriter(message: AirTableSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirTableSpec;
  static deserializeBinaryFromReader(message: AirTableSpec, reader: jspb.BinaryReader): AirTableSpec;
}

export namespace AirTableSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class AirWriteSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): AirWriteSpec;

  getPort(): number;
  setPort(value: number): AirWriteSpec;

  getKeyspace(): string;
  setKeyspace(value: string): AirWriteSpec;

  getUsername(): string;
  setUsername(value: string): AirWriteSpec;

  getPassword(): string;
  setPassword(value: string): AirWriteSpec;

  getUrl(): string;
  setUrl(value: string): AirWriteSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirWriteSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AirWriteSpec): AirWriteSpec.AsObject;
  static serializeBinaryToWriter(message: AirWriteSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirWriteSpec;
  static deserializeBinaryFromReader(message: AirWriteSpec, reader: jspb.BinaryReader): AirWriteSpec;
}

export namespace AirWriteSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
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

export class AlertCondition extends jspb.Message {
  getType(): string;
  setType(value: string): AlertCondition;

  getStatus(): string;
  setStatus(value: string): AlertCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AlertCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): AlertCondition;

  getReason(): string;
  setReason(value: string): AlertCondition;

  getMessage(): string;
  setMessage(value: string): AlertCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertCondition.AsObject;
  static toObject(includeInstance: boolean, msg: AlertCondition): AlertCondition.AsObject;
  static serializeBinaryToWriter(message: AlertCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertCondition;
  static deserializeBinaryFromReader(message: AlertCondition, reader: jspb.BinaryReader): AlertCondition;
}

export namespace AlertCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getMessage(): string;
  setMessage(value: string): AlertSpec;

  getLevel(): string;
  setLevel(value: string): AlertSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): AlertSpec;
  hasEntityref(): boolean;
  clearEntityref(): AlertSpec;

  getNotifiername(): string;
  setNotifiername(value: string): AlertSpec;

  getOwner(): string;
  setOwner(value: string): AlertSpec;

  getTtl(): number;
  setTtl(value: number): AlertSpec;

  getFieldsMap(): jspb.Map<string, string>;
  clearFieldsMap(): AlertSpec;

  getUrl(): string;
  setUrl(value: string): AlertSpec;

  getImage(): string;
  setImage(value: string): AlertSpec;

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
    subject: string,
    message: string,
    level: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    notifiername: string,
    owner: string,
    ttl: number,
    fieldsMap: Array<[string, string]>,
    url: string,
    image: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class AlertStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): AlertStatus;

  getAt(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setAt(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AlertStatus;
  hasAt(): boolean;
  clearAt(): AlertStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): AlertStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AlertStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): AlertStatus;

  getFailurereason(): string;
  setFailurereason(value: string): AlertStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): AlertStatus;

  getConditionsList(): Array<AlertCondition>;
  setConditionsList(value: Array<AlertCondition>): AlertStatus;
  clearConditionsList(): AlertStatus;
  addConditions(value?: AlertCondition, index?: number): AlertCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlertStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AlertStatus): AlertStatus.AsObject;
  static serializeBinaryToWriter(message: AlertStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlertStatus;
  static deserializeBinaryFromReader(message: AlertStatus, reader: jspb.BinaryReader): AlertStatus;
}

export namespace AlertStatus {
  export type AsObject = {
    phase: string,
    at?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<AlertCondition.AsObject>,
  }
}

export class AliCloudSpec extends jspb.Message {
  getAccesskey(): string;
  setAccesskey(value: string): AliCloudSpec;

  getSecretkey(): string;
  setSecretkey(value: string): AliCloudSpec;

  getRegion(): string;
  setRegion(value: string): AliCloudSpec;

  getHost(): string;
  setHost(value: string): AliCloudSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AliCloudSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AliCloudSpec): AliCloudSpec.AsObject;
  static serializeBinaryToWriter(message: AliCloudSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AliCloudSpec;
  static deserializeBinaryFromReader(message: AliCloudSpec, reader: jspb.BinaryReader): AliCloudSpec;
}

export namespace AliCloudSpec {
  export type AsObject = {
    accesskey: string,
    secretkey: string,
    region: string,
    host: string,
  }
}

export class AmazonAthenaSpec extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): AmazonAthenaSpec;

  getUsername(): string;
  setUsername(value: string): AmazonAthenaSpec;

  getPassword(): string;
  setPassword(value: string): AmazonAthenaSpec;

  getRegion(): string;
  setRegion(value: string): AmazonAthenaSpec;

  getUrl(): string;
  setUrl(value: string): AmazonAthenaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmazonAthenaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AmazonAthenaSpec): AmazonAthenaSpec.AsObject;
  static serializeBinaryToWriter(message: AmazonAthenaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmazonAthenaSpec;
  static deserializeBinaryFromReader(message: AmazonAthenaSpec, reader: jspb.BinaryReader): AmazonAthenaSpec;
}

export namespace AmazonAthenaSpec {
  export type AsObject = {
    hostname: string,
    username: string,
    password: string,
    region: string,
    url: string,
  }
}

export class AmazonRedShiftSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): AmazonRedShiftSpec;

  getPort(): number;
  setPort(value: number): AmazonRedShiftSpec;

  getDatabase(): string;
  setDatabase(value: string): AmazonRedShiftSpec;

  getUsername(): string;
  setUsername(value: string): AmazonRedShiftSpec;

  getPassword(): string;
  setPassword(value: string): AmazonRedShiftSpec;

  getUrl(): string;
  setUrl(value: string): AmazonRedShiftSpec;

  getRegion(): string;
  setRegion(value: string): AmazonRedShiftSpec;

  getClusterid(): string;
  setClusterid(value: string): AmazonRedShiftSpec;

  getS3staginglocation(): string;
  setS3staginglocation(value: string): AmazonRedShiftSpec;

  getIamrole(): string;
  setIamrole(value: string): AmazonRedShiftSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmazonRedShiftSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AmazonRedShiftSpec): AmazonRedShiftSpec.AsObject;
  static serializeBinaryToWriter(message: AmazonRedShiftSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmazonRedShiftSpec;
  static deserializeBinaryFromReader(message: AmazonRedShiftSpec, reader: jspb.BinaryReader): AmazonRedShiftSpec;
}

export namespace AmazonRedShiftSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
    region: string,
    clusterid: string,
    s3staginglocation: string,
    iamrole: string,
  }
}

export class ApacheCassandraSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheCassandraSpec;

  getPort(): number;
  setPort(value: number): ApacheCassandraSpec;

  getKeyspace(): string;
  setKeyspace(value: string): ApacheCassandraSpec;

  getUsername(): string;
  setUsername(value: string): ApacheCassandraSpec;

  getPassword(): string;
  setPassword(value: string): ApacheCassandraSpec;

  getProtocolversion(): string;
  setProtocolversion(value: string): ApacheCassandraSpec;

  getLocaldc(): string;
  setLocaldc(value: string): ApacheCassandraSpec;

  getLoadbalancepolicy(): string;
  setLoadbalancepolicy(value: string): ApacheCassandraSpec;

  getUrl(): string;
  setUrl(value: string): ApacheCassandraSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheCassandraSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheCassandraSpec): ApacheCassandraSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheCassandraSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheCassandraSpec;
  static deserializeBinaryFromReader(message: ApacheCassandraSpec, reader: jspb.BinaryReader): ApacheCassandraSpec;
}

export namespace ApacheCassandraSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    protocolversion: string,
    localdc: string,
    loadbalancepolicy: string,
    url: string,
  }
}

export class ApacheDrillSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheDrillSpec;

  getPort(): number;
  setPort(value: number): ApacheDrillSpec;

  getKeyspace(): string;
  setKeyspace(value: string): ApacheDrillSpec;

  getUsername(): string;
  setUsername(value: string): ApacheDrillSpec;

  getPassword(): string;
  setPassword(value: string): ApacheDrillSpec;

  getUrl(): string;
  setUrl(value: string): ApacheDrillSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheDrillSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheDrillSpec): ApacheDrillSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheDrillSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheDrillSpec;
  static deserializeBinaryFromReader(message: ApacheDrillSpec, reader: jspb.BinaryReader): ApacheDrillSpec;
}

export namespace ApacheDrillSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class ApacheDruidSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheDruidSpec;

  getPort(): number;
  setPort(value: number): ApacheDruidSpec;

  getKeyspace(): string;
  setKeyspace(value: string): ApacheDruidSpec;

  getUsername(): string;
  setUsername(value: string): ApacheDruidSpec;

  getPassword(): string;
  setPassword(value: string): ApacheDruidSpec;

  getUrl(): string;
  setUrl(value: string): ApacheDruidSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheDruidSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheDruidSpec): ApacheDruidSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheDruidSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheDruidSpec;
  static deserializeBinaryFromReader(message: ApacheDruidSpec, reader: jspb.BinaryReader): ApacheDruidSpec;
}

export namespace ApacheDruidSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class ApacheHiveSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheHiveSpec;

  getPort(): number;
  setPort(value: number): ApacheHiveSpec;

  getSchema(): string;
  setSchema(value: string): ApacheHiveSpec;

  getUsername(): string;
  setUsername(value: string): ApacheHiveSpec;

  getPassword(): string;
  setPassword(value: string): ApacheHiveSpec;

  getUrl(): string;
  setUrl(value: string): ApacheHiveSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheHiveSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheHiveSpec): ApacheHiveSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheHiveSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheHiveSpec;
  static deserializeBinaryFromReader(message: ApacheHiveSpec, reader: jspb.BinaryReader): ApacheHiveSpec;
}

export namespace ApacheHiveSpec {
  export type AsObject = {
    host: string,
    port: number,
    schema: string,
    username: string,
    password: string,
    url: string,
  }
}

export class ApacheSparkSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ApacheSparkSpec;

  getPort(): number;
  setPort(value: number): ApacheSparkSpec;

  getSchema(): string;
  setSchema(value: string): ApacheSparkSpec;

  getUsername(): string;
  setUsername(value: string): ApacheSparkSpec;

  getPassword(): string;
  setPassword(value: string): ApacheSparkSpec;

  getUrl(): string;
  setUrl(value: string): ApacheSparkSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApacheSparkSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApacheSparkSpec): ApacheSparkSpec.AsObject;
  static serializeBinaryToWriter(message: ApacheSparkSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApacheSparkSpec;
  static deserializeBinaryFromReader(message: ApacheSparkSpec, reader: jspb.BinaryReader): ApacheSparkSpec;
}

export namespace ApacheSparkSpec {
  export type AsObject = {
    host: string,
    port: number,
    schema: string,
    username: string,
    password: string,
    url: string,
  }
}

export class ApiToken extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ApiToken;
  hasMetadata(): boolean;
  clearMetadata(): ApiToken;

  getSpec(): ApiTokenSpec | undefined;
  setSpec(value?: ApiTokenSpec): ApiToken;
  hasSpec(): boolean;
  clearSpec(): ApiToken;

  getStatus(): ApiTokenStatus | undefined;
  setStatus(value?: ApiTokenStatus): ApiToken;
  hasStatus(): boolean;
  clearStatus(): ApiToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiToken.AsObject;
  static toObject(includeInstance: boolean, msg: ApiToken): ApiToken.AsObject;
  static serializeBinaryToWriter(message: ApiToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiToken;
  static deserializeBinaryFromReader(message: ApiToken, reader: jspb.BinaryReader): ApiToken;
}

export namespace ApiToken {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ApiTokenSpec.AsObject,
    status?: ApiTokenStatus.AsObject,
  }
}

export class ApiTokenCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ApiTokenCondition;

  getStatus(): string;
  setStatus(value: string): ApiTokenCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ApiTokenCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ApiTokenCondition;

  getReason(): string;
  setReason(value: string): ApiTokenCondition;

  getMessage(): string;
  setMessage(value: string): ApiTokenCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTokenCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTokenCondition): ApiTokenCondition.AsObject;
  static serializeBinaryToWriter(message: ApiTokenCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTokenCondition;
  static deserializeBinaryFromReader(message: ApiTokenCondition, reader: jspb.BinaryReader): ApiTokenCondition;
}

export namespace ApiTokenCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ApiTokenList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ApiTokenList;
  hasMetadata(): boolean;
  clearMetadata(): ApiTokenList;

  getItemsList(): Array<ApiToken>;
  setItemsList(value: Array<ApiToken>): ApiTokenList;
  clearItemsList(): ApiTokenList;
  addItems(value?: ApiToken, index?: number): ApiToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTokenList.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTokenList): ApiTokenList.AsObject;
  static serializeBinaryToWriter(message: ApiTokenList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTokenList;
  static deserializeBinaryFromReader(message: ApiTokenList, reader: jspb.BinaryReader): ApiTokenList;
}

export namespace ApiTokenList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ApiToken.AsObject>,
  }
}

export class ApiTokenSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): ApiTokenSpec;

  getScopesList(): Array<Scope>;
  setScopesList(value: Array<Scope>): ApiTokenSpec;
  clearScopesList(): ApiTokenSpec;
  addScopes(value?: Scope, index?: number): Scope;

  getOwner(): string;
  setOwner(value: string): ApiTokenSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTokenSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTokenSpec): ApiTokenSpec.AsObject;
  static serializeBinaryToWriter(message: ApiTokenSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTokenSpec;
  static deserializeBinaryFromReader(message: ApiTokenSpec, reader: jspb.BinaryReader): ApiTokenSpec;
}

export namespace ApiTokenSpec {
  export type AsObject = {
    description: string,
    scopesList: Array<Scope.AsObject>,
    owner: string,
  }
}

export class ApiTokenStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ApiTokenStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ApiTokenStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ApiTokenStatus;

  getConditionsList(): Array<ApiTokenCondition>;
  setConditionsList(value: Array<ApiTokenCondition>): ApiTokenStatus;
  clearConditionsList(): ApiTokenStatus;
  addConditions(value?: ApiTokenCondition, index?: number): ApiTokenCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTokenStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTokenStatus): ApiTokenStatus.AsObject;
  static serializeBinaryToWriter(message: ApiTokenStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTokenStatus;
  static deserializeBinaryFromReader(message: ApiTokenStatus, reader: jspb.BinaryReader): ApiTokenStatus;
}

export namespace ApiTokenStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<ApiTokenCondition.AsObject>,
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

export class AttachmentCondition extends jspb.Message {
  getType(): string;
  setType(value: string): AttachmentCondition;

  getStatus(): string;
  setStatus(value: string): AttachmentCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AttachmentCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): AttachmentCondition;

  getReason(): string;
  setReason(value: string): AttachmentCondition;

  getMessage(): string;
  setMessage(value: string): AttachmentCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentCondition.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentCondition): AttachmentCondition.AsObject;
  static serializeBinaryToWriter(message: AttachmentCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentCondition;
  static deserializeBinaryFromReader(message: AttachmentCondition, reader: jspb.BinaryReader): AttachmentCondition;
}

export namespace AttachmentCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getDescription(): string;
  setDescription(value: string): AttachmentSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): AttachmentSpec;
  hasEntityref(): boolean;
  clearEntityref(): AttachmentSpec;

  getBucketname(): string;
  setBucketname(value: string): AttachmentSpec;

  getPath(): string;
  setPath(value: string): AttachmentSpec;

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
    owner: string,
    description: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    bucketname: string,
    path: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class AttachmentStatus extends jspb.Message {
  getAt(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setAt(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AttachmentStatus;
  hasAt(): boolean;
  clearAt(): AttachmentStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): AttachmentStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): AttachmentStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): AttachmentStatus;

  getFailurereason(): string;
  setFailurereason(value: string): AttachmentStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): AttachmentStatus;

  getConditionsList(): Array<AttachmentCondition>;
  setConditionsList(value: Array<AttachmentCondition>): AttachmentStatus;
  clearConditionsList(): AttachmentStatus;
  addConditions(value?: AttachmentCondition, index?: number): AttachmentCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentStatus): AttachmentStatus.AsObject;
  static serializeBinaryToWriter(message: AttachmentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentStatus;
  static deserializeBinaryFromReader(message: AttachmentStatus, reader: jspb.BinaryReader): AttachmentStatus;
}

export namespace AttachmentStatus {
  export type AsObject = {
    at?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<AttachmentCondition.AsObject>,
  }
}

export class AvatarSpec extends jspb.Message {
  getBucketname(): string;
  setBucketname(value: string): AvatarSpec;

  getPath(): string;
  setPath(value: string): AvatarSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvatarSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AvatarSpec): AvatarSpec.AsObject;
  static serializeBinaryToWriter(message: AvatarSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvatarSpec;
  static deserializeBinaryFromReader(message: AvatarSpec, reader: jspb.BinaryReader): AvatarSpec;
}

export namespace AvatarSpec {
  export type AsObject = {
    bucketname: string,
    path: string,
  }
}

export class AwsS3Spec extends jspb.Message {
  getDefaultregion(): string;
  setDefaultregion(value: string): AwsS3Spec;

  getAccesskey(): string;
  setAccesskey(value: string): AwsS3Spec;

  getSecretkey(): string;
  setSecretkey(value: string): AwsS3Spec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwsS3Spec.AsObject;
  static toObject(includeInstance: boolean, msg: AwsS3Spec): AwsS3Spec.AsObject;
  static serializeBinaryToWriter(message: AwsS3Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwsS3Spec;
  static deserializeBinaryFromReader(message: AwsS3Spec, reader: jspb.BinaryReader): AwsS3Spec;
}

export namespace AwsS3Spec {
  export type AsObject = {
    defaultregion: string,
    accesskey: string,
    secretkey: string,
  }
}

export class AzureSQLDatabaseSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): AzureSQLDatabaseSpec;

  getPort(): number;
  setPort(value: number): AzureSQLDatabaseSpec;

  getUsername(): string;
  setUsername(value: string): AzureSQLDatabaseSpec;

  getPassword(): string;
  setPassword(value: string): AzureSQLDatabaseSpec;

  getDatabase(): string;
  setDatabase(value: string): AzureSQLDatabaseSpec;

  getUrl(): string;
  setUrl(value: string): AzureSQLDatabaseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureSQLDatabaseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AzureSQLDatabaseSpec): AzureSQLDatabaseSpec.AsObject;
  static serializeBinaryToWriter(message: AzureSQLDatabaseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureSQLDatabaseSpec;
  static deserializeBinaryFromReader(message: AzureSQLDatabaseSpec, reader: jspb.BinaryReader): AzureSQLDatabaseSpec;
}

export namespace AzureSQLDatabaseSpec {
  export type AsObject = {
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    url: string,
  }
}

export class AzureStorageSpec extends jspb.Message {
  getStorageaccount(): string;
  setStorageaccount(value: string): AzureStorageSpec;

  getAccesskey(): string;
  setAccesskey(value: string): AzureStorageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageSpec): AzureStorageSpec.AsObject;
  static serializeBinaryToWriter(message: AzureStorageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageSpec;
  static deserializeBinaryFromReader(message: AzureStorageSpec, reader: jspb.BinaryReader): AzureStorageSpec;
}

export namespace AzureStorageSpec {
  export type AsObject = {
    storageaccount: string,
    accesskey: string,
  }
}

export class BitbucketSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): BitbucketSpec;

  getUsername(): string;
  setUsername(value: string): BitbucketSpec;

  getSsh(): string;
  setSsh(value: string): BitbucketSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BitbucketSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BitbucketSpec): BitbucketSpec.AsObject;
  static serializeBinaryToWriter(message: BitbucketSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BitbucketSpec;
  static deserializeBinaryFromReader(message: BitbucketSpec, reader: jspb.BinaryReader): BitbucketSpec;
}

export namespace BitbucketSpec {
  export type AsObject = {
    token: string,
    username: string,
    ssh: string,
  }
}

export class BoxSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): BoxSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoxSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BoxSpec): BoxSpec.AsObject;
  static serializeBinaryToWriter(message: BoxSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoxSpec;
  static deserializeBinaryFromReader(message: BoxSpec, reader: jspb.BinaryReader): BoxSpec;
}

export namespace BoxSpec {
  export type AsObject = {
    token: string,
  }
}

export class BucketResourceQuotas extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): BucketResourceQuotas;

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
    enabled: boolean,
    hardlimit?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class ClickHouseSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ClickHouseSpec;

  getPort(): number;
  setPort(value: number): ClickHouseSpec;

  getDatabase(): string;
  setDatabase(value: string): ClickHouseSpec;

  getUsername(): string;
  setUsername(value: string): ClickHouseSpec;

  getPassword(): string;
  setPassword(value: string): ClickHouseSpec;

  getUrl(): string;
  setUrl(value: string): ClickHouseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickHouseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ClickHouseSpec): ClickHouseSpec.AsObject;
  static serializeBinaryToWriter(message: ClickHouseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickHouseSpec;
  static deserializeBinaryFromReader(message: ClickHouseSpec, reader: jspb.BinaryReader): ClickHouseSpec;
}

export namespace ClickHouseSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
  }
}

export class CockroachDBSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): CockroachDBSpec;

  getPort(): number;
  setPort(value: number): CockroachDBSpec;

  getDatabase(): string;
  setDatabase(value: string): CockroachDBSpec;

  getUsername(): string;
  setUsername(value: string): CockroachDBSpec;

  getPassword(): string;
  setPassword(value: string): CockroachDBSpec;

  getUrl(): string;
  setUrl(value: string): CockroachDBSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CockroachDBSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CockroachDBSpec): CockroachDBSpec.AsObject;
  static serializeBinaryToWriter(message: CockroachDBSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CockroachDBSpec;
  static deserializeBinaryFromReader(message: CockroachDBSpec, reader: jspb.BinaryReader): CockroachDBSpec;
}

export namespace CockroachDBSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
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

export class ConnectionCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ConnectionCondition;

  getStatus(): string;
  setStatus(value: string): ConnectionCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ConnectionCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ConnectionCondition;

  getReason(): string;
  setReason(value: string): ConnectionCondition;

  getMessage(): string;
  setMessage(value: string): ConnectionCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionCondition): ConnectionCondition.AsObject;
  static serializeBinaryToWriter(message: ConnectionCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionCondition;
  static deserializeBinaryFromReader(message: ConnectionCondition, reader: jspb.BinaryReader): ConnectionCondition;
}

export namespace ConnectionCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getProvider(): string;
  setProvider(value: string): ConnectionSpec;

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
    category: string,
    provider: string,
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
    owner: string,
  }
}

export class ConnectionStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ConnectionStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ConnectionStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ConnectionStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ConnectionStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ConnectionStatus;

  getConditionsList(): Array<ConnectionCondition>;
  setConditionsList(value: Array<ConnectionCondition>): ConnectionStatus;
  clearConditionsList(): ConnectionStatus;
  addConditions(value?: ConnectionCondition, index?: number): ConnectionCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionStatus): ConnectionStatus.AsObject;
  static serializeBinaryToWriter(message: ConnectionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionStatus;
  static deserializeBinaryFromReader(message: ConnectionStatus, reader: jspb.BinaryReader): ConnectionStatus;
}

export namespace ConnectionStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<ConnectionCondition.AsObject>,
  }
}

export class CouchbaseSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): CouchbaseSpec;

  getPort(): number;
  setPort(value: number): CouchbaseSpec;

  getDatabase(): string;
  setDatabase(value: string): CouchbaseSpec;

  getUsername(): string;
  setUsername(value: string): CouchbaseSpec;

  getPassword(): string;
  setPassword(value: string): CouchbaseSpec;

  getDefaultbucket(): string;
  setDefaultbucket(value: string): CouchbaseSpec;

  getUrl(): string;
  setUrl(value: string): CouchbaseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CouchbaseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CouchbaseSpec): CouchbaseSpec.AsObject;
  static serializeBinaryToWriter(message: CouchbaseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CouchbaseSpec;
  static deserializeBinaryFromReader(message: CouchbaseSpec, reader: jspb.BinaryReader): CouchbaseSpec;
}

export namespace CouchbaseSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    defaultbucket: string,
    url: string,
  }
}

export class DB2Spec extends jspb.Message {
  getHost(): string;
  setHost(value: string): DB2Spec;

  getPort(): number;
  setPort(value: number): DB2Spec;

  getKeyspace(): string;
  setKeyspace(value: string): DB2Spec;

  getUsername(): string;
  setUsername(value: string): DB2Spec;

  getPassword(): string;
  setPassword(value: string): DB2Spec;

  getUrl(): string;
  setUrl(value: string): DB2Spec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DB2Spec.AsObject;
  static toObject(includeInstance: boolean, msg: DB2Spec): DB2Spec.AsObject;
  static serializeBinaryToWriter(message: DB2Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DB2Spec;
  static deserializeBinaryFromReader(message: DB2Spec, reader: jspb.BinaryReader): DB2Spec;
}

export namespace DB2Spec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class DigitalOceanSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): DigitalOceanSpec;

  getAccesskey(): string;
  setAccesskey(value: string): DigitalOceanSpec;

  getSecretkey(): string;
  setSecretkey(value: string): DigitalOceanSpec;

  getDefaultregion(): string;
  setDefaultregion(value: string): DigitalOceanSpec;

  getHost(): string;
  setHost(value: string): DigitalOceanSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalOceanSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalOceanSpec): DigitalOceanSpec.AsObject;
  static serializeBinaryToWriter(message: DigitalOceanSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalOceanSpec;
  static deserializeBinaryFromReader(message: DigitalOceanSpec, reader: jspb.BinaryReader): DigitalOceanSpec;
}

export namespace DigitalOceanSpec {
  export type AsObject = {
    token: string,
    accesskey: string,
    secretkey: string,
    defaultregion: string,
    host: string,
  }
}

export class DiscordSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): DiscordSpec;

  getContenttype(): string;
  setContenttype(value: string): DiscordSpec;

  getToken(): string;
  setToken(value: string): DiscordSpec;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): DiscordSpec;

  getSsl(): boolean;
  setSsl(value: boolean): DiscordSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscordSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DiscordSpec): DiscordSpec.AsObject;
  static serializeBinaryToWriter(message: DiscordSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscordSpec;
  static deserializeBinaryFromReader(message: DiscordSpec, reader: jspb.BinaryReader): DiscordSpec;
}

export namespace DiscordSpec {
  export type AsObject = {
    url: string,
    contenttype: string,
    token: string,
    headersMap: Array<[string, string]>,
    ssl: boolean,
  }
}

export class DremioSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): DremioSpec;

  getPort(): number;
  setPort(value: number): DremioSpec;

  getKeyspace(): string;
  setKeyspace(value: string): DremioSpec;

  getUsername(): string;
  setUsername(value: string): DremioSpec;

  getPassword(): string;
  setPassword(value: string): DremioSpec;

  getUrl(): string;
  setUrl(value: string): DremioSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DremioSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DremioSpec): DremioSpec.AsObject;
  static serializeBinaryToWriter(message: DremioSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DremioSpec;
  static deserializeBinaryFromReader(message: DremioSpec, reader: jspb.BinaryReader): DremioSpec;
}

export namespace DremioSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class DropboxSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): DropboxSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropboxSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DropboxSpec): DropboxSpec.AsObject;
  static serializeBinaryToWriter(message: DropboxSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropboxSpec;
  static deserializeBinaryFromReader(message: DropboxSpec, reader: jspb.BinaryReader): DropboxSpec;
}

export namespace DropboxSpec {
  export type AsObject = {
    token: string,
  }
}

export class ElasticSearchSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ElasticSearchSpec;

  getPort(): number;
  setPort(value: number): ElasticSearchSpec;

  getPrefix(): string;
  setPrefix(value: string): ElasticSearchSpec;

  getUsername(): string;
  setUsername(value: string): ElasticSearchSpec;

  getPassword(): string;
  setPassword(value: string): ElasticSearchSpec;

  getUrl(): string;
  setUrl(value: string): ElasticSearchSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElasticSearchSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ElasticSearchSpec): ElasticSearchSpec.AsObject;
  static serializeBinaryToWriter(message: ElasticSearchSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElasticSearchSpec;
  static deserializeBinaryFromReader(message: ElasticSearchSpec, reader: jspb.BinaryReader): ElasticSearchSpec;
}

export namespace ElasticSearchSpec {
  export type AsObject = {
    host: string,
    port: number,
    prefix: string,
    username: string,
    password: string,
    url: string,
  }
}

export class ExasolSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ExasolSpec;

  getPort(): number;
  setPort(value: number): ExasolSpec;

  getUsername(): string;
  setUsername(value: string): ExasolSpec;

  getPassword(): string;
  setPassword(value: string): ExasolSpec;

  getUrl(): string;
  setUrl(value: string): ExasolSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExasolSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ExasolSpec): ExasolSpec.AsObject;
  static serializeBinaryToWriter(message: ExasolSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExasolSpec;
  static deserializeBinaryFromReader(message: ExasolSpec, reader: jspb.BinaryReader): ExasolSpec;
}

export namespace ExasolSpec {
  export type AsObject = {
    host: string,
    port: number,
    username: string,
    password: string,
    url: string,
  }
}

export class FTPSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): FTPSpec;

  getPort(): number;
  setPort(value: number): FTPSpec;

  getKeyspace(): string;
  setKeyspace(value: string): FTPSpec;

  getUsername(): string;
  setUsername(value: string): FTPSpec;

  getPassword(): string;
  setPassword(value: string): FTPSpec;

  getUrl(): string;
  setUrl(value: string): FTPSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FTPSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FTPSpec): FTPSpec.AsObject;
  static serializeBinaryToWriter(message: FTPSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FTPSpec;
  static deserializeBinaryFromReader(message: FTPSpec, reader: jspb.BinaryReader): FTPSpec;
}

export namespace FTPSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class FacebookSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): FacebookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FacebookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FacebookSpec): FacebookSpec.AsObject;
  static serializeBinaryToWriter(message: FacebookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FacebookSpec;
  static deserializeBinaryFromReader(message: FacebookSpec, reader: jspb.BinaryReader): FacebookSpec;
}

export namespace FacebookSpec {
  export type AsObject = {
    token: string,
  }
}

export class FtpSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): FtpSpec;

  getPort(): number;
  setPort(value: number): FtpSpec;

  getUsername(): string;
  setUsername(value: string): FtpSpec;

  getPassword(): string;
  setPassword(value: string): FtpSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FtpSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FtpSpec): FtpSpec.AsObject;
  static serializeBinaryToWriter(message: FtpSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FtpSpec;
  static deserializeBinaryFromReader(message: FtpSpec, reader: jspb.BinaryReader): FtpSpec;
}

export namespace FtpSpec {
  export type AsObject = {
    host: string,
    port: number,
    username: string,
    password: string,
  }
}

export class GcpBigQuerySpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): GcpBigQuerySpec;

  getPort(): number;
  setPort(value: number): GcpBigQuerySpec;

  getUsername(): string;
  setUsername(value: string): GcpBigQuerySpec;

  getPassword(): string;
  setPassword(value: string): GcpBigQuerySpec;

  getProjectid(): string;
  setProjectid(value: string): GcpBigQuerySpec;

  getOauthtype(): string;
  setOauthtype(value: string): GcpBigQuerySpec;

  getServiceaccountkeypath(): string;
  setServiceaccountkeypath(value: string): GcpBigQuerySpec;

  getUrl(): string;
  setUrl(value: string): GcpBigQuerySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcpBigQuerySpec.AsObject;
  static toObject(includeInstance: boolean, msg: GcpBigQuerySpec): GcpBigQuerySpec.AsObject;
  static serializeBinaryToWriter(message: GcpBigQuerySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcpBigQuerySpec;
  static deserializeBinaryFromReader(message: GcpBigQuerySpec, reader: jspb.BinaryReader): GcpBigQuerySpec;
}

export namespace GcpBigQuerySpec {
  export type AsObject = {
    host: string,
    port: number,
    username: string,
    password: string,
    projectid: string,
    oauthtype: string,
    serviceaccountkeypath: string,
    url: string,
  }
}

export class GcpSpannerSpec extends jspb.Message {
  getProject(): string;
  setProject(value: string): GcpSpannerSpec;

  getInstance(): string;
  setInstance(value: string): GcpSpannerSpec;

  getUsername(): string;
  setUsername(value: string): GcpSpannerSpec;

  getPassword(): string;
  setPassword(value: string): GcpSpannerSpec;

  getDatabase(): string;
  setDatabase(value: string): GcpSpannerSpec;

  getUrl(): string;
  setUrl(value: string): GcpSpannerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcpSpannerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GcpSpannerSpec): GcpSpannerSpec.AsObject;
  static serializeBinaryToWriter(message: GcpSpannerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcpSpannerSpec;
  static deserializeBinaryFromReader(message: GcpSpannerSpec, reader: jspb.BinaryReader): GcpSpannerSpec;
}

export namespace GcpSpannerSpec {
  export type AsObject = {
    project: string,
    instance: string,
    username: string,
    password: string,
    database: string,
    url: string,
  }
}

export class GcpStorageSpec extends jspb.Message {
  getKeyfile(): string;
  setKeyfile(value: string): GcpStorageSpec;

  getProject(): string;
  setProject(value: string): GcpStorageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcpStorageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GcpStorageSpec): GcpStorageSpec.AsObject;
  static serializeBinaryToWriter(message: GcpStorageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcpStorageSpec;
  static deserializeBinaryFromReader(message: GcpStorageSpec, reader: jspb.BinaryReader): GcpStorageSpec;
}

export namespace GcpStorageSpec {
  export type AsObject = {
    keyfile: string,
    project: string,
  }
}

export class GithubSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): GithubSpec;

  getUsername(): string;
  setUsername(value: string): GithubSpec;

  getSsh(): string;
  setSsh(value: string): GithubSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GithubSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GithubSpec): GithubSpec.AsObject;
  static serializeBinaryToWriter(message: GithubSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GithubSpec;
  static deserializeBinaryFromReader(message: GithubSpec, reader: jspb.BinaryReader): GithubSpec;
}

export namespace GithubSpec {
  export type AsObject = {
    token: string,
    username: string,
    ssh: string,
  }
}

export class GitlabSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): GitlabSpec;

  getSsh(): string;
  setSsh(value: string): GitlabSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitlabSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GitlabSpec): GitlabSpec.AsObject;
  static serializeBinaryToWriter(message: GitlabSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitlabSpec;
  static deserializeBinaryFromReader(message: GitlabSpec, reader: jspb.BinaryReader): GitlabSpec;
}

export namespace GitlabSpec {
  export type AsObject = {
    token: string,
    ssh: string,
  }
}

export class GoogleSheetsSpec extends jspb.Message {
  getScopes(): string;
  setScopes(value: string): GoogleSheetsSpec;

  getId(): string;
  setId(value: string): GoogleSheetsSpec;

  getDatatopull(): string;
  setDatatopull(value: string): GoogleSheetsSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleSheetsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleSheetsSpec): GoogleSheetsSpec.AsObject;
  static serializeBinaryToWriter(message: GoogleSheetsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleSheetsSpec;
  static deserializeBinaryFromReader(message: GoogleSheetsSpec, reader: jspb.BinaryReader): GoogleSheetsSpec;
}

export namespace GoogleSheetsSpec {
  export type AsObject = {
    scopes: string,
    id: string,
    datatopull: string,
  }
}

export class GreenPlumSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): GreenPlumSpec;

  getPort(): number;
  setPort(value: number): GreenPlumSpec;

  getDatabase(): string;
  setDatabase(value: string): GreenPlumSpec;

  getUsername(): string;
  setUsername(value: string): GreenPlumSpec;

  getPassword(): string;
  setPassword(value: string): GreenPlumSpec;

  getUrl(): string;
  setUrl(value: string): GreenPlumSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreenPlumSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GreenPlumSpec): GreenPlumSpec.AsObject;
  static serializeBinaryToWriter(message: GreenPlumSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreenPlumSpec;
  static deserializeBinaryFromReader(message: GreenPlumSpec, reader: jspb.BinaryReader): GreenPlumSpec;
}

export namespace GreenPlumSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
  }
}

export class HetznerSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): HetznerSpec;

  getSsh(): string;
  setSsh(value: string): HetznerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HetznerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: HetznerSpec): HetznerSpec.AsObject;
  static serializeBinaryToWriter(message: HetznerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HetznerSpec;
  static deserializeBinaryFromReader(message: HetznerSpec, reader: jspb.BinaryReader): HetznerSpec;
}

export namespace HetznerSpec {
  export type AsObject = {
    token: string,
    ssh: string,
  }
}

export class HipchatSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): HipchatSpec;

  getToken(): string;
  setToken(value: string): HipchatSpec;

  getRoom(): string;
  setRoom(value: string): HipchatSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HipchatSpec.AsObject;
  static toObject(includeInstance: boolean, msg: HipchatSpec): HipchatSpec.AsObject;
  static serializeBinaryToWriter(message: HipchatSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HipchatSpec;
  static deserializeBinaryFromReader(message: HipchatSpec, reader: jspb.BinaryReader): HipchatSpec;
}

export namespace HipchatSpec {
  export type AsObject = {
    url: string,
    token: string,
    room: string,
  }
}

export class ImageRegistrySpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): ImageRegistrySpec;

  getUsername(): string;
  setUsername(value: string): ImageRegistrySpec;

  getPassword(): string;
  setPassword(value: string): ImageRegistrySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageRegistrySpec.AsObject;
  static toObject(includeInstance: boolean, msg: ImageRegistrySpec): ImageRegistrySpec.AsObject;
  static serializeBinaryToWriter(message: ImageRegistrySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageRegistrySpec;
  static deserializeBinaryFromReader(message: ImageRegistrySpec, reader: jspb.BinaryReader): ImageRegistrySpec;
}

export namespace ImageRegistrySpec {
  export type AsObject = {
    host: string,
    username: string,
    password: string,
  }
}

export class InfluxDBSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): InfluxDBSpec;

  getPort(): number;
  setPort(value: number): InfluxDBSpec;

  getDatabase(): string;
  setDatabase(value: string): InfluxDBSpec;

  getUsername(): string;
  setUsername(value: string): InfluxDBSpec;

  getPassword(): string;
  setPassword(value: string): InfluxDBSpec;

  getUrl(): string;
  setUrl(value: string): InfluxDBSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfluxDBSpec.AsObject;
  static toObject(includeInstance: boolean, msg: InfluxDBSpec): InfluxDBSpec.AsObject;
  static serializeBinaryToWriter(message: InfluxDBSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfluxDBSpec;
  static deserializeBinaryFromReader(message: InfluxDBSpec, reader: jspb.BinaryReader): InfluxDBSpec;
}

export namespace InfluxDBSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
  }
}

export class InformixSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): InformixSpec;

  getPort(): number;
  setPort(value: number): InformixSpec;

  getDatabase(): string;
  setDatabase(value: string): InformixSpec;

  getUsername(): string;
  setUsername(value: string): InformixSpec;

  getPassword(): string;
  setPassword(value: string): InformixSpec;

  getUrl(): string;
  setUrl(value: string): InformixSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InformixSpec.AsObject;
  static toObject(includeInstance: boolean, msg: InformixSpec): InformixSpec.AsObject;
  static serializeBinaryToWriter(message: InformixSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InformixSpec;
  static deserializeBinaryFromReader(message: InformixSpec, reader: jspb.BinaryReader): InformixSpec;
}

export namespace InformixSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
  }
}

export class IngressSpec extends jspb.Message {
  getFqdn(): string;
  setFqdn(value: string): IngressSpec;

  getGrpc(): boolean;
  setGrpc(value: boolean): IngressSpec;

  getRest(): boolean;
  setRest(value: boolean): IngressSpec;

  getIngressclassname(): string;
  setIngressclassname(value: string): IngressSpec;

  getClusterissuername(): string;
  setClusterissuername(value: string): IngressSpec;

  getTlssecretref(): k8s_io_api_core_v1_generated_pb.SecretReference | undefined;
  setTlssecretref(value?: k8s_io_api_core_v1_generated_pb.SecretReference): IngressSpec;
  hasTlssecretref(): boolean;
  clearTlssecretref(): IngressSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IngressSpec.AsObject;
  static toObject(includeInstance: boolean, msg: IngressSpec): IngressSpec.AsObject;
  static serializeBinaryToWriter(message: IngressSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IngressSpec;
  static deserializeBinaryFromReader(message: IngressSpec, reader: jspb.BinaryReader): IngressSpec;
}

export namespace IngressSpec {
  export type AsObject = {
    fqdn: string,
    grpc: boolean,
    rest: boolean,
    ingressclassname: string,
    clusterissuername: string,
    tlssecretref?: k8s_io_api_core_v1_generated_pb.SecretReference.AsObject,
  }
}

export class KafkaSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): KafkaSpec;

  getPort(): number;
  setPort(value: number): KafkaSpec;

  getChannel(): string;
  setChannel(value: string): KafkaSpec;

  getUsername(): string;
  setUsername(value: string): KafkaSpec;

  getPassword(): string;
  setPassword(value: string): KafkaSpec;

  getUrl(): string;
  setUrl(value: string): KafkaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KafkaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: KafkaSpec): KafkaSpec.AsObject;
  static serializeBinaryToWriter(message: KafkaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KafkaSpec;
  static deserializeBinaryFromReader(message: KafkaSpec, reader: jspb.BinaryReader): KafkaSpec;
}

export namespace KafkaSpec {
  export type AsObject = {
    host: string,
    port: number,
    channel: string,
    username: string,
    password: string,
    url: string,
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

export class LabCondition extends jspb.Message {
  getType(): string;
  setType(value: string): LabCondition;

  getStatus(): string;
  setStatus(value: string): LabCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): LabCondition;

  getReason(): string;
  setReason(value: string): LabCondition;

  getMessage(): string;
  setMessage(value: string): LabCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabCondition.AsObject;
  static toObject(includeInstance: boolean, msg: LabCondition): LabCondition.AsObject;
  static serializeBinaryToWriter(message: LabCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabCondition;
  static deserializeBinaryFromReader(message: LabCondition, reader: jspb.BinaryReader): LabCondition;
}

export namespace LabCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LabSpec): LabSpec.AsObject;
  static serializeBinaryToWriter(message: LabSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabSpec;
  static deserializeBinaryFromReader(message: LabSpec, reader: jspb.BinaryReader): LabSpec;
}

export namespace LabSpec {
  export type AsObject = {
    description: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    limits?: ResourceLimitSpec.AsObject,
    externalcluster?: VirtualClusterSpec.AsObject,
    owner: string,
  }
}

export class LabStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): LabStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): LabStatus;

  getConditionsList(): Array<LabCondition>;
  setConditionsList(value: Array<LabCondition>): LabStatus;
  clearConditionsList(): LabStatus;
  addConditions(value?: LabCondition, index?: number): LabCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LabStatus): LabStatus.AsObject;
  static serializeBinaryToWriter(message: LabStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabStatus;
  static deserializeBinaryFromReader(message: LabStatus, reader: jspb.BinaryReader): LabStatus;
}

export namespace LabStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<LabCondition.AsObject>,
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

export class LicenseCondition extends jspb.Message {
  getType(): string;
  setType(value: string): LicenseCondition;

  getStatus(): string;
  setStatus(value: string): LicenseCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LicenseCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): LicenseCondition;

  getReason(): string;
  setReason(value: string): LicenseCondition;

  getMessage(): string;
  setMessage(value: string): LicenseCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LicenseCondition.AsObject;
  static toObject(includeInstance: boolean, msg: LicenseCondition): LicenseCondition.AsObject;
  static serializeBinaryToWriter(message: LicenseCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LicenseCondition;
  static deserializeBinaryFromReader(message: LicenseCondition, reader: jspb.BinaryReader): LicenseCondition;
}

export namespace LicenseCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getTrialstart(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrialstart(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LicenseSpec;
  hasTrialstart(): boolean;
  clearTrialstart(): LicenseSpec;

  getTrialend(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrialend(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LicenseSpec;
  hasTrialend(): boolean;
  clearTrialend(): LicenseSpec;

  getMaxproducts(): number;
  setMaxproducts(value: number): LicenseSpec;

  getMaxtrainers(): number;
  setMaxtrainers(value: number): LicenseSpec;

  getMaxservers(): number;
  setMaxservers(value: number): LicenseSpec;

  getMaxusers(): number;
  setMaxusers(value: number): LicenseSpec;

  getMaxdataplanes(): number;
  setMaxdataplanes(value: number): LicenseSpec;

  getForecast(): boolean;
  setForecast(value: boolean): LicenseSpec;

  getNlp(): boolean;
  setNlp(value: boolean): LicenseSpec;

  getVision(): boolean;
  setVision(value: boolean): LicenseSpec;

  getChatbot(): boolean;
  setChatbot(value: boolean): LicenseSpec;

  getProductname(): string;
  setProductname(value: string): LicenseSpec;

  getPricename(): string;
  setPricename(value: string): LicenseSpec;

  getExpireat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setExpireat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LicenseSpec;
  hasExpireat(): boolean;
  clearExpireat(): LicenseSpec;

  getNotifiername(): string;
  setNotifiername(value: string): LicenseSpec;

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
    email: string,
    trialstart?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trialend?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    maxproducts: number,
    maxtrainers: number,
    maxservers: number,
    maxusers: number,
    maxdataplanes: number,
    forecast: boolean,
    nlp: boolean,
    vision: boolean,
    chatbot: boolean,
    productname: string,
    pricename: string,
    expireat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    notifiername: string,
  }
}

export class LicenseStatus extends jspb.Message {
  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LicenseStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): LicenseStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): LicenseStatus;

  getFailurereason(): string;
  setFailurereason(value: string): LicenseStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): LicenseStatus;

  getConditionsList(): Array<LicenseCondition>;
  setConditionsList(value: Array<LicenseCondition>): LicenseStatus;
  clearConditionsList(): LicenseStatus;
  addConditions(value?: LicenseCondition, index?: number): LicenseCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LicenseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LicenseStatus): LicenseStatus.AsObject;
  static serializeBinaryToWriter(message: LicenseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LicenseStatus;
  static deserializeBinaryFromReader(message: LicenseStatus, reader: jspb.BinaryReader): LicenseStatus;
}

export namespace LicenseStatus {
  export type AsObject = {
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<LicenseCondition.AsObject>,
  }
}

export class LinodeSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): LinodeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinodeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LinodeSpec): LinodeSpec.AsObject;
  static serializeBinaryToWriter(message: LinodeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinodeSpec;
  static deserializeBinaryFromReader(message: LinodeSpec, reader: jspb.BinaryReader): LinodeSpec;
}

export namespace LinodeSpec {
  export type AsObject = {
    token: string,
  }
}

export class MSSqlServerSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): MSSqlServerSpec;

  getPort(): number;
  setPort(value: number): MSSqlServerSpec;

  getDatabase(): string;
  setDatabase(value: string): MSSqlServerSpec;

  getInstance(): string;
  setInstance(value: string): MSSqlServerSpec;

  getUsername(): string;
  setUsername(value: string): MSSqlServerSpec;

  getPassword(): string;
  setPassword(value: string): MSSqlServerSpec;

  getUrl(): string;
  setUrl(value: string): MSSqlServerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MSSqlServerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MSSqlServerSpec): MSSqlServerSpec.AsObject;
  static serializeBinaryToWriter(message: MSSqlServerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MSSqlServerSpec;
  static deserializeBinaryFromReader(message: MSSqlServerSpec, reader: jspb.BinaryReader): MSSqlServerSpec;
}

export namespace MSSqlServerSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    instance: string,
    username: string,
    password: string,
    url: string,
  }
}

export class MSTeamSpec extends jspb.Message {
  getWebhook(): string;
  setWebhook(value: string): MSTeamSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MSTeamSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MSTeamSpec): MSTeamSpec.AsObject;
  static serializeBinaryToWriter(message: MSTeamSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MSTeamSpec;
  static deserializeBinaryFromReader(message: MSTeamSpec, reader: jspb.BinaryReader): MSTeamSpec;
}

export namespace MSTeamSpec {
  export type AsObject = {
    webhook: string,
  }
}

export class MattermostSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): MattermostSpec;

  getChannel(): string;
  setChannel(value: string): MattermostSpec;

  getUsername(): string;
  setUsername(value: string): MattermostSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MattermostSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MattermostSpec): MattermostSpec.AsObject;
  static serializeBinaryToWriter(message: MattermostSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MattermostSpec;
  static deserializeBinaryFromReader(message: MattermostSpec, reader: jspb.BinaryReader): MattermostSpec;
}

export namespace MattermostSpec {
  export type AsObject = {
    url: string,
    channel: string,
    username: string,
  }
}

export class MinioSpec extends jspb.Message {
  getAccesskey(): string;
  setAccesskey(value: string): MinioSpec;

  getSecretkey(): string;
  setSecretkey(value: string): MinioSpec;

  getHost(): string;
  setHost(value: string): MinioSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinioSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MinioSpec): MinioSpec.AsObject;
  static serializeBinaryToWriter(message: MinioSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinioSpec;
  static deserializeBinaryFromReader(message: MinioSpec, reader: jspb.BinaryReader): MinioSpec;
}

export namespace MinioSpec {
  export type AsObject = {
    accesskey: string,
    secretkey: string,
    host: string,
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

export class ModelaSystemCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelaSystemCondition;

  getStatus(): string;
  setStatus(value: string): ModelaSystemCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelaSystemCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelaSystemCondition;

  getReason(): string;
  setReason(value: string): ModelaSystemCondition;

  getMessage(): string;
  setMessage(value: string): ModelaSystemCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemCondition): ModelaSystemCondition.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemCondition;
  static deserializeBinaryFromReader(message: ModelaSystemCondition, reader: jspb.BinaryReader): ModelaSystemCondition;
}

export namespace ModelaSystemCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getActive(): boolean;
  setActive(value: boolean): ModelaSystemSpec;

  getPodtemplate(): k8s_io_api_core_v1_generated_pb.PodTemplateSpec | undefined;
  setPodtemplate(value?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec): ModelaSystemSpec;
  hasPodtemplate(): boolean;
  clearPodtemplate(): ModelaSystemSpec;

  getPublishertemplate(): k8s_io_api_core_v1_generated_pb.PodTemplateSpec | undefined;
  setPublishertemplate(value?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec): ModelaSystemSpec;
  hasPublishertemplate(): boolean;
  clearPublishertemplate(): ModelaSystemSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemSpec): ModelaSystemSpec.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemSpec;
  static deserializeBinaryFromReader(message: ModelaSystemSpec, reader: jspb.BinaryReader): ModelaSystemSpec;
}

export namespace ModelaSystemSpec {
  export type AsObject = {
    release: string,
    active: boolean,
    podtemplate?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec.AsObject,
    publishertemplate?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec.AsObject,
  }
}

export class ModelaSystemStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelaSystemStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelaSystemStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelaSystemStatus;

  getLastrelease(): string;
  setLastrelease(value: string): ModelaSystemStatus;

  getConditionsList(): Array<ModelaSystemCondition>;
  setConditionsList(value: Array<ModelaSystemCondition>): ModelaSystemStatus;
  clearConditionsList(): ModelaSystemStatus;
  addConditions(value?: ModelaSystemCondition, index?: number): ModelaSystemCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemStatus): ModelaSystemStatus.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemStatus;
  static deserializeBinaryFromReader(message: ModelaSystemStatus, reader: jspb.BinaryReader): ModelaSystemStatus;
}

export namespace ModelaSystemStatus {
  export type AsObject = {
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
    lastrelease: string,
    conditionsList: Array<ModelaSystemCondition.AsObject>,
  }
}

export class MongoDbSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): MongoDbSpec;

  getPort(): number;
  setPort(value: number): MongoDbSpec;

  getDatabase(): string;
  setDatabase(value: string): MongoDbSpec;

  getUsername(): string;
  setUsername(value: string): MongoDbSpec;

  getPassword(): string;
  setPassword(value: string): MongoDbSpec;

  getUrl(): string;
  setUrl(value: string): MongoDbSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MongoDbSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MongoDbSpec): MongoDbSpec.AsObject;
  static serializeBinaryToWriter(message: MongoDbSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MongoDbSpec;
  static deserializeBinaryFromReader(message: MongoDbSpec, reader: jspb.BinaryReader): MongoDbSpec;
}

export namespace MongoDbSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
  }
}

export class MySqlSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): MySqlSpec;

  getPort(): number;
  setPort(value: number): MySqlSpec;

  getDatabase(): string;
  setDatabase(value: string): MySqlSpec;

  getUsername(): string;
  setUsername(value: string): MySqlSpec;

  getPassword(): string;
  setPassword(value: string): MySqlSpec;

  getUrl(): string;
  setUrl(value: string): MySqlSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MySqlSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MySqlSpec): MySqlSpec.AsObject;
  static serializeBinaryToWriter(message: MySqlSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MySqlSpec;
  static deserializeBinaryFromReader(message: MySqlSpec, reader: jspb.BinaryReader): MySqlSpec;
}

export namespace MySqlSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
  }
}

export class Neo4JSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): Neo4JSpec;

  getPort(): number;
  setPort(value: number): Neo4JSpec;

  getUsername(): string;
  setUsername(value: string): Neo4JSpec;

  getPassword(): string;
  setPassword(value: string): Neo4JSpec;

  getUrl(): string;
  setUrl(value: string): Neo4JSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Neo4JSpec.AsObject;
  static toObject(includeInstance: boolean, msg: Neo4JSpec): Neo4JSpec.AsObject;
  static serializeBinaryToWriter(message: Neo4JSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Neo4JSpec;
  static deserializeBinaryFromReader(message: Neo4JSpec, reader: jspb.BinaryReader): Neo4JSpec;
}

export namespace Neo4JSpec {
  export type AsObject = {
    host: string,
    port: number,
    username: string,
    password: string,
    url: string,
  }
}

export class NotificationChannelSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): NotificationChannelSpec;

  getConnectionname(): string;
  setConnectionname(value: string): NotificationChannelSpec;

  getInfo(): boolean;
  setInfo(value: boolean): NotificationChannelSpec;

  getError(): boolean;
  setError(value: boolean): NotificationChannelSpec;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationChannelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationChannelSpec): NotificationChannelSpec.AsObject;
  static serializeBinaryToWriter(message: NotificationChannelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationChannelSpec;
  static deserializeBinaryFromReader(message: NotificationChannelSpec, reader: jspb.BinaryReader): NotificationChannelSpec;
}

export namespace NotificationChannelSpec {
  export type AsObject = {
    enabled: boolean,
    connectionname: string,
    info: boolean,
    error: boolean,
    from?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    to?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    destination: string,
  }
}

export class NotificationChannelStatus extends jspb.Message {
  getLastmessage(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastmessage(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotificationChannelStatus;
  hasLastmessage(): boolean;
  clearLastmessage(): NotificationChannelStatus;

  getFailurereason(): string;
  setFailurereason(value: string): NotificationChannelStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): NotificationChannelStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationChannelStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationChannelStatus): NotificationChannelStatus.AsObject;
  static serializeBinaryToWriter(message: NotificationChannelStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationChannelStatus;
  static deserializeBinaryFromReader(message: NotificationChannelStatus, reader: jspb.BinaryReader): NotificationChannelStatus;
}

export namespace NotificationChannelStatus {
  export type AsObject = {
    lastmessage?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason: string,
    failuremessage: string,
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

export class NotifierCondition extends jspb.Message {
  getType(): string;
  setType(value: string): NotifierCondition;

  getStatus(): string;
  setStatus(value: string): NotifierCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotifierCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): NotifierCondition;

  getReason(): string;
  setReason(value: string): NotifierCondition;

  getMessage(): string;
  setMessage(value: string): NotifierCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifierCondition.AsObject;
  static toObject(includeInstance: boolean, msg: NotifierCondition): NotifierCondition.AsObject;
  static serializeBinaryToWriter(message: NotifierCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifierCondition;
  static deserializeBinaryFromReader(message: NotifierCondition, reader: jspb.BinaryReader): NotifierCondition;
}

export namespace NotifierCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): NotifierSpec;
  hasTenantref(): boolean;
  clearTenantref(): NotifierSpec;

  getDescription(): string;
  setDescription(value: string): NotifierSpec;

  getOwner(): string;
  setOwner(value: string): NotifierSpec;

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
    enabled: boolean,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    description: string,
    owner: string,
    channelsList: Array<NotificationChannelSpec.AsObject>,
  }
}

export class NotifierStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): NotifierStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotifierStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): NotifierStatus;

  getChannelsstatusList(): Array<NotificationChannelStatus>;
  setChannelsstatusList(value: Array<NotificationChannelStatus>): NotifierStatus;
  clearChannelsstatusList(): NotifierStatus;
  addChannelsstatus(value?: NotificationChannelStatus, index?: number): NotificationChannelStatus;

  getConditionsList(): Array<NotifierCondition>;
  setConditionsList(value: Array<NotifierCondition>): NotifierStatus;
  clearConditionsList(): NotifierStatus;
  addConditions(value?: NotifierCondition, index?: number): NotifierCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifierStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NotifierStatus): NotifierStatus.AsObject;
  static serializeBinaryToWriter(message: NotifierStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifierStatus;
  static deserializeBinaryFromReader(message: NotifierStatus, reader: jspb.BinaryReader): NotifierStatus;
}

export namespace NotifierStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    channelsstatusList: Array<NotificationChannelStatus.AsObject>,
    conditionsList: Array<NotifierCondition.AsObject>,
  }
}

export class OdbcSpec extends jspb.Message {
  getConntectionstring(): string;
  setConntectionstring(value: string): OdbcSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OdbcSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OdbcSpec): OdbcSpec.AsObject;
  static serializeBinaryToWriter(message: OdbcSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OdbcSpec;
  static deserializeBinaryFromReader(message: OdbcSpec, reader: jspb.BinaryReader): OdbcSpec;
}

export namespace OdbcSpec {
  export type AsObject = {
    conntectionstring: string,
  }
}

export class OpenstackSpec extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): OpenstackSpec;

  getTenantname(): string;
  setTenantname(value: string): OpenstackSpec;

  getPassword(): string;
  setPassword(value: string): OpenstackSpec;

  getAuthurl(): string;
  setAuthurl(value: string): OpenstackSpec;

  getRegion(): string;
  setRegion(value: string): OpenstackSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenstackSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OpenstackSpec): OpenstackSpec.AsObject;
  static serializeBinaryToWriter(message: OpenstackSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenstackSpec;
  static deserializeBinaryFromReader(message: OpenstackSpec, reader: jspb.BinaryReader): OpenstackSpec;
}

export namespace OpenstackSpec {
  export type AsObject = {
    username: string,
    tenantname: string,
    password: string,
    authurl: string,
    region: string,
  }
}

export class OpsgenieSpec extends jspb.Message {
  getApiid(): string;
  setApiid(value: string): OpsgenieSpec;

  getApikey(): string;
  setApikey(value: string): OpsgenieSpec;

  getUrl(): string;
  setUrl(value: string): OpsgenieSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpsgenieSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OpsgenieSpec): OpsgenieSpec.AsObject;
  static serializeBinaryToWriter(message: OpsgenieSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpsgenieSpec;
  static deserializeBinaryFromReader(message: OpsgenieSpec, reader: jspb.BinaryReader): OpsgenieSpec;
}

export namespace OpsgenieSpec {
  export type AsObject = {
    apiid: string,
    apikey: string,
    url: string,
  }
}

export class OracleSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): OracleSpec;

  getPort(): number;
  setPort(value: number): OracleSpec;

  getSid(): string;
  setSid(value: string): OracleSpec;

  getDriver(): string;
  setDriver(value: string): OracleSpec;

  getUsername(): string;
  setUsername(value: string): OracleSpec;

  getPassword(): string;
  setPassword(value: string): OracleSpec;

  getUrl(): string;
  setUrl(value: string): OracleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSpec): OracleSpec.AsObject;
  static serializeBinaryToWriter(message: OracleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSpec;
  static deserializeBinaryFromReader(message: OracleSpec, reader: jspb.BinaryReader): OracleSpec;
}

export namespace OracleSpec {
  export type AsObject = {
    host: string,
    port: number,
    sid: string,
    driver: string,
    username: string,
    password: string,
    url: string,
  }
}

export class OvhSpec extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): OvhSpec;

  getApplication(): string;
  setApplication(value: string): OvhSpec;

  getSecret(): string;
  setSecret(value: string): OvhSpec;

  getConsumerkey(): string;
  setConsumerkey(value: string): OvhSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OvhSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OvhSpec): OvhSpec.AsObject;
  static serializeBinaryToWriter(message: OvhSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OvhSpec;
  static deserializeBinaryFromReader(message: OvhSpec, reader: jspb.BinaryReader): OvhSpec;
}

export namespace OvhSpec {
  export type AsObject = {
    endpoint: string,
    application: string,
    secret: string,
    consumerkey: string,
  }
}

export class PagerDutySpec extends jspb.Message {
  getApiid(): string;
  setApiid(value: string): PagerDutySpec;

  getApikey(): string;
  setApikey(value: string): PagerDutySpec;

  getUrl(): string;
  setUrl(value: string): PagerDutySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PagerDutySpec.AsObject;
  static toObject(includeInstance: boolean, msg: PagerDutySpec): PagerDutySpec.AsObject;
  static serializeBinaryToWriter(message: PagerDutySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PagerDutySpec;
  static deserializeBinaryFromReader(message: PagerDutySpec, reader: jspb.BinaryReader): PagerDutySpec;
}

export namespace PagerDutySpec {
  export type AsObject = {
    apiid: string,
    apikey: string,
    url: string,
  }
}

export class PostgresSQLSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): PostgresSQLSpec;

  getPort(): number;
  setPort(value: number): PostgresSQLSpec;

  getDatabase(): string;
  setDatabase(value: string): PostgresSQLSpec;

  getSchema(): string;
  setSchema(value: string): PostgresSQLSpec;

  getUsername(): string;
  setUsername(value: string): PostgresSQLSpec;

  getPassword(): string;
  setPassword(value: string): PostgresSQLSpec;

  getUrl(): string;
  setUrl(value: string): PostgresSQLSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostgresSQLSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PostgresSQLSpec): PostgresSQLSpec.AsObject;
  static serializeBinaryToWriter(message: PostgresSQLSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostgresSQLSpec;
  static deserializeBinaryFromReader(message: PostgresSQLSpec, reader: jspb.BinaryReader): PostgresSQLSpec;
}

export namespace PostgresSQLSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    schema: string,
    username: string,
    password: string,
    url: string,
  }
}

export class PrestoSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): PrestoSpec;

  getPort(): number;
  setPort(value: number): PrestoSpec;

  getCatalog(): string;
  setCatalog(value: string): PrestoSpec;

  getSchema(): string;
  setSchema(value: string): PrestoSpec;

  getUsername(): string;
  setUsername(value: string): PrestoSpec;

  getPassword(): string;
  setPassword(value: string): PrestoSpec;

  getUrl(): string;
  setUrl(value: string): PrestoSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrestoSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PrestoSpec): PrestoSpec.AsObject;
  static serializeBinaryToWriter(message: PrestoSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrestoSpec;
  static deserializeBinaryFromReader(message: PrestoSpec, reader: jspb.BinaryReader): PrestoSpec;
}

export namespace PrestoSpec {
  export type AsObject = {
    host: string,
    port: number,
    catalog: string,
    schema: string,
    username: string,
    password: string,
    url: string,
  }
}

export class PushoverSpec extends jspb.Message {
  getApiid(): string;
  setApiid(value: string): PushoverSpec;

  getApikey(): string;
  setApikey(value: string): PushoverSpec;

  getUrl(): string;
  setUrl(value: string): PushoverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushoverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PushoverSpec): PushoverSpec.AsObject;
  static serializeBinaryToWriter(message: PushoverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushoverSpec;
  static deserializeBinaryFromReader(message: PushoverSpec, reader: jspb.BinaryReader): PushoverSpec;
}

export namespace PushoverSpec {
  export type AsObject = {
    apiid: string,
    apikey: string,
    url: string,
  }
}

export class RabbitMQSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): RabbitMQSpec;

  getPort(): number;
  setPort(value: number): RabbitMQSpec;

  getUsername(): string;
  setUsername(value: string): RabbitMQSpec;

  getPassword(): string;
  setPassword(value: string): RabbitMQSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RabbitMQSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RabbitMQSpec): RabbitMQSpec.AsObject;
  static serializeBinaryToWriter(message: RabbitMQSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RabbitMQSpec;
  static deserializeBinaryFromReader(message: RabbitMQSpec, reader: jspb.BinaryReader): RabbitMQSpec;
}

export namespace RabbitMQSpec {
  export type AsObject = {
    host: string,
    port: number,
    username: string,
    password: string,
  }
}

export class ResourceLimitSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ResourceLimitSpec;

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

  getMaxpvc(): number;
  setMaxpvc(value: number): ResourceLimitSpec;

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
    enabled: boolean,
    maxmem?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    maxcpu?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    maxpods: number,
    maxpvc: number,
    quota?: k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.AsObject,
    limitrange?: k8s_io_api_core_v1_generated_pb.LimitRangeSpec.AsObject,
  }
}

export class RuleSpec extends jspb.Message {
  getResource(): string;
  setResource(value: string): RuleSpec;

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
    resource: string,
    verbsList: Array<string>,
  }
}

export class SAPHanaSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SAPHanaSpec;

  getPort(): number;
  setPort(value: number): SAPHanaSpec;

  getDatabase(): string;
  setDatabase(value: string): SAPHanaSpec;

  getUsername(): string;
  setUsername(value: string): SAPHanaSpec;

  getPassword(): string;
  setPassword(value: string): SAPHanaSpec;

  getUrl(): string;
  setUrl(value: string): SAPHanaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SAPHanaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SAPHanaSpec): SAPHanaSpec.AsObject;
  static serializeBinaryToWriter(message: SAPHanaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SAPHanaSpec;
  static deserializeBinaryFromReader(message: SAPHanaSpec, reader: jspb.BinaryReader): SAPHanaSpec;
}

export namespace SAPHanaSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
  }
}

export class SFTPSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SFTPSpec;

  getPort(): number;
  setPort(value: number): SFTPSpec;

  getKeyspace(): string;
  setKeyspace(value: string): SFTPSpec;

  getUsername(): string;
  setUsername(value: string): SFTPSpec;

  getPassword(): string;
  setPassword(value: string): SFTPSpec;

  getUrl(): string;
  setUrl(value: string): SFTPSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SFTPSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SFTPSpec): SFTPSpec.AsObject;
  static serializeBinaryToWriter(message: SFTPSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SFTPSpec;
  static deserializeBinaryFromReader(message: SFTPSpec, reader: jspb.BinaryReader): SFTPSpec;
}

export namespace SFTPSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class SFtpSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SFtpSpec;

  getPort(): number;
  setPort(value: number): SFtpSpec;

  getUsername(): string;
  setUsername(value: string): SFtpSpec;

  getPassword(): string;
  setPassword(value: string): SFtpSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SFtpSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SFtpSpec): SFtpSpec.AsObject;
  static serializeBinaryToWriter(message: SFtpSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SFtpSpec;
  static deserializeBinaryFromReader(message: SFtpSpec, reader: jspb.BinaryReader): SFtpSpec;
}

export namespace SFtpSpec {
  export type AsObject = {
    host: string,
    port: number,
    username: string,
    password: string,
  }
}

export class SaleforceSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SaleforceSpec;

  getPort(): number;
  setPort(value: number): SaleforceSpec;

  getKeyspace(): string;
  setKeyspace(value: string): SaleforceSpec;

  getUsername(): string;
  setUsername(value: string): SaleforceSpec;

  getPassword(): string;
  setPassword(value: string): SaleforceSpec;

  getUrl(): string;
  setUrl(value: string): SaleforceSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaleforceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SaleforceSpec): SaleforceSpec.AsObject;
  static serializeBinaryToWriter(message: SaleforceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaleforceSpec;
  static deserializeBinaryFromReader(message: SaleforceSpec, reader: jspb.BinaryReader): SaleforceSpec;
}

export namespace SaleforceSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class SapCRMSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SapCRMSpec;

  getPort(): number;
  setPort(value: number): SapCRMSpec;

  getKeyspace(): string;
  setKeyspace(value: string): SapCRMSpec;

  getUsername(): string;
  setUsername(value: string): SapCRMSpec;

  getPassword(): string;
  setPassword(value: string): SapCRMSpec;

  getUrl(): string;
  setUrl(value: string): SapCRMSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SapCRMSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SapCRMSpec): SapCRMSpec.AsObject;
  static serializeBinaryToWriter(message: SapCRMSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SapCRMSpec;
  static deserializeBinaryFromReader(message: SapCRMSpec, reader: jspb.BinaryReader): SapCRMSpec;
}

export namespace SapCRMSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class Scope extends jspb.Message {
  getName(): string;
  setName(value: string): Scope;

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
    name: string,
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

export class ServingSiteCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ServingSiteCondition;

  getStatus(): string;
  setStatus(value: string): ServingSiteCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ServingSiteCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ServingSiteCondition;

  getReason(): string;
  setReason(value: string): ServingSiteCondition;

  getMessage(): string;
  setMessage(value: string): ServingSiteCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSiteCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSiteCondition): ServingSiteCondition.AsObject;
  static serializeBinaryToWriter(message: ServingSiteCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSiteCondition;
  static deserializeBinaryFromReader(message: ServingSiteCondition, reader: jspb.BinaryReader): ServingSiteCondition;
}

export namespace ServingSiteCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getClustername(): string;
  setClustername(value: string): ServingSiteSpec;

  getOwner(): string;
  setOwner(value: string): ServingSiteSpec;

  getType(): string;
  setType(value: string): ServingSiteSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSiteSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSiteSpec): ServingSiteSpec.AsObject;
  static serializeBinaryToWriter(message: ServingSiteSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSiteSpec;
  static deserializeBinaryFromReader(message: ServingSiteSpec, reader: jspb.BinaryReader): ServingSiteSpec;
}

export namespace ServingSiteSpec {
  export type AsObject = {
    description: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    limits?: ResourceLimitSpec.AsObject,
    ingress?: IngressSpec.AsObject,
    clustername: string,
    owner: string,
    type: string,
  }
}

export class ServingSiteStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ServingSiteStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ServingSiteStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ServingSiteStatus;

  getActivepredictors(): number;
  setActivepredictors(value: number): ServingSiteStatus;

  getInactivepredictors(): number;
  setInactivepredictors(value: number): ServingSiteStatus;

  getTotalpredictorservicefailed(): number;
  setTotalpredictorservicefailed(value: number): ServingSiteStatus;

  getTotalpredictordatadriftfailed(): number;
  setTotalpredictordatadriftfailed(value: number): ServingSiteStatus;

  getTotalpredictoraccuracyfailed(): number;
  setTotalpredictoraccuracyfailed(value: number): ServingSiteStatus;

  getLastdailypredictionsList(): Array<number>;
  setLastdailypredictionsList(value: Array<number>): ServingSiteStatus;
  clearLastdailypredictionsList(): ServingSiteStatus;
  addLastdailypredictions(value: number, index?: number): ServingSiteStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ServingSiteStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ServingSiteStatus;

  getGrpcingressname(): string;
  setGrpcingressname(value: string): ServingSiteStatus;

  getRestingressname(): string;
  setRestingressname(value: string): ServingSiteStatus;

  getGrpcingressready(): boolean;
  setGrpcingressready(value: boolean): ServingSiteStatus;

  getRestingressready(): boolean;
  setRestingressready(value: boolean): ServingSiteStatus;

  getConditionsList(): Array<ServingSiteCondition>;
  setConditionsList(value: Array<ServingSiteCondition>): ServingSiteStatus;
  clearConditionsList(): ServingSiteStatus;
  addConditions(value?: ServingSiteCondition, index?: number): ServingSiteCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSiteStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSiteStatus): ServingSiteStatus.AsObject;
  static serializeBinaryToWriter(message: ServingSiteStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSiteStatus;
  static deserializeBinaryFromReader(message: ServingSiteStatus, reader: jspb.BinaryReader): ServingSiteStatus;
}

export namespace ServingSiteStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    activepredictors: number,
    inactivepredictors: number,
    totalpredictorservicefailed: number,
    totalpredictordatadriftfailed: number,
    totalpredictoraccuracyfailed: number,
    lastdailypredictionsList: Array<number>,
    failurereason: string,
    failuremessage: string,
    grpcingressname: string,
    restingressname: string,
    grpcingressready: boolean,
    restingressready: boolean,
    conditionsList: Array<ServingSiteCondition.AsObject>,
  }
}

export class SingleStoreSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SingleStoreSpec;

  getPort(): number;
  setPort(value: number): SingleStoreSpec;

  getUsername(): string;
  setUsername(value: string): SingleStoreSpec;

  getPassword(): string;
  setPassword(value: string): SingleStoreSpec;

  getUrl(): string;
  setUrl(value: string): SingleStoreSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleStoreSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SingleStoreSpec): SingleStoreSpec.AsObject;
  static serializeBinaryToWriter(message: SingleStoreSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleStoreSpec;
  static deserializeBinaryFromReader(message: SingleStoreSpec, reader: jspb.BinaryReader): SingleStoreSpec;
}

export namespace SingleStoreSpec {
  export type AsObject = {
    host: string,
    port: number,
    username: string,
    password: string,
    url: string,
  }
}

export class SlackSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): SlackSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlackSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SlackSpec): SlackSpec.AsObject;
  static serializeBinaryToWriter(message: SlackSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlackSpec;
  static deserializeBinaryFromReader(message: SlackSpec, reader: jspb.BinaryReader): SlackSpec;
}

export namespace SlackSpec {
  export type AsObject = {
    token: string,
  }
}

export class SmtpSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SmtpSpec;

  getPort(): number;
  setPort(value: number): SmtpSpec;

  getHelo(): string;
  setHelo(value: string): SmtpSpec;

  getEmail(): string;
  setEmail(value: string): SmtpSpec;

  getSsl(): boolean;
  setSsl(value: boolean): SmtpSpec;

  getVerifypeer(): boolean;
  setVerifypeer(value: boolean): SmtpSpec;

  getVerifyhost(): boolean;
  setVerifyhost(value: boolean): SmtpSpec;

  getPasswordauth(): boolean;
  setPasswordauth(value: boolean): SmtpSpec;

  getUsername(): string;
  setUsername(value: string): SmtpSpec;

  getPassword(): string;
  setPassword(value: string): SmtpSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmtpSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SmtpSpec): SmtpSpec.AsObject;
  static serializeBinaryToWriter(message: SmtpSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmtpSpec;
  static deserializeBinaryFromReader(message: SmtpSpec, reader: jspb.BinaryReader): SmtpSpec;
}

export namespace SmtpSpec {
  export type AsObject = {
    host: string,
    port: number,
    helo: string,
    email: string,
    ssl: boolean,
    verifypeer: boolean,
    verifyhost: boolean,
    passwordauth: boolean,
    username: string,
    password: string,
  }
}

export class SnowflakeSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SnowflakeSpec;

  getPort(): number;
  setPort(value: number): SnowflakeSpec;

  getUsername(): string;
  setUsername(value: string): SnowflakeSpec;

  getPassword(): string;
  setPassword(value: string): SnowflakeSpec;

  getDatabase(): string;
  setDatabase(value: string): SnowflakeSpec;

  getSchema(): string;
  setSchema(value: string): SnowflakeSpec;

  getWarehouse(): string;
  setWarehouse(value: string): SnowflakeSpec;

  getRole(): string;
  setRole(value: string): SnowflakeSpec;

  getUrl(): string;
  setUrl(value: string): SnowflakeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnowflakeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SnowflakeSpec): SnowflakeSpec.AsObject;
  static serializeBinaryToWriter(message: SnowflakeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnowflakeSpec;
  static deserializeBinaryFromReader(message: SnowflakeSpec, reader: jspb.BinaryReader): SnowflakeSpec;
}

export namespace SnowflakeSpec {
  export type AsObject = {
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    schema: string,
    warehouse: string,
    role: string,
    url: string,
  }
}

export class SqliteSpec extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): SqliteSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqliteSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SqliteSpec): SqliteSpec.AsObject;
  static serializeBinaryToWriter(message: SqliteSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqliteSpec;
  static deserializeBinaryFromReader(message: SqliteSpec, reader: jspb.BinaryReader): SqliteSpec;
}

export namespace SqliteSpec {
  export type AsObject = {
    filename: string,
  }
}

export class SybaseSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SybaseSpec;

  getPort(): number;
  setPort(value: number): SybaseSpec;

  getDatabase(): string;
  setDatabase(value: string): SybaseSpec;

  getUsername(): string;
  setUsername(value: string): SybaseSpec;

  getPassword(): string;
  setPassword(value: string): SybaseSpec;

  getUrl(): string;
  setUrl(value: string): SybaseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SybaseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SybaseSpec): SybaseSpec.AsObject;
  static serializeBinaryToWriter(message: SybaseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SybaseSpec;
  static deserializeBinaryFromReader(message: SybaseSpec, reader: jspb.BinaryReader): SybaseSpec;
}

export namespace SybaseSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
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

export class TenantCondition extends jspb.Message {
  getType(): string;
  setType(value: string): TenantCondition;

  getStatus(): string;
  setStatus(value: string): TenantCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TenantCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): TenantCondition;

  getReason(): string;
  setReason(value: string): TenantCondition;

  getMessage(): string;
  setMessage(value: string): TenantCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantCondition.AsObject;
  static toObject(includeInstance: boolean, msg: TenantCondition): TenantCondition.AsObject;
  static serializeBinaryToWriter(message: TenantCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantCondition;
  static deserializeBinaryFromReader(message: TenantCondition, reader: jspb.BinaryReader): TenantCondition;
}

export namespace TenantCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getOwner(): string;
  setOwner(value: string): TenantSpec;

  getPermissions(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec | undefined;
  setPermissions(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec): TenantSpec;
  hasPermissions(): boolean;
  clearPermissions(): TenantSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): TenantSpec;
  hasNotification(): boolean;
  clearNotification(): TenantSpec;

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
    description: string,
    owner: string,
    permissions?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
  }
}

export class TenantStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): TenantStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TenantStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): TenantStatus;

  getFailurereason(): string;
  setFailurereason(value: string): TenantStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): TenantStatus;

  getConditionsList(): Array<TenantCondition>;
  setConditionsList(value: Array<TenantCondition>): TenantStatus;
  clearConditionsList(): TenantStatus;
  addConditions(value?: TenantCondition, index?: number): TenantCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TenantStatus): TenantStatus.AsObject;
  static serializeBinaryToWriter(message: TenantStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantStatus;
  static deserializeBinaryFromReader(message: TenantStatus, reader: jspb.BinaryReader): TenantStatus;
}

export namespace TenantStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<TenantCondition.AsObject>,
  }
}

export class TeradataSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): TeradataSpec;

  getPort(): number;
  setPort(value: number): TeradataSpec;

  getDatabase(): string;
  setDatabase(value: string): TeradataSpec;

  getUsername(): string;
  setUsername(value: string): TeradataSpec;

  getPassword(): string;
  setPassword(value: string): TeradataSpec;

  getUrl(): string;
  setUrl(value: string): TeradataSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeradataSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TeradataSpec): TeradataSpec.AsObject;
  static serializeBinaryToWriter(message: TeradataSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeradataSpec;
  static deserializeBinaryFromReader(message: TeradataSpec, reader: jspb.BinaryReader): TeradataSpec;
}

export namespace TeradataSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
  }
}

export class TimescaleDBSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): TimescaleDBSpec;

  getPort(): number;
  setPort(value: number): TimescaleDBSpec;

  getKeyspace(): string;
  setKeyspace(value: string): TimescaleDBSpec;

  getUsername(): string;
  setUsername(value: string): TimescaleDBSpec;

  getPassword(): string;
  setPassword(value: string): TimescaleDBSpec;

  getUrl(): string;
  setUrl(value: string): TimescaleDBSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimescaleDBSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TimescaleDBSpec): TimescaleDBSpec.AsObject;
  static serializeBinaryToWriter(message: TimescaleDBSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimescaleDBSpec;
  static deserializeBinaryFromReader(message: TimescaleDBSpec, reader: jspb.BinaryReader): TimescaleDBSpec;
}

export namespace TimescaleDBSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
  }
}

export class TwitterSpec extends jspb.Message {
  getToken(): string;
  setToken(value: string): TwitterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TwitterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TwitterSpec): TwitterSpec.AsObject;
  static serializeBinaryToWriter(message: TwitterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TwitterSpec;
  static deserializeBinaryFromReader(message: TwitterSpec, reader: jspb.BinaryReader): TwitterSpec;
}

export namespace TwitterSpec {
  export type AsObject = {
    token: string,
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

  getOwner(): string;
  setOwner(value: string): UserRoleClassSpec;

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
    description: string,
    owner: string,
    rulesList: Array<RuleSpec.AsObject>,
  }
}

export class VerticaSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): VerticaSpec;

  getPort(): number;
  setPort(value: number): VerticaSpec;

  getDatabase(): string;
  setDatabase(value: string): VerticaSpec;

  getUsername(): string;
  setUsername(value: string): VerticaSpec;

  getPassword(): string;
  setPassword(value: string): VerticaSpec;

  getUrl(): string;
  setUrl(value: string): VerticaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerticaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VerticaSpec): VerticaSpec.AsObject;
  static serializeBinaryToWriter(message: VerticaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerticaSpec;
  static deserializeBinaryFromReader(message: VerticaSpec, reader: jspb.BinaryReader): VerticaSpec;
}

export namespace VerticaSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
    url: string,
  }
}

export class VictorOpSpec extends jspb.Message {
  getApiid(): string;
  setApiid(value: string): VictorOpSpec;

  getApikey(): string;
  setApikey(value: string): VictorOpSpec;

  getUrl(): string;
  setUrl(value: string): VictorOpSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VictorOpSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VictorOpSpec): VictorOpSpec.AsObject;
  static serializeBinaryToWriter(message: VictorOpSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VictorOpSpec;
  static deserializeBinaryFromReader(message: VictorOpSpec, reader: jspb.BinaryReader): VictorOpSpec;
}

export namespace VictorOpSpec {
  export type AsObject = {
    apiid: string,
    apikey: string,
    url: string,
  }
}

export class VictoriaMetricsSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): VictoriaMetricsSpec;

  getPort(): number;
  setPort(value: number): VictoriaMetricsSpec;

  getKeyspace(): string;
  setKeyspace(value: string): VictoriaMetricsSpec;

  getUsername(): string;
  setUsername(value: string): VictoriaMetricsSpec;

  getPassword(): string;
  setPassword(value: string): VictoriaMetricsSpec;

  getUrl(): string;
  setUrl(value: string): VictoriaMetricsSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VictoriaMetricsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VictoriaMetricsSpec): VictoriaMetricsSpec.AsObject;
  static serializeBinaryToWriter(message: VictoriaMetricsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VictoriaMetricsSpec;
  static deserializeBinaryFromReader(message: VictoriaMetricsSpec, reader: jspb.BinaryReader): VictoriaMetricsSpec;
}

export namespace VictoriaMetricsSpec {
  export type AsObject = {
    host: string,
    port: number,
    keyspace: string,
    username: string,
    password: string,
    url: string,
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

export class VirtualBucketCondition extends jspb.Message {
  getType(): string;
  setType(value: string): VirtualBucketCondition;

  getStatus(): string;
  setStatus(value: string): VirtualBucketCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): VirtualBucketCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): VirtualBucketCondition;

  getReason(): string;
  setReason(value: string): VirtualBucketCondition;

  getMessage(): string;
  setMessage(value: string): VirtualBucketCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualBucketCondition.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualBucketCondition): VirtualBucketCondition.AsObject;
  static serializeBinaryToWriter(message: VirtualBucketCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualBucketCondition;
  static deserializeBinaryFromReader(message: VirtualBucketCondition, reader: jspb.BinaryReader): VirtualBucketCondition;
}

export namespace VirtualBucketCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
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

  getDescription(): string;
  setDescription(value: string): VirtualBucketSpec;

  getOwner(): string;
  setOwner(value: string): VirtualBucketSpec;

  getRegion(): string;
  setRegion(value: string): VirtualBucketSpec;

  getVersioning(): boolean;
  setVersioning(value: boolean): VirtualBucketSpec;

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
    connectionname: string,
    description: string,
    owner: string,
    region: string,
    versioning: boolean,
    quotas?: BucketResourceQuotas.AsObject,
  }
}

export class VirtualBucketStatus extends jspb.Message {
  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): VirtualBucketStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): VirtualBucketStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): VirtualBucketStatus;

  getFailurereason(): string;
  setFailurereason(value: string): VirtualBucketStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): VirtualBucketStatus;

  getConditionsList(): Array<VirtualBucketCondition>;
  setConditionsList(value: Array<VirtualBucketCondition>): VirtualBucketStatus;
  clearConditionsList(): VirtualBucketStatus;
  addConditions(value?: VirtualBucketCondition, index?: number): VirtualBucketCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualBucketStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualBucketStatus): VirtualBucketStatus.AsObject;
  static serializeBinaryToWriter(message: VirtualBucketStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualBucketStatus;
  static deserializeBinaryFromReader(message: VirtualBucketStatus, reader: jspb.BinaryReader): VirtualBucketStatus;
}

export namespace VirtualBucketStatus {
  export type AsObject = {
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<VirtualBucketCondition.AsObject>,
  }
}

export class VirtualClusterSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): VirtualClusterSpec;

  getDescription(): string;
  setDescription(value: string): VirtualClusterSpec;

  getNodes(): number;
  setNodes(value: number): VirtualClusterSpec;

  getNodeclassname(): string;
  setNodeclassname(value: string): VirtualClusterSpec;

  getGpus(): number;
  setGpus(value: number): VirtualClusterSpec;

  getGpuclassname(): string;
  setGpuclassname(value: string): VirtualClusterSpec;

  getVolumesize(): number;
  setVolumesize(value: number): VirtualClusterSpec;

  getSpot(): boolean;
  setSpot(value: boolean): VirtualClusterSpec;

  getConnectionname(): string;
  setConnectionname(value: string): VirtualClusterSpec;

  getOwner(): string;
  setOwner(value: string): VirtualClusterSpec;

  getLimits(): ResourceLimitSpec | undefined;
  setLimits(value?: ResourceLimitSpec): VirtualClusterSpec;
  hasLimits(): boolean;
  clearLimits(): VirtualClusterSpec;

  getRegion(): string;
  setRegion(value: string): VirtualClusterSpec;

  getAz(): string;
  setAz(value: string): VirtualClusterSpec;

  getKubernetesversion(): string;
  setKubernetesversion(value: string): VirtualClusterSpec;

  getAutoscale(): boolean;
  setAutoscale(value: boolean): VirtualClusterSpec;

  getMinnodes(): number;
  setMinnodes(value: number): VirtualClusterSpec;

  getMaxnodes(): number;
  setMaxnodes(value: number): VirtualClusterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualClusterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualClusterSpec): VirtualClusterSpec.AsObject;
  static serializeBinaryToWriter(message: VirtualClusterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualClusterSpec;
  static deserializeBinaryFromReader(message: VirtualClusterSpec, reader: jspb.BinaryReader): VirtualClusterSpec;
}

export namespace VirtualClusterSpec {
  export type AsObject = {
    enabled: boolean,
    description: string,
    nodes: number,
    nodeclassname: string,
    gpus: number,
    gpuclassname: string,
    volumesize: number,
    spot: boolean,
    connectionname: string,
    owner: string,
    limits?: ResourceLimitSpec.AsObject,
    region: string,
    az: string,
    kubernetesversion: string,
    autoscale: boolean,
    minnodes: number,
    maxnodes: number,
  }
}

export class WebhookSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): WebhookSpec;

  getContenttype(): string;
  setContenttype(value: string): WebhookSpec;

  getToken(): string;
  setToken(value: string): WebhookSpec;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): WebhookSpec;

  getSsl(): boolean;
  setSsl(value: boolean): WebhookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookSpec): WebhookSpec.AsObject;
  static serializeBinaryToWriter(message: WebhookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookSpec;
  static deserializeBinaryFromReader(message: WebhookSpec, reader: jspb.BinaryReader): WebhookSpec;
}

export namespace WebhookSpec {
  export type AsObject = {
    url: string,
    contenttype: string,
    token: string,
    headersMap: Array<[string, string]>,
    ssl: boolean,
  }
}

