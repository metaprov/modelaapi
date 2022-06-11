import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AutoScaling extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): AutoScaling;

  getMinreplicas(): number;
  setMinreplicas(value: number): AutoScaling;

  getMaxreplicas(): number;
  setMaxreplicas(value: number): AutoScaling;

  getCpuavgutilization(): number;
  setCpuavgutilization(value: number): AutoScaling;

  getMemavgutilization(): number;
  setMemavgutilization(value: number): AutoScaling;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoScaling.AsObject;
  static toObject(includeInstance: boolean, msg: AutoScaling): AutoScaling.AsObject;
  static serializeBinaryToWriter(message: AutoScaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoScaling;
  static deserializeBinaryFromReader(message: AutoScaling, reader: jspb.BinaryReader): AutoScaling;
}

export namespace AutoScaling {
  export type AsObject = {
    enabled: boolean,
    minreplicas: number,
    maxreplicas: number,
    cpuavgutilization: number,
    memavgutilization: number,
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
  getVersionname(): string;
  setVersionname(value: string): CronPredictionSpec;

  getOwner(): string;
  setOwner(value: string): CronPredictionSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): CronPredictionSpec;
  hasSchedule(): boolean;
  clearSchedule(): CronPredictionSpec;

  getTemplate(): PredictionTemplate | undefined;
  setTemplate(value?: PredictionTemplate): CronPredictionSpec;
  hasTemplate(): boolean;
  clearTemplate(): CronPredictionSpec;

  getPriority(): string;
  setPriority(value: string): CronPredictionSpec;

  getPaused(): boolean;
  setPaused(value: boolean): CronPredictionSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): CronPredictionSpec;
  hasNotification(): boolean;
  clearNotification(): CronPredictionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronPredictionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CronPredictionSpec): CronPredictionSpec.AsObject;
  static serializeBinaryToWriter(message: CronPredictionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronPredictionSpec;
  static deserializeBinaryFromReader(message: CronPredictionSpec, reader: jspb.BinaryReader): CronPredictionSpec;
}

export namespace CronPredictionSpec {
  export type AsObject = {
    versionname: string,
    owner: string,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    template?: PredictionTemplate.AsObject,
    priority: string,
    paused: boolean,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
  }
}

export class CronPredictionStatus extends jspb.Message {
  getLastrun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus | undefined;
  setLastrun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus): CronPredictionStatus;
  hasLastrun(): boolean;
  clearLastrun(): CronPredictionStatus;

  getNextrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setNextrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): CronPredictionStatus;
  hasNextrun(): boolean;
  clearNextrun(): CronPredictionStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): CronPredictionStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): CronPredictionStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): CronPredictionStatus;

  getFailurereason(): string;
  setFailurereason(value: string): CronPredictionStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): CronPredictionStatus;

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
    lastrun?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus.AsObject,
    nextrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
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

  getNotifiername(): string;
  setNotifiername(value: string): CurtainSpec;

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
    notifiername: string,
    owner: string,
  }
}

export class CurtainStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): CurtainStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): CurtainStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): CurtainStatus;

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
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
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

export class CustomAppSpec extends jspb.Message {
  getOwner(): boolean;
  setOwner(value: boolean): CustomAppSpec;

  getTitle(): string;
  setTitle(value: string): CustomAppSpec;

  getPagesList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec>;
  setPagesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec>): CustomAppSpec;
  clearPagesList(): CustomAppSpec;
  addPages(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomAppSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CustomAppSpec): CustomAppSpec.AsObject;
  static serializeBinaryToWriter(message: CustomAppSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomAppSpec;
  static deserializeBinaryFromReader(message: CustomAppSpec, reader: jspb.BinaryReader): CustomAppSpec;
}

export namespace CustomAppSpec {
  export type AsObject = {
    owner: boolean,
    title: string,
    pagesList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec.AsObject>,
  }
}

