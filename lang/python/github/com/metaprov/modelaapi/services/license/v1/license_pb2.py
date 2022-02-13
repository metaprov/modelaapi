# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/license/v1/license.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/license/v1/license.proto',
  package='github.com.metaprov.modelaapi.services.license.v1',
  syntax='proto3',
  serialized_options=b'Z1github.com/metaprov/modelaapi/services/license/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n?github.com/metaprov/modelaapi/services/license/v1/license.proto\x12\x31github.com.metaprov.modelaapi.services.license.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xf4\x01\n\x13ListLicensesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x62\n\x06labels\x18\x02 \x03(\x0b\x32R.github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x85\x01\n\x14ListLicensesResponse\x12T\n\x08licences\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x11\n\x0fLicenseResponse\"g\n\x14\x43reateLicenseRequest\x12O\n\x07license\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License\":\n\x1b\x43reateLicenseFromKeyRequest\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x0e\n\x06tenant\x18\x02 \x01(\t\"\x17\n\x15\x43reateLicenseResponse\"\x97\x01\n\x14UpdateLicenseRequest\x12O\n\x07license\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x17\n\x15UpdateLicenseResponse\"4\n\x11GetLicenseRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"s\n\x12GetLicenseResponse\x12O\n\x07license\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License\x12\x0c\n\x04yaml\x18\x02 \x01(\t\">\n\x1bGetLicenseNamespacesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"s\n\x1cGetLicenseNamespacesResponse\x12S\n\nnamespaces\x18\x01 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.NamespaceInfo\"7\n\x14\x44\x65leteLicenseRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x17\n\x15\x44\x65leteLicenseResponse2\xde\t\n\x0eLicenseService\x12\xc1\x01\n\x0cListLicenses\x12\x46.github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest\x1aG.github.com.metaprov.modelaapi.services.license.v1.ListLicensesResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/licenses/{namespace}\x12\xbb\x01\n\rCreateLicense\x12G.github.com.metaprov.modelaapi.services.license.v1.CreateLicenseRequest\x1aH.github.com.metaprov.modelaapi.services.license.v1.CreateLicenseResponse\"\x17\x82\xd3\xe4\x93\x02\x11\"\x0c/v1/licenses:\x01*\x12\xc9\x01\n\x14\x43reateLicenseFromKey\x12N.github.com.metaprov.modelaapi.services.license.v1.CreateLicenseFromKeyRequest\x1aH.github.com.metaprov.modelaapi.services.license.v1.CreateLicenseResponse\"\x17\x82\xd3\xe4\x93\x02\x11\"\x0c/v1/licenses:\x01*\x12\xc2\x01\n\nGetLicense\x12\x44.github.com.metaprov.modelaapi.services.license.v1.GetLicenseRequest\x1a\x45.github.com.metaprov.modelaapi.services.license.v1.GetLicenseResponse\"\'\x82\xd3\xe4\x93\x02!\x12\x1f/v1/licenses/{namespace}/{name}\x12\xea\x01\n\rUpdateLicense\x12G.github.com.metaprov.modelaapi.services.license.v1.UpdateLicenseRequest\x1aH.github.com.metaprov.modelaapi.services.license.v1.UpdateLicenseResponse\"F\x82\xd3\xe4\x93\x02@\x1a;/v1/licenses/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xcb\x01\n\rDeleteLicense\x12G.github.com.metaprov.modelaapi.services.license.v1.DeleteLicenseRequest\x1aH.github.com.metaprov.modelaapi.services.license.v1.DeleteLicenseResponse\"\'\x82\xd3\xe4\x93\x02!*\x1f/v1/licenses/{namespace}/{name}B3Z1github.com/metaprov/modelaapi/services/license/v1b\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_field__mask__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTLICENSESREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.LabelsEntry.value', index=1,
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
  serialized_start=516,
  serialized_end=561,
)

_LISTLICENSESREQUEST = _descriptor.Descriptor(
  name='ListLicensesRequest',
  full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTLICENSESREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=317,
  serialized_end=561,
)


_LISTLICENSESRESPONSE = _descriptor.Descriptor(
  name='ListLicensesResponse',
  full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='licences', full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesResponse.licences', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_token', full_name='github.com.metaprov.modelaapi.services.license.v1.ListLicensesResponse.next_page_token', index=1,
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
  serialized_start=564,
  serialized_end=697,
)


