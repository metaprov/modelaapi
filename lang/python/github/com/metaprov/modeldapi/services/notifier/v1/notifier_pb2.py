# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/notifier/v1/notifier.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/notifier/v1/notifier.proto',
  package='github.com.metaprov.modelaapi.services.notifier.v1',
  syntax='proto3',
  serialized_options=b'Z2github.com/metaprov/modelaapi/services/notifier/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nAgithub.com/metaprov/modelaapi/services/notifier/v1/notifier.proto\x12\x32github.com.metaprov.modelaapi.services.notifier.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xbe\x01\n\x14ListNotifiersRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x64\n\x06labels\x18\x03 \x03(\x0b\x32T.github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"k\n\x15ListNotifiersResponse\x12R\n\x05items\x18\x01 \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList\"\x12\n\x10NotifierResponse\"f\n\x15\x43reateNotifierRequest\x12M\n\x04item\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier\"\x18\n\x16\x43reateNotifierResponse\"f\n\x15UpdateNotifierRequest\x12M\n\x04item\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier\"\x18\n\x16UpdateNotifierResponse\"5\n\x12GetNotifierRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"r\n\x13GetNotifierResponse\x12M\n\x04item\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"8\n\x15\x44\x65leteNotifierRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x18\n\x16\x44\x65leteNotifierResponse2\xbb\x08\n\x0fNotifierService\x12\xc5\x01\n\rListNotifiers\x12H.github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest\x1aI.github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/api/v1alpha1/notifiers\x12\xcb\x01\n\x0e\x43reateNotifier\x12I.github.com.metaprov.modelaapi.services.notifier.v1.CreateNotifierRequest\x1aJ.github.com.metaprov.modelaapi.services.notifier.v1.CreateNotifierResponse\"\"\x82\xd3\xe4\x93\x02\x1c\"\x17/api/v1alpha1/notifiers:\x01*\x12\xc6\x01\n\x0bGetNotifier\x12\x46.github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierRequest\x1aG.github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/api/v1alpha1/notifiers/{name}\x12\xe4\x01\n\x0eUpdateNotifier\x12I.github.com.metaprov.modelaapi.services.notifier.v1.UpdateNotifierRequest\x1aJ.github.com.metaprov.modelaapi.services.notifier.v1.UpdateNotifierResponse\";\x82\xd3\xe4\x93\x02\x35\x1a\x30/api/v1alpha1/notifiers/{notifier.metadata.name}:\x01*\x12\xe1\x01\n\x0e\x44\x65leteNotifier\x12I.github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierRequest\x1aJ.github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierResponse\"8\x82\xd3\xe4\x93\x02\x32*0/api/v1alpha1/notifiers/{notifier.metadata.name}B4Z2github.com/metaprov/modelaapi/services/notifier/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTNOTIFIERSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest.LabelsEntry.value', index=1,
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
  serialized_start=431,
  serialized_end=476,
)

_LISTNOTIFIERSREQUEST = _descriptor.Descriptor(
  name='ListNotifiersRequest',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest.labels', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTNOTIFIERSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=286,
  serialized_end=476,
)


_LISTNOTIFIERSRESPONSE = _descriptor.Descriptor(
  name='ListNotifiersResponse',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersResponse.items', index=0,
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
  serialized_start=478,
  serialized_end=585,
)


_NOTIFIERRESPONSE = _descriptor.Descriptor(
  name='NotifierResponse',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.NotifierResponse',
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
  serialized_start=587,
  serialized_end=605,
)


_CREATENOTIFIERREQUEST = _descriptor.Descriptor(
  name='CreateNotifierRequest',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.CreateNotifierRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.notifier.v1.CreateNotifierRequest.item', index=0,
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
  serialized_start=607,
  serialized_end=709,
)


_CREATENOTIFIERRESPONSE = _descriptor.Descriptor(
  name='CreateNotifierResponse',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.CreateNotifierResponse',
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
  serialized_start=711,
  serialized_end=735,
)


