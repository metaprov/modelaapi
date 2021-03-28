import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class BotChannelSpec extends jspb.Message {
  getConnectionname(): string;
  setConnectionname(value: string): BotChannelSpec;

  getNotifiername(): string;
  setNotifiername(value: string): BotChannelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BotChannelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BotChannelSpec): BotChannelSpec.AsObject;
  static serializeBinaryToWriter(message: BotChannelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BotChannelSpec;
  static deserializeBinaryFromReader(message: BotChannelSpec, reader: jspb.BinaryReader): BotChannelSpec;
}

export namespace BotChannelSpec {
  export type AsObject = {
    connectionname: string,
    notifiername: string,
  }
}

export class BucketChannelSpec extends jspb.Message {
  getConnectionname(): string;
  setConnectionname(value: string): BucketChannelSpec;

  getDatabaseconnectionname(): string;
  setDatabaseconnectionname(value: string): BucketChannelSpec;

  getInputkey(): string;
  setInputkey(value: string): BucketChannelSpec;

  getScaninterval(): number;
  setScaninterval(value: number): BucketChannelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketChannelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BucketChannelSpec): BucketChannelSpec.AsObject;
  static serializeBinaryToWriter(message: BucketChannelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketChannelSpec;
  static deserializeBinaryFromReader(message: BucketChannelSpec, reader: jspb.BinaryReader): BucketChannelSpec;
}

export namespace BucketChannelSpec {
  export type AsObject = {
    connectionname: string,
    databaseconnectionname: string,
    inputkey: string,
    scaninterval: number,
  }
}

export class ChannelStatus extends jspb.Message {
  getName(): string;
  setName(value: string): ChannelStatus;

  getError(): string;
  setError(value: string): ChannelStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelStatus): ChannelStatus.AsObject;
  static serializeBinaryToWriter(message: ChannelStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelStatus;
  static deserializeBinaryFromReader(message: ChannelStatus, reader: jspb.BinaryReader): ChannelStatus;
}

export namespace ChannelStatus {
  export type AsObject = {
    name: string,
    error: string,
  }
}

export class CronPrediction extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): CronPrediction;
  hasMetadata(): boolean;
  clearMetadata(): CronPrediction;

  getSpec(): CronPredictionSpec | undefined;
  setSpec(value?: CronPredictionSpec): CronPrediction;
  hasSpec(): boolean;
  clearSpec(): CronPrediction;

  getStatus(): CronPredictionStatus | undefined;
  setStatus(value?: CronPredictionStatus): CronPrediction;
  hasStatus(): boolean;
  clearStatus(): CronPrediction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronPrediction.AsObject;
  static toObject(includeInstance: boolean, msg: CronPrediction): CronPrediction.AsObject;
  static serializeBinaryToWriter(message: CronPrediction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronPrediction;
  static deserializeBinaryFromReader(message: CronPrediction, reader: jspb.BinaryReader): CronPrediction;
}

export namespace CronPrediction {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: CronPredictionSpec.AsObject,
    status?: CronPredictionStatus.AsObject,
  }
}

export class CronPredictionCondition extends jspb.Message {
  getType(): string;
  setType(value: string): CronPredictionCondition;

  getStatus(): string;
  setStatus(value: string): CronPredictionCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): CronPredictionCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): CronPredictionCondition;

  getReason(): string;
  setReason(value: string): CronPredictionCondition;

  getMessage(): string;
  setMessage(value: string): CronPredictionCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronPredictionCondition.AsObject;
  static toObject(includeInstance: boolean, msg: CronPredictionCondition): CronPredictionCondition.AsObject;
  static serializeBinaryToWriter(message: CronPredictionCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronPredictionCondition;
  static deserializeBinaryFromReader(message: CronPredictionCondition, reader: jspb.BinaryReader): CronPredictionCondition;
}

export namespace CronPredictionCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class CronPredictionList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): CronPredictionList;
  hasMetadata(): boolean;
  clearMetadata(): CronPredictionList;

  getItemsList(): Array<CronPrediction>;
  setItemsList(value: Array<CronPrediction>): CronPredictionList;
  clearItemsList(): CronPredictionList;
  addItems(value?: CronPrediction, index?: number): CronPrediction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronPredictionList.AsObject;
  static toObject(includeInstance: boolean, msg: CronPredictionList): CronPredictionList.AsObject;
  static serializeBinaryToWriter(message: CronPredictionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronPredictionList;
  static deserializeBinaryFromReader(message: CronPredictionList, reader: jspb.BinaryReader): CronPredictionList;
}

