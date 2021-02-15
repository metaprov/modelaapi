import * as jspb from 'google-protobuf'

import * as k8s_io_apimachinery_pkg_api_resource_generated_pb from '../../../../k8s.io/apimachinery/pkg/api/resource/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';
import * as k8s_io_apimachinery_pkg_util_intstr_generated_pb from '../../../../k8s.io/apimachinery/pkg/util/intstr/generated_pb';


export class AWSElasticBlockStoreVolumeSource extends jspb.Message {
  getVolumeid(): string;
  setVolumeid(value: string): AWSElasticBlockStoreVolumeSource;

  getFstype(): string;
  setFstype(value: string): AWSElasticBlockStoreVolumeSource;

  getPartition(): number;
  setPartition(value: number): AWSElasticBlockStoreVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): AWSElasticBlockStoreVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AWSElasticBlockStoreVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: AWSElasticBlockStoreVolumeSource): AWSElasticBlockStoreVolumeSource.AsObject;
  static serializeBinaryToWriter(message: AWSElasticBlockStoreVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AWSElasticBlockStoreVolumeSource;
  static deserializeBinaryFromReader(message: AWSElasticBlockStoreVolumeSource, reader: jspb.BinaryReader): AWSElasticBlockStoreVolumeSource;
}

export namespace AWSElasticBlockStoreVolumeSource {
  export type AsObject = {
    volumeid: string,
    fstype: string,
    partition: number,
    readonly: boolean,
  }
}

export class Affinity extends jspb.Message {
  getNodeaffinity(): NodeAffinity | undefined;
  setNodeaffinity(value?: NodeAffinity): Affinity;
  hasNodeaffinity(): boolean;
  clearNodeaffinity(): Affinity;

  getPodaffinity(): PodAffinity | undefined;
  setPodaffinity(value?: PodAffinity): Affinity;
  hasPodaffinity(): boolean;
  clearPodaffinity(): Affinity;

  getPodantiaffinity(): PodAntiAffinity | undefined;
  setPodantiaffinity(value?: PodAntiAffinity): Affinity;
  hasPodantiaffinity(): boolean;
  clearPodantiaffinity(): Affinity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Affinity.AsObject;
  static toObject(includeInstance: boolean, msg: Affinity): Affinity.AsObject;
  static serializeBinaryToWriter(message: Affinity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Affinity;
  static deserializeBinaryFromReader(message: Affinity, reader: jspb.BinaryReader): Affinity;
}

export namespace Affinity {
  export type AsObject = {
    nodeaffinity?: NodeAffinity.AsObject,
    podaffinity?: PodAffinity.AsObject,
    podantiaffinity?: PodAntiAffinity.AsObject,
  }
}

export class AttachedVolume extends jspb.Message {
  getName(): string;
  setName(value: string): AttachedVolume;

  getDevicepath(): string;
  setDevicepath(value: string): AttachedVolume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachedVolume.AsObject;
  static toObject(includeInstance: boolean, msg: AttachedVolume): AttachedVolume.AsObject;
  static serializeBinaryToWriter(message: AttachedVolume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachedVolume;
  static deserializeBinaryFromReader(message: AttachedVolume, reader: jspb.BinaryReader): AttachedVolume;
}

export namespace AttachedVolume {
  export type AsObject = {
    name: string,
    devicepath: string,
  }
}

export class AvoidPods extends jspb.Message {
  getPreferavoidpodsList(): Array<PreferAvoidPodsEntry>;
  setPreferavoidpodsList(value: Array<PreferAvoidPodsEntry>): AvoidPods;
  clearPreferavoidpodsList(): AvoidPods;
  addPreferavoidpods(value?: PreferAvoidPodsEntry, index?: number): PreferAvoidPodsEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvoidPods.AsObject;
  static toObject(includeInstance: boolean, msg: AvoidPods): AvoidPods.AsObject;
  static serializeBinaryToWriter(message: AvoidPods, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvoidPods;
  static deserializeBinaryFromReader(message: AvoidPods, reader: jspb.BinaryReader): AvoidPods;
}

export namespace AvoidPods {
  export type AsObject = {
    preferavoidpodsList: Array<PreferAvoidPodsEntry.AsObject>,
  }
}

export class AzureDiskVolumeSource extends jspb.Message {
  getDiskname(): string;
  setDiskname(value: string): AzureDiskVolumeSource;

  getDiskuri(): string;
  setDiskuri(value: string): AzureDiskVolumeSource;

  getCachingmode(): string;
  setCachingmode(value: string): AzureDiskVolumeSource;

  getFstype(): string;
  setFstype(value: string): AzureDiskVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): AzureDiskVolumeSource;

  getKind(): string;
  setKind(value: string): AzureDiskVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureDiskVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: AzureDiskVolumeSource): AzureDiskVolumeSource.AsObject;
  static serializeBinaryToWriter(message: AzureDiskVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureDiskVolumeSource;
  static deserializeBinaryFromReader(message: AzureDiskVolumeSource, reader: jspb.BinaryReader): AzureDiskVolumeSource;
}

export namespace AzureDiskVolumeSource {
  export type AsObject = {
    diskname: string,
    diskuri: string,
    cachingmode: string,
    fstype: string,
    readonly: boolean,
    kind: string,
  }
}

export class AzureFilePersistentVolumeSource extends jspb.Message {
  getSecretname(): string;
  setSecretname(value: string): AzureFilePersistentVolumeSource;

  getSharename(): string;
  setSharename(value: string): AzureFilePersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): AzureFilePersistentVolumeSource;

  getSecretnamespace(): string;
  setSecretnamespace(value: string): AzureFilePersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureFilePersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: AzureFilePersistentVolumeSource): AzureFilePersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: AzureFilePersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureFilePersistentVolumeSource;
  static deserializeBinaryFromReader(message: AzureFilePersistentVolumeSource, reader: jspb.BinaryReader): AzureFilePersistentVolumeSource;
}

export namespace AzureFilePersistentVolumeSource {
  export type AsObject = {
    secretname: string,
    sharename: string,
    readonly: boolean,
    secretnamespace: string,
  }
}

export class AzureFileVolumeSource extends jspb.Message {
  getSecretname(): string;
  setSecretname(value: string): AzureFileVolumeSource;

  getSharename(): string;
  setSharename(value: string): AzureFileVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): AzureFileVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureFileVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: AzureFileVolumeSource): AzureFileVolumeSource.AsObject;
  static serializeBinaryToWriter(message: AzureFileVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureFileVolumeSource;
  static deserializeBinaryFromReader(message: AzureFileVolumeSource, reader: jspb.BinaryReader): AzureFileVolumeSource;
}

export namespace AzureFileVolumeSource {
  export type AsObject = {
    secretname: string,
    sharename: string,
    readonly: boolean,
  }
}

export class Binding extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Binding;
  hasMetadata(): boolean;
  clearMetadata(): Binding;

  getTarget(): ObjectReference | undefined;
  setTarget(value?: ObjectReference): Binding;
  hasTarget(): boolean;
  clearTarget(): Binding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Binding.AsObject;
  static toObject(includeInstance: boolean, msg: Binding): Binding.AsObject;
  static serializeBinaryToWriter(message: Binding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Binding;
  static deserializeBinaryFromReader(message: Binding, reader: jspb.BinaryReader): Binding;
}

export namespace Binding {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    target?: ObjectReference.AsObject,
  }
}

export class CSIPersistentVolumeSource extends jspb.Message {
  getDriver(): string;
  setDriver(value: string): CSIPersistentVolumeSource;

  getVolumehandle(): string;
  setVolumehandle(value: string): CSIPersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): CSIPersistentVolumeSource;

  getFstype(): string;
  setFstype(value: string): CSIPersistentVolumeSource;

  getVolumeattributesMap(): jspb.Map<string, string>;
  clearVolumeattributesMap(): CSIPersistentVolumeSource;

  getControllerpublishsecretref(): SecretReference | undefined;
  setControllerpublishsecretref(value?: SecretReference): CSIPersistentVolumeSource;
  hasControllerpublishsecretref(): boolean;
  clearControllerpublishsecretref(): CSIPersistentVolumeSource;

  getNodestagesecretref(): SecretReference | undefined;
  setNodestagesecretref(value?: SecretReference): CSIPersistentVolumeSource;
  hasNodestagesecretref(): boolean;
  clearNodestagesecretref(): CSIPersistentVolumeSource;

  getNodepublishsecretref(): SecretReference | undefined;
  setNodepublishsecretref(value?: SecretReference): CSIPersistentVolumeSource;
  hasNodepublishsecretref(): boolean;
  clearNodepublishsecretref(): CSIPersistentVolumeSource;

  getControllerexpandsecretref(): SecretReference | undefined;
  setControllerexpandsecretref(value?: SecretReference): CSIPersistentVolumeSource;
  hasControllerexpandsecretref(): boolean;
  clearControllerexpandsecretref(): CSIPersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CSIPersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: CSIPersistentVolumeSource): CSIPersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: CSIPersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CSIPersistentVolumeSource;
  static deserializeBinaryFromReader(message: CSIPersistentVolumeSource, reader: jspb.BinaryReader): CSIPersistentVolumeSource;
}

export namespace CSIPersistentVolumeSource {
  export type AsObject = {
    driver: string,
    volumehandle: string,
    readonly: boolean,
    fstype: string,
    volumeattributesMap: Array<[string, string]>,
    controllerpublishsecretref?: SecretReference.AsObject,
    nodestagesecretref?: SecretReference.AsObject,
    nodepublishsecretref?: SecretReference.AsObject,
    controllerexpandsecretref?: SecretReference.AsObject,
  }
}

export class CSIVolumeSource extends jspb.Message {
  getDriver(): string;
  setDriver(value: string): CSIVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): CSIVolumeSource;

  getFstype(): string;
  setFstype(value: string): CSIVolumeSource;

  getVolumeattributesMap(): jspb.Map<string, string>;
  clearVolumeattributesMap(): CSIVolumeSource;

  getNodepublishsecretref(): LocalObjectReference | undefined;
  setNodepublishsecretref(value?: LocalObjectReference): CSIVolumeSource;
  hasNodepublishsecretref(): boolean;
  clearNodepublishsecretref(): CSIVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CSIVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: CSIVolumeSource): CSIVolumeSource.AsObject;
  static serializeBinaryToWriter(message: CSIVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CSIVolumeSource;
  static deserializeBinaryFromReader(message: CSIVolumeSource, reader: jspb.BinaryReader): CSIVolumeSource;
}

export namespace CSIVolumeSource {
  export type AsObject = {
    driver: string,
    readonly: boolean,
    fstype: string,
    volumeattributesMap: Array<[string, string]>,
    nodepublishsecretref?: LocalObjectReference.AsObject,
  }
}

export class Capabilities extends jspb.Message {
  getAddList(): Array<string>;
  setAddList(value: Array<string>): Capabilities;
  clearAddList(): Capabilities;
  addAdd(value: string, index?: number): Capabilities;

  getDropList(): Array<string>;
  setDropList(value: Array<string>): Capabilities;
  clearDropList(): Capabilities;
  addDrop(value: string, index?: number): Capabilities;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Capabilities.AsObject;
  static toObject(includeInstance: boolean, msg: Capabilities): Capabilities.AsObject;
  static serializeBinaryToWriter(message: Capabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Capabilities;
  static deserializeBinaryFromReader(message: Capabilities, reader: jspb.BinaryReader): Capabilities;
}

export namespace Capabilities {
  export type AsObject = {
    addList: Array<string>,
    dropList: Array<string>,
  }
}

export class CephFSPersistentVolumeSource extends jspb.Message {
  getMonitorsList(): Array<string>;
  setMonitorsList(value: Array<string>): CephFSPersistentVolumeSource;
  clearMonitorsList(): CephFSPersistentVolumeSource;
  addMonitors(value: string, index?: number): CephFSPersistentVolumeSource;

  getPath(): string;
  setPath(value: string): CephFSPersistentVolumeSource;

  getUser(): string;
  setUser(value: string): CephFSPersistentVolumeSource;

  getSecretfile(): string;
  setSecretfile(value: string): CephFSPersistentVolumeSource;

  getSecretref(): SecretReference | undefined;
  setSecretref(value?: SecretReference): CephFSPersistentVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): CephFSPersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): CephFSPersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CephFSPersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: CephFSPersistentVolumeSource): CephFSPersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: CephFSPersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CephFSPersistentVolumeSource;
  static deserializeBinaryFromReader(message: CephFSPersistentVolumeSource, reader: jspb.BinaryReader): CephFSPersistentVolumeSource;
}

export namespace CephFSPersistentVolumeSource {
  export type AsObject = {
    monitorsList: Array<string>,
    path: string,
    user: string,
    secretfile: string,
    secretref?: SecretReference.AsObject,
    readonly: boolean,
  }
}

export class CephFSVolumeSource extends jspb.Message {
  getMonitorsList(): Array<string>;
  setMonitorsList(value: Array<string>): CephFSVolumeSource;
  clearMonitorsList(): CephFSVolumeSource;
  addMonitors(value: string, index?: number): CephFSVolumeSource;

  getPath(): string;
  setPath(value: string): CephFSVolumeSource;

  getUser(): string;
  setUser(value: string): CephFSVolumeSource;

  getSecretfile(): string;
  setSecretfile(value: string): CephFSVolumeSource;

  getSecretref(): LocalObjectReference | undefined;
  setSecretref(value?: LocalObjectReference): CephFSVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): CephFSVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): CephFSVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CephFSVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: CephFSVolumeSource): CephFSVolumeSource.AsObject;
  static serializeBinaryToWriter(message: CephFSVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CephFSVolumeSource;
  static deserializeBinaryFromReader(message: CephFSVolumeSource, reader: jspb.BinaryReader): CephFSVolumeSource;
}

export namespace CephFSVolumeSource {
  export type AsObject = {
    monitorsList: Array<string>,
    path: string,
    user: string,
    secretfile: string,
    secretref?: LocalObjectReference.AsObject,
    readonly: boolean,
  }
}

export class CinderPersistentVolumeSource extends jspb.Message {
  getVolumeid(): string;
  setVolumeid(value: string): CinderPersistentVolumeSource;

  getFstype(): string;
  setFstype(value: string): CinderPersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): CinderPersistentVolumeSource;

  getSecretref(): SecretReference | undefined;
  setSecretref(value?: SecretReference): CinderPersistentVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): CinderPersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CinderPersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: CinderPersistentVolumeSource): CinderPersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: CinderPersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CinderPersistentVolumeSource;
  static deserializeBinaryFromReader(message: CinderPersistentVolumeSource, reader: jspb.BinaryReader): CinderPersistentVolumeSource;
}

export namespace CinderPersistentVolumeSource {
  export type AsObject = {
    volumeid: string,
    fstype: string,
    readonly: boolean,
    secretref?: SecretReference.AsObject,
  }
}

export class CinderVolumeSource extends jspb.Message {
  getVolumeid(): string;
  setVolumeid(value: string): CinderVolumeSource;

  getFstype(): string;
  setFstype(value: string): CinderVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): CinderVolumeSource;

  getSecretref(): LocalObjectReference | undefined;
  setSecretref(value?: LocalObjectReference): CinderVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): CinderVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CinderVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: CinderVolumeSource): CinderVolumeSource.AsObject;
  static serializeBinaryToWriter(message: CinderVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CinderVolumeSource;
  static deserializeBinaryFromReader(message: CinderVolumeSource, reader: jspb.BinaryReader): CinderVolumeSource;
}

export namespace CinderVolumeSource {
  export type AsObject = {
    volumeid: string,
    fstype: string,
    readonly: boolean,
    secretref?: LocalObjectReference.AsObject,
  }
}

export class ClientIPConfig extends jspb.Message {
  getTimeoutseconds(): number;
  setTimeoutseconds(value: number): ClientIPConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientIPConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ClientIPConfig): ClientIPConfig.AsObject;
  static serializeBinaryToWriter(message: ClientIPConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientIPConfig;
  static deserializeBinaryFromReader(message: ClientIPConfig, reader: jspb.BinaryReader): ClientIPConfig;
}

export namespace ClientIPConfig {
  export type AsObject = {
    timeoutseconds: number,
  }
}

export class ComponentCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ComponentCondition;

  getStatus(): string;
  setStatus(value: string): ComponentCondition;

  getMessage(): string;
  setMessage(value: string): ComponentCondition;

  getError(): string;
  setError(value: string): ComponentCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentCondition): ComponentCondition.AsObject;
  static serializeBinaryToWriter(message: ComponentCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentCondition;
  static deserializeBinaryFromReader(message: ComponentCondition, reader: jspb.BinaryReader): ComponentCondition;
}

export namespace ComponentCondition {
  export type AsObject = {
    type: string,
    status: string,
    message: string,
    error: string,
  }
}

export class ComponentStatus extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ComponentStatus;
  hasMetadata(): boolean;
  clearMetadata(): ComponentStatus;

  getConditionsList(): Array<ComponentCondition>;
  setConditionsList(value: Array<ComponentCondition>): ComponentStatus;
  clearConditionsList(): ComponentStatus;
  addConditions(value?: ComponentCondition, index?: number): ComponentCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentStatus): ComponentStatus.AsObject;
  static serializeBinaryToWriter(message: ComponentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentStatus;
  static deserializeBinaryFromReader(message: ComponentStatus, reader: jspb.BinaryReader): ComponentStatus;
}

export namespace ComponentStatus {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    conditionsList: Array<ComponentCondition.AsObject>,
  }
}

export class ComponentStatusList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ComponentStatusList;
  hasMetadata(): boolean;
  clearMetadata(): ComponentStatusList;

  getItemsList(): Array<ComponentStatus>;
  setItemsList(value: Array<ComponentStatus>): ComponentStatusList;
  clearItemsList(): ComponentStatusList;
  addItems(value?: ComponentStatus, index?: number): ComponentStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentStatusList.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentStatusList): ComponentStatusList.AsObject;
  static serializeBinaryToWriter(message: ComponentStatusList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentStatusList;
  static deserializeBinaryFromReader(message: ComponentStatusList, reader: jspb.BinaryReader): ComponentStatusList;
}

export namespace ComponentStatusList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ComponentStatus.AsObject>,
  }
}

export class ConfigMap extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ConfigMap;
  hasMetadata(): boolean;
  clearMetadata(): ConfigMap;

  getImmutable(): boolean;
  setImmutable(value: boolean): ConfigMap;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): ConfigMap;

  getBinarydataMap(): jspb.Map<string, Uint8Array | string>;
  clearBinarydataMap(): ConfigMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMap.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMap): ConfigMap.AsObject;
  static serializeBinaryToWriter(message: ConfigMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMap;
  static deserializeBinaryFromReader(message: ConfigMap, reader: jspb.BinaryReader): ConfigMap;
}

export namespace ConfigMap {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    immutable: boolean,
    dataMap: Array<[string, string]>,
    binarydataMap: Array<[string, Uint8Array | string]>,
  }
}

export class ConfigMapEnvSource extends jspb.Message {
  getLocalobjectreference(): LocalObjectReference | undefined;
  setLocalobjectreference(value?: LocalObjectReference): ConfigMapEnvSource;
  hasLocalobjectreference(): boolean;
  clearLocalobjectreference(): ConfigMapEnvSource;

  getOptional(): boolean;
  setOptional(value: boolean): ConfigMapEnvSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMapEnvSource.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMapEnvSource): ConfigMapEnvSource.AsObject;
  static serializeBinaryToWriter(message: ConfigMapEnvSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMapEnvSource;
  static deserializeBinaryFromReader(message: ConfigMapEnvSource, reader: jspb.BinaryReader): ConfigMapEnvSource;
}

export namespace ConfigMapEnvSource {
  export type AsObject = {
    localobjectreference?: LocalObjectReference.AsObject,
    optional: boolean,
  }
}

export class ConfigMapKeySelector extends jspb.Message {
  getLocalobjectreference(): LocalObjectReference | undefined;
  setLocalobjectreference(value?: LocalObjectReference): ConfigMapKeySelector;
  hasLocalobjectreference(): boolean;
  clearLocalobjectreference(): ConfigMapKeySelector;

  getKey(): string;
  setKey(value: string): ConfigMapKeySelector;

  getOptional(): boolean;
  setOptional(value: boolean): ConfigMapKeySelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMapKeySelector.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMapKeySelector): ConfigMapKeySelector.AsObject;
  static serializeBinaryToWriter(message: ConfigMapKeySelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMapKeySelector;
  static deserializeBinaryFromReader(message: ConfigMapKeySelector, reader: jspb.BinaryReader): ConfigMapKeySelector;
}

export namespace ConfigMapKeySelector {
  export type AsObject = {
    localobjectreference?: LocalObjectReference.AsObject,
    key: string,
    optional: boolean,
  }
}

export class ConfigMapList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ConfigMapList;
  hasMetadata(): boolean;
  clearMetadata(): ConfigMapList;

  getItemsList(): Array<ConfigMap>;
  setItemsList(value: Array<ConfigMap>): ConfigMapList;
  clearItemsList(): ConfigMapList;
  addItems(value?: ConfigMap, index?: number): ConfigMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMapList.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMapList): ConfigMapList.AsObject;
  static serializeBinaryToWriter(message: ConfigMapList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMapList;
  static deserializeBinaryFromReader(message: ConfigMapList, reader: jspb.BinaryReader): ConfigMapList;
}

export namespace ConfigMapList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ConfigMap.AsObject>,
  }
}

export class ConfigMapNodeConfigSource extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ConfigMapNodeConfigSource;

  getName(): string;
  setName(value: string): ConfigMapNodeConfigSource;

  getUid(): string;
  setUid(value: string): ConfigMapNodeConfigSource;

  getResourceversion(): string;
  setResourceversion(value: string): ConfigMapNodeConfigSource;

  getKubeletconfigkey(): string;
  setKubeletconfigkey(value: string): ConfigMapNodeConfigSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMapNodeConfigSource.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMapNodeConfigSource): ConfigMapNodeConfigSource.AsObject;
  static serializeBinaryToWriter(message: ConfigMapNodeConfigSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMapNodeConfigSource;
  static deserializeBinaryFromReader(message: ConfigMapNodeConfigSource, reader: jspb.BinaryReader): ConfigMapNodeConfigSource;
}

export namespace ConfigMapNodeConfigSource {
  export type AsObject = {
    namespace: string,
    name: string,
    uid: string,
    resourceversion: string,
    kubeletconfigkey: string,
  }
}

export class ConfigMapProjection extends jspb.Message {
  getLocalobjectreference(): LocalObjectReference | undefined;
  setLocalobjectreference(value?: LocalObjectReference): ConfigMapProjection;
  hasLocalobjectreference(): boolean;
  clearLocalobjectreference(): ConfigMapProjection;

  getItemsList(): Array<KeyToPath>;
  setItemsList(value: Array<KeyToPath>): ConfigMapProjection;
  clearItemsList(): ConfigMapProjection;
  addItems(value?: KeyToPath, index?: number): KeyToPath;

  getOptional(): boolean;
  setOptional(value: boolean): ConfigMapProjection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMapProjection.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMapProjection): ConfigMapProjection.AsObject;
  static serializeBinaryToWriter(message: ConfigMapProjection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMapProjection;
  static deserializeBinaryFromReader(message: ConfigMapProjection, reader: jspb.BinaryReader): ConfigMapProjection;
}

export namespace ConfigMapProjection {
  export type AsObject = {
    localobjectreference?: LocalObjectReference.AsObject,
    itemsList: Array<KeyToPath.AsObject>,
    optional: boolean,
  }
}

export class ConfigMapVolumeSource extends jspb.Message {
  getLocalobjectreference(): LocalObjectReference | undefined;
  setLocalobjectreference(value?: LocalObjectReference): ConfigMapVolumeSource;
  hasLocalobjectreference(): boolean;
  clearLocalobjectreference(): ConfigMapVolumeSource;

  getItemsList(): Array<KeyToPath>;
  setItemsList(value: Array<KeyToPath>): ConfigMapVolumeSource;
  clearItemsList(): ConfigMapVolumeSource;
  addItems(value?: KeyToPath, index?: number): KeyToPath;

  getDefaultmode(): number;
  setDefaultmode(value: number): ConfigMapVolumeSource;

  getOptional(): boolean;
  setOptional(value: boolean): ConfigMapVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMapVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMapVolumeSource): ConfigMapVolumeSource.AsObject;
  static serializeBinaryToWriter(message: ConfigMapVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMapVolumeSource;
  static deserializeBinaryFromReader(message: ConfigMapVolumeSource, reader: jspb.BinaryReader): ConfigMapVolumeSource;
}

export namespace ConfigMapVolumeSource {
  export type AsObject = {
    localobjectreference?: LocalObjectReference.AsObject,
    itemsList: Array<KeyToPath.AsObject>,
    defaultmode: number,
    optional: boolean,
  }
}

export class Container extends jspb.Message {
  getName(): string;
  setName(value: string): Container;

  getImage(): string;
  setImage(value: string): Container;

  getCommandList(): Array<string>;
  setCommandList(value: Array<string>): Container;
  clearCommandList(): Container;
  addCommand(value: string, index?: number): Container;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): Container;
  clearArgsList(): Container;
  addArgs(value: string, index?: number): Container;

  getWorkingdir(): string;
  setWorkingdir(value: string): Container;

  getPortsList(): Array<ContainerPort>;
  setPortsList(value: Array<ContainerPort>): Container;
  clearPortsList(): Container;
  addPorts(value?: ContainerPort, index?: number): ContainerPort;

  getEnvfromList(): Array<EnvFromSource>;
  setEnvfromList(value: Array<EnvFromSource>): Container;
  clearEnvfromList(): Container;
  addEnvfrom(value?: EnvFromSource, index?: number): EnvFromSource;

  getEnvList(): Array<EnvVar>;
  setEnvList(value: Array<EnvVar>): Container;
  clearEnvList(): Container;
  addEnv(value?: EnvVar, index?: number): EnvVar;

  getResources(): ResourceRequirements | undefined;
  setResources(value?: ResourceRequirements): Container;
  hasResources(): boolean;
  clearResources(): Container;

  getVolumemountsList(): Array<VolumeMount>;
  setVolumemountsList(value: Array<VolumeMount>): Container;
  clearVolumemountsList(): Container;
  addVolumemounts(value?: VolumeMount, index?: number): VolumeMount;

  getVolumedevicesList(): Array<VolumeDevice>;
  setVolumedevicesList(value: Array<VolumeDevice>): Container;
  clearVolumedevicesList(): Container;
  addVolumedevices(value?: VolumeDevice, index?: number): VolumeDevice;

  getLivenessprobe(): Probe | undefined;
  setLivenessprobe(value?: Probe): Container;
  hasLivenessprobe(): boolean;
  clearLivenessprobe(): Container;

  getReadinessprobe(): Probe | undefined;
  setReadinessprobe(value?: Probe): Container;
  hasReadinessprobe(): boolean;
  clearReadinessprobe(): Container;

  getStartupprobe(): Probe | undefined;
  setStartupprobe(value?: Probe): Container;
  hasStartupprobe(): boolean;
  clearStartupprobe(): Container;

  getLifecycle(): Lifecycle | undefined;
  setLifecycle(value?: Lifecycle): Container;
  hasLifecycle(): boolean;
  clearLifecycle(): Container;

  getTerminationmessagepath(): string;
  setTerminationmessagepath(value: string): Container;

  getTerminationmessagepolicy(): string;
  setTerminationmessagepolicy(value: string): Container;

  getImagepullpolicy(): string;
  setImagepullpolicy(value: string): Container;

  getSecuritycontext(): SecurityContext | undefined;
  setSecuritycontext(value?: SecurityContext): Container;
  hasSecuritycontext(): boolean;
  clearSecuritycontext(): Container;

  getStdin(): boolean;
  setStdin(value: boolean): Container;

  getStdinonce(): boolean;
  setStdinonce(value: boolean): Container;

  getTty(): boolean;
  setTty(value: boolean): Container;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Container.AsObject;
  static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
  static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Container;
  static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
}