_UPDATENOTIFIERREQUEST = _descriptor.Descriptor(
  name='UpdateNotifierRequest',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.UpdateNotifierRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.notifier.v1.UpdateNotifierRequest.item', index=0,
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
  serialized_start=737,
  serialized_end=839,
)


_UPDATENOTIFIERRESPONSE = _descriptor.Descriptor(
  name='UpdateNotifierResponse',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.UpdateNotifierResponse',
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
  serialized_start=841,
  serialized_end=865,
)


_GETNOTIFIERREQUEST = _descriptor.Descriptor(
  name='GetNotifierRequest',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierRequest.name', index=1,
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
  serialized_start=867,
  serialized_end=920,
)


_GETNOTIFIERRESPONSE = _descriptor.Descriptor(
  name='GetNotifierResponse',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierResponse.yaml', index=1,
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
  serialized_start=922,
  serialized_end=1036,
)


_DELETENOTIFIERREQUEST = _descriptor.Descriptor(
  name='DeleteNotifierRequest',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierRequest.name', index=1,
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
  serialized_start=1038,
  serialized_end=1094,
)


_DELETENOTIFIERRESPONSE = _descriptor.Descriptor(
  name='DeleteNotifierResponse',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierResponse',
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
  serialized_start=1096,
  serialized_end=1120,
)

_LISTNOTIFIERSREQUEST_LABELSENTRY.containing_type = _LISTNOTIFIERSREQUEST
_LISTNOTIFIERSREQUEST.fields_by_name['labels'].message_type = _LISTNOTIFIERSREQUEST_LABELSENTRY
_LISTNOTIFIERSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._NOTIFIERLIST
_CREATENOTIFIERREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._NOTIFIER
_UPDATENOTIFIERREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._NOTIFIER
_GETNOTIFIERRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._NOTIFIER
DESCRIPTOR.message_types_by_name['ListNotifiersRequest'] = _LISTNOTIFIERSREQUEST
DESCRIPTOR.message_types_by_name['ListNotifiersResponse'] = _LISTNOTIFIERSRESPONSE
DESCRIPTOR.message_types_by_name['NotifierResponse'] = _NOTIFIERRESPONSE
DESCRIPTOR.message_types_by_name['CreateNotifierRequest'] = _CREATENOTIFIERREQUEST
DESCRIPTOR.message_types_by_name['CreateNotifierResponse'] = _CREATENOTIFIERRESPONSE
DESCRIPTOR.message_types_by_name['UpdateNotifierRequest'] = _UPDATENOTIFIERREQUEST
DESCRIPTOR.message_types_by_name['UpdateNotifierResponse'] = _UPDATENOTIFIERRESPONSE
DESCRIPTOR.message_types_by_name['GetNotifierRequest'] = _GETNOTIFIERREQUEST
DESCRIPTOR.message_types_by_name['GetNotifierResponse'] = _GETNOTIFIERRESPONSE
DESCRIPTOR.message_types_by_name['DeleteNotifierRequest'] = _DELETENOTIFIERREQUEST
DESCRIPTOR.message_types_by_name['DeleteNotifierResponse'] = _DELETENOTIFIERRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListNotifiersRequest = _reflection.GeneratedProtocolMessageType('ListNotifiersRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTNOTIFIERSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTNOTIFIERSREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest)
  })
_sym_db.RegisterMessage(ListNotifiersRequest)
_sym_db.RegisterMessage(ListNotifiersRequest.LabelsEntry)

ListNotifiersResponse = _reflection.GeneratedProtocolMessageType('ListNotifiersResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTNOTIFIERSRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersResponse)
  })
_sym_db.RegisterMessage(ListNotifiersResponse)

NotifierResponse = _reflection.GeneratedProtocolMessageType('NotifierResponse', (_message.Message,), {
  'DESCRIPTOR' : _NOTIFIERRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.NotifierResponse)
  })
_sym_db.RegisterMessage(NotifierResponse)

CreateNotifierRequest = _reflection.GeneratedProtocolMessageType('CreateNotifierRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATENOTIFIERREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.CreateNotifierRequest)
  })
_sym_db.RegisterMessage(CreateNotifierRequest)