export namespace CronPredictionList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<CronPrediction.AsObject>,
  }
}

export class CronPredictionSpec extends jspb.Message {
  getSchedule(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): CronPredictionSpec;
  hasSchedule(): boolean;
  clearSchedule(): CronPredictionSpec;

  getTemplate(): PredictionTemplate | undefined;
  setTemplate(value?: PredictionTemplate): CronPredictionSpec;
  hasTemplate(): boolean;
  clearTemplate(): CronPredictionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronPredictionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CronPredictionSpec): CronPredictionSpec.AsObject;
  static serializeBinaryToWriter(message: CronPredictionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronPredictionSpec;
  static deserializeBinaryFromReader(message: CronPredictionSpec, reader: jspb.BinaryReader): CronPredictionSpec;
}

export namespace CronPredictionSpec {
  export type AsObject = {
    schedule?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    template?: PredictionTemplate.AsObject,
  }
}

export class CronPredictionStatus extends jspb.Message {
  getConditionsList(): Array<CronPredictionCondition>;
  setConditionsList(value: Array<CronPredictionCondition>): CronPredictionStatus;
  clearConditionsList(): CronPredictionStatus;
  addConditions(value?: CronPredictionCondition, index?: number): CronPredictionCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronPredictionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CronPredictionStatus): CronPredictionStatus.AsObject;
  static serializeBinaryToWriter(message: CronPredictionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronPredictionStatus;
  static deserializeBinaryFromReader(message: CronPredictionStatus, reader: jspb.BinaryReader): CronPredictionStatus;
}

export namespace CronPredictionStatus {
  export type AsObject = {
    conditionsList: Array<CronPredictionCondition.AsObject>,
  }
}

export class Curtain extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Curtain;
  hasMetadata(): boolean;
  clearMetadata(): Curtain;

  getSpec(): CurtainSpec | undefined;
  setSpec(value?: CurtainSpec): Curtain;
  hasSpec(): boolean;
  clearSpec(): Curtain;

  getStatus(): CurtainStatus | undefined;
  setStatus(value?: CurtainStatus): Curtain;
  hasStatus(): boolean;
  clearStatus(): Curtain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Curtain.AsObject;
  static toObject(includeInstance: boolean, msg: Curtain): Curtain.AsObject;
  static serializeBinaryToWriter(message: Curtain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Curtain;
  static deserializeBinaryFromReader(message: Curtain, reader: jspb.BinaryReader): Curtain;
}

export namespace Curtain {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: CurtainSpec.AsObject,
    status?: CurtainStatus.AsObject,
  }
}

export class CurtainCondition extends jspb.Message {
  getType(): string;
  setType(value: string): CurtainCondition;

  getStatus(): string;
  setStatus(value: string): CurtainCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): CurtainCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): CurtainCondition;

  getReason(): string;
  setReason(value: string): CurtainCondition;

  getMessage(): string;
  setMessage(value: string): CurtainCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurtainCondition.AsObject;
  static toObject(includeInstance: boolean, msg: CurtainCondition): CurtainCondition.AsObject;
  static serializeBinaryToWriter(message: CurtainCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurtainCondition;
  static deserializeBinaryFromReader(message: CurtainCondition, reader: jspb.BinaryReader): CurtainCondition;
}

export namespace CurtainCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class CurtainList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): CurtainList;
  hasMetadata(): boolean;
  clearMetadata(): CurtainList;

  getItemsList(): Array<Curtain>;
  setItemsList(value: Array<Curtain>): CurtainList;
  clearItemsList(): CurtainList;
  addItems(value?: Curtain, index?: number): Curtain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurtainList.AsObject;
  static toObject(includeInstance: boolean, msg: CurtainList): CurtainList.AsObject;
  static serializeBinaryToWriter(message: CurtainList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurtainList;
  static deserializeBinaryFromReader(message: CurtainList, reader: jspb.BinaryReader): CurtainList;
}

export namespace CurtainList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Curtain.AsObject>,
  }
}