export namespace Container {
  export type AsObject = {
    name: string,
    image: string,
    commandList: Array<string>,
    argsList: Array<string>,
    workingdir: string,
    portsList: Array<ContainerPort.AsObject>,
    envfromList: Array<EnvFromSource.AsObject>,
    envList: Array<EnvVar.AsObject>,
    resources?: ResourceRequirements.AsObject,
    volumemountsList: Array<VolumeMount.AsObject>,
    volumedevicesList: Array<VolumeDevice.AsObject>,
    livenessprobe?: Probe.AsObject,
    readinessprobe?: Probe.AsObject,
    startupprobe?: Probe.AsObject,
    lifecycle?: Lifecycle.AsObject,
    terminationmessagepath: string,
    terminationmessagepolicy: string,
    imagepullpolicy: string,
    securitycontext?: SecurityContext.AsObject,
    stdin: boolean,
    stdinonce: boolean,
    tty: boolean,
  }
}

export class ContainerImage extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): ContainerImage;
  clearNamesList(): ContainerImage;
  addNames(value: string, index?: number): ContainerImage;

  getSizebytes(): number;
  setSizebytes(value: number): ContainerImage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerImage.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerImage): ContainerImage.AsObject;
  static serializeBinaryToWriter(message: ContainerImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerImage;
  static deserializeBinaryFromReader(message: ContainerImage, reader: jspb.BinaryReader): ContainerImage;
}

export namespace ContainerImage {
  export type AsObject = {
    namesList: Array<string>,
    sizebytes: number,
  }
}

export class ContainerPort extends jspb.Message {
  getName(): string;
  setName(value: string): ContainerPort;

  getHostport(): number;
  setHostport(value: number): ContainerPort;

  getContainerport(): number;
  setContainerport(value: number): ContainerPort;

  getProtocol(): string;
  setProtocol(value: string): ContainerPort;

  getHostip(): string;
  setHostip(value: string): ContainerPort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerPort.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerPort): ContainerPort.AsObject;
  static serializeBinaryToWriter(message: ContainerPort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerPort;
  static deserializeBinaryFromReader(message: ContainerPort, reader: jspb.BinaryReader): ContainerPort;
}

export namespace ContainerPort {
  export type AsObject = {
    name: string,
    hostport: number,
    containerport: number,
    protocol: string,
    hostip: string,
  }
}

export class ContainerState extends jspb.Message {
  getWaiting(): ContainerStateWaiting | undefined;
  setWaiting(value?: ContainerStateWaiting): ContainerState;
  hasWaiting(): boolean;
  clearWaiting(): ContainerState;

  getRunning(): ContainerStateRunning | undefined;
  setRunning(value?: ContainerStateRunning): ContainerState;
  hasRunning(): boolean;
  clearRunning(): ContainerState;

  getTerminated(): ContainerStateTerminated | undefined;
  setTerminated(value?: ContainerStateTerminated): ContainerState;
  hasTerminated(): boolean;
  clearTerminated(): ContainerState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerState.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerState): ContainerState.AsObject;
  static serializeBinaryToWriter(message: ContainerState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerState;
  static deserializeBinaryFromReader(message: ContainerState, reader: jspb.BinaryReader): ContainerState;
}

export namespace ContainerState {
  export type AsObject = {
    waiting?: ContainerStateWaiting.AsObject,
    running?: ContainerStateRunning.AsObject,
    terminated?: ContainerStateTerminated.AsObject,
  }
}

export class ContainerStateRunning extends jspb.Message {
  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ContainerStateRunning;
  hasStartedat(): boolean;
  clearStartedat(): ContainerStateRunning;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerStateRunning.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerStateRunning): ContainerStateRunning.AsObject;
  static serializeBinaryToWriter(message: ContainerStateRunning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerStateRunning;
  static deserializeBinaryFromReader(message: ContainerStateRunning, reader: jspb.BinaryReader): ContainerStateRunning;
}

export namespace ContainerStateRunning {
  export type AsObject = {
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class ContainerStateTerminated extends jspb.Message {
  getExitcode(): number;
  setExitcode(value: number): ContainerStateTerminated;

  getSignal(): number;
  setSignal(value: number): ContainerStateTerminated;

  getReason(): string;
  setReason(value: string): ContainerStateTerminated;

  getMessage(): string;
  setMessage(value: string): ContainerStateTerminated;

  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ContainerStateTerminated;
  hasStartedat(): boolean;
  clearStartedat(): ContainerStateTerminated;

  getFinishedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setFinishedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ContainerStateTerminated;
  hasFinishedat(): boolean;
  clearFinishedat(): ContainerStateTerminated;

  getContainerid(): string;
  setContainerid(value: string): ContainerStateTerminated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerStateTerminated.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerStateTerminated): ContainerStateTerminated.AsObject;
  static serializeBinaryToWriter(message: ContainerStateTerminated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerStateTerminated;
  static deserializeBinaryFromReader(message: ContainerStateTerminated, reader: jspb.BinaryReader): ContainerStateTerminated;
}

export namespace ContainerStateTerminated {
  export type AsObject = {
    exitcode: number,
    signal: number,
    reason: string,
    message: string,
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    finishedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    containerid: string,
  }
}

export class ContainerStateWaiting extends jspb.Message {
  getReason(): string;
  setReason(value: string): ContainerStateWaiting;

  getMessage(): string;
  setMessage(value: string): ContainerStateWaiting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerStateWaiting.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerStateWaiting): ContainerStateWaiting.AsObject;
  static serializeBinaryToWriter(message: ContainerStateWaiting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerStateWaiting;
  static deserializeBinaryFromReader(message: ContainerStateWaiting, reader: jspb.BinaryReader): ContainerStateWaiting;
}

export namespace ContainerStateWaiting {
  export type AsObject = {
    reason: string,
    message: string,
  }
}

export class ContainerStatus extends jspb.Message {
  getName(): string;
  setName(value: string): ContainerStatus;

  getState(): ContainerState | undefined;
  setState(value?: ContainerState): ContainerStatus;
  hasState(): boolean;
  clearState(): ContainerStatus;

  getLaststate(): ContainerState | undefined;
  setLaststate(value?: ContainerState): ContainerStatus;
  hasLaststate(): boolean;
  clearLaststate(): ContainerStatus;

  getReady(): boolean;
  setReady(value: boolean): ContainerStatus;

  getRestartcount(): number;
  setRestartcount(value: number): ContainerStatus;

  getImage(): string;
  setImage(value: string): ContainerStatus;

  getImageid(): string;
  setImageid(value: string): ContainerStatus;

  getContainerid(): string;
  setContainerid(value: string): ContainerStatus;

  getStarted(): boolean;
  setStarted(value: boolean): ContainerStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerStatus): ContainerStatus.AsObject;
  static serializeBinaryToWriter(message: ContainerStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerStatus;
  static deserializeBinaryFromReader(message: ContainerStatus, reader: jspb.BinaryReader): ContainerStatus;
}

export namespace ContainerStatus {
  export type AsObject = {
    name: string,
    state?: ContainerState.AsObject,
    laststate?: ContainerState.AsObject,
    ready: boolean,
    restartcount: number,
    image: string,
    imageid: string,
    containerid: string,
    started: boolean,
  }
}

export class DaemonEndpoint extends jspb.Message {
  getPort(): number;
  setPort(value: number): DaemonEndpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaemonEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: DaemonEndpoint): DaemonEndpoint.AsObject;
  static serializeBinaryToWriter(message: DaemonEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaemonEndpoint;
  static deserializeBinaryFromReader(message: DaemonEndpoint, reader: jspb.BinaryReader): DaemonEndpoint;
}

export namespace DaemonEndpoint {
  export type AsObject = {
    port: number,
  }
}

export class DownwardAPIProjection extends jspb.Message {
  getItemsList(): Array<DownwardAPIVolumeFile>;
  setItemsList(value: Array<DownwardAPIVolumeFile>): DownwardAPIProjection;
  clearItemsList(): DownwardAPIProjection;
  addItems(value?: DownwardAPIVolumeFile, index?: number): DownwardAPIVolumeFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownwardAPIProjection.AsObject;
  static toObject(includeInstance: boolean, msg: DownwardAPIProjection): DownwardAPIProjection.AsObject;
  static serializeBinaryToWriter(message: DownwardAPIProjection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownwardAPIProjection;
  static deserializeBinaryFromReader(message: DownwardAPIProjection, reader: jspb.BinaryReader): DownwardAPIProjection;
}

export namespace DownwardAPIProjection {
  export type AsObject = {
    itemsList: Array<DownwardAPIVolumeFile.AsObject>,
  }
}

export class DownwardAPIVolumeFile extends jspb.Message {
  getPath(): string;
  setPath(value: string): DownwardAPIVolumeFile;

  getFieldref(): ObjectFieldSelector | undefined;
  setFieldref(value?: ObjectFieldSelector): DownwardAPIVolumeFile;
  hasFieldref(): boolean;
  clearFieldref(): DownwardAPIVolumeFile;

  getResourcefieldref(): ResourceFieldSelector | undefined;
  setResourcefieldref(value?: ResourceFieldSelector): DownwardAPIVolumeFile;
  hasResourcefieldref(): boolean;
  clearResourcefieldref(): DownwardAPIVolumeFile;

  getMode(): number;
  setMode(value: number): DownwardAPIVolumeFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownwardAPIVolumeFile.AsObject;
  static toObject(includeInstance: boolean, msg: DownwardAPIVolumeFile): DownwardAPIVolumeFile.AsObject;
  static serializeBinaryToWriter(message: DownwardAPIVolumeFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownwardAPIVolumeFile;
  static deserializeBinaryFromReader(message: DownwardAPIVolumeFile, reader: jspb.BinaryReader): DownwardAPIVolumeFile;
}

export namespace DownwardAPIVolumeFile {
  export type AsObject = {
    path: string,
    fieldref?: ObjectFieldSelector.AsObject,
    resourcefieldref?: ResourceFieldSelector.AsObject,
    mode: number,
  }
}

export class DownwardAPIVolumeSource extends jspb.Message {
  getItemsList(): Array<DownwardAPIVolumeFile>;
  setItemsList(value: Array<DownwardAPIVolumeFile>): DownwardAPIVolumeSource;
  clearItemsList(): DownwardAPIVolumeSource;
  addItems(value?: DownwardAPIVolumeFile, index?: number): DownwardAPIVolumeFile;

  getDefaultmode(): number;
  setDefaultmode(value: number): DownwardAPIVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownwardAPIVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: DownwardAPIVolumeSource): DownwardAPIVolumeSource.AsObject;
  static serializeBinaryToWriter(message: DownwardAPIVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownwardAPIVolumeSource;
  static deserializeBinaryFromReader(message: DownwardAPIVolumeSource, reader: jspb.BinaryReader): DownwardAPIVolumeSource;
}

export namespace DownwardAPIVolumeSource {
  export type AsObject = {
    itemsList: Array<DownwardAPIVolumeFile.AsObject>,
    defaultmode: number,
  }
}

export class EmptyDirVolumeSource extends jspb.Message {
  getMedium(): string;
  setMedium(value: string): EmptyDirVolumeSource;

  getSizelimit(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setSizelimit(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): EmptyDirVolumeSource;
  hasSizelimit(): boolean;
  clearSizelimit(): EmptyDirVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyDirVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyDirVolumeSource): EmptyDirVolumeSource.AsObject;
  static serializeBinaryToWriter(message: EmptyDirVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyDirVolumeSource;
  static deserializeBinaryFromReader(message: EmptyDirVolumeSource, reader: jspb.BinaryReader): EmptyDirVolumeSource;
}

export namespace EmptyDirVolumeSource {
  export type AsObject = {
    medium: string,
    sizelimit?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class EndpointAddress extends jspb.Message {
  getIp(): string;
  setIp(value: string): EndpointAddress;

  getHostname(): string;
  setHostname(value: string): EndpointAddress;

  getNodename(): string;
  setNodename(value: string): EndpointAddress;

  getTargetref(): ObjectReference | undefined;
  setTargetref(value?: ObjectReference): EndpointAddress;
  hasTargetref(): boolean;
  clearTargetref(): EndpointAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointAddress.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointAddress): EndpointAddress.AsObject;
  static serializeBinaryToWriter(message: EndpointAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointAddress;
  static deserializeBinaryFromReader(message: EndpointAddress, reader: jspb.BinaryReader): EndpointAddress;
}

export namespace EndpointAddress {
  export type AsObject = {
    ip: string,
    hostname: string,
    nodename: string,
    targetref?: ObjectReference.AsObject,
  }
}

export class EndpointPort extends jspb.Message {
  getName(): string;
  setName(value: string): EndpointPort;

  getPort(): number;
  setPort(value: number): EndpointPort;

  getProtocol(): string;
  setProtocol(value: string): EndpointPort;

  getAppprotocol(): string;
  setAppprotocol(value: string): EndpointPort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointPort.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointPort): EndpointPort.AsObject;
  static serializeBinaryToWriter(message: EndpointPort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointPort;
  static deserializeBinaryFromReader(message: EndpointPort, reader: jspb.BinaryReader): EndpointPort;
}

export namespace EndpointPort {
  export type AsObject = {
    name: string,
    port: number,
    protocol: string,
    appprotocol: string,
  }
}

export class EndpointSubset extends jspb.Message {
  getAddressesList(): Array<EndpointAddress>;
  setAddressesList(value: Array<EndpointAddress>): EndpointSubset;
  clearAddressesList(): EndpointSubset;
  addAddresses(value?: EndpointAddress, index?: number): EndpointAddress;

  getNotreadyaddressesList(): Array<EndpointAddress>;
  setNotreadyaddressesList(value: Array<EndpointAddress>): EndpointSubset;
  clearNotreadyaddressesList(): EndpointSubset;
  addNotreadyaddresses(value?: EndpointAddress, index?: number): EndpointAddress;

  getPortsList(): Array<EndpointPort>;
  setPortsList(value: Array<EndpointPort>): EndpointSubset;
  clearPortsList(): EndpointSubset;
  addPorts(value?: EndpointPort, index?: number): EndpointPort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointSubset.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointSubset): EndpointSubset.AsObject;
  static serializeBinaryToWriter(message: EndpointSubset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointSubset;
  static deserializeBinaryFromReader(message: EndpointSubset, reader: jspb.BinaryReader): EndpointSubset;
}

export namespace EndpointSubset {
  export type AsObject = {
    addressesList: Array<EndpointAddress.AsObject>,
    notreadyaddressesList: Array<EndpointAddress.AsObject>,
    portsList: Array<EndpointPort.AsObject>,
  }
}

export class Endpoints extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Endpoints;
  hasMetadata(): boolean;
  clearMetadata(): Endpoints;

  getSubsetsList(): Array<EndpointSubset>;
  setSubsetsList(value: Array<EndpointSubset>): Endpoints;
  clearSubsetsList(): Endpoints;
  addSubsets(value?: EndpointSubset, index?: number): EndpointSubset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endpoints.AsObject;
  static toObject(includeInstance: boolean, msg: Endpoints): Endpoints.AsObject;
  static serializeBinaryToWriter(message: Endpoints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endpoints;
  static deserializeBinaryFromReader(message: Endpoints, reader: jspb.BinaryReader): Endpoints;
}

export namespace Endpoints {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    subsetsList: Array<EndpointSubset.AsObject>,
  }
}

export class EndpointsList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): EndpointsList;
  hasMetadata(): boolean;
  clearMetadata(): EndpointsList;

  getItemsList(): Array<Endpoints>;
  setItemsList(value: Array<Endpoints>): EndpointsList;
  clearItemsList(): EndpointsList;
  addItems(value?: Endpoints, index?: number): Endpoints;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointsList.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointsList): EndpointsList.AsObject;
  static serializeBinaryToWriter(message: EndpointsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointsList;
  static deserializeBinaryFromReader(message: EndpointsList, reader: jspb.BinaryReader): EndpointsList;
}

export namespace EndpointsList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Endpoints.AsObject>,
  }
}

export class EnvFromSource extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): EnvFromSource;

  getConfigmapref(): ConfigMapEnvSource | undefined;
  setConfigmapref(value?: ConfigMapEnvSource): EnvFromSource;
  hasConfigmapref(): boolean;
  clearConfigmapref(): EnvFromSource;

  getSecretref(): SecretEnvSource | undefined;
  setSecretref(value?: SecretEnvSource): EnvFromSource;
  hasSecretref(): boolean;
  clearSecretref(): EnvFromSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnvFromSource.AsObject;
  static toObject(includeInstance: boolean, msg: EnvFromSource): EnvFromSource.AsObject;
  static serializeBinaryToWriter(message: EnvFromSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnvFromSource;
  static deserializeBinaryFromReader(message: EnvFromSource, reader: jspb.BinaryReader): EnvFromSource;
}

export namespace EnvFromSource {
  export type AsObject = {
    prefix: string,
    configmapref?: ConfigMapEnvSource.AsObject,
    secretref?: SecretEnvSource.AsObject,
  }
}

export class EnvVar extends jspb.Message {
  getName(): string;
  setName(value: string): EnvVar;

  getValue(): string;
  setValue(value: string): EnvVar;

  getValuefrom(): EnvVarSource | undefined;
  setValuefrom(value?: EnvVarSource): EnvVar;
  hasValuefrom(): boolean;
  clearValuefrom(): EnvVar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnvVar.AsObject;
  static toObject(includeInstance: boolean, msg: EnvVar): EnvVar.AsObject;
  static serializeBinaryToWriter(message: EnvVar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnvVar;
  static deserializeBinaryFromReader(message: EnvVar, reader: jspb.BinaryReader): EnvVar;
}

export namespace EnvVar {
  export type AsObject = {
    name: string,
    value: string,
    valuefrom?: EnvVarSource.AsObject,
  }
}

export class EnvVarSource extends jspb.Message {
  getFieldref(): ObjectFieldSelector | undefined;
  setFieldref(value?: ObjectFieldSelector): EnvVarSource;
  hasFieldref(): boolean;
  clearFieldref(): EnvVarSource;

  getResourcefieldref(): ResourceFieldSelector | undefined;
  setResourcefieldref(value?: ResourceFieldSelector): EnvVarSource;
  hasResourcefieldref(): boolean;
  clearResourcefieldref(): EnvVarSource;

  getConfigmapkeyref(): ConfigMapKeySelector | undefined;
  setConfigmapkeyref(value?: ConfigMapKeySelector): EnvVarSource;
  hasConfigmapkeyref(): boolean;
  clearConfigmapkeyref(): EnvVarSource;

  getSecretkeyref(): SecretKeySelector | undefined;
  setSecretkeyref(value?: SecretKeySelector): EnvVarSource;
  hasSecretkeyref(): boolean;
  clearSecretkeyref(): EnvVarSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnvVarSource.AsObject;
  static toObject(includeInstance: boolean, msg: EnvVarSource): EnvVarSource.AsObject;
  static serializeBinaryToWriter(message: EnvVarSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnvVarSource;
  static deserializeBinaryFromReader(message: EnvVarSource, reader: jspb.BinaryReader): EnvVarSource;
}

export namespace EnvVarSource {
  export type AsObject = {
    fieldref?: ObjectFieldSelector.AsObject,
    resourcefieldref?: ResourceFieldSelector.AsObject,
    configmapkeyref?: ConfigMapKeySelector.AsObject,
    secretkeyref?: SecretKeySelector.AsObject,
  }
}

export class EphemeralContainer extends jspb.Message {
  getEphemeralcontainercommon(): EphemeralContainerCommon | undefined;
  setEphemeralcontainercommon(value?: EphemeralContainerCommon): EphemeralContainer;
  hasEphemeralcontainercommon(): boolean;
  clearEphemeralcontainercommon(): EphemeralContainer;

  getTargetcontainername(): string;
  setTargetcontainername(value: string): EphemeralContainer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EphemeralContainer.AsObject;
  static toObject(includeInstance: boolean, msg: EphemeralContainer): EphemeralContainer.AsObject;
  static serializeBinaryToWriter(message: EphemeralContainer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EphemeralContainer;
  static deserializeBinaryFromReader(message: EphemeralContainer, reader: jspb.BinaryReader): EphemeralContainer;
}

export namespace EphemeralContainer {
  export type AsObject = {
    ephemeralcontainercommon?: EphemeralContainerCommon.AsObject,
    targetcontainername: string,
  }
}

export class EphemeralContainerCommon extends jspb.Message {
  getName(): string;
  setName(value: string): EphemeralContainerCommon;

  getImage(): string;
  setImage(value: string): EphemeralContainerCommon;

  getCommandList(): Array<string>;
  setCommandList(value: Array<string>): EphemeralContainerCommon;
  clearCommandList(): EphemeralContainerCommon;
  addCommand(value: string, index?: number): EphemeralContainerCommon;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): EphemeralContainerCommon;
  clearArgsList(): EphemeralContainerCommon;
  addArgs(value: string, index?: number): EphemeralContainerCommon;

  getWorkingdir(): string;
  setWorkingdir(value: string): EphemeralContainerCommon;

  getPortsList(): Array<ContainerPort>;
  setPortsList(value: Array<ContainerPort>): EphemeralContainerCommon;
  clearPortsList(): EphemeralContainerCommon;
  addPorts(value?: ContainerPort, index?: number): ContainerPort;

  getEnvfromList(): Array<EnvFromSource>;
  setEnvfromList(value: Array<EnvFromSource>): EphemeralContainerCommon;
  clearEnvfromList(): EphemeralContainerCommon;
  addEnvfrom(value?: EnvFromSource, index?: number): EnvFromSource;

  getEnvList(): Array<EnvVar>;
  setEnvList(value: Array<EnvVar>): EphemeralContainerCommon;
  clearEnvList(): EphemeralContainerCommon;
  addEnv(value?: EnvVar, index?: number): EnvVar;

  getResources(): ResourceRequirements | undefined;
  setResources(value?: ResourceRequirements): EphemeralContainerCommon;
  hasResources(): boolean;
  clearResources(): EphemeralContainerCommon;

  getVolumemountsList(): Array<VolumeMount>;
  setVolumemountsList(value: Array<VolumeMount>): EphemeralContainerCommon;
  clearVolumemountsList(): EphemeralContainerCommon;
  addVolumemounts(value?: VolumeMount, index?: number): VolumeMount;

  getVolumedevicesList(): Array<VolumeDevice>;
  setVolumedevicesList(value: Array<VolumeDevice>): EphemeralContainerCommon;
  clearVolumedevicesList(): EphemeralContainerCommon;
  addVolumedevices(value?: VolumeDevice, index?: number): VolumeDevice;

  getLivenessprobe(): Probe | undefined;
  setLivenessprobe(value?: Probe): EphemeralContainerCommon;
  hasLivenessprobe(): boolean;
  clearLivenessprobe(): EphemeralContainerCommon;

  getReadinessprobe(): Probe | undefined;
  setReadinessprobe(value?: Probe): EphemeralContainerCommon;
  hasReadinessprobe(): boolean;
  clearReadinessprobe(): EphemeralContainerCommon;

  getStartupprobe(): Probe | undefined;
  setStartupprobe(value?: Probe): EphemeralContainerCommon;
  hasStartupprobe(): boolean;
  clearStartupprobe(): EphemeralContainerCommon;

  getLifecycle(): Lifecycle | undefined;
  setLifecycle(value?: Lifecycle): EphemeralContainerCommon;
  hasLifecycle(): boolean;
  clearLifecycle(): EphemeralContainerCommon;

  getTerminationmessagepath(): string;
  setTerminationmessagepath(value: string): EphemeralContainerCommon;

  getTerminationmessagepolicy(): string;
  setTerminationmessagepolicy(value: string): EphemeralContainerCommon;

  getImagepullpolicy(): string;
  setImagepullpolicy(value: string): EphemeralContainerCommon;

  getSecuritycontext(): SecurityContext | undefined;
  setSecuritycontext(value?: SecurityContext): EphemeralContainerCommon;
  hasSecuritycontext(): boolean;
  clearSecuritycontext(): EphemeralContainerCommon;

  getStdin(): boolean;
  setStdin(value: boolean): EphemeralContainerCommon;

  getStdinonce(): boolean;
  setStdinonce(value: boolean): EphemeralContainerCommon;

  getTty(): boolean;
  setTty(value: boolean): EphemeralContainerCommon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EphemeralContainerCommon.AsObject;
  static toObject(includeInstance: boolean, msg: EphemeralContainerCommon): EphemeralContainerCommon.AsObject;
  static serializeBinaryToWriter(message: EphemeralContainerCommon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EphemeralContainerCommon;
  static deserializeBinaryFromReader(message: EphemeralContainerCommon, reader: jspb.BinaryReader): EphemeralContainerCommon;
}

export namespace EphemeralContainerCommon {
  export type AsObject = {
    name: string,
    image: string,
    commandList: Array<string>,
    argsList: Array<string>,
    workingdir: string,
    portsList: Array<ContainerPort.AsObject>,
    envfromList: Array<EnvFromSource.AsObject>,
    envList: Array<EnvVar.AsObject>,
    resources?: ResourceRequirements.AsObject,
    volumemountsList: Array<VolumeMount.AsObject>,
    volumedevicesList: Array<VolumeDevice.AsObject>,
    livenessprobe?: Probe.AsObject,
    readinessprobe?: Probe.AsObject,
    startupprobe?: Probe.AsObject,
    lifecycle?: Lifecycle.AsObject,
    terminationmessagepath: string,
    terminationmessagepolicy: string,
    imagepullpolicy: string,
    securitycontext?: SecurityContext.AsObject,
    stdin: boolean,
    stdinonce: boolean,
    tty: boolean,
  }
}

export class EphemeralContainers extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): EphemeralContainers;
  hasMetadata(): boolean;
  clearMetadata(): EphemeralContainers;

  getEphemeralcontainersList(): Array<EphemeralContainer>;
  setEphemeralcontainersList(value: Array<EphemeralContainer>): EphemeralContainers;
  clearEphemeralcontainersList(): EphemeralContainers;
  addEphemeralcontainers(value?: EphemeralContainer, index?: number): EphemeralContainer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EphemeralContainers.AsObject;
  static toObject(includeInstance: boolean, msg: EphemeralContainers): EphemeralContainers.AsObject;
  static serializeBinaryToWriter(message: EphemeralContainers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EphemeralContainers;
  static deserializeBinaryFromReader(message: EphemeralContainers, reader: jspb.BinaryReader): EphemeralContainers;
}

export namespace EphemeralContainers {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    ephemeralcontainersList: Array<EphemeralContainer.AsObject>,
  }
}

export class EphemeralVolumeSource extends jspb.Message {
  getVolumeclaimtemplate(): PersistentVolumeClaimTemplate | undefined;
  setVolumeclaimtemplate(value?: PersistentVolumeClaimTemplate): EphemeralVolumeSource;
  hasVolumeclaimtemplate(): boolean;
  clearVolumeclaimtemplate(): EphemeralVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): EphemeralVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EphemeralVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: EphemeralVolumeSource): EphemeralVolumeSource.AsObject;
  static serializeBinaryToWriter(message: EphemeralVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EphemeralVolumeSource;
  static deserializeBinaryFromReader(message: EphemeralVolumeSource, reader: jspb.BinaryReader): EphemeralVolumeSource;
}

export namespace EphemeralVolumeSource {
  export type AsObject = {
    volumeclaimtemplate?: PersistentVolumeClaimTemplate.AsObject,
    readonly: boolean,
  }
}

export class Event extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Event;
  hasMetadata(): boolean;
  clearMetadata(): Event;

  getInvolvedobject(): ObjectReference | undefined;
  setInvolvedobject(value?: ObjectReference): Event;
  hasInvolvedobject(): boolean;
  clearInvolvedobject(): Event;

  getReason(): string;
  setReason(value: string): Event;

  getMessage(): string;
  setMessage(value: string): Event;

  getSource(): EventSource | undefined;
  setSource(value?: EventSource): Event;
  hasSource(): boolean;
  clearSource(): Event;

