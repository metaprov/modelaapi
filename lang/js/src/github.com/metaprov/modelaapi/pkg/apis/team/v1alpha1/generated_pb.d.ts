import * as jspb from 'google-protobuf'

import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class ActionItem extends jspb.Message {
  getAction(): string;
  setAction(value: string): ActionItem;

  getDue(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setDue(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ActionItem;
  hasDue(): boolean;
  clearDue(): ActionItem;

  getAssignedto(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setAssignedto(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ActionItem;
  hasAssignedto(): boolean;
  clearAssignedto(): ActionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionItem.AsObject;
  static toObject(includeInstance: boolean, msg: ActionItem): ActionItem.AsObject;
  static serializeBinaryToWriter(message: ActionItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionItem;
  static deserializeBinaryFromReader(message: ActionItem, reader: jspb.BinaryReader): ActionItem;
}

export namespace ActionItem {
  export type AsObject = {
    action: string,
    due?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    assignedto?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class CheckListItem extends jspb.Message {
  getId(): string;
  setId(value: string): CheckListItem;

  getInstruction(): string;
  setInstruction(value: string): CheckListItem;

  getEnabled(): boolean;
  setEnabled(value: boolean): CheckListItem;

  getCondition(): string;
  setCondition(value: string): CheckListItem;

  getCommand(): string;
  setCommand(value: string): CheckListItem;

  getPrecondition(): string;
  setPrecondition(value: string): CheckListItem;

  getPostcondition(): string;
  setPostcondition(value: string): CheckListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckListItem.AsObject;
  static toObject(includeInstance: boolean, msg: CheckListItem): CheckListItem.AsObject;
  static serializeBinaryToWriter(message: CheckListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckListItem;
  static deserializeBinaryFromReader(message: CheckListItem, reader: jspb.BinaryReader): CheckListItem;
}

export namespace CheckListItem {
  export type AsObject = {
    id: string,
    instruction: string,
    enabled: boolean,
    condition: string,
    command: string,
    precondition: string,
    postcondition: string,
  }
}

export class Comment extends jspb.Message {
  getId(): string;
  setId(value: string): Comment;

  getAuthorref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setAuthorref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): Comment;
  hasAuthorref(): boolean;
  clearAuthorref(): Comment;

  getReplyto(): string;
  setReplyto(value: string): Comment;

  getContent(): string;
  setContent(value: string): Comment;

  getPostedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setPostedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): Comment;
  hasPostedat(): boolean;
  clearPostedat(): Comment;

  getSent(): boolean;
  setSent(value: boolean): Comment;

  getPinned(): boolean;
  setPinned(value: boolean): Comment;

  getReplyindicationid(): string;
  setReplyindicationid(value: string): Comment;

  getImageurl(): string;
  setImageurl(value: string): Comment;

  getAccountmentionid(): string;
  setAccountmentionid(value: string): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    id: string,
    authorref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    replyto: string,
    content: string,
    postedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    sent: boolean,
    pinned: boolean,
    replyindicationid: string,
    imageurl: string,
    accountmentionid: string,
  }
}

export class Meeting extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Meeting;
  hasMetadata(): boolean;
  clearMetadata(): Meeting;

  getSpec(): MeetingSpec | undefined;
  setSpec(value?: MeetingSpec): Meeting;
  hasSpec(): boolean;
  clearSpec(): Meeting;

  getStatus(): MeetingStatus | undefined;
  setStatus(value?: MeetingStatus): Meeting;
  hasStatus(): boolean;
  clearStatus(): Meeting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Meeting.AsObject;
  static toObject(includeInstance: boolean, msg: Meeting): Meeting.AsObject;
  static serializeBinaryToWriter(message: Meeting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Meeting;
  static deserializeBinaryFromReader(message: Meeting, reader: jspb.BinaryReader): Meeting;
}

export namespace Meeting {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: MeetingSpec.AsObject,
    status?: MeetingStatus.AsObject,
  }
}

export class MeetingCondition extends jspb.Message {
  getType(): string;
  setType(value: string): MeetingCondition;

  getStatus(): string;
  setStatus(value: string): MeetingCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): MeetingCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): MeetingCondition;

  getReason(): string;
  setReason(value: string): MeetingCondition;

  getMessage(): string;
  setMessage(value: string): MeetingCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeetingCondition.AsObject;
  static toObject(includeInstance: boolean, msg: MeetingCondition): MeetingCondition.AsObject;
  static serializeBinaryToWriter(message: MeetingCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeetingCondition;
  static deserializeBinaryFromReader(message: MeetingCondition, reader: jspb.BinaryReader): MeetingCondition;
}

export namespace MeetingCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class MeetingList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): MeetingList;
  hasMetadata(): boolean;
  clearMetadata(): MeetingList;

  getItemsList(): Array<Meeting>;
  setItemsList(value: Array<Meeting>): MeetingList;
  clearItemsList(): MeetingList;
  addItems(value?: Meeting, index?: number): Meeting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeetingList.AsObject;
  static toObject(includeInstance: boolean, msg: MeetingList): MeetingList.AsObject;
  static serializeBinaryToWriter(message: MeetingList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeetingList;
  static deserializeBinaryFromReader(message: MeetingList, reader: jspb.BinaryReader): MeetingList;
}

export namespace MeetingList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Meeting.AsObject>,
  }
}

