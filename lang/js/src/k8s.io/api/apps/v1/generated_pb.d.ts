import * as jspb from 'google-protobuf'

import * as k8s_io_api_core_v1_generated_pb from '../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';
import * as k8s_io_apimachinery_pkg_util_intstr_generated_pb from '../../../../k8s.io/apimachinery/pkg/util/intstr/generated_pb';


export class ControllerRevision extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ControllerRevision;
  hasMetadata(): boolean;
  clearMetadata(): ControllerRevision;

  getData(): k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension | undefined;
  setData(value?: k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension): ControllerRevision;
  hasData(): boolean;
  clearData(): ControllerRevision;

  getRevision(): number;
  setRevision(value: number): ControllerRevision;
  hasRevision(): boolean;
  clearRevision(): ControllerRevision;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControllerRevision.AsObject;
  static toObject(includeInstance: boolean, msg: ControllerRevision): ControllerRevision.AsObject;
  static serializeBinaryToWriter(message: ControllerRevision, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControllerRevision;
  static deserializeBinaryFromReader(message: ControllerRevision, reader: jspb.BinaryReader): ControllerRevision;
}

export namespace ControllerRevision {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    data?: k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.AsObject,
    revision?: number,
  }
}

export class ControllerRevisionList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ControllerRevisionList;
  hasMetadata(): boolean;
  clearMetadata(): ControllerRevisionList;

  getItemsList(): Array<ControllerRevision>;
  setItemsList(value: Array<ControllerRevision>): ControllerRevisionList;
  clearItemsList(): ControllerRevisionList;
  addItems(value?: ControllerRevision, index?: number): ControllerRevision;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControllerRevisionList.AsObject;
  static toObject(includeInstance: boolean, msg: ControllerRevisionList): ControllerRevisionList.AsObject;
  static serializeBinaryToWriter(message: ControllerRevisionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControllerRevisionList;
  static deserializeBinaryFromReader(message: ControllerRevisionList, reader: jspb.BinaryReader): ControllerRevisionList;
}

export namespace ControllerRevisionList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ControllerRevision.AsObject>,
  }
}

export class DaemonSet extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DaemonSet;
  hasMetadata(): boolean;
  clearMetadata(): DaemonSet;

  getSpec(): DaemonSetSpec | undefined;
  setSpec(value?: DaemonSetSpec): DaemonSet;
  hasSpec(): boolean;
  clearSpec(): DaemonSet;

  getStatus(): DaemonSetStatus | undefined;
  setStatus(value?: DaemonSetStatus): DaemonSet;
  hasStatus(): boolean;
  clearStatus(): DaemonSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaemonSet.AsObject;
  static toObject(includeInstance: boolean, msg: DaemonSet): DaemonSet.AsObject;
  static serializeBinaryToWriter(message: DaemonSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaemonSet;
  static deserializeBinaryFromReader(message: DaemonSet, reader: jspb.BinaryReader): DaemonSet;
}

export namespace DaemonSet {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DaemonSetSpec.AsObject,
    status?: DaemonSetStatus.AsObject,
  }
}

export class DaemonSetCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DaemonSetCondition;
  hasType(): boolean;
  clearType(): DaemonSetCondition;

  getStatus(): string;
  setStatus(value: string): DaemonSetCondition;
  hasStatus(): boolean;
  clearStatus(): DaemonSetCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DaemonSetCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DaemonSetCondition;

  getReason(): string;
  setReason(value: string): DaemonSetCondition;
  hasReason(): boolean;
  clearReason(): DaemonSetCondition;

  getMessage(): string;
  setMessage(value: string): DaemonSetCondition;
  hasMessage(): boolean;
  clearMessage(): DaemonSetCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaemonSetCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DaemonSetCondition): DaemonSetCondition.AsObject;
  static serializeBinaryToWriter(message: DaemonSetCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaemonSetCondition;
  static deserializeBinaryFromReader(message: DaemonSetCondition, reader: jspb.BinaryReader): DaemonSetCondition;
}

export namespace DaemonSetCondition {
  export type AsObject = {
    type?: string,
    status?: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason?: string,
    message?: string,
  }
}

export class DaemonSetList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DaemonSetList;
  hasMetadata(): boolean;
  clearMetadata(): DaemonSetList;

  getItemsList(): Array<DaemonSet>;
  setItemsList(value: Array<DaemonSet>): DaemonSetList;
  clearItemsList(): DaemonSetList;
  addItems(value?: DaemonSet, index?: number): DaemonSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaemonSetList.AsObject;
  static toObject(includeInstance: boolean, msg: DaemonSetList): DaemonSetList.AsObject;
  static serializeBinaryToWriter(message: DaemonSetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaemonSetList;
  static deserializeBinaryFromReader(message: DaemonSetList, reader: jspb.BinaryReader): DaemonSetList;
}

export namespace DaemonSetList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DaemonSet.AsObject>,
  }
}