  getFirsttimestamp(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setFirsttimestamp(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): Event;
  hasFirsttimestamp(): boolean;
  clearFirsttimestamp(): Event;

  getLasttimestamp(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttimestamp(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): Event;
  hasLasttimestamp(): boolean;
  clearLasttimestamp(): Event;

  getCount(): number;
  setCount(value: number): Event;

  getType(): string;
  setType(value: string): Event;

  getEventtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.MicroTime | undefined;
  setEventtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.MicroTime): Event;
  hasEventtime(): boolean;
  clearEventtime(): Event;

  getSeries(): EventSeries | undefined;
  setSeries(value?: EventSeries): Event;
  hasSeries(): boolean;
  clearSeries(): Event;

  getAction(): string;
  setAction(value: string): Event;

  getRelated(): ObjectReference | undefined;
  setRelated(value?: ObjectReference): Event;
  hasRelated(): boolean;
  clearRelated(): Event;

  getReportingcomponent(): string;
  setReportingcomponent(value: string): Event;

  getReportinginstance(): string;
  setReportinginstance(value: string): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    involvedobject?: ObjectReference.AsObject,
    reason: string,
    message: string,
    source?: EventSource.AsObject,
    firsttimestamp?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lasttimestamp?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    count: number,
    type: string,
    eventtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.MicroTime.AsObject,
    series?: EventSeries.AsObject,
    action: string,
    related?: ObjectReference.AsObject,
    reportingcomponent: string,
    reportinginstance: string,
  }
}

export class EventList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): EventList;
  hasMetadata(): boolean;
  clearMetadata(): EventList;

  getItemsList(): Array<Event>;
  setItemsList(value: Array<Event>): EventList;
  clearItemsList(): EventList;
  addItems(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventList.AsObject;
  static toObject(includeInstance: boolean, msg: EventList): EventList.AsObject;
  static serializeBinaryToWriter(message: EventList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventList;
  static deserializeBinaryFromReader(message: EventList, reader: jspb.BinaryReader): EventList;
}

export namespace EventList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Event.AsObject>,
  }
}

export class EventSeries extends jspb.Message {
  getCount(): number;
  setCount(value: number): EventSeries;

  getLastobservedtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.MicroTime | undefined;
  setLastobservedtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.MicroTime): EventSeries;
  hasLastobservedtime(): boolean;
  clearLastobservedtime(): EventSeries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSeries.AsObject;
  static toObject(includeInstance: boolean, msg: EventSeries): EventSeries.AsObject;
  static serializeBinaryToWriter(message: EventSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSeries;
  static deserializeBinaryFromReader(message: EventSeries, reader: jspb.BinaryReader): EventSeries;
}

export namespace EventSeries {
  export type AsObject = {
    count: number,
    lastobservedtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.MicroTime.AsObject,
  }
}

export class EventSource extends jspb.Message {
  getComponent(): string;
  setComponent(value: string): EventSource;

  getHost(): string;
  setHost(value: string): EventSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSource.AsObject;
  static toObject(includeInstance: boolean, msg: EventSource): EventSource.AsObject;
  static serializeBinaryToWriter(message: EventSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSource;
  static deserializeBinaryFromReader(message: EventSource, reader: jspb.BinaryReader): EventSource;
}

export namespace EventSource {
  export type AsObject = {
    component: string,
    host: string,
  }
}

export class ExecAction extends jspb.Message {
  getCommandList(): Array<string>;
  setCommandList(value: Array<string>): ExecAction;
  clearCommandList(): ExecAction;
  addCommand(value: string, index?: number): ExecAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecAction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecAction): ExecAction.AsObject;
  static serializeBinaryToWriter(message: ExecAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecAction;
  static deserializeBinaryFromReader(message: ExecAction, reader: jspb.BinaryReader): ExecAction;
}

export namespace ExecAction {
  export type AsObject = {
    commandList: Array<string>,
  }
}

export class FCVolumeSource extends jspb.Message {
  getTargetwwnsList(): Array<string>;
  setTargetwwnsList(value: Array<string>): FCVolumeSource;
  clearTargetwwnsList(): FCVolumeSource;
  addTargetwwns(value: string, index?: number): FCVolumeSource;

  getLun(): number;
  setLun(value: number): FCVolumeSource;

  getFstype(): string;
  setFstype(value: string): FCVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): FCVolumeSource;

  getWwidsList(): Array<string>;
  setWwidsList(value: Array<string>): FCVolumeSource;
  clearWwidsList(): FCVolumeSource;
  addWwids(value: string, index?: number): FCVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FCVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: FCVolumeSource): FCVolumeSource.AsObject;
  static serializeBinaryToWriter(message: FCVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FCVolumeSource;
  static deserializeBinaryFromReader(message: FCVolumeSource, reader: jspb.BinaryReader): FCVolumeSource;
}

export namespace FCVolumeSource {
  export type AsObject = {
    targetwwnsList: Array<string>,
    lun: number,
    fstype: string,
    readonly: boolean,
    wwidsList: Array<string>,
  }
}

export class FlexPersistentVolumeSource extends jspb.Message {
  getDriver(): string;
  setDriver(value: string): FlexPersistentVolumeSource;

  getFstype(): string;
  setFstype(value: string): FlexPersistentVolumeSource;

  getSecretref(): SecretReference | undefined;
  setSecretref(value?: SecretReference): FlexPersistentVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): FlexPersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): FlexPersistentVolumeSource;

  getOptionsMap(): jspb.Map<string, string>;
  clearOptionsMap(): FlexPersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlexPersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: FlexPersistentVolumeSource): FlexPersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: FlexPersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlexPersistentVolumeSource;
  static deserializeBinaryFromReader(message: FlexPersistentVolumeSource, reader: jspb.BinaryReader): FlexPersistentVolumeSource;
}

export namespace FlexPersistentVolumeSource {
  export type AsObject = {
    driver: string,
    fstype: string,
    secretref?: SecretReference.AsObject,
    readonly: boolean,
    optionsMap: Array<[string, string]>,
  }
}

export class FlexVolumeSource extends jspb.Message {
  getDriver(): string;
  setDriver(value: string): FlexVolumeSource;

  getFstype(): string;
  setFstype(value: string): FlexVolumeSource;

  getSecretref(): LocalObjectReference | undefined;
  setSecretref(value?: LocalObjectReference): FlexVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): FlexVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): FlexVolumeSource;

  getOptionsMap(): jspb.Map<string, string>;
  clearOptionsMap(): FlexVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlexVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: FlexVolumeSource): FlexVolumeSource.AsObject;
  static serializeBinaryToWriter(message: FlexVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlexVolumeSource;
  static deserializeBinaryFromReader(message: FlexVolumeSource, reader: jspb.BinaryReader): FlexVolumeSource;
}

export namespace FlexVolumeSource {
  export type AsObject = {
    driver: string,
    fstype: string,
    secretref?: LocalObjectReference.AsObject,
    readonly: boolean,
    optionsMap: Array<[string, string]>,
  }
}

export class FlockerVolumeSource extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): FlockerVolumeSource;

  getDatasetuuid(): string;
  setDatasetuuid(value: string): FlockerVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlockerVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: FlockerVolumeSource): FlockerVolumeSource.AsObject;
  static serializeBinaryToWriter(message: FlockerVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlockerVolumeSource;
  static deserializeBinaryFromReader(message: FlockerVolumeSource, reader: jspb.BinaryReader): FlockerVolumeSource;
}

export namespace FlockerVolumeSource {
  export type AsObject = {
    datasetname: string,
    datasetuuid: string,
  }
}

export class GCEPersistentDiskVolumeSource extends jspb.Message {
  getPdname(): string;
  setPdname(value: string): GCEPersistentDiskVolumeSource;

  getFstype(): string;
  setFstype(value: string): GCEPersistentDiskVolumeSource;

  getPartition(): number;
  setPartition(value: number): GCEPersistentDiskVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): GCEPersistentDiskVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCEPersistentDiskVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: GCEPersistentDiskVolumeSource): GCEPersistentDiskVolumeSource.AsObject;
  static serializeBinaryToWriter(message: GCEPersistentDiskVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCEPersistentDiskVolumeSource;
  static deserializeBinaryFromReader(message: GCEPersistentDiskVolumeSource, reader: jspb.BinaryReader): GCEPersistentDiskVolumeSource;
}

export namespace GCEPersistentDiskVolumeSource {
  export type AsObject = {
    pdname: string,
    fstype: string,
    partition: number,
    readonly: boolean,
  }
}

export class GitRepoVolumeSource extends jspb.Message {
  getRepository(): string;
  setRepository(value: string): GitRepoVolumeSource;

  getRevision(): string;
  setRevision(value: string): GitRepoVolumeSource;

  getDirectory(): string;
  setDirectory(value: string): GitRepoVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitRepoVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: GitRepoVolumeSource): GitRepoVolumeSource.AsObject;
  static serializeBinaryToWriter(message: GitRepoVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitRepoVolumeSource;
  static deserializeBinaryFromReader(message: GitRepoVolumeSource, reader: jspb.BinaryReader): GitRepoVolumeSource;
}

export namespace GitRepoVolumeSource {
  export type AsObject = {
    repository: string,
    revision: string,
    directory: string,
  }
}

export class GlusterfsPersistentVolumeSource extends jspb.Message {
  getEndpoints(): string;
  setEndpoints(value: string): GlusterfsPersistentVolumeSource;

  getPath(): string;
  setPath(value: string): GlusterfsPersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): GlusterfsPersistentVolumeSource;

  getEndpointsnamespace(): string;
  setEndpointsnamespace(value: string): GlusterfsPersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlusterfsPersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: GlusterfsPersistentVolumeSource): GlusterfsPersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: GlusterfsPersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlusterfsPersistentVolumeSource;
  static deserializeBinaryFromReader(message: GlusterfsPersistentVolumeSource, reader: jspb.BinaryReader): GlusterfsPersistentVolumeSource;
}

export namespace GlusterfsPersistentVolumeSource {
  export type AsObject = {
    endpoints: string,
    path: string,
    readonly: boolean,
    endpointsnamespace: string,
  }
}

export class GlusterfsVolumeSource extends jspb.Message {
  getEndpoints(): string;
  setEndpoints(value: string): GlusterfsVolumeSource;

  getPath(): string;
  setPath(value: string): GlusterfsVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): GlusterfsVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlusterfsVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: GlusterfsVolumeSource): GlusterfsVolumeSource.AsObject;
  static serializeBinaryToWriter(message: GlusterfsVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlusterfsVolumeSource;
  static deserializeBinaryFromReader(message: GlusterfsVolumeSource, reader: jspb.BinaryReader): GlusterfsVolumeSource;
}

export namespace GlusterfsVolumeSource {
  export type AsObject = {
    endpoints: string,
    path: string,
    readonly: boolean,
  }
}

export class HTTPGetAction extends jspb.Message {
  getPath(): string;
  setPath(value: string): HTTPGetAction;

  getPort(): k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString | undefined;
  setPort(value?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString): HTTPGetAction;
  hasPort(): boolean;
  clearPort(): HTTPGetAction;

  getHost(): string;
  setHost(value: string): HTTPGetAction;

  getScheme(): string;
  setScheme(value: string): HTTPGetAction;

  getHttpheadersList(): Array<HTTPHeader>;
  setHttpheadersList(value: Array<HTTPHeader>): HTTPGetAction;
  clearHttpheadersList(): HTTPGetAction;
  addHttpheaders(value?: HTTPHeader, index?: number): HTTPHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPGetAction.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPGetAction): HTTPGetAction.AsObject;
  static serializeBinaryToWriter(message: HTTPGetAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPGetAction;
  static deserializeBinaryFromReader(message: HTTPGetAction, reader: jspb.BinaryReader): HTTPGetAction;
}

export namespace HTTPGetAction {
  export type AsObject = {
    path: string,
    port?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString.AsObject,
    host: string,
    scheme: string,
    httpheadersList: Array<HTTPHeader.AsObject>,
  }
}

export class HTTPHeader extends jspb.Message {
  getName(): string;
  setName(value: string): HTTPHeader;

  getValue(): string;
  setValue(value: string): HTTPHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPHeader.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPHeader): HTTPHeader.AsObject;
  static serializeBinaryToWriter(message: HTTPHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPHeader;
  static deserializeBinaryFromReader(message: HTTPHeader, reader: jspb.BinaryReader): HTTPHeader;
}

export namespace HTTPHeader {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class Handler extends jspb.Message {
  getExec(): ExecAction | undefined;
  setExec(value?: ExecAction): Handler;
  hasExec(): boolean;
  clearExec(): Handler;

  getHttpget(): HTTPGetAction | undefined;
  setHttpget(value?: HTTPGetAction): Handler;
  hasHttpget(): boolean;
  clearHttpget(): Handler;

  getTcpsocket(): TCPSocketAction | undefined;
  setTcpsocket(value?: TCPSocketAction): Handler;
  hasTcpsocket(): boolean;
  clearTcpsocket(): Handler;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Handler.AsObject;
  static toObject(includeInstance: boolean, msg: Handler): Handler.AsObject;
  static serializeBinaryToWriter(message: Handler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Handler;
  static deserializeBinaryFromReader(message: Handler, reader: jspb.BinaryReader): Handler;
}

export namespace Handler {
  export type AsObject = {
    exec?: ExecAction.AsObject,
    httpget?: HTTPGetAction.AsObject,
    tcpsocket?: TCPSocketAction.AsObject,
  }
}

export class HostAlias extends jspb.Message {
  getIp(): string;
  setIp(value: string): HostAlias;

  getHostnamesList(): Array<string>;
  setHostnamesList(value: Array<string>): HostAlias;
  clearHostnamesList(): HostAlias;
  addHostnames(value: string, index?: number): HostAlias;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostAlias.AsObject;
  static toObject(includeInstance: boolean, msg: HostAlias): HostAlias.AsObject;
  static serializeBinaryToWriter(message: HostAlias, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostAlias;
  static deserializeBinaryFromReader(message: HostAlias, reader: jspb.BinaryReader): HostAlias;
}

export namespace HostAlias {
  export type AsObject = {
    ip: string,
    hostnamesList: Array<string>,
  }
}

export class HostPathVolumeSource extends jspb.Message {
  getPath(): string;
  setPath(value: string): HostPathVolumeSource;

  getType(): string;
  setType(value: string): HostPathVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostPathVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: HostPathVolumeSource): HostPathVolumeSource.AsObject;
  static serializeBinaryToWriter(message: HostPathVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostPathVolumeSource;
  static deserializeBinaryFromReader(message: HostPathVolumeSource, reader: jspb.BinaryReader): HostPathVolumeSource;
}

export namespace HostPathVolumeSource {
  export type AsObject = {
    path: string,
    type: string,
  }
}

export class ISCSIPersistentVolumeSource extends jspb.Message {
  getTargetportal(): string;
  setTargetportal(value: string): ISCSIPersistentVolumeSource;

  getIqn(): string;
  setIqn(value: string): ISCSIPersistentVolumeSource;

  getLun(): number;
  setLun(value: number): ISCSIPersistentVolumeSource;

  getIscsiinterface(): string;
  setIscsiinterface(value: string): ISCSIPersistentVolumeSource;

  getFstype(): string;
  setFstype(value: string): ISCSIPersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): ISCSIPersistentVolumeSource;

  getPortalsList(): Array<string>;
  setPortalsList(value: Array<string>): ISCSIPersistentVolumeSource;
  clearPortalsList(): ISCSIPersistentVolumeSource;
  addPortals(value: string, index?: number): ISCSIPersistentVolumeSource;

  getChapauthdiscovery(): boolean;
  setChapauthdiscovery(value: boolean): ISCSIPersistentVolumeSource;

  getChapauthsession(): boolean;
  setChapauthsession(value: boolean): ISCSIPersistentVolumeSource;

  getSecretref(): SecretReference | undefined;
  setSecretref(value?: SecretReference): ISCSIPersistentVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): ISCSIPersistentVolumeSource;

  getInitiatorname(): string;
  setInitiatorname(value: string): ISCSIPersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ISCSIPersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: ISCSIPersistentVolumeSource): ISCSIPersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: ISCSIPersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ISCSIPersistentVolumeSource;
  static deserializeBinaryFromReader(message: ISCSIPersistentVolumeSource, reader: jspb.BinaryReader): ISCSIPersistentVolumeSource;
}

export namespace ISCSIPersistentVolumeSource {
  export type AsObject = {
    targetportal: string,
    iqn: string,
    lun: number,
    iscsiinterface: string,
    fstype: string,
    readonly: boolean,
    portalsList: Array<string>,
    chapauthdiscovery: boolean,
    chapauthsession: boolean,
    secretref?: SecretReference.AsObject,
    initiatorname: string,
  }
}

export class ISCSIVolumeSource extends jspb.Message {
  getTargetportal(): string;
  setTargetportal(value: string): ISCSIVolumeSource;

  getIqn(): string;
  setIqn(value: string): ISCSIVolumeSource;

  getLun(): number;
  setLun(value: number): ISCSIVolumeSource;

  getIscsiinterface(): string;
  setIscsiinterface(value: string): ISCSIVolumeSource;

  getFstype(): string;
  setFstype(value: string): ISCSIVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): ISCSIVolumeSource;

  getPortalsList(): Array<string>;
  setPortalsList(value: Array<string>): ISCSIVolumeSource;
  clearPortalsList(): ISCSIVolumeSource;
  addPortals(value: string, index?: number): ISCSIVolumeSource;

  getChapauthdiscovery(): boolean;
  setChapauthdiscovery(value: boolean): ISCSIVolumeSource;

  getChapauthsession(): boolean;
  setChapauthsession(value: boolean): ISCSIVolumeSource;

  getSecretref(): LocalObjectReference | undefined;
  setSecretref(value?: LocalObjectReference): ISCSIVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): ISCSIVolumeSource;

  getInitiatorname(): string;
  setInitiatorname(value: string): ISCSIVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ISCSIVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: ISCSIVolumeSource): ISCSIVolumeSource.AsObject;
  static serializeBinaryToWriter(message: ISCSIVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ISCSIVolumeSource;
  static deserializeBinaryFromReader(message: ISCSIVolumeSource, reader: jspb.BinaryReader): ISCSIVolumeSource;
}

export namespace ISCSIVolumeSource {
  export type AsObject = {
    targetportal: string,
    iqn: string,
    lun: number,
    iscsiinterface: string,
    fstype: string,
    readonly: boolean,
    portalsList: Array<string>,
    chapauthdiscovery: boolean,
    chapauthsession: boolean,
    secretref?: LocalObjectReference.AsObject,
    initiatorname: string,
  }
}

export class KeyToPath extends jspb.Message {
  getKey(): string;
  setKey(value: string): KeyToPath;

  getPath(): string;
  setPath(value: string): KeyToPath;

  getMode(): number;
  setMode(value: number): KeyToPath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyToPath.AsObject;
  static toObject(includeInstance: boolean, msg: KeyToPath): KeyToPath.AsObject;
  static serializeBinaryToWriter(message: KeyToPath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyToPath;
  static deserializeBinaryFromReader(message: KeyToPath, reader: jspb.BinaryReader): KeyToPath;
}

export namespace KeyToPath {
  export type AsObject = {
    key: string,
    path: string,
    mode: number,
  }
}

export class Lifecycle extends jspb.Message {
  getPoststart(): Handler | undefined;
  setPoststart(value?: Handler): Lifecycle;
  hasPoststart(): boolean;
  clearPoststart(): Lifecycle;

  getPrestop(): Handler | undefined;
  setPrestop(value?: Handler): Lifecycle;
  hasPrestop(): boolean;
  clearPrestop(): Lifecycle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lifecycle.AsObject;
  static toObject(includeInstance: boolean, msg: Lifecycle): Lifecycle.AsObject;
  static serializeBinaryToWriter(message: Lifecycle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lifecycle;
  static deserializeBinaryFromReader(message: Lifecycle, reader: jspb.BinaryReader): Lifecycle;
}

export namespace Lifecycle {
  export type AsObject = {
    poststart?: Handler.AsObject,
    prestop?: Handler.AsObject,
  }
}

export class LimitRange extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): LimitRange;
  hasMetadata(): boolean;
  clearMetadata(): LimitRange;

  getSpec(): LimitRangeSpec | undefined;
  setSpec(value?: LimitRangeSpec): LimitRange;
  hasSpec(): boolean;
  clearSpec(): LimitRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LimitRange.AsObject;
  static toObject(includeInstance: boolean, msg: LimitRange): LimitRange.AsObject;
  static serializeBinaryToWriter(message: LimitRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LimitRange;
  static deserializeBinaryFromReader(message: LimitRange, reader: jspb.BinaryReader): LimitRange;
}

export namespace LimitRange {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: LimitRangeSpec.AsObject,
  }
}

export class LimitRangeItem extends jspb.Message {
  getType(): string;
  setType(value: string): LimitRangeItem;

  getMaxMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearMaxMap(): LimitRangeItem;

  getMinMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearMinMap(): LimitRangeItem;

  getDefaultMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearDefaultMap(): LimitRangeItem;

  getDefaultrequestMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearDefaultrequestMap(): LimitRangeItem;

  getMaxlimitrequestratioMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearMaxlimitrequestratioMap(): LimitRangeItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LimitRangeItem.AsObject;
  static toObject(includeInstance: boolean, msg: LimitRangeItem): LimitRangeItem.AsObject;
  static serializeBinaryToWriter(message: LimitRangeItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LimitRangeItem;
  static deserializeBinaryFromReader(message: LimitRangeItem, reader: jspb.BinaryReader): LimitRangeItem;
}

export namespace LimitRangeItem {
  export type AsObject = {
    type: string,
    maxMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    minMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    defaultMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    defaultrequestMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    maxlimitrequestratioMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
  }
}

export class LimitRangeList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): LimitRangeList;
  hasMetadata(): boolean;
  clearMetadata(): LimitRangeList;

  getItemsList(): Array<LimitRange>;
  setItemsList(value: Array<LimitRange>): LimitRangeList;
  clearItemsList(): LimitRangeList;
  addItems(value?: LimitRange, index?: number): LimitRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LimitRangeList.AsObject;
  static toObject(includeInstance: boolean, msg: LimitRangeList): LimitRangeList.AsObject;
  static serializeBinaryToWriter(message: LimitRangeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LimitRangeList;
  static deserializeBinaryFromReader(message: LimitRangeList, reader: jspb.BinaryReader): LimitRangeList;
}

export namespace LimitRangeList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<LimitRange.AsObject>,
  }
}

export class LimitRangeSpec extends jspb.Message {
  getLimitsList(): Array<LimitRangeItem>;
  setLimitsList(value: Array<LimitRangeItem>): LimitRangeSpec;
  clearLimitsList(): LimitRangeSpec;
  addLimits(value?: LimitRangeItem, index?: number): LimitRangeItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LimitRangeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LimitRangeSpec): LimitRangeSpec.AsObject;
  static serializeBinaryToWriter(message: LimitRangeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LimitRangeSpec;
  static deserializeBinaryFromReader(message: LimitRangeSpec, reader: jspb.BinaryReader): LimitRangeSpec;
}

export namespace LimitRangeSpec {
  export type AsObject = {
    limitsList: Array<LimitRangeItem.AsObject>,
  }
}

export class List extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): List;
  hasMetadata(): boolean;
  clearMetadata(): List;

  getItemsList(): Array<k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension>;
  setItemsList(value: Array<k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension>): List;
  clearItemsList(): List;
  addItems(value?: k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension, index?: number): k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): List.AsObject;
  static toObject(includeInstance: boolean, msg: List): List.AsObject;
  static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): List;
  static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
}

export namespace List {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.AsObject>,
  }
}

export class LoadBalancerIngress extends jspb.Message {
  getIp(): string;
  setIp(value: string): LoadBalancerIngress;

  getHostname(): string;
  setHostname(value: string): LoadBalancerIngress;

  getPortsList(): Array<PortStatus>;
  setPortsList(value: Array<PortStatus>): LoadBalancerIngress;
  clearPortsList(): LoadBalancerIngress;
  addPorts(value?: PortStatus, index?: number): PortStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadBalancerIngress.AsObject;
  static toObject(includeInstance: boolean, msg: LoadBalancerIngress): LoadBalancerIngress.AsObject;
  static serializeBinaryToWriter(message: LoadBalancerIngress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadBalancerIngress;
  static deserializeBinaryFromReader(message: LoadBalancerIngress, reader: jspb.BinaryReader): LoadBalancerIngress;
}

export namespace LoadBalancerIngress {
  export type AsObject = {
    ip: string,
    hostname: string,
    portsList: Array<PortStatus.AsObject>,
  }
}

export class LoadBalancerStatus extends jspb.Message {
  getIngressList(): Array<LoadBalancerIngress>;
  setIngressList(value: Array<LoadBalancerIngress>): LoadBalancerStatus;
  clearIngressList(): LoadBalancerStatus;
  addIngress(value?: LoadBalancerIngress, index?: number): LoadBalancerIngress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadBalancerStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LoadBalancerStatus): LoadBalancerStatus.AsObject;
  static serializeBinaryToWriter(message: LoadBalancerStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadBalancerStatus;
  static deserializeBinaryFromReader(message: LoadBalancerStatus, reader: jspb.BinaryReader): LoadBalancerStatus;
}

export namespace LoadBalancerStatus {
  export type AsObject = {
    ingressList: Array<LoadBalancerIngress.AsObject>,
  }
}

export class LocalObjectReference extends jspb.Message {
  getName(): string;
  setName(value: string): LocalObjectReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalObjectReference.AsObject;
  static toObject(includeInstance: boolean, msg: LocalObjectReference): LocalObjectReference.AsObject;
  static serializeBinaryToWriter(message: LocalObjectReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalObjectReference;
  static deserializeBinaryFromReader(message: LocalObjectReference, reader: jspb.BinaryReader): LocalObjectReference;
}

export namespace LocalObjectReference {
  export type AsObject = {
    name: string,
  }
}

export class LocalVolumeSource extends jspb.Message {
  getPath(): string;
  setPath(value: string): LocalVolumeSource;

  getFstype(): string;
  setFstype(value: string): LocalVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: LocalVolumeSource): LocalVolumeSource.AsObject;
  static serializeBinaryToWriter(message: LocalVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalVolumeSource;
  static deserializeBinaryFromReader(message: LocalVolumeSource, reader: jspb.BinaryReader): LocalVolumeSource;
}

export namespace LocalVolumeSource {
  export type AsObject = {
    path: string,
    fstype: string,
  }
}

export class NFSVolumeSource extends jspb.Message {
  getServer(): string;
  setServer(value: string): NFSVolumeSource;

  getPath(): string;
  setPath(value: string): NFSVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): NFSVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NFSVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: NFSVolumeSource): NFSVolumeSource.AsObject;
  static serializeBinaryToWriter(message: NFSVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NFSVolumeSource;
  static deserializeBinaryFromReader(message: NFSVolumeSource, reader: jspb.BinaryReader): NFSVolumeSource;
}

export namespace NFSVolumeSource {
  export type AsObject = {
    server: string,
    path: string,
    readonly: boolean,
  }
}

export class Namespace extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Namespace;
  hasMetadata(): boolean;
  clearMetadata(): Namespace;

  getSpec(): NamespaceSpec | undefined;
  setSpec(value?: NamespaceSpec): Namespace;
  hasSpec(): boolean;
  clearSpec(): Namespace;

  getStatus(): NamespaceStatus | undefined;
  setStatus(value?: NamespaceStatus): Namespace;
  hasStatus(): boolean;
  clearStatus(): Namespace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Namespace.AsObject;
  static toObject(includeInstance: boolean, msg: Namespace): Namespace.AsObject;
  static serializeBinaryToWriter(message: Namespace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Namespace;
  static deserializeBinaryFromReader(message: Namespace, reader: jspb.BinaryReader): Namespace;
}

export namespace Namespace {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: NamespaceSpec.AsObject,
    status?: NamespaceStatus.AsObject,
  }
}

