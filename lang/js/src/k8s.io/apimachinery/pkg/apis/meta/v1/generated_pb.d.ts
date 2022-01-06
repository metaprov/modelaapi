import * as jspb from 'google-protobuf'

import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class APIGroup extends jspb.Message {
  getName(): string;
  setName(value: string): APIGroup;

  getVersionsList(): Array<GroupVersionForDiscovery>;
  setVersionsList(value: Array<GroupVersionForDiscovery>): APIGroup;
  clearVersionsList(): APIGroup;
  addVersions(value?: GroupVersionForDiscovery, index?: number): GroupVersionForDiscovery;

  getPreferredversion(): GroupVersionForDiscovery | undefined;
  setPreferredversion(value?: GroupVersionForDiscovery): APIGroup;
  hasPreferredversion(): boolean;
  clearPreferredversion(): APIGroup;

  getServeraddressbyclientcidrsList(): Array<ServerAddressByClientCIDR>;
  setServeraddressbyclientcidrsList(value: Array<ServerAddressByClientCIDR>): APIGroup;
  clearServeraddressbyclientcidrsList(): APIGroup;
  addServeraddressbyclientcidrs(value?: ServerAddressByClientCIDR, index?: number): ServerAddressByClientCIDR;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIGroup.AsObject;
  static toObject(includeInstance: boolean, msg: APIGroup): APIGroup.AsObject;
  static serializeBinaryToWriter(message: APIGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIGroup;
  static deserializeBinaryFromReader(message: APIGroup, reader: jspb.BinaryReader): APIGroup;
}

export namespace APIGroup {
  export type AsObject = {
    name: string,
    versionsList: Array<GroupVersionForDiscovery.AsObject>,
    preferredversion?: GroupVersionForDiscovery.AsObject,
    serveraddressbyclientcidrsList: Array<ServerAddressByClientCIDR.AsObject>,
  }
}

export class APIGroupList extends jspb.Message {
  getGroupsList(): Array<APIGroup>;
  setGroupsList(value: Array<APIGroup>): APIGroupList;
  clearGroupsList(): APIGroupList;
  addGroups(value?: APIGroup, index?: number): APIGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIGroupList.AsObject;
  static toObject(includeInstance: boolean, msg: APIGroupList): APIGroupList.AsObject;
  static serializeBinaryToWriter(message: APIGroupList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIGroupList;
  static deserializeBinaryFromReader(message: APIGroupList, reader: jspb.BinaryReader): APIGroupList;
}

export namespace APIGroupList {
  export type AsObject = {
    groupsList: Array<APIGroup.AsObject>,
  }
}

export class APIResource extends jspb.Message {
  getName(): string;
  setName(value: string): APIResource;

  getSingularname(): string;
  setSingularname(value: string): APIResource;

  getNamespaced(): boolean;
  setNamespaced(value: boolean): APIResource;

  getGroup(): string;
  setGroup(value: string): APIResource;

  getVersion(): string;
  setVersion(value: string): APIResource;

  getKind(): string;
  setKind(value: string): APIResource;

  getVerbs(): Verbs | undefined;
  setVerbs(value?: Verbs): APIResource;
  hasVerbs(): boolean;
  clearVerbs(): APIResource;

  getShortnamesList(): Array<string>;
  setShortnamesList(value: Array<string>): APIResource;
  clearShortnamesList(): APIResource;
  addShortnames(value: string, index?: number): APIResource;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): APIResource;
  clearCategoriesList(): APIResource;
  addCategories(value: string, index?: number): APIResource;

  getStorageversionhash(): string;
  setStorageversionhash(value: string): APIResource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIResource.AsObject;
  static toObject(includeInstance: boolean, msg: APIResource): APIResource.AsObject;
  static serializeBinaryToWriter(message: APIResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIResource;
  static deserializeBinaryFromReader(message: APIResource, reader: jspb.BinaryReader): APIResource;
}

export namespace APIResource {
  export type AsObject = {
    name: string,
    singularname: string,
    namespaced: boolean,
    group: string,
    version: string,
    kind: string,
    verbs?: Verbs.AsObject,
    shortnamesList: Array<string>,
    categoriesList: Array<string>,
    storageversionhash: string,
  }
}

export class APIResourceList extends jspb.Message {
  getGroupversion(): string;
  setGroupversion(value: string): APIResourceList;

  getResourcesList(): Array<APIResource>;
  setResourcesList(value: Array<APIResource>): APIResourceList;
  clearResourcesList(): APIResourceList;
  addResources(value?: APIResource, index?: number): APIResource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIResourceList.AsObject;
  static toObject(includeInstance: boolean, msg: APIResourceList): APIResourceList.AsObject;
  static serializeBinaryToWriter(message: APIResourceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIResourceList;
  static deserializeBinaryFromReader(message: APIResourceList, reader: jspb.BinaryReader): APIResourceList;
}

export namespace APIResourceList {
  export type AsObject = {
    groupversion: string,
    resourcesList: Array<APIResource.AsObject>,
  }
}

export class APIVersions extends jspb.Message {
  getVersionsList(): Array<string>;
  setVersionsList(value: Array<string>): APIVersions;
  clearVersionsList(): APIVersions;
  addVersions(value: string, index?: number): APIVersions;

  getServeraddressbyclientcidrsList(): Array<ServerAddressByClientCIDR>;
  setServeraddressbyclientcidrsList(value: Array<ServerAddressByClientCIDR>): APIVersions;
  clearServeraddressbyclientcidrsList(): APIVersions;
  addServeraddressbyclientcidrs(value?: ServerAddressByClientCIDR, index?: number): ServerAddressByClientCIDR;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIVersions.AsObject;
  static toObject(includeInstance: boolean, msg: APIVersions): APIVersions.AsObject;
  static serializeBinaryToWriter(message: APIVersions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIVersions;
  static deserializeBinaryFromReader(message: APIVersions, reader: jspb.BinaryReader): APIVersions;
}

export namespace APIVersions {
  export type AsObject = {
    versionsList: Array<string>,
    serveraddressbyclientcidrsList: Array<ServerAddressByClientCIDR.AsObject>,
  }
}

export class ApplyOptions extends jspb.Message {
  getDryrunList(): Array<string>;
  setDryrunList(value: Array<string>): ApplyOptions;
  clearDryrunList(): ApplyOptions;
  addDryrun(value: string, index?: number): ApplyOptions;

  getForce(): boolean;
  setForce(value: boolean): ApplyOptions;

  getFieldmanager(): string;
  setFieldmanager(value: string): ApplyOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyOptions): ApplyOptions.AsObject;
  static serializeBinaryToWriter(message: ApplyOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyOptions;
  static deserializeBinaryFromReader(message: ApplyOptions, reader: jspb.BinaryReader): ApplyOptions;
}

export namespace ApplyOptions {
  export type AsObject = {
    dryrunList: Array<string>,
    force: boolean,
    fieldmanager: string,
  }
}

export class Condition extends jspb.Message {
  getType(): string;
  setType(value: string): Condition;

  getStatus(): string;
  setStatus(value: string): Condition;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): Condition;

  getLasttransitiontime(): Time | undefined;
  setLasttransitiontime(value?: Time): Condition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): Condition;

  getReason(): string;
  setReason(value: string): Condition;

  getMessage(): string;
  setMessage(value: string): Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Condition.AsObject;
  static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
  static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Condition;
  static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
  export type AsObject = {
    type: string,
    status: string,
    observedgeneration: number,
    lasttransitiontime?: Time.AsObject,
    reason: string,
    message: string,
  }
}

export class CreateOptions extends jspb.Message {
  getDryrunList(): Array<string>;
  setDryrunList(value: Array<string>): CreateOptions;
  clearDryrunList(): CreateOptions;
  addDryrun(value: string, index?: number): CreateOptions;

  getFieldmanager(): string;
  setFieldmanager(value: string): CreateOptions;

  getFieldvalidation(): string;
  setFieldvalidation(value: string): CreateOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOptions.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOptions): CreateOptions.AsObject;
  static serializeBinaryToWriter(message: CreateOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOptions;
  static deserializeBinaryFromReader(message: CreateOptions, reader: jspb.BinaryReader): CreateOptions;
}

export namespace CreateOptions {
  export type AsObject = {
    dryrunList: Array<string>,
    fieldmanager: string,
    fieldvalidation: string,
  }
}

export class DeleteOptions extends jspb.Message {
  getGraceperiodseconds(): number;
  setGraceperiodseconds(value: number): DeleteOptions;

  getPreconditions(): Preconditions | undefined;
  setPreconditions(value?: Preconditions): DeleteOptions;
  hasPreconditions(): boolean;
  clearPreconditions(): DeleteOptions;

  getOrphandependents(): boolean;
  setOrphandependents(value: boolean): DeleteOptions;

  getPropagationpolicy(): string;
  setPropagationpolicy(value: string): DeleteOptions;

  getDryrunList(): Array<string>;
  setDryrunList(value: Array<string>): DeleteOptions;
  clearDryrunList(): DeleteOptions;
  addDryrun(value: string, index?: number): DeleteOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOptions.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOptions): DeleteOptions.AsObject;
  static serializeBinaryToWriter(message: DeleteOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOptions;
  static deserializeBinaryFromReader(message: DeleteOptions, reader: jspb.BinaryReader): DeleteOptions;
}

export namespace DeleteOptions {
  export type AsObject = {
    graceperiodseconds: number,
    preconditions?: Preconditions.AsObject,
    orphandependents: boolean,
    propagationpolicy: string,
    dryrunList: Array<string>,
  }
}

export class Duration extends jspb.Message {
  getDuration(): number;
  setDuration(value: number): Duration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Duration.AsObject;
  static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
  static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Duration;
  static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
}

export namespace Duration {
  export type AsObject = {
    duration: number,
  }
}

export class FieldsV1 extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): FieldsV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldsV1.AsObject;
  static toObject(includeInstance: boolean, msg: FieldsV1): FieldsV1.AsObject;
  static serializeBinaryToWriter(message: FieldsV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldsV1;
  static deserializeBinaryFromReader(message: FieldsV1, reader: jspb.BinaryReader): FieldsV1;
}

export namespace FieldsV1 {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class GetOptions extends jspb.Message {
  getResourceversion(): string;
  setResourceversion(value: string): GetOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOptions.AsObject;
  static toObject(includeInstance: boolean, msg: GetOptions): GetOptions.AsObject;
  static serializeBinaryToWriter(message: GetOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOptions;
  static deserializeBinaryFromReader(message: GetOptions, reader: jspb.BinaryReader): GetOptions;
}

export namespace GetOptions {
  export type AsObject = {
    resourceversion: string,
  }
}

export class GroupKind extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): GroupKind;

  getKind(): string;
  setKind(value: string): GroupKind;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupKind.AsObject;
  static toObject(includeInstance: boolean, msg: GroupKind): GroupKind.AsObject;
  static serializeBinaryToWriter(message: GroupKind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupKind;
  static deserializeBinaryFromReader(message: GroupKind, reader: jspb.BinaryReader): GroupKind;
}

export namespace GroupKind {
  export type AsObject = {
    group: string,
    kind: string,
  }
}

export class GroupResource extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): GroupResource;

  getResource(): string;
  setResource(value: string): GroupResource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupResource.AsObject;
  static toObject(includeInstance: boolean, msg: GroupResource): GroupResource.AsObject;
  static serializeBinaryToWriter(message: GroupResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupResource;
  static deserializeBinaryFromReader(message: GroupResource, reader: jspb.BinaryReader): GroupResource;
}

export namespace GroupResource {
  export type AsObject = {
    group: string,
    resource: string,
  }
}

export class GroupVersion extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): GroupVersion;

  getVersion(): string;
  setVersion(value: string): GroupVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupVersion.AsObject;
  static toObject(includeInstance: boolean, msg: GroupVersion): GroupVersion.AsObject;
  static serializeBinaryToWriter(message: GroupVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupVersion;
  static deserializeBinaryFromReader(message: GroupVersion, reader: jspb.BinaryReader): GroupVersion;
}

