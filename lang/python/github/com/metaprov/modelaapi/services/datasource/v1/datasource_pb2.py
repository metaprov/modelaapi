# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/datasource/v1/datasource.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/datasource/v1/datasource.proto',
  package='github.com.metaprov.modelaapi.services.datasource.v1',
  syntax='proto3',
  serialized_options=b'Z4github.com/metaprov/modelaapi/services/datasource/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nEgithub.com/metaprov/modelaapi/services/datasource/v1/datasource.proto\x12\x34github.com.metaprov.modelaapi.services.datasource.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xfb\x01\n\x15ListDataSourceRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12g\n\x06labels\x18\x02 \x03(\x0b\x32W.github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"l\n\x16ListDataSourceResponse\x12R\n\x04list\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSourceList\"7\n\x14GetDataSourceRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"u\n\x15GetDataSourceResponse\x12N\n\x04item\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"i\n\x17UpdateDataSourceRequest\x12N\n\x04item\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\"\x1a\n\x18UpdateDataSourceResponse\"i\n\x17\x43reateDataSourceRequest\x12N\n\x04item\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\"\x1a\n\x18\x43reateDataSourceResponse\":\n\x17\x44\x65leteDataSourceRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1a\n\x18\x44\x65leteDataSourceResponse\"\xe1\x01\n\x12InferSchemaRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12T\n\ndatasource\x18\x03 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12T\n\x08location\x18\x04 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation\"g\n\x13InferSchemaResponse\x12P\n\x07\x63olumns\x18\x01 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.ColumnProfile\"\xd4\x01\n\x13GetTableViewRequest\x12\x0e\n\x06tenant\x18\x01 \x01(\t\x12W\n\x0c\x66latfilespec\x18\x02 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.CsvFileSpec\x12T\n\x08location\x18\x03 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation\"b\n\x14GetTableViewResponse\x12J\n\x05table\x18\x01 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView2\xee\x0b\n\x11\x44\x61taSourceService\x12\xd1\x01\n\x0fListDataSources\x12K.github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest\x1aL.github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceResponse\"#\x82\xd3\xe4\x93\x02\x1d\x12\x1b/v1/datasources/{namespace}\x12\xcd\x01\n\x10\x43reateDataSource\x12M.github.com.metaprov.modelaapi.services.datasource.v1.CreateDataSourceRequest\x1aN.github.com.metaprov.modelaapi.services.datasource.v1.CreateDataSourceResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\"\x0f/v1/datasources:\x01*\x12\xd4\x01\n\rGetDataSource\x12J.github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceRequest\x1aK.github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/v1/datasources/{namespace}/{name}\x12\xfc\x01\n\x10UpdateDataSource\x12M.github.com.metaprov.modelaapi.services.datasource.v1.UpdateDataSourceRequest\x1aN.github.com.metaprov.modelaapi.services.datasource.v1.UpdateDataSourceResponse\"I\x82\xd3\xe4\x93\x02\x43\x1a>/v1/datasources/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xdd\x01\n\x10\x44\x65leteDataSource\x12M.github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceRequest\x1aN.github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceResponse\"*\x82\xd3\xe4\x93\x02$*\"/v1/datasources/{namespace}/{name}\x12\xd4\x01\n\x0bInferSchema\x12H.github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaRequest\x1aI.github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaResponse\"0\x82\xd3\xe4\x93\x02*\"(/v1/datasources/{namespace}/{name}:infer\x12\xa7\x01\n\x0cGetTableView\x12I.github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewRequest\x1aJ.github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewResponse\"\x00\x42\x36Z4github.com/metaprov/modelaapi/services/datasource/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTDATASOURCEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.LabelsEntry.value', index=1,
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
  serialized_start=568,
  serialized_end=613,
)

_LISTDATASOURCEREQUEST = _descriptor.Descriptor(
  name='ListDataSourceRequest',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTDATASOURCEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=362,
  serialized_end=613,
)


