# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/runbook/v1/runbook.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/runbook/v1/runbook.proto',
  package='github.com.metaprov.modelaapi.services.runbook.v1',
  syntax='proto3',
  serialized_options=b'Z1github.com/metaprov/modelaapi/services/runbook/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n?github.com/metaprov/modelaapi/services/runbook/v1/runbook.proto\x12\x31github.com.metaprov.modelaapi.services.runbook.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated.proto\"\xf4\x01\n\x13ListRunBooksRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x62\n\x06labels\x18\x02 \x03(\x0b\x32R.github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"h\n\x14ListRunBooksResponse\x12P\n\x05items\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.RunBookList\"c\n\x14\x43reateRunBookRequest\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.RunBook\"\x17\n\x15\x43reateRunBookResponse\"c\n\x14UpdateRunBookRequest\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.RunBook\"\x17\n\x15UpdateRunBookResponse\"4\n\x11GetRunBookRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"o\n\x12GetRunBookResponse\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.RunBook\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"7\n\x14\x44\x65leteRunBookRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x17\n\x15\x44\x65leteRunBookResponse2\x92\x08\n\x0eRunBookService\x12\xc1\x01\n\x0cListRunBooks\x12\x46.github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest\x1aG.github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/runbooks/{namespace}\x12\xbb\x01\n\rCreateRunBook\x12G.github.com.metaprov.modelaapi.services.runbook.v1.CreateRunBookRequest\x1aH.github.com.metaprov.modelaapi.services.runbook.v1.CreateRunBookResponse\"\x17\x82\xd3\xe4\x93\x02\x11\"\x0c/v1/runbooks:\x01*\x12\xc2\x01\n\nGetRunBook\x12\x44.github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookRequest\x1a\x45.github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookResponse\"\'\x82\xd3\xe4\x93\x02!\x12\x1f/v1/runbooks/{namespace}/{name}\x12\xea\x01\n\rUpdateRunBook\x12G.github.com.metaprov.modelaapi.services.runbook.v1.UpdateRunBookRequest\x1aH.github.com.metaprov.modelaapi.services.runbook.v1.UpdateRunBookResponse\"F\x82\xd3\xe4\x93\x02@\x1a;/v1/runbooks/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xcb\x01\n\rDeleteRunBook\x12G.github.com.metaprov.modelaapi.services.runbook.v1.DeleteRunBookRequest\x1aH.github.com.metaprov.modelaapi.services.runbook.v1.DeleteRunBookResponse\"\'\x82\xd3\xe4\x93\x02!*\x1f/v1/runbooks/{namespace}/{name}B3Z1github.com/metaprov/modelaapi/services/runbook/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTRUNBOOKSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.LabelsEntry.value', index=1,
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

_LISTRUNBOOKSREQUEST = _descriptor.Descriptor(
  name='ListRunBooksRequest',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTRUNBOOKSREQUEST_LABELSENTRY, ],
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