export namespace GroupVersion {
  export type AsObject = {
    group: string,
    version: string,
  }
}

export class GroupVersionForDiscovery extends jspb.Message {
  getGroupversion(): string;
  setGroupversion(value: string): GroupVersionForDiscovery;

  getVersion(): string;
  setVersion(value: string): GroupVersionForDiscovery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupVersionForDiscovery.AsObject;
  static toObject(includeInstance: boolean, msg: GroupVersionForDiscovery): GroupVersionForDiscovery.AsObject;
  static serializeBinaryToWriter(message: GroupVersionForDiscovery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupVersionForDiscovery;
  static deserializeBinaryFromReader(message: GroupVersionForDiscovery, reader: jspb.BinaryReader): GroupVersionForDiscovery;
}

export namespace GroupVersionForDiscovery {
  export type AsObject = {
    groupversion: string,
    version: string,
  }
}

export class GroupVersionKind extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): GroupVersionKind;

  getVersion(): string;
  setVersion(value: string): GroupVersionKind;

  getKind(): string;
  setKind(value: string): GroupVersionKind;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupVersionKind.AsObject;
  static toObject(includeInstance: boolean, msg: GroupVersionKind): GroupVersionKind.AsObject;
  static serializeBinaryToWriter(message: GroupVersionKind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupVersionKind;
  static deserializeBinaryFromReader(message: GroupVersionKind, reader: jspb.BinaryReader): GroupVersionKind;
}

