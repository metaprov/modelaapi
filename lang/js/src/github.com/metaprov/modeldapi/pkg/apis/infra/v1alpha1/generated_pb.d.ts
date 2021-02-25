import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
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

export class AccountRoleBinding extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): AccountRoleBinding;

  getRole(): string;
  setRole(value: string): AccountRoleBinding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountRoleBinding.AsObject;
  static toObject(includeInstance: boolean, msg: AccountRoleBinding): AccountRoleBinding.AsObject;
  static serializeBinaryToWriter(message: AccountRoleBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountRoleBinding;
  static deserializeBinaryFromReader(message: AccountRoleBinding, reader: jspb.BinaryReader): AccountRoleBinding;
}

export namespace AccountRoleBinding {
  export type AsObject = {
    entity: string,
    role: string,
  }
}

export class AccountSpec extends jspb.Message {
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): AccountSpec;
  hasTenantref(): boolean;
  clearTenantref(): AccountSpec;

  getGroupname(): string;
  setGroupname(value: string): AccountSpec;

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

  getEmailpassword(): boolean;
  setEmailpassword(value: boolean): AccountSpec;

  getResetpassword(): boolean;
  setResetpassword(value: boolean): AccountSpec;

  getProductbindingsList(): Array<AccountRoleBinding>;
  setProductbindingsList(value: Array<AccountRoleBinding>): AccountSpec;
  clearProductbindingsList(): AccountSpec;
  addProductbindings(value?: AccountRoleBinding, index?: number): AccountRoleBinding;

  getLabbindingsList(): Array<AccountRoleBinding>;
  setLabbindingsList(value: Array<AccountRoleBinding>): AccountSpec;
  clearLabbindingsList(): AccountSpec;
  addLabbindings(value?: AccountRoleBinding, index?: number): AccountRoleBinding;

  getSitebindingsList(): Array<AccountRoleBinding>;
  setSitebindingsList(value: Array<AccountRoleBinding>): AccountSpec;
  clearSitebindingsList(): AccountSpec;
  addSitebindings(value?: AccountRoleBinding, index?: number): AccountRoleBinding;

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
    groupname: string,
    type: string,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    admin: boolean,
    emailpassword: boolean,
    resetpassword: boolean,
    productbindingsList: Array<AccountRoleBinding.AsObject>,
    labbindingsList: Array<AccountRoleBinding.AsObject>,
    sitebindingsList: Array<AccountRoleBinding.AsObject>,
  }
}

export class AccountStatus extends jspb.Message {
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
    conditionsList: Array<AccountCondition.AsObject>,
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

export class AthenaSpec extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): AthenaSpec;

  getS3outputlocation(): string;
  setS3outputlocation(value: string): AthenaSpec;

  getAccesskey(): string;
  setAccesskey(value: string): AthenaSpec;

  getSecretkey(): string;
  setSecretkey(value: string): AthenaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AthenaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AthenaSpec): AthenaSpec.AsObject;
  static serializeBinaryToWriter(message: AthenaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AthenaSpec;
  static deserializeBinaryFromReader(message: AthenaSpec, reader: jspb.BinaryReader): AthenaSpec;
}

export namespace AthenaSpec {
  export type AsObject = {
    hostname: string,
    s3outputlocation: string,
    accesskey: string,
    secretkey: string,
  }
}

export class AwsSpec extends jspb.Message {
  getDefaultregion(): string;
  setDefaultregion(value: string): AwsSpec;

  getAccesskey(): string;
  setAccesskey(value: string): AwsSpec;

  getSecretkey(): string;
  setSecretkey(value: string): AwsSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AwsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AwsSpec): AwsSpec.AsObject;
  static serializeBinaryToWriter(message: AwsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AwsSpec;
  static deserializeBinaryFromReader(message: AwsSpec, reader: jspb.BinaryReader): AwsSpec;
}