export class CurtainSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): CurtainSpec;

  getVersionname(): string;
  setVersionname(value: string): CurtainSpec;

  getServingsitename(): string;
  setServingsitename(value: string): CurtainSpec;

  getDatasetname(): string;
  setDatasetname(value: string): CurtainSpec;

  getWizardsList(): Array<string>;
  setWizardsList(value: Array<string>): CurtainSpec;
  clearWizardsList(): CurtainSpec;
  addWizards(value: string, index?: number): CurtainSpec;

  getQuestion(): string;
  setQuestion(value: string): CurtainSpec;

  getOwner(): string;
  setOwner(value: string): CurtainSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurtainSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CurtainSpec): CurtainSpec.AsObject;
  static serializeBinaryToWriter(message: CurtainSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurtainSpec;
  static deserializeBinaryFromReader(message: CurtainSpec, reader: jspb.BinaryReader): CurtainSpec;
}

export namespace CurtainSpec {
  export type AsObject = {
    description: string,
    versionname: string,
    servingsitename: string,
    datasetname: string,
    wizardsList: Array<string>,
    question: string,
    owner: string,
  }
}

export class CurtainStatus extends jspb.Message {
  getConditionsList(): Array<CurtainCondition>;
  setConditionsList(value: Array<CurtainCondition>): CurtainStatus;
  clearConditionsList(): CurtainStatus;
  addConditions(value?: CurtainCondition, index?: number): CurtainCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurtainStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CurtainStatus): CurtainStatus.AsObject;
  static serializeBinaryToWriter(message: CurtainStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurtainStatus;
  static deserializeBinaryFromReader(message: CurtainStatus, reader: jspb.BinaryReader): CurtainStatus;
}

export namespace CurtainStatus {
  export type AsObject = {
    conditionsList: Array<CurtainCondition.AsObject>,
  }
}

export class CurtainTemplateSpec extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): CurtainTemplateSpec;
  hasMetadata(): boolean;
  clearMetadata(): CurtainTemplateSpec;

  getSpec(): CurtainSpec | undefined;
  setSpec(value?: CurtainSpec): CurtainTemplateSpec;
  hasSpec(): boolean;
  clearSpec(): CurtainTemplateSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurtainTemplateSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CurtainTemplateSpec): CurtainTemplateSpec.AsObject;
  static serializeBinaryToWriter(message: CurtainTemplateSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurtainTemplateSpec;
  static deserializeBinaryFromReader(message: CurtainTemplateSpec, reader: jspb.BinaryReader): CurtainTemplateSpec;
}

export namespace CurtainTemplateSpec {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: CurtainSpec.AsObject,
  }
}

export class DriftCheckSpec extends jspb.Message {
  getCronexpr(): string;
  setCronexpr(value: string): DriftCheckSpec;

  getTreshold(): number;
  setTreshold(value: number): DriftCheckSpec;

  getNotifiername(): string;
  setNotifiername(value: string): DriftCheckSpec;

  getTestdataset(): string;
  setTestdataset(value: string): DriftCheckSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DriftCheckSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DriftCheckSpec): DriftCheckSpec.AsObject;
  static serializeBinaryToWriter(message: DriftCheckSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DriftCheckSpec;
  static deserializeBinaryFromReader(message: DriftCheckSpec, reader: jspb.BinaryReader): DriftCheckSpec;
}

export namespace DriftCheckSpec {
  export type AsObject = {
    cronexpr: string,
    treshold: number,
    notifiername: string,
    testdataset: string,
  }
}

export class ModelDeploymentSpec extends jspb.Message {
  getModelname(): string;
  setModelname(value: string): ModelDeploymentSpec;

  getWeight(): number;
  setWeight(value: number): ModelDeploymentSpec;

  getCanary(): boolean;
  setCanary(value: boolean): ModelDeploymentSpec;

  getShadow(): boolean;
  setShadow(value: boolean): ModelDeploymentSpec;

  getFilter(): string;
  setFilter(value: string): ModelDeploymentSpec;

  getCanarymetricsList(): Array<string>;
  setCanarymetricsList(value: Array<string>): ModelDeploymentSpec;
  clearCanarymetricsList(): ModelDeploymentSpec;
  addCanarymetrics(value: string, index?: number): ModelDeploymentSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelDeploymentSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelDeploymentSpec): ModelDeploymentSpec.AsObject;
  static serializeBinaryToWriter(message: ModelDeploymentSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelDeploymentSpec;
  static deserializeBinaryFromReader(message: ModelDeploymentSpec, reader: jspb.BinaryReader): ModelDeploymentSpec;
}