export namespace GroupVersionKind {
  export type AsObject = {
    group: string,
    version: string,
    kind: string,
  }
}

export class GroupVersionResource extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): GroupVersionResource;

  getVersion(): string;
  setVersion(value: string): GroupVersionResource;

  getResource(): string;
  setResource(value: string): GroupVersionResource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupVersionResource.AsObject;
  static toObject(includeInstance: boolean, msg: GroupVersionResource): GroupVersionResource.AsObject;
  static serializeBinaryToWriter(message: GroupVersionResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupVersionResource;
  static deserializeBinaryFromReader(message: GroupVersionResource, reader: jspb.BinaryReader): GroupVersionResource;
}

export namespace GroupVersionResource {
  export type AsObject = {
    group: string,
    version: string,
    resource: string,
  }
}

export class LabelSelector extends jspb.Message {
  getMatchlabelsMap(): jspb.Map<string, string>;
  clearMatchlabelsMap(): LabelSelector;

  getMatchexpressionsList(): Array<LabelSelectorRequirement>;
  setMatchexpressionsList(value: Array<LabelSelectorRequirement>): LabelSelector;
  clearMatchexpressionsList(): LabelSelector;
  addMatchexpressions(value?: LabelSelectorRequirement, index?: number): LabelSelectorRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelSelector.AsObject;
  static toObject(includeInstance: boolean, msg: LabelSelector): LabelSelector.AsObject;
  static serializeBinaryToWriter(message: LabelSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelSelector;
  static deserializeBinaryFromReader(message: LabelSelector, reader: jspb.BinaryReader): LabelSelector;
}

export namespace LabelSelector {
  export type AsObject = {
    matchlabelsMap: Array<[string, string]>,
    matchexpressionsList: Array<LabelSelectorRequirement.AsObject>,
  }
}

export class LabelSelectorRequirement extends jspb.Message {
  getKey(): string;
  setKey(value: string): LabelSelectorRequirement;