export namespace AwsSpec {
  export type AsObject = {
    defaultregion: string,
    accesskey: string,
    secretkey: string,
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

export class BigQuerySpec extends jspb.Message {
  getServiceaccount(): string;
  setServiceaccount(value: string): BigQuerySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQuerySpec.AsObject;
  static toObject(includeInstance: boolean, msg: BigQuerySpec): BigQuerySpec.AsObject;
  static serializeBinaryToWriter(message: BigQuerySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQuerySpec;
  static deserializeBinaryFromReader(message: BigQuerySpec, reader: jspb.BinaryReader): BigQuerySpec;
}

export namespace BigQuerySpec {
  export type AsObject = {
    serviceaccount: string,
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

export class CassandraSpec extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): CassandraSpec;

  getPort(): number;
  setPort(value: number): CassandraSpec;

  getDatabase(): string;
  setDatabase(value: string): CassandraSpec;

  getUsername(): string;
  setUsername(value: string): CassandraSpec;

  getPassword(): string;
  setPassword(value: string): CassandraSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CassandraSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CassandraSpec): CassandraSpec.AsObject;
  static serializeBinaryToWriter(message: CassandraSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CassandraSpec;
  static deserializeBinaryFromReader(message: CassandraSpec, reader: jspb.BinaryReader): CassandraSpec;
}

export namespace CassandraSpec {
  export type AsObject = {
    hostname: string,
    port: number,
    database: string,
    username: string,
    password: string,
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

  getSecretname(): string;
  setSecretname(value: string): ConnectionSpec;

  getAthena(): AthenaSpec | undefined;
  setAthena(value?: AthenaSpec): ConnectionSpec;
  hasAthena(): boolean;
  clearAthena(): ConnectionSpec;

  getAzurestorage(): AzureStorageSpec | undefined;
  setAzurestorage(value?: AzureStorageSpec): ConnectionSpec;
  hasAzurestorage(): boolean;
  clearAzurestorage(): ConnectionSpec;

  getAlicloud(): AliCloudSpec | undefined;
  setAlicloud(value?: AliCloudSpec): ConnectionSpec;
  hasAlicloud(): boolean;
  clearAlicloud(): ConnectionSpec;

  getBigquery(): BigQuerySpec | undefined;
  setBigquery(value?: BigQuerySpec): ConnectionSpec;
  hasBigquery(): boolean;
  clearBigquery(): ConnectionSpec;

  getBitbucket(): BitbucketSpec | undefined;
  setBitbucket(value?: BitbucketSpec): ConnectionSpec;
  hasBitbucket(): boolean;
  clearBitbucket(): ConnectionSpec;

  getCassandra(): CassandraSpec | undefined;
  setCassandra(value?: CassandraSpec): ConnectionSpec;
  hasCassandra(): boolean;
  clearCassandra(): ConnectionSpec;

  getDigitalocean(): DigitalOceanSpec | undefined;
  setDigitalocean(value?: DigitalOceanSpec): ConnectionSpec;
  hasDigitalocean(): boolean;
  clearDigitalocean(): ConnectionSpec;

  getSmtp(): SmtpSpec | undefined;
  setSmtp(value?: SmtpSpec): ConnectionSpec;
  hasSmtp(): boolean;
  clearSmtp(): ConnectionSpec;

  getHetzner(): HetznerSpec | undefined;
  setHetzner(value?: HetznerSpec): ConnectionSpec;
  hasHetzner(): boolean;
  clearHetzner(): ConnectionSpec;

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

  getGcpstorage(): GcpStorageSpec | undefined;
  setGcpstorage(value?: GcpStorageSpec): ConnectionSpec;
  hasGcpstorage(): boolean;
  clearGcpstorage(): ConnectionSpec;

  getLinode(): LinodeSpec | undefined;
  setLinode(value?: LinodeSpec): ConnectionSpec;
  hasLinode(): boolean;
  clearLinode(): ConnectionSpec;

  getMongodb(): MongoDbSpec | undefined;
  setMongodb(value?: MongoDbSpec): ConnectionSpec;
  hasMongodb(): boolean;
  clearMongodb(): ConnectionSpec;

  getMysql(): MySqlSpec | undefined;
  setMysql(value?: MySqlSpec): ConnectionSpec;
  hasMysql(): boolean;
  clearMysql(): ConnectionSpec;

  getMinio(): MinioSpec | undefined;
  setMinio(value?: MinioSpec): ConnectionSpec;
  hasMinio(): boolean;
  clearMinio(): ConnectionSpec;

  getMssqlserver(): MSSqlServerSpec | undefined;
  setMssqlserver(value?: MSSqlServerSpec): ConnectionSpec;
  hasMssqlserver(): boolean;
  clearMssqlserver(): ConnectionSpec;

  getOdbc(): OdbcSpec | undefined;
  setOdbc(value?: OdbcSpec): ConnectionSpec;
  hasOdbc(): boolean;
  clearOdbc(): ConnectionSpec;

  getOracle(): OracleSpec | undefined;
  setOracle(value?: OracleSpec): ConnectionSpec;
  hasOracle(): boolean;
  clearOracle(): ConnectionSpec;

  getOpenstack(): OpenstackSpec | undefined;
  setOpenstack(value?: OpenstackSpec): ConnectionSpec;
  hasOpenstack(): boolean;
  clearOpenstack(): ConnectionSpec;

  getOvh(): OvhSpec | undefined;
  setOvh(value?: OvhSpec): ConnectionSpec;
  hasOvh(): boolean;
  clearOvh(): ConnectionSpec;

  getPostgres(): PostgresSQLSpec | undefined;
  setPostgres(value?: PostgresSQLSpec): ConnectionSpec;
  hasPostgres(): boolean;
  clearPostgres(): ConnectionSpec;

  getPresto(): PrestoSpec | undefined;
  setPresto(value?: PrestoSpec): ConnectionSpec;
  hasPresto(): boolean;
  clearPresto(): ConnectionSpec;

  getRedshift(): RedShiftSpec | undefined;
  setRedshift(value?: RedShiftSpec): ConnectionSpec;
  hasRedshift(): boolean;
  clearRedshift(): ConnectionSpec;

  getSnowflake(): SnowFlakeSpec | undefined;
  setSnowflake(value?: SnowFlakeSpec): ConnectionSpec;
  hasSnowflake(): boolean;
  clearSnowflake(): ConnectionSpec;

  getSqllight(): SqlLightSpec | undefined;
  setSqllight(value?: SqlLightSpec): ConnectionSpec;
  hasSqllight(): boolean;
  clearSqllight(): ConnectionSpec;

  getAws(): AwsSpec | undefined;
  setAws(value?: AwsSpec): ConnectionSpec;
  hasAws(): boolean;
  clearAws(): ConnectionSpec;

  getSlack(): SlackSpec | undefined;
  setSlack(value?: SlackSpec): ConnectionSpec;
  hasSlack(): boolean;
  clearSlack(): ConnectionSpec;

  getFlock(): FlockSpec | undefined;
  setFlock(value?: FlockSpec): ConnectionSpec;
  hasFlock(): boolean;
  clearFlock(): ConnectionSpec;

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

  getWebhook(): WebhookSpec | undefined;
  setWebhook(value?: WebhookSpec): ConnectionSpec;
  hasWebhook(): boolean;
  clearWebhook(): ConnectionSpec;

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
    secretname: string,
    athena?: AthenaSpec.AsObject,
    azurestorage?: AzureStorageSpec.AsObject,
    alicloud?: AliCloudSpec.AsObject,
    bigquery?: BigQuerySpec.AsObject,
    bitbucket?: BitbucketSpec.AsObject,
    cassandra?: CassandraSpec.AsObject,
    digitalocean?: DigitalOceanSpec.AsObject,
    smtp?: SmtpSpec.AsObject,
    hetzner?: HetznerSpec.AsObject,
    imageregistry?: ImageRegistrySpec.AsObject,
    github?: GithubSpec.AsObject,
    gitlab?: GitlabSpec.AsObject,
    gcpstorage?: GcpStorageSpec.AsObject,
    linode?: LinodeSpec.AsObject,
    mongodb?: MongoDbSpec.AsObject,
    mysql?: MySqlSpec.AsObject,
    minio?: MinioSpec.AsObject,
    mssqlserver?: MSSqlServerSpec.AsObject,
    odbc?: OdbcSpec.AsObject,
    oracle?: OracleSpec.AsObject,
    openstack?: OpenstackSpec.AsObject,
    ovh?: OvhSpec.AsObject,
    postgres?: PostgresSQLSpec.AsObject,
    presto?: PrestoSpec.AsObject,
    redshift?: RedShiftSpec.AsObject,
    snowflake?: SnowFlakeSpec.AsObject,
    sqllight?: SqlLightSpec.AsObject,
    aws?: AwsSpec.AsObject,
    slack?: SlackSpec.AsObject,
    flock?: FlockSpec.AsObject,
    msteam?: MSTeamSpec.AsObject,
    mattermost?: MattermostSpec.AsObject,
    hipchat?: HipchatSpec.AsObject,
    webhook?: WebhookSpec.AsObject,
    owner: string,
  }
}

export class ConnectionStatus extends jspb.Message {
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
    conditionsList: Array<ConnectionCondition.AsObject>,
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

export class FlockSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): FlockSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlockSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FlockSpec): FlockSpec.AsObject;
  static serializeBinaryToWriter(message: FlockSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlockSpec;
  static deserializeBinaryFromReader(message: FlockSpec, reader: jspb.BinaryReader): FlockSpec;
}

export namespace FlockSpec {
  export type AsObject = {
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

  getQuotaspec(): k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec | undefined;
  setQuotaspec(value?: k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec): LabSpec;
  hasQuotaspec(): boolean;
  clearQuotaspec(): LabSpec;

  getLimitrangespec(): k8s_io_api_core_v1_generated_pb.LimitRangeSpec | undefined;
  setLimitrangespec(value?: k8s_io_api_core_v1_generated_pb.LimitRangeSpec): LabSpec;
  hasLimitrangespec(): boolean;
  clearLimitrangespec(): LabSpec;

  getClustername(): string;
  setClustername(value: string): LabSpec;

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
    quotaspec?: k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.AsObject,
    limitrangespec?: k8s_io_api_core_v1_generated_pb.LimitRangeSpec.AsObject,
    clustername: string,
    owner: string,
  }
}

export class LabStatus extends jspb.Message {
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
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): LicenseSpec;
  hasTenantref(): boolean;
  clearTenantref(): LicenseSpec;

  getSecretname(): string;
  setSecretname(value: string): LicenseSpec;

  getOwner(): string;
  setOwner(value: string): LicenseSpec;

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
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    secretname: string,
    owner: string,
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
    conditionsList: Array<LicenseCondition.AsObject>,
  }
}