_LISTRUNBOOKSRESPONSE = _descriptor.Descriptor(
  name='ListRunBooksResponse',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksResponse.items', index=0,
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


_CREATERUNBOOKREQUEST = _descriptor.Descriptor(
  name='CreateRunBookRequest',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.CreateRunBookRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.runbook.v1.CreateRunBookRequest.item', index=0,
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


_CREATERUNBOOKRESPONSE = _descriptor.Descriptor(
  name='CreateRunBookResponse',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.CreateRunBookResponse',
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


_UPDATERUNBOOKREQUEST = _descriptor.Descriptor(
  name='UpdateRunBookRequest',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.UpdateRunBookRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.runbook.v1.UpdateRunBookRequest.item', index=0,
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


_UPDATERUNBOOKRESPONSE = _descriptor.Descriptor(
  name='UpdateRunBookResponse',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.UpdateRunBookResponse',
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


_GETRUNBOOKREQUEST = _descriptor.Descriptor(
  name='GetRunBookRequest',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookRequest.name', index=1,
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


_GETRUNBOOKRESPONSE = _descriptor.Descriptor(
  name='GetRunBookResponse',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookResponse.yaml', index=1,
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


_DELETERUNBOOKREQUEST = _descriptor.Descriptor(
  name='DeleteRunBookRequest',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.DeleteRunBookRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.runbook.v1.DeleteRunBookRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.runbook.v1.DeleteRunBookRequest.name', index=1,
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


_DELETERUNBOOKRESPONSE = _descriptor.Descriptor(
  name='DeleteRunBookResponse',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.DeleteRunBookResponse',
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

_LISTRUNBOOKSREQUEST_LABELSENTRY.containing_type = _LISTRUNBOOKSREQUEST
_LISTRUNBOOKSREQUEST.fields_by_name['labels'].message_type = _LISTRUNBOOKSREQUEST_LABELSENTRY
_LISTRUNBOOKSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._RUNBOOKLIST
_CREATERUNBOOKREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._RUNBOOK
_UPDATERUNBOOKREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._RUNBOOK
_GETRUNBOOKRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._RUNBOOK
DESCRIPTOR.message_types_by_name['ListRunBooksRequest'] = _LISTRUNBOOKSREQUEST
DESCRIPTOR.message_types_by_name['ListRunBooksResponse'] = _LISTRUNBOOKSRESPONSE
DESCRIPTOR.message_types_by_name['CreateRunBookRequest'] = _CREATERUNBOOKREQUEST
DESCRIPTOR.message_types_by_name['CreateRunBookResponse'] = _CREATERUNBOOKRESPONSE
DESCRIPTOR.message_types_by_name['UpdateRunBookRequest'] = _UPDATERUNBOOKREQUEST
DESCRIPTOR.message_types_by_name['UpdateRunBookResponse'] = _UPDATERUNBOOKRESPONSE
DESCRIPTOR.message_types_by_name['GetRunBookRequest'] = _GETRUNBOOKREQUEST
DESCRIPTOR.message_types_by_name['GetRunBookResponse'] = _GETRUNBOOKRESPONSE
DESCRIPTOR.message_types_by_name['DeleteRunBookRequest'] = _DELETERUNBOOKREQUEST
DESCRIPTOR.message_types_by_name['DeleteRunBookResponse'] = _DELETERUNBOOKRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListRunBooksRequest = _reflection.GeneratedProtocolMessageType('ListRunBooksRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTRUNBOOKSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTRUNBOOKSREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksRequest)
  })
_sym_db.RegisterMessage(ListRunBooksRequest)
_sym_db.RegisterMessage(ListRunBooksRequest.LabelsEntry)

ListRunBooksResponse = _reflection.GeneratedProtocolMessageType('ListRunBooksResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTRUNBOOKSRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.ListRunBooksResponse)
  })
_sym_db.RegisterMessage(ListRunBooksResponse)

CreateRunBookRequest = _reflection.GeneratedProtocolMessageType('CreateRunBookRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATERUNBOOKREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.CreateRunBookRequest)
  })
_sym_db.RegisterMessage(CreateRunBookRequest)

CreateRunBookResponse = _reflection.GeneratedProtocolMessageType('CreateRunBookResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATERUNBOOKRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.CreateRunBookResponse)
  })
_sym_db.RegisterMessage(CreateRunBookResponse)

UpdateRunBookRequest = _reflection.GeneratedProtocolMessageType('UpdateRunBookRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATERUNBOOKREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.UpdateRunBookRequest)
  })
_sym_db.RegisterMessage(UpdateRunBookRequest)

UpdateRunBookResponse = _reflection.GeneratedProtocolMessageType('UpdateRunBookResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATERUNBOOKRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.UpdateRunBookResponse)
  })
_sym_db.RegisterMessage(UpdateRunBookResponse)

GetRunBookRequest = _reflection.GeneratedProtocolMessageType('GetRunBookRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETRUNBOOKREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookRequest)
  })
_sym_db.RegisterMessage(GetRunBookRequest)

GetRunBookResponse = _reflection.GeneratedProtocolMessageType('GetRunBookResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETRUNBOOKRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.GetRunBookResponse)
  })
_sym_db.RegisterMessage(GetRunBookResponse)

DeleteRunBookRequest = _reflection.GeneratedProtocolMessageType('DeleteRunBookRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETERUNBOOKREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.DeleteRunBookRequest)
  })
_sym_db.RegisterMessage(DeleteRunBookRequest)

DeleteRunBookResponse = _reflection.GeneratedProtocolMessageType('DeleteRunBookResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETERUNBOOKRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.runbook.v1.runbook_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.runbook.v1.DeleteRunBookResponse)
  })
_sym_db.RegisterMessage(DeleteRunBookResponse)


DESCRIPTOR._options = None
_LISTRUNBOOKSREQUEST_LABELSENTRY._options = None

_RUNBOOKSERVICE = _descriptor.ServiceDescriptor(
  name='RunBookService',
  full_name='github.com.metaprov.modelaapi.services.runbook.v1.RunBookService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1073,
  serialized_end=2115,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListRunBooks',
    full_name='github.com.metaprov.modelaapi.services.runbook.v1.RunBookService.ListRunBooks',
    index=0,
    containing_service=None,
    input_type=_LISTRUNBOOKSREQUEST,
    output_type=_LISTRUNBOOKSRESPONSE,
    serialized_options=b'\202\323\344\223\002\032\022\030/v1/runbooks/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateRunBook',
    full_name='github.com.metaprov.modelaapi.services.runbook.v1.RunBookService.CreateRunBook',
    index=1,
    containing_service=None,
    input_type=_CREATERUNBOOKREQUEST,
    output_type=_CREATERUNBOOKRESPONSE,
    serialized_options=b'\202\323\344\223\002\021\"\014/v1/runbooks:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetRunBook',
    full_name='github.com.metaprov.modelaapi.services.runbook.v1.RunBookService.GetRunBook',
    index=2,
    containing_service=None,
    input_type=_GETRUNBOOKREQUEST,
    output_type=_GETRUNBOOKRESPONSE,
    serialized_options=b'\202\323\344\223\002!\022\037/v1/runbooks/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateRunBook',
    full_name='github.com.metaprov.modelaapi.services.runbook.v1.RunBookService.UpdateRunBook',
    index=3,
    containing_service=None,
    input_type=_UPDATERUNBOOKREQUEST,
    output_type=_UPDATERUNBOOKRESPONSE,
    serialized_options=b'\202\323\344\223\002@\032;/v1/runbooks/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteRunBook',
    full_name='github.com.metaprov.modelaapi.services.runbook.v1.RunBookService.DeleteRunBook',
    index=4,
    containing_service=None,
    input_type=_DELETERUNBOOKREQUEST,
    output_type=_DELETERUNBOOKRESPONSE,
    serialized_options=b'\202\323\344\223\002!*\037/v1/runbooks/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_RUNBOOKSERVICE)

DESCRIPTOR.services_by_name['RunBookService'] = _RUNBOOKSERVICE

# @@protoc_insertion_point(module_scope)