  getOperator(): string;
  setOperator(value: string): LabelSelectorRequirement;

  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): LabelSelectorRequirement;
  clearValuesList(): LabelSelectorRequirement;
  addValues(value: string, index?: number): LabelSelectorRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelSelectorRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: LabelSelectorRequirement): LabelSelectorRequirement.AsObject;
  static serializeBinaryToWriter(message: LabelSelectorRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelSelectorRequirement;
  static deserializeBinaryFromReader(message: LabelSelectorRequirement, reader: jspb.BinaryReader): LabelSelectorRequirement;
}

export namespace LabelSelectorRequirement {
  export type AsObject = {
    key: string,
    operator: string,
    valuesList: Array<string>,
  }
}

export class List extends jspb.Message {
  getMetadata(): ListMeta | undefined;
  setMetadata(value?: ListMeta): List;
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
    metadata?: ListMeta.AsObject,
    itemsList: Array<k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.AsObject>,
  }
}

export class ListMeta extends jspb.Message {
  getSelflink(): string;
  setSelflink(value: string): ListMeta;

  getResourceversion(): string;
  setResourceversion(value: string): ListMeta;

  getContinue(): string;
  setContinue(value: string): ListMeta;

  getRemainingitemcount(): number;
  setRemainingitemcount(value: number): ListMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ListMeta): ListMeta.AsObject;
  static serializeBinaryToWriter(message: ListMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMeta;
  static deserializeBinaryFromReader(message: ListMeta, reader: jspb.BinaryReader): ListMeta;
}

export namespace ListMeta {
  export type AsObject = {
    selflink: string,
    resourceversion: string,
    pb_continue: string,
    remainingitemcount: number,
  }
}

export class ListOptions extends jspb.Message {
  getLabelselector(): string;
  setLabelselector(value: string): ListOptions;

  getFieldselector(): string;
  setFieldselector(value: string): ListOptions;

  getWatch(): boolean;
  setWatch(value: boolean): ListOptions;

