# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/lab/v1/lab.proto
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
  name='github.com/metaprov/modelaapi/services/lab/v1/lab.proto',
  package='github.com.metaprov.modelaapi.services.lab.v1',
  syntax='proto3',
  serialized_options=b'Z-github.com/metaprov/modelaapi/services/lab/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n7github.com/metaprov/modelaapi/services/lab/v1/lab.proto\x12-github.com.metaprov.modelaapi.services.lab.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xe8\x01\n\x0fListLabsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12Z\n\x06labels\x18\x02 \x03(\x0b\x32J.github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"a\n\x10ListLabsResponse\x12M\n\x05items\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList\"\r\n\x0bLabResponse\"\\\n\x10\x43reateLabRequest\x12H\n\x04item\x18\x01 \x01(\x0b\x32:.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab\"\x13\n\x11\x43reateLabResponse\"\\\n\x10UpdateLabRequest\x12H\n\x04item\x18\x01 \x01(\x0b\x32:.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab\"\x13\n\x11UpdateLabResponse\"0\n\rGetLabRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"h\n\x0eGetLabResponse\x12H\n\x04item\x18\x01 \x01(\x0b\x32:.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab\x12\x0c\n\x04yaml\x18\x02 \x01(\t\":\n\x17GetLabNamespacesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"o\n\x18GetLabNamespacesResponse\x12S\n\nnamespaces\x18\x01 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.NamespaceInfo\"3\n\x10\x44\x65leteLabRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x13\n\x11\x44\x65leteLabResponse2\x96\x07\n\nLabService\x12\xa9\x01\n\x08ListLabs\x12>.github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest\x1a?.github.com.metaprov.modelaapi.services.lab.v1.ListLabsResponse\"\x1c\x82\xd3\xe4\x93\x02\x16\x12\x14/v1/labs/{namespace}\x12\xa3\x01\n\tCreateLab\x12?.github.com.metaprov.modelaapi.services.lab.v1.CreateLabRequest\x1a@.github.com.metaprov.modelaapi.services.lab.v1.CreateLabResponse\"\x13\x82\xd3\xe4\x93\x02\r\"\x08/v1/labs:\x01*\x12\xaa\x01\n\x06GetLab\x12<.github.com.metaprov.modelaapi.services.lab.v1.GetLabRequest\x1a=.github.com.metaprov.modelaapi.services.lab.v1.GetLabResponse\"#\x82\xd3\xe4\x93\x02\x1d\x12\x1b/v1/labs/{namespace}/{name}\x12\xd2\x01\n\tUpdateLab\x12?.github.com.metaprov.modelaapi.services.lab.v1.UpdateLabRequest\x1a@.github.com.metaprov.modelaapi.services.lab.v1.UpdateLabResponse\"B\x82\xd3\xe4\x93\x02<\x1a\x37/v1/labs/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xb3\x01\n\tDeleteLab\x12?.github.com.metaprov.modelaapi.services.lab.v1.DeleteLabRequest\x1a@.github.com.metaprov.modelaapi.services.lab.v1.DeleteLabResponse\"#\x82\xd3\xe4\x93\x02\x1d*\x1b/v1/labs/{namespace}/{name}B/Z-github.com/metaprov/modelaapi/services/lab/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTLABSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.LabelsEntry.value', index=1,
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
  serialized_start=458,
  serialized_end=503,
)

_LISTLABSREQUEST = _descriptor.Descriptor(
  name='ListLabsRequest',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTLABSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=271,
  serialized_end=503,
)


_LISTLABSRESPONSE = _descriptor.Descriptor(
  name='ListLabsResponse',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modelaapi.services.lab.v1.ListLabsResponse.items', index=0,
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
  serialized_start=505,
  serialized_end=602,
)


_LABRESPONSE = _descriptor.Descriptor(
  name='LabResponse',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.LabResponse',
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
  serialized_start=604,
  serialized_end=617,
)


_CREATELABREQUEST = _descriptor.Descriptor(
  name='CreateLabRequest',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.CreateLabRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.lab.v1.CreateLabRequest.item', index=0,
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
  serialized_start=619,
  serialized_end=711,
)


_CREATELABRESPONSE = _descriptor.Descriptor(
  name='CreateLabResponse',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.CreateLabResponse',
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
  serialized_start=713,
  serialized_end=732,
)