export class DaemonSetSpec extends jspb.Message {
  getSelector(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector | undefined;
  setSelector(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector): DaemonSetSpec;
  hasSelector(): boolean;
  clearSelector(): DaemonSetSpec;

  getTemplate(): k8s_io_api_core_v1_generated_pb.PodTemplateSpec | undefined;
  setTemplate(value?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec): DaemonSetSpec;
  hasTemplate(): boolean;
  clearTemplate(): DaemonSetSpec;

  getUpdatestrategy(): DaemonSetUpdateStrategy | undefined;
  setUpdatestrategy(value?: DaemonSetUpdateStrategy): DaemonSetSpec;
  hasUpdatestrategy(): boolean;
  clearUpdatestrategy(): DaemonSetSpec;

  getMinreadyseconds(): number;
  setMinreadyseconds(value: number): DaemonSetSpec;
  hasMinreadyseconds(): boolean;
  clearMinreadyseconds(): DaemonSetSpec;

  getRevisionhistorylimit(): number;
  setRevisionhistorylimit(value: number): DaemonSetSpec;
  hasRevisionhistorylimit(): boolean;
  clearRevisionhistorylimit(): DaemonSetSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaemonSetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DaemonSetSpec): DaemonSetSpec.AsObject;
  static serializeBinaryToWriter(message: DaemonSetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaemonSetSpec;
  static deserializeBinaryFromReader(message: DaemonSetSpec, reader: jspb.BinaryReader): DaemonSetSpec;
}

export namespace DaemonSetSpec {
  export type AsObject = {
    selector?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector.AsObject,
    template?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec.AsObject,
    updatestrategy?: DaemonSetUpdateStrategy.AsObject,
    minreadyseconds?: number,
    revisionhistorylimit?: number,
  }
}

export class DaemonSetStatus extends jspb.Message {
  getCurrentnumberscheduled(): number;
  setCurrentnumberscheduled(value: number): DaemonSetStatus;
  hasCurrentnumberscheduled(): boolean;
  clearCurrentnumberscheduled(): DaemonSetStatus;

  getNumbermisscheduled(): number;
  setNumbermisscheduled(value: number): DaemonSetStatus;
  hasNumbermisscheduled(): boolean;
  clearNumbermisscheduled(): DaemonSetStatus;

  getDesirednumberscheduled(): number;
  setDesirednumberscheduled(value: number): DaemonSetStatus;
  hasDesirednumberscheduled(): boolean;
  clearDesirednumberscheduled(): DaemonSetStatus;

  getNumberready(): number;
  setNumberready(value: number): DaemonSetStatus;
  hasNumberready(): boolean;
  clearNumberready(): DaemonSetStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DaemonSetStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DaemonSetStatus;

  getUpdatednumberscheduled(): number;
  setUpdatednumberscheduled(value: number): DaemonSetStatus;
  hasUpdatednumberscheduled(): boolean;
  clearUpdatednumberscheduled(): DaemonSetStatus;

  getNumberavailable(): number;
  setNumberavailable(value: number): DaemonSetStatus;
  hasNumberavailable(): boolean;
  clearNumberavailable(): DaemonSetStatus;

  getNumberunavailable(): number;
  setNumberunavailable(value: number): DaemonSetStatus;
  hasNumberunavailable(): boolean;
  clearNumberunavailable(): DaemonSetStatus;

  getCollisioncount(): number;
  setCollisioncount(value: number): DaemonSetStatus;
  hasCollisioncount(): boolean;
  clearCollisioncount(): DaemonSetStatus;

  getConditionsList(): Array<DaemonSetCondition>;
  setConditionsList(value: Array<DaemonSetCondition>): DaemonSetStatus;
  clearConditionsList(): DaemonSetStatus;
  addConditions(value?: DaemonSetCondition, index?: number): DaemonSetCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaemonSetStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DaemonSetStatus): DaemonSetStatus.AsObject;
  static serializeBinaryToWriter(message: DaemonSetStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaemonSetStatus;
  static deserializeBinaryFromReader(message: DaemonSetStatus, reader: jspb.BinaryReader): DaemonSetStatus;
}

export namespace DaemonSetStatus {
  export type AsObject = {
    currentnumberscheduled?: number,
    numbermisscheduled?: number,
    desirednumberscheduled?: number,
    numberready?: number,
    observedgeneration?: number,
    updatednumberscheduled?: number,
    numberavailable?: number,
    numberunavailable?: number,
    collisioncount?: number,
    conditionsList: Array<DaemonSetCondition.AsObject>,
  }
}

export class DaemonSetUpdateStrategy extends jspb.Message {
  getType(): string;
  setType(value: string): DaemonSetUpdateStrategy;
  hasType(): boolean;
  clearType(): DaemonSetUpdateStrategy;