export namespace ModelDeploymentSpec {
  export type AsObject = {
    modelname: string,
    weight: number,
    canary: boolean,
    shadow: boolean,
    filter: string,
    canarymetricsList: Array<string>,
  }
}

export class ModelDeploymentStatus extends jspb.Message {
  getImagename(): string;
  setImagename(value: string): ModelDeploymentStatus;

  getDeploymentname(): string;
  setDeploymentname(value: string): ModelDeploymentStatus;

  getServicename(): string;
  setServicename(value: string): ModelDeploymentStatus;

  getHpaname(): string;
  setHpaname(value: string): ModelDeploymentStatus;

  getCurrent95(): number;
  setCurrent95(value: number): ModelDeploymentStatus;

  getCurrent99(): number;
  setCurrent99(value: number): ModelDeploymentStatus;

  getLastprediction(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastprediction(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelDeploymentStatus;
  hasLastprediction(): boolean;
  clearLastprediction(): ModelDeploymentStatus;

  getDailypredictionavg(): number;
  setDailypredictionavg(value: number): ModelDeploymentStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelDeploymentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelDeploymentStatus): ModelDeploymentStatus.AsObject;
  static serializeBinaryToWriter(message: ModelDeploymentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelDeploymentStatus;
  static deserializeBinaryFromReader(message: ModelDeploymentStatus, reader: jspb.BinaryReader): ModelDeploymentStatus;
}

export namespace ModelDeploymentStatus {
  export type AsObject = {
    imagename: string,
    deploymentname: string,
    servicename: string,
    hpaname: string,
    current95: number,
    current99: number,
    lastprediction?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    dailypredictionavg: number,
  }
}

export class OnlineFeaturestoreSpec extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): OnlineFeaturestoreSpec;

  getServicename(): string;
  setServicename(value: string): OnlineFeaturestoreSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineFeaturestoreSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineFeaturestoreSpec): OnlineFeaturestoreSpec.AsObject;
  static serializeBinaryToWriter(message: OnlineFeaturestoreSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineFeaturestoreSpec;
  static deserializeBinaryFromReader(message: OnlineFeaturestoreSpec, reader: jspb.BinaryReader): OnlineFeaturestoreSpec;
}

export namespace OnlineFeaturestoreSpec {
  export type AsObject = {
    active: boolean,
    servicename: string,
  }
}

export class Prediction extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Prediction;
  hasMetadata(): boolean;
  clearMetadata(): Prediction;

  getSpec(): PredictionSpec | undefined;
  setSpec(value?: PredictionSpec): Prediction;
  hasSpec(): boolean;
  clearSpec(): Prediction;

  getStatus(): PredictionStatus | undefined;
  setStatus(value?: PredictionStatus): Prediction;
  hasStatus(): boolean;
  clearStatus(): Prediction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prediction.AsObject;
  static toObject(includeInstance: boolean, msg: Prediction): Prediction.AsObject;
  static serializeBinaryToWriter(message: Prediction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prediction;
  static deserializeBinaryFromReader(message: Prediction, reader: jspb.BinaryReader): Prediction;
}

export namespace Prediction {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PredictionSpec.AsObject,
    status?: PredictionStatus.AsObject,
  }
}

export class PredictionCacheSpec extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): PredictionCacheSpec;

  getServicename(): string;
  setServicename(value: string): PredictionCacheSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionCacheSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionCacheSpec): PredictionCacheSpec.AsObject;
  static serializeBinaryToWriter(message: PredictionCacheSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionCacheSpec;
  static deserializeBinaryFromReader(message: PredictionCacheSpec, reader: jspb.BinaryReader): PredictionCacheSpec;
}

export namespace PredictionCacheSpec {
  export type AsObject = {
    active: boolean,
    servicename: string,
  }
}

export class PredictionChannel extends jspb.Message {
  getTable(): TableChannelSpec | undefined;
  setTable(value?: TableChannelSpec): PredictionChannel;
  hasTable(): boolean;
  clearTable(): PredictionChannel;

