# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/notebook/v1/notebook.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/notebook/v1/notebook.proto',
  package='github.com.metaprov.modelaapi.services.notebook.v1',
  syntax='proto3',
  serialized_options=b'Z2github.com/metaprov/modelaapi/services/notebook/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nAgithub.com/metaprov/modelaapi/services/notebook/v1/notebook.proto\x12\x32github.com.metaprov.modelaapi.services.notebook.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xf7\x01\n\x14ListNotebooksRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x64\n\x06labels\x18\x02 \x03(\x0b\x32T.github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x8b\x01\n\x15ListNotebooksResponse\x12Y\n\tnotebooks\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.NotebookList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x12\n\x10NotebookResponse\"m\n\x15\x43reateNotebookRequest\x12T\n\x08notebook\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Notebook\"\x18\n\x16\x43reateNotebookResponse\"\x9d\x01\n\x15UpdateNotebookRequest\x12T\n\x08notebook\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Notebook\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x18\n\x16UpdateNotebookResponse\"5\n\x12GetNotebookRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"y\n\x13GetNotebookResponse\x12T\n\x08notebook\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Notebook\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"8\n\x15\x44\x65leteNotebookRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x18\n\x16\x44\x65leteNotebookResponse2\xa5\x08\n\x0fNotebookService\x12\xbb\x01\n\rListNotebooks\x12H.github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest\x1aI.github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksResponse\"\x15\x82\xd3\xe4\x93\x02\x0f\x12\r/v1/notebooks\x12\xc1\x01\n\x0e\x43reateNotebook\x12I.github.com.metaprov.modelaapi.services.notebook.v1.CreateNotebookRequest\x1aJ.github.com.metaprov.modelaapi.services.notebook.v1.CreateNotebookResponse\"\x18\x82\xd3\xe4\x93\x02\x12\"\r/v1/notebooks:\x01*\x12\xc8\x01\n\x0bGetNotebook\x12\x46.github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookRequest\x1aG.github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookResponse\"(\x82\xd3\xe4\x93\x02\"\x12 /v1/notebooks/{namespace}/{name}\x12\xf0\x01\n\x0eUpdateNotebook\x12I.github.com.metaprov.modelaapi.services.notebook.v1.UpdateNotebookRequest\x1aJ.github.com.metaprov.modelaapi.services.notebook.v1.UpdateNotebookResponse\"G\x82\xd3\xe4\x93\x02\x41\x1a</v1/notebooks/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xd1\x01\n\x0e\x44\x65leteNotebook\x12I.github.com.metaprov.modelaapi.services.notebook.v1.DeleteNotebookRequest\x1aJ.github.com.metaprov.modelaapi.services.notebook.v1.DeleteNotebookResponse\"(\x82\xd3\xe4\x93\x02\"* /v1/notebooks/{namespace}/{name}B4Z2github.com/metaprov/modelaapi/services/notebook/v1b\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_field__mask__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTNOTEBOOKSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.LabelsEntry.value', index=1,
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
  serialized_start=525,
  serialized_end=570,
)

_LISTNOTEBOOKSREQUEST = _descriptor.Descriptor(
  name='ListNotebooksRequest',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTNOTEBOOKSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=323,
  serialized_end=570,
)


_LISTNOTEBOOKSRESPONSE = _descriptor.Descriptor(
  name='ListNotebooksResponse',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='notebooks', full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksResponse.notebooks', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_token', full_name='github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksResponse.next_page_token', index=1,
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
  serialized_start=573,
  serialized_end=712,
)


_NOTEBOOKRESPONSE = _descriptor.Descriptor(
  name='NotebookResponse',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.NotebookResponse',
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
  serialized_start=714,
  serialized_end=732,
)


_CREATENOTEBOOKREQUEST = _descriptor.Descriptor(
  name='CreateNotebookRequest',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.CreateNotebookRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='notebook', full_name='github.com.metaprov.modelaapi.services.notebook.v1.CreateNotebookRequest.notebook', index=0,
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
  serialized_start=734,
  serialized_end=843,
)


_CREATENOTEBOOKRESPONSE = _descriptor.Descriptor(
  name='CreateNotebookResponse',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.CreateNotebookResponse',
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
  serialized_start=845,
  serialized_end=869,
)


