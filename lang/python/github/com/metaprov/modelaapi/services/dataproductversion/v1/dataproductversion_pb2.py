# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/dataproductversion/v1/dataproductversion.proto
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
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/dataproductversion/v1/dataproductversion.proto',
  package='github.com.metaprov.modelaapi.services.dataproductversion.v1',
  syntax='proto3',
  serialized_options=b'Z<github.com/metaprov/modelaapi/services/dataproductversion/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nUgithub.com/metaprov/modelaapi/services/dataproductversion/v1/dataproductversion.proto\x12<github.com.metaprov.modelaapi.services.dataproductversion.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\x95\x02\n\x1eListDataProductVersionsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12x\n\x06labels\x18\x02 \x03(\x0b\x32h.github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xa5\x01\n\x1fListDataProductVersionsResponse\x12i\n\x13\x64\x61taproductversions\x18\x01 \x01(\x0b\x32L.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersionList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x87\x01\n\x1f\x43reateDataProductVersionRequest\x12\x64\n\x12\x64\x61taproductversion\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\"\"\n CreateDataProductVersionResponse\"\xb7\x01\n\x1fUpdateDataProductVersionRequest\x12\x64\n\x12\x64\x61taproductversion\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\"\n UpdateDataProductVersionResponse\"?\n\x1cGetDataProductVersionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x93\x01\n\x1dGetDataProductVersionResponse\x12\x64\n\x12\x64\x61taproductversion\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"B\n\x1f\x44\x65leteDataProductVersionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\"\n DeleteDataProductVersionResponse2\xe7\n\n\x19\x44\x61taProductVersionService\x12\x83\x02\n\x17ListDataProductVersions\x12\\.github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest\x1a].github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsResponse\"+\x82\xd3\xe4\x93\x02%\x12#/v1/dataproductversions/{namespace}\x12\xfd\x01\n\x18\x43reateDataProductVersion\x12].github.com.metaprov.modelaapi.services.dataproductversion.v1.CreateDataProductVersionRequest\x1a^.github.com.metaprov.modelaapi.services.dataproductversion.v1.CreateDataProductVersionResponse\"\"\x82\xd3\xe4\x93\x02\x1c\"\x17/v1/dataproductversions:\x01*\x12\x84\x02\n\x15GetDataProductVersion\x12Z.github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionRequest\x1a[.github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionResponse\"2\x82\xd3\xe4\x93\x02,\x12*/v1/dataproductversions/{namespace}/{name}\x12\xac\x02\n\x18UpdateDataProductVersion\x12].github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionRequest\x1a^.github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionResponse\"Q\x82\xd3\xe4\x93\x02K\x1a\x46/v1/dataproductversions/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\x8d\x02\n\x18\x44\x65leteDataProductVersion\x12].github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionRequest\x1a^.github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionResponse\"2\x82\xd3\xe4\x93\x02,**/v1/dataproductversions/{namespace}/{name}B>Z<github.com/metaprov/modelaapi/services/dataproductversion/v1b\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_field__mask__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry.value', index=1,
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
  serialized_start=581,
  serialized_end=626,
)

_LISTDATAPRODUCTVERSIONSREQUEST = _descriptor.Descriptor(
  name='ListDataProductVersionsRequest',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=349,
  serialized_end=626,
)


_LISTDATAPRODUCTVERSIONSRESPONSE = _descriptor.Descriptor(
  name='ListDataProductVersionsResponse',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataproductversions', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsResponse.dataproductversions', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_token', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsResponse.next_page_token', index=1,
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
  serialized_start=629,
  serialized_end=794,
)


_CREATEDATAPRODUCTVERSIONREQUEST = _descriptor.Descriptor(
  name='CreateDataProductVersionRequest',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.CreateDataProductVersionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataproductversion', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.CreateDataProductVersionRequest.dataproductversion', index=0,
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
  serialized_start=797,
  serialized_end=932,
)


_CREATEDATAPRODUCTVERSIONRESPONSE = _descriptor.Descriptor(
  name='CreateDataProductVersionResponse',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.CreateDataProductVersionResponse',
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
  serialized_start=934,
  serialized_end=968,
)


