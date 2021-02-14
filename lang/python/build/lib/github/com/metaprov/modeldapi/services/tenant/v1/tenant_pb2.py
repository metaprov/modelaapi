# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/tenant/v1/tenant.proto
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
  name='github.com/metaprov/modeldapi/services/tenant/v1/tenant.proto',
  package='github.com.metaprov.modeld.services.tenant.v1',
  syntax='proto3',
  serialized_options=b'Z0github.com/metaprov/modeldapi/services/tenant/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n=github.com/metaprov/modeldapi/services/tenant/v1/tenant.proto\x12-github.com.metaprov.modeld.services.tenant.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto\"\xb5\x01\n\x12ListTenantsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12]\n\x06labels\x18\x03 \x03(\x0b\x32M.github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"g\n\x13ListTenantsResponse\x12P\n\x05items\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList\"\x96\x02\n\x13\x43reateTenantRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12^\n\x06labels\x18\x03 \x03(\x0b\x32N.github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest.LabelsEntry\x12O\n\x04spec\x18\x04 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x16\n\x14\x43reateTenantResponse\"\x96\x02\n\x13UpdateTenantRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12^\n\x06labels\x18\x03 \x03(\x0b\x32N.github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest.LabelsEntry\x12O\n\x04spec\x18\x05 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x16\n\x14UpdateTenantResponse\"3\n\x10GetTenantRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"n\n\x11GetTenantResponse\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"6\n\x13\x44\x65leteTenantRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x16\n\x14\x44\x65leteTenantResponse2\x89\x07\n\rTenantService\x12\xa9\x01\n\x0bListTenants\x12\x41.github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest\x1a\x42.github.com.metaprov.modeld.services.tenant.v1.ListTenantsResponse\"\x13\x82\xd3\xe4\x93\x02\r\x12\x0b/v1/tenants\x12\xb4\x01\n\x0c\x43reateTenant\x12\x42.github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest\x1a\x43.github.com.metaprov.modeld.services.tenant.v1.CreateTenantResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\"\x0b/v1/tenants:\x06tenant\x12\xaa\x01\n\tGetTenant\x12?.github.com.metaprov.modeld.services.tenant.v1.GetTenantRequest\x1a@.github.com.metaprov.modeld.services.tenant.v1.GetTenantResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\x12\x12/v1/tenants/{name}\x12\xcb\x01\n\x0cUpdateTenant\x12\x42.github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest\x1a\x43.github.com.metaprov.modeld.services.tenant.v1.UpdateTenantResponse\"2\x82\xd3\xe4\x93\x02,\x1a\"/v1/tenants/{tenant.metadata.name}:\x06tenant\x12\x99\x01\n\x0c\x44\x65leteTenant\x12\x42.github.com.metaprov.modeld.services.tenant.v1.DeleteTenantRequest\x1a\x43.github.com.metaprov.modeld.services.tenant.v1.DeleteTenantResponse\"\x00\x42\x32Z0github.com/metaprov/modeldapi/services/tenant/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTTENANTSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest.LabelsEntry.value', index=1,
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
  serialized_start=350,
  serialized_end=395,
)

_LISTTENANTSREQUEST = _descriptor.Descriptor(
  name='ListTenantsRequest',
  full_name='github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest.labels', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTTENANTSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=214,
  serialized_end=395,
)


_LISTTENANTSRESPONSE = _descriptor.Descriptor(
  name='ListTenantsResponse',
  full_name='github.com.metaprov.modeld.services.tenant.v1.ListTenantsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeld.services.tenant.v1.ListTenantsResponse.items', index=0,
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
  serialized_start=397,
  serialized_end=500,
)


_CREATETENANTREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest.LabelsEntry.value', index=1,
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
  serialized_start=350,
  serialized_end=395,
)

_CREATETENANTREQUEST = _descriptor.Descriptor(
  name='CreateTenantRequest',
  full_name='github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest.spec', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_CREATETENANTREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=503,
  serialized_end=781,
)


_CREATETENANTRESPONSE = _descriptor.Descriptor(
  name='CreateTenantResponse',
  full_name='github.com.metaprov.modeld.services.tenant.v1.CreateTenantResponse',
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
  serialized_start=783,
  serialized_end=805,
)


_UPDATETENANTREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest.LabelsEntry.value', index=1,
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
  serialized_start=350,
  serialized_end=395,
)