  getRollingupdate(): RollingUpdateDaemonSet | undefined;
  setRollingupdate(value?: RollingUpdateDaemonSet): DaemonSetUpdateStrategy;
  hasRollingupdate(): boolean;
  clearRollingupdate(): DaemonSetUpdateStrategy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaemonSetUpdateStrategy.AsObject;
  static toObject(includeInstance: boolean, msg: DaemonSetUpdateStrategy): DaemonSetUpdateStrategy.AsObject;
  static serializeBinaryToWriter(message: DaemonSetUpdateStrategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaemonSetUpdateStrategy;
  static deserializeBinaryFromReader(message: DaemonSetUpdateStrategy, reader: jspb.BinaryReader): DaemonSetUpdateStrategy;
}

export namespace DaemonSetUpdateStrategy {
  export type AsObject = {
    type?: string,
    rollingupdate?: RollingUpdateDaemonSet.AsObject,
  }
}

export class Deployment extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Deployment;
  hasMetadata(): boolean;
  clearMetadata(): Deployment;

  getSpec(): DeploymentSpec | undefined;
  setSpec(value?: DeploymentSpec): Deployment;
  hasSpec(): boolean;
  clearSpec(): Deployment;

  getStatus(): DeploymentStatus | undefined;
  setStatus(value?: DeploymentStatus): Deployment;
  hasStatus(): boolean;
  clearStatus(): Deployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployment.AsObject;
  static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
  static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployment;
  static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
}

export namespace Deployment {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DeploymentSpec.AsObject,
    status?: DeploymentStatus.AsObject,
  }
}

export class DeploymentCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DeploymentCondition;
  hasType(): boolean;
  clearType(): DeploymentCondition;

  getStatus(): string;
  setStatus(value: string): DeploymentCondition;
  hasStatus(): boolean;
  clearStatus(): DeploymentCondition;

  getLastupdatetime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdatetime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DeploymentCondition;
  hasLastupdatetime(): boolean;
  clearLastupdatetime(): DeploymentCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DeploymentCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DeploymentCondition;

  getReason(): string;
  setReason(value: string): DeploymentCondition;
  hasReason(): boolean;
  clearReason(): DeploymentCondition;

  getMessage(): string;
  setMessage(value: string): DeploymentCondition;
  hasMessage(): boolean;
  clearMessage(): DeploymentCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentCondition): DeploymentCondition.AsObject;
  static serializeBinaryToWriter(message: DeploymentCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentCondition;
  static deserializeBinaryFromReader(message: DeploymentCondition, reader: jspb.BinaryReader): DeploymentCondition;
}

export namespace DeploymentCondition {
  export type AsObject = {
    type?: string,
    status?: string,
    lastupdatetime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason?: string,
    message?: string,
  }
}

export class DeploymentList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DeploymentList;
  hasMetadata(): boolean;
  clearMetadata(): DeploymentList;

  getItemsList(): Array<Deployment>;
  setItemsList(value: Array<Deployment>): DeploymentList;
  clearItemsList(): DeploymentList;
  addItems(value?: Deployment, index?: number): Deployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentList.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentList): DeploymentList.AsObject;
  static serializeBinaryToWriter(message: DeploymentList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentList;
  static deserializeBinaryFromReader(message: DeploymentList, reader: jspb.BinaryReader): DeploymentList;
}

export namespace DeploymentList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Deployment.AsObject>,
  }
}

export class DeploymentSpec extends jspb.Message {
  getReplicas(): number;
  setReplicas(value: number): DeploymentSpec;
  hasReplicas(): boolean;
  clearReplicas(): DeploymentSpec;

  getSelector(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector | undefined;
  setSelector(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector): DeploymentSpec;
  hasSelector(): boolean;
  clearSelector(): DeploymentSpec;

  getTemplate(): k8s_io_api_core_v1_generated_pb.PodTemplateSpec | undefined;
  setTemplate(value?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec): DeploymentSpec;
  hasTemplate(): boolean;
  clearTemplate(): DeploymentSpec;

  getStrategy(): DeploymentStrategy | undefined;
  setStrategy(value?: DeploymentStrategy): DeploymentSpec;
  hasStrategy(): boolean;
  clearStrategy(): DeploymentSpec;

  getMinreadyseconds(): number;
  setMinreadyseconds(value: number): DeploymentSpec;
  hasMinreadyseconds(): boolean;
  clearMinreadyseconds(): DeploymentSpec;

  getRevisionhistorylimit(): number;
  setRevisionhistorylimit(value: number): DeploymentSpec;
  hasRevisionhistorylimit(): boolean;
  clearRevisionhistorylimit(): DeploymentSpec;

  getPaused(): boolean;
  setPaused(value: boolean): DeploymentSpec;
  hasPaused(): boolean;
  clearPaused(): DeploymentSpec;

  getProgressdeadlineseconds(): number;
  setProgressdeadlineseconds(value: number): DeploymentSpec;
  hasProgressdeadlineseconds(): boolean;
  clearProgressdeadlineseconds(): DeploymentSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentSpec): DeploymentSpec.AsObject;
  static serializeBinaryToWriter(message: DeploymentSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentSpec;
  static deserializeBinaryFromReader(message: DeploymentSpec, reader: jspb.BinaryReader): DeploymentSpec;
}

export namespace DeploymentSpec {
  export type AsObject = {
    replicas?: number,
    selector?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector.AsObject,
    template?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec.AsObject,
    strategy?: DeploymentStrategy.AsObject,
    minreadyseconds?: number,
    revisionhistorylimit?: number,
    paused?: boolean,
    progressdeadlineseconds?: number,
  }
}

export class DeploymentStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DeploymentStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DeploymentStatus;

