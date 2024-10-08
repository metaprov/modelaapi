# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/llm/v1/llm.proto
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n7github.com/metaprov/modelaapi/services/llm/v1/llm.proto\x12-github.com.metaprov.modelaapi.services.llm.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/genai/v1alpha1/generated.proto\"\xaf\x01\n\x0fListLLMsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12Z\n\x06labels\x18\x02 \x03(\x0b\x32J.github.com.metaprov.modelaapi.services.llm.v1.ListLLMsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"y\n\x10ListLLMsResponse\x12L\n\x04llms\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"[\n\x10\x43reateLLMRequest\x12G\n\x03llm\x18\x01 \x01(\x0b\x32:.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM\"\x13\n\x11\x43reateLLMResponse\"\x8b\x01\n\x10UpdateLLMRequest\x12G\n\x03llm\x18\x01 \x01(\x0b\x32:.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x13\n\x11UpdateLLMResponse\"0\n\rGetLLMRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"g\n\x0eGetLLMResponse\x12G\n\x03llm\x18\x01 \x01(\x0b\x32:.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"3\n\x10\x44\x65leteLLMRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x13\n\x11\x44\x65leteLLMResponse2\x94\x07\n\nLLMService\x12\xa9\x01\n\x08ListLLMs\x12>.github.com.metaprov.modelaapi.services.llm.v1.ListLLMsRequest\x1a?.github.com.metaprov.modelaapi.services.llm.v1.ListLLMsResponse\"\x1c\x82\xd3\xe4\x93\x02\x16\x12\x14/v1/llms/{namespace}\x12\xa3\x01\n\tCreateLLM\x12?.github.com.metaprov.modelaapi.services.llm.v1.CreateLLMRequest\x1a@.github.com.metaprov.modelaapi.services.llm.v1.CreateLLMResponse\"\x13\x82\xd3\xe4\x93\x02\r\"\x08/v1/llms:\x01*\x12\xaa\x01\n\x06GetLLM\x12<.github.com.metaprov.modelaapi.services.llm.v1.GetLLMRequest\x1a=.github.com.metaprov.modelaapi.services.llm.v1.GetLLMResponse\"#\x82\xd3\xe4\x93\x02\x1d\x12\x1b/v1/llms/{namespace}/{name}\x12\xd0\x01\n\tUpdateLLM\x12?.github.com.metaprov.modelaapi.services.llm.v1.UpdateLLMRequest\x1a@.github.com.metaprov.modelaapi.services.llm.v1.UpdateLLMResponse\"@\x82\xd3\xe4\x93\x02:\x1a\x35/v1/llms/{llm.metadata.namespace}/{llm.metadata.name}:\x01*\x12\xb3\x01\n\tDeleteLLM\x12?.github.com.metaprov.modelaapi.services.llm.v1.DeleteLLMRequest\x1a@.github.com.metaprov.modelaapi.services.llm.v1.DeleteLLMResponse\"#\x82\xd3\xe4\x93\x02\x1d*\x1b/v1/llms/{namespace}/{name}B/Z-github.com/metaprov/modelaapi/services/llm/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.llm.v1.llm_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z-github.com/metaprov/modelaapi/services/llm/v1'
  _globals['_LISTLLMSREQUEST_LABELSENTRY']._options = None
  _globals['_LISTLLMSREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_LLMSERVICE'].methods_by_name['ListLLMs']._options = None
  _globals['_LLMSERVICE'].methods_by_name['ListLLMs']._serialized_options = b'\202\323\344\223\002\026\022\024/v1/llms/{namespace}'
  _globals['_LLMSERVICE'].methods_by_name['CreateLLM']._options = None
  _globals['_LLMSERVICE'].methods_by_name['CreateLLM']._serialized_options = b'\202\323\344\223\002\r\"\010/v1/llms:\001*'
  _globals['_LLMSERVICE'].methods_by_name['GetLLM']._options = None
  _globals['_LLMSERVICE'].methods_by_name['GetLLM']._serialized_options = b'\202\323\344\223\002\035\022\033/v1/llms/{namespace}/{name}'
  _globals['_LLMSERVICE'].methods_by_name['UpdateLLM']._options = None
  _globals['_LLMSERVICE'].methods_by_name['UpdateLLM']._serialized_options = b'\202\323\344\223\002:\0325/v1/llms/{llm.metadata.namespace}/{llm.metadata.name}:\001*'
  _globals['_LLMSERVICE'].methods_by_name['DeleteLLM']._options = None
  _globals['_LLMSERVICE'].methods_by_name['DeleteLLM']._serialized_options = b'\202\323\344\223\002\035*\033/v1/llms/{namespace}/{name}'
  _globals['_LISTLLMSREQUEST']._serialized_start=242
  _globals['_LISTLLMSREQUEST']._serialized_end=417
  _globals['_LISTLLMSREQUEST_LABELSENTRY']._serialized_start=372
  _globals['_LISTLLMSREQUEST_LABELSENTRY']._serialized_end=417
  _globals['_LISTLLMSRESPONSE']._serialized_start=419
  _globals['_LISTLLMSRESPONSE']._serialized_end=540
  _globals['_CREATELLMREQUEST']._serialized_start=542
  _globals['_CREATELLMREQUEST']._serialized_end=633
  _globals['_CREATELLMRESPONSE']._serialized_start=635
  _globals['_CREATELLMRESPONSE']._serialized_end=654
  _globals['_UPDATELLMREQUEST']._serialized_start=657
  _globals['_UPDATELLMREQUEST']._serialized_end=796
  _globals['_UPDATELLMRESPONSE']._serialized_start=798
  _globals['_UPDATELLMRESPONSE']._serialized_end=817
  _globals['_GETLLMREQUEST']._serialized_start=819
  _globals['_GETLLMREQUEST']._serialized_end=867
  _globals['_GETLLMRESPONSE']._serialized_start=869
  _globals['_GETLLMRESPONSE']._serialized_end=972
  _globals['_DELETELLMREQUEST']._serialized_start=974
  _globals['_DELETELLMREQUEST']._serialized_end=1025
  _globals['_DELETELLMRESPONSE']._serialized_start=1027
  _globals['_DELETELLMRESPONSE']._serialized_end=1046
  _globals['_LLMSERVICE']._serialized_start=1049
  _globals['_LLMSERVICE']._serialized_end=1965
# @@protoc_insertion_point(module_scope)