_UPDATETENANTREQUEST = _descriptor.Descriptor(
  name='UpdateTenantRequest',
  full_name='github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_UPDATETENANTREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=808,
  serialized_end=1086,
)


_UPDATETENANTRESPONSE = _descriptor.Descriptor(
  name='UpdateTenantResponse',
  full_name='github.com.metaprov.modeld.services.tenant.v1.UpdateTenantResponse',
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
  serialized_start=1088,
  serialized_end=1110,
)


_GETTENANTREQUEST = _descriptor.Descriptor(
  name='GetTenantRequest',
  full_name='github.com.metaprov.modeld.services.tenant.v1.GetTenantRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.tenant.v1.GetTenantRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.tenant.v1.GetTenantRequest.name', index=1,
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
  serialized_end=1163,
)


_GETTENANTRESPONSE = _descriptor.Descriptor(
  name='GetTenantResponse',
  full_name='github.com.metaprov.modeld.services.tenant.v1.GetTenantResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeld.services.tenant.v1.GetTenantResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeld.services.tenant.v1.GetTenantResponse.yaml', index=1,
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
  serialized_end=1275,
)


_DELETETENANTREQUEST = _descriptor.Descriptor(
  name='DeleteTenantRequest',
  full_name='github.com.metaprov.modeld.services.tenant.v1.DeleteTenantRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.tenant.v1.DeleteTenantRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.tenant.v1.DeleteTenantRequest.name', index=1,
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
  serialized_start=1277,
  serialized_end=1331,
)


_DELETETENANTRESPONSE = _descriptor.Descriptor(
  name='DeleteTenantResponse',
  full_name='github.com.metaprov.modeld.services.tenant.v1.DeleteTenantResponse',
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
  serialized_start=1333,
  serialized_end=1355,
)

_LISTTENANTSREQUEST_LABELSENTRY.containing_type = _LISTTENANTSREQUEST
_LISTTENANTSREQUEST.fields_by_name['labels'].message_type = _LISTTENANTSREQUEST_LABELSENTRY
_LISTTENANTSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._TENANTLIST
_CREATETENANTREQUEST_LABELSENTRY.containing_type = _CREATETENANTREQUEST
_CREATETENANTREQUEST.fields_by_name['labels'].message_type = _CREATETENANTREQUEST_LABELSENTRY
_CREATETENANTREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._TENANTSPEC
_UPDATETENANTREQUEST_LABELSENTRY.containing_type = _UPDATETENANTREQUEST
_UPDATETENANTREQUEST.fields_by_name['labels'].message_type = _UPDATETENANTREQUEST_LABELSENTRY
_UPDATETENANTREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._TENANTSPEC
_GETTENANTRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._TENANT
DESCRIPTOR.message_types_by_name['ListTenantsRequest'] = _LISTTENANTSREQUEST
DESCRIPTOR.message_types_by_name['ListTenantsResponse'] = _LISTTENANTSRESPONSE
DESCRIPTOR.message_types_by_name['CreateTenantRequest'] = _CREATETENANTREQUEST
DESCRIPTOR.message_types_by_name['CreateTenantResponse'] = _CREATETENANTRESPONSE
DESCRIPTOR.message_types_by_name['UpdateTenantRequest'] = _UPDATETENANTREQUEST
DESCRIPTOR.message_types_by_name['UpdateTenantResponse'] = _UPDATETENANTRESPONSE
DESCRIPTOR.message_types_by_name['GetTenantRequest'] = _GETTENANTREQUEST
DESCRIPTOR.message_types_by_name['GetTenantResponse'] = _GETTENANTRESPONSE
DESCRIPTOR.message_types_by_name['DeleteTenantRequest'] = _DELETETENANTREQUEST
DESCRIPTOR.message_types_by_name['DeleteTenantResponse'] = _DELETETENANTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListTenantsRequest = _reflection.GeneratedProtocolMessageType('ListTenantsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTTENANTSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTTENANTSREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.ListTenantsRequest)
  })
_sym_db.RegisterMessage(ListTenantsRequest)
_sym_db.RegisterMessage(ListTenantsRequest.LabelsEntry)

ListTenantsResponse = _reflection.GeneratedProtocolMessageType('ListTenantsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTTENANTSRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.ListTenantsResponse)
  })
_sym_db.RegisterMessage(ListTenantsResponse)