_LICENSERESPONSE = _descriptor.Descriptor(
  name='LicenseResponse',
  full_name='github.com.metaprov.modelaapi.services.license.v1.LicenseResponse',
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
  serialized_start=699,
  serialized_end=716,
)


_CREATELICENSEREQUEST = _descriptor.Descriptor(
  name='CreateLicenseRequest',
  full_name='github.com.metaprov.modelaapi.services.license.v1.CreateLicenseRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='license', full_name='github.com.metaprov.modelaapi.services.license.v1.CreateLicenseRequest.license', index=0,
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
  serialized_start=718,
  serialized_end=821,
)


_CREATELICENSEFROMKEYREQUEST = _descriptor.Descriptor(
  name='CreateLicenseFromKeyRequest',
  full_name='github.com.metaprov.modelaapi.services.license.v1.CreateLicenseFromKeyRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.license.v1.CreateLicenseFromKeyRequest.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='tenant', full_name='github.com.metaprov.modelaapi.services.license.v1.CreateLicenseFromKeyRequest.tenant', index=1,
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
  serialized_end=881,
)


_CREATELICENSERESPONSE = _descriptor.Descriptor(
  name='CreateLicenseResponse',
  full_name='github.com.metaprov.modelaapi.services.license.v1.CreateLicenseResponse',
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
  serialized_start=883,
  serialized_end=906,
)


_UPDATELICENSEREQUEST = _descriptor.Descriptor(
  name='UpdateLicenseRequest',
  full_name='github.com.metaprov.modelaapi.services.license.v1.UpdateLicenseRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='license', full_name='github.com.metaprov.modelaapi.services.license.v1.UpdateLicenseRequest.license', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='field_mask', full_name='github.com.metaprov.modelaapi.services.license.v1.UpdateLicenseRequest.field_mask', index=1,
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
  serialized_start=909,
  serialized_end=1060,
)


_UPDATELICENSERESPONSE = _descriptor.Descriptor(
  name='UpdateLicenseResponse',
  full_name='github.com.metaprov.modelaapi.services.license.v1.UpdateLicenseResponse',
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
  serialized_start=1062,
  serialized_end=1085,
)


_GETLICENSEREQUEST = _descriptor.Descriptor(
  name='GetLicenseRequest',
  full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseRequest.name', index=1,
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
  serialized_start=1087,
  serialized_end=1139,
)


_GETLICENSERESPONSE = _descriptor.Descriptor(
  name='GetLicenseResponse',
  full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='license', full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseResponse.license', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseResponse.yaml', index=1,
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
  serialized_start=1141,
  serialized_end=1256,
)


_GETLICENSENAMESPACESREQUEST = _descriptor.Descriptor(
  name='GetLicenseNamespacesRequest',
  full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseNamespacesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseNamespacesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseNamespacesRequest.name', index=1,
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
  serialized_start=1258,
  serialized_end=1320,
)


_GETLICENSENAMESPACESRESPONSE = _descriptor.Descriptor(
  name='GetLicenseNamespacesResponse',
  full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseNamespacesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespaces', full_name='github.com.metaprov.modelaapi.services.license.v1.GetLicenseNamespacesResponse.namespaces', index=0,
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
  serialized_start=1322,
  serialized_end=1437,
)


_DELETELICENSEREQUEST = _descriptor.Descriptor(
  name='DeleteLicenseRequest',
  full_name='github.com.metaprov.modelaapi.services.license.v1.DeleteLicenseRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.license.v1.DeleteLicenseRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.license.v1.DeleteLicenseRequest.name', index=1,
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
  serialized_start=1439,
  serialized_end=1494,
)


_DELETELICENSERESPONSE = _descriptor.Descriptor(
  name='DeleteLicenseResponse',
  full_name='github.com.metaprov.modelaapi.services.license.v1.DeleteLicenseResponse',
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
  serialized_start=1496,
  serialized_end=1519,
)