CreateNotifierResponse = _reflection.GeneratedProtocolMessageType('CreateNotifierResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATENOTIFIERRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.CreateNotifierResponse)
  })
_sym_db.RegisterMessage(CreateNotifierResponse)

UpdateNotifierRequest = _reflection.GeneratedProtocolMessageType('UpdateNotifierRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATENOTIFIERREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.UpdateNotifierRequest)
  })
_sym_db.RegisterMessage(UpdateNotifierRequest)

UpdateNotifierResponse = _reflection.GeneratedProtocolMessageType('UpdateNotifierResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATENOTIFIERRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.UpdateNotifierResponse)
  })
_sym_db.RegisterMessage(UpdateNotifierResponse)

GetNotifierRequest = _reflection.GeneratedProtocolMessageType('GetNotifierRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETNOTIFIERREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierRequest)
  })
_sym_db.RegisterMessage(GetNotifierRequest)

GetNotifierResponse = _reflection.GeneratedProtocolMessageType('GetNotifierResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETNOTIFIERRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierResponse)
  })
_sym_db.RegisterMessage(GetNotifierResponse)

DeleteNotifierRequest = _reflection.GeneratedProtocolMessageType('DeleteNotifierRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETENOTIFIERREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierRequest)
  })
_sym_db.RegisterMessage(DeleteNotifierRequest)

DeleteNotifierResponse = _reflection.GeneratedProtocolMessageType('DeleteNotifierResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETENOTIFIERRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierResponse)
  })
_sym_db.RegisterMessage(DeleteNotifierResponse)


DESCRIPTOR._options = None
_LISTNOTIFIERSREQUEST_LABELSENTRY._options = None

_NOTIFIERSERVICE = _descriptor.ServiceDescriptor(
  name='NotifierService',
  full_name='github.com.metaprov.modelaapi.services.notifier.v1.NotifierService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1123,
  serialized_end=2206,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListNotifiers',
    full_name='github.com.metaprov.modelaapi.services.notifier.v1.NotifierService.ListNotifiers',
    index=0,
    containing_service=None,
    input_type=_LISTNOTIFIERSREQUEST,
    output_type=_LISTNOTIFIERSRESPONSE,
    serialized_options=b'\202\323\344\223\002\031\022\027/api/v1alpha1/notifiers',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateNotifier',
    full_name='github.com.metaprov.modelaapi.services.notifier.v1.NotifierService.CreateNotifier',
    index=1,
    containing_service=None,
    input_type=_CREATENOTIFIERREQUEST,
    output_type=_CREATENOTIFIERRESPONSE,
    serialized_options=b'\202\323\344\223\002\034\"\027/api/v1alpha1/notifiers:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetNotifier',
    full_name='github.com.metaprov.modelaapi.services.notifier.v1.NotifierService.GetNotifier',
    index=2,
    containing_service=None,
    input_type=_GETNOTIFIERREQUEST,
    output_type=_GETNOTIFIERRESPONSE,
    serialized_options=b'\202\323\344\223\002 \022\036/api/v1alpha1/notifiers/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateNotifier',
    full_name='github.com.metaprov.modelaapi.services.notifier.v1.NotifierService.UpdateNotifier',
    index=3,
    containing_service=None,
    input_type=_UPDATENOTIFIERREQUEST,
    output_type=_UPDATENOTIFIERRESPONSE,
    serialized_options=b'\202\323\344\223\0025\0320/api/v1alpha1/notifiers/{notifier.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteNotifier',
    full_name='github.com.metaprov.modelaapi.services.notifier.v1.NotifierService.DeleteNotifier',
    index=4,
    containing_service=None,
    input_type=_DELETENOTIFIERREQUEST,
    output_type=_DELETENOTIFIERRESPONSE,
    serialized_options=b'\202\323\344\223\0022*0/api/v1alpha1/notifiers/{notifier.metadata.name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_NOTIFIERSERVICE)

DESCRIPTOR.services_by_name['NotifierService'] = _NOTIFIERSERVICE

# @@protoc_insertion_point(module_scope)