CreateTenantRequest = _reflection.GeneratedProtocolMessageType('CreateTenantRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _CREATETENANTREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _CREATETENANTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.CreateTenantRequest)
  })
_sym_db.RegisterMessage(CreateTenantRequest)
_sym_db.RegisterMessage(CreateTenantRequest.LabelsEntry)

CreateTenantResponse = _reflection.GeneratedProtocolMessageType('CreateTenantResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATETENANTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.CreateTenantResponse)
  })
_sym_db.RegisterMessage(CreateTenantResponse)

UpdateTenantRequest = _reflection.GeneratedProtocolMessageType('UpdateTenantRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _UPDATETENANTREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _UPDATETENANTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.UpdateTenantRequest)
  })
_sym_db.RegisterMessage(UpdateTenantRequest)
_sym_db.RegisterMessage(UpdateTenantRequest.LabelsEntry)

UpdateTenantResponse = _reflection.GeneratedProtocolMessageType('UpdateTenantResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATETENANTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.UpdateTenantResponse)
  })
_sym_db.RegisterMessage(UpdateTenantResponse)

GetTenantRequest = _reflection.GeneratedProtocolMessageType('GetTenantRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETTENANTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.GetTenantRequest)
  })
_sym_db.RegisterMessage(GetTenantRequest)

GetTenantResponse = _reflection.GeneratedProtocolMessageType('GetTenantResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETTENANTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.GetTenantResponse)
  })
_sym_db.RegisterMessage(GetTenantResponse)

DeleteTenantRequest = _reflection.GeneratedProtocolMessageType('DeleteTenantRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETETENANTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.DeleteTenantRequest)
  })
_sym_db.RegisterMessage(DeleteTenantRequest)

DeleteTenantResponse = _reflection.GeneratedProtocolMessageType('DeleteTenantResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETETENANTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.tenant.v1.tenant_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.tenant.v1.DeleteTenantResponse)
  })
_sym_db.RegisterMessage(DeleteTenantResponse)


DESCRIPTOR._options = None
_LISTTENANTSREQUEST_LABELSENTRY._options = None
_CREATETENANTREQUEST_LABELSENTRY._options = None
_UPDATETENANTREQUEST_LABELSENTRY._options = None

_TENANTSERVICE = _descriptor.ServiceDescriptor(
  name='TenantService',
  full_name='github.com.metaprov.modeld.services.tenant.v1.TenantService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1358,
  serialized_end=2263,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListTenants',
    full_name='github.com.metaprov.modeld.services.tenant.v1.TenantService.ListTenants',
    index=0,
    containing_service=None,
    input_type=_LISTTENANTSREQUEST,
    output_type=_LISTTENANTSRESPONSE,
    serialized_options=b'\202\323\344\223\002\r\022\013/v1/tenants',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateTenant',
    full_name='github.com.metaprov.modeld.services.tenant.v1.TenantService.CreateTenant',
    index=1,
    containing_service=None,
    input_type=_CREATETENANTREQUEST,
    output_type=_CREATETENANTRESPONSE,
    serialized_options=b'\202\323\344\223\002\025\"\013/v1/tenants:\006tenant',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetTenant',
    full_name='github.com.metaprov.modeld.services.tenant.v1.TenantService.GetTenant',
    index=2,
    containing_service=None,
    input_type=_GETTENANTREQUEST,
    output_type=_GETTENANTRESPONSE,
    serialized_options=b'\202\323\344\223\002\024\022\022/v1/tenants/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateTenant',
    full_name='github.com.metaprov.modeld.services.tenant.v1.TenantService.UpdateTenant',
    index=3,
    containing_service=None,
    input_type=_UPDATETENANTREQUEST,
    output_type=_UPDATETENANTRESPONSE,
    serialized_options=b'\202\323\344\223\002,\032\"/v1/tenants/{tenant.metadata.name}:\006tenant',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteTenant',
    full_name='github.com.metaprov.modeld.services.tenant.v1.TenantService.DeleteTenant',
    index=4,
    containing_service=None,
    input_type=_DELETETENANTREQUEST,
    output_type=_DELETETENANTRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_TENANTSERVICE)

DESCRIPTOR.services_by_name['TenantService'] = _TENANTSERVICE

# @@protoc_insertion_point(module_scope)