_LISTLICENSESREQUEST_LABELSENTRY.containing_type = _LISTLICENSESREQUEST
_LISTLICENSESREQUEST.fields_by_name['labels'].message_type = _LISTLICENSESREQUEST_LABELSENTRY
_LISTLICENSESRESPONSE.fields_by_name['licences'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._LICENSELIST
_CREATELICENSEREQUEST.fields_by_name['license'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._LICENSE
_UPDATELICENSEREQUEST.fields_by_name['license'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._LICENSE
_UPDATELICENSEREQUEST.fields_by_name['field_mask'].message_type = google_dot_protobuf_dot_field__mask__pb2._FIELDMASK
_GETLICENSERESPONSE.fields_by_name['license'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._LICENSE
_GETLICENSENAMESPACESRESPONSE.fields_by_name['namespaces'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2._NAMESPACEINFO
DESCRIPTOR.message_types_by_name['ListLicensesRequest'] = _LISTLICENSESREQUEST
DESCRIPTOR.message_types_by_name['ListLicensesResponse'] = _LISTLICENSESRESPONSE
DESCRIPTOR.message_types_by_name['LicenseResponse'] = _LICENSERESPONSE
DESCRIPTOR.message_types_by_name['CreateLicenseRequest'] = _CREATELICENSEREQUEST
DESCRIPTOR.message_types_by_name['CreateLicenseFromKeyRequest'] = _CREATELICENSEFROMKEYREQUEST
DESCRIPTOR.message_types_by_name['CreateLicenseResponse'] = _CREATELICENSERESPONSE
DESCRIPTOR.message_types_by_name['UpdateLicenseRequest'] = _UPDATELICENSEREQUEST
DESCRIPTOR.message_types_by_name['UpdateLicenseResponse'] = _UPDATELICENSERESPONSE
DESCRIPTOR.message_types_by_name['GetLicenseRequest'] = _GETLICENSEREQUEST
DESCRIPTOR.message_types_by_name['GetLicenseResponse'] = _GETLICENSERESPONSE
DESCRIPTOR.message_types_by_name['GetLicenseNamespacesRequest'] = _GETLICENSENAMESPACESREQUEST
DESCRIPTOR.message_types_by_name['GetLicenseNamespacesResponse'] = _GETLICENSENAMESPACESRESPONSE
DESCRIPTOR.message_types_by_name['DeleteLicenseRequest'] = _DELETELICENSEREQUEST
DESCRIPTOR.message_types_by_name['DeleteLicenseResponse'] = _DELETELICENSERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListLicensesRequest = _reflection.GeneratedProtocolMessageType('ListLicensesRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTLICENSESREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTLICENSESREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.ListLicensesRequest)
  })
_sym_db.RegisterMessage(ListLicensesRequest)
_sym_db.RegisterMessage(ListLicensesRequest.LabelsEntry)

ListLicensesResponse = _reflection.GeneratedProtocolMessageType('ListLicensesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTLICENSESRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.ListLicensesResponse)
  })
_sym_db.RegisterMessage(ListLicensesResponse)

LicenseResponse = _reflection.GeneratedProtocolMessageType('LicenseResponse', (_message.Message,), {
  'DESCRIPTOR' : _LICENSERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.LicenseResponse)
  })
_sym_db.RegisterMessage(LicenseResponse)

CreateLicenseRequest = _reflection.GeneratedProtocolMessageType('CreateLicenseRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATELICENSEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.CreateLicenseRequest)
  })
_sym_db.RegisterMessage(CreateLicenseRequest)

CreateLicenseFromKeyRequest = _reflection.GeneratedProtocolMessageType('CreateLicenseFromKeyRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATELICENSEFROMKEYREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.CreateLicenseFromKeyRequest)
  })
_sym_db.RegisterMessage(CreateLicenseFromKeyRequest)

CreateLicenseResponse = _reflection.GeneratedProtocolMessageType('CreateLicenseResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATELICENSERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.CreateLicenseResponse)
  })
_sym_db.RegisterMessage(CreateLicenseResponse)

UpdateLicenseRequest = _reflection.GeneratedProtocolMessageType('UpdateLicenseRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATELICENSEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.UpdateLicenseRequest)
  })
_sym_db.RegisterMessage(UpdateLicenseRequest)

UpdateLicenseResponse = _reflection.GeneratedProtocolMessageType('UpdateLicenseResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATELICENSERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.UpdateLicenseResponse)
  })