export class DataApp extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataApp;
  hasMetadata(): boolean;
  clearMetadata(): DataApp;

  getSpec(): DataAppSpec | undefined;
  setSpec(value?: DataAppSpec): DataApp;
  hasSpec(): boolean;
  clearSpec(): DataApp;

  getStatus(): DataAppStatus | undefined;
  setStatus(value?: DataAppStatus): DataApp;
  hasStatus(): boolean;
  clearStatus(): DataApp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataApp.AsObject;
  static toObject(includeInstance: boolean, msg: DataApp): DataApp.AsObject;
  static serializeBinaryToWriter(message: DataApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataApp;
  static deserializeBinaryFromReader(message: DataApp, reader: jspb.BinaryReader): DataApp;
}

export namespace DataApp {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataAppSpec.AsObject,
    status?: DataAppStatus.AsObject,
  }
}

export class DataAppCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DataAppCondition;

  getStatus(): string;
  setStatus(value: string): DataAppCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataAppCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DataAppCondition;

  getReason(): string;
  setReason(value: string): DataAppCondition;

  getMessage(): string;
  setMessage(value: string): DataAppCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAppCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DataAppCondition): DataAppCondition.AsObject;
  static serializeBinaryToWriter(message: DataAppCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAppCondition;
  static deserializeBinaryFromReader(message: DataAppCondition, reader: jspb.BinaryReader): DataAppCondition;
}

export namespace DataAppCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class DataAppList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataAppList;
  hasMetadata(): boolean;
  clearMetadata(): DataAppList;

  getItemsList(): Array<DataApp>;
  setItemsList(value: Array<DataApp>): DataAppList;
  clearItemsList(): DataAppList;
  addItems(value?: DataApp, index?: number): DataApp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAppList.AsObject;
  static toObject(includeInstance: boolean, msg: DataAppList): DataAppList.AsObject;
  static serializeBinaryToWriter(message: DataAppList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAppList;
  static deserializeBinaryFromReader(message: DataAppList, reader: jspb.BinaryReader): DataAppList;
}

export namespace DataAppList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataApp.AsObject>,
  }
}

export class DataAppSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): DataAppSpec;

  getVersionname(): string;
  setVersionname(value: string): DataAppSpec;

  getDescription(): string;
  setDescription(value: string): DataAppSpec;

  getPath(): string;
  setPath(value: string): DataAppSpec;

  getModelname(): string;
  setModelname(value: string): DataAppSpec;

  getReplicas(): number;
  setReplicas(value: number): DataAppSpec;

  getPort(): number;
  setPort(value: number): DataAppSpec;

  getNodeport(): number;
  setNodeport(value: number): DataAppSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): DataAppSpec;
  hasResources(): boolean;
  clearResources(): DataAppSpec;

  getAccesstype(): string;
  setAccesstype(value: string): DataAppSpec;

  getProductref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setProductref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataAppSpec;
  hasProductref(): boolean;
  clearProductref(): DataAppSpec;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataAppSpec;
  hasServingsiteref(): boolean;
  clearServingsiteref(): DataAppSpec;

  getCustom(): CustomAppSpec | undefined;
  setCustom(value?: CustomAppSpec): DataAppSpec;
  hasCustom(): boolean;
  clearCustom(): DataAppSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAppSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataAppSpec): DataAppSpec.AsObject;
  static serializeBinaryToWriter(message: DataAppSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAppSpec;
  static deserializeBinaryFromReader(message: DataAppSpec, reader: jspb.BinaryReader): DataAppSpec;
}

export namespace DataAppSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    description: string,
    path: string,
    modelname: string,
    replicas: number,
    port: number,
    nodeport: number,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    accesstype: string,
    productref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    custom?: CustomAppSpec.AsObject,
  }
}