export class MeetingSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): MeetingSpec;

  getAgenda(): string;
  setAgenda(value: string): MeetingSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): MeetingSpec;
  hasEntityref(): boolean;
  clearEntityref(): MeetingSpec;

  getNotifiername(): string;
  setNotifiername(value: string): MeetingSpec;

  getParticipantsList(): Array<string>;
  setParticipantsList(value: Array<string>): MeetingSpec;
  clearParticipantsList(): MeetingSpec;
  addParticipants(value: string, index?: number): MeetingSpec;

  getFlagged(): boolean;
  setFlagged(value: boolean): MeetingSpec;

  getReminder(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setReminder(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): MeetingSpec;
  hasReminder(): boolean;
  clearReminder(): MeetingSpec;

  getNotes(): string;
  setNotes(value: string): MeetingSpec;

  getActionitemsList(): Array<ActionItem>;
  setActionitemsList(value: Array<ActionItem>): MeetingSpec;
  clearActionitemsList(): MeetingSpec;
  addActionitems(value?: ActionItem, index?: number): ActionItem;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): MeetingSpec;
  hasTenantref(): boolean;
  clearTenantref(): MeetingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeetingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MeetingSpec): MeetingSpec.AsObject;
  static serializeBinaryToWriter(message: MeetingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeetingSpec;
  static deserializeBinaryFromReader(message: MeetingSpec, reader: jspb.BinaryReader): MeetingSpec;
}

export namespace MeetingSpec {
  export type AsObject = {
    description: string,
    agenda: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    notifiername: string,
    participantsList: Array<string>,
    flagged: boolean,
    reminder?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    notes: string,
    actionitemsList: Array<ActionItem.AsObject>,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class MeetingStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): MeetingStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): MeetingStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): MeetingStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): MeetingStatus;

  getConditionsList(): Array<MeetingCondition>;
  setConditionsList(value: Array<MeetingCondition>): MeetingStatus;
  clearConditionsList(): MeetingStatus;
  addConditions(value?: MeetingCondition, index?: number): MeetingCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeetingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: MeetingStatus): MeetingStatus.AsObject;
  static serializeBinaryToWriter(message: MeetingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeetingStatus;
  static deserializeBinaryFromReader(message: MeetingStatus, reader: jspb.BinaryReader): MeetingStatus;
}

export namespace MeetingStatus {
  export type AsObject = {
    phase: string,
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<MeetingCondition.AsObject>,
  }
}

export class PostMortem extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PostMortem;
  hasMetadata(): boolean;
  clearMetadata(): PostMortem;

  getSpec(): PostMortemSpec | undefined;
  setSpec(value?: PostMortemSpec): PostMortem;
  hasSpec(): boolean;
  clearSpec(): PostMortem;

  getStatus(): PostMortemStatus | undefined;
  setStatus(value?: PostMortemStatus): PostMortem;
  hasStatus(): boolean;
  clearStatus(): PostMortem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortem.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortem): PostMortem.AsObject;
  static serializeBinaryToWriter(message: PostMortem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortem;
  static deserializeBinaryFromReader(message: PostMortem, reader: jspb.BinaryReader): PostMortem;
}

export namespace PostMortem {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PostMortemSpec.AsObject,
    status?: PostMortemStatus.AsObject,
  }
}

export class PostMortemCondition extends jspb.Message {
  getType(): string;
  setType(value: string): PostMortemCondition;