export class NamespaceCondition extends jspb.Message {
  getType(): string;
  setType(value: string): NamespaceCondition;

  getStatus(): string;
  setStatus(value: string): NamespaceCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NamespaceCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): NamespaceCondition;

  getReason(): string;
  setReason(value: string): NamespaceCondition;

  getMessage(): string;
  setMessage(value: string): NamespaceCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceCondition.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceCondition): NamespaceCondition.AsObject;
  static serializeBinaryToWriter(message: NamespaceCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceCondition;
  static deserializeBinaryFromReader(message: NamespaceCondition, reader: jspb.BinaryReader): NamespaceCondition;
}

export namespace NamespaceCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class NamespaceList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): NamespaceList;
  hasMetadata(): boolean;
  clearMetadata(): NamespaceList;

  getItemsList(): Array<Namespace>;
  setItemsList(value: Array<Namespace>): NamespaceList;
  clearItemsList(): NamespaceList;
  addItems(value?: Namespace, index?: number): Namespace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceList.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceList): NamespaceList.AsObject;
  static serializeBinaryToWriter(message: NamespaceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceList;
  static deserializeBinaryFromReader(message: NamespaceList, reader: jspb.BinaryReader): NamespaceList;
}

export namespace NamespaceList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Namespace.AsObject>,
  }
}

export class NamespaceSpec extends jspb.Message {
  getFinalizersList(): Array<string>;
  setFinalizersList(value: Array<string>): NamespaceSpec;
  clearFinalizersList(): NamespaceSpec;
  addFinalizers(value: string, index?: number): NamespaceSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceSpec): NamespaceSpec.AsObject;
  static serializeBinaryToWriter(message: NamespaceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceSpec;
  static deserializeBinaryFromReader(message: NamespaceSpec, reader: jspb.BinaryReader): NamespaceSpec;
}

export namespace NamespaceSpec {
  export type AsObject = {
    finalizersList: Array<string>,
  }
}

export class NamespaceStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): NamespaceStatus;

  getConditionsList(): Array<NamespaceCondition>;
  setConditionsList(value: Array<NamespaceCondition>): NamespaceStatus;
  clearConditionsList(): NamespaceStatus;
  addConditions(value?: NamespaceCondition, index?: number): NamespaceCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceStatus): NamespaceStatus.AsObject;
  static serializeBinaryToWriter(message: NamespaceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceStatus;
  static deserializeBinaryFromReader(message: NamespaceStatus, reader: jspb.BinaryReader): NamespaceStatus;
}

export namespace NamespaceStatus {
  export type AsObject = {
    phase: string,
    conditionsList: Array<NamespaceCondition.AsObject>,
  }
}

export class Node extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Node;
  hasMetadata(): boolean;
  clearMetadata(): Node;

  getSpec(): NodeSpec | undefined;
  setSpec(value?: NodeSpec): Node;
  hasSpec(): boolean;
  clearSpec(): Node;

  getStatus(): NodeStatus | undefined;
  setStatus(value?: NodeStatus): Node;
  hasStatus(): boolean;
  clearStatus(): Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: NodeSpec.AsObject,
    status?: NodeStatus.AsObject,
  }
}

export class NodeAddress extends jspb.Message {
  getType(): string;
  setType(value: string): NodeAddress;

  getAddress(): string;
  setAddress(value: string): NodeAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAddress.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAddress): NodeAddress.AsObject;
  static serializeBinaryToWriter(message: NodeAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAddress;
  static deserializeBinaryFromReader(message: NodeAddress, reader: jspb.BinaryReader): NodeAddress;
}

export namespace NodeAddress {
  export type AsObject = {
    type: string,
    address: string,
  }
}

export class NodeAffinity extends jspb.Message {
  getRequiredduringschedulingignoredduringexecution(): NodeSelector | undefined;
  setRequiredduringschedulingignoredduringexecution(value?: NodeSelector): NodeAffinity;
  hasRequiredduringschedulingignoredduringexecution(): boolean;
  clearRequiredduringschedulingignoredduringexecution(): NodeAffinity;

  getPreferredduringschedulingignoredduringexecutionList(): Array<PreferredSchedulingTerm>;
  setPreferredduringschedulingignoredduringexecutionList(value: Array<PreferredSchedulingTerm>): NodeAffinity;
  clearPreferredduringschedulingignoredduringexecutionList(): NodeAffinity;
  addPreferredduringschedulingignoredduringexecution(value?: PreferredSchedulingTerm, index?: number): PreferredSchedulingTerm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAffinity.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAffinity): NodeAffinity.AsObject;
  static serializeBinaryToWriter(message: NodeAffinity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAffinity;
  static deserializeBinaryFromReader(message: NodeAffinity, reader: jspb.BinaryReader): NodeAffinity;
}

export namespace NodeAffinity {
  export type AsObject = {
    requiredduringschedulingignoredduringexecution?: NodeSelector.AsObject,
    preferredduringschedulingignoredduringexecutionList: Array<PreferredSchedulingTerm.AsObject>,
  }
}

export class NodeCondition extends jspb.Message {
  getType(): string;
  setType(value: string): NodeCondition;

  getStatus(): string;
  setStatus(value: string): NodeCondition;

  getLastheartbeattime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastheartbeattime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NodeCondition;
  hasLastheartbeattime(): boolean;
  clearLastheartbeattime(): NodeCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NodeCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): NodeCondition;

  getReason(): string;
  setReason(value: string): NodeCondition;

  getMessage(): string;
  setMessage(value: string): NodeCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeCondition.AsObject;
  static toObject(includeInstance: boolean, msg: NodeCondition): NodeCondition.AsObject;
  static serializeBinaryToWriter(message: NodeCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeCondition;
  static deserializeBinaryFromReader(message: NodeCondition, reader: jspb.BinaryReader): NodeCondition;
}

export namespace NodeCondition {
  export type AsObject = {
    type: string,
    status: string,
    lastheartbeattime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class NodeConfigSource extends jspb.Message {
  getConfigmap(): ConfigMapNodeConfigSource | undefined;
  setConfigmap(value?: ConfigMapNodeConfigSource): NodeConfigSource;
  hasConfigmap(): boolean;
  clearConfigmap(): NodeConfigSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeConfigSource.AsObject;
  static toObject(includeInstance: boolean, msg: NodeConfigSource): NodeConfigSource.AsObject;
  static serializeBinaryToWriter(message: NodeConfigSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeConfigSource;
  static deserializeBinaryFromReader(message: NodeConfigSource, reader: jspb.BinaryReader): NodeConfigSource;
}

export namespace NodeConfigSource {
  export type AsObject = {
    configmap?: ConfigMapNodeConfigSource.AsObject,
  }
}

export class NodeConfigStatus extends jspb.Message {
  getAssigned(): NodeConfigSource | undefined;
  setAssigned(value?: NodeConfigSource): NodeConfigStatus;
  hasAssigned(): boolean;
  clearAssigned(): NodeConfigStatus;

  getActive(): NodeConfigSource | undefined;
  setActive(value?: NodeConfigSource): NodeConfigStatus;
  hasActive(): boolean;
  clearActive(): NodeConfigStatus;

  getLastknowngood(): NodeConfigSource | undefined;
  setLastknowngood(value?: NodeConfigSource): NodeConfigStatus;
  hasLastknowngood(): boolean;
  clearLastknowngood(): NodeConfigStatus;

  getError(): string;
  setError(value: string): NodeConfigStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeConfigStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NodeConfigStatus): NodeConfigStatus.AsObject;
  static serializeBinaryToWriter(message: NodeConfigStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeConfigStatus;
  static deserializeBinaryFromReader(message: NodeConfigStatus, reader: jspb.BinaryReader): NodeConfigStatus;
}

export namespace NodeConfigStatus {
  export type AsObject = {
    assigned?: NodeConfigSource.AsObject,
    active?: NodeConfigSource.AsObject,
    lastknowngood?: NodeConfigSource.AsObject,
    error: string,
  }
}

export class NodeDaemonEndpoints extends jspb.Message {
  getKubeletendpoint(): DaemonEndpoint | undefined;
  setKubeletendpoint(value?: DaemonEndpoint): NodeDaemonEndpoints;
  hasKubeletendpoint(): boolean;
  clearKubeletendpoint(): NodeDaemonEndpoints;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeDaemonEndpoints.AsObject;
  static toObject(includeInstance: boolean, msg: NodeDaemonEndpoints): NodeDaemonEndpoints.AsObject;
  static serializeBinaryToWriter(message: NodeDaemonEndpoints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeDaemonEndpoints;
  static deserializeBinaryFromReader(message: NodeDaemonEndpoints, reader: jspb.BinaryReader): NodeDaemonEndpoints;
}

export namespace NodeDaemonEndpoints {
  export type AsObject = {
    kubeletendpoint?: DaemonEndpoint.AsObject,
  }
}

export class NodeList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): NodeList;
  hasMetadata(): boolean;
  clearMetadata(): NodeList;

  getItemsList(): Array<Node>;
  setItemsList(value: Array<Node>): NodeList;
  clearItemsList(): NodeList;
  addItems(value?: Node, index?: number): Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeList.AsObject;
  static toObject(includeInstance: boolean, msg: NodeList): NodeList.AsObject;
  static serializeBinaryToWriter(message: NodeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeList;
  static deserializeBinaryFromReader(message: NodeList, reader: jspb.BinaryReader): NodeList;
}

export namespace NodeList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Node.AsObject>,
  }
}

export class NodeProxyOptions extends jspb.Message {
  getPath(): string;
  setPath(value: string): NodeProxyOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeProxyOptions.AsObject;
  static toObject(includeInstance: boolean, msg: NodeProxyOptions): NodeProxyOptions.AsObject;
  static serializeBinaryToWriter(message: NodeProxyOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeProxyOptions;
  static deserializeBinaryFromReader(message: NodeProxyOptions, reader: jspb.BinaryReader): NodeProxyOptions;
}

export namespace NodeProxyOptions {
  export type AsObject = {
    path: string,
  }
}

export class NodeResources extends jspb.Message {
  getCapacityMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearCapacityMap(): NodeResources;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeResources.AsObject;
  static toObject(includeInstance: boolean, msg: NodeResources): NodeResources.AsObject;
  static serializeBinaryToWriter(message: NodeResources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeResources;
  static deserializeBinaryFromReader(message: NodeResources, reader: jspb.BinaryReader): NodeResources;
}

export namespace NodeResources {
  export type AsObject = {
    capacityMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
  }
}

export class NodeSelector extends jspb.Message {
  getNodeselectortermsList(): Array<NodeSelectorTerm>;
  setNodeselectortermsList(value: Array<NodeSelectorTerm>): NodeSelector;
  clearNodeselectortermsList(): NodeSelector;
  addNodeselectorterms(value?: NodeSelectorTerm, index?: number): NodeSelectorTerm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeSelector.AsObject;
  static toObject(includeInstance: boolean, msg: NodeSelector): NodeSelector.AsObject;
  static serializeBinaryToWriter(message: NodeSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeSelector;
  static deserializeBinaryFromReader(message: NodeSelector, reader: jspb.BinaryReader): NodeSelector;
}

export namespace NodeSelector {
  export type AsObject = {
    nodeselectortermsList: Array<NodeSelectorTerm.AsObject>,
  }
}

export class NodeSelectorRequirement extends jspb.Message {
  getKey(): string;
  setKey(value: string): NodeSelectorRequirement;

  getOperator(): string;
  setOperator(value: string): NodeSelectorRequirement;

  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): NodeSelectorRequirement;
  clearValuesList(): NodeSelectorRequirement;
  addValues(value: string, index?: number): NodeSelectorRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeSelectorRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: NodeSelectorRequirement): NodeSelectorRequirement.AsObject;
  static serializeBinaryToWriter(message: NodeSelectorRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeSelectorRequirement;
  static deserializeBinaryFromReader(message: NodeSelectorRequirement, reader: jspb.BinaryReader): NodeSelectorRequirement;
}

export namespace NodeSelectorRequirement {
  export type AsObject = {
    key: string,
    operator: string,
    valuesList: Array<string>,
  }
}

export class NodeSelectorTerm extends jspb.Message {
  getMatchexpressionsList(): Array<NodeSelectorRequirement>;
  setMatchexpressionsList(value: Array<NodeSelectorRequirement>): NodeSelectorTerm;
  clearMatchexpressionsList(): NodeSelectorTerm;
  addMatchexpressions(value?: NodeSelectorRequirement, index?: number): NodeSelectorRequirement;

  getMatchfieldsList(): Array<NodeSelectorRequirement>;
  setMatchfieldsList(value: Array<NodeSelectorRequirement>): NodeSelectorTerm;
  clearMatchfieldsList(): NodeSelectorTerm;
  addMatchfields(value?: NodeSelectorRequirement, index?: number): NodeSelectorRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeSelectorTerm.AsObject;
  static toObject(includeInstance: boolean, msg: NodeSelectorTerm): NodeSelectorTerm.AsObject;
  static serializeBinaryToWriter(message: NodeSelectorTerm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeSelectorTerm;
  static deserializeBinaryFromReader(message: NodeSelectorTerm, reader: jspb.BinaryReader): NodeSelectorTerm;
}

export namespace NodeSelectorTerm {
  export type AsObject = {
    matchexpressionsList: Array<NodeSelectorRequirement.AsObject>,
    matchfieldsList: Array<NodeSelectorRequirement.AsObject>,
  }
}

export class NodeSpec extends jspb.Message {
  getPodcidr(): string;
  setPodcidr(value: string): NodeSpec;

  getPodcidrsList(): Array<string>;
  setPodcidrsList(value: Array<string>): NodeSpec;
  clearPodcidrsList(): NodeSpec;
  addPodcidrs(value: string, index?: number): NodeSpec;

  getProviderid(): string;
  setProviderid(value: string): NodeSpec;

  getUnschedulable(): boolean;
  setUnschedulable(value: boolean): NodeSpec;

  getTaintsList(): Array<Taint>;
  setTaintsList(value: Array<Taint>): NodeSpec;
  clearTaintsList(): NodeSpec;
  addTaints(value?: Taint, index?: number): Taint;

  getConfigsource(): NodeConfigSource | undefined;
  setConfigsource(value?: NodeConfigSource): NodeSpec;
  hasConfigsource(): boolean;
  clearConfigsource(): NodeSpec;

  getExternalid(): string;
  setExternalid(value: string): NodeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NodeSpec): NodeSpec.AsObject;
  static serializeBinaryToWriter(message: NodeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeSpec;
  static deserializeBinaryFromReader(message: NodeSpec, reader: jspb.BinaryReader): NodeSpec;
}

export namespace NodeSpec {
  export type AsObject = {
    podcidr: string,
    podcidrsList: Array<string>,
    providerid: string,
    unschedulable: boolean,
    taintsList: Array<Taint.AsObject>,
    configsource?: NodeConfigSource.AsObject,
    externalid: string,
  }
}

export class NodeStatus extends jspb.Message {
  getCapacityMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearCapacityMap(): NodeStatus;

  getAllocatableMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearAllocatableMap(): NodeStatus;

  getPhase(): string;
  setPhase(value: string): NodeStatus;

  getConditionsList(): Array<NodeCondition>;
  setConditionsList(value: Array<NodeCondition>): NodeStatus;
  clearConditionsList(): NodeStatus;
  addConditions(value?: NodeCondition, index?: number): NodeCondition;

  getAddressesList(): Array<NodeAddress>;
  setAddressesList(value: Array<NodeAddress>): NodeStatus;
  clearAddressesList(): NodeStatus;
  addAddresses(value?: NodeAddress, index?: number): NodeAddress;

  getDaemonendpoints(): NodeDaemonEndpoints | undefined;
  setDaemonendpoints(value?: NodeDaemonEndpoints): NodeStatus;
  hasDaemonendpoints(): boolean;
  clearDaemonendpoints(): NodeStatus;

  getNodeinfo(): NodeSystemInfo | undefined;
  setNodeinfo(value?: NodeSystemInfo): NodeStatus;
  hasNodeinfo(): boolean;
  clearNodeinfo(): NodeStatus;

  getImagesList(): Array<ContainerImage>;
  setImagesList(value: Array<ContainerImage>): NodeStatus;
  clearImagesList(): NodeStatus;
  addImages(value?: ContainerImage, index?: number): ContainerImage;

  getVolumesinuseList(): Array<string>;
  setVolumesinuseList(value: Array<string>): NodeStatus;
  clearVolumesinuseList(): NodeStatus;
  addVolumesinuse(value: string, index?: number): NodeStatus;

  getVolumesattachedList(): Array<AttachedVolume>;
  setVolumesattachedList(value: Array<AttachedVolume>): NodeStatus;
  clearVolumesattachedList(): NodeStatus;
  addVolumesattached(value?: AttachedVolume, index?: number): AttachedVolume;

  getConfig(): NodeConfigStatus | undefined;
  setConfig(value?: NodeConfigStatus): NodeStatus;
  hasConfig(): boolean;
  clearConfig(): NodeStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NodeStatus): NodeStatus.AsObject;
  static serializeBinaryToWriter(message: NodeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeStatus;
  static deserializeBinaryFromReader(message: NodeStatus, reader: jspb.BinaryReader): NodeStatus;
}

export namespace NodeStatus {
  export type AsObject = {
    capacityMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    allocatableMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    phase: string,
    conditionsList: Array<NodeCondition.AsObject>,
    addressesList: Array<NodeAddress.AsObject>,
    daemonendpoints?: NodeDaemonEndpoints.AsObject,
    nodeinfo?: NodeSystemInfo.AsObject,
    imagesList: Array<ContainerImage.AsObject>,
    volumesinuseList: Array<string>,
    volumesattachedList: Array<AttachedVolume.AsObject>,
    config?: NodeConfigStatus.AsObject,
  }
}

export class NodeSystemInfo extends jspb.Message {
  getMachineid(): string;
  setMachineid(value: string): NodeSystemInfo;

  getSystemuuid(): string;
  setSystemuuid(value: string): NodeSystemInfo;

  getBootid(): string;
  setBootid(value: string): NodeSystemInfo;

  getKernelversion(): string;
  setKernelversion(value: string): NodeSystemInfo;

  getOsimage(): string;
  setOsimage(value: string): NodeSystemInfo;

  getContainerruntimeversion(): string;
  setContainerruntimeversion(value: string): NodeSystemInfo;

  getKubeletversion(): string;
  setKubeletversion(value: string): NodeSystemInfo;

  getKubeproxyversion(): string;
  setKubeproxyversion(value: string): NodeSystemInfo;

  getOperatingsystem(): string;
  setOperatingsystem(value: string): NodeSystemInfo;

  getArchitecture(): string;
  setArchitecture(value: string): NodeSystemInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeSystemInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NodeSystemInfo): NodeSystemInfo.AsObject;
  static serializeBinaryToWriter(message: NodeSystemInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeSystemInfo;
  static deserializeBinaryFromReader(message: NodeSystemInfo, reader: jspb.BinaryReader): NodeSystemInfo;
}

export namespace NodeSystemInfo {
  export type AsObject = {
    machineid: string,
    systemuuid: string,
    bootid: string,
    kernelversion: string,
    osimage: string,
    containerruntimeversion: string,
    kubeletversion: string,
    kubeproxyversion: string,
    operatingsystem: string,
    architecture: string,
  }
}

export class ObjectFieldSelector extends jspb.Message {
  getApiversion(): string;
  setApiversion(value: string): ObjectFieldSelector;

  getFieldpath(): string;
  setFieldpath(value: string): ObjectFieldSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectFieldSelector.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectFieldSelector): ObjectFieldSelector.AsObject;
  static serializeBinaryToWriter(message: ObjectFieldSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectFieldSelector;
  static deserializeBinaryFromReader(message: ObjectFieldSelector, reader: jspb.BinaryReader): ObjectFieldSelector;
}

export namespace ObjectFieldSelector {
  export type AsObject = {
    apiversion: string,
    fieldpath: string,
  }
}

export class ObjectReference extends jspb.Message {
  getKind(): string;
  setKind(value: string): ObjectReference;

  getNamespace(): string;
  setNamespace(value: string): ObjectReference;

  getName(): string;
  setName(value: string): ObjectReference;

  getUid(): string;
  setUid(value: string): ObjectReference;

  getApiversion(): string;
  setApiversion(value: string): ObjectReference;

  getResourceversion(): string;
  setResourceversion(value: string): ObjectReference;

  getFieldpath(): string;
  setFieldpath(value: string): ObjectReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectReference.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectReference): ObjectReference.AsObject;
  static serializeBinaryToWriter(message: ObjectReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectReference;
  static deserializeBinaryFromReader(message: ObjectReference, reader: jspb.BinaryReader): ObjectReference;
}

export namespace ObjectReference {
  export type AsObject = {
    kind: string,
    namespace: string,
    name: string,
    uid: string,
    apiversion: string,
    resourceversion: string,
    fieldpath: string,
  }
}

export class PersistentVolume extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PersistentVolume;
  hasMetadata(): boolean;
  clearMetadata(): PersistentVolume;

  getSpec(): PersistentVolumeSpec | undefined;
  setSpec(value?: PersistentVolumeSpec): PersistentVolume;
  hasSpec(): boolean;
  clearSpec(): PersistentVolume;

  getStatus(): PersistentVolumeStatus | undefined;
  setStatus(value?: PersistentVolumeStatus): PersistentVolume;
  hasStatus(): boolean;
  clearStatus(): PersistentVolume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolume.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolume): PersistentVolume.AsObject;
  static serializeBinaryToWriter(message: PersistentVolume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolume;
  static deserializeBinaryFromReader(message: PersistentVolume, reader: jspb.BinaryReader): PersistentVolume;
}

export namespace PersistentVolume {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PersistentVolumeSpec.AsObject,
    status?: PersistentVolumeStatus.AsObject,
  }
}

export class PersistentVolumeClaim extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PersistentVolumeClaim;
  hasMetadata(): boolean;
  clearMetadata(): PersistentVolumeClaim;

  getSpec(): PersistentVolumeClaimSpec | undefined;
  setSpec(value?: PersistentVolumeClaimSpec): PersistentVolumeClaim;
  hasSpec(): boolean;
  clearSpec(): PersistentVolumeClaim;

  getStatus(): PersistentVolumeClaimStatus | undefined;
  setStatus(value?: PersistentVolumeClaimStatus): PersistentVolumeClaim;
  hasStatus(): boolean;
  clearStatus(): PersistentVolumeClaim;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeClaim.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeClaim): PersistentVolumeClaim.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeClaim;
  static deserializeBinaryFromReader(message: PersistentVolumeClaim, reader: jspb.BinaryReader): PersistentVolumeClaim;
}

export namespace PersistentVolumeClaim {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PersistentVolumeClaimSpec.AsObject,
    status?: PersistentVolumeClaimStatus.AsObject,
  }
}

export class PersistentVolumeClaimCondition extends jspb.Message {
  getType(): string;
  setType(value: string): PersistentVolumeClaimCondition;

  getStatus(): string;
  setStatus(value: string): PersistentVolumeClaimCondition;

  getLastprobetime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastprobetime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PersistentVolumeClaimCondition;
  hasLastprobetime(): boolean;
  clearLastprobetime(): PersistentVolumeClaimCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PersistentVolumeClaimCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): PersistentVolumeClaimCondition;

  getReason(): string;
  setReason(value: string): PersistentVolumeClaimCondition;

  getMessage(): string;
  setMessage(value: string): PersistentVolumeClaimCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeClaimCondition.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeClaimCondition): PersistentVolumeClaimCondition.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeClaimCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeClaimCondition;
  static deserializeBinaryFromReader(message: PersistentVolumeClaimCondition, reader: jspb.BinaryReader): PersistentVolumeClaimCondition;
}

export namespace PersistentVolumeClaimCondition {
  export type AsObject = {
    type: string,
    status: string,
    lastprobetime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class PersistentVolumeClaimList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PersistentVolumeClaimList;
  hasMetadata(): boolean;
  clearMetadata(): PersistentVolumeClaimList;

  getItemsList(): Array<PersistentVolumeClaim>;
  setItemsList(value: Array<PersistentVolumeClaim>): PersistentVolumeClaimList;
  clearItemsList(): PersistentVolumeClaimList;
  addItems(value?: PersistentVolumeClaim, index?: number): PersistentVolumeClaim;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeClaimList.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeClaimList): PersistentVolumeClaimList.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeClaimList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeClaimList;
  static deserializeBinaryFromReader(message: PersistentVolumeClaimList, reader: jspb.BinaryReader): PersistentVolumeClaimList;
}

export namespace PersistentVolumeClaimList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<PersistentVolumeClaim.AsObject>,
  }
}

export class PersistentVolumeClaimSpec extends jspb.Message {
  getAccessmodesList(): Array<string>;
  setAccessmodesList(value: Array<string>): PersistentVolumeClaimSpec;
  clearAccessmodesList(): PersistentVolumeClaimSpec;
  addAccessmodes(value: string, index?: number): PersistentVolumeClaimSpec;

  getSelector(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector | undefined;
  setSelector(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector): PersistentVolumeClaimSpec;
  hasSelector(): boolean;
  clearSelector(): PersistentVolumeClaimSpec;

  getResources(): ResourceRequirements | undefined;
  setResources(value?: ResourceRequirements): PersistentVolumeClaimSpec;
  hasResources(): boolean;
  clearResources(): PersistentVolumeClaimSpec;

  getVolumename(): string;
  setVolumename(value: string): PersistentVolumeClaimSpec;

  getStorageclassname(): string;
  setStorageclassname(value: string): PersistentVolumeClaimSpec;

  getVolumemode(): string;
  setVolumemode(value: string): PersistentVolumeClaimSpec;

  getDatasource(): TypedLocalObjectReference | undefined;
  setDatasource(value?: TypedLocalObjectReference): PersistentVolumeClaimSpec;
  hasDatasource(): boolean;
  clearDatasource(): PersistentVolumeClaimSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeClaimSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeClaimSpec): PersistentVolumeClaimSpec.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeClaimSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeClaimSpec;
  static deserializeBinaryFromReader(message: PersistentVolumeClaimSpec, reader: jspb.BinaryReader): PersistentVolumeClaimSpec;
}

export namespace PersistentVolumeClaimSpec {
  export type AsObject = {
    accessmodesList: Array<string>,
    selector?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector.AsObject,
    resources?: ResourceRequirements.AsObject,
    volumename: string,
    storageclassname: string,
    volumemode: string,
    datasource?: TypedLocalObjectReference.AsObject,
  }
}

export class PersistentVolumeClaimStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): PersistentVolumeClaimStatus;

  getAccessmodesList(): Array<string>;
  setAccessmodesList(value: Array<string>): PersistentVolumeClaimStatus;
  clearAccessmodesList(): PersistentVolumeClaimStatus;
  addAccessmodes(value: string, index?: number): PersistentVolumeClaimStatus;

  getCapacityMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearCapacityMap(): PersistentVolumeClaimStatus;

  getConditionsList(): Array<PersistentVolumeClaimCondition>;
  setConditionsList(value: Array<PersistentVolumeClaimCondition>): PersistentVolumeClaimStatus;
  clearConditionsList(): PersistentVolumeClaimStatus;
  addConditions(value?: PersistentVolumeClaimCondition, index?: number): PersistentVolumeClaimCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeClaimStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeClaimStatus): PersistentVolumeClaimStatus.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeClaimStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeClaimStatus;
  static deserializeBinaryFromReader(message: PersistentVolumeClaimStatus, reader: jspb.BinaryReader): PersistentVolumeClaimStatus;
}

export namespace PersistentVolumeClaimStatus {
  export type AsObject = {
    phase: string,
    accessmodesList: Array<string>,
    capacityMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    conditionsList: Array<PersistentVolumeClaimCondition.AsObject>,
  }
}