_LISTDATASOURCERESPONSE = _descriptor.Descriptor(
  name='ListDataSourceResponse',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='list', full_name='github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceResponse.list', index=0,
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
  serialized_start=615,
  serialized_end=723,
)


_GETDATASOURCEREQUEST = _descriptor.Descriptor(
  name='GetDataSourceRequest',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceRequest.name', index=1,
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
  serialized_start=725,
  serialized_end=780,
)


_GETDATASOURCERESPONSE = _descriptor.Descriptor(
  name='GetDataSourceResponse',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceResponse.yaml', index=1,
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
  serialized_start=782,
  serialized_end=899,
)


_UPDATEDATASOURCEREQUEST = _descriptor.Descriptor(
  name='UpdateDataSourceRequest',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.UpdateDataSourceRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.datasource.v1.UpdateDataSourceRequest.item', index=0,
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
  serialized_start=901,
  serialized_end=1006,
)


_UPDATEDATASOURCERESPONSE = _descriptor.Descriptor(
  name='UpdateDataSourceResponse',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.UpdateDataSourceResponse',
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
  serialized_start=1008,
  serialized_end=1034,
)


_CREATEDATASOURCEREQUEST = _descriptor.Descriptor(
  name='CreateDataSourceRequest',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.CreateDataSourceRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.datasource.v1.CreateDataSourceRequest.item', index=0,
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
  serialized_start=1036,
  serialized_end=1141,
)


_CREATEDATASOURCERESPONSE = _descriptor.Descriptor(
  name='CreateDataSourceResponse',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.CreateDataSourceResponse',
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
  serialized_start=1143,
  serialized_end=1169,
)


_DELETEDATASOURCEREQUEST = _descriptor.Descriptor(
  name='DeleteDataSourceRequest',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceRequest.name', index=1,
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
  serialized_start=1171,
  serialized_end=1229,
)


_DELETEDATASOURCERESPONSE = _descriptor.Descriptor(
  name='DeleteDataSourceResponse',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceResponse',
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
  serialized_end=1257,
)


_INFERSCHEMAREQUEST = _descriptor.Descriptor(
  name='InferSchemaRequest',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='datasource', full_name='github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaRequest.datasource', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='location', full_name='github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaRequest.location', index=3,
      number=4, type=11, cpp_type=10, label=1,
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
  serialized_start=1260,
  serialized_end=1485,
)


_INFERSCHEMARESPONSE = _descriptor.Descriptor(
  name='InferSchemaResponse',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='columns', full_name='github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaResponse.columns', index=0,
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
  serialized_start=1487,
  serialized_end=1590,
)


_GETTABLEVIEWREQUEST = _descriptor.Descriptor(
  name='GetTableViewRequest',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='tenant', full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewRequest.tenant', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='flatfilespec', full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewRequest.flatfilespec', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='location', full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewRequest.location', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
  serialized_start=1593,
  serialized_end=1805,
)


_GETTABLEVIEWRESPONSE = _descriptor.Descriptor(
  name='GetTableViewResponse',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='table', full_name='github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewResponse.table', index=0,
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
  serialized_start=1807,
  serialized_end=1905,
)