  getBot(): BotChannelSpec | undefined;
  setBot(value?: BotChannelSpec): PredictionChannel;
  hasBot(): boolean;
  clearBot(): PredictionChannel;

  getBucket(): BucketChannelSpec | undefined;
  setBucket(value?: BucketChannelSpec): PredictionChannel;
  hasBucket(): boolean;
  clearBucket(): PredictionChannel;

  getStreaming(): StreamingChannelSpec | undefined;
  setStreaming(value?: StreamingChannelSpec): PredictionChannel;
  hasStreaming(): boolean;
  clearStreaming(): PredictionChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionChannel.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionChannel): PredictionChannel.AsObject;
  static serializeBinaryToWriter(message: PredictionChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionChannel;
  static deserializeBinaryFromReader(message: PredictionChannel, reader: jspb.BinaryReader): PredictionChannel;
}

export namespace PredictionChannel {
  export type AsObject = {
    table?: TableChannelSpec.AsObject,
    bot?: BotChannelSpec.AsObject,
    bucket?: BucketChannelSpec.AsObject,
    streaming?: StreamingChannelSpec.AsObject,
  }
}

export class PredictionCondition extends jspb.Message {
  getType(): string;
  setType(value: string): PredictionCondition;

  getStatus(): string;
  setStatus(value: string): PredictionCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictionCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): PredictionCondition;

  getReason(): string;
  setReason(value: string): PredictionCondition;

  getMessage(): string;
  setMessage(value: string): PredictionCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionCondition.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionCondition): PredictionCondition.AsObject;
  static serializeBinaryToWriter(message: PredictionCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionCondition;
  static deserializeBinaryFromReader(message: PredictionCondition, reader: jspb.BinaryReader): PredictionCondition;
}

export namespace PredictionCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class PredictionList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PredictionList;
  hasMetadata(): boolean;
  clearMetadata(): PredictionList;

  getItemsList(): Array<Prediction>;
  setItemsList(value: Array<Prediction>): PredictionList;
  clearItemsList(): PredictionList;
  addItems(value?: Prediction, index?: number): Prediction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionList.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionList): PredictionList.AsObject;
  static serializeBinaryToWriter(message: PredictionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionList;
  static deserializeBinaryFromReader(message: PredictionList, reader: jspb.BinaryReader): PredictionList;
}

export namespace PredictionList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Prediction.AsObject>,
  }
}

export class PredictionSpec extends jspb.Message {
  getPredictorname(): string;
  setPredictorname(value: string): PredictionSpec;

  getLabeled(): boolean;
  setLabeled(value: boolean): PredictionSpec;

  getDatasetname(): string;
  setDatasetname(value: string): PredictionSpec;

  getInput(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setInput(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): PredictionSpec;
  hasInput(): boolean;
  clearInput(): PredictionSpec;

  getOutput(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setOutput(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): PredictionSpec;
  hasOutput(): boolean;
  clearOutput(): PredictionSpec;

  getResultsList(): Array<string>;
  setResultsList(value: Array<string>): PredictionSpec;
  clearResultsList(): PredictionSpec;
  addResults(value: string, index?: number): PredictionSpec;

  getOwner(): string;
  setOwner(value: string): PredictionSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): PredictionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionSpec): PredictionSpec.AsObject;
  static serializeBinaryToWriter(message: PredictionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionSpec;
  static deserializeBinaryFromReader(message: PredictionSpec, reader: jspb.BinaryReader): PredictionSpec;
}

export namespace PredictionSpec {
  export type AsObject = {
    predictorname: string,
    labeled: boolean,
    datasetname: string,
    input?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    output?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    resultsList: Array<string>,
    owner: string,
    workloadclassname: string,
  }
}

export class PredictionStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictionStatus;
  hasStarttime(): boolean;
  clearStarttime(): PredictionStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictionStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): PredictionStatus;

  getPhase(): string;
  setPhase(value: string): PredictionStatus;

  getResultsList(): Array<github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setResultsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): PredictionStatus;
  clearResultsList(): PredictionStatus;
  addResults(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getConditionsList(): Array<PredictionCondition>;
  setConditionsList(value: Array<PredictionCondition>): PredictionStatus;
  clearConditionsList(): PredictionStatus;
  addConditions(value?: PredictionCondition, index?: number): PredictionCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionStatus): PredictionStatus.AsObject;
  static serializeBinaryToWriter(message: PredictionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionStatus;
  static deserializeBinaryFromReader(message: PredictionStatus, reader: jspb.BinaryReader): PredictionStatus;
}

