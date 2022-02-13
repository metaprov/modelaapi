# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/featureset/v1/featureset.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/featureset/v1/featureset.proto',
  package='github.com.metaprov.modelaapi.services.featureset.v1',
  syntax='proto3',
  serialized_options=b'Z4github.com/metaprov/modelaapi/services/featureset/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nEgithub.com/metaprov/modelaapi/services/featureset/v1/featureset.proto\x12\x34github.com.metaprov.modelaapi.services.featureset.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\"\xfb\x01\n\x15ListFeaturesetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12g\n\x06labels\x18\x02 \x03(\x0b\x32W.github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x8c\x01\n\x16ListFeaturesetResponse\x12Y\n\x0b\x66\x65\x61turesets\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeaturesetList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"o\n\x17\x43reateFeaturesetRequest\x12T\n\nfeatureset\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Featureset\"\x1a\n\x18\x43reateFeaturesetResponse\"\x9f\x01\n\x17UpdateFeaturesetRequest\x12T\n\nfeatureset\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Featureset\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x1a\n\x18UpdateFeaturesetResponse\"7\n\x14GetFeaturesetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"u\n\x15GetFeaturesetResponse\x12N\n\x04item\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Featureset\x12\x0c\n\x04yaml\x18\x02 \x01(\t\":\n\x17\x44\x65leteFeaturesetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1a\n\x18\x44\x65leteFeaturesetResponse2\xed\x08\n\x11\x46\x65\x61turesetService\x12\xd1\x01\n\x0fListFeaturesets\x12K.github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest\x1aL.github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetResponse\"#\x82\xd3\xe4\x93\x02\x1d\x12\x1b/v1/featuresets/{namespace}\x12\xcd\x01\n\x10\x43reateFeatureset\x12M.github.com.metaprov.modelaapi.services.featureset.v1.CreateFeaturesetRequest\x1aN.github.com.metaprov.modelaapi.services.featureset.v1.CreateFeaturesetResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\"\x0f/v1/featuresets:\x01*\x12\xd4\x01\n\rGetFeatureset\x12J.github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetRequest\x1aK.github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/v1/featuresets/{namespace}/{name}\x12\xfc\x01\n\x10UpdateFeatureset\x12M.github.com.metaprov.modelaapi.services.featureset.v1.UpdateFeaturesetRequest\x1aN.github.com.metaprov.modelaapi.services.featureset.v1.UpdateFeaturesetResponse\"I\x82\xd3\xe4\x93\x02\x43\x1a>/v1/featuresets/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xdd\x01\n\x10\x44\x65leteFeatureset\x12M.github.com.metaprov.modelaapi.services.featureset.v1.DeleteFeaturesetRequest\x1aN.github.com.metaprov.modelaapi.services.featureset.v1.DeleteFeaturesetResponse\"*\x82\xd3\xe4\x93\x02$*\"/v1/featuresets/{namespace}/{name}B6Z4github.com/metaprov/modelaapi/services/featureset/v1b\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_field__mask__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTFEATURESETREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.LabelsEntry.value', index=1,
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
  serialized_start=468,
  serialized_end=513,
)

_LISTFEATURESETREQUEST = _descriptor.Descriptor(
  name='ListFeaturesetRequest',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTFEATURESETREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=262,
  serialized_end=513,
)


_LISTFEATURESETRESPONSE = _descriptor.Descriptor(
  name='ListFeaturesetResponse',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='featuresets', full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetResponse.featuresets', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_token', full_name='github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetResponse.next_page_token', index=1,
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
  serialized_start=516,
  serialized_end=656,
)


_CREATEFEATURESETREQUEST = _descriptor.Descriptor(
  name='CreateFeaturesetRequest',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.CreateFeaturesetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='featureset', full_name='github.com.metaprov.modelaapi.services.featureset.v1.CreateFeaturesetRequest.featureset', index=0,
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
  serialized_start=658,
  serialized_end=769,
)


_CREATEFEATURESETRESPONSE = _descriptor.Descriptor(
  name='CreateFeaturesetResponse',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.CreateFeaturesetResponse',
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
  serialized_start=771,
  serialized_end=797,
)