_LISTDATASOURCEREQUEST_LABELSENTRY.containing_type = _LISTDATASOURCEREQUEST
_LISTDATASOURCEREQUEST.fields_by_name['labels'].message_type = _LISTDATASOURCEREQUEST_LABELSENTRY
_LISTDATASOURCERESPONSE.fields_by_name['list'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATASOURCELIST
_GETDATASOURCERESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATASOURCE
_UPDATEDATASOURCEREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATASOURCE
_CREATEDATASOURCEREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATASOURCE
_INFERSCHEMAREQUEST.fields_by_name['datasource'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATASOURCE
_INFERSCHEMAREQUEST.fields_by_name['location'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATALOCATION
_INFERSCHEMARESPONSE.fields_by_name['columns'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2._COLUMNPROFILE
_GETTABLEVIEWREQUEST.fields_by_name['flatfilespec'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._CSVFILESPEC
_GETTABLEVIEWREQUEST.fields_by_name['location'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATALOCATION
_GETTABLEVIEWRESPONSE.fields_by_name['table'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2._TABLEVIEW
DESCRIPTOR.message_types_by_name['ListDataSourceRequest'] = _LISTDATASOURCEREQUEST
DESCRIPTOR.message_types_by_name['ListDataSourceResponse'] = _LISTDATASOURCERESPONSE
DESCRIPTOR.message_types_by_name['GetDataSourceRequest'] = _GETDATASOURCEREQUEST
DESCRIPTOR.message_types_by_name['GetDataSourceResponse'] = _GETDATASOURCERESPONSE
DESCRIPTOR.message_types_by_name['UpdateDataSourceRequest'] = _UPDATEDATASOURCEREQUEST
DESCRIPTOR.message_types_by_name['UpdateDataSourceResponse'] = _UPDATEDATASOURCERESPONSE
DESCRIPTOR.message_types_by_name['CreateDataSourceRequest'] = _CREATEDATASOURCEREQUEST
DESCRIPTOR.message_types_by_name['CreateDataSourceResponse'] = _CREATEDATASOURCERESPONSE
DESCRIPTOR.message_types_by_name['DeleteDataSourceRequest'] = _DELETEDATASOURCEREQUEST
DESCRIPTOR.message_types_by_name['DeleteDataSourceResponse'] = _DELETEDATASOURCERESPONSE
DESCRIPTOR.message_types_by_name['InferSchemaRequest'] = _INFERSCHEMAREQUEST
DESCRIPTOR.message_types_by_name['InferSchemaResponse'] = _INFERSCHEMARESPONSE
DESCRIPTOR.message_types_by_name['GetTableViewRequest'] = _GETTABLEVIEWREQUEST
DESCRIPTOR.message_types_by_name['GetTableViewResponse'] = _GETTABLEVIEWRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListDataSourceRequest = _reflection.GeneratedProtocolMessageType('ListDataSourceRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTDATASOURCEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTDATASOURCEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest)
  })
_sym_db.RegisterMessage(ListDataSourceRequest)
_sym_db.RegisterMessage(ListDataSourceRequest.LabelsEntry)

ListDataSourceResponse = _reflection.GeneratedProtocolMessageType('ListDataSourceResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTDATASOURCERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceResponse)
  })
_sym_db.RegisterMessage(ListDataSourceResponse)

GetDataSourceRequest = _reflection.GeneratedProtocolMessageType('GetDataSourceRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETDATASOURCEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceRequest)
  })
_sym_db.RegisterMessage(GetDataSourceRequest)

GetDataSourceResponse = _reflection.GeneratedProtocolMessageType('GetDataSourceResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETDATASOURCERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceResponse)
  })
_sym_db.RegisterMessage(GetDataSourceResponse)

UpdateDataSourceRequest = _reflection.GeneratedProtocolMessageType('UpdateDataSourceRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATASOURCEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.UpdateDataSourceRequest)
  })
_sym_db.RegisterMessage(UpdateDataSourceRequest)

UpdateDataSourceResponse = _reflection.GeneratedProtocolMessageType('UpdateDataSourceResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATASOURCERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.UpdateDataSourceResponse)
  })
_sym_db.RegisterMessage(UpdateDataSourceResponse)

CreateDataSourceRequest = _reflection.GeneratedProtocolMessageType('CreateDataSourceRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATASOURCEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.CreateDataSourceRequest)
  })
_sym_db.RegisterMessage(CreateDataSourceRequest)

CreateDataSourceResponse = _reflection.GeneratedProtocolMessageType('CreateDataSourceResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATASOURCERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.CreateDataSourceResponse)
  })
_sym_db.RegisterMessage(CreateDataSourceResponse)