export namespace PredictionStatus {
  export type AsObject = {
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    resultsList: Array<github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    conditionsList: Array<PredictionCondition.AsObject>,
  }
}

export class PredictionTemplate extends jspb.Message {
  getSpec(): PredictionSpec | undefined;
  setSpec(value?: PredictionSpec): PredictionTemplate;
  hasSpec(): boolean;
  clearSpec(): PredictionTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionTemplate): PredictionTemplate.AsObject;
  static serializeBinaryToWriter(message: PredictionTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionTemplate;
  static deserializeBinaryFromReader(message: PredictionTemplate, reader: jspb.BinaryReader): PredictionTemplate;
}

export namespace PredictionTemplate {
  export type AsObject = {
    spec?: PredictionSpec.AsObject,
  }
}

export class Predictor extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Predictor;
  hasMetadata(): boolean;
  clearMetadata(): Predictor;

  getSpec(): PredictorSpec | undefined;
  setSpec(value?: PredictorSpec): Predictor;
  hasSpec(): boolean;
  clearSpec(): Predictor;

  getStatus(): PredictorStatus | undefined;
  setStatus(value?: PredictorStatus): Predictor;
  hasStatus(): boolean;
  clearStatus(): Predictor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Predictor.AsObject;
  static toObject(includeInstance: boolean, msg: Predictor): Predictor.AsObject;
  static serializeBinaryToWriter(message: Predictor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Predictor;
  static deserializeBinaryFromReader(message: Predictor, reader: jspb.BinaryReader): Predictor;
}

export namespace Predictor {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PredictorSpec.AsObject,
    status?: PredictorStatus.AsObject,
  }
}

export class PredictorCondition extends jspb.Message {
  getType(): string;
  setType(value: string): PredictorCondition;

  getStatus(): string;
  setStatus(value: string): PredictorCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictorCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): PredictorCondition;

  getReason(): string;
  setReason(value: string): PredictorCondition;

  getMessage(): string;
  setMessage(value: string): PredictorCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorCondition.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorCondition): PredictorCondition.AsObject;
  static serializeBinaryToWriter(message: PredictorCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorCondition;
  static deserializeBinaryFromReader(message: PredictorCondition, reader: jspb.BinaryReader): PredictorCondition;
}

export namespace PredictorCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class PredictorHealth extends jspb.Message {
  getTotalpredictions(): number;
  setTotalpredictions(value: number): PredictorHealth;

  getTotalrequests(): number;
  setTotalrequests(value: number): PredictorHealth;

  getTotalp95requests(): number;
  setTotalp95requests(value: number): PredictorHealth;

  getMedianresponsetime(): number;
  setMedianresponsetime(value: number): PredictorHealth;

  getLastdailypredictionsList(): Array<number>;
  setLastdailypredictionsList(value: Array<number>): PredictorHealth;
  clearLastdailypredictionsList(): PredictorHealth;
  addLastdailypredictions(value: number, index?: number): PredictorHealth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorHealth.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorHealth): PredictorHealth.AsObject;
  static serializeBinaryToWriter(message: PredictorHealth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorHealth;
  static deserializeBinaryFromReader(message: PredictorHealth, reader: jspb.BinaryReader): PredictorHealth;
}

export namespace PredictorHealth {
  export type AsObject = {
    totalpredictions: number,
    totalrequests: number,
    totalp95requests: number,
    medianresponsetime: number,
    lastdailypredictionsList: Array<number>,
  }
}

export class PredictorList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PredictorList;
  hasMetadata(): boolean;
  clearMetadata(): PredictorList;

  getItemsList(): Array<Predictor>;
  setItemsList(value: Array<Predictor>): PredictorList;
  clearItemsList(): PredictorList;
  addItems(value?: Predictor, index?: number): Predictor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorList.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorList): PredictorList.AsObject;
  static serializeBinaryToWriter(message: PredictorList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorList;
  static deserializeBinaryFromReader(message: PredictorList, reader: jspb.BinaryReader): PredictorList;
}

export namespace PredictorList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Predictor.AsObject>,
  }
}

