# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/featurehistogram/v1/featurehistogram.proto
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
  name='github.com/metaprov/modelaapi/services/featurehistogram/v1/featurehistogram.proto',
  package='github.com.metaprov.modelaapi.services.featurehistogram.v1',
  syntax='proto3',
  serialized_options=b'Z:github.com/metaprov/modelaapi/services/featurehistogram/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nQgithub.com/metaprov/modelaapi/services/featurehistogram/v1/featurehistogram.proto\x12:github.com.metaprov.modelaapi.services.featurehistogram.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\"\x8f\x02\n\x1cListFeatureHistogramsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12t\n\x06labels\x18\x02 \x03(\x0b\x32\x64.github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x98\x01\n\x1dListFeatureHistogramsResponse\x12^\n\nhistograms\x18\x01 \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogramList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x93\x01\n\x1d\x43reateFeatureHistogramRequest\x12Y\n\thistogram\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\" \n\x1e\x43reateFeatureHistogramResponse\"\xa5\x01\n\x1dUpdateFeatureHistogramRequest\x12T\n\x04item\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\" \n\x1eUpdateFeatureHistogramResponse\"=\n\x1aGetFeatureHistogramRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x81\x01\n\x1bGetFeatureHistogramResponse\x12T\n\x04item\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"@\n\x1d\x44\x65leteFeatureHistogramRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\" \n\x1e\x44\x65leteFeatureHistogramResponse2\xa9\n\n\x17\x46\x65\x61tureHistogramService\x12\xf7\x01\n\x15ListFeatureHistograms\x12X.github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest\x1aY.github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsResponse\")\x82\xd3\xe4\x93\x02#\x12!/v1/featurehistograms/{namespace}\x12\xf1\x01\n\x16\x43reateFeatureHistogram\x12Y.github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramRequest\x1aZ.github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramResponse\" \x82\xd3\xe4\x93\x02\x1a\"\x15/v1/featurehistograms:\x01*\x12\xf8\x01\n\x13GetFeatureHistogram\x12V.github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramRequest\x1aW.github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramResponse\"0\x82\xd3\xe4\x93\x02*\x12(/v1/featurehistograms/{namespace}/{name}\x12\xa0\x02\n\x16UpdateFeatureHistogram\x12Y.github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramRequest\x1aZ.github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramResponse\"O\x82\xd3\xe4\x93\x02I\x1a\x44/v1/featurehistograms/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\x81\x02\n\x16\x44\x65leteFeatureHistogram\x12Y.github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramRequest\x1aZ.github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramResponse\"0\x82\xd3\xe4\x93\x02**(/v1/featurehistograms/{namespace}/{name}B<Z:github.com/metaprov/modelaapi/services/featurehistogram/v1b\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_field__mask__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.LabelsEntry.value', index=1,
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
  serialized_start=506,
  serialized_end=551,
)

_LISTFEATUREHISTOGRAMSREQUEST = _descriptor.Descriptor(
  name='ListFeatureHistogramsRequest',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=280,
  serialized_end=551,
)


_LISTFEATUREHISTOGRAMSRESPONSE = _descriptor.Descriptor(
  name='ListFeatureHistogramsResponse',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='histograms', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsResponse.histograms', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_token', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsResponse.next_page_token', index=1,
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
  serialized_start=554,
  serialized_end=706,
)


_CREATEFEATUREHISTOGRAMREQUEST = _descriptor.Descriptor(
  name='CreateFeatureHistogramRequest',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='histogram', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramRequest.histogram', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_token', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramRequest.next_page_token', index=1,
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
  serialized_start=709,
  serialized_end=856,
)


_CREATEFEATUREHISTOGRAMRESPONSE = _descriptor.Descriptor(
  name='CreateFeatureHistogramResponse',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramResponse',
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
  serialized_start=858,
  serialized_end=890,
)


_UPDATEFEATUREHISTOGRAMREQUEST = _descriptor.Descriptor(
  name='UpdateFeatureHistogramRequest',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramRequest.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='field_mask', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramRequest.field_mask', index=1,
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
  serialized_start=893,
  serialized_end=1058,
)