_UPDATELABREQUEST = _descriptor.Descriptor(
  name='UpdateLabRequest',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.UpdateLabRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.lab.v1.UpdateLabRequest.item', index=0,
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
  serialized_end=826,
)


_UPDATELABRESPONSE = _descriptor.Descriptor(
  name='UpdateLabResponse',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.UpdateLabResponse',
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
  serialized_start=828,
  serialized_end=847,
)


_GETLABREQUEST = _descriptor.Descriptor(
  name='GetLabRequest',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabRequest.name', index=1,
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
  serialized_start=849,
  serialized_end=897,
)


_GETLABRESPONSE = _descriptor.Descriptor(
  name='GetLabResponse',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabResponse.yaml', index=1,
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
  serialized_start=899,
  serialized_end=1003,
)


_GETLABNAMESPACESREQUEST = _descriptor.Descriptor(
  name='GetLabNamespacesRequest',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabNamespacesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabNamespacesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabNamespacesRequest.name', index=1,
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
  serialized_start=1005,
  serialized_end=1063,
)


_GETLABNAMESPACESRESPONSE = _descriptor.Descriptor(
  name='GetLabNamespacesResponse',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabNamespacesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespaces', full_name='github.com.metaprov.modelaapi.services.lab.v1.GetLabNamespacesResponse.namespaces', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=1065,
  serialized_end=1176,
)


_DELETELABREQUEST = _descriptor.Descriptor(
  name='DeleteLabRequest',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.DeleteLabRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.lab.v1.DeleteLabRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.lab.v1.DeleteLabRequest.name', index=1,
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
  serialized_start=1178,
  serialized_end=1229,
)


_DELETELABRESPONSE = _descriptor.Descriptor(
  name='DeleteLabResponse',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.DeleteLabResponse',
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
  serialized_start=1231,
  serialized_end=1250,
)

_LISTLABSREQUEST_LABELSENTRY.containing_type = _LISTLABSREQUEST
_LISTLABSREQUEST.fields_by_name['labels'].message_type = _LISTLABSREQUEST_LABELSENTRY
_LISTLABSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._LABLIST
_CREATELABREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._LAB
_UPDATELABREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._LAB
_GETLABRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._LAB
_GETLABNAMESPACESRESPONSE.fields_by_name['namespaces'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2._NAMESPACEINFO
DESCRIPTOR.message_types_by_name['ListLabsRequest'] = _LISTLABSREQUEST
DESCRIPTOR.message_types_by_name['ListLabsResponse'] = _LISTLABSRESPONSE
DESCRIPTOR.message_types_by_name['LabResponse'] = _LABRESPONSE
DESCRIPTOR.message_types_by_name['CreateLabRequest'] = _CREATELABREQUEST
DESCRIPTOR.message_types_by_name['CreateLabResponse'] = _CREATELABRESPONSE
DESCRIPTOR.message_types_by_name['UpdateLabRequest'] = _UPDATELABREQUEST
DESCRIPTOR.message_types_by_name['UpdateLabResponse'] = _UPDATELABRESPONSE
DESCRIPTOR.message_types_by_name['GetLabRequest'] = _GETLABREQUEST
DESCRIPTOR.message_types_by_name['GetLabResponse'] = _GETLABRESPONSE
DESCRIPTOR.message_types_by_name['GetLabNamespacesRequest'] = _GETLABNAMESPACESREQUEST
DESCRIPTOR.message_types_by_name['GetLabNamespacesResponse'] = _GETLABNAMESPACESRESPONSE
DESCRIPTOR.message_types_by_name['DeleteLabRequest'] = _DELETELABREQUEST
DESCRIPTOR.message_types_by_name['DeleteLabResponse'] = _DELETELABRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListLabsRequest = _reflection.GeneratedProtocolMessageType('ListLabsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTLABSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTLABSREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.ListLabsRequest)
  })
_sym_db.RegisterMessage(ListLabsRequest)
_sym_db.RegisterMessage(ListLabsRequest.LabelsEntry)

ListLabsResponse = _reflection.GeneratedProtocolMessageType('ListLabsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTLABSRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.ListLabsResponse)
  })
_sym_db.RegisterMessage(ListLabsResponse)

LabResponse = _reflection.GeneratedProtocolMessageType('LabResponse', (_message.Message,), {
  'DESCRIPTOR' : _LABRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.LabResponse)
  })