export class LinodeSpec extends jspb.Message {
  getApikey(): string;
  setApikey(value: string): LinodeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinodeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LinodeSpec): LinodeSpec.AsObject;
  static serializeBinaryToWriter(message: LinodeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinodeSpec;
  static deserializeBinaryFromReader(message: LinodeSpec, reader: jspb.BinaryReader): LinodeSpec;
}

export namespace LinodeSpec {
  export type AsObject = {
    apikey: string,
  }
}

export class MSSqlServerSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): MSSqlServerSpec;

  getPort(): number;
  setPort(value: number): MSSqlServerSpec;

  getDatabase(): string;
  setDatabase(value: string): MSSqlServerSpec;

  getDomain(): string;
  setDomain(value: string): MSSqlServerSpec;

  getUsername(): string;
  setUsername(value: string): MSSqlServerSpec;

  getPassword(): string;
  setPassword(value: string): MSSqlServerSpec;

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
    domain: string,
    username: string,
    password: string,
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

export class MongoDbSpec extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): MongoDbSpec;

  getPort(): number;
  setPort(value: number): MongoDbSpec;

  getDatabase(): string;
  setDatabase(value: string): MongoDbSpec;

  getUsername(): string;
  setUsername(value: string): MongoDbSpec;

  getPassword(): string;
  setPassword(value: string): MongoDbSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MongoDbSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MongoDbSpec): MongoDbSpec.AsObject;
  static serializeBinaryToWriter(message: MongoDbSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MongoDbSpec;
  static deserializeBinaryFromReader(message: MongoDbSpec, reader: jspb.BinaryReader): MongoDbSpec;
}