export class PersistentVolumeClaimTemplate extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PersistentVolumeClaimTemplate;
  hasMetadata(): boolean;
  clearMetadata(): PersistentVolumeClaimTemplate;

  getSpec(): PersistentVolumeClaimSpec | undefined;
  setSpec(value?: PersistentVolumeClaimSpec): PersistentVolumeClaimTemplate;
  hasSpec(): boolean;
  clearSpec(): PersistentVolumeClaimTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeClaimTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeClaimTemplate): PersistentVolumeClaimTemplate.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeClaimTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeClaimTemplate;
  static deserializeBinaryFromReader(message: PersistentVolumeClaimTemplate, reader: jspb.BinaryReader): PersistentVolumeClaimTemplate;
}

export namespace PersistentVolumeClaimTemplate {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PersistentVolumeClaimSpec.AsObject,
  }
}

export class PersistentVolumeClaimVolumeSource extends jspb.Message {
  getClaimname(): string;
  setClaimname(value: string): PersistentVolumeClaimVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): PersistentVolumeClaimVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeClaimVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeClaimVolumeSource): PersistentVolumeClaimVolumeSource.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeClaimVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeClaimVolumeSource;
  static deserializeBinaryFromReader(message: PersistentVolumeClaimVolumeSource, reader: jspb.BinaryReader): PersistentVolumeClaimVolumeSource;
}

export namespace PersistentVolumeClaimVolumeSource {
  export type AsObject = {
    claimname: string,
    readonly: boolean,
  }
}

export class PersistentVolumeList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PersistentVolumeList;
  hasMetadata(): boolean;
  clearMetadata(): PersistentVolumeList;

  getItemsList(): Array<PersistentVolume>;
  setItemsList(value: Array<PersistentVolume>): PersistentVolumeList;
  clearItemsList(): PersistentVolumeList;
  addItems(value?: PersistentVolume, index?: number): PersistentVolume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeList.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeList): PersistentVolumeList.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeList;
  static deserializeBinaryFromReader(message: PersistentVolumeList, reader: jspb.BinaryReader): PersistentVolumeList;
}

export namespace PersistentVolumeList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<PersistentVolume.AsObject>,
  }
}

export class PersistentVolumeSource extends jspb.Message {
  getGcepersistentdisk(): GCEPersistentDiskVolumeSource | undefined;
  setGcepersistentdisk(value?: GCEPersistentDiskVolumeSource): PersistentVolumeSource;
  hasGcepersistentdisk(): boolean;
  clearGcepersistentdisk(): PersistentVolumeSource;

  getAwselasticblockstore(): AWSElasticBlockStoreVolumeSource | undefined;
  setAwselasticblockstore(value?: AWSElasticBlockStoreVolumeSource): PersistentVolumeSource;
  hasAwselasticblockstore(): boolean;
  clearAwselasticblockstore(): PersistentVolumeSource;

  getHostpath(): HostPathVolumeSource | undefined;
  setHostpath(value?: HostPathVolumeSource): PersistentVolumeSource;
  hasHostpath(): boolean;
  clearHostpath(): PersistentVolumeSource;

  getGlusterfs(): GlusterfsPersistentVolumeSource | undefined;
  setGlusterfs(value?: GlusterfsPersistentVolumeSource): PersistentVolumeSource;
  hasGlusterfs(): boolean;
  clearGlusterfs(): PersistentVolumeSource;

  getNfs(): NFSVolumeSource | undefined;
  setNfs(value?: NFSVolumeSource): PersistentVolumeSource;
  hasNfs(): boolean;
  clearNfs(): PersistentVolumeSource;

  getRbd(): RBDPersistentVolumeSource | undefined;
  setRbd(value?: RBDPersistentVolumeSource): PersistentVolumeSource;
  hasRbd(): boolean;
  clearRbd(): PersistentVolumeSource;

  getIscsi(): ISCSIPersistentVolumeSource | undefined;
  setIscsi(value?: ISCSIPersistentVolumeSource): PersistentVolumeSource;
  hasIscsi(): boolean;
  clearIscsi(): PersistentVolumeSource;

  getCinder(): CinderPersistentVolumeSource | undefined;
  setCinder(value?: CinderPersistentVolumeSource): PersistentVolumeSource;
  hasCinder(): boolean;
  clearCinder(): PersistentVolumeSource;

  getCephfs(): CephFSPersistentVolumeSource | undefined;
  setCephfs(value?: CephFSPersistentVolumeSource): PersistentVolumeSource;
  hasCephfs(): boolean;
  clearCephfs(): PersistentVolumeSource;

  getFc(): FCVolumeSource | undefined;
  setFc(value?: FCVolumeSource): PersistentVolumeSource;
  hasFc(): boolean;
  clearFc(): PersistentVolumeSource;

  getFlocker(): FlockerVolumeSource | undefined;
  setFlocker(value?: FlockerVolumeSource): PersistentVolumeSource;
  hasFlocker(): boolean;
  clearFlocker(): PersistentVolumeSource;

  getFlexvolume(): FlexPersistentVolumeSource | undefined;
  setFlexvolume(value?: FlexPersistentVolumeSource): PersistentVolumeSource;
  hasFlexvolume(): boolean;
  clearFlexvolume(): PersistentVolumeSource;

  getAzurefile(): AzureFilePersistentVolumeSource | undefined;
  setAzurefile(value?: AzureFilePersistentVolumeSource): PersistentVolumeSource;
  hasAzurefile(): boolean;
  clearAzurefile(): PersistentVolumeSource;

  getVspherevolume(): VsphereVirtualDiskVolumeSource | undefined;
  setVspherevolume(value?: VsphereVirtualDiskVolumeSource): PersistentVolumeSource;
  hasVspherevolume(): boolean;
  clearVspherevolume(): PersistentVolumeSource;

  getQuobyte(): QuobyteVolumeSource | undefined;
  setQuobyte(value?: QuobyteVolumeSource): PersistentVolumeSource;
  hasQuobyte(): boolean;
  clearQuobyte(): PersistentVolumeSource;

  getAzuredisk(): AzureDiskVolumeSource | undefined;
  setAzuredisk(value?: AzureDiskVolumeSource): PersistentVolumeSource;
  hasAzuredisk(): boolean;
  clearAzuredisk(): PersistentVolumeSource;

  getPhotonpersistentdisk(): PhotonPersistentDiskVolumeSource | undefined;
  setPhotonpersistentdisk(value?: PhotonPersistentDiskVolumeSource): PersistentVolumeSource;
  hasPhotonpersistentdisk(): boolean;
  clearPhotonpersistentdisk(): PersistentVolumeSource;

  getPortworxvolume(): PortworxVolumeSource | undefined;
  setPortworxvolume(value?: PortworxVolumeSource): PersistentVolumeSource;
  hasPortworxvolume(): boolean;
  clearPortworxvolume(): PersistentVolumeSource;

  getScaleio(): ScaleIOPersistentVolumeSource | undefined;
  setScaleio(value?: ScaleIOPersistentVolumeSource): PersistentVolumeSource;
  hasScaleio(): boolean;
  clearScaleio(): PersistentVolumeSource;

  getLocal(): LocalVolumeSource | undefined;
  setLocal(value?: LocalVolumeSource): PersistentVolumeSource;
  hasLocal(): boolean;
  clearLocal(): PersistentVolumeSource;

  getStorageos(): StorageOSPersistentVolumeSource | undefined;
  setStorageos(value?: StorageOSPersistentVolumeSource): PersistentVolumeSource;
  hasStorageos(): boolean;
  clearStorageos(): PersistentVolumeSource;

  getCsi(): CSIPersistentVolumeSource | undefined;
  setCsi(value?: CSIPersistentVolumeSource): PersistentVolumeSource;
  hasCsi(): boolean;
  clearCsi(): PersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeSource): PersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeSource;
  static deserializeBinaryFromReader(message: PersistentVolumeSource, reader: jspb.BinaryReader): PersistentVolumeSource;
}

export namespace PersistentVolumeSource {
  export type AsObject = {
    gcepersistentdisk?: GCEPersistentDiskVolumeSource.AsObject,
    awselasticblockstore?: AWSElasticBlockStoreVolumeSource.AsObject,
    hostpath?: HostPathVolumeSource.AsObject,
    glusterfs?: GlusterfsPersistentVolumeSource.AsObject,
    nfs?: NFSVolumeSource.AsObject,
    rbd?: RBDPersistentVolumeSource.AsObject,
    iscsi?: ISCSIPersistentVolumeSource.AsObject,
    cinder?: CinderPersistentVolumeSource.AsObject,
    cephfs?: CephFSPersistentVolumeSource.AsObject,
    fc?: FCVolumeSource.AsObject,
    flocker?: FlockerVolumeSource.AsObject,
    flexvolume?: FlexPersistentVolumeSource.AsObject,
    azurefile?: AzureFilePersistentVolumeSource.AsObject,
    vspherevolume?: VsphereVirtualDiskVolumeSource.AsObject,
    quobyte?: QuobyteVolumeSource.AsObject,
    azuredisk?: AzureDiskVolumeSource.AsObject,
    photonpersistentdisk?: PhotonPersistentDiskVolumeSource.AsObject,
    portworxvolume?: PortworxVolumeSource.AsObject,
    scaleio?: ScaleIOPersistentVolumeSource.AsObject,
    local?: LocalVolumeSource.AsObject,
    storageos?: StorageOSPersistentVolumeSource.AsObject,
    csi?: CSIPersistentVolumeSource.AsObject,
  }
}

export class PersistentVolumeSpec extends jspb.Message {
  getCapacityMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearCapacityMap(): PersistentVolumeSpec;

  getPersistentvolumesource(): PersistentVolumeSource | undefined;
  setPersistentvolumesource(value?: PersistentVolumeSource): PersistentVolumeSpec;
  hasPersistentvolumesource(): boolean;
  clearPersistentvolumesource(): PersistentVolumeSpec;

  getAccessmodesList(): Array<string>;
  setAccessmodesList(value: Array<string>): PersistentVolumeSpec;
  clearAccessmodesList(): PersistentVolumeSpec;
  addAccessmodes(value: string, index?: number): PersistentVolumeSpec;

  getClaimref(): ObjectReference | undefined;
  setClaimref(value?: ObjectReference): PersistentVolumeSpec;
  hasClaimref(): boolean;
  clearClaimref(): PersistentVolumeSpec;

  getPersistentvolumereclaimpolicy(): string;
  setPersistentvolumereclaimpolicy(value: string): PersistentVolumeSpec;

  getStorageclassname(): string;
  setStorageclassname(value: string): PersistentVolumeSpec;

  getMountoptionsList(): Array<string>;
  setMountoptionsList(value: Array<string>): PersistentVolumeSpec;
  clearMountoptionsList(): PersistentVolumeSpec;
  addMountoptions(value: string, index?: number): PersistentVolumeSpec;

  getVolumemode(): string;
  setVolumemode(value: string): PersistentVolumeSpec;

  getNodeaffinity(): VolumeNodeAffinity | undefined;
  setNodeaffinity(value?: VolumeNodeAffinity): PersistentVolumeSpec;
  hasNodeaffinity(): boolean;
  clearNodeaffinity(): PersistentVolumeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeSpec): PersistentVolumeSpec.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeSpec;
  static deserializeBinaryFromReader(message: PersistentVolumeSpec, reader: jspb.BinaryReader): PersistentVolumeSpec;
}

export namespace PersistentVolumeSpec {
  export type AsObject = {
    capacityMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    persistentvolumesource?: PersistentVolumeSource.AsObject,
    accessmodesList: Array<string>,
    claimref?: ObjectReference.AsObject,
    persistentvolumereclaimpolicy: string,
    storageclassname: string,
    mountoptionsList: Array<string>,
    volumemode: string,
    nodeaffinity?: VolumeNodeAffinity.AsObject,
  }
}

export class PersistentVolumeStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): PersistentVolumeStatus;

  getMessage(): string;
  setMessage(value: string): PersistentVolumeStatus;

  getReason(): string;
  setReason(value: string): PersistentVolumeStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistentVolumeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PersistentVolumeStatus): PersistentVolumeStatus.AsObject;
  static serializeBinaryToWriter(message: PersistentVolumeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistentVolumeStatus;
  static deserializeBinaryFromReader(message: PersistentVolumeStatus, reader: jspb.BinaryReader): PersistentVolumeStatus;
}

export namespace PersistentVolumeStatus {
  export type AsObject = {
    phase: string,
    message: string,
    reason: string,
  }
}

export class PhotonPersistentDiskVolumeSource extends jspb.Message {
  getPdid(): string;
  setPdid(value: string): PhotonPersistentDiskVolumeSource;

  getFstype(): string;
  setFstype(value: string): PhotonPersistentDiskVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhotonPersistentDiskVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: PhotonPersistentDiskVolumeSource): PhotonPersistentDiskVolumeSource.AsObject;
  static serializeBinaryToWriter(message: PhotonPersistentDiskVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhotonPersistentDiskVolumeSource;
  static deserializeBinaryFromReader(message: PhotonPersistentDiskVolumeSource, reader: jspb.BinaryReader): PhotonPersistentDiskVolumeSource;
}

export namespace PhotonPersistentDiskVolumeSource {
  export type AsObject = {
    pdid: string,
    fstype: string,
  }
}

export class Pod extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Pod;
  hasMetadata(): boolean;
  clearMetadata(): Pod;

  getSpec(): PodSpec | undefined;
  setSpec(value?: PodSpec): Pod;
  hasSpec(): boolean;
  clearSpec(): Pod;

  getStatus(): PodStatus | undefined;
  setStatus(value?: PodStatus): Pod;
  hasStatus(): boolean;
  clearStatus(): Pod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pod.AsObject;
  static toObject(includeInstance: boolean, msg: Pod): Pod.AsObject;
  static serializeBinaryToWriter(message: Pod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pod;
  static deserializeBinaryFromReader(message: Pod, reader: jspb.BinaryReader): Pod;
}

export namespace Pod {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PodSpec.AsObject,
    status?: PodStatus.AsObject,
  }
}

export class PodAffinity extends jspb.Message {
  getRequiredduringschedulingignoredduringexecutionList(): Array<PodAffinityTerm>;
  setRequiredduringschedulingignoredduringexecutionList(value: Array<PodAffinityTerm>): PodAffinity;
  clearRequiredduringschedulingignoredduringexecutionList(): PodAffinity;
  addRequiredduringschedulingignoredduringexecution(value?: PodAffinityTerm, index?: number): PodAffinityTerm;