  getStatus(): string;
  setStatus(value: string): PostMortemCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PostMortemCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): PostMortemCondition;

  getReason(): string;
  setReason(value: string): PostMortemCondition;

  getMessage(): string;
  setMessage(value: string): PostMortemCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemCondition.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemCondition): PostMortemCondition.AsObject;
  static serializeBinaryToWriter(message: PostMortemCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemCondition;
  static deserializeBinaryFromReader(message: PostMortemCondition, reader: jspb.BinaryReader): PostMortemCondition;
}

export namespace PostMortemCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class PostMortemList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PostMortemList;
  hasMetadata(): boolean;
  clearMetadata(): PostMortemList;

  getItemsList(): Array<PostMortem>;
  setItemsList(value: Array<PostMortem>): PostMortemList;
  clearItemsList(): PostMortemList;
  addItems(value?: PostMortem, index?: number): PostMortem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemList.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemList): PostMortemList.AsObject;
  static serializeBinaryToWriter(message: PostMortemList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemList;
  static deserializeBinaryFromReader(message: PostMortemList, reader: jspb.BinaryReader): PostMortemList;
}

export namespace PostMortemList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<PostMortem.AsObject>,
  }
}

export class PostMortemSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): PostMortemSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PostMortemSpec;
  hasEntityref(): boolean;
  clearEntityref(): PostMortemSpec;

  getLocationref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLocationref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PostMortemSpec;
  hasLocationref(): boolean;
  clearLocationref(): PostMortemSpec;

  getHandledbyList(): Array<k8s_io_api_core_v1_generated_pb.ObjectReference>;
  setHandledbyList(value: Array<k8s_io_api_core_v1_generated_pb.ObjectReference>): PostMortemSpec;
  clearHandledbyList(): PostMortemSpec;
  addHandledby(value?: k8s_io_api_core_v1_generated_pb.ObjectReference, index?: number): k8s_io_api_core_v1_generated_pb.ObjectReference;

  getAlertsList(): Array<RaisedAlert>;
  setAlertsList(value: Array<RaisedAlert>): PostMortemSpec;
  clearAlertsList(): PostMortemSpec;
  addAlerts(value?: RaisedAlert, index?: number): RaisedAlert;

  getTimelineList(): Array<TimeLineEvent>;
  setTimelineList(value: Array<TimeLineEvent>): PostMortemSpec;
  clearTimelineList(): PostMortemSpec;
  addTimeline(value?: TimeLineEvent, index?: number): TimeLineEvent;

  getRootcause(): string;
  setRootcause(value: string): PostMortemSpec;

  getSummary(): string;
  setSummary(value: string): PostMortemSpec;

  getOwner(): string;
  setOwner(value: string): PostMortemSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PostMortemSpec;
  hasTenantref(): boolean;
  clearTenantref(): PostMortemSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemSpec): PostMortemSpec.AsObject;
  static serializeBinaryToWriter(message: PostMortemSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemSpec;
  static deserializeBinaryFromReader(message: PostMortemSpec, reader: jspb.BinaryReader): PostMortemSpec;
}

export namespace PostMortemSpec {
  export type AsObject = {
    description: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    locationref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    handledbyList: Array<k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject>,
    alertsList: Array<RaisedAlert.AsObject>,
    timelineList: Array<TimeLineEvent.AsObject>,
    rootcause: string,
    summary: string,
    owner: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class PostMortemStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): PostMortemStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PostMortemStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): PostMortemStatus;

  getConditionsList(): Array<PostMortemCondition>;
  setConditionsList(value: Array<PostMortemCondition>): PostMortemStatus;
  clearConditionsList(): PostMortemStatus;
  addConditions(value?: PostMortemCondition, index?: number): PostMortemCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemStatus): PostMortemStatus.AsObject;
  static serializeBinaryToWriter(message: PostMortemStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemStatus;
  static deserializeBinaryFromReader(message: PostMortemStatus, reader: jspb.BinaryReader): PostMortemStatus;
}

export namespace PostMortemStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<PostMortemCondition.AsObject>,
  }
}

export class RaisedAlert extends jspb.Message {
  getName(): string;
  setName(value: string): RaisedAlert;