export class DataAppStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataAppStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataAppStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): DataAppStatus;

  getDeploymentstatus(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDeploymentstatus(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataAppStatus;
  hasDeploymentstatus(): boolean;
  clearDeploymentstatus(): DataAppStatus;

  getServicetstatus(): k8s_io_api_core_v1_generated_pb.ServiceStatus | undefined;
  setServicetstatus(value?: k8s_io_api_core_v1_generated_pb.ServiceStatus): DataAppStatus;
  hasServicetstatus(): boolean;
  clearServicetstatus(): DataAppStatus;

  getFailurereason(): string;
  setFailurereason(value: string): DataAppStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): DataAppStatus;

  getConditionsList(): Array<DataAppCondition>;
  setConditionsList(value: Array<DataAppCondition>): DataAppStatus;
  clearConditionsList(): DataAppStatus;
  addConditions(value?: DataAppCondition, index?: number): DataAppCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAppStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataAppStatus): DataAppStatus.AsObject;
  static serializeBinaryToWriter(message: DataAppStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAppStatus;
  static deserializeBinaryFromReader(message: DataAppStatus, reader: jspb.BinaryReader): DataAppStatus;
}

export namespace DataAppStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    deploymentstatus?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    servicetstatus?: k8s_io_api_core_v1_generated_pb.ServiceStatus.AsObject,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<DataAppCondition.AsObject>,
  }
}

export class ForecastSpec extends jspb.Message {
  getHierarchyvaluesMap(): jspb.Map<string, string>;
  clearHierarchyvaluesMap(): ForecastSpec;

  getHorizon(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.PeriodSpec | undefined;
  setHorizon(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.PeriodSpec): ForecastSpec;
  hasHorizon(): boolean;
  clearHorizon(): ForecastSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastSpec): ForecastSpec.AsObject;
  static serializeBinaryToWriter(message: ForecastSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastSpec;
  static deserializeBinaryFromReader(message: ForecastSpec, reader: jspb.BinaryReader): ForecastSpec;
}

export namespace ForecastSpec {
  export type AsObject = {
    hierarchyvaluesMap: Array<[string, string]>,
    horizon?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.PeriodSpec.AsObject,
  }
}

export class K8sObjectStatus extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): K8sObjectStatus;

  getName(): string;
  setName(value: string): K8sObjectStatus;

  getKind(): string;
  setKind(value: string): K8sObjectStatus;

  getAge(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setAge(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): K8sObjectStatus;
  hasAge(): boolean;
  clearAge(): K8sObjectStatus;

  getStatus(): string;
  setStatus(value: string): K8sObjectStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): K8sObjectStatus.AsObject;
  static toObject(includeInstance: boolean, msg: K8sObjectStatus): K8sObjectStatus.AsObject;
  static serializeBinaryToWriter(message: K8sObjectStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): K8sObjectStatus;
  static deserializeBinaryFromReader(message: K8sObjectStatus, reader: jspb.BinaryReader): K8sObjectStatus;
}

export namespace K8sObjectStatus {
  export type AsObject = {
    namespace: string,
    name: string,
    kind: string,
    age?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    status: string,
  }
}

export class ModelDeploymentStatus extends jspb.Message {
  getImagename(): string;
  setImagename(value: string): ModelDeploymentStatus;

  getDeploymentref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDeploymentref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentStatus;
  hasDeploymentref(): boolean;
  clearDeploymentref(): ModelDeploymentStatus;

  getServiceref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServiceref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentStatus;
  hasServiceref(): boolean;
  clearServiceref(): ModelDeploymentStatus;

  getHpaname(): string;
  setHpaname(value: string): ModelDeploymentStatus;

  getP50(): number;
  setP50(value: number): ModelDeploymentStatus;

  getP95(): number;
  setP95(value: number): ModelDeploymentStatus;

  getP99(): number;
  setP99(value: number): ModelDeploymentStatus;

  getLastpredictiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastpredictiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelDeploymentStatus;
  hasLastpredictiontime(): boolean;
  clearLastpredictiontime(): ModelDeploymentStatus;

  getDailypredictionavg(): number;
  setDailypredictionavg(value: number): ModelDeploymentStatus;

  getLastfailure(): string;
  setLastfailure(value: string): ModelDeploymentStatus;

  getPhase(): string;
  setPhase(value: string): ModelDeploymentStatus;

  getDeployedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setDeployedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelDeploymentStatus;
  hasDeployedat(): boolean;
  clearDeployedat(): ModelDeploymentStatus;

  getReleasedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setReleasedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelDeploymentStatus;
  hasReleasedat(): boolean;
  clearReleasedat(): ModelDeploymentStatus;

  getDatadrift(): boolean;
  setDatadrift(value: boolean): ModelDeploymentStatus;

  getConceptdrift(): boolean;
  setConceptdrift(value: boolean): ModelDeploymentStatus;

  getLastdailypredictionsList(): Array<number>;
  setLastdailypredictionsList(value: Array<number>): ModelDeploymentStatus;
  clearLastdailypredictionsList(): ModelDeploymentStatus;
  addLastdailypredictions(value: number, index?: number): ModelDeploymentStatus;

  getResourcestatusList(): Array<K8sObjectStatus>;
  setResourcestatusList(value: Array<K8sObjectStatus>): ModelDeploymentStatus;
  clearResourcestatusList(): ModelDeploymentStatus;
  addResourcestatus(value?: K8sObjectStatus, index?: number): K8sObjectStatus;

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
    deploymentref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    serviceref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    hpaname: string,
    p50: number,
    p95: number,
    p99: number,
    lastpredictiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    dailypredictionavg: number,
    lastfailure: string,
    phase: string,
    deployedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    releasedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    datadrift: boolean,
    conceptdrift: boolean,
    lastdailypredictionsList: Array<number>,
    resourcestatusList: Array<K8sObjectStatus.AsObject>,
  }
}

export class ModelRecord extends jspb.Message {
  getModelname(): string;
  setModelname(value: string): ModelRecord;

  getModelversion(): string;
  setModelversion(value: string): ModelRecord;

  getLiveat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLiveat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelRecord;
  hasLiveat(): boolean;
  clearLiveat(): ModelRecord;

  getRetiredat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setRetiredat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelRecord;
  hasRetiredat(): boolean;
  clearRetiredat(): ModelRecord;

  getAvgdailyprediction(): number;
  setAvgdailyprediction(value: number): ModelRecord;

  getAvglatency(): number;
  setAvglatency(value: number): ModelRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ModelRecord): ModelRecord.AsObject;
  static serializeBinaryToWriter(message: ModelRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelRecord;
  static deserializeBinaryFromReader(message: ModelRecord, reader: jspb.BinaryReader): ModelRecord;
}

export namespace ModelRecord {
  export type AsObject = {
    modelname: string,
    modelversion: string,
    liveat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    retiredat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    avgdailyprediction: number,
    avglatency: number,
  }
}

export class MonitorSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): MonitorSpec;

  getSamplepercent(): number;
  setSamplepercent(value: number): MonitorSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): MonitorSpec;
  hasSchedule(): boolean;
  clearSchedule(): MonitorSpec;

  getNotifiername(): string;
  setNotifiername(value: string): MonitorSpec;

  getValidationsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation>;
  setValidationsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation>): MonitorSpec;
  clearValidationsList(): MonitorSpec;
  addValidations(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation;

  getLogrequests(): boolean;
  setLogrequests(value: boolean): MonitorSpec;

  getLogresponses(): boolean;
  setLogresponses(value: boolean): MonitorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MonitorSpec): MonitorSpec.AsObject;
  static serializeBinaryToWriter(message: MonitorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonitorSpec;
  static deserializeBinaryFromReader(message: MonitorSpec, reader: jspb.BinaryReader): MonitorSpec;
}

export namespace MonitorSpec {
  export type AsObject = {
    enabled: boolean,
    samplepercent: number,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    notifiername: string,
    validationsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation.AsObject>,
    logrequests: boolean,
    logresponses: boolean,
  }
}