_UPDATENOTEBOOKREQUEST = _descriptor.Descriptor(
  name='UpdateNotebookRequest',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.UpdateNotebookRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='notebook', full_name='github.com.metaprov.modelaapi.services.notebook.v1.UpdateNotebookRequest.notebook', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='field_mask', full_name='github.com.metaprov.modelaapi.services.notebook.v1.UpdateNotebookRequest.field_mask', index=1,
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
  serialized_start=872,
  serialized_end=1029,
)


_UPDATENOTEBOOKRESPONSE = _descriptor.Descriptor(
  name='UpdateNotebookResponse',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.UpdateNotebookResponse',
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
  serialized_start=1031,
  serialized_end=1055,
)


_GETNOTEBOOKREQUEST = _descriptor.Descriptor(
  name='GetNotebookRequest',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookRequest.name', index=1,
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
  serialized_start=1057,
  serialized_end=1110,
)


_GETNOTEBOOKRESPONSE = _descriptor.Descriptor(
  name='GetNotebookResponse',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='notebook', full_name='github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookResponse.notebook', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookResponse.yaml', index=1,
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
  serialized_start=1112,
  serialized_end=1233,
)


_DELETENOTEBOOKREQUEST = _descriptor.Descriptor(
  name='DeleteNotebookRequest',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.DeleteNotebookRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.notebook.v1.DeleteNotebookRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.notebook.v1.DeleteNotebookRequest.name', index=1,
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
  serialized_start=1235,
  serialized_end=1291,
)


_DELETENOTEBOOKRESPONSE = _descriptor.Descriptor(
  name='DeleteNotebookResponse',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.DeleteNotebookResponse',
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
  serialized_start=1293,
  serialized_end=1317,
)

_LISTNOTEBOOKSREQUEST_LABELSENTRY.containing_type = _LISTNOTEBOOKSREQUEST
_LISTNOTEBOOKSREQUEST.fields_by_name['labels'].message_type = _LISTNOTEBOOKSREQUEST_LABELSENTRY
_LISTNOTEBOOKSRESPONSE.fields_by_name['notebooks'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._NOTEBOOKLIST
_CREATENOTEBOOKREQUEST.fields_by_name['notebook'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._NOTEBOOK
_UPDATENOTEBOOKREQUEST.fields_by_name['notebook'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._NOTEBOOK
_UPDATENOTEBOOKREQUEST.fields_by_name['field_mask'].message_type = google_dot_protobuf_dot_field__mask__pb2._FIELDMASK
_GETNOTEBOOKRESPONSE.fields_by_name['notebook'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._NOTEBOOK
DESCRIPTOR.message_types_by_name['ListNotebooksRequest'] = _LISTNOTEBOOKSREQUEST
DESCRIPTOR.message_types_by_name['ListNotebooksResponse'] = _LISTNOTEBOOKSRESPONSE
DESCRIPTOR.message_types_by_name['NotebookResponse'] = _NOTEBOOKRESPONSE
DESCRIPTOR.message_types_by_name['CreateNotebookRequest'] = _CREATENOTEBOOKREQUEST
DESCRIPTOR.message_types_by_name['CreateNotebookResponse'] = _CREATENOTEBOOKRESPONSE
DESCRIPTOR.message_types_by_name['UpdateNotebookRequest'] = _UPDATENOTEBOOKREQUEST
DESCRIPTOR.message_types_by_name['UpdateNotebookResponse'] = _UPDATENOTEBOOKRESPONSE
DESCRIPTOR.message_types_by_name['GetNotebookRequest'] = _GETNOTEBOOKREQUEST
DESCRIPTOR.message_types_by_name['GetNotebookResponse'] = _GETNOTEBOOKRESPONSE
DESCRIPTOR.message_types_by_name['DeleteNotebookRequest'] = _DELETENOTEBOOKREQUEST
DESCRIPTOR.message_types_by_name['DeleteNotebookResponse'] = _DELETENOTEBOOKRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListNotebooksRequest = _reflection.GeneratedProtocolMessageType('ListNotebooksRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTNOTEBOOKSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTNOTEBOOKSREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksRequest)
  })
_sym_db.RegisterMessage(ListNotebooksRequest)
_sym_db.RegisterMessage(ListNotebooksRequest.LabelsEntry)

ListNotebooksResponse = _reflection.GeneratedProtocolMessageType('ListNotebooksResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTNOTEBOOKSRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.ListNotebooksResponse)
  })
_sym_db.RegisterMessage(ListNotebooksResponse)

NotebookResponse = _reflection.GeneratedProtocolMessageType('NotebookResponse', (_message.Message,), {
  'DESCRIPTOR' : _NOTEBOOKRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.NotebookResponse)
  })
_sym_db.RegisterMessage(NotebookResponse)

CreateNotebookRequest = _reflection.GeneratedProtocolMessageType('CreateNotebookRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATENOTEBOOKREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.CreateNotebookRequest)
  })
