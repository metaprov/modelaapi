# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/feature/v1/feature.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/feature/v1/feature.proto',
  package='github.com.metaprov.modelaapi.services.feature.v1',
  syntax='proto3',
  serialized_options=b'Z1github.com/metaprov/modelaapi/services/feature/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n?github.com/metaprov/modelaapi/services/feature/v1/feature.proto\x12\x31github.com.metaprov.modelaapi.services.feature.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\"\xf4\x01\n\x13ListFeaturesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x62\n\x06labels\x18\x02 \x03(\x0b\x32R.github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"h\n\x14ListFeaturesResponse\x12P\n\x05items\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureList\"c\n\x14\x43reateFeatureRequest\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Feature\"\x17\n\x15\x43reateFeatureResponse\"c\n\x14UpdateFeatureRequest\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Feature\"\x17\n\x15UpdateFeatureResponse\"4\n\x11GetFeatureRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"o\n\x12GetFeatureResponse\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Feature\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"7\n\x14\x44\x65leteFeatureRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x17\n\x15\x44\x65leteFeatureResponse2\x92\x08\n\x0e\x46\x65\x61tureService\x12\xc1\x01\n\x0cListFeatures\x12\x46.github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest\x1aG.github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/features/{namespace}\x12\xbb\x01\n\rCreateFeature\x12G.github.com.metaprov.modelaapi.services.feature.v1.CreateFeatureRequest\x1aH.github.com.metaprov.modelaapi.services.feature.v1.CreateFeatureResponse\"\x17\x82\xd3\xe4\x93\x02\x11\"\x0c/v1/features:\x01*\x12\xc2\x01\n\nGetFeature\x12\x44.github.com.metaprov.modelaapi.services.feature.v1.GetFeatureRequest\x1a\x45.github.com.metaprov.modelaapi.services.feature.v1.GetFeatureResponse\"\'\x82\xd3\xe4\x93\x02!\x12\x1f/v1/features/{namespace}/{name}\x12\xea\x01\n\rUpdateFeature\x12G.github.com.metaprov.modelaapi.services.feature.v1.UpdateFeatureRequest\x1aH.github.com.metaprov.modelaapi.services.feature.v1.UpdateFeatureResponse\"F\x82\xd3\xe4\x93\x02@\x1a;/v1/features/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xcb\x01\n\rDeleteFeature\x12G.github.com.metaprov.modelaapi.services.feature.v1.DeleteFeatureRequest\x1aH.github.com.metaprov.modelaapi.services.feature.v1.DeleteFeatureResponse\"\'\x82\xd3\xe4\x93\x02!*\x1f/v1/features/{namespace}/{name}B3Z1github.com/metaprov/modelaapi/services/feature/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTFEATURESREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.LabelsEntry.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=418,
  serialized_end=463,
)

_LISTFEATURESREQUEST = _descriptor.Descriptor(
  name='ListFeaturesRequest',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTFEATURESREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=219,
  serialized_end=463,
)


_LISTFEATURESRESPONSE = _descriptor.Descriptor(
  name='ListFeaturesResponse',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesResponse.items', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=465,
  serialized_end=569,
)


_CREATEFEATUREREQUEST = _descriptor.Descriptor(
  name='CreateFeatureRequest',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.CreateFeatureRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.feature.v1.CreateFeatureRequest.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=571,
  serialized_end=670,
)


_CREATEFEATURERESPONSE = _descriptor.Descriptor(
  name='CreateFeatureResponse',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.CreateFeatureResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=672,
  serialized_end=695,
)


_UPDATEFEATUREREQUEST = _descriptor.Descriptor(
  name='UpdateFeatureRequest',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.UpdateFeatureRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.feature.v1.UpdateFeatureRequest.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=697,
  serialized_end=796,
)


_UPDATEFEATURERESPONSE = _descriptor.Descriptor(
  name='UpdateFeatureResponse',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.UpdateFeatureResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=798,
  serialized_end=821,
)


_GETFEATUREREQUEST = _descriptor.Descriptor(
  name='GetFeatureRequest',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.GetFeatureRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.feature.v1.GetFeatureRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.feature.v1.GetFeatureRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=823,
  serialized_end=875,
)


_GETFEATURERESPONSE = _descriptor.Descriptor(
  name='GetFeatureResponse',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.GetFeatureResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.feature.v1.GetFeatureResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.feature.v1.GetFeatureResponse.yaml', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=877,
  serialized_end=988,
)


_DELETEFEATUREREQUEST = _descriptor.Descriptor(
  name='DeleteFeatureRequest',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.DeleteFeatureRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.feature.v1.DeleteFeatureRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.feature.v1.DeleteFeatureRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=990,
  serialized_end=1045,
)


_DELETEFEATURERESPONSE = _descriptor.Descriptor(
  name='DeleteFeatureResponse',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.DeleteFeatureResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1047,
  serialized_end=1070,
)

