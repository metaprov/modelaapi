# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/servingsite/v1/servingsite.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/servingsite/v1/servingsite.proto',
  package='github.com.metaprov.modeldapi.services.servingsite.v1',
  syntax='proto3',
  serialized_options=b'Z5github.com/metaprov/modeldapi/services/servingsite/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nGgithub.com/metaprov/modeldapi/services/servingsite/v1/servingsite.proto\x12\x35github.com.metaprov.modeldapi.services.servingsite.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto\"\xc7\x01\n\x17ListServingSitesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12j\n\x06labels\x18\x03 \x03(\x0b\x32Z.github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"q\n\x18ListServingSitesResponse\x12U\n\x05items\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList\"\xad\x02\n\x18\x43reateServingSiteRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12k\n\x06labels\x18\x03 \x03(\x0b\x32[.github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest.LabelsEntry\x12T\n\x04spec\x18\x04 \x01(\x0b\x32\x46.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x1b\n\x19\x43reateServingSiteResponse\"\xad\x02\n\x18UpdateServingSiteRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12k\n\x06labels\x18\x03 \x03(\x0b\x32[.github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest.LabelsEntry\x12T\n\x04spec\x18\x05 \x01(\x0b\x32\x46.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x1b\n\x19UpdateServingSiteResponse\"8\n\x15GetServingSiteRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"x\n\x16GetServingSiteResponse\x12P\n\x04item\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite\x12\x0c\n\x04yaml\x18\x02 \x01(\t\";\n\x18\x44\x65leteServingSiteRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1b\n\x19\x44\x65leteServingSiteResponse2\x80\t\n\x12ServingSiteService\x12\xcd\x01\n\x10ListServingSites\x12N.github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest\x1aO.github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesResponse\"\x18\x82\xd3\xe4\x93\x02\x12\x12\x10/v1/servingsites\x12\xdd\x01\n\x11\x43reateServingSite\x12O.github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest\x1aP.github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteResponse\"%\x82\xd3\xe4\x93\x02\x1f\"\x10/v1/servingsites:\x0bservingsite\x12\xce\x01\n\x0eGetServingSite\x12L.github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteRequest\x1aM.github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/v1/servingsites/{name}\x12\xf9\x01\n\x11UpdateServingSite\x12O.github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest\x1aP.github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteResponse\"A\x82\xd3\xe4\x93\x02;\x1a,/v1/servingsites/{servingsite.metadata.name}:\x0bservingsite\x12\xec\x01\n\x11\x44\x65leteServingSite\x12O.github.com.metaprov.modeldapi.services.servingsite.v1.DeleteServingSiteRequest\x1aP.github.com.metaprov.modeldapi.services.servingsite.v1.DeleteServingSiteResponse\"4\x82\xd3\xe4\x93\x02.*,/v1/servingsites/{servingsite.metadata.name}B7Z5github.com/metaprov/modeldapi/services/servingsite/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTSERVINGSITESREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest.LabelsEntry.value', index=1,
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
  serialized_start=386,
  serialized_end=431,
)

_LISTSERVINGSITESREQUEST = _descriptor.Descriptor(
  name='ListServingSitesRequest',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest.labels', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTSERVINGSITESREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=232,
  serialized_end=431,
)


_LISTSERVINGSITESRESPONSE = _descriptor.Descriptor(
  name='ListServingSitesResponse',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesResponse.items', index=0,
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
  serialized_start=433,
  serialized_end=546,
)


_CREATESERVINGSITEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest.LabelsEntry.value', index=1,
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
  serialized_start=386,
  serialized_end=431,
)

_CREATESERVINGSITEREQUEST = _descriptor.Descriptor(
  name='CreateServingSiteRequest',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest.spec', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_CREATESERVINGSITEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=549,
  serialized_end=850,
)


_CREATESERVINGSITERESPONSE = _descriptor.Descriptor(
  name='CreateServingSiteResponse',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteResponse',
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
  serialized_start=852,
  serialized_end=879,
)


_UPDATESERVINGSITEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest.LabelsEntry.value', index=1,
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
  serialized_start=386,
  serialized_end=431,
)

_UPDATESERVINGSITEREQUEST = _descriptor.Descriptor(
  name='UpdateServingSiteRequest',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_UPDATESERVINGSITEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=882,
  serialized_end=1183,
)