_UPDATEFEATUREHISTOGRAMRESPONSE = _descriptor.Descriptor(
  name='UpdateFeatureHistogramResponse',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramResponse',
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
  serialized_start=1060,
  serialized_end=1092,
)


_GETFEATUREHISTOGRAMREQUEST = _descriptor.Descriptor(
  name='GetFeatureHistogramRequest',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramRequest.name', index=1,
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
  serialized_start=1094,
  serialized_end=1155,
)


_GETFEATUREHISTOGRAMRESPONSE = _descriptor.Descriptor(
  name='GetFeatureHistogramResponse',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramResponse.yaml', index=1,
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
  serialized_start=1158,
  serialized_end=1287,
)


_DELETEFEATUREHISTOGRAMREQUEST = _descriptor.Descriptor(
  name='DeleteFeatureHistogramRequest',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramRequest.name', index=1,
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
  serialized_start=1289,
  serialized_end=1353,
)


_DELETEFEATUREHISTOGRAMRESPONSE = _descriptor.Descriptor(
  name='DeleteFeatureHistogramResponse',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramResponse',
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
  serialized_start=1355,
  serialized_end=1387,
)

_LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY.containing_type = _LISTFEATUREHISTOGRAMSREQUEST
_LISTFEATUREHISTOGRAMSREQUEST.fields_by_name['labels'].message_type = _LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY
_LISTFEATUREHISTOGRAMSRESPONSE.fields_by_name['histograms'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATUREHISTOGRAMLIST
_CREATEFEATUREHISTOGRAMREQUEST.fields_by_name['histogram'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATUREHISTOGRAM
_UPDATEFEATUREHISTOGRAMREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATUREHISTOGRAM
_UPDATEFEATUREHISTOGRAMREQUEST.fields_by_name['field_mask'].message_type = google_dot_protobuf_dot_field__mask__pb2._FIELDMASK
_GETFEATUREHISTOGRAMRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATUREHISTOGRAM
DESCRIPTOR.message_types_by_name['ListFeatureHistogramsRequest'] = _LISTFEATUREHISTOGRAMSREQUEST
DESCRIPTOR.message_types_by_name['ListFeatureHistogramsResponse'] = _LISTFEATUREHISTOGRAMSRESPONSE
DESCRIPTOR.message_types_by_name['CreateFeatureHistogramRequest'] = _CREATEFEATUREHISTOGRAMREQUEST
DESCRIPTOR.message_types_by_name['CreateFeatureHistogramResponse'] = _CREATEFEATUREHISTOGRAMRESPONSE
DESCRIPTOR.message_types_by_name['UpdateFeatureHistogramRequest'] = _UPDATEFEATUREHISTOGRAMREQUEST
DESCRIPTOR.message_types_by_name['UpdateFeatureHistogramResponse'] = _UPDATEFEATUREHISTOGRAMRESPONSE
DESCRIPTOR.message_types_by_name['GetFeatureHistogramRequest'] = _GETFEATUREHISTOGRAMREQUEST
DESCRIPTOR.message_types_by_name['GetFeatureHistogramResponse'] = _GETFEATUREHISTOGRAMRESPONSE
DESCRIPTOR.message_types_by_name['DeleteFeatureHistogramRequest'] = _DELETEFEATUREHISTOGRAMREQUEST
DESCRIPTOR.message_types_by_name['DeleteFeatureHistogramResponse'] = _DELETEFEATUREHISTOGRAMRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListFeatureHistogramsRequest = _reflection.GeneratedProtocolMessageType('ListFeatureHistogramsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTFEATUREHISTOGRAMSREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest)
  })
_sym_db.RegisterMessage(ListFeatureHistogramsRequest)
_sym_db.RegisterMessage(ListFeatureHistogramsRequest.LabelsEntry)

ListFeatureHistogramsResponse = _reflection.GeneratedProtocolMessageType('ListFeatureHistogramsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTFEATUREHISTOGRAMSRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsResponse)
  })
_sym_db.RegisterMessage(ListFeatureHistogramsResponse)

CreateFeatureHistogramRequest = _reflection.GeneratedProtocolMessageType('CreateFeatureHistogramRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEFEATUREHISTOGRAMREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramRequest)
  })