  getReplicas(): number;
  setReplicas(value: number): DeploymentStatus;
  hasReplicas(): boolean;
  clearReplicas(): DeploymentStatus;

  getUpdatedreplicas(): number;
  setUpdatedreplicas(value: number): DeploymentStatus;
  hasUpdatedreplicas(): boolean;
  clearUpdatedreplicas(): DeploymentStatus;

  getReadyreplicas(): number;
  setReadyreplicas(value: number): DeploymentStatus;
  hasReadyreplicas(): boolean;
  clearReadyreplicas(): DeploymentStatus;

  getAvailablereplicas(): number;
  setAvailablereplicas(value: number): DeploymentStatus;
  hasAvailablereplicas(): boolean;
  clearAvailablereplicas(): DeploymentStatus;

  getUnavailablereplicas(): number;
  setUnavailablereplicas(value: number): DeploymentStatus;
  hasUnavailablereplicas(): boolean;
  clearUnavailablereplicas(): DeploymentStatus;

  getConditionsList(): Array<DeploymentCondition>;
  setConditionsList(value: Array<DeploymentCondition>): DeploymentStatus;
  clearConditionsList(): DeploymentStatus;
  addConditions(value?: DeploymentCondition, index?: number): DeploymentCondition;

  getCollisioncount(): number;
  setCollisioncount(value: number): DeploymentStatus;
  hasCollisioncount(): boolean;
  clearCollisioncount(): DeploymentStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentStatus): DeploymentStatus.AsObject;
  static serializeBinaryToWriter(message: DeploymentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentStatus;
  static deserializeBinaryFromReader(message: DeploymentStatus, reader: jspb.BinaryReader): DeploymentStatus;
}

export namespace DeploymentStatus {
  export type AsObject = {
    observedgeneration?: number,
    replicas?: number,
    updatedreplicas?: number,
    readyreplicas?: number,
    availablereplicas?: number,
    unavailablereplicas?: number,
    conditionsList: Array<DeploymentCondition.AsObject>,
    collisioncount?: number,
  }
}

export class DeploymentStrategy extends jspb.Message {
  getType(): string;
  setType(value: string): DeploymentStrategy;
  hasType(): boolean;
  clearType(): DeploymentStrategy;

  getRollingupdate(): RollingUpdateDeployment | undefined;
  setRollingupdate(value?: RollingUpdateDeployment): DeploymentStrategy;
  hasRollingupdate(): boolean;
  clearRollingupdate(): DeploymentStrategy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentStrategy.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentStrategy): DeploymentStrategy.AsObject;
  static serializeBinaryToWriter(message: DeploymentStrategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentStrategy;
  static deserializeBinaryFromReader(message: DeploymentStrategy, reader: jspb.BinaryReader): DeploymentStrategy;
}

export namespace DeploymentStrategy {
  export type AsObject = {
    type?: string,
    rollingupdate?: RollingUpdateDeployment.AsObject,
  }
}

export class ReplicaSet extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ReplicaSet;
  hasMetadata(): boolean;
  clearMetadata(): ReplicaSet;

  getSpec(): ReplicaSetSpec | undefined;
  setSpec(value?: ReplicaSetSpec): ReplicaSet;
  hasSpec(): boolean;
  clearSpec(): ReplicaSet;

  getStatus(): ReplicaSetStatus | undefined;
  setStatus(value?: ReplicaSetStatus): ReplicaSet;
  hasStatus(): boolean;
  clearStatus(): ReplicaSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicaSet.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicaSet): ReplicaSet.AsObject;
  static serializeBinaryToWriter(message: ReplicaSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicaSet;
  static deserializeBinaryFromReader(message: ReplicaSet, reader: jspb.BinaryReader): ReplicaSet;
}

export namespace ReplicaSet {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ReplicaSetSpec.AsObject,
    status?: ReplicaSetStatus.AsObject,
  }
}

export class ReplicaSetCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ReplicaSetCondition;
  hasType(): boolean;
  clearType(): ReplicaSetCondition;

  getStatus(): string;
  setStatus(value: string): ReplicaSetCondition;
  hasStatus(): boolean;
  clearStatus(): ReplicaSetCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReplicaSetCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ReplicaSetCondition;

  getReason(): string;
  setReason(value: string): ReplicaSetCondition;
  hasReason(): boolean;
  clearReason(): ReplicaSetCondition;

  getMessage(): string;
  setMessage(value: string): ReplicaSetCondition;
  hasMessage(): boolean;
  clearMessage(): ReplicaSetCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicaSetCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicaSetCondition): ReplicaSetCondition.AsObject;
  static serializeBinaryToWriter(message: ReplicaSetCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicaSetCondition;
  static deserializeBinaryFromReader(message: ReplicaSetCondition, reader: jspb.BinaryReader): ReplicaSetCondition;
}