export class PredictorSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): PredictorSpec;

  getProductref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setProductref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorSpec;
  hasProductref(): boolean;
  clearProductref(): PredictorSpec;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorSpec;
  hasServingsiteref(): boolean;
  clearServingsiteref(): PredictorSpec;

  getPort(): number;
  setPort(value: number): PredictorSpec;

  getPath(): string;
  setPath(value: string): PredictorSpec;

  getAccesstype(): string;
  setAccesstype(value: string): PredictorSpec;

  getTemplate(): k8s_io_api_core_v1_generated_pb.PodTemplate | undefined;
  setTemplate(value?: k8s_io_api_core_v1_generated_pb.PodTemplate): PredictorSpec;
  hasTemplate(): boolean;
  clearTemplate(): PredictorSpec;

  getModelsList(): Array<ModelDeploymentSpec>;
  setModelsList(value: Array<ModelDeploymentSpec>): PredictorSpec;
  clearModelsList(): PredictorSpec;
  addModels(value?: ModelDeploymentSpec, index?: number): ModelDeploymentSpec;

  getDriftcheck(): DriftCheckSpec | undefined;
  setDriftcheck(value?: DriftCheckSpec): PredictorSpec;
  hasDriftcheck(): boolean;
  clearDriftcheck(): PredictorSpec;

  getProgressive(): ProgressiveSpec | undefined;
  setProgressive(value?: ProgressiveSpec): PredictorSpec;
  hasProgressive(): boolean;
  clearProgressive(): PredictorSpec;

  getArtifactsfolder(): string;
  setArtifactsfolder(value: string): PredictorSpec;

  getInputchannelsList(): Array<PredictionChannel>;
  setInputchannelsList(value: Array<PredictionChannel>): PredictorSpec;
  clearInputchannelsList(): PredictorSpec;
  addInputchannels(value?: PredictionChannel, index?: number): PredictionChannel;

  getOutputchannelsList(): Array<PredictionChannel>;
  setOutputchannelsList(value: Array<PredictionChannel>): PredictorSpec;
  clearOutputchannelsList(): PredictorSpec;
  addOutputchannels(value?: PredictionChannel, index?: number): PredictionChannel;

  getMinreplicas(): number;
  setMinreplicas(value: number): PredictorSpec;

  getAutoscale(): boolean;
  setAutoscale(value: boolean): PredictorSpec;

  getMaxreplicas(): number;
  setMaxreplicas(value: number): PredictorSpec;

  getOwner(): string;
  setOwner(value: string): PredictorSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): PredictorSpec;

  getCache(): PredictionCacheSpec | undefined;
  setCache(value?: PredictionCacheSpec): PredictorSpec;
  hasCache(): boolean;
  clearCache(): PredictorSpec;

  getStore(): OnlineFeaturestoreSpec | undefined;
  setStore(value?: OnlineFeaturestoreSpec): PredictorSpec;
  hasStore(): boolean;
  clearStore(): PredictorSpec;

  getType(): string;
  setType(value: string): PredictorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorSpec): PredictorSpec.AsObject;
  static serializeBinaryToWriter(message: PredictorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorSpec;
  static deserializeBinaryFromReader(message: PredictorSpec, reader: jspb.BinaryReader): PredictorSpec;
}

export namespace PredictorSpec {
  export type AsObject = {
    description: string,
    productref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    port: number,
    path: string,
    accesstype: string,
    template?: k8s_io_api_core_v1_generated_pb.PodTemplate.AsObject,
    modelsList: Array<ModelDeploymentSpec.AsObject>,
    driftcheck?: DriftCheckSpec.AsObject,
    progressive?: ProgressiveSpec.AsObject,
    artifactsfolder: string,
    inputchannelsList: Array<PredictionChannel.AsObject>,
    outputchannelsList: Array<PredictionChannel.AsObject>,
    minreplicas: number,
    autoscale: boolean,
    maxreplicas: number,
    owner: string,
    workloadclassname: string,
    cache?: PredictionCacheSpec.AsObject,
    store?: OnlineFeaturestoreSpec.AsObject,
    type: string,
  }
}

export class PredictorStatus extends jspb.Message {
  getModelstatusList(): Array<ModelDeploymentStatus>;
  setModelstatusList(value: Array<ModelDeploymentStatus>): PredictorStatus;
  clearModelstatusList(): PredictorStatus;
  addModelstatus(value?: ModelDeploymentStatus, index?: number): ModelDeploymentStatus;