  getAt(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setAt(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RaisedAlert;
  hasAt(): boolean;
  clearAt(): RaisedAlert;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RaisedAlert.AsObject;
  static toObject(includeInstance: boolean, msg: RaisedAlert): RaisedAlert.AsObject;
  static serializeBinaryToWriter(message: RaisedAlert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RaisedAlert;
  static deserializeBinaryFromReader(message: RaisedAlert, reader: jspb.BinaryReader): RaisedAlert;
}

export namespace RaisedAlert {
  export type AsObject = {
    name: string,
    at?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class Review extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Review;
  hasMetadata(): boolean;
  clearMetadata(): Review;

  getSpec(): ReviewSpec | undefined;
  setSpec(value?: ReviewSpec): Review;
  hasSpec(): boolean;
  clearSpec(): Review;

  getStatus(): ReviewStatus | undefined;
  setStatus(value?: ReviewStatus): Review;
  hasStatus(): boolean;
  clearStatus(): Review;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Review.AsObject;
  static toObject(includeInstance: boolean, msg: Review): Review.AsObject;
  static serializeBinaryToWriter(message: Review, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Review;
  static deserializeBinaryFromReader(message: Review, reader: jspb.BinaryReader): Review;
}

export namespace Review {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ReviewSpec.AsObject,
    status?: ReviewStatus.AsObject,
  }
}

export class ReviewCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ReviewCondition;

  getStatus(): string;
  setStatus(value: string): ReviewCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReviewCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ReviewCondition;

  getReason(): string;
  setReason(value: string): ReviewCondition;

  getMessage(): string;
  setMessage(value: string): ReviewCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewCondition): ReviewCondition.AsObject;
  static serializeBinaryToWriter(message: ReviewCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewCondition;
  static deserializeBinaryFromReader(message: ReviewCondition, reader: jspb.BinaryReader): ReviewCondition;
}

export namespace ReviewCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ReviewList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ReviewList;
  hasMetadata(): boolean;
  clearMetadata(): ReviewList;

  getItemsList(): Array<Review>;
  setItemsList(value: Array<Review>): ReviewList;
  clearItemsList(): ReviewList;
  addItems(value?: Review, index?: number): Review;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewList.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewList): ReviewList.AsObject;
  static serializeBinaryToWriter(message: ReviewList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewList;
  static deserializeBinaryFromReader(message: ReviewList, reader: jspb.BinaryReader): ReviewList;
}

export namespace ReviewList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Review.AsObject>,
  }
}

export class ReviewSpec extends jspb.Message {
  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ReviewSpec;
  hasEntityref(): boolean;
  clearEntityref(): ReviewSpec;

  getMessagesList(): Array<Comment>;
  setMessagesList(value: Array<Comment>): ReviewSpec;
  clearMessagesList(): ReviewSpec;
  addMessages(value?: Comment, index?: number): Comment;

  getOwner(): string;
  setOwner(value: string): ReviewSpec;

  getNotifiername(): string;
  setNotifiername(value: string): ReviewSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ReviewSpec;
  hasTenantref(): boolean;
  clearTenantref(): ReviewSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewSpec): ReviewSpec.AsObject;
  static serializeBinaryToWriter(message: ReviewSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewSpec;
  static deserializeBinaryFromReader(message: ReviewSpec, reader: jspb.BinaryReader): ReviewSpec;
}

export namespace ReviewSpec {
  export type AsObject = {
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    messagesList: Array<Comment.AsObject>,
    owner: string,
    notifiername: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class ReviewStatus extends jspb.Message {
  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReviewStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ReviewStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ReviewStatus;

  getConditionsList(): Array<ReviewCondition>;
  setConditionsList(value: Array<ReviewCondition>): ReviewStatus;
  clearConditionsList(): ReviewStatus;
  addConditions(value?: ReviewCondition, index?: number): ReviewCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewStatus): ReviewStatus.AsObject;
  static serializeBinaryToWriter(message: ReviewStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewStatus;
  static deserializeBinaryFromReader(message: ReviewStatus, reader: jspb.BinaryReader): ReviewStatus;
}

export namespace ReviewStatus {
  export type AsObject = {
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    conditionsList: Array<ReviewCondition.AsObject>,
  }
}

export class RunBook extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): RunBook;
  hasMetadata(): boolean;
  clearMetadata(): RunBook;

  getSpec(): RunBookSpec | undefined;
  setSpec(value?: RunBookSpec): RunBook;
  hasSpec(): boolean;
  clearSpec(): RunBook;