export namespace ReplicaSetCondition {
  export type AsObject = {
    type?: string,
    status?: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason?: string,
    message?: string,
  }
}

export class ReplicaSetList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ReplicaSetList;
  hasMetadata(): boolean;
  clearMetadata(): ReplicaSetList;

  getItemsList(): Array<ReplicaSet>;
  setItemsList(value: Array<ReplicaSet>): ReplicaSetList;
  clearItemsList(): ReplicaSetList;
  addItems(value?: ReplicaSet, index?: number): ReplicaSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicaSetList.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicaSetList): ReplicaSetList.AsObject;
  static serializeBinaryToWriter(message: ReplicaSetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicaSetList;
  static deserializeBinaryFromReader(message: ReplicaSetList, reader: jspb.BinaryReader): ReplicaSetList;
}

export namespace ReplicaSetList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ReplicaSet.AsObject>,
  }
}

export class ReplicaSetSpec extends jspb.Message {
  getReplicas(): number;
  setReplicas(value: number): ReplicaSetSpec;
  hasReplicas(): boolean;
  clearReplicas(): ReplicaSetSpec;

  getMinreadyseconds(): number;
  setMinreadyseconds(value: number): ReplicaSetSpec;
  hasMinreadyseconds(): boolean;
  clearMinreadyseconds(): ReplicaSetSpec;

  getSelector(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector | undefined;
  setSelector(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector): ReplicaSetSpec;
  hasSelector(): boolean;
  clearSelector(): ReplicaSetSpec;

  getTemplate(): k8s_io_api_core_v1_generated_pb.PodTemplateSpec | undefined;
  setTemplate(value?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec): ReplicaSetSpec;
  hasTemplate(): boolean;
  clearTemplate(): ReplicaSetSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicaSetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicaSetSpec): ReplicaSetSpec.AsObject;
  static serializeBinaryToWriter(message: ReplicaSetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicaSetSpec;
  static deserializeBinaryFromReader(message: ReplicaSetSpec, reader: jspb.BinaryReader): ReplicaSetSpec;
}

export namespace ReplicaSetSpec {
  export type AsObject = {
    replicas?: number,
    minreadyseconds?: number,
    selector?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector.AsObject,
    template?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec.AsObject,
  }
}

export class ReplicaSetStatus extends jspb.Message {
  getReplicas(): number;
  setReplicas(value: number): ReplicaSetStatus;
  hasReplicas(): boolean;
  clearReplicas(): ReplicaSetStatus;

  getFullylabeledreplicas(): number;
  setFullylabeledreplicas(value: number): ReplicaSetStatus;
  hasFullylabeledreplicas(): boolean;
  clearFullylabeledreplicas(): ReplicaSetStatus;

  getReadyreplicas(): number;
  setReadyreplicas(value: number): ReplicaSetStatus;
  hasReadyreplicas(): boolean;
  clearReadyreplicas(): ReplicaSetStatus;

  getAvailablereplicas(): number;
  setAvailablereplicas(value: number): ReplicaSetStatus;
  hasAvailablereplicas(): boolean;
  clearAvailablereplicas(): ReplicaSetStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ReplicaSetStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): ReplicaSetStatus;

  getConditionsList(): Array<ReplicaSetCondition>;
  setConditionsList(value: Array<ReplicaSetCondition>): ReplicaSetStatus;
  clearConditionsList(): ReplicaSetStatus;
  addConditions(value?: ReplicaSetCondition, index?: number): ReplicaSetCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicaSetStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicaSetStatus): ReplicaSetStatus.AsObject;
  static serializeBinaryToWriter(message: ReplicaSetStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicaSetStatus;
  static deserializeBinaryFromReader(message: ReplicaSetStatus, reader: jspb.BinaryReader): ReplicaSetStatus;
}

export namespace ReplicaSetStatus {
  export type AsObject = {
    replicas?: number,
    fullylabeledreplicas?: number,
    readyreplicas?: number,
    availablereplicas?: number,
    observedgeneration?: number,
    conditionsList: Array<ReplicaSetCondition.AsObject>,
  }
}

export class RollingUpdateDaemonSet extends jspb.Message {
  getMaxunavailable(): k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString | undefined;
  setMaxunavailable(value?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString): RollingUpdateDaemonSet;
  hasMaxunavailable(): boolean;
  clearMaxunavailable(): RollingUpdateDaemonSet;