_UPDATEDATAPRODUCTVERSIONREQUEST = _descriptor.Descriptor(
  name='UpdateDataProductVersionRequest',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataproductversion', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionRequest.dataproductversion', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='field_mask', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionRequest.field_mask', index=1,
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
  serialized_start=971,
  serialized_end=1154,
)


_UPDATEDATAPRODUCTVERSIONRESPONSE = _descriptor.Descriptor(
  name='UpdateDataProductVersionResponse',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionResponse',
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
  serialized_start=1156,
  serialized_end=1190,
)


_GETDATAPRODUCTVERSIONREQUEST = _descriptor.Descriptor(
  name='GetDataProductVersionRequest',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionRequest.name', index=1,
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
  serialized_start=1192,
  serialized_end=1255,
)


_GETDATAPRODUCTVERSIONRESPONSE = _descriptor.Descriptor(
  name='GetDataProductVersionResponse',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataproductversion', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionResponse.dataproductversion', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionResponse.yaml', index=1,
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
  serialized_end=1405,
)


_DELETEDATAPRODUCTVERSIONREQUEST = _descriptor.Descriptor(
  name='DeleteDataProductVersionRequest',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionRequest.name', index=1,
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
  serialized_start=1407,
  serialized_end=1473,
)


_DELETEDATAPRODUCTVERSIONRESPONSE = _descriptor.Descriptor(
  name='DeleteDataProductVersionResponse',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionResponse',
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
  serialized_start=1475,
  serialized_end=1509,
)

_LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY.containing_type = _LISTDATAPRODUCTVERSIONSREQUEST
_LISTDATAPRODUCTVERSIONSREQUEST.fields_by_name['labels'].message_type = _LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY
_LISTDATAPRODUCTVERSIONSRESPONSE.fields_by_name['dataproductversions'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTVERSIONLIST
_CREATEDATAPRODUCTVERSIONREQUEST.fields_by_name['dataproductversion'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTVERSION
_UPDATEDATAPRODUCTVERSIONREQUEST.fields_by_name['dataproductversion'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTVERSION
_UPDATEDATAPRODUCTVERSIONREQUEST.fields_by_name['field_mask'].message_type = google_dot_protobuf_dot_field__mask__pb2._FIELDMASK
_GETDATAPRODUCTVERSIONRESPONSE.fields_by_name['dataproductversion'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTVERSION
DESCRIPTOR.message_types_by_name['ListDataProductVersionsRequest'] = _LISTDATAPRODUCTVERSIONSREQUEST
DESCRIPTOR.message_types_by_name['ListDataProductVersionsResponse'] = _LISTDATAPRODUCTVERSIONSRESPONSE
DESCRIPTOR.message_types_by_name['CreateDataProductVersionRequest'] = _CREATEDATAPRODUCTVERSIONREQUEST
DESCRIPTOR.message_types_by_name['CreateDataProductVersionResponse'] = _CREATEDATAPRODUCTVERSIONRESPONSE
DESCRIPTOR.message_types_by_name['UpdateDataProductVersionRequest'] = _UPDATEDATAPRODUCTVERSIONREQUEST
DESCRIPTOR.message_types_by_name['UpdateDataProductVersionResponse'] = _UPDATEDATAPRODUCTVERSIONRESPONSE
DESCRIPTOR.message_types_by_name['GetDataProductVersionRequest'] = _GETDATAPRODUCTVERSIONREQUEST
DESCRIPTOR.message_types_by_name['GetDataProductVersionResponse'] = _GETDATAPRODUCTVERSIONRESPONSE
DESCRIPTOR.message_types_by_name['DeleteDataProductVersionRequest'] = _DELETEDATAPRODUCTVERSIONREQUEST
DESCRIPTOR.message_types_by_name['DeleteDataProductVersionResponse'] = _DELETEDATAPRODUCTVERSIONRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListDataProductVersionsRequest = _reflection.GeneratedProtocolMessageType('ListDataProductVersionsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTDATAPRODUCTVERSIONSREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest)
  })
_sym_db.RegisterMessage(ListDataProductVersionsRequest)
_sym_db.RegisterMessage(ListDataProductVersionsRequest.LabelsEntry)

ListDataProductVersionsResponse = _reflection.GeneratedProtocolMessageType('ListDataProductVersionsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTDATAPRODUCTVERSIONSRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsResponse)
  })
_sym_db.RegisterMessage(ListDataProductVersionsResponse)

CreateDataProductVersionRequest = _reflection.GeneratedProtocolMessageType('CreateDataProductVersionRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATAPRODUCTVERSIONREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.CreateDataProductVersionRequest)
  })
_sym_db.RegisterMessage(CreateDataProductVersionRequest)

CreateDataProductVersionResponse = _reflection.GeneratedProtocolMessageType('CreateDataProductVersionResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATAPRODUCTVERSIONRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.CreateDataProductVersionResponse)
  })