export namespace MongoDbSpec {
  export type AsObject = {
    hostname: string,
    port: number,
    database: string,
    username: string,
    password: string,
  }
}

export class MySqlSpec extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): MySqlSpec;

  getPort(): number;
  setPort(value: number): MySqlSpec;

  getDatabase(): string;
  setDatabase(value: string): MySqlSpec;

  getUsername(): string;
  setUsername(value: string): MySqlSpec;

  getPassword(): string;
  setPassword(value: string): MySqlSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MySqlSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MySqlSpec): MySqlSpec.AsObject;
  static serializeBinaryToWriter(message: MySqlSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MySqlSpec;
  static deserializeBinaryFromReader(message: MySqlSpec, reader: jspb.BinaryReader): MySqlSpec;
}

export namespace MySqlSpec {
  export type AsObject = {
    hostname: string,
    port: number,
    database: string,
    username: string,
    password: string,
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
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): NotifierSpec;
  hasTenantref(): boolean;
  clearTenantref(): NotifierSpec;

  getDescription(): string;
  setDescription(value: string): NotifierSpec;

  getTo(): string;
  setTo(value: string): NotifierSpec;

  getFrom(): string;
  setFrom(value: string): NotifierSpec;

  getConnectionname(): string;
  setConnectionname(value: string): NotifierSpec;