export class MonitorStatus extends jspb.Message {
  getMonitorlastattemptat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setMonitorlastattemptat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): MonitorStatus;
  hasMonitorlastattemptat(): boolean;
  clearMonitorlastattemptat(): MonitorStatus;

  getMonitorlastscore(): number;
  setMonitorlastscore(value: number): MonitorStatus;

  getMonitorlastlatency(): number;
  setMonitorlastlatency(value: number): MonitorStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: MonitorStatus): MonitorStatus.AsObject;
  static serializeBinaryToWriter(message: MonitorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonitorStatus;
  static deserializeBinaryFromReader(message: MonitorStatus, reader: jspb.BinaryReader): MonitorStatus;
}

export namespace MonitorStatus {
  export type AsObject = {
    monitorlastattemptat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    monitorlastscore: number,
    monitorlastlatency: number,
  }
}

export class OnlineFeatureStoreSpec extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): OnlineFeatureStoreSpec;

  getServicename(): string;
  setServicename(value: string): OnlineFeatureStoreSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineFeatureStoreSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineFeatureStoreSpec): OnlineFeatureStoreSpec.AsObject;
  static serializeBinaryToWriter(message: OnlineFeatureStoreSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineFeatureStoreSpec;
  static deserializeBinaryFromReader(message: OnlineFeatureStoreSpec, reader: jspb.BinaryReader): OnlineFeatureStoreSpec;
}

export namespace OnlineFeatureStoreSpec {
  export type AsObject = {
    active: boolean,
    servicename: string,
  }
}

export class OnlineStoreStatus extends jspb.Message {
  getLastaccessed(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastaccessed(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): OnlineStoreStatus;
  hasLastaccessed(): boolean;
  clearLastaccessed(): OnlineStoreStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineStoreStatus.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineStoreStatus): OnlineStoreStatus.AsObject;
  static serializeBinaryToWriter(message: OnlineStoreStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineStoreStatus;
  static deserializeBinaryFromReader(message: OnlineStoreStatus, reader: jspb.BinaryReader): OnlineStoreStatus;
}

export namespace OnlineStoreStatus {
  export type AsObject = {
    lastaccessed?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
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

export class PredictionCacheStatus extends jspb.Message {
  getLastaccessed(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastaccessed(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictionCacheStatus;
  hasLastaccessed(): boolean;
  clearLastaccessed(): PredictionCacheStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionCacheStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionCacheStatus): PredictionCacheStatus.AsObject;
  static serializeBinaryToWriter(message: PredictionCacheStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionCacheStatus;
  static deserializeBinaryFromReader(message: PredictionCacheStatus, reader: jspb.BinaryReader): PredictionCacheStatus;
}

export namespace PredictionCacheStatus {
  export type AsObject = {
    lastaccessed?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
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
  getVersionname(): string;
  setVersionname(value: string): PredictionSpec;

  getPredictorname(): string;
  setPredictorname(value: string): PredictionSpec;

  getLabeled(): boolean;
  setLabeled(value: boolean): PredictionSpec;

  getForecast(): boolean;
  setForecast(value: boolean): PredictionSpec;

  getInput(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec | undefined;
  setInput(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec): PredictionSpec;
  hasInput(): boolean;
  clearInput(): PredictionSpec;

  getOutput(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec | undefined;
  setOutput(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec): PredictionSpec;
  hasOutput(): boolean;
  clearOutput(): PredictionSpec;

  getTestsList(): Array<string>;
  setTestsList(value: Array<string>): PredictionSpec;
  clearTestsList(): PredictionSpec;
  addTests(value: string, index?: number): PredictionSpec;

  getOwner(): string;
  setOwner(value: string): PredictionSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): PredictionSpec;
  hasResources(): boolean;
  clearResources(): PredictionSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): PredictionSpec;

  getPriority(): string;
  setPriority(value: string): PredictionSpec;

  getAborted(): boolean;
  setAborted(value: boolean): PredictionSpec;

  getTtl(): number;
  setTtl(value: number): PredictionSpec;

  getForecastinfo(): ForecastSpec | undefined;
  setForecastinfo(value?: ForecastSpec): PredictionSpec;
  hasForecastinfo(): boolean;
  clearForecastinfo(): PredictionSpec;

  getCronpredictorname(): string;
  setCronpredictorname(value: string): PredictionSpec;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictionSpec;
  hasServingsiteref(): boolean;
  clearServingsiteref(): PredictionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionSpec): PredictionSpec.AsObject;
  static serializeBinaryToWriter(message: PredictionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionSpec;
  static deserializeBinaryFromReader(message: PredictionSpec, reader: jspb.BinaryReader): PredictionSpec;
}

export namespace PredictionSpec {
  export type AsObject = {
    versionname: string,
    predictorname: string,
    labeled: boolean,
    forecast: boolean,
    input?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec.AsObject,
    output?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.AsObject,
    testsList: Array<string>,
    owner: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    activedeadlineseconds: number,
    priority: string,
    aborted: boolean,
    ttl: number,
    forecastinfo?: ForecastSpec.AsObject,
    cronpredictorname: string,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class PredictionStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictionStatus;
  hasStarttime(): boolean;
  clearStarttime(): PredictionStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictionStatus;
  hasEndtime(): boolean;
  clearEndtime(): PredictionStatus;

  getPhase(): string;
  setPhase(value: string): PredictionStatus;

  getResultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setResultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): PredictionStatus;
  clearResultsList(): PredictionStatus;
  addResults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): PredictionStatus;

  getRows(): number;
  setRows(value: number): PredictionStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): PredictionStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): PredictionStatus;
  hasLogs(): boolean;
  clearLogs(): PredictionStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictionStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): PredictionStatus;

  getFailurereason(): string;
  setFailurereason(value: string): PredictionStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): PredictionStatus;

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
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    resultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    observedgeneration: number,
    rows: number,
    triggeredby: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason: string,
    failuremessage: string,
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

export class PredictorAuthSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): PredictorAuthSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorAuthSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorAuthSpec): PredictorAuthSpec.AsObject;
  static serializeBinaryToWriter(message: PredictorAuthSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorAuthSpec;
  static deserializeBinaryFromReader(message: PredictorAuthSpec, reader: jspb.BinaryReader): PredictorAuthSpec;
}