  getMaxsurge(): k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString | undefined;
  setMaxsurge(value?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString): RollingUpdateDaemonSet;
  hasMaxsurge(): boolean;
  clearMaxsurge(): RollingUpdateDaemonSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollingUpdateDaemonSet.AsObject;
  static toObject(includeInstance: boolean, msg: RollingUpdateDaemonSet): RollingUpdateDaemonSet.AsObject;
  static serializeBinaryToWriter(message: RollingUpdateDaemonSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollingUpdateDaemonSet;
  static deserializeBinaryFromReader(message: RollingUpdateDaemonSet, reader: jspb.BinaryReader): RollingUpdateDaemonSet;
}

export namespace RollingUpdateDaemonSet {
  export type AsObject = {
    maxunavailable?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString.AsObject,
    maxsurge?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString.AsObject,
  }
}

export class RollingUpdateDeployment extends jspb.Message {
  getMaxunavailable(): k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString | undefined;
  setMaxunavailable(value?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString): RollingUpdateDeployment;
  hasMaxunavailable(): boolean;
  clearMaxunavailable(): RollingUpdateDeployment;

  getMaxsurge(): k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString | undefined;
  setMaxsurge(value?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString): RollingUpdateDeployment;
  hasMaxsurge(): boolean;
  clearMaxsurge(): RollingUpdateDeployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollingUpdateDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: RollingUpdateDeployment): RollingUpdateDeployment.AsObject;
  static serializeBinaryToWriter(message: RollingUpdateDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollingUpdateDeployment;
  static deserializeBinaryFromReader(message: RollingUpdateDeployment, reader: jspb.BinaryReader): RollingUpdateDeployment;
}

export namespace RollingUpdateDeployment {
  export type AsObject = {
    maxunavailable?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString.AsObject,
    maxsurge?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString.AsObject,
  }
}

export class RollingUpdateStatefulSetStrategy extends jspb.Message {
  getPartition(): number;
  setPartition(value: number): RollingUpdateStatefulSetStrategy;
  hasPartition(): boolean;
  clearPartition(): RollingUpdateStatefulSetStrategy;

  getMaxunavailable(): k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString | undefined;
  setMaxunavailable(value?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString): RollingUpdateStatefulSetStrategy;
  hasMaxunavailable(): boolean;
  clearMaxunavailable(): RollingUpdateStatefulSetStrategy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollingUpdateStatefulSetStrategy.AsObject;
  static toObject(includeInstance: boolean, msg: RollingUpdateStatefulSetStrategy): RollingUpdateStatefulSetStrategy.AsObject;
  static serializeBinaryToWriter(message: RollingUpdateStatefulSetStrategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollingUpdateStatefulSetStrategy;
  static deserializeBinaryFromReader(message: RollingUpdateStatefulSetStrategy, reader: jspb.BinaryReader): RollingUpdateStatefulSetStrategy;
}

export namespace RollingUpdateStatefulSetStrategy {
  export type AsObject = {
    partition?: number,
    maxunavailable?: k8s_io_apimachinery_pkg_util_intstr_generated_pb.IntOrString.AsObject,
  }
}

export class StatefulSet extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): StatefulSet;
  hasMetadata(): boolean;
  clearMetadata(): StatefulSet;

  getSpec(): StatefulSetSpec | undefined;
  setSpec(value?: StatefulSetSpec): StatefulSet;
  hasSpec(): boolean;
  clearSpec(): StatefulSet;

  getStatus(): StatefulSetStatus | undefined;
  setStatus(value?: StatefulSetStatus): StatefulSet;
  hasStatus(): boolean;
  clearStatus(): StatefulSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatefulSet.AsObject;
  static toObject(includeInstance: boolean, msg: StatefulSet): StatefulSet.AsObject;
  static serializeBinaryToWriter(message: StatefulSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatefulSet;
  static deserializeBinaryFromReader(message: StatefulSet, reader: jspb.BinaryReader): StatefulSet;
}

export namespace StatefulSet {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: StatefulSetSpec.AsObject,
    status?: StatefulSetStatus.AsObject,
  }
}

export class StatefulSetCondition extends jspb.Message {
  getType(): string;
  setType(value: string): StatefulSetCondition;
  hasType(): boolean;
  clearType(): StatefulSetCondition;

  getStatus(): string;
  setStatus(value: string): StatefulSetCondition;
  hasStatus(): boolean;
  clearStatus(): StatefulSetCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StatefulSetCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): StatefulSetCondition;

  getReason(): string;
  setReason(value: string): StatefulSetCondition;
  hasReason(): boolean;
  clearReason(): StatefulSetCondition;

  getMessage(): string;
  setMessage(value: string): StatefulSetCondition;
  hasMessage(): boolean;
  clearMessage(): StatefulSetCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatefulSetCondition.AsObject;
  static toObject(includeInstance: boolean, msg: StatefulSetCondition): StatefulSetCondition.AsObject;
  static serializeBinaryToWriter(message: StatefulSetCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatefulSetCondition;
  static deserializeBinaryFromReader(message: StatefulSetCondition, reader: jspb.BinaryReader): StatefulSetCondition;
}

