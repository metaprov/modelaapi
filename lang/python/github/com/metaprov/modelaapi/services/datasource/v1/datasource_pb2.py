# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/datasource/v1/datasource.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2
from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_catalog_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nEgithub.com/metaprov/modelaapi/services/datasource/v1/datasource.proto\x12\x34github.com.metaprov.modelaapi.services.datasource.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\x1aGgithub.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated.proto\"\xfb\x01\n\x15ListDataSourceRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12g\n\x06labels\x18\x02 \x03(\x0b\x32W.github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x8c\x01\n\x16ListDataSourceResponse\x12Y\n\x0b\x64\x61tasources\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSourceList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"7\n\x14GetDataSourceRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"{\n\x15GetDataSourceResponse\x12T\n\ndatasource\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"\x9f\x01\n\x17UpdateDataSourceRequest\x12T\n\ndatasource\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x1a\n\x18UpdateDataSourceResponse\"o\n\x17\x43reateDataSourceRequest\x12T\n\ndatasource\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\"\x1a\n\x18\x43reateDataSourceResponse\":\n\x17\x44\x65leteDataSourceRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1a\n\x18\x44\x65leteDataSourceResponse\"\xd3\x01\n\x12InferSchemaRequest\x12\x0e\n\x06tenant\x18\x01 \x01(\t\x12T\n\ndatasource\x18\x02 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12W\n\x08location\x18\x03 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation\"g\n\x13InferSchemaResponse\x12P\n\x07\x63olumns\x18\x01 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.ColumnProfile\"\xd8\x01\n\x13GetTableViewRequest\x12\x0e\n\x06tenant\x18\x01 \x01(\t\x12X\n\x06\x66ormat\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FlatFileFormatSpec\x12W\n\x08location\x18\x03 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation\"b\n\x14GetTableViewResponse\x12J\n\x05table\x18\x01 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView2\xfa\x0b\n\x11\x44\x61taSourceService\x12\xd1\x01\n\x0fListDataSources\x12K.github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceRequest\x1aL.github.com.metaprov.modelaapi.services.datasource.v1.ListDataSourceResponse\"#\x82\xd3\xe4\x93\x02\x1d\x12\x1b/v1/datasources/{namespace}\x12\xcd\x01\n\x10\x43reateDataSource\x12M.github.com.metaprov.modelaapi.services.datasource.v1.CreateDataSourceRequest\x1aN.github.com.metaprov.modelaapi.services.datasource.v1.CreateDataSourceResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\"\x0f/v1/datasources:\x01*\x12\xd4\x01\n\rGetDataSource\x12J.github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceRequest\x1aK.github.com.metaprov.modelaapi.services.datasource.v1.GetDataSourceResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/v1/datasources/{namespace}/{name}\x12\x88\x02\n\x10UpdateDataSource\x12M.github.com.metaprov.modelaapi.services.datasource.v1.UpdateDataSourceRequest\x1aN.github.com.metaprov.modelaapi.services.datasource.v1.UpdateDataSourceResponse\"U\x82\xd3\xe4\x93\x02O\x1aJ/v1/datasources/{datasource.metadata.namespace}/{datasource.metadata.name}:\x01*\x12\xdd\x01\n\x10\x44\x65leteDataSource\x12M.github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceRequest\x1aN.github.com.metaprov.modelaapi.services.datasource.v1.DeleteDataSourceResponse\"*\x82\xd3\xe4\x93\x02$*\"/v1/datasources/{namespace}/{name}\x12\xd4\x01\n\x0bInferSchema\x12H.github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaRequest\x1aI.github.com.metaprov.modelaapi.services.datasource.v1.InferSchemaResponse\"0\x82\xd3\xe4\x93\x02*\"(/v1/datasources/{namespace}/{name}:infer\x12\xa7\x01\n\x0cGetTableView\x12I.github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewRequest\x1aJ.github.com.metaprov.modelaapi.services.datasource.v1.GetTableViewResponse\"\x00\x42\x36Z4github.com/metaprov/modelaapi/services/datasource/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.datasource.v1.datasource_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z4github.com/metaprov/modelaapi/services/datasource/v1'
  _LISTDATASOURCEREQUEST_LABELSENTRY._options = None
  _LISTDATASOURCEREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _DATASOURCESERVICE.methods_by_name['ListDataSources']._options = None
  _DATASOURCESERVICE.methods_by_name['ListDataSources']._serialized_options = b'\202\323\344\223\002\035\022\033/v1/datasources/{namespace}'
  _DATASOURCESERVICE.methods_by_name['CreateDataSource']._options = None
  _DATASOURCESERVICE.methods_by_name['CreateDataSource']._serialized_options = b'\202\323\344\223\002\024\"\017/v1/datasources:\001*'
  _DATASOURCESERVICE.methods_by_name['GetDataSource']._options = None
  _DATASOURCESERVICE.methods_by_name['GetDataSource']._serialized_options = b'\202\323\344\223\002$\022\"/v1/datasources/{namespace}/{name}'
  _DATASOURCESERVICE.methods_by_name['UpdateDataSource']._options = None
  _DATASOURCESERVICE.methods_by_name['UpdateDataSource']._serialized_options = b'\202\323\344\223\002O\032J/v1/datasources/{datasource.metadata.namespace}/{datasource.metadata.name}:\001*'
  _DATASOURCESERVICE.methods_by_name['DeleteDataSource']._options = None
  _DATASOURCESERVICE.methods_by_name['DeleteDataSource']._serialized_options = b'\202\323\344\223\002$*\"/v1/datasources/{namespace}/{name}'
  _DATASOURCESERVICE.methods_by_name['InferSchema']._options = None
  _DATASOURCESERVICE.methods_by_name['InferSchema']._serialized_options = b'\202\323\344\223\002*\"(/v1/datasources/{namespace}/{name}:infer'
  _LISTDATASOURCEREQUEST._serialized_start=469
  _LISTDATASOURCEREQUEST._serialized_end=720
  _LISTDATASOURCEREQUEST_LABELSENTRY._serialized_start=675
  _LISTDATASOURCEREQUEST_LABELSENTRY._serialized_end=720
  _LISTDATASOURCERESPONSE._serialized_start=723
  _LISTDATASOURCERESPONSE._serialized_end=863
  _GETDATASOURCEREQUEST._serialized_start=865
  _GETDATASOURCEREQUEST._serialized_end=920
  _GETDATASOURCERESPONSE._serialized_start=922
  _GETDATASOURCERESPONSE._serialized_end=1045
  _UPDATEDATASOURCEREQUEST._serialized_start=1048
  _UPDATEDATASOURCEREQUEST._serialized_end=1207
  _UPDATEDATASOURCERESPONSE._serialized_start=1209
  _UPDATEDATASOURCERESPONSE._serialized_end=1235
  _CREATEDATASOURCEREQUEST._serialized_start=1237
  _CREATEDATASOURCEREQUEST._serialized_end=1348
  _CREATEDATASOURCERESPONSE._serialized_start=1350
  _CREATEDATASOURCERESPONSE._serialized_end=1376
  _DELETEDATASOURCEREQUEST._serialized_start=1378
  _DELETEDATASOURCEREQUEST._serialized_end=1436
  _DELETEDATASOURCERESPONSE._serialized_start=1438
  _DELETEDATASOURCERESPONSE._serialized_end=1464
  _INFERSCHEMAREQUEST._serialized_start=1467
  _INFERSCHEMAREQUEST._serialized_end=1678
  _INFERSCHEMARESPONSE._serialized_start=1680
  _INFERSCHEMARESPONSE._serialized_end=1783
  _GETTABLEVIEWREQUEST._serialized_start=1786
  _GETTABLEVIEWREQUEST._serialized_end=2002
  _GETTABLEVIEWRESPONSE._serialized_start=2004
  _GETTABLEVIEWRESPONSE._serialized_end=2102
  _DATASOURCESERVICE._serialized_start=2105
  _DATASOURCESERVICE._serialized_end=3635
# @@protoc_insertion_point(module_scope)