_sym_db.RegisterMessage(CreateFeatureHistogramRequest)

CreateFeatureHistogramResponse = _reflection.GeneratedProtocolMessageType('CreateFeatureHistogramResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEFEATUREHISTOGRAMRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramResponse)
  })
_sym_db.RegisterMessage(CreateFeatureHistogramResponse)

UpdateFeatureHistogramRequest = _reflection.GeneratedProtocolMessageType('UpdateFeatureHistogramRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEFEATUREHISTOGRAMREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramRequest)
  })
_sym_db.RegisterMessage(UpdateFeatureHistogramRequest)

UpdateFeatureHistogramResponse = _reflection.GeneratedProtocolMessageType('UpdateFeatureHistogramResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEFEATUREHISTOGRAMRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramResponse)
  })
_sym_db.RegisterMessage(UpdateFeatureHistogramResponse)

GetFeatureHistogramRequest = _reflection.GeneratedProtocolMessageType('GetFeatureHistogramRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATUREHISTOGRAMREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramRequest)
  })
_sym_db.RegisterMessage(GetFeatureHistogramRequest)

GetFeatureHistogramResponse = _reflection.GeneratedProtocolMessageType('GetFeatureHistogramResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATUREHISTOGRAMRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramResponse)
  })
_sym_db.RegisterMessage(GetFeatureHistogramResponse)

DeleteFeatureHistogramRequest = _reflection.GeneratedProtocolMessageType('DeleteFeatureHistogramRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATUREHISTOGRAMREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramRequest)
  })
_sym_db.RegisterMessage(DeleteFeatureHistogramRequest)

DeleteFeatureHistogramResponse = _reflection.GeneratedProtocolMessageType('DeleteFeatureHistogramResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATUREHISTOGRAMRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramResponse)
  })
_sym_db.RegisterMessage(DeleteFeatureHistogramResponse)


DESCRIPTOR._options = None
_LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY._options = None

_FEATUREHISTOGRAMSERVICE = _descriptor.ServiceDescriptor(
  name='FeatureHistogramService',
  full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1390,
  serialized_end=2711,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListFeatureHistograms',
    full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService.ListFeatureHistograms',
    index=0,
    containing_service=None,
    input_type=_LISTFEATUREHISTOGRAMSREQUEST,
    output_type=_LISTFEATUREHISTOGRAMSRESPONSE,
    serialized_options=b'\202\323\344\223\002#\022!/v1/featurehistograms/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateFeatureHistogram',
    full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService.CreateFeatureHistogram',
    index=1,
    containing_service=None,
    input_type=_CREATEFEATUREHISTOGRAMREQUEST,
    output_type=_CREATEFEATUREHISTOGRAMRESPONSE,
    serialized_options=b'\202\323\344\223\002\032\"\025/v1/featurehistograms:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetFeatureHistogram',
    full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService.GetFeatureHistogram',
    index=2,
    containing_service=None,
    input_type=_GETFEATUREHISTOGRAMREQUEST,
    output_type=_GETFEATUREHISTOGRAMRESPONSE,
    serialized_options=b'\202\323\344\223\002*\022(/v1/featurehistograms/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateFeatureHistogram',
    full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService.UpdateFeatureHistogram',
    index=3,
    containing_service=None,
    input_type=_UPDATEFEATUREHISTOGRAMREQUEST,
    output_type=_UPDATEFEATUREHISTOGRAMRESPONSE,
    serialized_options=b'\202\323\344\223\002I\032D/v1/featurehistograms/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteFeatureHistogram',
    full_name='github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService.DeleteFeatureHistogram',
    index=4,
    containing_service=None,
    input_type=_DELETEFEATUREHISTOGRAMREQUEST,
    output_type=_DELETEFEATUREHISTOGRAMRESPONSE,
    serialized_options=b'\202\323\344\223\002**(/v1/featurehistograms/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_FEATUREHISTOGRAMSERVICE)

DESCRIPTOR.services_by_name['FeatureHistogramService'] = _FEATUREHISTOGRAMSERVICE

# @@protoc_insertion_point(module_scope)