_sym_db.RegisterMessage(CreateDataProductVersionResponse)

UpdateDataProductVersionRequest = _reflection.GeneratedProtocolMessageType('UpdateDataProductVersionRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATAPRODUCTVERSIONREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionRequest)
  })
_sym_db.RegisterMessage(UpdateDataProductVersionRequest)

UpdateDataProductVersionResponse = _reflection.GeneratedProtocolMessageType('UpdateDataProductVersionResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATAPRODUCTVERSIONRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionResponse)
  })
_sym_db.RegisterMessage(UpdateDataProductVersionResponse)

GetDataProductVersionRequest = _reflection.GeneratedProtocolMessageType('GetDataProductVersionRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETDATAPRODUCTVERSIONREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionRequest)
  })
_sym_db.RegisterMessage(GetDataProductVersionRequest)

GetDataProductVersionResponse = _reflection.GeneratedProtocolMessageType('GetDataProductVersionResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETDATAPRODUCTVERSIONRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionResponse)
  })
_sym_db.RegisterMessage(GetDataProductVersionResponse)

DeleteDataProductVersionRequest = _reflection.GeneratedProtocolMessageType('DeleteDataProductVersionRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATAPRODUCTVERSIONREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionRequest)
  })
_sym_db.RegisterMessage(DeleteDataProductVersionRequest)

DeleteDataProductVersionResponse = _reflection.GeneratedProtocolMessageType('DeleteDataProductVersionResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATAPRODUCTVERSIONRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionResponse)
  })
_sym_db.RegisterMessage(DeleteDataProductVersionResponse)


DESCRIPTOR._options = None
_LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY._options = None

_DATAPRODUCTVERSIONSERVICE = _descriptor.ServiceDescriptor(
  name='DataProductVersionService',
  full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1512,
  serialized_end=2895,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListDataProductVersions',
    full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService.ListDataProductVersions',
    index=0,
    containing_service=None,
    input_type=_LISTDATAPRODUCTVERSIONSREQUEST,
    output_type=_LISTDATAPRODUCTVERSIONSRESPONSE,
    serialized_options=b'\202\323\344\223\002%\022#/v1/dataproductversions/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateDataProductVersion',
    full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService.CreateDataProductVersion',
    index=1,
    containing_service=None,
    input_type=_CREATEDATAPRODUCTVERSIONREQUEST,
    output_type=_CREATEDATAPRODUCTVERSIONRESPONSE,
    serialized_options=b'\202\323\344\223\002\034\"\027/v1/dataproductversions:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetDataProductVersion',
    full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService.GetDataProductVersion',
    index=2,
    containing_service=None,
    input_type=_GETDATAPRODUCTVERSIONREQUEST,
    output_type=_GETDATAPRODUCTVERSIONRESPONSE,
    serialized_options=b'\202\323\344\223\002,\022*/v1/dataproductversions/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateDataProductVersion',
    full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService.UpdateDataProductVersion',
    index=3,
    containing_service=None,
    input_type=_UPDATEDATAPRODUCTVERSIONREQUEST,
    output_type=_UPDATEDATAPRODUCTVERSIONRESPONSE,
    serialized_options=b'\202\323\344\223\002K\032F/v1/dataproductversions/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteDataProductVersion',
    full_name='github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService.DeleteDataProductVersion',
    index=4,
    containing_service=None,
    input_type=_DELETEDATAPRODUCTVERSIONREQUEST,
    output_type=_DELETEDATAPRODUCTVERSIONRESPONSE,
    serialized_options=b'\202\323\344\223\002,**/v1/dataproductversions/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATAPRODUCTVERSIONSERVICE)

DESCRIPTOR.services_by_name['DataProductVersionService'] = _DATAPRODUCTVERSIONSERVICE

# @@protoc_insertion_point(module_scope)