_UPDATEFEATURESETREQUEST = _descriptor.Descriptor(
  name='UpdateFeaturesetRequest',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.UpdateFeaturesetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='featureset', full_name='github.com.metaprov.modelaapi.services.featureset.v1.UpdateFeaturesetRequest.featureset', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='field_mask', full_name='github.com.metaprov.modelaapi.services.featureset.v1.UpdateFeaturesetRequest.field_mask', index=1,
      number=2, type=11, cpp_type=10, label=1,
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
  serialized_start=800,
  serialized_end=959,
)


_UPDATEFEATURESETRESPONSE = _descriptor.Descriptor(
  name='UpdateFeaturesetResponse',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.UpdateFeaturesetResponse',
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
  serialized_start=961,
  serialized_end=987,
)


_GETFEATURESETREQUEST = _descriptor.Descriptor(
  name='GetFeaturesetRequest',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetRequest.name', index=1,
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
  serialized_start=989,
  serialized_end=1044,
)


_GETFEATURESETRESPONSE = _descriptor.Descriptor(
  name='GetFeaturesetResponse',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetResponse.yaml', index=1,
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
  serialized_start=1046,
  serialized_end=1163,
)


_DELETEFEATURESETREQUEST = _descriptor.Descriptor(
  name='DeleteFeaturesetRequest',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.DeleteFeaturesetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.featureset.v1.DeleteFeaturesetRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.featureset.v1.DeleteFeaturesetRequest.name', index=1,
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
  serialized_start=1165,
  serialized_end=1223,
)


_DELETEFEATURESETRESPONSE = _descriptor.Descriptor(
  name='DeleteFeaturesetResponse',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.DeleteFeaturesetResponse',
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
  serialized_start=1225,
  serialized_end=1251,
)

_LISTFEATURESETREQUEST_LABELSENTRY.containing_type = _LISTFEATURESETREQUEST
_LISTFEATURESETREQUEST.fields_by_name['labels'].message_type = _LISTFEATURESETREQUEST_LABELSENTRY
_LISTFEATURESETRESPONSE.fields_by_name['featuresets'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURESETLIST
_CREATEFEATURESETREQUEST.fields_by_name['featureset'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURESET
_UPDATEFEATURESETREQUEST.fields_by_name['featureset'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURESET
_UPDATEFEATURESETREQUEST.fields_by_name['field_mask'].message_type = google_dot_protobuf_dot_field__mask__pb2._FIELDMASK
_GETFEATURESETRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURESET
DESCRIPTOR.message_types_by_name['ListFeaturesetRequest'] = _LISTFEATURESETREQUEST
DESCRIPTOR.message_types_by_name['ListFeaturesetResponse'] = _LISTFEATURESETRESPONSE
DESCRIPTOR.message_types_by_name['CreateFeaturesetRequest'] = _CREATEFEATURESETREQUEST
DESCRIPTOR.message_types_by_name['CreateFeaturesetResponse'] = _CREATEFEATURESETRESPONSE
DESCRIPTOR.message_types_by_name['UpdateFeaturesetRequest'] = _UPDATEFEATURESETREQUEST
DESCRIPTOR.message_types_by_name['UpdateFeaturesetResponse'] = _UPDATEFEATURESETRESPONSE
DESCRIPTOR.message_types_by_name['GetFeaturesetRequest'] = _GETFEATURESETREQUEST
DESCRIPTOR.message_types_by_name['GetFeaturesetResponse'] = _GETFEATURESETRESPONSE
DESCRIPTOR.message_types_by_name['DeleteFeaturesetRequest'] = _DELETEFEATURESETREQUEST
DESCRIPTOR.message_types_by_name['DeleteFeaturesetResponse'] = _DELETEFEATURESETRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListFeaturesetRequest = _reflection.GeneratedProtocolMessageType('ListFeaturesetRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTFEATURESETREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTFEATURESETREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetRequest)
  })
_sym_db.RegisterMessage(ListFeaturesetRequest)
_sym_db.RegisterMessage(ListFeaturesetRequest.LabelsEntry)

ListFeaturesetResponse = _reflection.GeneratedProtocolMessageType('ListFeaturesetResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTFEATURESETRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.ListFeaturesetResponse)
  })
_sym_db.RegisterMessage(ListFeaturesetResponse)

CreateFeaturesetRequest = _reflection.GeneratedProtocolMessageType('CreateFeaturesetRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEFEATURESETREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.CreateFeaturesetRequest)
  })