_sym_db.RegisterMessage(LabResponse)

CreateLabRequest = _reflection.GeneratedProtocolMessageType('CreateLabRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATELABREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.CreateLabRequest)
  })
_sym_db.RegisterMessage(CreateLabRequest)

CreateLabResponse = _reflection.GeneratedProtocolMessageType('CreateLabResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATELABRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.CreateLabResponse)
  })
_sym_db.RegisterMessage(CreateLabResponse)

UpdateLabRequest = _reflection.GeneratedProtocolMessageType('UpdateLabRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATELABREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.UpdateLabRequest)
  })
_sym_db.RegisterMessage(UpdateLabRequest)

UpdateLabResponse = _reflection.GeneratedProtocolMessageType('UpdateLabResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATELABRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.UpdateLabResponse)
  })
_sym_db.RegisterMessage(UpdateLabResponse)

GetLabRequest = _reflection.GeneratedProtocolMessageType('GetLabRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETLABREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.GetLabRequest)
  })
_sym_db.RegisterMessage(GetLabRequest)

GetLabResponse = _reflection.GeneratedProtocolMessageType('GetLabResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETLABRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.GetLabResponse)
  })
_sym_db.RegisterMessage(GetLabResponse)

GetLabNamespacesRequest = _reflection.GeneratedProtocolMessageType('GetLabNamespacesRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETLABNAMESPACESREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.GetLabNamespacesRequest)
  })
_sym_db.RegisterMessage(GetLabNamespacesRequest)

GetLabNamespacesResponse = _reflection.GeneratedProtocolMessageType('GetLabNamespacesResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETLABNAMESPACESRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.GetLabNamespacesResponse)
  })
_sym_db.RegisterMessage(GetLabNamespacesResponse)

DeleteLabRequest = _reflection.GeneratedProtocolMessageType('DeleteLabRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETELABREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.DeleteLabRequest)
  })
_sym_db.RegisterMessage(DeleteLabRequest)

DeleteLabResponse = _reflection.GeneratedProtocolMessageType('DeleteLabResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETELABRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.lab.v1.lab_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.lab.v1.DeleteLabResponse)
  })
_sym_db.RegisterMessage(DeleteLabResponse)


DESCRIPTOR._options = None
_LISTLABSREQUEST_LABELSENTRY._options = None

_LABSERVICE = _descriptor.ServiceDescriptor(
  name='LabService',
  full_name='github.com.metaprov.modelaapi.services.lab.v1.LabService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1253,
  serialized_end=2171,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListLabs',
    full_name='github.com.metaprov.modelaapi.services.lab.v1.LabService.ListLabs',
    index=0,
    containing_service=None,
    input_type=_LISTLABSREQUEST,
    output_type=_LISTLABSRESPONSE,
    serialized_options=b'\202\323\344\223\002\026\022\024/v1/labs/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateLab',
    full_name='github.com.metaprov.modelaapi.services.lab.v1.LabService.CreateLab',
    index=1,
    containing_service=None,
    input_type=_CREATELABREQUEST,
    output_type=_CREATELABRESPONSE,
    serialized_options=b'\202\323\344\223\002\r\"\010/v1/labs:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetLab',
    full_name='github.com.metaprov.modelaapi.services.lab.v1.LabService.GetLab',
    index=2,
    containing_service=None,
    input_type=_GETLABREQUEST,
    output_type=_GETLABRESPONSE,
    serialized_options=b'\202\323\344\223\002\035\022\033/v1/labs/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateLab',
    full_name='github.com.metaprov.modelaapi.services.lab.v1.LabService.UpdateLab',
    index=3,
    containing_service=None,
    input_type=_UPDATELABREQUEST,
    output_type=_UPDATELABRESPONSE,
    serialized_options=b'\202\323\344\223\002<\0327/v1/labs/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteLab',
    full_name='github.com.metaprov.modelaapi.services.lab.v1.LabService.DeleteLab',
    index=4,
    containing_service=None,
    input_type=_DELETELABREQUEST,
    output_type=_DELETELABRESPONSE,
    serialized_options=b'\202\323\344\223\002\035*\033/v1/labs/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_LABSERVICE)

DESCRIPTOR.services_by_name['LabService'] = _LABSERVICE

# @@protoc_insertion_point(module_scope)