  getConditionsList(): Array<PredictorCondition>;
  setConditionsList(value: Array<PredictorCondition>): PredictorStatus;
  clearConditionsList(): PredictorStatus;
  addConditions(value?: PredictorCondition, index?: number): PredictorCondition;

  getMonitorlastattemptat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp | undefined;
  setMonitorlastattemptat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp): PredictorStatus;
  hasMonitorlastattemptat(): boolean;
  clearMonitorlastattemptat(): PredictorStatus;

  getMonitorlastscore(): number;
  setMonitorlastscore(value: number): PredictorStatus;

  getMonitorlastlatency(): number;
  setMonitorlastlatency(value: number): PredictorStatus;

  getHealth(): PredictorHealth | undefined;
  setHealth(value?: PredictorHealth): PredictorStatus;
  hasHealth(): boolean;
  clearHealth(): PredictorStatus;

  getStatusesList(): Array<ChannelStatus>;
  setStatusesList(value: Array<ChannelStatus>): PredictorStatus;
  clearStatusesList(): PredictorStatus;
  addStatuses(value?: ChannelStatus, index?: number): ChannelStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorStatus): PredictorStatus.AsObject;
  static serializeBinaryToWriter(message: PredictorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorStatus;
  static deserializeBinaryFromReader(message: PredictorStatus, reader: jspb.BinaryReader): PredictorStatus;
}

export namespace PredictorStatus {
  export type AsObject = {
    modelstatusList: Array<ModelDeploymentStatus.AsObject>,
    conditionsList: Array<PredictorCondition.AsObject>,
    monitorlastattemptat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp.AsObject,
    monitorlastscore: number,
    monitorlastlatency: number,
    health?: PredictorHealth.AsObject,
    statusesList: Array<ChannelStatus.AsObject>,
  }
}

export class ProgressiveSpec extends jspb.Message {
  getWarmup(): number;
  setWarmup(value: number): ProgressiveSpec;

  getTrafficincrement(): number;
  setTrafficincrement(value: number): ProgressiveSpec;

  getCanarymetricsList(): Array<string>;
  setCanarymetricsList(value: Array<string>): ProgressiveSpec;
  clearCanarymetricsList(): ProgressiveSpec;
  addCanarymetrics(value: string, index?: number): ProgressiveSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgressiveSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ProgressiveSpec): ProgressiveSpec.AsObject;
  static serializeBinaryToWriter(message: ProgressiveSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgressiveSpec;
  static deserializeBinaryFromReader(message: ProgressiveSpec, reader: jspb.BinaryReader): ProgressiveSpec;
}

export namespace ProgressiveSpec {
  export type AsObject = {
    warmup: number,
    trafficincrement: number,
    canarymetricsList: Array<string>,
  }
}

export class StreamingChannelSpec extends jspb.Message {
  getConnectionname(): string;
  setConnectionname(value: string): StreamingChannelSpec;

  getInputkey(): string;
  setInputkey(value: string): StreamingChannelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingChannelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingChannelSpec): StreamingChannelSpec.AsObject;
  static serializeBinaryToWriter(message: StreamingChannelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingChannelSpec;
  static deserializeBinaryFromReader(message: StreamingChannelSpec, reader: jspb.BinaryReader): StreamingChannelSpec;
}

export namespace StreamingChannelSpec {
  export type AsObject = {
    connectionname: string,
    inputkey: string,
  }
}

export class TableChannelSpec extends jspb.Message {
  getConnectionname(): string;
  setConnectionname(value: string): TableChannelSpec;

  getDatasourcename(): string;
  setDatasourcename(value: string): TableChannelSpec;

  getTablename(): string;
  setTablename(value: string): TableChannelSpec;

  getScaninterval(): number;
  setScaninterval(value: number): TableChannelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableChannelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TableChannelSpec): TableChannelSpec.AsObject;
  static serializeBinaryToWriter(message: TableChannelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableChannelSpec;
  static deserializeBinaryFromReader(message: TableChannelSpec, reader: jspb.BinaryReader): TableChannelSpec;
}

export namespace TableChannelSpec {
  export type AsObject = {
    connectionname: string,
    datasourcename: string,
    tablename: string,
    scaninterval: number,
  }
}