_sym_db.RegisterMessage(CreateNotebookRequest)

CreateNotebookResponse = _reflection.GeneratedProtocolMessageType('CreateNotebookResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATENOTEBOOKRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.CreateNotebookResponse)
  })
_sym_db.RegisterMessage(CreateNotebookResponse)

UpdateNotebookRequest = _reflection.GeneratedProtocolMessageType('UpdateNotebookRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATENOTEBOOKREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.UpdateNotebookRequest)
  })
_sym_db.RegisterMessage(UpdateNotebookRequest)

UpdateNotebookResponse = _reflection.GeneratedProtocolMessageType('UpdateNotebookResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATENOTEBOOKRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.UpdateNotebookResponse)
  })
_sym_db.RegisterMessage(UpdateNotebookResponse)

GetNotebookRequest = _reflection.GeneratedProtocolMessageType('GetNotebookRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETNOTEBOOKREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookRequest)
  })
_sym_db.RegisterMessage(GetNotebookRequest)

GetNotebookResponse = _reflection.GeneratedProtocolMessageType('GetNotebookResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETNOTEBOOKRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.GetNotebookResponse)
  })
_sym_db.RegisterMessage(GetNotebookResponse)

DeleteNotebookRequest = _reflection.GeneratedProtocolMessageType('DeleteNotebookRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETENOTEBOOKREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.DeleteNotebookRequest)
  })
_sym_db.RegisterMessage(DeleteNotebookRequest)

DeleteNotebookResponse = _reflection.GeneratedProtocolMessageType('DeleteNotebookResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETENOTEBOOKRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebook.v1.notebook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebook.v1.DeleteNotebookResponse)
  })
_sym_db.RegisterMessage(DeleteNotebookResponse)


DESCRIPTOR._options = None
_LISTNOTEBOOKSREQUEST_LABELSENTRY._options = None

_NOTEBOOKSERVICE = _descriptor.ServiceDescriptor(
  name='NotebookService',
  full_name='github.com.metaprov.modelaapi.services.notebook.v1.NotebookService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1320,
  serialized_end=2381,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListNotebooks',
    full_name='github.com.metaprov.modelaapi.services.notebook.v1.NotebookService.ListNotebooks',
    index=0,
    containing_service=None,
    input_type=_LISTNOTEBOOKSREQUEST,
    output_type=_LISTNOTEBOOKSRESPONSE,
    serialized_options=b'\202\323\344\223\002\017\022\r/v1/notebooks',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateNotebook',
    full_name='github.com.metaprov.modelaapi.services.notebook.v1.NotebookService.CreateNotebook',
    index=1,
    containing_service=None,
    input_type=_CREATENOTEBOOKREQUEST,
    output_type=_CREATENOTEBOOKRESPONSE,
    serialized_options=b'\202\323\344\223\002\022\"\r/v1/notebooks:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetNotebook',
    full_name='github.com.metaprov.modelaapi.services.notebook.v1.NotebookService.GetNotebook',
    index=2,
    containing_service=None,
    input_type=_GETNOTEBOOKREQUEST,
    output_type=_GETNOTEBOOKRESPONSE,
    serialized_options=b'\202\323\344\223\002\"\022 /v1/notebooks/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateNotebook',
    full_name='github.com.metaprov.modelaapi.services.notebook.v1.NotebookService.UpdateNotebook',
    index=3,
    containing_service=None,
    input_type=_UPDATENOTEBOOKREQUEST,
    output_type=_UPDATENOTEBOOKRESPONSE,
    serialized_options=b'\202\323\344\223\002A\032</v1/notebooks/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteNotebook',
    full_name='github.com.metaprov.modelaapi.services.notebook.v1.NotebookService.DeleteNotebook',
    index=4,
    containing_service=None,
    input_type=_DELETENOTEBOOKREQUEST,
    output_type=_DELETENOTEBOOKRESPONSE,
    serialized_options=b'\202\323\344\223\002\"* /v1/notebooks/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_NOTEBOOKSERVICE)

DESCRIPTOR.services_by_name['NotebookService'] = _NOTEBOOKSERVICE

# @@protoc_insertion_point(module_scope)
