# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/dataproductversion/v1/dataproductversion.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modeldapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/dataproductversion/v1/dataproductversion.proto',
  package='github.com.metaprov.modeldapi.services.dataproductversion.v1',
  syntax='proto3',
  serialized_options=b'Z<github.com/metaprov/modeldapi/services/dataproductversion/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nUgithub.com/metaprov/modeldapi/services/dataproductversion/v1/dataproductversion.proto\x12<github.com.metaprov.modeldapi.services.dataproductversion.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\x1a=github.com/metaprov/modeldapi/services/common/v1/common.proto\"\xdc\x01\n\x1eListDataProductVersionsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12x\n\x06labels\x18\x03 \x03(\x0b\x32h.github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"~\n\x1fListDataProductVersionsResponse\x12[\n\x05items\x18\x01 \x01(\x0b\x32L.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersionList\"y\n\x1f\x43reateDataProductVersionRequest\x12V\n\x04item\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion\"\"\n CreateDataProductVersionResponse\"y\n\x1fUpdateDataProductVersionRequest\x12V\n\x04item\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion\"\"\n UpdateDataProductVersionResponse\"?\n\x1cGetDataProductVersionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x85\x01\n\x1dGetDataProductVersionResponse\x12V\n\x04item\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"B\n\x1f\x44\x65leteDataProductVersionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\"\n DeleteDataProductVersionResponse2\xb3\n\n\x19\x44\x61taProductVersionService\x12\xf7\x01\n\x17ListDataProductVersions\x12\\.github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest\x1a].github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/v1/dataproductversions\x12\x8e\x02\n\x18\x43reateDataProductVersion\x12].github.com.metaprov.modeldapi.services.dataproductversion.v1.CreateDataProductVersionRequest\x1a^.github.com.metaprov.modeldapi.services.dataproductversion.v1.CreateDataProductVersionResponse\"3\x82\xd3\xe4\x93\x02-\"\x17/v1/dataproductversions:\x12\x64\x61taproductversion\x12\xf8\x01\n\x15GetDataProductVersion\x12Z.github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionRequest\x1a[.github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/v1/dataproductversions/{name}\x12\xb1\x02\n\x18UpdateDataProductVersion\x12].github.com.metaprov.modeldapi.services.dataproductversion.v1.UpdateDataProductVersionRequest\x1a^.github.com.metaprov.modeldapi.services.dataproductversion.v1.UpdateDataProductVersionResponse\"V\x82\xd3\xe4\x93\x02P\x1a:/v1/dataproductversions/{dataproductversion.metadata.name}:\x12\x64\x61taproductversion\x12\xdb\x01\n\x18\x44\x65leteDataProductVersion\x12].github.com.metaprov.modeldapi.services.dataproductversion.v1.DeleteDataProductVersionRequest\x1a^.github.com.metaprov.modeldapi.services.dataproductversion.v1.DeleteDataProductVersionResponse\"\x00\x42>Z<github.com/metaprov/modeldapi/services/dataproductversion/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry.value', index=1,
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
  serialized_start=490,
  serialized_end=535,
)

_LISTDATAPRODUCTVERSIONSREQUEST = _descriptor.Descriptor(
  name='ListDataProductVersionsRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest.labels', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=315,
  serialized_end=535,
)


_LISTDATAPRODUCTVERSIONSRESPONSE = _descriptor.Descriptor(
  name='ListDataProductVersionsResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsResponse.items', index=0,
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
  serialized_start=537,
  serialized_end=663,
)


_CREATEDATAPRODUCTVERSIONREQUEST = _descriptor.Descriptor(
  name='CreateDataProductVersionRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.CreateDataProductVersionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.CreateDataProductVersionRequest.item', index=0,
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
  serialized_start=665,
  serialized_end=786,
)


_CREATEDATAPRODUCTVERSIONRESPONSE = _descriptor.Descriptor(
  name='CreateDataProductVersionResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.CreateDataProductVersionResponse',
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
  serialized_start=788,
  serialized_end=822,
)


_UPDATEDATAPRODUCTVERSIONREQUEST = _descriptor.Descriptor(
  name='UpdateDataProductVersionRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.UpdateDataProductVersionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.UpdateDataProductVersionRequest.item', index=0,
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
  serialized_start=824,
  serialized_end=945,
)


_UPDATEDATAPRODUCTVERSIONRESPONSE = _descriptor.Descriptor(
  name='UpdateDataProductVersionResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.UpdateDataProductVersionResponse',
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
  serialized_start=947,
  serialized_end=981,
)


_GETDATAPRODUCTVERSIONREQUEST = _descriptor.Descriptor(
  name='GetDataProductVersionRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionRequest.name', index=1,
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
  serialized_start=983,
  serialized_end=1046,
)


_GETDATAPRODUCTVERSIONRESPONSE = _descriptor.Descriptor(
  name='GetDataProductVersionResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionResponse.yaml', index=1,
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
  serialized_start=1049,
  serialized_end=1182,
)


_DELETEDATAPRODUCTVERSIONREQUEST = _descriptor.Descriptor(
  name='DeleteDataProductVersionRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DeleteDataProductVersionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DeleteDataProductVersionRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DeleteDataProductVersionRequest.name', index=1,
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
  serialized_start=1184,
  serialized_end=1250,
)


_DELETEDATAPRODUCTVERSIONRESPONSE = _descriptor.Descriptor(
  name='DeleteDataProductVersionResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DeleteDataProductVersionResponse',
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
  serialized_start=1252,
  serialized_end=1286,
)

_LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY.containing_type = _LISTDATAPRODUCTVERSIONSREQUEST
_LISTDATAPRODUCTVERSIONSREQUEST.fields_by_name['labels'].message_type = _LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY
_LISTDATAPRODUCTVERSIONSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTVERSIONLIST
_CREATEDATAPRODUCTVERSIONREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTVERSION
_UPDATEDATAPRODUCTVERSIONREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTVERSION
_GETDATAPRODUCTVERSIONRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTVERSION
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
    '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTDATAPRODUCTVERSIONSREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsRequest)
  })
_sym_db.RegisterMessage(ListDataProductVersionsRequest)
_sym_db.RegisterMessage(ListDataProductVersionsRequest.LabelsEntry)

ListDataProductVersionsResponse = _reflection.GeneratedProtocolMessageType('ListDataProductVersionsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTDATAPRODUCTVERSIONSRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.ListDataProductVersionsResponse)
  })
_sym_db.RegisterMessage(ListDataProductVersionsResponse)

CreateDataProductVersionRequest = _reflection.GeneratedProtocolMessageType('CreateDataProductVersionRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATAPRODUCTVERSIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.CreateDataProductVersionRequest)
  })
_sym_db.RegisterMessage(CreateDataProductVersionRequest)

CreateDataProductVersionResponse = _reflection.GeneratedProtocolMessageType('CreateDataProductVersionResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATAPRODUCTVERSIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.CreateDataProductVersionResponse)
  })
_sym_db.RegisterMessage(CreateDataProductVersionResponse)

UpdateDataProductVersionRequest = _reflection.GeneratedProtocolMessageType('UpdateDataProductVersionRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATAPRODUCTVERSIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.UpdateDataProductVersionRequest)
  })
_sym_db.RegisterMessage(UpdateDataProductVersionRequest)

UpdateDataProductVersionResponse = _reflection.GeneratedProtocolMessageType('UpdateDataProductVersionResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATAPRODUCTVERSIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.UpdateDataProductVersionResponse)
  })
_sym_db.RegisterMessage(UpdateDataProductVersionResponse)

GetDataProductVersionRequest = _reflection.GeneratedProtocolMessageType('GetDataProductVersionRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETDATAPRODUCTVERSIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionRequest)
  })
_sym_db.RegisterMessage(GetDataProductVersionRequest)

GetDataProductVersionResponse = _reflection.GeneratedProtocolMessageType('GetDataProductVersionResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETDATAPRODUCTVERSIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.GetDataProductVersionResponse)
  })
_sym_db.RegisterMessage(GetDataProductVersionResponse)

DeleteDataProductVersionRequest = _reflection.GeneratedProtocolMessageType('DeleteDataProductVersionRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATAPRODUCTVERSIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.DeleteDataProductVersionRequest)
  })
_sym_db.RegisterMessage(DeleteDataProductVersionRequest)

DeleteDataProductVersionResponse = _reflection.GeneratedProtocolMessageType('DeleteDataProductVersionResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATAPRODUCTVERSIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproductversion.v1.dataproductversion_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproductversion.v1.DeleteDataProductVersionResponse)
  })
_sym_db.RegisterMessage(DeleteDataProductVersionResponse)


DESCRIPTOR._options = None
_LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY._options = None

_DATAPRODUCTVERSIONSERVICE = _descriptor.ServiceDescriptor(
  name='DataProductVersionService',
  full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1289,
  serialized_end=2620,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListDataProductVersions',
    full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService.ListDataProductVersions',
    index=0,
    containing_service=None,
    input_type=_LISTDATAPRODUCTVERSIONSREQUEST,
    output_type=_LISTDATAPRODUCTVERSIONSRESPONSE,
    serialized_options=b'\202\323\344\223\002\031\022\027/v1/dataproductversions',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateDataProductVersion',
    full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService.CreateDataProductVersion',
    index=1,
    containing_service=None,
    input_type=_CREATEDATAPRODUCTVERSIONREQUEST,
    output_type=_CREATEDATAPRODUCTVERSIONRESPONSE,
    serialized_options=b'\202\323\344\223\002-\"\027/v1/dataproductversions:\022dataproductversion',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetDataProductVersion',
    full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService.GetDataProductVersion',
    index=2,
    containing_service=None,
    input_type=_GETDATAPRODUCTVERSIONREQUEST,
    output_type=_GETDATAPRODUCTVERSIONRESPONSE,
    serialized_options=b'\202\323\344\223\002 \022\036/v1/dataproductversions/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateDataProductVersion',
    full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService.UpdateDataProductVersion',
    index=3,
    containing_service=None,
    input_type=_UPDATEDATAPRODUCTVERSIONREQUEST,
    output_type=_UPDATEDATAPRODUCTVERSIONRESPONSE,
    serialized_options=b'\202\323\344\223\002P\032:/v1/dataproductversions/{dataproductversion.metadata.name}:\022dataproductversion',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteDataProductVersion',
    full_name='github.com.metaprov.modeldapi.services.dataproductversion.v1.DataProductVersionService.DeleteDataProductVersion',
    index=4,
    containing_service=None,
    input_type=_DELETEDATAPRODUCTVERSIONREQUEST,
    output_type=_DELETEDATAPRODUCTVERSIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATAPRODUCTVERSIONSERVICE)

DESCRIPTOR.services_by_name['DataProductVersionService'] = _DATAPRODUCTVERSIONSERVICE

# @@protoc_insertion_point(module_scope)