  getPreferredduringschedulingignoredduringexecutionList(): Array<WeightedPodAffinityTerm>;
  setPreferredduringschedulingignoredduringexecutionList(value: Array<WeightedPodAffinityTerm>): PodAffinity;
  clearPreferredduringschedulingignoredduringexecutionList(): PodAffinity;
  addPreferredduringschedulingignoredduringexecution(value?: WeightedPodAffinityTerm, index?: number): WeightedPodAffinityTerm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodAffinity.AsObject;
  static toObject(includeInstance: boolean, msg: PodAffinity): PodAffinity.AsObject;
  static serializeBinaryToWriter(message: PodAffinity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodAffinity;
  static deserializeBinaryFromReader(message: PodAffinity, reader: jspb.BinaryReader): PodAffinity;
}

export namespace PodAffinity {
  export type AsObject = {
    requiredduringschedulingignoredduringexecutionList: Array<PodAffinityTerm.AsObject>,
    preferredduringschedulingignoredduringexecutionList: Array<WeightedPodAffinityTerm.AsObject>,
  }
}

export class PodAffinityTerm extends jspb.Message {
  getLabelselector(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector | undefined;
  setLabelselector(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector): PodAffinityTerm;
  hasLabelselector(): boolean;
  clearLabelselector(): PodAffinityTerm;

  getNamespacesList(): Array<string>;
  setNamespacesList(value: Array<string>): PodAffinityTerm;
  clearNamespacesList(): PodAffinityTerm;
  addNamespaces(value: string, index?: number): PodAffinityTerm;

  getTopologykey(): string;
  setTopologykey(value: string): PodAffinityTerm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodAffinityTerm.AsObject;
  static toObject(includeInstance: boolean, msg: PodAffinityTerm): PodAffinityTerm.AsObject;
  static serializeBinaryToWriter(message: PodAffinityTerm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodAffinityTerm;
  static deserializeBinaryFromReader(message: PodAffinityTerm, reader: jspb.BinaryReader): PodAffinityTerm;
}

export namespace PodAffinityTerm {
  export type AsObject = {
    labelselector?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector.AsObject,
    namespacesList: Array<string>,
    topologykey: string,
  }
}

export class PodAntiAffinity extends jspb.Message {
  getRequiredduringschedulingignoredduringexecutionList(): Array<PodAffinityTerm>;
  setRequiredduringschedulingignoredduringexecutionList(value: Array<PodAffinityTerm>): PodAntiAffinity;
  clearRequiredduringschedulingignoredduringexecutionList(): PodAntiAffinity;
  addRequiredduringschedulingignoredduringexecution(value?: PodAffinityTerm, index?: number): PodAffinityTerm;

  getPreferredduringschedulingignoredduringexecutionList(): Array<WeightedPodAffinityTerm>;
  setPreferredduringschedulingignoredduringexecutionList(value: Array<WeightedPodAffinityTerm>): PodAntiAffinity;
  clearPreferredduringschedulingignoredduringexecutionList(): PodAntiAffinity;
  addPreferredduringschedulingignoredduringexecution(value?: WeightedPodAffinityTerm, index?: number): WeightedPodAffinityTerm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodAntiAffinity.AsObject;
  static toObject(includeInstance: boolean, msg: PodAntiAffinity): PodAntiAffinity.AsObject;
  static serializeBinaryToWriter(message: PodAntiAffinity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodAntiAffinity;
  static deserializeBinaryFromReader(message: PodAntiAffinity, reader: jspb.BinaryReader): PodAntiAffinity;
}

export namespace PodAntiAffinity {
  export type AsObject = {
    requiredduringschedulingignoredduringexecutionList: Array<PodAffinityTerm.AsObject>,
    preferredduringschedulingignoredduringexecutionList: Array<WeightedPodAffinityTerm.AsObject>,
  }
}

export class PodAttachOptions extends jspb.Message {
  getStdin(): boolean;
  setStdin(value: boolean): PodAttachOptions;

  getStdout(): boolean;
  setStdout(value: boolean): PodAttachOptions;

  getStderr(): boolean;
  setStderr(value: boolean): PodAttachOptions;

  getTty(): boolean;
  setTty(value: boolean): PodAttachOptions;

  getContainer(): string;
  setContainer(value: string): PodAttachOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodAttachOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PodAttachOptions): PodAttachOptions.AsObject;
  static serializeBinaryToWriter(message: PodAttachOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodAttachOptions;
  static deserializeBinaryFromReader(message: PodAttachOptions, reader: jspb.BinaryReader): PodAttachOptions;
}

export namespace PodAttachOptions {
  export type AsObject = {
    stdin: boolean,
    stdout: boolean,
    stderr: boolean,
    tty: boolean,
    container: string,
  }
}

export class PodCondition extends jspb.Message {
  getType(): string;
  setType(value: string): PodCondition;

  getStatus(): string;
  setStatus(value: string): PodCondition;

  getLastprobetime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastprobetime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PodCondition;
  hasLastprobetime(): boolean;
  clearLastprobetime(): PodCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PodCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): PodCondition;

  getReason(): string;
  setReason(value: string): PodCondition;

  getMessage(): string;
  setMessage(value: string): PodCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodCondition.AsObject;
  static toObject(includeInstance: boolean, msg: PodCondition): PodCondition.AsObject;
  static serializeBinaryToWriter(message: PodCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodCondition;
  static deserializeBinaryFromReader(message: PodCondition, reader: jspb.BinaryReader): PodCondition;
}

export namespace PodCondition {
  export type AsObject = {
    type: string,
    status: string,
    lastprobetime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class PodDNSConfig extends jspb.Message {
  getNameserversList(): Array<string>;
  setNameserversList(value: Array<string>): PodDNSConfig;
  clearNameserversList(): PodDNSConfig;
  addNameservers(value: string, index?: number): PodDNSConfig;

  getSearchesList(): Array<string>;
  setSearchesList(value: Array<string>): PodDNSConfig;
  clearSearchesList(): PodDNSConfig;
  addSearches(value: string, index?: number): PodDNSConfig;

  getOptionsList(): Array<PodDNSConfigOption>;
  setOptionsList(value: Array<PodDNSConfigOption>): PodDNSConfig;
  clearOptionsList(): PodDNSConfig;
  addOptions(value?: PodDNSConfigOption, index?: number): PodDNSConfigOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodDNSConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PodDNSConfig): PodDNSConfig.AsObject;
  static serializeBinaryToWriter(message: PodDNSConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodDNSConfig;
  static deserializeBinaryFromReader(message: PodDNSConfig, reader: jspb.BinaryReader): PodDNSConfig;
}

export namespace PodDNSConfig {
  export type AsObject = {
    nameserversList: Array<string>,
    searchesList: Array<string>,
    optionsList: Array<PodDNSConfigOption.AsObject>,
  }
}

export class PodDNSConfigOption extends jspb.Message {
  getName(): string;
  setName(value: string): PodDNSConfigOption;

  getValue(): string;
  setValue(value: string): PodDNSConfigOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodDNSConfigOption.AsObject;
  static toObject(includeInstance: boolean, msg: PodDNSConfigOption): PodDNSConfigOption.AsObject;
  static serializeBinaryToWriter(message: PodDNSConfigOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodDNSConfigOption;
  static deserializeBinaryFromReader(message: PodDNSConfigOption, reader: jspb.BinaryReader): PodDNSConfigOption;
}

export namespace PodDNSConfigOption {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class PodExecOptions extends jspb.Message {
  getStdin(): boolean;
  setStdin(value: boolean): PodExecOptions;

  getStdout(): boolean;
  setStdout(value: boolean): PodExecOptions;

  getStderr(): boolean;
  setStderr(value: boolean): PodExecOptions;

  getTty(): boolean;
  setTty(value: boolean): PodExecOptions;

  getContainer(): string;
  setContainer(value: string): PodExecOptions;

  getCommandList(): Array<string>;
  setCommandList(value: Array<string>): PodExecOptions;
  clearCommandList(): PodExecOptions;
  addCommand(value: string, index?: number): PodExecOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodExecOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PodExecOptions): PodExecOptions.AsObject;
  static serializeBinaryToWriter(message: PodExecOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodExecOptions;
  static deserializeBinaryFromReader(message: PodExecOptions, reader: jspb.BinaryReader): PodExecOptions;
}

export namespace PodExecOptions {
  export type AsObject = {
    stdin: boolean,
    stdout: boolean,
    stderr: boolean,
    tty: boolean,
    container: string,
    commandList: Array<string>,
  }
}

export class PodIP extends jspb.Message {
  getIp(): string;
  setIp(value: string): PodIP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodIP.AsObject;
  static toObject(includeInstance: boolean, msg: PodIP): PodIP.AsObject;
  static serializeBinaryToWriter(message: PodIP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodIP;
  static deserializeBinaryFromReader(message: PodIP, reader: jspb.BinaryReader): PodIP;
}

export namespace PodIP {
  export type AsObject = {
    ip: string,
  }
}

export class PodList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PodList;
  hasMetadata(): boolean;
  clearMetadata(): PodList;

  getItemsList(): Array<Pod>;
  setItemsList(value: Array<Pod>): PodList;
  clearItemsList(): PodList;
  addItems(value?: Pod, index?: number): Pod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodList.AsObject;
  static toObject(includeInstance: boolean, msg: PodList): PodList.AsObject;
  static serializeBinaryToWriter(message: PodList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodList;
  static deserializeBinaryFromReader(message: PodList, reader: jspb.BinaryReader): PodList;
}

export namespace PodList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Pod.AsObject>,
  }
}

export class PodLogOptions extends jspb.Message {
  getContainer(): string;
  setContainer(value: string): PodLogOptions;

  getFollow(): boolean;
  setFollow(value: boolean): PodLogOptions;

  getPrevious(): boolean;
  setPrevious(value: boolean): PodLogOptions;

  getSinceseconds(): number;
  setSinceseconds(value: number): PodLogOptions;

  getSincetime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setSincetime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PodLogOptions;
  hasSincetime(): boolean;
  clearSincetime(): PodLogOptions;

  getTimestamps(): boolean;
  setTimestamps(value: boolean): PodLogOptions;

  getTaillines(): number;
  setTaillines(value: number): PodLogOptions;

  getLimitbytes(): number;
  setLimitbytes(value: number): PodLogOptions;

  getInsecureskiptlsverifybackend(): boolean;
  setInsecureskiptlsverifybackend(value: boolean): PodLogOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodLogOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PodLogOptions): PodLogOptions.AsObject;
  static serializeBinaryToWriter(message: PodLogOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodLogOptions;
  static deserializeBinaryFromReader(message: PodLogOptions, reader: jspb.BinaryReader): PodLogOptions;
}

export namespace PodLogOptions {
  export type AsObject = {
    container: string,
    follow: boolean,
    previous: boolean,
    sinceseconds: number,
    sincetime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    timestamps: boolean,
    taillines: number,
    limitbytes: number,
    insecureskiptlsverifybackend: boolean,
  }
}

export class PodPortForwardOptions extends jspb.Message {
  getPortsList(): Array<number>;
  setPortsList(value: Array<number>): PodPortForwardOptions;
  clearPortsList(): PodPortForwardOptions;
  addPorts(value: number, index?: number): PodPortForwardOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodPortForwardOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PodPortForwardOptions): PodPortForwardOptions.AsObject;
  static serializeBinaryToWriter(message: PodPortForwardOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodPortForwardOptions;
  static deserializeBinaryFromReader(message: PodPortForwardOptions, reader: jspb.BinaryReader): PodPortForwardOptions;
}

export namespace PodPortForwardOptions {
  export type AsObject = {
    portsList: Array<number>,
  }
}

export class PodProxyOptions extends jspb.Message {
  getPath(): string;
  setPath(value: string): PodProxyOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodProxyOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PodProxyOptions): PodProxyOptions.AsObject;
  static serializeBinaryToWriter(message: PodProxyOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodProxyOptions;
  static deserializeBinaryFromReader(message: PodProxyOptions, reader: jspb.BinaryReader): PodProxyOptions;
}

export namespace PodProxyOptions {
  export type AsObject = {
    path: string,
  }
}

export class PodReadinessGate extends jspb.Message {
  getConditiontype(): string;
  setConditiontype(value: string): PodReadinessGate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodReadinessGate.AsObject;
  static toObject(includeInstance: boolean, msg: PodReadinessGate): PodReadinessGate.AsObject;
  static serializeBinaryToWriter(message: PodReadinessGate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodReadinessGate;
  static deserializeBinaryFromReader(message: PodReadinessGate, reader: jspb.BinaryReader): PodReadinessGate;
}

export namespace PodReadinessGate {
  export type AsObject = {
    conditiontype: string,
  }
}

export class PodSecurityContext extends jspb.Message {
  getSelinuxoptions(): SELinuxOptions | undefined;
  setSelinuxoptions(value?: SELinuxOptions): PodSecurityContext;
  hasSelinuxoptions(): boolean;
  clearSelinuxoptions(): PodSecurityContext;

  getWindowsoptions(): WindowsSecurityContextOptions | undefined;
  setWindowsoptions(value?: WindowsSecurityContextOptions): PodSecurityContext;
  hasWindowsoptions(): boolean;
  clearWindowsoptions(): PodSecurityContext;

  getRunasuser(): number;
  setRunasuser(value: number): PodSecurityContext;

  getRunasgroup(): number;
  setRunasgroup(value: number): PodSecurityContext;

  getRunasnonroot(): boolean;
  setRunasnonroot(value: boolean): PodSecurityContext;

  getSupplementalgroupsList(): Array<number>;
  setSupplementalgroupsList(value: Array<number>): PodSecurityContext;
  clearSupplementalgroupsList(): PodSecurityContext;
  addSupplementalgroups(value: number, index?: number): PodSecurityContext;

  getFsgroup(): number;
  setFsgroup(value: number): PodSecurityContext;

  getSysctlsList(): Array<Sysctl>;
  setSysctlsList(value: Array<Sysctl>): PodSecurityContext;
  clearSysctlsList(): PodSecurityContext;
  addSysctls(value?: Sysctl, index?: number): Sysctl;

  getFsgroupchangepolicy(): string;
  setFsgroupchangepolicy(value: string): PodSecurityContext;

  getSeccompprofile(): SeccompProfile | undefined;
  setSeccompprofile(value?: SeccompProfile): PodSecurityContext;
  hasSeccompprofile(): boolean;
  clearSeccompprofile(): PodSecurityContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodSecurityContext.AsObject;
  static toObject(includeInstance: boolean, msg: PodSecurityContext): PodSecurityContext.AsObject;
  static serializeBinaryToWriter(message: PodSecurityContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodSecurityContext;
  static deserializeBinaryFromReader(message: PodSecurityContext, reader: jspb.BinaryReader): PodSecurityContext;
}

export namespace PodSecurityContext {
  export type AsObject = {
    selinuxoptions?: SELinuxOptions.AsObject,
    windowsoptions?: WindowsSecurityContextOptions.AsObject,
    runasuser: number,
    runasgroup: number,
    runasnonroot: boolean,
    supplementalgroupsList: Array<number>,
    fsgroup: number,
    sysctlsList: Array<Sysctl.AsObject>,
    fsgroupchangepolicy: string,
    seccompprofile?: SeccompProfile.AsObject,
  }
}

export class PodSignature extends jspb.Message {
  getPodcontroller(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.OwnerReference | undefined;
  setPodcontroller(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.OwnerReference): PodSignature;
  hasPodcontroller(): boolean;
  clearPodcontroller(): PodSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodSignature.AsObject;
  static toObject(includeInstance: boolean, msg: PodSignature): PodSignature.AsObject;
  static serializeBinaryToWriter(message: PodSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodSignature;
  static deserializeBinaryFromReader(message: PodSignature, reader: jspb.BinaryReader): PodSignature;
}

export namespace PodSignature {
  export type AsObject = {
    podcontroller?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.OwnerReference.AsObject,
  }
}

export class PodSpec extends jspb.Message {
  getVolumesList(): Array<Volume>;
  setVolumesList(value: Array<Volume>): PodSpec;
  clearVolumesList(): PodSpec;
  addVolumes(value?: Volume, index?: number): Volume;

  getInitcontainersList(): Array<Container>;
  setInitcontainersList(value: Array<Container>): PodSpec;
  clearInitcontainersList(): PodSpec;
  addInitcontainers(value?: Container, index?: number): Container;

  getContainersList(): Array<Container>;
  setContainersList(value: Array<Container>): PodSpec;
  clearContainersList(): PodSpec;
  addContainers(value?: Container, index?: number): Container;

  getEphemeralcontainersList(): Array<EphemeralContainer>;
  setEphemeralcontainersList(value: Array<EphemeralContainer>): PodSpec;
  clearEphemeralcontainersList(): PodSpec;
  addEphemeralcontainers(value?: EphemeralContainer, index?: number): EphemeralContainer;

  getRestartpolicy(): string;
  setRestartpolicy(value: string): PodSpec;

  getTerminationgraceperiodseconds(): number;
  setTerminationgraceperiodseconds(value: number): PodSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): PodSpec;

  getDnspolicy(): string;
  setDnspolicy(value: string): PodSpec;

  getNodeselectorMap(): jspb.Map<string, string>;
  clearNodeselectorMap(): PodSpec;

  getServiceaccountname(): string;
  setServiceaccountname(value: string): PodSpec;

  getServiceaccount(): string;
  setServiceaccount(value: string): PodSpec;

  getAutomountserviceaccounttoken(): boolean;
  setAutomountserviceaccounttoken(value: boolean): PodSpec;

  getNodename(): string;
  setNodename(value: string): PodSpec;

  getHostnetwork(): boolean;
  setHostnetwork(value: boolean): PodSpec;

  getHostpid(): boolean;
  setHostpid(value: boolean): PodSpec;

  getHostipc(): boolean;
  setHostipc(value: boolean): PodSpec;

  getShareprocessnamespace(): boolean;
  setShareprocessnamespace(value: boolean): PodSpec;

  getSecuritycontext(): PodSecurityContext | undefined;
  setSecuritycontext(value?: PodSecurityContext): PodSpec;
  hasSecuritycontext(): boolean;
  clearSecuritycontext(): PodSpec;

  getImagepullsecretsList(): Array<LocalObjectReference>;
  setImagepullsecretsList(value: Array<LocalObjectReference>): PodSpec;
  clearImagepullsecretsList(): PodSpec;
  addImagepullsecrets(value?: LocalObjectReference, index?: number): LocalObjectReference;

  getHostname(): string;
  setHostname(value: string): PodSpec;

  getSubdomain(): string;
  setSubdomain(value: string): PodSpec;

  getAffinity(): Affinity | undefined;
  setAffinity(value?: Affinity): PodSpec;
  hasAffinity(): boolean;
  clearAffinity(): PodSpec;

  getSchedulername(): string;
  setSchedulername(value: string): PodSpec;

  getTolerationsList(): Array<Toleration>;
  setTolerationsList(value: Array<Toleration>): PodSpec;
  clearTolerationsList(): PodSpec;
  addTolerations(value?: Toleration, index?: number): Toleration;

  getHostaliasesList(): Array<HostAlias>;
  setHostaliasesList(value: Array<HostAlias>): PodSpec;
  clearHostaliasesList(): PodSpec;
  addHostaliases(value?: HostAlias, index?: number): HostAlias;

  getPriorityclassname(): string;
  setPriorityclassname(value: string): PodSpec;

  getPriority(): number;
  setPriority(value: number): PodSpec;

  getDnsconfig(): PodDNSConfig | undefined;
  setDnsconfig(value?: PodDNSConfig): PodSpec;
  hasDnsconfig(): boolean;
  clearDnsconfig(): PodSpec;

  getReadinessgatesList(): Array<PodReadinessGate>;
  setReadinessgatesList(value: Array<PodReadinessGate>): PodSpec;
  clearReadinessgatesList(): PodSpec;
  addReadinessgates(value?: PodReadinessGate, index?: number): PodReadinessGate;

  getRuntimeclassname(): string;
  setRuntimeclassname(value: string): PodSpec;

  getEnableservicelinks(): boolean;
  setEnableservicelinks(value: boolean): PodSpec;

  getPreemptionpolicy(): string;
  setPreemptionpolicy(value: string): PodSpec;

  getOverheadMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearOverheadMap(): PodSpec;

  getTopologyspreadconstraintsList(): Array<TopologySpreadConstraint>;
  setTopologyspreadconstraintsList(value: Array<TopologySpreadConstraint>): PodSpec;
  clearTopologyspreadconstraintsList(): PodSpec;
  addTopologyspreadconstraints(value?: TopologySpreadConstraint, index?: number): TopologySpreadConstraint;

  getSethostnameasfqdn(): boolean;
  setSethostnameasfqdn(value: boolean): PodSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PodSpec): PodSpec.AsObject;
  static serializeBinaryToWriter(message: PodSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodSpec;
  static deserializeBinaryFromReader(message: PodSpec, reader: jspb.BinaryReader): PodSpec;
}

export namespace PodSpec {
  export type AsObject = {
    volumesList: Array<Volume.AsObject>,
    initcontainersList: Array<Container.AsObject>,
    containersList: Array<Container.AsObject>,
    ephemeralcontainersList: Array<EphemeralContainer.AsObject>,
    restartpolicy: string,
    terminationgraceperiodseconds: number,
    activedeadlineseconds: number,
    dnspolicy: string,
    nodeselectorMap: Array<[string, string]>,
    serviceaccountname: string,
    serviceaccount: string,
    automountserviceaccounttoken: boolean,
    nodename: string,
    hostnetwork: boolean,
    hostpid: boolean,
    hostipc: boolean,
    shareprocessnamespace: boolean,
    securitycontext?: PodSecurityContext.AsObject,
    imagepullsecretsList: Array<LocalObjectReference.AsObject>,
    hostname: string,
    subdomain: string,
    affinity?: Affinity.AsObject,
    schedulername: string,
    tolerationsList: Array<Toleration.AsObject>,
    hostaliasesList: Array<HostAlias.AsObject>,
    priorityclassname: string,
    priority: number,
    dnsconfig?: PodDNSConfig.AsObject,
    readinessgatesList: Array<PodReadinessGate.AsObject>,
    runtimeclassname: string,
    enableservicelinks: boolean,
    preemptionpolicy: string,
    overheadMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    topologyspreadconstraintsList: Array<TopologySpreadConstraint.AsObject>,
    sethostnameasfqdn: boolean,
  }
}

export class PodStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): PodStatus;

  getConditionsList(): Array<PodCondition>;
  setConditionsList(value: Array<PodCondition>): PodStatus;
  clearConditionsList(): PodStatus;
  addConditions(value?: PodCondition, index?: number): PodCondition;

  getMessage(): string;
  setMessage(value: string): PodStatus;

  getReason(): string;
  setReason(value: string): PodStatus;

  getNominatednodename(): string;
  setNominatednodename(value: string): PodStatus;

  getHostip(): string;
  setHostip(value: string): PodStatus;

  getPodip(): string;
  setPodip(value: string): PodStatus;

  getPodipsList(): Array<PodIP>;
  setPodipsList(value: Array<PodIP>): PodStatus;
  clearPodipsList(): PodStatus;
  addPodips(value?: PodIP, index?: number): PodIP;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PodStatus;
  hasStarttime(): boolean;
  clearStarttime(): PodStatus;

  getInitcontainerstatusesList(): Array<ContainerStatus>;
  setInitcontainerstatusesList(value: Array<ContainerStatus>): PodStatus;
  clearInitcontainerstatusesList(): PodStatus;
  addInitcontainerstatuses(value?: ContainerStatus, index?: number): ContainerStatus;

  getContainerstatusesList(): Array<ContainerStatus>;
  setContainerstatusesList(value: Array<ContainerStatus>): PodStatus;
  clearContainerstatusesList(): PodStatus;
  addContainerstatuses(value?: ContainerStatus, index?: number): ContainerStatus;

  getQosclass(): string;
  setQosclass(value: string): PodStatus;

  getEphemeralcontainerstatusesList(): Array<ContainerStatus>;
  setEphemeralcontainerstatusesList(value: Array<ContainerStatus>): PodStatus;
  clearEphemeralcontainerstatusesList(): PodStatus;
  addEphemeralcontainerstatuses(value?: ContainerStatus, index?: number): ContainerStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PodStatus): PodStatus.AsObject;
  static serializeBinaryToWriter(message: PodStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodStatus;
  static deserializeBinaryFromReader(message: PodStatus, reader: jspb.BinaryReader): PodStatus;
}

export namespace PodStatus {
  export type AsObject = {
    phase: string,
    conditionsList: Array<PodCondition.AsObject>,
    message: string,
    reason: string,
    nominatednodename: string,
    hostip: string,
    podip: string,
    podipsList: Array<PodIP.AsObject>,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    initcontainerstatusesList: Array<ContainerStatus.AsObject>,
    containerstatusesList: Array<ContainerStatus.AsObject>,
    qosclass: string,
    ephemeralcontainerstatusesList: Array<ContainerStatus.AsObject>,
  }
}

export class PodStatusResult extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PodStatusResult;
  hasMetadata(): boolean;
  clearMetadata(): PodStatusResult;

  getStatus(): PodStatus | undefined;
  setStatus(value?: PodStatus): PodStatusResult;
  hasStatus(): boolean;
  clearStatus(): PodStatusResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodStatusResult.AsObject;
  static toObject(includeInstance: boolean, msg: PodStatusResult): PodStatusResult.AsObject;
  static serializeBinaryToWriter(message: PodStatusResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodStatusResult;
  static deserializeBinaryFromReader(message: PodStatusResult, reader: jspb.BinaryReader): PodStatusResult;
}

export namespace PodStatusResult {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    status?: PodStatus.AsObject,
  }
}

export class PodTemplate extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PodTemplate;
  hasMetadata(): boolean;
  clearMetadata(): PodTemplate;

  getTemplate(): PodTemplateSpec | undefined;
  setTemplate(value?: PodTemplateSpec): PodTemplate;
  hasTemplate(): boolean;
  clearTemplate(): PodTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: PodTemplate): PodTemplate.AsObject;
  static serializeBinaryToWriter(message: PodTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodTemplate;
  static deserializeBinaryFromReader(message: PodTemplate, reader: jspb.BinaryReader): PodTemplate;
}

export namespace PodTemplate {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    template?: PodTemplateSpec.AsObject,
  }
}

export class PodTemplateList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PodTemplateList;
  hasMetadata(): boolean;
  clearMetadata(): PodTemplateList;

  getItemsList(): Array<PodTemplate>;
  setItemsList(value: Array<PodTemplate>): PodTemplateList;
  clearItemsList(): PodTemplateList;
  addItems(value?: PodTemplate, index?: number): PodTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodTemplateList.AsObject;
  static toObject(includeInstance: boolean, msg: PodTemplateList): PodTemplateList.AsObject;
  static serializeBinaryToWriter(message: PodTemplateList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodTemplateList;
  static deserializeBinaryFromReader(message: PodTemplateList, reader: jspb.BinaryReader): PodTemplateList;
}

export namespace PodTemplateList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<PodTemplate.AsObject>,
  }
}

export class PodTemplateSpec extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PodTemplateSpec;
  hasMetadata(): boolean;
  clearMetadata(): PodTemplateSpec;

  getSpec(): PodSpec | undefined;
  setSpec(value?: PodSpec): PodTemplateSpec;
  hasSpec(): boolean;
  clearSpec(): PodTemplateSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodTemplateSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PodTemplateSpec): PodTemplateSpec.AsObject;
  static serializeBinaryToWriter(message: PodTemplateSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodTemplateSpec;
  static deserializeBinaryFromReader(message: PodTemplateSpec, reader: jspb.BinaryReader): PodTemplateSpec;
}

export namespace PodTemplateSpec {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PodSpec.AsObject,
  }
}

export class PortStatus extends jspb.Message {
  getPort(): number;
  setPort(value: number): PortStatus;

  getProtocol(): string;
  setProtocol(value: string): PortStatus;

  getError(): string;
  setError(value: string): PortStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PortStatus): PortStatus.AsObject;
  static serializeBinaryToWriter(message: PortStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortStatus;
  static deserializeBinaryFromReader(message: PortStatus, reader: jspb.BinaryReader): PortStatus;
}

export namespace PortStatus {
  export type AsObject = {
    port: number,
    protocol: string,
    error: string,
  }
}

export class PortworxVolumeSource extends jspb.Message {
  getVolumeid(): string;
  setVolumeid(value: string): PortworxVolumeSource;

  getFstype(): string;
  setFstype(value: string): PortworxVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): PortworxVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortworxVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: PortworxVolumeSource): PortworxVolumeSource.AsObject;
  static serializeBinaryToWriter(message: PortworxVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortworxVolumeSource;
  static deserializeBinaryFromReader(message: PortworxVolumeSource, reader: jspb.BinaryReader): PortworxVolumeSource;
}

export namespace PortworxVolumeSource {
  export type AsObject = {
    volumeid: string,
    fstype: string,
    readonly: boolean,
  }
}

export class Preconditions extends jspb.Message {
  getUid(): string;
  setUid(value: string): Preconditions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Preconditions.AsObject;
  static toObject(includeInstance: boolean, msg: Preconditions): Preconditions.AsObject;
  static serializeBinaryToWriter(message: Preconditions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Preconditions;
  static deserializeBinaryFromReader(message: Preconditions, reader: jspb.BinaryReader): Preconditions;
}

export namespace Preconditions {
  export type AsObject = {
    uid: string,
  }
}

export class PreferAvoidPodsEntry extends jspb.Message {
  getPodsignature(): PodSignature | undefined;
  setPodsignature(value?: PodSignature): PreferAvoidPodsEntry;
  hasPodsignature(): boolean;
  clearPodsignature(): PreferAvoidPodsEntry;

  getEvictiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEvictiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PreferAvoidPodsEntry;
  hasEvictiontime(): boolean;
  clearEvictiontime(): PreferAvoidPodsEntry;

  getReason(): string;
  setReason(value: string): PreferAvoidPodsEntry;

  getMessage(): string;
  setMessage(value: string): PreferAvoidPodsEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreferAvoidPodsEntry.AsObject;
  static toObject(includeInstance: boolean, msg: PreferAvoidPodsEntry): PreferAvoidPodsEntry.AsObject;
  static serializeBinaryToWriter(message: PreferAvoidPodsEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreferAvoidPodsEntry;
  static deserializeBinaryFromReader(message: PreferAvoidPodsEntry, reader: jspb.BinaryReader): PreferAvoidPodsEntry;
}

export namespace PreferAvoidPodsEntry {
  export type AsObject = {
    podsignature?: PodSignature.AsObject,
    evictiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class PreferredSchedulingTerm extends jspb.Message {
  getWeight(): number;
  setWeight(value: number): PreferredSchedulingTerm;

  getPreference(): NodeSelectorTerm | undefined;
  setPreference(value?: NodeSelectorTerm): PreferredSchedulingTerm;
  hasPreference(): boolean;
  clearPreference(): PreferredSchedulingTerm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreferredSchedulingTerm.AsObject;
  static toObject(includeInstance: boolean, msg: PreferredSchedulingTerm): PreferredSchedulingTerm.AsObject;
  static serializeBinaryToWriter(message: PreferredSchedulingTerm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreferredSchedulingTerm;
  static deserializeBinaryFromReader(message: PreferredSchedulingTerm, reader: jspb.BinaryReader): PreferredSchedulingTerm;
}

export namespace PreferredSchedulingTerm {
  export type AsObject = {
    weight: number,
    preference?: NodeSelectorTerm.AsObject,
  }
}

export class Probe extends jspb.Message {
  getHandler(): Handler | undefined;
  setHandler(value?: Handler): Probe;
  hasHandler(): boolean;
  clearHandler(): Probe;

  getInitialdelayseconds(): number;
  setInitialdelayseconds(value: number): Probe;

  getTimeoutseconds(): number;
  setTimeoutseconds(value: number): Probe;

  getPeriodseconds(): number;
  setPeriodseconds(value: number): Probe;

  getSuccessthreshold(): number;
  setSuccessthreshold(value: number): Probe;

  getFailurethreshold(): number;
  setFailurethreshold(value: number): Probe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Probe.AsObject;
  static toObject(includeInstance: boolean, msg: Probe): Probe.AsObject;
  static serializeBinaryToWriter(message: Probe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Probe;
  static deserializeBinaryFromReader(message: Probe, reader: jspb.BinaryReader): Probe;
}

export namespace Probe {
  export type AsObject = {
    handler?: Handler.AsObject,
    initialdelayseconds: number,
    timeoutseconds: number,
    periodseconds: number,
    successthreshold: number,
    failurethreshold: number,
  }
}

export class ProjectedVolumeSource extends jspb.Message {
  getSourcesList(): Array<VolumeProjection>;
  setSourcesList(value: Array<VolumeProjection>): ProjectedVolumeSource;
  clearSourcesList(): ProjectedVolumeSource;
  addSources(value?: VolumeProjection, index?: number): VolumeProjection;

  getDefaultmode(): number;
  setDefaultmode(value: number): ProjectedVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectedVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectedVolumeSource): ProjectedVolumeSource.AsObject;
  static serializeBinaryToWriter(message: ProjectedVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectedVolumeSource;
  static deserializeBinaryFromReader(message: ProjectedVolumeSource, reader: jspb.BinaryReader): ProjectedVolumeSource;
}

export namespace ProjectedVolumeSource {
  export type AsObject = {
    sourcesList: Array<VolumeProjection.AsObject>,
    defaultmode: number,
  }
}

export class QuobyteVolumeSource extends jspb.Message {
  getRegistry(): string;
  setRegistry(value: string): QuobyteVolumeSource;

  getVolume(): string;
  setVolume(value: string): QuobyteVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): QuobyteVolumeSource;

  getUser(): string;
  setUser(value: string): QuobyteVolumeSource;

  getGroup(): string;
  setGroup(value: string): QuobyteVolumeSource;

  getTenant(): string;
  setTenant(value: string): QuobyteVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuobyteVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: QuobyteVolumeSource): QuobyteVolumeSource.AsObject;
  static serializeBinaryToWriter(message: QuobyteVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuobyteVolumeSource;
  static deserializeBinaryFromReader(message: QuobyteVolumeSource, reader: jspb.BinaryReader): QuobyteVolumeSource;
}

export namespace QuobyteVolumeSource {
  export type AsObject = {
    registry: string,
    volume: string,
    readonly: boolean,
    user: string,
    group: string,
    tenant: string,
  }
}

export class RBDPersistentVolumeSource extends jspb.Message {
  getMonitorsList(): Array<string>;
  setMonitorsList(value: Array<string>): RBDPersistentVolumeSource;
  clearMonitorsList(): RBDPersistentVolumeSource;
  addMonitors(value: string, index?: number): RBDPersistentVolumeSource;

  getImage(): string;
  setImage(value: string): RBDPersistentVolumeSource;

  getFstype(): string;
  setFstype(value: string): RBDPersistentVolumeSource;

  getPool(): string;
  setPool(value: string): RBDPersistentVolumeSource;

  getUser(): string;
  setUser(value: string): RBDPersistentVolumeSource;

  getKeyring(): string;
  setKeyring(value: string): RBDPersistentVolumeSource;

  getSecretref(): SecretReference | undefined;
  setSecretref(value?: SecretReference): RBDPersistentVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): RBDPersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): RBDPersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RBDPersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: RBDPersistentVolumeSource): RBDPersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: RBDPersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RBDPersistentVolumeSource;
  static deserializeBinaryFromReader(message: RBDPersistentVolumeSource, reader: jspb.BinaryReader): RBDPersistentVolumeSource;
}

export namespace RBDPersistentVolumeSource {
  export type AsObject = {
    monitorsList: Array<string>,
    image: string,
    fstype: string,
    pool: string,
    user: string,
    keyring: string,
    secretref?: SecretReference.AsObject,
    readonly: boolean,
  }
}

export class RBDVolumeSource extends jspb.Message {
  getMonitorsList(): Array<string>;
  setMonitorsList(value: Array<string>): RBDVolumeSource;
  clearMonitorsList(): RBDVolumeSource;
  addMonitors(value: string, index?: number): RBDVolumeSource;

  getImage(): string;
  setImage(value: string): RBDVolumeSource;

  getFstype(): string;
  setFstype(value: string): RBDVolumeSource;

  getPool(): string;
  setPool(value: string): RBDVolumeSource;

  getUser(): string;
  setUser(value: string): RBDVolumeSource;

  getKeyring(): string;
  setKeyring(value: string): RBDVolumeSource;

  getSecretref(): LocalObjectReference | undefined;
  setSecretref(value?: LocalObjectReference): RBDVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): RBDVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): RBDVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RBDVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: RBDVolumeSource): RBDVolumeSource.AsObject;
  static serializeBinaryToWriter(message: RBDVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RBDVolumeSource;
  static deserializeBinaryFromReader(message: RBDVolumeSource, reader: jspb.BinaryReader): RBDVolumeSource;
}

export namespace RBDVolumeSource {
  export type AsObject = {
    monitorsList: Array<string>,
    image: string,
    fstype: string,
    pool: string,
    user: string,
    keyring: string,
    secretref?: LocalObjectReference.AsObject,
    readonly: boolean,
  }
}

export class RangeAllocation extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): RangeAllocation;
  hasMetadata(): boolean;
  clearMetadata(): RangeAllocation;

  getRange(): string;
  setRange(value: string): RangeAllocation;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): RangeAllocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeAllocation.AsObject;
  static toObject(includeInstance: boolean, msg: RangeAllocation): RangeAllocation.AsObject;
  static serializeBinaryToWriter(message: RangeAllocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeAllocation;
  static deserializeBinaryFromReader(message: RangeAllocation, reader: jspb.BinaryReader): RangeAllocation;
}

export namespace RangeAllocation {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    range: string,
    data: Uint8Array | string,
  }
}

export class ReplicationController extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ReplicationController;
  hasMetadata(): boolean;
  clearMetadata(): ReplicationController;

  getSpec(): ReplicationControllerSpec | undefined;
  setSpec(value?: ReplicationControllerSpec): ReplicationController;
  hasSpec(): boolean;
  clearSpec(): ReplicationController;

  getStatus(): ReplicationControllerStatus | undefined;
  setStatus(value?: ReplicationControllerStatus): ReplicationController;
  hasStatus(): boolean;
  clearStatus(): ReplicationController;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicationController.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicationController): ReplicationController.AsObject;
  static serializeBinaryToWriter(message: ReplicationController, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicationController;
  static deserializeBinaryFromReader(message: ReplicationController, reader: jspb.BinaryReader): ReplicationController;
}

export namespace ReplicationController {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ReplicationControllerSpec.AsObject,
    status?: ReplicationControllerStatus.AsObject,
  }
}

export class ReplicationControllerCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ReplicationControllerCondition;

  getStatus(): string;
  setStatus(value: string): ReplicationControllerCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReplicationControllerCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ReplicationControllerCondition;

  getReason(): string;
  setReason(value: string): ReplicationControllerCondition;

  getMessage(): string;
  setMessage(value: string): ReplicationControllerCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicationControllerCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicationControllerCondition): ReplicationControllerCondition.AsObject;
  static serializeBinaryToWriter(message: ReplicationControllerCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicationControllerCondition;
  static deserializeBinaryFromReader(message: ReplicationControllerCondition, reader: jspb.BinaryReader): ReplicationControllerCondition;
}

export namespace ReplicationControllerCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ReplicationControllerList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ReplicationControllerList;
  hasMetadata(): boolean;
  clearMetadata(): ReplicationControllerList;

  getItemsList(): Array<ReplicationController>;
  setItemsList(value: Array<ReplicationController>): ReplicationControllerList;
  clearItemsList(): ReplicationControllerList;
  addItems(value?: ReplicationController, index?: number): ReplicationController;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicationControllerList.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicationControllerList): ReplicationControllerList.AsObject;
  static serializeBinaryToWriter(message: ReplicationControllerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicationControllerList;
  static deserializeBinaryFromReader(message: ReplicationControllerList, reader: jspb.BinaryReader): ReplicationControllerList;
}

export namespace ReplicationControllerList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ReplicationController.AsObject>,
  }
}

export class ReplicationControllerSpec extends jspb.Message {
  getReplicas(): number;
  setReplicas(value: number): ReplicationControllerSpec;

  getMinreadyseconds(): number;
  setMinreadyseconds(value: number): ReplicationControllerSpec;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ReplicationControllerSpec;

  getTemplate(): PodTemplateSpec | undefined;
  setTemplate(value?: PodTemplateSpec): ReplicationControllerSpec;
  hasTemplate(): boolean;
  clearTemplate(): ReplicationControllerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicationControllerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicationControllerSpec): ReplicationControllerSpec.AsObject;
  static serializeBinaryToWriter(message: ReplicationControllerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicationControllerSpec;
  static deserializeBinaryFromReader(message: ReplicationControllerSpec, reader: jspb.BinaryReader): ReplicationControllerSpec;
}

export namespace ReplicationControllerSpec {
  export type AsObject = {
    replicas: number,
    minreadyseconds: number,
    selectorMap: Array<[string, string]>,
    template?: PodTemplateSpec.AsObject,
  }
}

export class ReplicationControllerStatus extends jspb.Message {
  getReplicas(): number;
  setReplicas(value: number): ReplicationControllerStatus;

  getFullylabeledreplicas(): number;
  setFullylabeledreplicas(value: number): ReplicationControllerStatus;

  getReadyreplicas(): number;
  setReadyreplicas(value: number): ReplicationControllerStatus;