  getOwner(): string;
  setOwner(value: string): NotifierSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifierSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NotifierSpec): NotifierSpec.AsObject;
  static serializeBinaryToWriter(message: NotifierSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifierSpec;
  static deserializeBinaryFromReader(message: NotifierSpec, reader: jspb.BinaryReader): NotifierSpec;
}

export namespace NotifierSpec {
  export type AsObject = {
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    description: string,
    to: string,
    from: string,
    connectionname: string,
    owner: string,
  }
}

export class NotifierStatus extends jspb.Message {
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

export class OracleSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): OracleSpec;

  getPort(): number;
  setPort(value: number): OracleSpec;

  getDatabase(): string;
  setDatabase(value: string): OracleSpec;

  getServicename(): string;
  setServicename(value: string): OracleSpec;

  getRole(): string;
  setRole(value: string): OracleSpec;

  getUsername(): string;
  setUsername(value: string): OracleSpec;

  getPassword(): string;
  setPassword(value: string): OracleSpec;

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
    database: string,
    servicename: string,
    role: string,
    username: string,
    password: string,
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

export class PostgresSQLSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): PostgresSQLSpec;

  getPort(): number;
  setPort(value: number): PostgresSQLSpec;

  getDatabase(): string;
  setDatabase(value: string): PostgresSQLSpec;

  getUsername(): string;
  setUsername(value: string): PostgresSQLSpec;

  getPassword(): string;
  setPassword(value: string): PostgresSQLSpec;

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
    username: string,
    password: string,
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
  }
}

export class RedShiftSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): RedShiftSpec;

  getPort(): number;
  setPort(value: number): RedShiftSpec;

  getDatabase(): string;
  setDatabase(value: string): RedShiftSpec;

  getUsername(): string;
  setUsername(value: string): RedShiftSpec;

  getPassword(): string;
  setPassword(value: string): RedShiftSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedShiftSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RedShiftSpec): RedShiftSpec.AsObject;
  static serializeBinaryToWriter(message: RedShiftSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedShiftSpec;
  static deserializeBinaryFromReader(message: RedShiftSpec, reader: jspb.BinaryReader): RedShiftSpec;
}

