/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modelaapi.services.meeting.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb from '../../../../../../github.com/metaprov/modelaapi/services/meeting/v1/meeting_pb';


export class MeetingServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListMeetings = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsResponse,
    (request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsResponse.deserializeBinary
  );

  listMeetings(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsResponse>;

  listMeetings(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsResponse>;

  listMeetings(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.ListMeetingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/ListMeetings',
        request,
        metadata || {},
        this.methodInfoListMeetings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/ListMeetings',
    request,
    metadata || {},
    this.methodInfoListMeetings);
  }

  methodInfoCreateMeeting = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingResponse,
    (request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingResponse.deserializeBinary
  );

  createMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingResponse>;

  createMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingResponse>;

  createMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.CreateMeetingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/CreateMeeting',
        request,
        metadata || {},
        this.methodInfoCreateMeeting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/CreateMeeting',
    request,
    metadata || {},
    this.methodInfoCreateMeeting);
  }

  methodInfoGetMeeting = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingResponse,
    (request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingResponse.deserializeBinary
  );

  getMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingResponse>;

  getMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingResponse>;

  getMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.GetMeetingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/GetMeeting',
        request,
        metadata || {},
        this.methodInfoGetMeeting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/GetMeeting',
    request,
    metadata || {},
    this.methodInfoGetMeeting);
  }

  methodInfoUpdateMeeting = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingResponse,
    (request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingResponse.deserializeBinary
  );

  updateMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingResponse>;

  updateMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingResponse>;

  updateMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.UpdateMeetingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/UpdateMeeting',
        request,
        metadata || {},
        this.methodInfoUpdateMeeting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/UpdateMeeting',
    request,
    metadata || {},
    this.methodInfoUpdateMeeting);
  }

  methodInfoDeleteMeeting = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingResponse,
    (request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingResponse.deserializeBinary
  );

  deleteMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingResponse>;

  deleteMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingResponse>;

  deleteMeeting(
    request: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modelaapi_services_meeting_v1_meeting_pb.DeleteMeetingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/DeleteMeeting',
        request,
        metadata || {},
        this.methodInfoDeleteMeeting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modelaapi.services.meeting.v1.MeetingService/DeleteMeeting',
    request,
    metadata || {},
    this.methodInfoDeleteMeeting);
  }

}