  getAllowwatchbookmarks(): boolean;
  setAllowwatchbookmarks(value: boolean): ListOptions;

  getResourceversion(): string;
  setResourceversion(value: string): ListOptions;

  getResourceversionmatch(): string;
  setResourceversionmatch(value: string): ListOptions;

  getTimeoutseconds(): number;
  setTimeoutseconds(value: number): ListOptions;

  getLimit(): number;
  setLimit(value: number): ListOptions;

  getContinue(): string;
  setContinue(value: string): ListOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ListOptions): ListOptions.AsObject;
  static serializeBinaryToWriter(message: ListOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOptions;
  static deserializeBinaryFromReader(message: ListOptions, reader: jspb.BinaryReader): ListOptions;
}

export namespace ListOptions {
  export type AsObject = {
    labelselector: string,
    fieldselector: string,
    watch: boolean,
    allowwatchbookmarks: boolean,
    resourceversion: string,
    resourceversionmatch: string,
    timeoutseconds: number,
    limit: number,
    pb_continue: string,
  }
}

export class ManagedFieldsEntry extends jspb.Message {
  getManager(): string;
  setManager(value: string): ManagedFieldsEntry;

  getOperation(): string;
  setOperation(value: string): ManagedFieldsEntry;

  getApiversion(): string;
  setApiversion(value: string): ManagedFieldsEntry;

  getTime(): Time | undefined;
  setTime(value?: Time): ManagedFieldsEntry;
  hasTime(): boolean;
  clearTime(): ManagedFieldsEntry;

  getFieldstype(): string;
  setFieldstype(value: string): ManagedFieldsEntry;

  getFieldsv1(): FieldsV1 | undefined;
  setFieldsv1(value?: FieldsV1): ManagedFieldsEntry;
  hasFieldsv1(): boolean;
  clearFieldsv1(): ManagedFieldsEntry;

  getSubresource(): string;
  setSubresource(value: string): ManagedFieldsEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedFieldsEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedFieldsEntry): ManagedFieldsEntry.AsObject;
  static serializeBinaryToWriter(message: ManagedFieldsEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedFieldsEntry;
  static deserializeBinaryFromReader(message: ManagedFieldsEntry, reader: jspb.BinaryReader): ManagedFieldsEntry;
}

export namespace ManagedFieldsEntry {
  export type AsObject = {
    manager: string,
    operation: string,
    apiversion: string,
    time?: Time.AsObject,
    fieldstype: string,
    fieldsv1?: FieldsV1.AsObject,
    subresource: string,
  }
}

export class MicroTime extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): MicroTime;

  getNanos(): number;
  setNanos(value: number): MicroTime;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicroTime.AsObject;
  static toObject(includeInstance: boolean, msg: MicroTime): MicroTime.AsObject;
  static serializeBinaryToWriter(message: MicroTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicroTime;
  static deserializeBinaryFromReader(message: MicroTime, reader: jspb.BinaryReader): MicroTime;
}

export namespace MicroTime {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class ObjectMeta extends jspb.Message {
  getName(): string;
  setName(value: string): ObjectMeta;

  getGeneratename(): string;
  setGeneratename(value: string): ObjectMeta;

  getNamespace(): string;
  setNamespace(value: string): ObjectMeta;

  getSelflink(): string;
  setSelflink(value: string): ObjectMeta;

  getUid(): string;
  setUid(value: string): ObjectMeta;

  getResourceversion(): string;
  setResourceversion(value: string): ObjectMeta;

  getGeneration(): number;
  setGeneration(value: number): ObjectMeta;

  getCreationtimestamp(): Time | undefined;
  setCreationtimestamp(value?: Time): ObjectMeta;
  hasCreationtimestamp(): boolean;
  clearCreationtimestamp(): ObjectMeta;

  getDeletiontimestamp(): Time | undefined;
  setDeletiontimestamp(value?: Time): ObjectMeta;
  hasDeletiontimestamp(): boolean;
  clearDeletiontimestamp(): ObjectMeta;

  getDeletiongraceperiodseconds(): number;
  setDeletiongraceperiodseconds(value: number): ObjectMeta;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ObjectMeta;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): ObjectMeta;

  getOwnerreferencesList(): Array<OwnerReference>;
  setOwnerreferencesList(value: Array<OwnerReference>): ObjectMeta;
  clearOwnerreferencesList(): ObjectMeta;
  addOwnerreferences(value?: OwnerReference, index?: number): OwnerReference;

