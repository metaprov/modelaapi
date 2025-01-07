# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/llmserver/v1/llmserver.proto
# Protobuf Python Version: 5.26.1
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nCgithub.com/metaprov/modelaapi/services/llmserver/v1/llmserver.proto\x12\x33github.com.metaprov.modelaapi.services.llmserver.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/genai/v1alpha1/generated.proto\"\xc1\x01\n\x15ListLLMServersRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x66\n\x06labels\x18\x02 \x03(\x0b\x32V.github.com.metaprov.modelaapi.services.llmserver.v1.ListLLMServersRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x8b\x01\n\x16ListLLMServersResponse\x12X\n\nllmServers\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMServerList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"m\n\x16\x43reateLLMServerRequest\x12S\n\tllmServer\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMServer\"\x19\n\x17\x43reateLLMServerResponse\"\x9d\x01\n\x16UpdateLLMServerRequest\x12S\n\tllmServer\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMServer\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x19\n\x17UpdateLLMServerResponse\"6\n\x13GetLLMServerRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"y\n\x14GetLLMServerResponse\x12S\n\tllmServer\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMServer\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"9\n\x16\x44\x65leteLLMServerRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x19\n\x17\x44\x65leteLLMServerResponse\":\n\x17RefreshLLMServerRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1a\n\x18RefreshLLMServerResponse2\xb6\n\n\x10LLMServerService\x12\xcd\x01\n\x0eListLLMServers\x12J.github.com.metaprov.modelaapi.services.llmserver.v1.ListLLMServersRequest\x1aK.github.com.metaprov.modelaapi.services.llmserver.v1.ListLLMServersResponse\"\"\x82\xd3\xe4\x93\x02\x1c\x12\x1a/v1/llmservers/{namespace}\x12\xc7\x01\n\x0f\x43reateLLMServer\x12K.github.com.metaprov.modelaapi.services.llmserver.v1.CreateLLMServerRequest\x1aL.github.com.metaprov.modelaapi.services.llmserver.v1.CreateLLMServerResponse\"\x19\x82\xd3\xe4\x93\x02\x13\"\x0e/v1/llmservers:\x01*\x12\xce\x01\n\x0cGetLLMServer\x12H.github.com.metaprov.modelaapi.services.llmserver.v1.GetLLMServerRequest\x1aI.github.com.metaprov.modelaapi.services.llmserver.v1.GetLLMServerResponse\")\x82\xd3\xe4\x93\x02#\x12!/v1/llmservers/{namespace}/{name}\x12\x80\x02\n\x0fUpdateLLMServer\x12K.github.com.metaprov.modelaapi.services.llmserver.v1.UpdateLLMServerRequest\x1aL.github.com.metaprov.modelaapi.services.llmserver.v1.UpdateLLMServerResponse\"R\x82\xd3\xe4\x93\x02L\x1aG/v1/llmservers/{llmServer.metadata.namespace}/{llmServer.metadata.name}:\x01*\x12\xd7\x01\n\x0f\x44\x65leteLLMServer\x12K.github.com.metaprov.modelaapi.services.llmserver.v1.DeleteLLMServerRequest\x1aL.github.com.metaprov.modelaapi.services.llmserver.v1.DeleteLLMServerResponse\")\x82\xd3\xe4\x93\x02#*!/v1/llmservers/{namespace}/{name}\x12\xd9\x01\n\x10RefreshLLMServer\x12K.github.com.metaprov.modelaapi.services.llmserver.v1.DeleteLLMServerRequest\x1aM.github.com.metaprov.modelaapi.services.llmserver.v1.RefreshLLMServerResponse\")\x82\xd3\xe4\x93\x02#*!/v1/llmservers/{namespace}/{name}B5Z3github.com/metaprov/modelaapi/services/llmserver/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.llmserver.v1.llmserver_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z3github.com/metaprov/modelaapi/services/llmserver/v1'
  _globals['_LISTLLMSERVERSREQUEST_LABELSENTRY']._loaded_options = None
  _globals['_LISTLLMSERVERSREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_LLMSERVERSERVICE'].methods_by_name['ListLLMServers']._loaded_options = None
  _globals['_LLMSERVERSERVICE'].methods_by_name['ListLLMServers']._serialized_options = b'\202\323\344\223\002\034\022\032/v1/llmservers/{namespace}'
  _globals['_LLMSERVERSERVICE'].methods_by_name['CreateLLMServer']._loaded_options = None
  _globals['_LLMSERVERSERVICE'].methods_by_name['CreateLLMServer']._serialized_options = b'\202\323\344\223\002\023\"\016/v1/llmservers:\001*'
  _globals['_LLMSERVERSERVICE'].methods_by_name['GetLLMServer']._loaded_options = None
  _globals['_LLMSERVERSERVICE'].methods_by_name['GetLLMServer']._serialized_options = b'\202\323\344\223\002#\022!/v1/llmservers/{namespace}/{name}'
  _globals['_LLMSERVERSERVICE'].methods_by_name['UpdateLLMServer']._loaded_options = None
  _globals['_LLMSERVERSERVICE'].methods_by_name['UpdateLLMServer']._serialized_options = b'\202\323\344\223\002L\032G/v1/llmservers/{llmServer.metadata.namespace}/{llmServer.metadata.name}:\001*'
  _globals['_LLMSERVERSERVICE'].methods_by_name['DeleteLLMServer']._loaded_options = None
  _globals['_LLMSERVERSERVICE'].methods_by_name['DeleteLLMServer']._serialized_options = b'\202\323\344\223\002#*!/v1/llmservers/{namespace}/{name}'
  _globals['_LLMSERVERSERVICE'].methods_by_name['RefreshLLMServer']._loaded_options = None
  _globals['_LLMSERVERSERVICE'].methods_by_name['RefreshLLMServer']._serialized_options = b'\202\323\344\223\002#*!/v1/llmservers/{namespace}/{name}'
  _globals['_LISTLLMSERVERSREQUEST']._serialized_start=260
  _globals['_LISTLLMSERVERSREQUEST']._serialized_end=453
  _globals['_LISTLLMSERVERSREQUEST_LABELSENTRY']._serialized_start=408
  _globals['_LISTLLMSERVERSREQUEST_LABELSENTRY']._serialized_end=453
  _globals['_LISTLLMSERVERSRESPONSE']._serialized_start=456
  _globals['_LISTLLMSERVERSRESPONSE']._serialized_end=595
  _globals['_CREATELLMSERVERREQUEST']._serialized_start=597
  _globals['_CREATELLMSERVERREQUEST']._serialized_end=706
  _globals['_CREATELLMSERVERRESPONSE']._serialized_start=708
  _globals['_CREATELLMSERVERRESPONSE']._serialized_end=733
  _globals['_UPDATELLMSERVERREQUEST']._serialized_start=736
  _globals['_UPDATELLMSERVERREQUEST']._serialized_end=893
  _globals['_UPDATELLMSERVERRESPONSE']._serialized_start=895
  _globals['_UPDATELLMSERVERRESPONSE']._serialized_end=920
  _globals['_GETLLMSERVERREQUEST']._serialized_start=922
  _globals['_GETLLMSERVERREQUEST']._serialized_end=976
  _globals['_GETLLMSERVERRESPONSE']._serialized_start=978
  _globals['_GETLLMSERVERRESPONSE']._serialized_end=1099
  _globals['_DELETELLMSERVERREQUEST']._serialized_start=1101
  _globals['_DELETELLMSERVERREQUEST']._serialized_end=1158
  _globals['_DELETELLMSERVERRESPONSE']._serialized_start=1160
  _globals['_DELETELLMSERVERRESPONSE']._serialized_end=1185
  _globals['_REFRESHLLMSERVERREQUEST']._serialized_start=1187
  _globals['_REFRESHLLMSERVERREQUEST']._serialized_end=1245
  _globals['_REFRESHLLMSERVERRESPONSE']._serialized_start=1247
  _globals['_REFRESHLLMSERVERRESPONSE']._serialized_end=1273
  _globals['_LLMSERVERSERVICE']._serialized_start=1276
  _globals['_LLMSERVERSERVICE']._serialized_end=2610
# @@protoc_insertion_point(module_scope)
