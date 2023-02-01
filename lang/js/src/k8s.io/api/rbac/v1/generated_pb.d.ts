import * as jspb from 'google-protobuf'

import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AggregationRule extends jspb.Message {
  getClusterroleselectorsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector>;
  setClusterroleselectorsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector>): AggregationRule;
  clearClusterroleselectorsList(): AggregationRule;
  addClusterroleselectors(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregationRule.AsObject;
  static toObject(includeInstance: boolean, msg: AggregationRule): AggregationRule.AsObject;
  static serializeBinaryToWriter(message: AggregationRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregationRule;
  static deserializeBinaryFromReader(message: AggregationRule, reader: jspb.BinaryReader): AggregationRule;
}

export namespace AggregationRule {
  export type AsObject = {
    clusterroleselectorsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector.AsObject>,
  }
}

export class ClusterRole extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ClusterRole;
  hasMetadata(): boolean;
  clearMetadata(): ClusterRole;

  getRulesList(): Array<PolicyRule>;
  setRulesList(value: Array<PolicyRule>): ClusterRole;
  clearRulesList(): ClusterRole;
  addRules(value?: PolicyRule, index?: number): PolicyRule;

  getAggregationrule(): AggregationRule | undefined;
  setAggregationrule(value?: AggregationRule): ClusterRole;
  hasAggregationrule(): boolean;
  clearAggregationrule(): ClusterRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterRole.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterRole): ClusterRole.AsObject;
  static serializeBinaryToWriter(message: ClusterRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterRole;
  static deserializeBinaryFromReader(message: ClusterRole, reader: jspb.BinaryReader): ClusterRole;
}

export namespace ClusterRole {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    rulesList: Array<PolicyRule.AsObject>,
    aggregationrule?: AggregationRule.AsObject,
  }
}

export class ClusterRoleBinding extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ClusterRoleBinding;
  hasMetadata(): boolean;
  clearMetadata(): ClusterRoleBinding;

  getSubjectsList(): Array<Subject>;
  setSubjectsList(value: Array<Subject>): ClusterRoleBinding;
  clearSubjectsList(): ClusterRoleBinding;
  addSubjects(value?: Subject, index?: number): Subject;

  getRoleref(): RoleRef | undefined;
  setRoleref(value?: RoleRef): ClusterRoleBinding;
  hasRoleref(): boolean;
  clearRoleref(): ClusterRoleBinding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterRoleBinding.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterRoleBinding): ClusterRoleBinding.AsObject;
  static serializeBinaryToWriter(message: ClusterRoleBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterRoleBinding;
  static deserializeBinaryFromReader(message: ClusterRoleBinding, reader: jspb.BinaryReader): ClusterRoleBinding;
}

export namespace ClusterRoleBinding {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    subjectsList: Array<Subject.AsObject>,
    roleref?: RoleRef.AsObject,
  }
}

export class ClusterRoleBindingList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ClusterRoleBindingList;
  hasMetadata(): boolean;
  clearMetadata(): ClusterRoleBindingList;

  getItemsList(): Array<ClusterRoleBinding>;
  setItemsList(value: Array<ClusterRoleBinding>): ClusterRoleBindingList;
  clearItemsList(): ClusterRoleBindingList;
  addItems(value?: ClusterRoleBinding, index?: number): ClusterRoleBinding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterRoleBindingList.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterRoleBindingList): ClusterRoleBindingList.AsObject;
  static serializeBinaryToWriter(message: ClusterRoleBindingList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterRoleBindingList;
  static deserializeBinaryFromReader(message: ClusterRoleBindingList, reader: jspb.BinaryReader): ClusterRoleBindingList;
}

export namespace ClusterRoleBindingList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ClusterRoleBinding.AsObject>,
  }
}

export class ClusterRoleList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ClusterRoleList;
  hasMetadata(): boolean;
  clearMetadata(): ClusterRoleList;

  getItemsList(): Array<ClusterRole>;
  setItemsList(value: Array<ClusterRole>): ClusterRoleList;
  clearItemsList(): ClusterRoleList;
  addItems(value?: ClusterRole, index?: number): ClusterRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterRoleList.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterRoleList): ClusterRoleList.AsObject;
  static serializeBinaryToWriter(message: ClusterRoleList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterRoleList;
  static deserializeBinaryFromReader(message: ClusterRoleList, reader: jspb.BinaryReader): ClusterRoleList;
}

export namespace ClusterRoleList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ClusterRole.AsObject>,
  }
}

export class PolicyRule extends jspb.Message {
  getVerbsList(): Array<string>;
  setVerbsList(value: Array<string>): PolicyRule;
  clearVerbsList(): PolicyRule;
  addVerbs(value: string, index?: number): PolicyRule;

  getApigroupsList(): Array<string>;
  setApigroupsList(value: Array<string>): PolicyRule;
  clearApigroupsList(): PolicyRule;
  addApigroups(value: string, index?: number): PolicyRule;

  getResourcesList(): Array<string>;
  setResourcesList(value: Array<string>): PolicyRule;
  clearResourcesList(): PolicyRule;
  addResources(value: string, index?: number): PolicyRule;