export namespace RedShiftSpec {
  export type AsObject = {
    host: string,
    port: number,
    database: string,
    username: string,
    password: string,
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

  getQuotaspec(): k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec | undefined;
  setQuotaspec(value?: k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec): ServingSiteSpec;
  hasQuotaspec(): boolean;
  clearQuotaspec(): ServingSiteSpec;

  getLimitrangespec(): k8s_io_api_core_v1_generated_pb.LimitRangeSpec | undefined;
  setLimitrangespec(value?: k8s_io_api_core_v1_generated_pb.LimitRangeSpec): ServingSiteSpec;
  hasLimitrangespec(): boolean;
  clearLimitrangespec(): ServingSiteSpec;

  getIngressname(): string;
  setIngressname(value: string): ServingSiteSpec;

  getFdqn(): string;
  setFdqn(value: string): ServingSiteSpec;

  getClustername(): string;
  setClustername(value: string): ServingSiteSpec;

  getOwner(): string;
  setOwner(value: string): ServingSiteSpec;

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
    quotaspec?: k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.AsObject,
    limitrangespec?: k8s_io_api_core_v1_generated_pb.LimitRangeSpec.AsObject,
    ingressname: string,
    fdqn: string,
    clustername: string,
    owner: string,
  }
}

export class ServingSiteStatus extends jspb.Message {
  getConditionsList(): Array<ServingSiteCondition>;
  setConditionsList(value: Array<ServingSiteCondition>): ServingSiteStatus;
  clearConditionsList(): ServingSiteStatus;
  addConditions(value?: ServingSiteCondition, index?: number): ServingSiteCondition;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSiteStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSiteStatus): ServingSiteStatus.AsObject;
  static serializeBinaryToWriter(message: ServingSiteStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSiteStatus;
  static deserializeBinaryFromReader(message: ServingSiteStatus, reader: jspb.BinaryReader): ServingSiteStatus;
}

export namespace ServingSiteStatus {
  export type AsObject = {
    conditionsList: Array<ServingSiteCondition.AsObject>,
    activepredictors: number,
    inactivepredictors: number,
    totalpredictorservicefailed: number,
    totalpredictordatadriftfailed: number,
    totalpredictoraccuracyfailed: number,
    lastdailypredictionsList: Array<number>,
  }
}

export class SlackSpec extends jspb.Message {
  getWebhookurl(): string;
  setWebhookurl(value: string): SlackSpec;

  getChannel(): string;
  setChannel(value: string): SlackSpec;

  getUsername(): string;
  setUsername(value: string): SlackSpec;

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
    webhookurl: string,
    channel: string,
    username: string,
    token: string,
  }
}

export class SmtpSpec extends jspb.Message {
  getHost(): string;
  setHost(value: string): SmtpSpec;

  getPort(): number;
  setPort(value: number): SmtpSpec;

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
    username: string,
    password: string,
  }
}

export class SnowFlakeSpec extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): SnowFlakeSpec;

  getWarehouse(): string;
  setWarehouse(value: string): SnowFlakeSpec;

  getDatabase(): string;
  setDatabase(value: string): SnowFlakeSpec;

  getUsername(): string;
  setUsername(value: string): SnowFlakeSpec;

  getPassword(): string;
  setPassword(value: string): SnowFlakeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnowFlakeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SnowFlakeSpec): SnowFlakeSpec.AsObject;
  static serializeBinaryToWriter(message: SnowFlakeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnowFlakeSpec;
  static deserializeBinaryFromReader(message: SnowFlakeSpec, reader: jspb.BinaryReader): SnowFlakeSpec;
}

export namespace SnowFlakeSpec {
  export type AsObject = {
    account: string,
    warehouse: string,
    database: string,
    username: string,
    password: string,
  }
}

export class SqlLightSpec extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): SqlLightSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlLightSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SqlLightSpec): SqlLightSpec.AsObject;
  static serializeBinaryToWriter(message: SqlLightSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlLightSpec;
  static deserializeBinaryFromReader(message: SqlLightSpec, reader: jspb.BinaryReader): SqlLightSpec;
}

export namespace SqlLightSpec {
  export type AsObject = {
    filename: string,
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
  }
}

export class TenantStatus extends jspb.Message {
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
    conditionsList: Array<TenantCondition.AsObject>,
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
  }
}

export class VirtualBucketStatus extends jspb.Message {
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
    conditionsList: Array<VirtualBucketCondition.AsObject>,
  }
}