  getFinalizersList(): Array<string>;
  setFinalizersList(value: Array<string>): ObjectMeta;
  clearFinalizersList(): ObjectMeta;
  addFinalizers(value: string, index?: number): ObjectMeta;

  getClustername(): string;
  setClustername(value: string): ObjectMeta;

  getManagedfieldsList(): Array<ManagedFieldsEntry>;
  setManagedfieldsList(value: Array<ManagedFieldsEntry>): ObjectMeta;
  clearManagedfieldsList(): ObjectMeta;
  addManagedfields(value?: ManagedFieldsEntry, index?: number): ManagedFieldsEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectMeta): ObjectMeta.AsObject;
  static serializeBinaryToWriter(message: ObjectMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectMeta;
  static deserializeBinaryFromReader(message: ObjectMeta, reader: jspb.BinaryReader): ObjectMeta;
}

export namespace ObjectMeta {
  export type AsObject = {
    name: string,
    generatename: string,
    namespace: string,
    selflink: string,
    uid: string,
    resourceversion: string,
    generation: number,
    creationtimestamp?: Time.AsObject,
    deletiontimestamp?: Time.AsObject,
    deletiongraceperiodseconds: number,
    labelsMap: Array<[string, string]>,
    annotationsMap: Array<[string, string]>,
    ownerreferencesList: Array<OwnerReference.AsObject>,
    finalizersList: Array<string>,
    clustername: string,
    managedfieldsList: Array<ManagedFieldsEntry.AsObject>,
  }
}

export class OwnerReference extends jspb.Message {
  getApiversion(): string;
  setApiversion(value: string): OwnerReference;

  getKind(): string;
  setKind(value: string): OwnerReference;

  getName(): string;
  setName(value: string): OwnerReference;

  getUid(): string;
  setUid(value: string): OwnerReference;

  getController(): boolean;
  setController(value: boolean): OwnerReference;

  getBlockownerdeletion(): boolean;
  setBlockownerdeletion(value: boolean): OwnerReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OwnerReference.AsObject;
  static toObject(includeInstance: boolean, msg: OwnerReference): OwnerReference.AsObject;
  static serializeBinaryToWriter(message: OwnerReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OwnerReference;
  static deserializeBinaryFromReader(message: OwnerReference, reader: jspb.BinaryReader): OwnerReference;
}

export namespace OwnerReference {
  export type AsObject = {
    apiversion: string,
    kind: string,
    name: string,
    uid: string,
    controller: boolean,
    blockownerdeletion: boolean,
  }
}

export class PartialObjectMetadata extends jspb.Message {
  getMetadata(): ObjectMeta | undefined;
  setMetadata(value?: ObjectMeta): PartialObjectMetadata;
  hasMetadata(): boolean;
  clearMetadata(): PartialObjectMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialObjectMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PartialObjectMetadata): PartialObjectMetadata.AsObject;
  static serializeBinaryToWriter(message: PartialObjectMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialObjectMetadata;
  static deserializeBinaryFromReader(message: PartialObjectMetadata, reader: jspb.BinaryReader): PartialObjectMetadata;
}

export namespace PartialObjectMetadata {
  export type AsObject = {
    metadata?: ObjectMeta.AsObject,
  }
}

export class PartialObjectMetadataList extends jspb.Message {
  getMetadata(): ListMeta | undefined;
  setMetadata(value?: ListMeta): PartialObjectMetadataList;
  hasMetadata(): boolean;
  clearMetadata(): PartialObjectMetadataList;

  getItemsList(): Array<PartialObjectMetadata>;
  setItemsList(value: Array<PartialObjectMetadata>): PartialObjectMetadataList;
  clearItemsList(): PartialObjectMetadataList;
  addItems(value?: PartialObjectMetadata, index?: number): PartialObjectMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialObjectMetadataList.AsObject;
  static toObject(includeInstance: boolean, msg: PartialObjectMetadataList): PartialObjectMetadataList.AsObject;
  static serializeBinaryToWriter(message: PartialObjectMetadataList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialObjectMetadataList;
  static deserializeBinaryFromReader(message: PartialObjectMetadataList, reader: jspb.BinaryReader): PartialObjectMetadataList;
}

export namespace PartialObjectMetadataList {
  export type AsObject = {
    metadata?: ListMeta.AsObject,
    itemsList: Array<PartialObjectMetadata.AsObject>,
  }
}

export class Patch extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Patch.AsObject;
  static toObject(includeInstance: boolean, msg: Patch): Patch.AsObject;
  static serializeBinaryToWriter(message: Patch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Patch;
  static deserializeBinaryFromReader(message: Patch, reader: jspb.BinaryReader): Patch;
}

export namespace Patch {
  export type AsObject = {
  }
}

export class PatchOptions extends jspb.Message {
  getDryrunList(): Array<string>;
  setDryrunList(value: Array<string>): PatchOptions;
  clearDryrunList(): PatchOptions;
  addDryrun(value: string, index?: number): PatchOptions;