  getAvailablereplicas(): number;
  setAvailablereplicas(value: number): ReplicationControllerStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ReplicationControllerStatus;

  getConditionsList(): Array<ReplicationControllerCondition>;
  setConditionsList(value: Array<ReplicationControllerCondition>): ReplicationControllerStatus;
  clearConditionsList(): ReplicationControllerStatus;
  addConditions(value?: ReplicationControllerCondition, index?: number): ReplicationControllerCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicationControllerStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicationControllerStatus): ReplicationControllerStatus.AsObject;
  static serializeBinaryToWriter(message: ReplicationControllerStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicationControllerStatus;
  static deserializeBinaryFromReader(message: ReplicationControllerStatus, reader: jspb.BinaryReader): ReplicationControllerStatus;
}

export namespace ReplicationControllerStatus {
  export type AsObject = {
    replicas: number,
    fullylabeledreplicas: number,
    readyreplicas: number,
    availablereplicas: number,
    observedgeneration: number,
    conditionsList: Array<ReplicationControllerCondition.AsObject>,
  }
}

export class ResourceFieldSelector extends jspb.Message {
  getContainername(): string;
  setContainername(value: string): ResourceFieldSelector;

  getResource(): string;
  setResource(value: string): ResourceFieldSelector;

  getDivisor(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setDivisor(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): ResourceFieldSelector;
  hasDivisor(): boolean;
  clearDivisor(): ResourceFieldSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceFieldSelector.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceFieldSelector): ResourceFieldSelector.AsObject;
  static serializeBinaryToWriter(message: ResourceFieldSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceFieldSelector;
  static deserializeBinaryFromReader(message: ResourceFieldSelector, reader: jspb.BinaryReader): ResourceFieldSelector;
}

export namespace ResourceFieldSelector {
  export type AsObject = {
    containername: string,
    resource: string,
    divisor?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class ResourceQuota extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ResourceQuota;
  hasMetadata(): boolean;
  clearMetadata(): ResourceQuota;

  getSpec(): ResourceQuotaSpec | undefined;
  setSpec(value?: ResourceQuotaSpec): ResourceQuota;
  hasSpec(): boolean;
  clearSpec(): ResourceQuota;

  getStatus(): ResourceQuotaStatus | undefined;
  setStatus(value?: ResourceQuotaStatus): ResourceQuota;
  hasStatus(): boolean;
  clearStatus(): ResourceQuota;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceQuota.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceQuota): ResourceQuota.AsObject;
  static serializeBinaryToWriter(message: ResourceQuota, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceQuota;
  static deserializeBinaryFromReader(message: ResourceQuota, reader: jspb.BinaryReader): ResourceQuota;
}

export namespace ResourceQuota {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ResourceQuotaSpec.AsObject,
    status?: ResourceQuotaStatus.AsObject,
  }
}

export class ResourceQuotaList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ResourceQuotaList;
  hasMetadata(): boolean;
  clearMetadata(): ResourceQuotaList;

  getItemsList(): Array<ResourceQuota>;
  setItemsList(value: Array<ResourceQuota>): ResourceQuotaList;
  clearItemsList(): ResourceQuotaList;
  addItems(value?: ResourceQuota, index?: number): ResourceQuota;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceQuotaList.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceQuotaList): ResourceQuotaList.AsObject;
  static serializeBinaryToWriter(message: ResourceQuotaList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceQuotaList;
  static deserializeBinaryFromReader(message: ResourceQuotaList, reader: jspb.BinaryReader): ResourceQuotaList;
}

export namespace ResourceQuotaList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ResourceQuota.AsObject>,
  }
}

export class ResourceQuotaSpec extends jspb.Message {
  getHardMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearHardMap(): ResourceQuotaSpec;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): ResourceQuotaSpec;
  clearScopesList(): ResourceQuotaSpec;
  addScopes(value: string, index?: number): ResourceQuotaSpec;

  getScopeselector(): ScopeSelector | undefined;
  setScopeselector(value?: ScopeSelector): ResourceQuotaSpec;
  hasScopeselector(): boolean;
  clearScopeselector(): ResourceQuotaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceQuotaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceQuotaSpec): ResourceQuotaSpec.AsObject;
  static serializeBinaryToWriter(message: ResourceQuotaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceQuotaSpec;
  static deserializeBinaryFromReader(message: ResourceQuotaSpec, reader: jspb.BinaryReader): ResourceQuotaSpec;
}

export namespace ResourceQuotaSpec {
  export type AsObject = {
    hardMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    scopesList: Array<string>,
    scopeselector?: ScopeSelector.AsObject,
  }
}

export class ResourceQuotaStatus extends jspb.Message {
  getHardMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearHardMap(): ResourceQuotaStatus;

  getUsedMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearUsedMap(): ResourceQuotaStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceQuotaStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceQuotaStatus): ResourceQuotaStatus.AsObject;
  static serializeBinaryToWriter(message: ResourceQuotaStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceQuotaStatus;
  static deserializeBinaryFromReader(message: ResourceQuotaStatus, reader: jspb.BinaryReader): ResourceQuotaStatus;
}

export namespace ResourceQuotaStatus {
  export type AsObject = {
    hardMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    usedMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
  }
}

export class ResourceRequirements extends jspb.Message {
  getLimitsMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearLimitsMap(): ResourceRequirements;

  getRequestsMap(): jspb.Map<string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity>;
  clearRequestsMap(): ResourceRequirements;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRequirements.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRequirements): ResourceRequirements.AsObject;
  static serializeBinaryToWriter(message: ResourceRequirements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRequirements;
  static deserializeBinaryFromReader(message: ResourceRequirements, reader: jspb.BinaryReader): ResourceRequirements;
}

export namespace ResourceRequirements {
  export type AsObject = {
    limitsMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
    requestsMap: Array<[string, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject]>,
  }
}

export class SELinuxOptions extends jspb.Message {
  getUser(): string;
  setUser(value: string): SELinuxOptions;

  getRole(): string;
  setRole(value: string): SELinuxOptions;

  getType(): string;
  setType(value: string): SELinuxOptions;

  getLevel(): string;
  setLevel(value: string): SELinuxOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SELinuxOptions.AsObject;
  static toObject(includeInstance: boolean, msg: SELinuxOptions): SELinuxOptions.AsObject;
  static serializeBinaryToWriter(message: SELinuxOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SELinuxOptions;
  static deserializeBinaryFromReader(message: SELinuxOptions, reader: jspb.BinaryReader): SELinuxOptions;
}

export namespace SELinuxOptions {
  export type AsObject = {
    user: string,
    role: string,
    type: string,
    level: string,
  }
}

export class ScaleIOPersistentVolumeSource extends jspb.Message {
  getGateway(): string;
  setGateway(value: string): ScaleIOPersistentVolumeSource;

  getSystem(): string;
  setSystem(value: string): ScaleIOPersistentVolumeSource;

  getSecretref(): SecretReference | undefined;
  setSecretref(value?: SecretReference): ScaleIOPersistentVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): ScaleIOPersistentVolumeSource;

  getSslenabled(): boolean;
  setSslenabled(value: boolean): ScaleIOPersistentVolumeSource;

  getProtectiondomain(): string;
  setProtectiondomain(value: string): ScaleIOPersistentVolumeSource;

  getStoragepool(): string;
  setStoragepool(value: string): ScaleIOPersistentVolumeSource;

  getStoragemode(): string;
  setStoragemode(value: string): ScaleIOPersistentVolumeSource;

  getVolumename(): string;
  setVolumename(value: string): ScaleIOPersistentVolumeSource;

  getFstype(): string;
  setFstype(value: string): ScaleIOPersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): ScaleIOPersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScaleIOPersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: ScaleIOPersistentVolumeSource): ScaleIOPersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: ScaleIOPersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScaleIOPersistentVolumeSource;
  static deserializeBinaryFromReader(message: ScaleIOPersistentVolumeSource, reader: jspb.BinaryReader): ScaleIOPersistentVolumeSource;
}

export namespace ScaleIOPersistentVolumeSource {
  export type AsObject = {
    gateway: string,
    system: string,
    secretref?: SecretReference.AsObject,
    sslenabled: boolean,
    protectiondomain: string,
    storagepool: string,
    storagemode: string,
    volumename: string,
    fstype: string,
    readonly: boolean,
  }
}

export class ScaleIOVolumeSource extends jspb.Message {
  getGateway(): string;
  setGateway(value: string): ScaleIOVolumeSource;

  getSystem(): string;
  setSystem(value: string): ScaleIOVolumeSource;

  getSecretref(): LocalObjectReference | undefined;
  setSecretref(value?: LocalObjectReference): ScaleIOVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): ScaleIOVolumeSource;

  getSslenabled(): boolean;
  setSslenabled(value: boolean): ScaleIOVolumeSource;

  getProtectiondomain(): string;
  setProtectiondomain(value: string): ScaleIOVolumeSource;

  getStoragepool(): string;
  setStoragepool(value: string): ScaleIOVolumeSource;

  getStoragemode(): string;
  setStoragemode(value: string): ScaleIOVolumeSource;

  getVolumename(): string;
  setVolumename(value: string): ScaleIOVolumeSource;

  getFstype(): string;
  setFstype(value: string): ScaleIOVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): ScaleIOVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScaleIOVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: ScaleIOVolumeSource): ScaleIOVolumeSource.AsObject;
  static serializeBinaryToWriter(message: ScaleIOVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScaleIOVolumeSource;
  static deserializeBinaryFromReader(message: ScaleIOVolumeSource, reader: jspb.BinaryReader): ScaleIOVolumeSource;
}

export namespace ScaleIOVolumeSource {
  export type AsObject = {
    gateway: string,
    system: string,
    secretref?: LocalObjectReference.AsObject,
    sslenabled: boolean,
    protectiondomain: string,
    storagepool: string,
    storagemode: string,
    volumename: string,
    fstype: string,
    readonly: boolean,
  }
}

export class ScopeSelector extends jspb.Message {
  getMatchexpressionsList(): Array<ScopedResourceSelectorRequirement>;
  setMatchexpressionsList(value: Array<ScopedResourceSelectorRequirement>): ScopeSelector;
  clearMatchexpressionsList(): ScopeSelector;
  addMatchexpressions(value?: ScopedResourceSelectorRequirement, index?: number): ScopedResourceSelectorRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopeSelector.AsObject;
  static toObject(includeInstance: boolean, msg: ScopeSelector): ScopeSelector.AsObject;
  static serializeBinaryToWriter(message: ScopeSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopeSelector;
  static deserializeBinaryFromReader(message: ScopeSelector, reader: jspb.BinaryReader): ScopeSelector;
}

export namespace ScopeSelector {
  export type AsObject = {
    matchexpressionsList: Array<ScopedResourceSelectorRequirement.AsObject>,
  }
}

export class ScopedResourceSelectorRequirement extends jspb.Message {
  getScopename(): string;
  setScopename(value: string): ScopedResourceSelectorRequirement;

  getOperator(): string;
  setOperator(value: string): ScopedResourceSelectorRequirement;

  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): ScopedResourceSelectorRequirement;
  clearValuesList(): ScopedResourceSelectorRequirement;
  addValues(value: string, index?: number): ScopedResourceSelectorRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopedResourceSelectorRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: ScopedResourceSelectorRequirement): ScopedResourceSelectorRequirement.AsObject;
  static serializeBinaryToWriter(message: ScopedResourceSelectorRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopedResourceSelectorRequirement;
  static deserializeBinaryFromReader(message: ScopedResourceSelectorRequirement, reader: jspb.BinaryReader): ScopedResourceSelectorRequirement;
}

export namespace ScopedResourceSelectorRequirement {
  export type AsObject = {
    scopename: string,
    operator: string,
    valuesList: Array<string>,
  }
}

export class SeccompProfile extends jspb.Message {
  getType(): string;
  setType(value: string): SeccompProfile;

  getLocalhostprofile(): string;
  setLocalhostprofile(value: string): SeccompProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeccompProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SeccompProfile): SeccompProfile.AsObject;
  static serializeBinaryToWriter(message: SeccompProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeccompProfile;
  static deserializeBinaryFromReader(message: SeccompProfile, reader: jspb.BinaryReader): SeccompProfile;
}

export namespace SeccompProfile {
  export type AsObject = {
    type: string,
    localhostprofile: string,
  }
}

export class Secret extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Secret;
  hasMetadata(): boolean;
  clearMetadata(): Secret;

  getImmutable(): boolean;
  setImmutable(value: boolean): Secret;

  getDataMap(): jspb.Map<string, Uint8Array | string>;
  clearDataMap(): Secret;

  getStringdataMap(): jspb.Map<string, string>;
  clearStringdataMap(): Secret;

  getType(): string;
  setType(value: string): Secret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    immutable: boolean,
    dataMap: Array<[string, Uint8Array | string]>,
    stringdataMap: Array<[string, string]>,
    type: string,
  }
}

export class SecretEnvSource extends jspb.Message {
  getLocalobjectreference(): LocalObjectReference | undefined;
  setLocalobjectreference(value?: LocalObjectReference): SecretEnvSource;
  hasLocalobjectreference(): boolean;
  clearLocalobjectreference(): SecretEnvSource;

  getOptional(): boolean;
  setOptional(value: boolean): SecretEnvSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretEnvSource.AsObject;
  static toObject(includeInstance: boolean, msg: SecretEnvSource): SecretEnvSource.AsObject;
  static serializeBinaryToWriter(message: SecretEnvSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretEnvSource;
  static deserializeBinaryFromReader(message: SecretEnvSource, reader: jspb.BinaryReader): SecretEnvSource;
}

export namespace SecretEnvSource {
  export type AsObject = {
    localobjectreference?: LocalObjectReference.AsObject,
    optional: boolean,
  }
}

export class SecretKeySelector extends jspb.Message {
  getLocalobjectreference(): LocalObjectReference | undefined;
  setLocalobjectreference(value?: LocalObjectReference): SecretKeySelector;
  hasLocalobjectreference(): boolean;
  clearLocalobjectreference(): SecretKeySelector;

  getKey(): string;
  setKey(value: string): SecretKeySelector;

  getOptional(): boolean;
  setOptional(value: boolean): SecretKeySelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretKeySelector.AsObject;
  static toObject(includeInstance: boolean, msg: SecretKeySelector): SecretKeySelector.AsObject;
  static serializeBinaryToWriter(message: SecretKeySelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretKeySelector;
  static deserializeBinaryFromReader(message: SecretKeySelector, reader: jspb.BinaryReader): SecretKeySelector;
}

export namespace SecretKeySelector {
  export type AsObject = {
    localobjectreference?: LocalObjectReference.AsObject,
    key: string,
    optional: boolean,
  }
}

export class SecretList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): SecretList;
  hasMetadata(): boolean;
  clearMetadata(): SecretList;

  getItemsList(): Array<Secret>;
  setItemsList(value: Array<Secret>): SecretList;
  clearItemsList(): SecretList;
  addItems(value?: Secret, index?: number): Secret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretList.AsObject;
  static toObject(includeInstance: boolean, msg: SecretList): SecretList.AsObject;
  static serializeBinaryToWriter(message: SecretList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretList;
  static deserializeBinaryFromReader(message: SecretList, reader: jspb.BinaryReader): SecretList;
}

export namespace SecretList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Secret.AsObject>,
  }
}

export class SecretProjection extends jspb.Message {
  getLocalobjectreference(): LocalObjectReference | undefined;
  setLocalobjectreference(value?: LocalObjectReference): SecretProjection;
  hasLocalobjectreference(): boolean;
  clearLocalobjectreference(): SecretProjection;

  getItemsList(): Array<KeyToPath>;
  setItemsList(value: Array<KeyToPath>): SecretProjection;
  clearItemsList(): SecretProjection;
  addItems(value?: KeyToPath, index?: number): KeyToPath;

  getOptional(): boolean;
  setOptional(value: boolean): SecretProjection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretProjection.AsObject;
  static toObject(includeInstance: boolean, msg: SecretProjection): SecretProjection.AsObject;
  static serializeBinaryToWriter(message: SecretProjection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretProjection;
  static deserializeBinaryFromReader(message: SecretProjection, reader: jspb.BinaryReader): SecretProjection;
}

export namespace SecretProjection {
  export type AsObject = {
    localobjectreference?: LocalObjectReference.AsObject,
    itemsList: Array<KeyToPath.AsObject>,
    optional: boolean,
  }
}

export class SecretReference extends jspb.Message {
  getName(): string;
  setName(value: string): SecretReference;

  getNamespace(): string;
  setNamespace(value: string): SecretReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretReference.AsObject;
  static toObject(includeInstance: boolean, msg: SecretReference): SecretReference.AsObject;
  static serializeBinaryToWriter(message: SecretReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretReference;
  static deserializeBinaryFromReader(message: SecretReference, reader: jspb.BinaryReader): SecretReference;
}

export namespace SecretReference {
  export type AsObject = {
    name: string,
    namespace: string,
  }
}

export class SecretVolumeSource extends jspb.Message {
  getSecretname(): string;
  setSecretname(value: string): SecretVolumeSource;

  getItemsList(): Array<KeyToPath>;
  setItemsList(value: Array<KeyToPath>): SecretVolumeSource;
  clearItemsList(): SecretVolumeSource;
  addItems(value?: KeyToPath, index?: number): KeyToPath;

  getDefaultmode(): number;
  setDefaultmode(value: number): SecretVolumeSource;

  getOptional(): boolean;
  setOptional(value: boolean): SecretVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: SecretVolumeSource): SecretVolumeSource.AsObject;
  static serializeBinaryToWriter(message: SecretVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretVolumeSource;
  static deserializeBinaryFromReader(message: SecretVolumeSource, reader: jspb.BinaryReader): SecretVolumeSource;
}

export namespace SecretVolumeSource {
  export type AsObject = {
    secretname: string,
    itemsList: Array<KeyToPath.AsObject>,
    defaultmode: number,
    optional: boolean,
  }
}

export class SecurityContext extends jspb.Message {
  getCapabilities(): Capabilities | undefined;
  setCapabilities(value?: Capabilities): SecurityContext;
  hasCapabilities(): boolean;
  clearCapabilities(): SecurityContext;

  getPrivileged(): boolean;
  setPrivileged(value: boolean): SecurityContext;

  getSelinuxoptions(): SELinuxOptions | undefined;
  setSelinuxoptions(value?: SELinuxOptions): SecurityContext;
  hasSelinuxoptions(): boolean;
  clearSelinuxoptions(): SecurityContext;

  getWindowsoptions(): WindowsSecurityContextOptions | undefined;
  setWindowsoptions(value?: WindowsSecurityContextOptions): SecurityContext;
  hasWindowsoptions(): boolean;
  clearWindowsoptions(): SecurityContext;

  getRunasuser(): number;
  setRunasuser(value: number): SecurityContext;

  getRunasgroup(): number;
  setRunasgroup(value: number): SecurityContext;

  getRunasnonroot(): boolean;
  setRunasnonroot(value: boolean): SecurityContext;

  getReadonlyrootfilesystem(): boolean;
  setReadonlyrootfilesystem(value: boolean): SecurityContext;

  getAllowprivilegeescalation(): boolean;
  setAllowprivilegeescalation(value: boolean): SecurityContext;

  getProcmount(): string;
  setProcmount(value: string): SecurityContext;

  getSeccompprofile(): SeccompProfile | undefined;
  setSeccompprofile(value?: SeccompProfile): SecurityContext;
  hasSeccompprofile(): boolean;
  clearSeccompprofile(): SecurityContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityContext.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityContext): SecurityContext.AsObject;
  static serializeBinaryToWriter(message: SecurityContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityContext;
  static deserializeBinaryFromReader(message: SecurityContext, reader: jspb.BinaryReader): SecurityContext;
}

export namespace SecurityContext {
  export type AsObject = {
    capabilities?: Capabilities.AsObject,
    privileged: boolean,
    selinuxoptions?: SELinuxOptions.AsObject,
    windowsoptions?: WindowsSecurityContextOptions.AsObject,
    runasuser: number,
    runasgroup: number,
    runasnonroot: boolean,
    readonlyrootfilesystem: boolean,
    allowprivilegeescalation: boolean,
    procmount: string,
    seccompprofile?: SeccompProfile.AsObject,
  }
}

export class SerializedReference extends jspb.Message {
  getReference(): ObjectReference | undefined;
  setReference(value?: ObjectReference): SerializedReference;
  hasReference(): boolean;
  clearReference(): SerializedReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SerializedReference.AsObject;
  static toObject(includeInstance: boolean, msg: SerializedReference): SerializedReference.AsObject;
  static serializeBinaryToWriter(message: SerializedReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SerializedReference;
  static deserializeBinaryFromReader(message: SerializedReference, reader: jspb.BinaryReader): SerializedReference;
}

export namespace SerializedReference {
  export type AsObject = {
    reference?: ObjectReference.AsObject,
  }
}

export class Service extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Service;
  hasMetadata(): boolean;
  clearMetadata(): Service;

  getSpec(): ServiceSpec | undefined;
  setSpec(value?: ServiceSpec): Service;
  hasSpec(): boolean;
  clearSpec(): Service;

  getStatus(): ServiceStatus | undefined;
  setStatus(value?: ServiceStatus): Service;
  hasStatus(): boolean;
  clearStatus(): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ServiceSpec.AsObject,
    status?: ServiceStatus.AsObject,
  }
}

export class ServiceAccount extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ServiceAccount;
  hasMetadata(): boolean;
  clearMetadata(): ServiceAccount;

  getSecretsList(): Array<ObjectReference>;
  setSecretsList(value: Array<ObjectReference>): ServiceAccount;
  clearSecretsList(): ServiceAccount;
  addSecrets(value?: ObjectReference, index?: number): ObjectReference;

  getImagepullsecretsList(): Array<LocalObjectReference>;
  setImagepullsecretsList(value: Array<LocalObjectReference>): ServiceAccount;
  clearImagepullsecretsList(): ServiceAccount;
  addImagepullsecrets(value?: LocalObjectReference, index?: number): LocalObjectReference;

  getAutomountserviceaccounttoken(): boolean;
  setAutomountserviceaccounttoken(value: boolean): ServiceAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAccount): ServiceAccount.AsObject;
  static serializeBinaryToWriter(message: ServiceAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAccount;
  static deserializeBinaryFromReader(message: ServiceAccount, reader: jspb.BinaryReader): ServiceAccount;
}

export namespace ServiceAccount {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    secretsList: Array<ObjectReference.AsObject>,
    imagepullsecretsList: Array<LocalObjectReference.AsObject>,
    automountserviceaccounttoken: boolean,
  }
}

export class ServiceAccountList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ServiceAccountList;
  hasMetadata(): boolean;
  clearMetadata(): ServiceAccountList;

  getItemsList(): Array<ServiceAccount>;
  setItemsList(value: Array<ServiceAccount>): ServiceAccountList;
  clearItemsList(): ServiceAccountList;
  addItems(value?: ServiceAccount, index?: number): ServiceAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAccountList.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAccountList): ServiceAccountList.AsObject;
  static serializeBinaryToWriter(message: ServiceAccountList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAccountList;
  static deserializeBinaryFromReader(message: ServiceAccountList, reader: jspb.BinaryReader): ServiceAccountList;
}

export namespace ServiceAccountList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ServiceAccount.AsObject>,
  }
}

export class ServiceAccountTokenProjection extends jspb.Message {
  getAudience(): string;
  setAudience(value: string): ServiceAccountTokenProjection;

  getExpirationseconds(): number;
  setExpirationseconds(value: number): ServiceAccountTokenProjection;

  getPath(): string;
  setPath(value: string): ServiceAccountTokenProjection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAccountTokenProjection.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAccountTokenProjection): ServiceAccountTokenProjection.AsObject;
  static serializeBinaryToWriter(message: ServiceAccountTokenProjection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAccountTokenProjection;
  static deserializeBinaryFromReader(message: ServiceAccountTokenProjection, reader: jspb.BinaryReader): ServiceAccountTokenProjection;
}

export namespace ServiceAccountTokenProjection {
  export type AsObject = {
    audience: string,
    expirationseconds: number,
    path: string,
  }
}

export class ServiceList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ServiceList;
  hasMetadata(): boolean;
  clearMetadata(): ServiceList;

  getItemsList(): Array<Service>;
  setItemsList(value: Array<Service>): ServiceList;
  clearItemsList(): ServiceList;
  addItems(value?: Service, index?: number): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceList.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceList): ServiceList.AsObject;
  static serializeBinaryToWriter(message: ServiceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceList;
  static deserializeBinaryFromReader(message: ServiceList, reader: jspb.BinaryReader): ServiceList;
}

export namespace ServiceList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Service.AsObject>,
  }
}

export class ServicePort extends jspb.Message {
  getName(): string;
  setName(value: string): ServicePort;

  getProtocol(): string;
  setProtocol(value: string): ServicePort;

  getAppprotocol(): string;
  setAppprotocol(value: string): ServicePort;

  getPort(): number;
  setPort(value: number): ServicePort;

  getTargetport(): k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString | undefined;
  setTargetport(value?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString): ServicePort;
  hasTargetport(): boolean;
  clearTargetport(): ServicePort;

  getNodeport(): number;
  setNodeport(value: number): ServicePort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServicePort.AsObject;
  static toObject(includeInstance: boolean, msg: ServicePort): ServicePort.AsObject;
  static serializeBinaryToWriter(message: ServicePort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServicePort;
  static deserializeBinaryFromReader(message: ServicePort, reader: jspb.BinaryReader): ServicePort;
}

export namespace ServicePort {
  export type AsObject = {
    name: string,
    protocol: string,
    appprotocol: string,
    port: number,
    targetport?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString.AsObject,
    nodeport: number,
  }
}

export class ServiceProxyOptions extends jspb.Message {
  getPath(): string;
  setPath(value: string): ServiceProxyOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceProxyOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceProxyOptions): ServiceProxyOptions.AsObject;
  static serializeBinaryToWriter(message: ServiceProxyOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceProxyOptions;
  static deserializeBinaryFromReader(message: ServiceProxyOptions, reader: jspb.BinaryReader): ServiceProxyOptions;
}

export namespace ServiceProxyOptions {
  export type AsObject = {
    path: string,
  }
}

export class ServiceSpec extends jspb.Message {
  getPortsList(): Array<ServicePort>;
  setPortsList(value: Array<ServicePort>): ServiceSpec;
  clearPortsList(): ServiceSpec;
  addPorts(value?: ServicePort, index?: number): ServicePort;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ServiceSpec;

  getClusterip(): string;
  setClusterip(value: string): ServiceSpec;

  getClusteripsList(): Array<string>;
  setClusteripsList(value: Array<string>): ServiceSpec;
  clearClusteripsList(): ServiceSpec;
  addClusterips(value: string, index?: number): ServiceSpec;

  getType(): string;
  setType(value: string): ServiceSpec;

  getExternalipsList(): Array<string>;
  setExternalipsList(value: Array<string>): ServiceSpec;
  clearExternalipsList(): ServiceSpec;
  addExternalips(value: string, index?: number): ServiceSpec;

  getSessionaffinity(): string;
  setSessionaffinity(value: string): ServiceSpec;

  getLoadbalancerip(): string;
  setLoadbalancerip(value: string): ServiceSpec;

  getLoadbalancersourcerangesList(): Array<string>;
  setLoadbalancersourcerangesList(value: Array<string>): ServiceSpec;
  clearLoadbalancersourcerangesList(): ServiceSpec;
  addLoadbalancersourceranges(value: string, index?: number): ServiceSpec;

  getExternalname(): string;
  setExternalname(value: string): ServiceSpec;

  getExternaltrafficpolicy(): string;
  setExternaltrafficpolicy(value: string): ServiceSpec;

  getHealthchecknodeport(): number;
  setHealthchecknodeport(value: number): ServiceSpec;

  getPublishnotreadyaddresses(): boolean;
  setPublishnotreadyaddresses(value: boolean): ServiceSpec;