export class VirtualCluster extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): VirtualCluster;
  hasMetadata(): boolean;
  clearMetadata(): VirtualCluster;

  getSpec(): VirtualClusterSpec | undefined;
  setSpec(value?: VirtualClusterSpec): VirtualCluster;
  hasSpec(): boolean;
  clearSpec(): VirtualCluster;

  getStatus(): VirtualClusterStatus | undefined;
  setStatus(value?: VirtualClusterStatus): VirtualCluster;
  hasStatus(): boolean;
  clearStatus(): VirtualCluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualCluster.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualCluster): VirtualCluster.AsObject;
  static serializeBinaryToWriter(message: VirtualCluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualCluster;
  static deserializeBinaryFromReader(message: VirtualCluster, reader: jspb.BinaryReader): VirtualCluster;
}

export namespace VirtualCluster {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: VirtualClusterSpec.AsObject,
    status?: VirtualClusterStatus.AsObject,
  }
}

export class VirtualClusterCondition extends jspb.Message {
  getType(): string;
  setType(value: string): VirtualClusterCondition;

  getStatus(): string;
  setStatus(value: string): VirtualClusterCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): VirtualClusterCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): VirtualClusterCondition;

  getReason(): string;
  setReason(value: string): VirtualClusterCondition;

  getMessage(): string;
  setMessage(value: string): VirtualClusterCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualClusterCondition.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualClusterCondition): VirtualClusterCondition.AsObject;
  static serializeBinaryToWriter(message: VirtualClusterCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualClusterCondition;
  static deserializeBinaryFromReader(message: VirtualClusterCondition, reader: jspb.BinaryReader): VirtualClusterCondition;
}

export namespace VirtualClusterCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class VirtualClusterList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): VirtualClusterList;
  hasMetadata(): boolean;
  clearMetadata(): VirtualClusterList;

  getItemsList(): Array<VirtualCluster>;
  setItemsList(value: Array<VirtualCluster>): VirtualClusterList;
  clearItemsList(): VirtualClusterList;
  addItems(value?: VirtualCluster, index?: number): VirtualCluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualClusterList.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualClusterList): VirtualClusterList.AsObject;
  static serializeBinaryToWriter(message: VirtualClusterList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualClusterList;
  static deserializeBinaryFromReader(message: VirtualClusterList, reader: jspb.BinaryReader): VirtualClusterList;
}

export namespace VirtualClusterList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<VirtualCluster.AsObject>,
  }
}

export class VirtualClusterSpec extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualClusterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualClusterSpec): VirtualClusterSpec.AsObject;
  static serializeBinaryToWriter(message: VirtualClusterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualClusterSpec;
  static deserializeBinaryFromReader(message: VirtualClusterSpec, reader: jspb.BinaryReader): VirtualClusterSpec;
}

export namespace VirtualClusterSpec {
  export type AsObject = {
    description: string,
    nodes: number,
    nodeclassname: string,
    gpus: number,
    gpuclassname: string,
    volumesize: number,
    spot: boolean,
    connectionname: string,
    owner: string,
  }
}

export class VirtualClusterStatus extends jspb.Message {
  getAvailablenodes(): number;
  setAvailablenodes(value: number): VirtualClusterStatus;

  getAvailablegpus(): number;
  setAvailablegpus(value: number): VirtualClusterStatus;

  getConditionsList(): Array<VirtualClusterCondition>;
  setConditionsList(value: Array<VirtualClusterCondition>): VirtualClusterStatus;
  clearConditionsList(): VirtualClusterStatus;
  addConditions(value?: VirtualClusterCondition, index?: number): VirtualClusterCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualClusterStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualClusterStatus): VirtualClusterStatus.AsObject;
  static serializeBinaryToWriter(message: VirtualClusterStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualClusterStatus;
  static deserializeBinaryFromReader(message: VirtualClusterStatus, reader: jspb.BinaryReader): VirtualClusterStatus;
}