export namespace PredictorAuthSpec {
  export type AsObject = {
    enabled: boolean,
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
  getVersionname(): string;
  setVersionname(value: string): PredictorSpec;

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

  getTemplate(): k8s_io_api_core_v1_generated_pb.PodTemplate | undefined;
  setTemplate(value?: k8s_io_api_core_v1_generated_pb.PodTemplate): PredictorSpec;
  hasTemplate(): boolean;
  clearTemplate(): PredictorSpec;

  getModelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec>;
  setModelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec>): PredictorSpec;
  clearModelsList(): PredictorSpec;
  addModels(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec;

  getProgressive(): ProgressiveSpec | undefined;
  setProgressive(value?: ProgressiveSpec): PredictorSpec;
  hasProgressive(): boolean;
  clearProgressive(): PredictorSpec;

  getArtifactsfolder(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setArtifactsfolder(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): PredictorSpec;
  hasArtifactsfolder(): boolean;
  clearArtifactsfolder(): PredictorSpec;

  getPort(): number;
  setPort(value: number): PredictorSpec;

  getNodeport(): number;
  setNodeport(value: number): PredictorSpec;

  getPath(): string;
  setPath(value: string): PredictorSpec;

  getAccesstype(): string;
  setAccesstype(value: string): PredictorSpec;

  getReplicas(): number;
  setReplicas(value: number): PredictorSpec;

  getAutoscaling(): AutoScaling | undefined;
  setAutoscaling(value?: AutoScaling): PredictorSpec;
  hasAutoscaling(): boolean;
  clearAutoscaling(): PredictorSpec;

  getOwner(): string;
  setOwner(value: string): PredictorSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): PredictorSpec;
  hasResources(): boolean;
  clearResources(): PredictorSpec;

  getCache(): PredictionCacheSpec | undefined;
  setCache(value?: PredictionCacheSpec): PredictorSpec;
  hasCache(): boolean;
  clearCache(): PredictorSpec;

  getStore(): OnlineFeatureStoreSpec | undefined;
  setStore(value?: OnlineFeatureStoreSpec): PredictorSpec;
  hasStore(): boolean;
  clearStore(): PredictorSpec;

  getForwardcurtain(): string;
  setForwardcurtain(value: string): PredictorSpec;

  getBackwardcurtain(): string;
  setBackwardcurtain(value: string): PredictorSpec;

  getType(): string;
  setType(value: string): PredictorSpec;

  getTask(): string;
  setTask(value: string): PredictorSpec;

  getPredictionthreshold(): number;
  setPredictionthreshold(value: number): PredictorSpec;

  getMonitor(): MonitorSpec | undefined;
  setMonitor(value?: MonitorSpec): PredictorSpec;
  hasMonitor(): boolean;
  clearMonitor(): PredictorSpec;

  getAuth(): PredictorAuthSpec | undefined;
  setAuth(value?: PredictorAuthSpec): PredictorSpec;
  hasAuth(): boolean;
  clearAuth(): PredictorSpec;

  getRest(): boolean;
  setRest(value: boolean): PredictorSpec;

  getTargetcolumn(): string;
  setTargetcolumn(value: string): PredictorSpec;

  getPositivelabel(): string;
  setPositivelabel(value: string): PredictorSpec;

  getNegativelabel(): string;
  setNegativelabel(value: string): PredictorSpec;

  getTrainingdatasetref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTrainingdatasetref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorSpec;
  hasTrainingdatasetref(): boolean;
  clearTrainingdatasetref(): PredictorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorSpec): PredictorSpec.AsObject;
  static serializeBinaryToWriter(message: PredictorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorSpec;
  static deserializeBinaryFromReader(message: PredictorSpec, reader: jspb.BinaryReader): PredictorSpec;
}

export namespace PredictorSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    productref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    template?: k8s_io_api_core_v1_generated_pb.PodTemplate.AsObject,
    modelsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.AsObject>,
    progressive?: ProgressiveSpec.AsObject,
    artifactsfolder?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    port: number,
    nodeport: number,
    path: string,
    accesstype: string,
    replicas: number,
    autoscaling?: AutoScaling.AsObject,
    owner: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    cache?: PredictionCacheSpec.AsObject,
    store?: OnlineFeatureStoreSpec.AsObject,
    forwardcurtain: string,
    backwardcurtain: string,
    type: string,
    task: string,
    predictionthreshold: number,
    monitor?: MonitorSpec.AsObject,
    auth?: PredictorAuthSpec.AsObject,
    rest: boolean,
    targetcolumn: string,
    positivelabel: string,
    negativelabel: string,
    trainingdatasetref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class PredictorStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): PredictorStatus;

  getHistoryList(): Array<ModelRecord>;
  setHistoryList(value: Array<ModelRecord>): PredictorStatus;
  clearHistoryList(): PredictorStatus;
  addHistory(value?: ModelRecord, index?: number): ModelRecord;

  getModelsList(): Array<ModelDeploymentStatus>;
  setModelsList(value: Array<ModelDeploymentStatus>): PredictorStatus;
  clearModelsList(): PredictorStatus;
  addModels(value?: ModelDeploymentStatus, index?: number): ModelDeploymentStatus;

  getPredictorlet(): PredictorletStatus | undefined;
  setPredictorlet(value?: PredictorletStatus): PredictorStatus;
  hasPredictorlet(): boolean;
  clearPredictorlet(): PredictorStatus;

  getCache(): PredictionCacheStatus | undefined;
  setCache(value?: PredictionCacheStatus): PredictorStatus;
  hasCache(): boolean;
  clearCache(): PredictorStatus;

  getOnlinestore(): OnlineStoreStatus | undefined;
  setOnlinestore(value?: OnlineStoreStatus): PredictorStatus;
  hasOnlinestore(): boolean;
  clearOnlinestore(): PredictorStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictorStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): PredictorStatus;

  getEndpoint(): string;
  setEndpoint(value: string): PredictorStatus;

  getFailurereason(): string;
  setFailurereason(value: string): PredictorStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): PredictorStatus;

  getLoadbalancerstatus(): k8s_io_api_core_v1_generated_pb.LoadBalancerStatus | undefined;
  setLoadbalancerstatus(value?: k8s_io_api_core_v1_generated_pb.LoadBalancerStatus): PredictorStatus;
  hasLoadbalancerstatus(): boolean;
  clearLoadbalancerstatus(): PredictorStatus;

  getConditionsList(): Array<PredictorCondition>;
  setConditionsList(value: Array<PredictorCondition>): PredictorStatus;
  clearConditionsList(): PredictorStatus;
  addConditions(value?: PredictorCondition, index?: number): PredictorCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorStatus): PredictorStatus.AsObject;
  static serializeBinaryToWriter(message: PredictorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorStatus;
  static deserializeBinaryFromReader(message: PredictorStatus, reader: jspb.BinaryReader): PredictorStatus;
}