  getStatus(): RunBookStatus | undefined;
  setStatus(value?: RunBookStatus): RunBook;
  hasStatus(): boolean;
  clearStatus(): RunBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBook.AsObject;
  static toObject(includeInstance: boolean, msg: RunBook): RunBook.AsObject;
  static serializeBinaryToWriter(message: RunBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBook;
  static deserializeBinaryFromReader(message: RunBook, reader: jspb.BinaryReader): RunBook;
}

export namespace RunBook {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: RunBookSpec.AsObject,
    status?: RunBookStatus.AsObject,
  }
}

export class RunBookCondition extends jspb.Message {
  getType(): string;
  setType(value: string): RunBookCondition;

  getStatus(): string;
  setStatus(value: string): RunBookCondition;

  getLastupdatetime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdatetime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunBookCondition;
  hasLastupdatetime(): boolean;
  clearLastupdatetime(): RunBookCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunBookCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): RunBookCondition;

  getReason(): string;
  setReason(value: string): RunBookCondition;

  getMessage(): string;
  setMessage(value: string): RunBookCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBookCondition.AsObject;
  static toObject(includeInstance: boolean, msg: RunBookCondition): RunBookCondition.AsObject;
  static serializeBinaryToWriter(message: RunBookCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBookCondition;
  static deserializeBinaryFromReader(message: RunBookCondition, reader: jspb.BinaryReader): RunBookCondition;
}

export namespace RunBookCondition {
  export type AsObject = {
    type: string,
    status: string,
    lastupdatetime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class RunBookList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): RunBookList;
  hasMetadata(): boolean;
  clearMetadata(): RunBookList;

  getItemsList(): Array<RunBook>;
  setItemsList(value: Array<RunBook>): RunBookList;
  clearItemsList(): RunBookList;
  addItems(value?: RunBook, index?: number): RunBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBookList.AsObject;
  static toObject(includeInstance: boolean, msg: RunBookList): RunBookList.AsObject;
  static serializeBinaryToWriter(message: RunBookList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBookList;
  static deserializeBinaryFromReader(message: RunBookList, reader: jspb.BinaryReader): RunBookList;
}

export namespace RunBookList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<RunBook.AsObject>,
  }
}

export class RunBookSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): RunBookSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): RunBookSpec;
  hasEntityref(): boolean;
  clearEntityref(): RunBookSpec;

  getAuthorref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setAuthorref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): RunBookSpec;
  hasAuthorref(): boolean;
  clearAuthorref(): RunBookSpec;

  getChecklistList(): Array<CheckListItem>;
  setChecklistList(value: Array<CheckListItem>): RunBookSpec;
  clearChecklistList(): RunBookSpec;
  addChecklist(value?: CheckListItem, index?: number): CheckListItem;

  getOwner(): string;
  setOwner(value: string): RunBookSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): RunBookSpec;
  hasTenantref(): boolean;
  clearTenantref(): RunBookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RunBookSpec): RunBookSpec.AsObject;
  static serializeBinaryToWriter(message: RunBookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBookSpec;
  static deserializeBinaryFromReader(message: RunBookSpec, reader: jspb.BinaryReader): RunBookSpec;
}

export namespace RunBookSpec {
  export type AsObject = {
    description: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    authorref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    checklistList: Array<CheckListItem.AsObject>,
    owner: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class RunBookStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): RunBookStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunBookStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): RunBookStatus;

  getConditionsList(): Array<RunBookCondition>;
  setConditionsList(value: Array<RunBookCondition>): RunBookStatus;
  clearConditionsList(): RunBookStatus;
  addConditions(value?: RunBookCondition, index?: number): RunBookCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBookStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RunBookStatus): RunBookStatus.AsObject;
  static serializeBinaryToWriter(message: RunBookStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBookStatus;
  static deserializeBinaryFromReader(message: RunBookStatus, reader: jspb.BinaryReader): RunBookStatus;
}

export namespace RunBookStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<RunBookCondition.AsObject>,
  }
}

export class TaskSpec extends jspb.Message {
  getId(): string;
  setId(value: string): TaskSpec;

  getDescription(): string;
  setDescription(value: string): TaskSpec;

  getAssignedto(): string;
  setAssignedto(value: string): TaskSpec;

