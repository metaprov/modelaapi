import * as jspb from 'google-protobuf'

import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


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
  }
}

export class Conversation extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Conversation;
  hasMetadata(): boolean;
  clearMetadata(): Conversation;

  getSpec(): ConversationSpec | undefined;
  setSpec(value?: ConversationSpec): Conversation;
  hasSpec(): boolean;
  clearSpec(): Conversation;

  getStatus(): ConversationStatus | undefined;
  setStatus(value?: ConversationStatus): Conversation;
  hasStatus(): boolean;
  clearStatus(): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conversation.AsObject;
  static toObject(includeInstance: boolean, msg: Conversation): Conversation.AsObject;
  static serializeBinaryToWriter(message: Conversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conversation;
  static deserializeBinaryFromReader(message: Conversation, reader: jspb.BinaryReader): Conversation;
}

export namespace Conversation {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ConversationSpec.AsObject,
    status?: ConversationStatus.AsObject,
  }
}

export class ConversationCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ConversationCondition;

  getStatus(): string;
  setStatus(value: string): ConversationCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ConversationCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ConversationCondition;

  getReason(): string;
  setReason(value: string): ConversationCondition;

  getMessage(): string;
  setMessage(value: string): ConversationCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationCondition): ConversationCondition.AsObject;
  static serializeBinaryToWriter(message: ConversationCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationCondition;
  static deserializeBinaryFromReader(message: ConversationCondition, reader: jspb.BinaryReader): ConversationCondition;
}

export namespace ConversationCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ConversationList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ConversationList;
  hasMetadata(): boolean;
  clearMetadata(): ConversationList;

  getItemsList(): Array<Conversation>;
  setItemsList(value: Array<Conversation>): ConversationList;
  clearItemsList(): ConversationList;
  addItems(value?: Conversation, index?: number): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationList.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationList): ConversationList.AsObject;
  static serializeBinaryToWriter(message: ConversationList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationList;
  static deserializeBinaryFromReader(message: ConversationList, reader: jspb.BinaryReader): ConversationList;
}

export namespace ConversationList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Conversation.AsObject>,
  }
}

export class ConversationSpec extends jspb.Message {
  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ConversationSpec;
  hasEntityref(): boolean;
  clearEntityref(): ConversationSpec;

  getMessagesList(): Array<Comment>;
  setMessagesList(value: Array<Comment>): ConversationSpec;
  clearMessagesList(): ConversationSpec;
  addMessages(value?: Comment, index?: number): Comment;

  getOwner(): string;
  setOwner(value: string): ConversationSpec;

  getNotifiername(): string;
  setNotifiername(value: string): ConversationSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationSpec): ConversationSpec.AsObject;
  static serializeBinaryToWriter(message: ConversationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationSpec;
  static deserializeBinaryFromReader(message: ConversationSpec, reader: jspb.BinaryReader): ConversationSpec;
}

export namespace ConversationSpec {
  export type AsObject = {
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    messagesList: Array<Comment.AsObject>,
    owner: string,
    notifiername: string,
  }
}

export class ConversationStatus extends jspb.Message {
  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ConversationStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ConversationStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ConversationStatus;

  getConditionsList(): Array<ConversationCondition>;
  setConditionsList(value: Array<ConversationCondition>): ConversationStatus;
  clearConditionsList(): ConversationStatus;
  addConditions(value?: ConversationCondition, index?: number): ConversationCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationStatus): ConversationStatus.AsObject;
  static serializeBinaryToWriter(message: ConversationStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationStatus;
  static deserializeBinaryFromReader(message: ConversationStatus, reader: jspb.BinaryReader): ConversationStatus;
}

export namespace ConversationStatus {
  export type AsObject = {
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    conditionsList: Array<ConversationCondition.AsObject>,
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

  getAlertList(): Array<RaisedAlert>;
  setAlertList(value: Array<RaisedAlert>): PostMortemSpec;
  clearAlertList(): PostMortemSpec;
  addAlert(value?: RaisedAlert, index?: number): RaisedAlert;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemSpec): PostMortemSpec.AsObject;
  static serializeBinaryToWriter(message: PostMortemSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemSpec;
  static deserializeBinaryFromReader(message: PostMortemSpec, reader: jspb.BinaryReader): PostMortemSpec;
}

export namespace PostMortemSpec {
  export type AsObject = {
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    locationref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    handledbyList: Array<k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject>,
    alertList: Array<RaisedAlert.AsObject>,
    timelineList: Array<TimeLineEvent.AsObject>,
    rootcause: string,
    summary: string,
    owner: string,
  }
}

export class PostMortemStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): PostMortemStatus;

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
  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): RunBookSpec;
  hasEntityref(): boolean;
  clearEntityref(): RunBookSpec;

  getAuthorref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setAuthorref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): RunBookSpec;
  hasAuthorref(): boolean;
  clearAuthorref(): RunBookSpec;

  getOwner(): string;
  setOwner(value: string): RunBookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RunBookSpec): RunBookSpec.AsObject;
  static serializeBinaryToWriter(message: RunBookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBookSpec;
  static deserializeBinaryFromReader(message: RunBookSpec, reader: jspb.BinaryReader): RunBookSpec;
}

export namespace RunBookSpec {
  export type AsObject = {
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    authorref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    owner: string,
  }
}

export class RunBookStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): RunBookStatus;

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
    conditionsList: Array<RunBookCondition.AsObject>,
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