  getResourcenamesList(): Array<string>;
  setResourcenamesList(value: Array<string>): PolicyRule;
  clearResourcenamesList(): PolicyRule;
  addResourcenames(value: string, index?: number): PolicyRule;

  getNonresourceurlsList(): Array<string>;
  setNonresourceurlsList(value: Array<string>): PolicyRule;
  clearNonresourceurlsList(): PolicyRule;
  addNonresourceurls(value: string, index?: number): PolicyRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyRule.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyRule): PolicyRule.AsObject;
  static serializeBinaryToWriter(message: PolicyRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyRule;
  static deserializeBinaryFromReader(message: PolicyRule, reader: jspb.BinaryReader): PolicyRule;
}

export namespace PolicyRule {
  export type AsObject = {
    verbsList: Array<string>,
    apigroupsList: Array<string>,
    resourcesList: Array<string>,
    resourcenamesList: Array<string>,
    nonresourceurlsList: Array<string>,
  }
}

export class Role extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Role;
  hasMetadata(): boolean;
  clearMetadata(): Role;

  getRulesList(): Array<PolicyRule>;
  setRulesList(value: Array<PolicyRule>): Role;
  clearRulesList(): Role;
  addRules(value?: PolicyRule, index?: number): PolicyRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    rulesList: Array<PolicyRule.AsObject>,
  }
}

export class RoleBinding extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): RoleBinding;
  hasMetadata(): boolean;
  clearMetadata(): RoleBinding;

  getSubjectsList(): Array<Subject>;
  setSubjectsList(value: Array<Subject>): RoleBinding;
  clearSubjectsList(): RoleBinding;
  addSubjects(value?: Subject, index?: number): Subject;

  getRoleref(): RoleRef | undefined;
  setRoleref(value?: RoleRef): RoleBinding;
  hasRoleref(): boolean;
  clearRoleref(): RoleBinding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleBinding.AsObject;
  static toObject(includeInstance: boolean, msg: RoleBinding): RoleBinding.AsObject;
  static serializeBinaryToWriter(message: RoleBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleBinding;
  static deserializeBinaryFromReader(message: RoleBinding, reader: jspb.BinaryReader): RoleBinding;
}

export namespace RoleBinding {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    subjectsList: Array<Subject.AsObject>,
    roleref?: RoleRef.AsObject,
  }
}

export class RoleBindingList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): RoleBindingList;
  hasMetadata(): boolean;
  clearMetadata(): RoleBindingList;

  getItemsList(): Array<RoleBinding>;
  setItemsList(value: Array<RoleBinding>): RoleBindingList;
  clearItemsList(): RoleBindingList;
  addItems(value?: RoleBinding, index?: number): RoleBinding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleBindingList.AsObject;
  static toObject(includeInstance: boolean, msg: RoleBindingList): RoleBindingList.AsObject;
  static serializeBinaryToWriter(message: RoleBindingList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleBindingList;
  static deserializeBinaryFromReader(message: RoleBindingList, reader: jspb.BinaryReader): RoleBindingList;
}

export namespace RoleBindingList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<RoleBinding.AsObject>,
  }
}

export class RoleList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): RoleList;
  hasMetadata(): boolean;
  clearMetadata(): RoleList;

  getItemsList(): Array<Role>;
  setItemsList(value: Array<Role>): RoleList;
  clearItemsList(): RoleList;
  addItems(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleList.AsObject;
  static toObject(includeInstance: boolean, msg: RoleList): RoleList.AsObject;
  static serializeBinaryToWriter(message: RoleList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleList;
  static deserializeBinaryFromReader(message: RoleList, reader: jspb.BinaryReader): RoleList;
}

export namespace RoleList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Role.AsObject>,
  }
}

export class RoleRef extends jspb.Message {
  getApigroup(): string;
  setApigroup(value: string): RoleRef;
  hasApigroup(): boolean;
  clearApigroup(): RoleRef;

  getKind(): string;
  setKind(value: string): RoleRef;
  hasKind(): boolean;
  clearKind(): RoleRef;

  getName(): string;
  setName(value: string): RoleRef;
  hasName(): boolean;
  clearName(): RoleRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleRef.AsObject;
  static toObject(includeInstance: boolean, msg: RoleRef): RoleRef.AsObject;
  static serializeBinaryToWriter(message: RoleRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleRef;
  static deserializeBinaryFromReader(message: RoleRef, reader: jspb.BinaryReader): RoleRef;
}

export namespace RoleRef {
  export type AsObject = {
    apigroup?: string,
    kind?: string,
    name?: string,
  }
}

export class Subject extends jspb.Message {
  getKind(): string;
  setKind(value: string): Subject;
  hasKind(): boolean;
  clearKind(): Subject;

  getApigroup(): string;
  setApigroup(value: string): Subject;
  hasApigroup(): boolean;
  clearApigroup(): Subject;

  getName(): string;
  setName(value: string): Subject;
  hasName(): boolean;
  clearName(): Subject;

  getNamespace(): string;
  setNamespace(value: string): Subject;
  hasNamespace(): boolean;
  clearNamespace(): Subject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subject.AsObject;
  static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
  static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subject;
  static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
}

export namespace Subject {
  export type AsObject = {
    kind?: string,
    apigroup?: string,
    name?: string,
    namespace?: string,
  }
}

