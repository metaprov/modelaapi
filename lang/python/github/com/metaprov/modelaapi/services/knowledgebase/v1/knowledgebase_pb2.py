# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/knowledgebase/v1/knowledgebase.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_genai_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nKgithub.com/metaprov/modelaapi/services/knowledgebase/v1/knowledgebase.proto\x12\x37github.com.metaprov.modelaapi.services.knowledgebase.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/genai/v1alpha1/generated.proto\"\xcd\x01\n\x19ListKnowledgeBasesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12n\n\x06labels\x18\x02 \x03(\x0b\x32^.github.com.metaprov.modelaapi.services.knowledgebase.v1.ListKnowledgeBasesRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x97\x01\n\x1aListKnowledgeBasesResponse\x12`\n\x0eknowledgeBases\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"y\n\x1a\x43reateKnowledgeBaseRequest\x12[\n\rknowledgeBase\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase\"\x1d\n\x1b\x43reateKnowledgeBaseResponse\"\xa9\x01\n\x1aUpdateKnowledgeBaseRequest\x12[\n\rknowledgeBase\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x1d\n\x1bUpdateKnowledgeBaseResponse\":\n\x17GetKnowledgeBaseRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x85\x01\n\x18GetKnowledgeBaseResponse\x12[\n\rknowledgeBase\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"=\n\x1a\x44\x65leteKnowledgeBaseRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1d\n\x1b\x44\x65leteKnowledgeBaseResponse\">\n\x1bRefreshKnowledgeBaseRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1e\n\x1cRefreshKnowledgeBaseResponse2\xce\x0b\n\x14KnowledgeBaseService\x12\xe5\x01\n\x12ListKnowledgeBases\x12R.github.com.metaprov.modelaapi.services.knowledgebase.v1.ListKnowledgeBasesRequest\x1aS.github.com.metaprov.modelaapi.services.knowledgebase.v1.ListKnowledgeBasesResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/v1/knowledgebases/{namespace}\x12\xdf\x01\n\x13\x43reateKnowledgeBase\x12S.github.com.metaprov.modelaapi.services.knowledgebase.v1.CreateKnowledgeBaseRequest\x1aT.github.com.metaprov.modelaapi.services.knowledgebase.v1.CreateKnowledgeBaseResponse\"\x1d\x82\xd3\xe4\x93\x02\x17\"\x12/v1/knowledgebases:\x01*\x12\xe6\x01\n\x10GetKnowledgeBase\x12P.github.com.metaprov.modelaapi.services.knowledgebase.v1.GetKnowledgeBaseRequest\x1aQ.github.com.metaprov.modelaapi.services.knowledgebase.v1.GetKnowledgeBaseResponse\"-\x82\xd3\xe4\x93\x02\'\x12%/v1/knowledgebases/{namespace}/{name}\x12\xa0\x02\n\x13UpdateKnowledgeBase\x12S.github.com.metaprov.modelaapi.services.knowledgebase.v1.UpdateKnowledgeBaseRequest\x1aT.github.com.metaprov.modelaapi.services.knowledgebase.v1.UpdateKnowledgeBaseResponse\"^\x82\xd3\xe4\x93\x02X\x1aS/v1/knowledgebases/{knowledgebase.metadata.namespace}/{knowledgebase.metadata.name}:\x01*\x12\xef\x01\n\x13\x44\x65leteKnowledgeBase\x12S.github.com.metaprov.modelaapi.services.knowledgebase.v1.DeleteKnowledgeBaseRequest\x1aT.github.com.metaprov.modelaapi.services.knowledgebase.v1.DeleteKnowledgeBaseResponse\"-\x82\xd3\xe4\x93\x02\'*%/v1/knowledgebases/{namespace}/{name}\x12\xed\x01\n\x07Refresh\x12T.github.com.metaprov.modelaapi.services.knowledgebase.v1.RefreshKnowledgeBaseRequest\x1aU.github.com.metaprov.modelaapi.services.knowledgebase.v1.RefreshKnowledgeBaseResponse\"5\x82\xd3\xe4\x93\x02/\x12-/v1/knowledgebases/{namespace}/{name}:refreshB9Z7github.com/metaprov/modelaapi/services/knowledgebase/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.knowledgebase.v1.knowledgebase_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z7github.com/metaprov/modelaapi/services/knowledgebase/v1'
  _globals['_LISTKNOWLEDGEBASESREQUEST_LABELSENTRY']._options = None
  _globals['_LISTKNOWLEDGEBASESREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['ListKnowledgeBases']._options = None
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['ListKnowledgeBases']._serialized_options = b'\202\323\344\223\002 \022\036/v1/knowledgebases/{namespace}'
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['CreateKnowledgeBase']._options = None
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['CreateKnowledgeBase']._serialized_options = b'\202\323\344\223\002\027\"\022/v1/knowledgebases:\001*'
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['GetKnowledgeBase']._options = None
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['GetKnowledgeBase']._serialized_options = b'\202\323\344\223\002\'\022%/v1/knowledgebases/{namespace}/{name}'
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['UpdateKnowledgeBase']._options = None
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['UpdateKnowledgeBase']._serialized_options = b'\202\323\344\223\002X\032S/v1/knowledgebases/{knowledgebase.metadata.namespace}/{knowledgebase.metadata.name}:\001*'
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['DeleteKnowledgeBase']._options = None
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['DeleteKnowledgeBase']._serialized_options = b'\202\323\344\223\002\'*%/v1/knowledgebases/{namespace}/{name}'
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['Refresh']._options = None
  _globals['_KNOWLEDGEBASESERVICE'].methods_by_name['Refresh']._serialized_options = b'\202\323\344\223\002/\022-/v1/knowledgebases/{namespace}/{name}:refresh'
  _globals['_LISTKNOWLEDGEBASESREQUEST']._serialized_start=272
  _globals['_LISTKNOWLEDGEBASESREQUEST']._serialized_end=477
  _globals['_LISTKNOWLEDGEBASESREQUEST_LABELSENTRY']._serialized_start=432
  _globals['_LISTKNOWLEDGEBASESREQUEST_LABELSENTRY']._serialized_end=477
  _globals['_LISTKNOWLEDGEBASESRESPONSE']._serialized_start=480
  _globals['_LISTKNOWLEDGEBASESRESPONSE']._serialized_end=631
  _globals['_CREATEKNOWLEDGEBASEREQUEST']._serialized_start=633
  _globals['_CREATEKNOWLEDGEBASEREQUEST']._serialized_end=754
  _globals['_CREATEKNOWLEDGEBASERESPONSE']._serialized_start=756
  _globals['_CREATEKNOWLEDGEBASERESPONSE']._serialized_end=785
  _globals['_UPDATEKNOWLEDGEBASEREQUEST']._serialized_start=788
  _globals['_UPDATEKNOWLEDGEBASEREQUEST']._serialized_end=957
  _globals['_UPDATEKNOWLEDGEBASERESPONSE']._serialized_start=959
  _globals['_UPDATEKNOWLEDGEBASERESPONSE']._serialized_end=988
  _globals['_GETKNOWLEDGEBASEREQUEST']._serialized_start=990
  _globals['_GETKNOWLEDGEBASEREQUEST']._serialized_end=1048
  _globals['_GETKNOWLEDGEBASERESPONSE']._serialized_start=1051
  _globals['_GETKNOWLEDGEBASERESPONSE']._serialized_end=1184
  _globals['_DELETEKNOWLEDGEBASEREQUEST']._serialized_start=1186
  _globals['_DELETEKNOWLEDGEBASEREQUEST']._serialized_end=1247
  _globals['_DELETEKNOWLEDGEBASERESPONSE']._serialized_start=1249
  _globals['_DELETEKNOWLEDGEBASERESPONSE']._serialized_end=1278
  _globals['_REFRESHKNOWLEDGEBASEREQUEST']._serialized_start=1280
  _globals['_REFRESHKNOWLEDGEBASEREQUEST']._serialized_end=1342
  _globals['_REFRESHKNOWLEDGEBASERESPONSE']._serialized_start=1344
  _globals['_REFRESHKNOWLEDGEBASERESPONSE']._serialized_end=1374
  _globals['_KNOWLEDGEBASESERVICE']._serialized_start=1377
  _globals['_KNOWLEDGEBASESERVICE']._serialized_end=2863
# @@protoc_insertion_point(module_scope)