_LISTFEATURESREQUEST_LABELSENTRY.containing_type = _LISTFEATURESREQUEST
_LISTFEATURESREQUEST.fields_by_name['labels'].message_type = _LISTFEATURESREQUEST_LABELSENTRY
_LISTFEATURESRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURELIST
_CREATEFEATUREREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURE
_UPDATEFEATUREREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURE
_GETFEATURERESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURE
DESCRIPTOR.message_types_by_name['ListFeaturesRequest'] = _LISTFEATURESREQUEST
DESCRIPTOR.message_types_by_name['ListFeaturesResponse'] = _LISTFEATURESRESPONSE
DESCRIPTOR.message_types_by_name['CreateFeatureRequest'] = _CREATEFEATUREREQUEST
DESCRIPTOR.message_types_by_name['CreateFeatureResponse'] = _CREATEFEATURERESPONSE
DESCRIPTOR.message_types_by_name['UpdateFeatureRequest'] = _UPDATEFEATUREREQUEST
DESCRIPTOR.message_types_by_name['UpdateFeatureResponse'] = _UPDATEFEATURERESPONSE
DESCRIPTOR.message_types_by_name['GetFeatureRequest'] = _GETFEATUREREQUEST
DESCRIPTOR.message_types_by_name['GetFeatureResponse'] = _GETFEATURERESPONSE
DESCRIPTOR.message_types_by_name['DeleteFeatureRequest'] = _DELETEFEATUREREQUEST
DESCRIPTOR.message_types_by_name['DeleteFeatureResponse'] = _DELETEFEATURERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListFeaturesRequest = _reflection.GeneratedProtocolMessageType('ListFeaturesRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTFEATURESREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTFEATURESREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesRequest)
  })
_sym_db.RegisterMessage(ListFeaturesRequest)
_sym_db.RegisterMessage(ListFeaturesRequest.LabelsEntry)

ListFeaturesResponse = _reflection.GeneratedProtocolMessageType('ListFeaturesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTFEATURESRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.ListFeaturesResponse)
  })
_sym_db.RegisterMessage(ListFeaturesResponse)

CreateFeatureRequest = _reflection.GeneratedProtocolMessageType('CreateFeatureRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEFEATUREREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.CreateFeatureRequest)
  })
_sym_db.RegisterMessage(CreateFeatureRequest)

CreateFeatureResponse = _reflection.GeneratedProtocolMessageType('CreateFeatureResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEFEATURERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.CreateFeatureResponse)
  })
_sym_db.RegisterMessage(CreateFeatureResponse)

UpdateFeatureRequest = _reflection.GeneratedProtocolMessageType('UpdateFeatureRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEFEATUREREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.UpdateFeatureRequest)
  })
_sym_db.RegisterMessage(UpdateFeatureRequest)

UpdateFeatureResponse = _reflection.GeneratedProtocolMessageType('UpdateFeatureResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEFEATURERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.UpdateFeatureResponse)
  })
_sym_db.RegisterMessage(UpdateFeatureResponse)

GetFeatureRequest = _reflection.GeneratedProtocolMessageType('GetFeatureRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATUREREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.GetFeatureRequest)
  })
_sym_db.RegisterMessage(GetFeatureRequest)

GetFeatureResponse = _reflection.GeneratedProtocolMessageType('GetFeatureResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATURERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.GetFeatureResponse)
  })
_sym_db.RegisterMessage(GetFeatureResponse)

DeleteFeatureRequest = _reflection.GeneratedProtocolMessageType('DeleteFeatureRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATUREREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.DeleteFeatureRequest)
  })
_sym_db.RegisterMessage(DeleteFeatureRequest)

DeleteFeatureResponse = _reflection.GeneratedProtocolMessageType('DeleteFeatureResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATURERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.feature.v1.feature_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.feature.v1.DeleteFeatureResponse)
  })
_sym_db.RegisterMessage(DeleteFeatureResponse)


DESCRIPTOR._options = None
_LISTFEATURESREQUEST_LABELSENTRY._options = None

_FEATURESERVICE = _descriptor.ServiceDescriptor(
  name='FeatureService',
  full_name='github.com.metaprov.modelaapi.services.feature.v1.FeatureService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1073,
  serialized_end=2115,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListFeatures',
    full_name='github.com.metaprov.modelaapi.services.feature.v1.FeatureService.ListFeatures',
    index=0,
    containing_service=None,
    input_type=_LISTFEATURESREQUEST,
    output_type=_LISTFEATURESRESPONSE,
    serialized_options=b'\202\323\344\223\002\032\022\030/v1/features/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateFeature',
    full_name='github.com.metaprov.modelaapi.services.feature.v1.FeatureService.CreateFeature',
    index=1,
    containing_service=None,
    input_type=_CREATEFEATUREREQUEST,
    output_type=_CREATEFEATURERESPONSE,
    serialized_options=b'\202\323\344\223\002\021\"\014/v1/features:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetFeature',
    full_name='github.com.metaprov.modelaapi.services.feature.v1.FeatureService.GetFeature',
    index=2,
    containing_service=None,
    input_type=_GETFEATUREREQUEST,
    output_type=_GETFEATURERESPONSE,
    serialized_options=b'\202\323\344\223\002!\022\037/v1/features/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateFeature',
    full_name='github.com.metaprov.modelaapi.services.feature.v1.FeatureService.UpdateFeature',
    index=3,
    containing_service=None,
    input_type=_UPDATEFEATUREREQUEST,
    output_type=_UPDATEFEATURERESPONSE,
    serialized_options=b'\202\323\344\223\002@\032;/v1/features/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteFeature',
    full_name='github.com.metaprov.modelaapi.services.feature.v1.FeatureService.DeleteFeature',
    index=4,
    containing_service=None,
    input_type=_DELETEFEATUREREQUEST,
    output_type=_DELETEFEATURERESPONSE,
    serialized_options=b'\202\323\344\223\002!*\037/v1/features/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_FEATURESERVICE)

DESCRIPTOR.services_by_name['FeatureService'] = _FEATURESERVICE

# @@protoc_insertion_point(module_scope)