DeleteDataSourceRequest = _reflection.GeneratedProtocolMessageType('DeleteDataSourceRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATASOURCEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceRequest)
  })
_sym_db.RegisterMessage(DeleteDataSourceRequest)

DeleteDataSourceResponse = _reflection.GeneratedProtocolMessageType('DeleteDataSourceResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATASOURCERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceResponse)
  })
_sym_db.RegisterMessage(DeleteDataSourceResponse)

InferSchemaRequest = _reflection.GeneratedProtocolMessageType('InferSchemaRequest', (_message.Message,), {
  'DESCRIPTOR' : _INFERSCHEMAREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaRequest)
  })
_sym_db.RegisterMessage(InferSchemaRequest)

InferSchemaResponse = _reflection.GeneratedProtocolMessageType('InferSchemaResponse', (_message.Message,), {
  'DESCRIPTOR' : _INFERSCHEMARESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaResponse)
  })
_sym_db.RegisterMessage(InferSchemaResponse)

GetTableViewRequest = _reflection.GeneratedProtocolMessageType('GetTableViewRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETTABLEVIEWREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewRequest)
  })
_sym_db.RegisterMessage(GetTableViewRequest)

GetTableViewResponse = _reflection.GeneratedProtocolMessageType('GetTableViewResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETTABLEVIEWRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewResponse)
  })
_sym_db.RegisterMessage(GetTableViewResponse)


DESCRIPTOR._options = None
_LISTDATASOURCEREQUEST_LABELSENTRY._options = None

_DATASOURCESERVICE = _descriptor.ServiceDescriptor(
  name='DataSourceService',
  full_name='github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1908,
  serialized_end=3426,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListDataSources',
    full_name='github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService.ListDataSources',
    index=0,
    containing_service=None,
    input_type=_LISTDATASOURCEREQUEST,
    output_type=_LISTDATASOURCERESPONSE,
    serialized_options=b'\202\323\344\223\002\035\022\033/v1/datasources/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateDataSource',
    full_name='github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService.CreateDataSource',
    index=1,
    containing_service=None,
    input_type=_CREATEDATASOURCEREQUEST,
    output_type=_CREATEDATASOURCERESPONSE,
    serialized_options=b'\202\323\344\223\002\024\"\017/v1/datasources:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetDataSource',
    full_name='github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService.GetDataSource',
    index=2,
    containing_service=None,
    input_type=_GETDATASOURCEREQUEST,
    output_type=_GETDATASOURCERESPONSE,
    serialized_options=b'\202\323\344\223\002$\022\"/v1/datasources/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateDataSource',
    full_name='github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService.UpdateDataSource',
    index=3,
    containing_service=None,
    input_type=_UPDATEDATASOURCEREQUEST,
    output_type=_UPDATEDATASOURCERESPONSE,
    serialized_options=b'\202\323\344\223\002C\032>/v1/datasources/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteDataSource',
    full_name='github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService.DeleteDataSource',
    index=4,
    containing_service=None,
    input_type=_DELETEDATASOURCEREQUEST,
    output_type=_DELETEDATASOURCERESPONSE,
    serialized_options=b'\202\323\344\223\002$*\"/v1/datasources/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='InferSchema',
    full_name='github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService.InferSchema',
    index=5,
    containing_service=None,
    input_type=_INFERSCHEMAREQUEST,
    output_type=_INFERSCHEMARESPONSE,
    serialized_options=b'\202\323\344\223\002*\"(/v1/datasources/{namespace}/{name}:infer',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetTableView',
    full_name='github.com.metaprov.modelaapi.services.datasource.v1.DataSourceService.GetTableView',
    index=6,
    containing_service=None,
    input_type=_GETTABLEVIEWREQUEST,
    output_type=_GETTABLEVIEWRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATASOURCESERVICE)

DESCRIPTOR.services_by_name['DataSourceService'] = _DATASOURCESERVICE

# @@protoc_insertion_point(module_scope)