_UPDATESERVINGSITERESPONSE = _descriptor.Descriptor(
  name='UpdateServingSiteResponse',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteResponse',
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
  serialized_start=1185,
  serialized_end=1212,
)


_GETSERVINGSITEREQUEST = _descriptor.Descriptor(
  name='GetServingSiteRequest',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteRequest.name', index=1,
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
  serialized_start=1214,
  serialized_end=1270,
)


_GETSERVINGSITERESPONSE = _descriptor.Descriptor(
  name='GetServingSiteResponse',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteResponse.yaml', index=1,
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
  serialized_start=1272,
  serialized_end=1392,
)


_DELETESERVINGSITEREQUEST = _descriptor.Descriptor(
  name='DeleteServingSiteRequest',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.DeleteServingSiteRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.DeleteServingSiteRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.servingsite.v1.DeleteServingSiteRequest.name', index=1,
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
  serialized_start=1394,
  serialized_end=1453,
)


_DELETESERVINGSITERESPONSE = _descriptor.Descriptor(
  name='DeleteServingSiteResponse',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.DeleteServingSiteResponse',
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
  serialized_start=1455,
  serialized_end=1482,
)

_LISTSERVINGSITESREQUEST_LABELSENTRY.containing_type = _LISTSERVINGSITESREQUEST
_LISTSERVINGSITESREQUEST.fields_by_name['labels'].message_type = _LISTSERVINGSITESREQUEST_LABELSENTRY
_LISTSERVINGSITESRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._SERVINGSITELIST
_CREATESERVINGSITEREQUEST_LABELSENTRY.containing_type = _CREATESERVINGSITEREQUEST
_CREATESERVINGSITEREQUEST.fields_by_name['labels'].message_type = _CREATESERVINGSITEREQUEST_LABELSENTRY
_CREATESERVINGSITEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._SERVINGSITESPEC
_UPDATESERVINGSITEREQUEST_LABELSENTRY.containing_type = _UPDATESERVINGSITEREQUEST
_UPDATESERVINGSITEREQUEST.fields_by_name['labels'].message_type = _UPDATESERVINGSITEREQUEST_LABELSENTRY
_UPDATESERVINGSITEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._SERVINGSITESPEC
_GETSERVINGSITERESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._SERVINGSITE
DESCRIPTOR.message_types_by_name['ListServingSitesRequest'] = _LISTSERVINGSITESREQUEST
DESCRIPTOR.message_types_by_name['ListServingSitesResponse'] = _LISTSERVINGSITESRESPONSE
DESCRIPTOR.message_types_by_name['CreateServingSiteRequest'] = _CREATESERVINGSITEREQUEST
DESCRIPTOR.message_types_by_name['CreateServingSiteResponse'] = _CREATESERVINGSITERESPONSE
DESCRIPTOR.message_types_by_name['UpdateServingSiteRequest'] = _UPDATESERVINGSITEREQUEST
DESCRIPTOR.message_types_by_name['UpdateServingSiteResponse'] = _UPDATESERVINGSITERESPONSE
DESCRIPTOR.message_types_by_name['GetServingSiteRequest'] = _GETSERVINGSITEREQUEST
DESCRIPTOR.message_types_by_name['GetServingSiteResponse'] = _GETSERVINGSITERESPONSE
DESCRIPTOR.message_types_by_name['DeleteServingSiteRequest'] = _DELETESERVINGSITEREQUEST
DESCRIPTOR.message_types_by_name['DeleteServingSiteResponse'] = _DELETESERVINGSITERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListServingSitesRequest = _reflection.GeneratedProtocolMessageType('ListServingSitesRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTSERVINGSITESREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTSERVINGSITESREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesRequest)
  })
_sym_db.RegisterMessage(ListServingSitesRequest)
_sym_db.RegisterMessage(ListServingSitesRequest.LabelsEntry)

ListServingSitesResponse = _reflection.GeneratedProtocolMessageType('ListServingSitesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTSERVINGSITESRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.ListServingSitesResponse)
  })
_sym_db.RegisterMessage(ListServingSitesResponse)

CreateServingSiteRequest = _reflection.GeneratedProtocolMessageType('CreateServingSiteRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _CREATESERVINGSITEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _CREATESERVINGSITEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteRequest)
  })