export namespace StatefulSetCondition {
  export type AsObject = {
    type?: string,
    status?: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason?: string,
    message?: string,
  }
}

export class StatefulSetList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): StatefulSetList;
  hasMetadata(): boolean;
  clearMetadata(): StatefulSetList;

  getItemsList(): Array<StatefulSet>;
  setItemsList(value: Array<StatefulSet>): StatefulSetList;
  clearItemsList(): StatefulSetList;
  addItems(value?: StatefulSet, index?: number): StatefulSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatefulSetList.AsObject;
  static toObject(includeInstance: boolean, msg: StatefulSetList): StatefulSetList.AsObject;
  static serializeBinaryToWriter(message: StatefulSetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatefulSetList;
  static deserializeBinaryFromReader(message: StatefulSetList, reader: jspb.BinaryReader): StatefulSetList;
}

export namespace StatefulSetList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<StatefulSet.AsObject>,
  }
}

export class StatefulSetPersistentVolumeClaimRetentionPolicy extends jspb.Message {
  getWhendeleted(): string;
  setWhendeleted(value: string): StatefulSetPersistentVolumeClaimRetentionPolicy;
  hasWhendeleted(): boolean;
  clearWhendeleted(): StatefulSetPersistentVolumeClaimRetentionPolicy;

  getWhenscaled(): string;
  setWhenscaled(value: string): StatefulSetPersistentVolumeClaimRetentionPolicy;
  hasWhenscaled(): boolean;
  clearWhenscaled(): StatefulSetPersistentVolumeClaimRetentionPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatefulSetPersistentVolumeClaimRetentionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: StatefulSetPersistentVolumeClaimRetentionPolicy): StatefulSetPersistentVolumeClaimRetentionPolicy.AsObject;
  static serializeBinaryToWriter(message: StatefulSetPersistentVolumeClaimRetentionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatefulSetPersistentVolumeClaimRetentionPolicy;
  static deserializeBinaryFromReader(message: StatefulSetPersistentVolumeClaimRetentionPolicy, reader: jspb.BinaryReader): StatefulSetPersistentVolumeClaimRetentionPolicy;
}

export namespace StatefulSetPersistentVolumeClaimRetentionPolicy {
  export type AsObject = {
    whendeleted?: string,
    whenscaled?: string,
  }
}

export class StatefulSetSpec extends jspb.Message {
  getReplicas(): number;
  setReplicas(value: number): StatefulSetSpec;
  hasReplicas(): boolean;
  clearReplicas(): StatefulSetSpec;