_sym_db.RegisterMessage(UpdateLicenseResponse)

GetLicenseRequest = _reflection.GeneratedProtocolMessageType('GetLicenseRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETLICENSEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.GetLicenseRequest)
  })
_sym_db.RegisterMessage(GetLicenseRequest)

GetLicenseResponse = _reflection.GeneratedProtocolMessageType('GetLicenseResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETLICENSERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.GetLicenseResponse)
  })
_sym_db.RegisterMessage(GetLicenseResponse)

GetLicenseNamespacesRequest = _reflection.GeneratedProtocolMessageType('GetLicenseNamespacesRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETLICENSENAMESPACESREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.GetLicenseNamespacesRequest)
  })
_sym_db.RegisterMessage(GetLicenseNamespacesRequest)

GetLicenseNamespacesResponse = _reflection.GeneratedProtocolMessageType('GetLicenseNamespacesResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETLICENSENAMESPACESRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.GetLicenseNamespacesResponse)
  })
_sym_db.RegisterMessage(GetLicenseNamespacesResponse)

DeleteLicenseRequest = _reflection.GeneratedProtocolMessageType('DeleteLicenseRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETELICENSEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.DeleteLicenseRequest)
  })
_sym_db.RegisterMessage(DeleteLicenseRequest)

DeleteLicenseResponse = _reflection.GeneratedProtocolMessageType('DeleteLicenseResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETELICENSERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.license.v1.license_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.license.v1.DeleteLicenseResponse)
  })
_sym_db.RegisterMessage(DeleteLicenseResponse)


DESCRIPTOR._options = None
_LISTLICENSESREQUEST_LABELSENTRY._options = None

_LICENSESERVICE = _descriptor.ServiceDescriptor(
  name='LicenseService',
  full_name='github.com.metaprov.modelaapi.services.license.v1.LicenseService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1522,
  serialized_end=2768,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListLicenses',
    full_name='github.com.metaprov.modelaapi.services.license.v1.LicenseService.ListLicenses',
    index=0,
    containing_service=None,
    input_type=_LISTLICENSESREQUEST,
    output_type=_LISTLICENSESRESPONSE,
    serialized_options=b'\202\323\344\223\002\032\022\030/v1/licenses/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateLicense',
    full_name='github.com.metaprov.modelaapi.services.license.v1.LicenseService.CreateLicense',
    index=1,
    containing_service=None,
    input_type=_CREATELICENSEREQUEST,
    output_type=_CREATELICENSERESPONSE,
    serialized_options=b'\202\323\344\223\002\021\"\014/v1/licenses:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateLicenseFromKey',
    full_name='github.com.metaprov.modelaapi.services.license.v1.LicenseService.CreateLicenseFromKey',
    index=2,
    containing_service=None,
    input_type=_CREATELICENSEFROMKEYREQUEST,
    output_type=_CREATELICENSERESPONSE,
    serialized_options=b'\202\323\344\223\002\021\"\014/v1/licenses:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetLicense',
    full_name='github.com.metaprov.modelaapi.services.license.v1.LicenseService.GetLicense',
    index=3,
    containing_service=None,
    input_type=_GETLICENSEREQUEST,
    output_type=_GETLICENSERESPONSE,
    serialized_options=b'\202\323\344\223\002!\022\037/v1/licenses/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateLicense',
    full_name='github.com.metaprov.modelaapi.services.license.v1.LicenseService.UpdateLicense',
    index=4,
    containing_service=None,
    input_type=_UPDATELICENSEREQUEST,
    output_type=_UPDATELICENSERESPONSE,
    serialized_options=b'\202\323\344\223\002@\032;/v1/licenses/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteLicense',
    full_name='github.com.metaprov.modelaapi.services.license.v1.LicenseService.DeleteLicense',
    index=5,
    containing_service=None,
    input_type=_DELETELICENSEREQUEST,
    output_type=_DELETELICENSERESPONSE,
    serialized_options=b'\202\323\344\223\002!*\037/v1/licenses/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_LICENSESERVICE)

DESCRIPTOR.services_by_name['LicenseService'] = _LICENSESERVICE

# @@protoc_insertion_point(module_scope)