_sym_db.RegisterMessage(CreateServingSiteRequest)
_sym_db.RegisterMessage(CreateServingSiteRequest.LabelsEntry)

CreateServingSiteResponse = _reflection.GeneratedProtocolMessageType('CreateServingSiteResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATESERVINGSITERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.CreateServingSiteResponse)
  })
_sym_db.RegisterMessage(CreateServingSiteResponse)

UpdateServingSiteRequest = _reflection.GeneratedProtocolMessageType('UpdateServingSiteRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _UPDATESERVINGSITEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _UPDATESERVINGSITEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteRequest)
  })
_sym_db.RegisterMessage(UpdateServingSiteRequest)
_sym_db.RegisterMessage(UpdateServingSiteRequest.LabelsEntry)

UpdateServingSiteResponse = _reflection.GeneratedProtocolMessageType('UpdateServingSiteResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATESERVINGSITERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.UpdateServingSiteResponse)
  })
_sym_db.RegisterMessage(UpdateServingSiteResponse)

GetServingSiteRequest = _reflection.GeneratedProtocolMessageType('GetServingSiteRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETSERVINGSITEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteRequest)
  })
_sym_db.RegisterMessage(GetServingSiteRequest)

GetServingSiteResponse = _reflection.GeneratedProtocolMessageType('GetServingSiteResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETSERVINGSITERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.GetServingSiteResponse)
  })
_sym_db.RegisterMessage(GetServingSiteResponse)

DeleteServingSiteRequest = _reflection.GeneratedProtocolMessageType('DeleteServingSiteRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETESERVINGSITEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.DeleteServingSiteRequest)
  })
_sym_db.RegisterMessage(DeleteServingSiteRequest)

DeleteServingSiteResponse = _reflection.GeneratedProtocolMessageType('DeleteServingSiteResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETESERVINGSITERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.servingsite.v1.servingsite_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.servingsite.v1.DeleteServingSiteResponse)
  })
_sym_db.RegisterMessage(DeleteServingSiteResponse)


DESCRIPTOR._options = None
_LISTSERVINGSITESREQUEST_LABELSENTRY._options = None
_CREATESERVINGSITEREQUEST_LABELSENTRY._options = None
_UPDATESERVINGSITEREQUEST_LABELSENTRY._options = None

_SERVINGSITESERVICE = _descriptor.ServiceDescriptor(
  name='ServingSiteService',
  full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1485,
  serialized_end=2637,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListServingSites',
    full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService.ListServingSites',
    index=0,
    containing_service=None,
    input_type=_LISTSERVINGSITESREQUEST,
    output_type=_LISTSERVINGSITESRESPONSE,
    serialized_options=b'\202\323\344\223\002\022\022\020/v1/servingsites',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateServingSite',
    full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService.CreateServingSite',
    index=1,
    containing_service=None,
    input_type=_CREATESERVINGSITEREQUEST,
    output_type=_CREATESERVINGSITERESPONSE,
    serialized_options=b'\202\323\344\223\002\037\"\020/v1/servingsites:\013servingsite',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetServingSite',
    full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService.GetServingSite',
    index=2,
    containing_service=None,
    input_type=_GETSERVINGSITEREQUEST,
    output_type=_GETSERVINGSITERESPONSE,
    serialized_options=b'\202\323\344\223\002\031\022\027/v1/servingsites/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateServingSite',
    full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService.UpdateServingSite',
    index=3,
    containing_service=None,
    input_type=_UPDATESERVINGSITEREQUEST,
    output_type=_UPDATESERVINGSITERESPONSE,
    serialized_options=b'\202\323\344\223\002;\032,/v1/servingsites/{servingsite.metadata.name}:\013servingsite',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteServingSite',
    full_name='github.com.metaprov.modeldapi.services.servingsite.v1.ServingSiteService.DeleteServingSite',
    index=4,
    containing_service=None,
    input_type=_DELETESERVINGSITEREQUEST,
    output_type=_DELETESERVINGSITERESPONSE,
    serialized_options=b'\202\323\344\223\002.*,/v1/servingsites/{servingsite.metadata.name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_SERVINGSITESERVICE)

DESCRIPTOR.services_by_name['ServingSiteService'] = _SERVINGSITESERVICE

# @@protoc_insertion_point(module_scope)