  getForce(): boolean;
  setForce(value: boolean): PatchOptions;

  getFieldmanager(): string;
  setFieldmanager(value: string): PatchOptions;

  getFieldvalidation(): string;
  setFieldvalidation(value: string): PatchOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PatchOptions): PatchOptions.AsObject;
  static serializeBinaryToWriter(message: PatchOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchOptions;
  static deserializeBinaryFromReader(message: PatchOptions, reader: jspb.BinaryReader): PatchOptions;
}

export namespace PatchOptions {
  export type AsObject = {
    dryrunList: Array<string>,
    force: boolean,
    fieldmanager: string,
    fieldvalidation: string,
  }
}

export class Preconditions extends jspb.Message {
  getUid(): string;
  setUid(value: string): Preconditions;

  getResourceversion(): string;
  setResourceversion(value: string): Preconditions;

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
    resourceversion: string,
  }
}

export class RootPaths extends jspb.Message {
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): RootPaths;
  clearPathsList(): RootPaths;
  addPaths(value: string, index?: number): RootPaths;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RootPaths.AsObject;
  static toObject(includeInstance: boolean, msg: RootPaths): RootPaths.AsObject;
  static serializeBinaryToWriter(message: RootPaths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RootPaths;
  static deserializeBinaryFromReader(message: RootPaths, reader: jspb.BinaryReader): RootPaths;
}

export namespace RootPaths {
  export type AsObject = {
    pathsList: Array<string>,
  }
}

export class ServerAddressByClientCIDR extends jspb.Message {
  getClientcidr(): string;
  setClientcidr(value: string): ServerAddressByClientCIDR;

  getServeraddress(): string;
  setServeraddress(value: string): ServerAddressByClientCIDR;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerAddressByClientCIDR.AsObject;
  static toObject(includeInstance: boolean, msg: ServerAddressByClientCIDR): ServerAddressByClientCIDR.AsObject;
  static serializeBinaryToWriter(message: ServerAddressByClientCIDR, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerAddressByClientCIDR;
  static deserializeBinaryFromReader(message: ServerAddressByClientCIDR, reader: jspb.BinaryReader): ServerAddressByClientCIDR;
}

export namespace ServerAddressByClientCIDR {
  export type AsObject = {
    clientcidr: string,
    serveraddress: string,
  }
}

export class Status extends jspb.Message {
  getMetadata(): ListMeta | undefined;
  setMetadata(value?: ListMeta): Status;
  hasMetadata(): boolean;
  clearMetadata(): Status;

  getStatus(): string;
  setStatus(value: string): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  getReason(): string;
  setReason(value: string): Status;

  getDetails(): StatusDetails | undefined;
  setDetails(value?: StatusDetails): Status;
  hasDetails(): boolean;
  clearDetails(): Status;

  getCode(): number;
  setCode(value: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    metadata?: ListMeta.AsObject,
    status: string,
    message: string,
    reason: string,
    details?: StatusDetails.AsObject,
    code: number,
  }
}

export class StatusCause extends jspb.Message {
  getReason(): string;
  setReason(value: string): StatusCause;

  getMessage(): string;
  setMessage(value: string): StatusCause;

  getField(): string;
  setField(value: string): StatusCause;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusCause.AsObject;
  static toObject(includeInstance: boolean, msg: StatusCause): StatusCause.AsObject;
  static serializeBinaryToWriter(message: StatusCause, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusCause;
  static deserializeBinaryFromReader(message: StatusCause, reader: jspb.BinaryReader): StatusCause;
}

export namespace StatusCause {
  export type AsObject = {
    reason: string,
    message: string,
    field: string,
  }
}

export class StatusDetails extends jspb.Message {
  getName(): string;
  setName(value: string): StatusDetails;

  getGroup(): string;
  setGroup(value: string): StatusDetails;

  getKind(): string;
  setKind(value: string): StatusDetails;