export namespace VirtualClusterStatus {
  export type AsObject = {
    availablenodes: number,
    availablegpus: number,
    conditionsList: Array<VirtualClusterCondition.AsObject>,
  }
}

export class VirtualVolume extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): VirtualVolume;
  hasMetadata(): boolean;
  clearMetadata(): VirtualVolume;

  getSpec(): VirtualVolumeSpec | undefined;
  setSpec(value?: VirtualVolumeSpec): VirtualVolume;
  hasSpec(): boolean;
  clearSpec(): VirtualVolume;

  getStatus(): VirtualVolumeStatus | undefined;
  setStatus(value?: VirtualVolumeStatus): VirtualVolume;
  hasStatus(): boolean;
  clearStatus(): VirtualVolume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolume.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolume): VirtualVolume.AsObject;
  static serializeBinaryToWriter(message: VirtualVolume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolume;
  static deserializeBinaryFromReader(message: VirtualVolume, reader: jspb.BinaryReader): VirtualVolume;
}

export namespace VirtualVolume {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: VirtualVolumeSpec.AsObject,
    status?: VirtualVolumeStatus.AsObject,
  }
}

export class VirtualVolumeCondition extends jspb.Message {
  getType(): string;
  setType(value: string): VirtualVolumeCondition;

  getStatus(): string;
  setStatus(value: string): VirtualVolumeCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): VirtualVolumeCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): VirtualVolumeCondition;

  getReason(): string;
  setReason(value: string): VirtualVolumeCondition;

  getMessage(): string;
  setMessage(value: string): VirtualVolumeCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeCondition.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeCondition): VirtualVolumeCondition.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeCondition;
  static deserializeBinaryFromReader(message: VirtualVolumeCondition, reader: jspb.BinaryReader): VirtualVolumeCondition;
}

export namespace VirtualVolumeCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class VirtualVolumeList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): VirtualVolumeList;
  hasMetadata(): boolean;
  clearMetadata(): VirtualVolumeList;

  getItemsList(): Array<VirtualVolume>;
  setItemsList(value: Array<VirtualVolume>): VirtualVolumeList;
  clearItemsList(): VirtualVolumeList;
  addItems(value?: VirtualVolume, index?: number): VirtualVolume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeList.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeList): VirtualVolumeList.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeList;
  static deserializeBinaryFromReader(message: VirtualVolumeList, reader: jspb.BinaryReader): VirtualVolumeList;
}

export namespace VirtualVolumeList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<VirtualVolume.AsObject>,
  }
}

export class VirtualVolumeSpec extends jspb.Message {
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): VirtualVolumeSpec;
  hasTenantref(): boolean;
  clearTenantref(): VirtualVolumeSpec;

  getConnectionname(): string;
  setConnectionname(value: string): VirtualVolumeSpec;

  getDescription(): string;
  setDescription(value: string): VirtualVolumeSpec;

  getOwner(): string;
  setOwner(value: string): VirtualVolumeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeSpec): VirtualVolumeSpec.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeSpec;
  static deserializeBinaryFromReader(message: VirtualVolumeSpec, reader: jspb.BinaryReader): VirtualVolumeSpec;
}

export namespace VirtualVolumeSpec {
  export type AsObject = {
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    connectionname: string,
    description: string,
    owner: string,
  }
}

export class VirtualVolumeStatus extends jspb.Message {
  getConditionsList(): Array<VirtualVolumeCondition>;
  setConditionsList(value: Array<VirtualVolumeCondition>): VirtualVolumeStatus;
  clearConditionsList(): VirtualVolumeStatus;
  addConditions(value?: VirtualVolumeCondition, index?: number): VirtualVolumeCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeStatus): VirtualVolumeStatus.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeStatus;
  static deserializeBinaryFromReader(message: VirtualVolumeStatus, reader: jspb.BinaryReader): VirtualVolumeStatus;
}

export namespace VirtualVolumeStatus {
  export type AsObject = {
    conditionsList: Array<VirtualVolumeCondition.AsObject>,
  }
}

export class WebhookSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): WebhookSpec;

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
  }
}