  getDuedate(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setDuedate(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TaskSpec;
  hasDuedate(): boolean;
  clearDuedate(): TaskSpec;

  getReminder(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setReminder(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TaskSpec;
  hasReminder(): boolean;
  clearReminder(): TaskSpec;

  getParenttask(): string;
  setParenttask(value: string): TaskSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TaskSpec): TaskSpec.AsObject;
  static serializeBinaryToWriter(message: TaskSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskSpec;
  static deserializeBinaryFromReader(message: TaskSpec, reader: jspb.BinaryReader): TaskSpec;
}

export namespace TaskSpec {
  export type AsObject = {
    id: string,
    description: string,
    assignedto: string,
    duedate?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reminder?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    parenttask: string,
  }
}

export class TimeLineEvent extends jspb.Message {
  getContent(): string;
  setContent(value: string): TimeLineEvent;

  getAt(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setAt(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TimeLineEvent;
  hasAt(): boolean;
  clearAt(): TimeLineEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeLineEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TimeLineEvent): TimeLineEvent.AsObject;
  static serializeBinaryToWriter(message: TimeLineEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeLineEvent;
  static deserializeBinaryFromReader(message: TimeLineEvent, reader: jspb.BinaryReader): TimeLineEvent;
}

export namespace TimeLineEvent {
  export type AsObject = {
    content: string,
    at?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class Todo extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Todo;
  hasMetadata(): boolean;
  clearMetadata(): Todo;

  getSpec(): TodoSpec | undefined;
  setSpec(value?: TodoSpec): Todo;
  hasSpec(): boolean;
  clearSpec(): Todo;

  getStatus(): TodoStatus | undefined;
  setStatus(value?: TodoStatus): Todo;
  hasStatus(): boolean;
  clearStatus(): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: TodoSpec.AsObject,
    status?: TodoStatus.AsObject,
  }
}

export class TodoCondition extends jspb.Message {
  getType(): string;
  setType(value: string): TodoCondition;

  getStatus(): string;
  setStatus(value: string): TodoCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TodoCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): TodoCondition;

  getReason(): string;
  setReason(value: string): TodoCondition;

  getMessage(): string;
  setMessage(value: string): TodoCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoCondition.AsObject;
  static toObject(includeInstance: boolean, msg: TodoCondition): TodoCondition.AsObject;
  static serializeBinaryToWriter(message: TodoCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoCondition;
  static deserializeBinaryFromReader(message: TodoCondition, reader: jspb.BinaryReader): TodoCondition;
}

export namespace TodoCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class TodoList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): TodoList;
  hasMetadata(): boolean;
  clearMetadata(): TodoList;

  getItemsList(): Array<Todo>;
  setItemsList(value: Array<Todo>): TodoList;
  clearItemsList(): TodoList;
  addItems(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoList.AsObject;
  static toObject(includeInstance: boolean, msg: TodoList): TodoList.AsObject;
  static serializeBinaryToWriter(message: TodoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoList;
  static deserializeBinaryFromReader(message: TodoList, reader: jspb.BinaryReader): TodoList;
}

export namespace TodoList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Todo.AsObject>,
  }
}

export class TodoSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): TodoSpec;

  getTasksList(): Array<TaskSpec>;
  setTasksList(value: Array<TaskSpec>): TodoSpec;
  clearTasksList(): TodoSpec;
  addTasks(value?: TaskSpec, index?: number): TaskSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TodoSpec;
  hasEntityref(): boolean;
  clearEntityref(): TodoSpec;

  getNotifiername(): string;
  setNotifiername(value: string): TodoSpec;

  getFlagged(): boolean;
  setFlagged(value: boolean): TodoSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TodoSpec;
  hasTenantref(): boolean;
  clearTenantref(): TodoSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TodoSpec): TodoSpec.AsObject;
  static serializeBinaryToWriter(message: TodoSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoSpec;
  static deserializeBinaryFromReader(message: TodoSpec, reader: jspb.BinaryReader): TodoSpec;
}

export namespace TodoSpec {
  export type AsObject = {
    description: string,
    tasksList: Array<TaskSpec.AsObject>,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    notifiername: string,
    flagged: boolean,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class TodoStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): TodoStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): TodoStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TodoStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): TodoStatus;

  getConditionsList(): Array<TodoCondition>;
  setConditionsList(value: Array<TodoCondition>): TodoStatus;
  clearConditionsList(): TodoStatus;
  addConditions(value?: TodoCondition, index?: number): TodoCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TodoStatus): TodoStatus.AsObject;
  static serializeBinaryToWriter(message: TodoStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoStatus;
  static deserializeBinaryFromReader(message: TodoStatus, reader: jspb.BinaryReader): TodoStatus;
}

export namespace TodoStatus {
  export type AsObject = {
    phase: string,
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<TodoCondition.AsObject>,
  }
}