export namespace PredictorStatus {
  export type AsObject = {
    observedgeneration: number,
    historyList: Array<ModelRecord.AsObject>,
    modelsList: Array<ModelDeploymentStatus.AsObject>,
    predictorlet?: PredictorletStatus.AsObject,
    cache?: PredictionCacheStatus.AsObject,
    onlinestore?: OnlineStoreStatus.AsObject,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endpoint: string,
    failurereason: string,
    failuremessage: string,
    loadbalancerstatus?: k8s_io_api_core_v1_generated_pb.LoadBalancerStatus.AsObject,
    conditionsList: Array<PredictorCondition.AsObject>,
  }
}

export class PredictorletStatus extends jspb.Message {
  getImagename(): string;
  setImagename(value: string): PredictorletStatus;

  getDeploymentref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDeploymentref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorletStatus;
  hasDeploymentref(): boolean;
  clearDeploymentref(): PredictorletStatus;

  getServiceref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServiceref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorletStatus;
  hasServiceref(): boolean;
  clearServiceref(): PredictorletStatus;

  getP50(): number;
  setP50(value: number): PredictorletStatus;

  getCurrent95(): number;
  setCurrent95(value: number): PredictorletStatus;

  getCurrent99(): number;
  setCurrent99(value: number): PredictorletStatus;

