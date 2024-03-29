# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/dataproductversion/v1/dataproductversion.proto
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
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nUgithub.com/metaprov/modelaapi/services/dataproductversion/v1/dataproductversion.proto\x12<github.com.metaprov.modelaapi.services.dataproductversion.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\x95\x02\n\x1eListDataProductVersionsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12x\n\x06labels\x18\x02 \x03(\x0b\x32h.github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xa5\x01\n\x1fListDataProductVersionsResponse\x12i\n\x13\x64\x61taproductversions\x18\x01 \x01(\x0b\x32L.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersionList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x87\x01\n\x1f\x43reateDataProductVersionRequest\x12\x64\n\x12\x64\x61taproductversion\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\"\"\n CreateDataProductVersionResponse\"\xb7\x01\n\x1fUpdateDataProductVersionRequest\x12\x64\n\x12\x64\x61taproductversion\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\"\n UpdateDataProductVersionResponse\"?\n\x1cGetDataProductVersionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x93\x01\n\x1dGetDataProductVersionResponse\x12\x64\n\x12\x64\x61taproductversion\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"B\n\x1f\x44\x65leteDataProductVersionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\"\n DeleteDataProductVersionResponse2\x83\x0b\n\x19\x44\x61taProductVersionService\x12\x83\x02\n\x17ListDataProductVersions\x12\\.github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsRequest\x1a].github.com.metaprov.modelaapi.services.dataproductversion.v1.ListDataProductVersionsResponse\"+\x82\xd3\xe4\x93\x02%\x12#/v1/dataproductversions/{namespace}\x12\xfd\x01\n\x18\x43reateDataProductVersion\x12].github.com.metaprov.modelaapi.services.dataproductversion.v1.CreateDataProductVersionRequest\x1a^.github.com.metaprov.modelaapi.services.dataproductversion.v1.CreateDataProductVersionResponse\"\"\x82\xd3\xe4\x93\x02\x1c\"\x17/v1/dataproductversions:\x01*\x12\x84\x02\n\x15GetDataProductVersion\x12Z.github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionRequest\x1a[.github.com.metaprov.modelaapi.services.dataproductversion.v1.GetDataProductVersionResponse\"2\x82\xd3\xe4\x93\x02,\x12*/v1/dataproductversions/{namespace}/{name}\x12\xc8\x02\n\x18UpdateDataProductVersion\x12].github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionRequest\x1a^.github.com.metaprov.modelaapi.services.dataproductversion.v1.UpdateDataProductVersionResponse\"m\x82\xd3\xe4\x93\x02g\x1a\x62/v1/dataproductversions/{dataproductversion.metadata.namespace}/{dataproductversion.metadata.name}:\x01*\x12\x8d\x02\n\x18\x44\x65leteDataProductVersion\x12].github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionRequest\x1a^.github.com.metaprov.modelaapi.services.dataproductversion.v1.DeleteDataProductVersionResponse\"2\x82\xd3\xe4\x93\x02,**/v1/dataproductversions/{namespace}/{name}B>Z<github.com/metaprov/modelaapi/services/dataproductversion/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.dataproductversion.v1.dataproductversion_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z<github.com/metaprov/modelaapi/services/dataproductversion/v1'
  _LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY._options = None
  _LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['ListDataProductVersions']._options = None
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['ListDataProductVersions']._serialized_options = b'\202\323\344\223\002%\022#/v1/dataproductversions/{namespace}'
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['CreateDataProductVersion']._options = None
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['CreateDataProductVersion']._serialized_options = b'\202\323\344\223\002\034\"\027/v1/dataproductversions:\001*'
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['GetDataProductVersion']._options = None
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['GetDataProductVersion']._serialized_options = b'\202\323\344\223\002,\022*/v1/dataproductversions/{namespace}/{name}'
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['UpdateDataProductVersion']._options = None
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['UpdateDataProductVersion']._serialized_options = b'\202\323\344\223\002g\032b/v1/dataproductversions/{dataproductversion.metadata.namespace}/{dataproductversion.metadata.name}:\001*'
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['DeleteDataProductVersion']._options = None
  _DATAPRODUCTVERSIONSERVICE.methods_by_name['DeleteDataProductVersion']._serialized_options = b'\202\323\344\223\002,**/v1/dataproductversions/{namespace}/{name}'
  _LISTDATAPRODUCTVERSIONSREQUEST._serialized_start=349
  _LISTDATAPRODUCTVERSIONSREQUEST._serialized_end=626
  _LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY._serialized_start=581
  _LISTDATAPRODUCTVERSIONSREQUEST_LABELSENTRY._serialized_end=626
  _LISTDATAPRODUCTVERSIONSRESPONSE._serialized_start=629
  _LISTDATAPRODUCTVERSIONSRESPONSE._serialized_end=794
  _CREATEDATAPRODUCTVERSIONREQUEST._serialized_start=797
  _CREATEDATAPRODUCTVERSIONREQUEST._serialized_end=932
  _CREATEDATAPRODUCTVERSIONRESPONSE._serialized_start=934
  _CREATEDATAPRODUCTVERSIONRESPONSE._serialized_end=968
  _UPDATEDATAPRODUCTVERSIONREQUEST._serialized_start=971
  _UPDATEDATAPRODUCTVERSIONREQUEST._serialized_end=1154
  _UPDATEDATAPRODUCTVERSIONRESPONSE._serialized_start=1156
  _UPDATEDATAPRODUCTVERSIONRESPONSE._serialized_end=1190
  _GETDATAPRODUCTVERSIONREQUEST._serialized_start=1192
  _GETDATAPRODUCTVERSIONREQUEST._serialized_end=1255
  _GETDATAPRODUCTVERSIONRESPONSE._serialized_start=1258
  _GETDATAPRODUCTVERSIONRESPONSE._serialized_end=1405
  _DELETEDATAPRODUCTVERSIONREQUEST._serialized_start=1407
  _DELETEDATAPRODUCTVERSIONREQUEST._serialized_end=1473
  _DELETEDATAPRODUCTVERSIONRESPONSE._serialized_start=1475
  _DELETEDATAPRODUCTVERSIONRESPONSE._serialized_end=1509
  _DATAPRODUCTVERSIONSERVICE._serialized_start=1512
  _DATAPRODUCTVERSIONSERVICE._serialized_end=2923
# @@protoc_insertion_point(module_scope)