_sym_db.RegisterMessage(CreateFeaturesetRequest)

CreateFeaturesetResponse = _reflection.GeneratedProtocolMessageType('CreateFeaturesetResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEFEATURESETRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.CreateFeaturesetResponse)
  })
_sym_db.RegisterMessage(CreateFeaturesetResponse)

UpdateFeaturesetRequest = _reflection.GeneratedProtocolMessageType('UpdateFeaturesetRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEFEATURESETREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.UpdateFeaturesetRequest)
  })
_sym_db.RegisterMessage(UpdateFeaturesetRequest)

UpdateFeaturesetResponse = _reflection.GeneratedProtocolMessageType('UpdateFeaturesetResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEFEATURESETRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.UpdateFeaturesetResponse)
  })
_sym_db.RegisterMessage(UpdateFeaturesetResponse)

GetFeaturesetRequest = _reflection.GeneratedProtocolMessageType('GetFeaturesetRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATURESETREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetRequest)
  })
_sym_db.RegisterMessage(GetFeaturesetRequest)

GetFeaturesetResponse = _reflection.GeneratedProtocolMessageType('GetFeaturesetResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATURESETRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.GetFeaturesetResponse)
  })
_sym_db.RegisterMessage(GetFeaturesetResponse)

DeleteFeaturesetRequest = _reflection.GeneratedProtocolMessageType('DeleteFeaturesetRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATURESETREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.DeleteFeaturesetRequest)
  })
_sym_db.RegisterMessage(DeleteFeaturesetRequest)

DeleteFeaturesetResponse = _reflection.GeneratedProtocolMessageType('DeleteFeaturesetResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATURESETRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featureset.v1.featureset_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featureset.v1.DeleteFeaturesetResponse)
  })
_sym_db.RegisterMessage(DeleteFeaturesetResponse)


DESCRIPTOR._options = None
_LISTFEATURESETREQUEST_LABELSENTRY._options = None

_FEATURESETSERVICE = _descriptor.ServiceDescriptor(
  name='FeaturesetService',
  full_name='github.com.metaprov.modelaapi.services.featureset.v1.FeaturesetService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1254,
  serialized_end=2387,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListFeaturesets',
    full_name='github.com.metaprov.modelaapi.services.featureset.v1.FeaturesetService.ListFeaturesets',
    index=0,
    containing_service=None,
    input_type=_LISTFEATURESETREQUEST,
    output_type=_LISTFEATURESETRESPONSE,
    serialized_options=b'\202\323\344\223\002\035\022\033/v1/featuresets/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateFeatureset',
    full_name='github.com.metaprov.modelaapi.services.featureset.v1.FeaturesetService.CreateFeatureset',
    index=1,
    containing_service=None,
    input_type=_CREATEFEATURESETREQUEST,
    output_type=_CREATEFEATURESETRESPONSE,
    serialized_options=b'\202\323\344\223\002\024\"\017/v1/featuresets:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetFeatureset',
    full_name='github.com.metaprov.modelaapi.services.featureset.v1.FeaturesetService.GetFeatureset',
    index=2,
    containing_service=None,
    input_type=_GETFEATURESETREQUEST,
    output_type=_GETFEATURESETRESPONSE,
    serialized_options=b'\202\323\344\223\002$\022\"/v1/featuresets/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateFeatureset',
    full_name='github.com.metaprov.modelaapi.services.featureset.v1.FeaturesetService.UpdateFeatureset',
    index=3,
    containing_service=None,
    input_type=_UPDATEFEATURESETREQUEST,
    output_type=_UPDATEFEATURESETRESPONSE,
    serialized_options=b'\202\323\344\223\002C\032>/v1/featuresets/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteFeatureset',
    full_name='github.com.metaprov.modelaapi.services.featureset.v1.FeaturesetService.DeleteFeatureset',
    index=4,
    containing_service=None,
    input_type=_DELETEFEATURESETREQUEST,
    output_type=_DELETEFEATURESETRESPONSE,
    serialized_options=b'\202\323\344\223\002$*\"/v1/featuresets/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_FEATURESETSERVICE)

DESCRIPTOR.services_by_name['FeaturesetService'] = _FEATURESETSERVICE

# @@protoc_insertion_point(module_scope)