  getSelector(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector | undefined;
  setSelector(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector): StatefulSetSpec;
  hasSelector(): boolean;
  clearSelector(): StatefulSetSpec;

  getTemplate(): k8s_io_api_core_v1_generated_pb.PodTemplateSpec | undefined;
  setTemplate(value?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec): StatefulSetSpec;
  hasTemplate(): boolean;
  clearTemplate(): StatefulSetSpec;

  getVolumeclaimtemplatesList(): Array<k8s_io_api_core_v1_generated_pb.PersistentVolumeClaim>;
  setVolumeclaimtemplatesList(value: Array<k8s_io_api_core_v1_generated_pb.PersistentVolumeClaim>): StatefulSetSpec;
  clearVolumeclaimtemplatesList(): StatefulSetSpec;
  addVolumeclaimtemplates(value?: k8s_io_api_core_v1_generated_pb.PersistentVolumeClaim, index?: number): k8s_io_api_core_v1_generated_pb.PersistentVolumeClaim;

  getServicename(): string;
  setServicename(value: string): StatefulSetSpec;
  hasServicename(): boolean;
  clearServicename(): StatefulSetSpec;

  getPodmanagementpolicy(): string;
  setPodmanagementpolicy(value: string): StatefulSetSpec;
  hasPodmanagementpolicy(): boolean;
  clearPodmanagementpolicy(): StatefulSetSpec;

  getUpdatestrategy(): StatefulSetUpdateStrategy | undefined;
  setUpdatestrategy(value?: StatefulSetUpdateStrategy): StatefulSetSpec;
  hasUpdatestrategy(): boolean;
  clearUpdatestrategy(): StatefulSetSpec;

  getRevisionhistorylimit(): number;
  setRevisionhistorylimit(value: number): StatefulSetSpec;
  hasRevisionhistorylimit(): boolean;
  clearRevisionhistorylimit(): StatefulSetSpec;

  getMinreadyseconds(): number;
  setMinreadyseconds(value: number): StatefulSetSpec;
  hasMinreadyseconds(): boolean;
  clearMinreadyseconds(): StatefulSetSpec;

  getPersistentvolumeclaimretentionpolicy(): StatefulSetPersistentVolumeClaimRetentionPolicy | undefined;
  setPersistentvolumeclaimretentionpolicy(value?: StatefulSetPersistentVolumeClaimRetentionPolicy): StatefulSetSpec;
  hasPersistentvolumeclaimretentionpolicy(): boolean;
  clearPersistentvolumeclaimretentionpolicy(): StatefulSetSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatefulSetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: StatefulSetSpec): StatefulSetSpec.AsObject;
  static serializeBinaryToWriter(message: StatefulSetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatefulSetSpec;
  static deserializeBinaryFromReader(message: StatefulSetSpec, reader: jspb.BinaryReader): StatefulSetSpec;
}

export namespace StatefulSetSpec {
  export type AsObject = {
    replicas?: number,
    selector?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.LabelSelector.AsObject,
    template?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec.AsObject,
    volumeclaimtemplatesList: Array<k8s_io_api_core_v1_generated_pb.PersistentVolumeClaim.AsObject>,
    servicename?: string,
    podmanagementpolicy?: string,
    updatestrategy?: StatefulSetUpdateStrategy.AsObject,
    revisionhistorylimit?: number,
    minreadyseconds?: number,
    persistentvolumeclaimretentionpolicy?: StatefulSetPersistentVolumeClaimRetentionPolicy.AsObject,
  }
}

export class StatefulSetStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): StatefulSetStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): StatefulSetStatus;

  getReplicas(): number;
  setReplicas(value: number): StatefulSetStatus;
  hasReplicas(): boolean;
  clearReplicas(): StatefulSetStatus;

  getReadyreplicas(): number;
  setReadyreplicas(value: number): StatefulSetStatus;
  hasReadyreplicas(): boolean;
  clearReadyreplicas(): StatefulSetStatus;

  getCurrentreplicas(): number;
  setCurrentreplicas(value: number): StatefulSetStatus;
  hasCurrentreplicas(): boolean;
  clearCurrentreplicas(): StatefulSetStatus;

  getUpdatedreplicas(): number;
  setUpdatedreplicas(value: number): StatefulSetStatus;
  hasUpdatedreplicas(): boolean;
  clearUpdatedreplicas(): StatefulSetStatus;

  getCurrentrevision(): string;
  setCurrentrevision(value: string): StatefulSetStatus;
  hasCurrentrevision(): boolean;
  clearCurrentrevision(): StatefulSetStatus;

  getUpdaterevision(): string;
  setUpdaterevision(value: string): StatefulSetStatus;
  hasUpdaterevision(): boolean;
  clearUpdaterevision(): StatefulSetStatus;

  getCollisioncount(): number;
  setCollisioncount(value: number): StatefulSetStatus;
  hasCollisioncount(): boolean;
  clearCollisioncount(): StatefulSetStatus;

  getConditionsList(): Array<StatefulSetCondition>;
  setConditionsList(value: Array<StatefulSetCondition>): StatefulSetStatus;
  clearConditionsList(): StatefulSetStatus;
  addConditions(value?: StatefulSetCondition, index?: number): StatefulSetCondition;

  getAvailablereplicas(): number;
  setAvailablereplicas(value: number): StatefulSetStatus;
  hasAvailablereplicas(): boolean;
  clearAvailablereplicas(): StatefulSetStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatefulSetStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StatefulSetStatus): StatefulSetStatus.AsObject;
  static serializeBinaryToWriter(message: StatefulSetStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatefulSetStatus;
  static deserializeBinaryFromReader(message: StatefulSetStatus, reader: jspb.BinaryReader): StatefulSetStatus;
}

export namespace StatefulSetStatus {
  export type AsObject = {
    observedgeneration?: number,
    replicas?: number,
    readyreplicas?: number,
    currentreplicas?: number,
    updatedreplicas?: number,
    currentrevision?: string,
    updaterevision?: string,
    collisioncount?: number,
    conditionsList: Array<StatefulSetCondition.AsObject>,
    availablereplicas?: number,
  }
}

export class StatefulSetUpdateStrategy extends jspb.Message {
  getType(): string;
  setType(value: string): StatefulSetUpdateStrategy;
  hasType(): boolean;
  clearType(): StatefulSetUpdateStrategy;

  getRollingupdate(): RollingUpdateStatefulSetStrategy | undefined;
  setRollingupdate(value?: RollingUpdateStatefulSetStrategy): StatefulSetUpdateStrategy;
  hasRollingupdate(): boolean;
  clearRollingupdate(): StatefulSetUpdateStrategy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatefulSetUpdateStrategy.AsObject;
  static toObject(includeInstance: boolean, msg: StatefulSetUpdateStrategy): StatefulSetUpdateStrategy.AsObject;
  static serializeBinaryToWriter(message: StatefulSetUpdateStrategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatefulSetUpdateStrategy;
  static deserializeBinaryFromReader(message: StatefulSetUpdateStrategy, reader: jspb.BinaryReader): StatefulSetUpdateStrategy;
}

export namespace StatefulSetUpdateStrategy {
  export type AsObject = {
    type?: string,
    rollingupdate?: RollingUpdateStatefulSetStrategy.AsObject,
  }
}