  getUid(): string;
  setUid(value: string): StatusDetails;

  getCausesList(): Array<StatusCause>;
  setCausesList(value: Array<StatusCause>): StatusDetails;
  clearCausesList(): StatusDetails;
  addCauses(value?: StatusCause, index?: number): StatusCause;

  getRetryafterseconds(): number;
  setRetryafterseconds(value: number): StatusDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusDetails.AsObject;
  static toObject(includeInstance: boolean, msg: StatusDetails): StatusDetails.AsObject;
  static serializeBinaryToWriter(message: StatusDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusDetails;
  static deserializeBinaryFromReader(message: StatusDetails, reader: jspb.BinaryReader): StatusDetails;
}

export namespace StatusDetails {
  export type AsObject = {
    name: string,
    group: string,
    kind: string,
    uid: string,
    causesList: Array<StatusCause.AsObject>,
    retryafterseconds: number,
  }
}

export class TableOptions extends jspb.Message {
  getIncludeobject(): string;
  setIncludeobject(value: string): TableOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableOptions.AsObject;
  static toObject(includeInstance: boolean, msg: TableOptions): TableOptions.AsObject;
  static serializeBinaryToWriter(message: TableOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableOptions;
  static deserializeBinaryFromReader(message: TableOptions, reader: jspb.BinaryReader): TableOptions;
}

export namespace TableOptions {
  export type AsObject = {
    includeobject: string,
  }
}

export class Time extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): Time;

  getNanos(): number;
  setNanos(value: number): Time;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Time.AsObject;
  static toObject(includeInstance: boolean, msg: Time): Time.AsObject;
  static serializeBinaryToWriter(message: Time, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Time;
  static deserializeBinaryFromReader(message: Time, reader: jspb.BinaryReader): Time;
}

export namespace Time {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class Timestamp extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): Timestamp;

  getNanos(): number;
  setNanos(value: number): Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class TypeMeta extends jspb.Message {
  getKind(): string;
  setKind(value: string): TypeMeta;

  getApiversion(): string;
  setApiversion(value: string): TypeMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeMeta.AsObject;
  static toObject(includeInstance: boolean, msg: TypeMeta): TypeMeta.AsObject;
  static serializeBinaryToWriter(message: TypeMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeMeta;
  static deserializeBinaryFromReader(message: TypeMeta, reader: jspb.BinaryReader): TypeMeta;
}

export namespace TypeMeta {
  export type AsObject = {
    kind: string,
    apiversion: string,
  }
}

export class UpdateOptions extends jspb.Message {
  getDryrunList(): Array<string>;
  setDryrunList(value: Array<string>): UpdateOptions;
  clearDryrunList(): UpdateOptions;
  addDryrun(value: string, index?: number): UpdateOptions;

  getFieldmanager(): string;
  setFieldmanager(value: string): UpdateOptions;

  getFieldvalidation(): string;
  setFieldvalidation(value: string): UpdateOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOptions.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOptions): UpdateOptions.AsObject;
  static serializeBinaryToWriter(message: UpdateOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOptions;
  static deserializeBinaryFromReader(message: UpdateOptions, reader: jspb.BinaryReader): UpdateOptions;
}

export namespace UpdateOptions {
  export type AsObject = {
    dryrunList: Array<string>,
    fieldmanager: string,
    fieldvalidation: string,
  }
}

export class Verbs extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): Verbs;
  clearItemsList(): Verbs;
  addItems(value: string, index?: number): Verbs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Verbs.AsObject;
  static toObject(includeInstance: boolean, msg: Verbs): Verbs.AsObject;
  static serializeBinaryToWriter(message: Verbs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Verbs;
  static deserializeBinaryFromReader(message: Verbs, reader: jspb.BinaryReader): Verbs;
}

export namespace Verbs {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class WatchEvent extends jspb.Message {
  getType(): string;
  setType(value: string): WatchEvent;

  getObject(): k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension | undefined;
  setObject(value?: k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension): WatchEvent;
  hasObject(): boolean;
  clearObject(): WatchEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WatchEvent): WatchEvent.AsObject;
  static serializeBinaryToWriter(message: WatchEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchEvent;
  static deserializeBinaryFromReader(message: WatchEvent, reader: jspb.BinaryReader): WatchEvent;
}

export namespace WatchEvent {
  export type AsObject = {
    type: string,
    object?: k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.AsObject,
  }
}

