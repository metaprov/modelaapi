# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/onlinefeaturestored/v1/onlinefeaturestored.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nWgithub.com/metaprov/modelaapi/services/onlinefeaturestored/v1/onlinefeaturestored.proto\x12=github.com.metaprov.modelaapi.services.onlinefeaturestored.v1\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\"|\n\x05Value\x12\x0f\n\x05int64\x18\x01 \x01(\x03H\x00\x12\x10\n\x06\x64ouble\x18\x02 \x01(\x01H\x00\x12\x10\n\x06string\x18\x03 \x01(\tH\x00\x12\x0e\n\x04\x62ool\x18\x04 \x01(\x08H\x00\x12\x14\n\nunix_milli\x18\x05 \x01(\x03H\x00\x12\x0f\n\x05\x62ytes\x18\x06 \x01(\x0cH\x00\x42\x07\n\x05value\"z\n\x10OnlineGetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12S\n\x04rows\x18\x02 \x03(\x0b\x32\x45.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.GetRow\";\n\x08\x46GFields\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x10\n\x08keyvalue\x18\x02 \x01(\t\x12\x10\n\x08\x66\x65\x61tures\x18\x03 \x03(\t\"a\n\x06GetRow\x12W\n\x06groups\x18\x01 \x03(\x0b\x32G.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.FGFields\"\x8a\x02\n\x0cGetRowResult\x12\x0f\n\x07keyname\x18\x01 \x01(\t\x12\x0b\n\x03key\x18\x02 \x01(\t\x12g\n\x06values\x18\x03 \x03(\x0b\x32W.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.GetRowResult.ValuesEntry\x1as\n\x0bValuesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12S\n\x05value\x18\x02 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.Value:\x02\x38\x01\"n\n\x11OnlineGetResponse\x12Y\n\x04rows\x18\x01 \x03(\x0b\x32K.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.GetRowResult\"A\n\x03Row\x12\x0f\n\x07keyname\x18\x01 \x01(\t\x12\x0b\n\x03key\x18\x02 \x01(\t\x12\r\n\x05\x66ield\x18\x03 \x01(\t\x12\r\n\x05value\x18\x04 \x01(\t\"r\n\x0bPushRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12P\n\x04rows\x18\x03 \x03(\x0b\x32\x42.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.Row\"\x0e\n\x0cPushResponse2\xf2\x02\n\x19OnlineFeatureStoreService\x12\xb0\x01\n\tOnlineGet\x12O.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineGetRequest\x1aP.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineGetResponse\"\x00\x12\xa1\x01\n\x04Push\x12J.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.PushRequest\x1aK.github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.PushResponse\"\x00\x42?Z=github.com/metaprov/modelaapi/services/onlinefeaturestored/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z=github.com/metaprov/modelaapi/services/onlinefeaturestored/v1'
  _globals['_GETROWRESULT_VALUESENTRY']._options = None
  _globals['_GETROWRESULT_VALUESENTRY']._serialized_options = b'8\001'
  _globals['_VALUE']._serialized_start=369
  _globals['_VALUE']._serialized_end=493
  _globals['_ONLINEGETREQUEST']._serialized_start=495
  _globals['_ONLINEGETREQUEST']._serialized_end=617
  _globals['_FGFIELDS']._serialized_start=619
  _globals['_FGFIELDS']._serialized_end=678
  _globals['_GETROW']._serialized_start=680
  _globals['_GETROW']._serialized_end=777
  _globals['_GETROWRESULT']._serialized_start=780
  _globals['_GETROWRESULT']._serialized_end=1046
  _globals['_GETROWRESULT_VALUESENTRY']._serialized_start=931
  _globals['_GETROWRESULT_VALUESENTRY']._serialized_end=1046
  _globals['_ONLINEGETRESPONSE']._serialized_start=1048
  _globals['_ONLINEGETRESPONSE']._serialized_end=1158
  _globals['_ROW']._serialized_start=1160
  _globals['_ROW']._serialized_end=1225
  _globals['_PUSHREQUEST']._serialized_start=1227
  _globals['_PUSHREQUEST']._serialized_end=1341
  _globals['_PUSHRESPONSE']._serialized_start=1343
  _globals['_PUSHRESPONSE']._serialized_end=1357
  _globals['_ONLINEFEATURESTORESERVICE']._serialized_start=1360
  _globals['_ONLINEFEATURESTORESERVICE']._serialized_end=1730
# @@protoc_insertion_point(module_scope)