  getDailypredictionavg(): number;
  setDailypredictionavg(value: number): PredictorletStatus;

  getTotalpredictions(): number;
  setTotalpredictions(value: number): PredictorletStatus;

  getLastdailypredictionsList(): Array<number>;
  setLastdailypredictionsList(value: Array<number>): PredictorletStatus;
  clearLastdailypredictionsList(): PredictorletStatus;
  addLastdailypredictions(value: number, index?: number): PredictorletStatus;

  getLastpredictiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastpredictiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictorletStatus;
  hasLastpredictiontime(): boolean;
  clearLastpredictiontime(): PredictorletStatus;

  getLastfailure(): string;
  setLastfailure(value: string): PredictorletStatus;

  getPhase(): string;
  setPhase(value: string): PredictorletStatus;

  getDeployedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setDeployedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictorletStatus;
  hasDeployedat(): boolean;
  clearDeployedat(): PredictorletStatus;

  getReleasedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setReleasedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictorletStatus;
  hasReleasedat(): boolean;
  clearReleasedat(): PredictorletStatus;

  getTrainingdatasetname(): string;
  setTrainingdatasetname(value: string): PredictorletStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorletStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorletStatus): PredictorletStatus.AsObject;
  static serializeBinaryToWriter(message: PredictorletStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorletStatus;
  static deserializeBinaryFromReader(message: PredictorletStatus, reader: jspb.BinaryReader): PredictorletStatus;
}

export namespace PredictorletStatus {
  export type AsObject = {
    imagename: string,
    deploymentref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    serviceref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    p50: number,
    current95: number,
    current99: number,
    dailypredictionavg: number,
    totalpredictions: number,
    lastdailypredictionsList: Array<number>,
    lastpredictiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastfailure: string,
    phase: string,
    deployedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    releasedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trainingdatasetname: string,
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