  getSessionaffinityconfig(): SessionAffinityConfig | undefined;
  setSessionaffinityconfig(value?: SessionAffinityConfig): ServiceSpec;
  hasSessionaffinityconfig(): boolean;
  clearSessionaffinityconfig(): ServiceSpec;

  getTopologykeysList(): Array<string>;
  setTopologykeysList(value: Array<string>): ServiceSpec;
  clearTopologykeysList(): ServiceSpec;
  addTopologykeys(value: string, index?: number): ServiceSpec;

  getIpfamiliesList(): Array<string>;
  setIpfamiliesList(value: Array<string>): ServiceSpec;
  clearIpfamiliesList(): ServiceSpec;
  addIpfamilies(value: string, index?: number): ServiceSpec;

  getIpfamilypolicy(): string;
  setIpfamilypolicy(value: string): ServiceSpec;

  getAllocateloadbalancernodeports(): boolean;
  setAllocateloadbalancernodeports(value: boolean): ServiceSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceSpec): ServiceSpec.AsObject;
  static serializeBinaryToWriter(message: ServiceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceSpec;
  static deserializeBinaryFromReader(message: ServiceSpec, reader: jspb.BinaryReader): ServiceSpec;
}

export namespace ServiceSpec {
  export type AsObject = {
    portsList: Array<ServicePort.AsObject>,
    selectorMap: Array<[string, string]>,
    clusterip: string,
    clusteripsList: Array<string>,
    type: string,
    externalipsList: Array<string>,
    sessionaffinity: string,
    loadbalancerip: string,
    loadbalancersourcerangesList: Array<string>,
    externalname: string,
    externaltrafficpolicy: string,
    healthchecknodeport: number,
    publishnotreadyaddresses: boolean,
    sessionaffinityconfig?: SessionAffinityConfig.AsObject,
    topologykeysList: Array<string>,
    ipfamiliesList: Array<string>,
    ipfamilypolicy: string,
    allocateloadbalancernodeports: boolean,
  }
}

export class ServiceStatus extends jspb.Message {
  getLoadbalancer(): LoadBalancerStatus | undefined;
  setLoadbalancer(value?: LoadBalancerStatus): ServiceStatus;
  hasLoadbalancer(): boolean;
  clearLoadbalancer(): ServiceStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ServiceStatus;
  clearConditionsList(): ServiceStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceStatus): ServiceStatus.AsObject;
  static serializeBinaryToWriter(message: ServiceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceStatus;
  static deserializeBinaryFromReader(message: ServiceStatus, reader: jspb.BinaryReader): ServiceStatus;
}

export namespace ServiceStatus {
  export type AsObject = {
    loadbalancer?: LoadBalancerStatus.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class SessionAffinityConfig extends jspb.Message {
  getClientip(): ClientIPConfig | undefined;
  setClientip(value?: ClientIPConfig): SessionAffinityConfig;
  hasClientip(): boolean;
  clearClientip(): SessionAffinityConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionAffinityConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SessionAffinityConfig): SessionAffinityConfig.AsObject;
  static serializeBinaryToWriter(message: SessionAffinityConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionAffinityConfig;
  static deserializeBinaryFromReader(message: SessionAffinityConfig, reader: jspb.BinaryReader): SessionAffinityConfig;
}

export namespace SessionAffinityConfig {
  export type AsObject = {
    clientip?: ClientIPConfig.AsObject,
  }
}

export class StorageOSPersistentVolumeSource extends jspb.Message {
  getVolumename(): string;
  setVolumename(value: string): StorageOSPersistentVolumeSource;

  getVolumenamespace(): string;
  setVolumenamespace(value: string): StorageOSPersistentVolumeSource;

  getFstype(): string;
  setFstype(value: string): StorageOSPersistentVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): StorageOSPersistentVolumeSource;

  getSecretref(): ObjectReference | undefined;
  setSecretref(value?: ObjectReference): StorageOSPersistentVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): StorageOSPersistentVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageOSPersistentVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: StorageOSPersistentVolumeSource): StorageOSPersistentVolumeSource.AsObject;
  static serializeBinaryToWriter(message: StorageOSPersistentVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageOSPersistentVolumeSource;
  static deserializeBinaryFromReader(message: StorageOSPersistentVolumeSource, reader: jspb.BinaryReader): StorageOSPersistentVolumeSource;
}

export namespace StorageOSPersistentVolumeSource {
  export type AsObject = {
    volumename: string,
    volumenamespace: string,
    fstype: string,
    readonly: boolean,
    secretref?: ObjectReference.AsObject,
  }
}

export class StorageOSVolumeSource extends jspb.Message {
  getVolumename(): string;
  setVolumename(value: string): StorageOSVolumeSource;

  getVolumenamespace(): string;
  setVolumenamespace(value: string): StorageOSVolumeSource;

  getFstype(): string;
  setFstype(value: string): StorageOSVolumeSource;

  getReadonly(): boolean;
  setReadonly(value: boolean): StorageOSVolumeSource;

  getSecretref(): LocalObjectReference | undefined;
  setSecretref(value?: LocalObjectReference): StorageOSVolumeSource;
  hasSecretref(): boolean;
  clearSecretref(): StorageOSVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageOSVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: StorageOSVolumeSource): StorageOSVolumeSource.AsObject;
  static serializeBinaryToWriter(message: StorageOSVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageOSVolumeSource;
  static deserializeBinaryFromReader(message: StorageOSVolumeSource, reader: jspb.BinaryReader): StorageOSVolumeSource;
}

export namespace StorageOSVolumeSource {
  export type AsObject = {
    volumename: string,
    volumenamespace: string,
    fstype: string,
    readonly: boolean,
    secretref?: LocalObjectReference.AsObject,
  }
}

export class Sysctl extends jspb.Message {
  getName(): string;
  setName(value: string): Sysctl;

  getValue(): string;
  setValue(value: string): Sysctl;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sysctl.AsObject;
  static toObject(includeInstance: boolean, msg: Sysctl): Sysctl.AsObject;
  static serializeBinaryToWriter(message: Sysctl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sysctl;
  static deserializeBinaryFromReader(message: Sysctl, reader: jspb.BinaryReader): Sysctl;
}

export namespace Sysctl {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class TCPSocketAction extends jspb.Message {
  getPort(): k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString | undefined;
  setPort(value?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString): TCPSocketAction;
  hasPort(): boolean;
  clearPort(): TCPSocketAction;

  getHost(): string;
  setHost(value: string): TCPSocketAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TCPSocketAction.AsObject;
  static toObject(includeInstance: boolean, msg: TCPSocketAction): TCPSocketAction.AsObject;
  static serializeBinaryToWriter(message: TCPSocketAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TCPSocketAction;
  static deserializeBinaryFromReader(message: TCPSocketAction, reader: jspb.BinaryReader): TCPSocketAction;
}

export namespace TCPSocketAction {
  export type AsObject = {
    port?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString.AsObject,
    host: string,
  }
}

export class Taint extends jspb.Message {
  getKey(): string;
  setKey(value: string): Taint;

  getValue(): string;
  setValue(value: string): Taint;

  getEffect(): string;
  setEffect(value: string): Taint;

  getTimeadded(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTimeadded(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): Taint;
  hasTimeadded(): boolean;
  clearTimeadded(): Taint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Taint.AsObject;
  static toObject(includeInstance: boolean, msg: Taint): Taint.AsObject;
  static serializeBinaryToWriter(message: Taint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Taint;
  static deserializeBinaryFromReader(message: Taint, reader: jspb.BinaryReader): Taint;
}

export namespace Taint {
  export type AsObject = {
    key: string,
    value: string,
    effect: string,
    timeadded?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class Toleration extends jspb.Message {
  getKey(): string;
  setKey(value: string): Toleration;

  getOperator(): string;
  setOperator(value: string): Toleration;

  getValue(): string;
  setValue(value: string): Toleration;

  getEffect(): string;
  setEffect(value: string): Toleration;

  getTolerationseconds(): number;
  setTolerationseconds(value: number): Toleration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Toleration.AsObject;
  static toObject(includeInstance: boolean, msg: Toleration): Toleration.AsObject;
  static serializeBinaryToWriter(message: Toleration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Toleration;
  static deserializeBinaryFromReader(message: Toleration, reader: jspb.BinaryReader): Toleration;
}

export namespace Toleration {
  export type AsObject = {
    key: string,
    operator: string,
    value: string,
    effect: string,
    tolerationseconds: number,
  }
}

export class TopologySelectorLabelRequirement extends jspb.Message {
  getKey(): string;
  setKey(value: string): TopologySelectorLabelRequirement;

  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): TopologySelectorLabelRequirement;
  clearValuesList(): TopologySelectorLabelRequirement;
  addValues(value: string, index?: number): TopologySelectorLabelRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopologySelectorLabelRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: TopologySelectorLabelRequirement): TopologySelectorLabelRequirement.AsObject;
  static serializeBinaryToWriter(message: TopologySelectorLabelRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopologySelectorLabelRequirement;
  static deserializeBinaryFromReader(message: TopologySelectorLabelRequirement, reader: jspb.BinaryReader): TopologySelectorLabelRequirement;
}

export namespace TopologySelectorLabelRequirement {
  export type AsObject = {
    key: string,
    valuesList: Array<string>,
  }
}

export class TopologySelectorTerm extends jspb.Message {
  getMatchlabelexpressionsList(): Array<TopologySelectorLabelRequirement>;
  setMatchlabelexpressionsList(value: Array<TopologySelectorLabelRequirement>): TopologySelectorTerm;
  clearMatchlabelexpressionsList(): TopologySelectorTerm;
  addMatchlabelexpressions(value?: TopologySelectorLabelRequirement, index?: number): TopologySelectorLabelRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopologySelectorTerm.AsObject;
  static toObject(includeInstance: boolean, msg: TopologySelectorTerm): TopologySelectorTerm.AsObject;
  static serializeBinaryToWriter(message: TopologySelectorTerm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopologySelectorTerm;
  static deserializeBinaryFromReader(message: TopologySelectorTerm, reader: jspb.BinaryReader): TopologySelectorTerm;
}

export namespace TopologySelectorTerm {
  export type AsObject = {
    matchlabelexpressionsList: Array<TopologySelectorLabelRequirement.AsObject>,
  }
}

export class TopologySpreadConstraint extends jspb.Message {
  getMaxskew(): number;
  setMaxskew(value: number): TopologySpreadConstraint;

  getTopologykey(): string;
  setTopologykey(value: string): TopologySpreadConstraint;

  getWhenunsatisfiable(): string;
  setWhenunsatisfiable(value: string): TopologySpreadConstraint;

  getLabelselector(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector | undefined;
  setLabelselector(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector): TopologySpreadConstraint;
  hasLabelselector(): boolean;
  clearLabelselector(): TopologySpreadConstraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopologySpreadConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: TopologySpreadConstraint): TopologySpreadConstraint.AsObject;
  static serializeBinaryToWriter(message: TopologySpreadConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopologySpreadConstraint;
  static deserializeBinaryFromReader(message: TopologySpreadConstraint, reader: jspb.BinaryReader): TopologySpreadConstraint;
}

export namespace TopologySpreadConstraint {
  export type AsObject = {
    maxskew: number,
    topologykey: string,
    whenunsatisfiable: string,
    labelselector?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector.AsObject,
  }
}

export class TypedLocalObjectReference extends jspb.Message {
  getApigroup(): string;
  setApigroup(value: string): TypedLocalObjectReference;

  getKind(): string;
  setKind(value: string): TypedLocalObjectReference;

  getName(): string;
  setName(value: string): TypedLocalObjectReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypedLocalObjectReference.AsObject;
  static toObject(includeInstance: boolean, msg: TypedLocalObjectReference): TypedLocalObjectReference.AsObject;
  static serializeBinaryToWriter(message: TypedLocalObjectReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypedLocalObjectReference;
  static deserializeBinaryFromReader(message: TypedLocalObjectReference, reader: jspb.BinaryReader): TypedLocalObjectReference;
}

export namespace TypedLocalObjectReference {
  export type AsObject = {
    apigroup: string,
    kind: string,
    name: string,
  }
}

export class Volume extends jspb.Message {
  getName(): string;
  setName(value: string): Volume;

  getVolumesource(): VolumeSource | undefined;
  setVolumesource(value?: VolumeSource): Volume;
  hasVolumesource(): boolean;
  clearVolumesource(): Volume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Volume.AsObject;
  static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
  static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Volume;
  static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
  export type AsObject = {
    name: string,
    volumesource?: VolumeSource.AsObject,
  }
}

export class VolumeDevice extends jspb.Message {
  getName(): string;
  setName(value: string): VolumeDevice;

  getDevicepath(): string;
  setDevicepath(value: string): VolumeDevice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeDevice.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeDevice): VolumeDevice.AsObject;
  static serializeBinaryToWriter(message: VolumeDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeDevice;
  static deserializeBinaryFromReader(message: VolumeDevice, reader: jspb.BinaryReader): VolumeDevice;
}

export namespace VolumeDevice {
  export type AsObject = {
    name: string,
    devicepath: string,
  }
}

export class VolumeMount extends jspb.Message {
  getName(): string;
  setName(value: string): VolumeMount;

  getReadonly(): boolean;
  setReadonly(value: boolean): VolumeMount;

  getMountpath(): string;
  setMountpath(value: string): VolumeMount;

  getSubpath(): string;
  setSubpath(value: string): VolumeMount;

  getMountpropagation(): string;
  setMountpropagation(value: string): VolumeMount;

  getSubpathexpr(): string;
  setSubpathexpr(value: string): VolumeMount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeMount.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeMount): VolumeMount.AsObject;
  static serializeBinaryToWriter(message: VolumeMount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeMount;
  static deserializeBinaryFromReader(message: VolumeMount, reader: jspb.BinaryReader): VolumeMount;
}

export namespace VolumeMount {
  export type AsObject = {
    name: string,
    readonly: boolean,
    mountpath: string,
    subpath: string,
    mountpropagation: string,
    subpathexpr: string,
  }
}

export class VolumeNodeAffinity extends jspb.Message {
  getRequired(): NodeSelector | undefined;
  setRequired(value?: NodeSelector): VolumeNodeAffinity;
  hasRequired(): boolean;
  clearRequired(): VolumeNodeAffinity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeNodeAffinity.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeNodeAffinity): VolumeNodeAffinity.AsObject;
  static serializeBinaryToWriter(message: VolumeNodeAffinity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeNodeAffinity;
  static deserializeBinaryFromReader(message: VolumeNodeAffinity, reader: jspb.BinaryReader): VolumeNodeAffinity;
}

export namespace VolumeNodeAffinity {
  export type AsObject = {
    required?: NodeSelector.AsObject,
  }
}

export class VolumeProjection extends jspb.Message {
  getSecret(): SecretProjection | undefined;
  setSecret(value?: SecretProjection): VolumeProjection;
  hasSecret(): boolean;
  clearSecret(): VolumeProjection;

  getDownwardapi(): DownwardAPIProjection | undefined;
  setDownwardapi(value?: DownwardAPIProjection): VolumeProjection;
  hasDownwardapi(): boolean;
  clearDownwardapi(): VolumeProjection;

  getConfigmap(): ConfigMapProjection | undefined;
  setConfigmap(value?: ConfigMapProjection): VolumeProjection;
  hasConfigmap(): boolean;
  clearConfigmap(): VolumeProjection;

  getServiceaccounttoken(): ServiceAccountTokenProjection | undefined;
  setServiceaccounttoken(value?: ServiceAccountTokenProjection): VolumeProjection;
  hasServiceaccounttoken(): boolean;
  clearServiceaccounttoken(): VolumeProjection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeProjection.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeProjection): VolumeProjection.AsObject;
  static serializeBinaryToWriter(message: VolumeProjection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeProjection;
  static deserializeBinaryFromReader(message: VolumeProjection, reader: jspb.BinaryReader): VolumeProjection;
}

export namespace VolumeProjection {
  export type AsObject = {
    secret?: SecretProjection.AsObject,
    downwardapi?: DownwardAPIProjection.AsObject,
    configmap?: ConfigMapProjection.AsObject,
    serviceaccounttoken?: ServiceAccountTokenProjection.AsObject,
  }
}

export class VolumeSource extends jspb.Message {
  getHostpath(): HostPathVolumeSource | undefined;
  setHostpath(value?: HostPathVolumeSource): VolumeSource;
  hasHostpath(): boolean;
  clearHostpath(): VolumeSource;

  getEmptydir(): EmptyDirVolumeSource | undefined;
  setEmptydir(value?: EmptyDirVolumeSource): VolumeSource;
  hasEmptydir(): boolean;
  clearEmptydir(): VolumeSource;

  getGcepersistentdisk(): GCEPersistentDiskVolumeSource | undefined;
  setGcepersistentdisk(value?: GCEPersistentDiskVolumeSource): VolumeSource;
  hasGcepersistentdisk(): boolean;
  clearGcepersistentdisk(): VolumeSource;

  getAwselasticblockstore(): AWSElasticBlockStoreVolumeSource | undefined;
  setAwselasticblockstore(value?: AWSElasticBlockStoreVolumeSource): VolumeSource;
  hasAwselasticblockstore(): boolean;
  clearAwselasticblockstore(): VolumeSource;

  getGitrepo(): GitRepoVolumeSource | undefined;
  setGitrepo(value?: GitRepoVolumeSource): VolumeSource;
  hasGitrepo(): boolean;
  clearGitrepo(): VolumeSource;

  getSecret(): SecretVolumeSource | undefined;
  setSecret(value?: SecretVolumeSource): VolumeSource;
  hasSecret(): boolean;
  clearSecret(): VolumeSource;

  getNfs(): NFSVolumeSource | undefined;
  setNfs(value?: NFSVolumeSource): VolumeSource;
  hasNfs(): boolean;
  clearNfs(): VolumeSource;

  getIscsi(): ISCSIVolumeSource | undefined;
  setIscsi(value?: ISCSIVolumeSource): VolumeSource;
  hasIscsi(): boolean;
  clearIscsi(): VolumeSource;

  getGlusterfs(): GlusterfsVolumeSource | undefined;
  setGlusterfs(value?: GlusterfsVolumeSource): VolumeSource;
  hasGlusterfs(): boolean;
  clearGlusterfs(): VolumeSource;

  getPersistentvolumeclaim(): PersistentVolumeClaimVolumeSource | undefined;
  setPersistentvolumeclaim(value?: PersistentVolumeClaimVolumeSource): VolumeSource;
  hasPersistentvolumeclaim(): boolean;
  clearPersistentvolumeclaim(): VolumeSource;

  getRbd(): RBDVolumeSource | undefined;
  setRbd(value?: RBDVolumeSource): VolumeSource;
  hasRbd(): boolean;
  clearRbd(): VolumeSource;

  getFlexvolume(): FlexVolumeSource | undefined;
  setFlexvolume(value?: FlexVolumeSource): VolumeSource;
  hasFlexvolume(): boolean;
  clearFlexvolume(): VolumeSource;

  getCinder(): CinderVolumeSource | undefined;
  setCinder(value?: CinderVolumeSource): VolumeSource;
  hasCinder(): boolean;
  clearCinder(): VolumeSource;

  getCephfs(): CephFSVolumeSource | undefined;
  setCephfs(value?: CephFSVolumeSource): VolumeSource;
  hasCephfs(): boolean;
  clearCephfs(): VolumeSource;

  getFlocker(): FlockerVolumeSource | undefined;
  setFlocker(value?: FlockerVolumeSource): VolumeSource;
  hasFlocker(): boolean;
  clearFlocker(): VolumeSource;

  getDownwardapi(): DownwardAPIVolumeSource | undefined;
  setDownwardapi(value?: DownwardAPIVolumeSource): VolumeSource;
  hasDownwardapi(): boolean;
  clearDownwardapi(): VolumeSource;

  getFc(): FCVolumeSource | undefined;
  setFc(value?: FCVolumeSource): VolumeSource;
  hasFc(): boolean;
  clearFc(): VolumeSource;

  getAzurefile(): AzureFileVolumeSource | undefined;
  setAzurefile(value?: AzureFileVolumeSource): VolumeSource;
  hasAzurefile(): boolean;
  clearAzurefile(): VolumeSource;

  getConfigmap(): ConfigMapVolumeSource | undefined;
  setConfigmap(value?: ConfigMapVolumeSource): VolumeSource;
  hasConfigmap(): boolean;
  clearConfigmap(): VolumeSource;

  getVspherevolume(): VsphereVirtualDiskVolumeSource | undefined;
  setVspherevolume(value?: VsphereVirtualDiskVolumeSource): VolumeSource;
  hasVspherevolume(): boolean;
  clearVspherevolume(): VolumeSource;

  getQuobyte(): QuobyteVolumeSource | undefined;
  setQuobyte(value?: QuobyteVolumeSource): VolumeSource;
  hasQuobyte(): boolean;
  clearQuobyte(): VolumeSource;

  getAzuredisk(): AzureDiskVolumeSource | undefined;
  setAzuredisk(value?: AzureDiskVolumeSource): VolumeSource;
  hasAzuredisk(): boolean;
  clearAzuredisk(): VolumeSource;

  getPhotonpersistentdisk(): PhotonPersistentDiskVolumeSource | undefined;
  setPhotonpersistentdisk(value?: PhotonPersistentDiskVolumeSource): VolumeSource;
  hasPhotonpersistentdisk(): boolean;
  clearPhotonpersistentdisk(): VolumeSource;

  getProjected(): ProjectedVolumeSource | undefined;
  setProjected(value?: ProjectedVolumeSource): VolumeSource;
  hasProjected(): boolean;
  clearProjected(): VolumeSource;

  getPortworxvolume(): PortworxVolumeSource | undefined;
  setPortworxvolume(value?: PortworxVolumeSource): VolumeSource;
  hasPortworxvolume(): boolean;
  clearPortworxvolume(): VolumeSource;

  getScaleio(): ScaleIOVolumeSource | undefined;
  setScaleio(value?: ScaleIOVolumeSource): VolumeSource;
  hasScaleio(): boolean;
  clearScaleio(): VolumeSource;

  getStorageos(): StorageOSVolumeSource | undefined;
  setStorageos(value?: StorageOSVolumeSource): VolumeSource;
  hasStorageos(): boolean;
  clearStorageos(): VolumeSource;

  getCsi(): CSIVolumeSource | undefined;
  setCsi(value?: CSIVolumeSource): VolumeSource;
  hasCsi(): boolean;
  clearCsi(): VolumeSource;

  getEphemeral(): EphemeralVolumeSource | undefined;
  setEphemeral(value?: EphemeralVolumeSource): VolumeSource;
  hasEphemeral(): boolean;
  clearEphemeral(): VolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeSource): VolumeSource.AsObject;
  static serializeBinaryToWriter(message: VolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeSource;
  static deserializeBinaryFromReader(message: VolumeSource, reader: jspb.BinaryReader): VolumeSource;
}

export namespace VolumeSource {
  export type AsObject = {
    hostpath?: HostPathVolumeSource.AsObject,
    emptydir?: EmptyDirVolumeSource.AsObject,
    gcepersistentdisk?: GCEPersistentDiskVolumeSource.AsObject,
    awselasticblockstore?: AWSElasticBlockStoreVolumeSource.AsObject,
    gitrepo?: GitRepoVolumeSource.AsObject,
    secret?: SecretVolumeSource.AsObject,
    nfs?: NFSVolumeSource.AsObject,
    iscsi?: ISCSIVolumeSource.AsObject,
    glusterfs?: GlusterfsVolumeSource.AsObject,
    persistentvolumeclaim?: PersistentVolumeClaimVolumeSource.AsObject,
    rbd?: RBDVolumeSource.AsObject,
    flexvolume?: FlexVolumeSource.AsObject,
    cinder?: CinderVolumeSource.AsObject,
    cephfs?: CephFSVolumeSource.AsObject,
    flocker?: FlockerVolumeSource.AsObject,
    downwardapi?: DownwardAPIVolumeSource.AsObject,
    fc?: FCVolumeSource.AsObject,
    azurefile?: AzureFileVolumeSource.AsObject,
    configmap?: ConfigMapVolumeSource.AsObject,
    vspherevolume?: VsphereVirtualDiskVolumeSource.AsObject,
    quobyte?: QuobyteVolumeSource.AsObject,
    azuredisk?: AzureDiskVolumeSource.AsObject,
    photonpersistentdisk?: PhotonPersistentDiskVolumeSource.AsObject,
    projected?: ProjectedVolumeSource.AsObject,
    portworxvolume?: PortworxVolumeSource.AsObject,
    scaleio?: ScaleIOVolumeSource.AsObject,
    storageos?: StorageOSVolumeSource.AsObject,
    csi?: CSIVolumeSource.AsObject,
    ephemeral?: EphemeralVolumeSource.AsObject,
  }
}

export class VsphereVirtualDiskVolumeSource extends jspb.Message {
  getVolumepath(): string;
  setVolumepath(value: string): VsphereVirtualDiskVolumeSource;

  getFstype(): string;
  setFstype(value: string): VsphereVirtualDiskVolumeSource;

  getStoragepolicyname(): string;
  setStoragepolicyname(value: string): VsphereVirtualDiskVolumeSource;

  getStoragepolicyid(): string;
  setStoragepolicyid(value: string): VsphereVirtualDiskVolumeSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VsphereVirtualDiskVolumeSource.AsObject;
  static toObject(includeInstance: boolean, msg: VsphereVirtualDiskVolumeSource): VsphereVirtualDiskVolumeSource.AsObject;
  static serializeBinaryToWriter(message: VsphereVirtualDiskVolumeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VsphereVirtualDiskVolumeSource;
  static deserializeBinaryFromReader(message: VsphereVirtualDiskVolumeSource, reader: jspb.BinaryReader): VsphereVirtualDiskVolumeSource;
}

export namespace VsphereVirtualDiskVolumeSource {
  export type AsObject = {
    volumepath: string,
    fstype: string,
    storagepolicyname: string,
    storagepolicyid: string,
  }
}

export class WeightedPodAffinityTerm extends jspb.Message {
  getWeight(): number;
  setWeight(value: number): WeightedPodAffinityTerm;

  getPodaffinityterm(): PodAffinityTerm | undefined;
  setPodaffinityterm(value?: PodAffinityTerm): WeightedPodAffinityTerm;
  hasPodaffinityterm(): boolean;
  clearPodaffinityterm(): WeightedPodAffinityTerm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeightedPodAffinityTerm.AsObject;
  static toObject(includeInstance: boolean, msg: WeightedPodAffinityTerm): WeightedPodAffinityTerm.AsObject;
  static serializeBinaryToWriter(message: WeightedPodAffinityTerm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeightedPodAffinityTerm;
  static deserializeBinaryFromReader(message: WeightedPodAffinityTerm, reader: jspb.BinaryReader): WeightedPodAffinityTerm;
}

export namespace WeightedPodAffinityTerm {
  export type AsObject = {
    weight: number,
    podaffinityterm?: PodAffinityTerm.AsObject,
  }
}

export class WindowsSecurityContextOptions extends jspb.Message {
  getGmsacredentialspecname(): string;
  setGmsacredentialspecname(value: string): WindowsSecurityContextOptions;

  getGmsacredentialspec(): string;
  setGmsacredentialspec(value: string): WindowsSecurityContextOptions;

  getRunasusername(): string;
  setRunasusername(value: string): WindowsSecurityContextOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WindowsSecurityContextOptions.AsObject;
  static toObject(includeInstance: boolean, msg: WindowsSecurityContextOptions): WindowsSecurityContextOptions.AsObject;
  static serializeBinaryToWriter(message: WindowsSecurityContextOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WindowsSecurityContextOptions;
  static deserializeBinaryFromReader(message: WindowsSecurityContextOptions, reader: jspb.BinaryReader): WindowsSecurityContextOptions;
}

export namespace WindowsSecurityContextOptions {
  export type AsObject = {
    gmsacredentialspecname: string,
    gmsacredentialspec: string,
    runasusername: string,
  }
}

