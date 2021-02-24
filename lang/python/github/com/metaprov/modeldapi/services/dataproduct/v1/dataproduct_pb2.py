# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/dataproduct/v1/dataproduct.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/dataproduct/v1/dataproduct.proto',
  package='github.com.metaprov.modeldapi.services.dataproduct.v1',
  syntax='proto3',
  serialized_options=b'Z5github.com/metaprov/modeldapi/services/dataproduct/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nGgithub.com/metaprov/modeldapi/services/dataproduct/v1/dataproduct.proto\x12\x35github.com.metaprov.modeldapi.services.dataproduct.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\"\xc7\x01\n\x17ListDataProductsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12j\n\x06labels\x18\x03 \x03(\x0b\x32Z.github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"p\n\x18ListDataProductsResponse\x12T\n\x05items\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductList\"k\n\x18\x43reateDataProductRequest\x12O\n\x04item\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct\"\x1b\n\x19\x43reateDataProductResponse\"k\n\x18UpdateDataProductRequest\x12O\n\x04item\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct\"\x1b\n\x19UpdateDataProductResponse\"8\n\x15GetDataProductRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"w\n\x16GetDataProductResponse\x12O\n\x04item\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct\x12\x0c\n\x04yaml\x18\x02 \x01(\t\";\n\x18\x44\x65leteDataProductRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1b\n\x19\x44\x65leteDataProductResponse2\xa8\t\n\x12\x44\x61taProductService\x12\xcd\x01\n\x10ListDataProducts\x12N.github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest\x1aO.github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsResponse\"\x18\x82\xd3\xe4\x93\x02\x12\x12\x10/v1/dataproducts\x12\xdd\x01\n\x11\x43reateDataProduct\x12O.github.com.metaprov.modeldapi.services.dataproduct.v1.CreateDataProductRequest\x1aP.github.com.metaprov.modeldapi.services.dataproduct.v1.CreateDataProductResponse\"%\x82\xd3\xe4\x93\x02\x1f\"\x10/v1/dataproducts:\x0b\x64\x61taproduct\x12\xda\x01\n\x0eGetDataProduct\x12L.github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductRequest\x1aM.github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductResponse\"+\x82\xd3\xe4\x93\x02%\x12#/v1/{namespace}/dataproducts/{name}\x12\x9a\x02\n\x11UpdateDataProduct\x12O.github.com.metaprov.modeldapi.services.dataproduct.v1.UpdateDataProductRequest\x1aP.github.com.metaprov.modeldapi.services.dataproduct.v1.UpdateDataProductResponse\"b\x82\xd3\xe4\x93\x02\\\x1aM/v1/{dataproduct.metadata.namespace}/dataproducts/{dataproduct.metadata.name}:\x0b\x64\x61taproduct\x12\xe7\x01\n\x11\x44\x65leteDataProduct\x12O.github.com.metaprov.modeldapi.services.dataproduct.v1.DeleteDataProductRequest\x1aP.github.com.metaprov.modeldapi.services.dataproduct.v1.DeleteDataProductResponse\"/\x82\xd3\xe4\x93\x02)*\'/api/v1/{namespace}/dataproducts/{name}B7Z5github.com/metaprov/modeldapi/services/dataproduct/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTDATAPRODUCTSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest.LabelsEntry.value', index=1,
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
  serialized_start=385,
  serialized_end=430,
)

_LISTDATAPRODUCTSREQUEST = _descriptor.Descriptor(
  name='ListDataProductsRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest.labels', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTDATAPRODUCTSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=231,
  serialized_end=430,
)


_LISTDATAPRODUCTSRESPONSE = _descriptor.Descriptor(
  name='ListDataProductsResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsResponse.items', index=0,
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
  serialized_start=432,
  serialized_end=544,
)


_CREATEDATAPRODUCTREQUEST = _descriptor.Descriptor(
  name='CreateDataProductRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.CreateDataProductRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.CreateDataProductRequest.item', index=0,
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
  serialized_start=546,
  serialized_end=653,
)


_CREATEDATAPRODUCTRESPONSE = _descriptor.Descriptor(
  name='CreateDataProductResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.CreateDataProductResponse',
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
  serialized_start=655,
  serialized_end=682,
)


_UPDATEDATAPRODUCTREQUEST = _descriptor.Descriptor(
  name='UpdateDataProductRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.UpdateDataProductRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.UpdateDataProductRequest.item', index=0,
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
  serialized_start=684,
  serialized_end=791,
)


_UPDATEDATAPRODUCTRESPONSE = _descriptor.Descriptor(
  name='UpdateDataProductResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.UpdateDataProductResponse',
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
  serialized_start=793,
  serialized_end=820,
)


_GETDATAPRODUCTREQUEST = _descriptor.Descriptor(
  name='GetDataProductRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductRequest.name', index=1,
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
  serialized_start=822,
  serialized_end=878,
)


_GETDATAPRODUCTRESPONSE = _descriptor.Descriptor(
  name='GetDataProductResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductResponse.yaml', index=1,
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
  serialized_start=880,
  serialized_end=999,
)


_DELETEDATAPRODUCTREQUEST = _descriptor.Descriptor(
  name='DeleteDataProductRequest',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DeleteDataProductRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DeleteDataProductRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DeleteDataProductRequest.name', index=1,
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
  serialized_start=1001,
  serialized_end=1060,
)


_DELETEDATAPRODUCTRESPONSE = _descriptor.Descriptor(
  name='DeleteDataProductResponse',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DeleteDataProductResponse',
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
  serialized_end=1089,
)

_LISTDATAPRODUCTSREQUEST_LABELSENTRY.containing_type = _LISTDATAPRODUCTSREQUEST
_LISTDATAPRODUCTSREQUEST.fields_by_name['labels'].message_type = _LISTDATAPRODUCTSREQUEST_LABELSENTRY
_LISTDATAPRODUCTSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTLIST
_CREATEDATAPRODUCTREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCT
_UPDATEDATAPRODUCTREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCT
_GETDATAPRODUCTRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCT
DESCRIPTOR.message_types_by_name['ListDataProductsRequest'] = _LISTDATAPRODUCTSREQUEST
DESCRIPTOR.message_types_by_name['ListDataProductsResponse'] = _LISTDATAPRODUCTSRESPONSE
DESCRIPTOR.message_types_by_name['CreateDataProductRequest'] = _CREATEDATAPRODUCTREQUEST
DESCRIPTOR.message_types_by_name['CreateDataProductResponse'] = _CREATEDATAPRODUCTRESPONSE
DESCRIPTOR.message_types_by_name['UpdateDataProductRequest'] = _UPDATEDATAPRODUCTREQUEST
DESCRIPTOR.message_types_by_name['UpdateDataProductResponse'] = _UPDATEDATAPRODUCTRESPONSE
DESCRIPTOR.message_types_by_name['GetDataProductRequest'] = _GETDATAPRODUCTREQUEST
DESCRIPTOR.message_types_by_name['GetDataProductResponse'] = _GETDATAPRODUCTRESPONSE
DESCRIPTOR.message_types_by_name['DeleteDataProductRequest'] = _DELETEDATAPRODUCTREQUEST
DESCRIPTOR.message_types_by_name['DeleteDataProductResponse'] = _DELETEDATAPRODUCTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListDataProductsRequest = _reflection.GeneratedProtocolMessageType('ListDataProductsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTDATAPRODUCTSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTDATAPRODUCTSREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsRequest)
  })
_sym_db.RegisterMessage(ListDataProductsRequest)
_sym_db.RegisterMessage(ListDataProductsRequest.LabelsEntry)

ListDataProductsResponse = _reflection.GeneratedProtocolMessageType('ListDataProductsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTDATAPRODUCTSRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.ListDataProductsResponse)
  })
_sym_db.RegisterMessage(ListDataProductsResponse)

CreateDataProductRequest = _reflection.GeneratedProtocolMessageType('CreateDataProductRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATAPRODUCTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.CreateDataProductRequest)
  })
_sym_db.RegisterMessage(CreateDataProductRequest)

CreateDataProductResponse = _reflection.GeneratedProtocolMessageType('CreateDataProductResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATAPRODUCTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.CreateDataProductResponse)
  })
_sym_db.RegisterMessage(CreateDataProductResponse)

UpdateDataProductRequest = _reflection.GeneratedProtocolMessageType('UpdateDataProductRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATAPRODUCTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.UpdateDataProductRequest)
  })
_sym_db.RegisterMessage(UpdateDataProductRequest)

UpdateDataProductResponse = _reflection.GeneratedProtocolMessageType('UpdateDataProductResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATAPRODUCTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.UpdateDataProductResponse)
  })
_sym_db.RegisterMessage(UpdateDataProductResponse)

GetDataProductRequest = _reflection.GeneratedProtocolMessageType('GetDataProductRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETDATAPRODUCTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductRequest)
  })
_sym_db.RegisterMessage(GetDataProductRequest)

GetDataProductResponse = _reflection.GeneratedProtocolMessageType('GetDataProductResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETDATAPRODUCTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.GetDataProductResponse)
  })
_sym_db.RegisterMessage(GetDataProductResponse)

DeleteDataProductRequest = _reflection.GeneratedProtocolMessageType('DeleteDataProductRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATAPRODUCTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.DeleteDataProductRequest)
  })
_sym_db.RegisterMessage(DeleteDataProductRequest)

DeleteDataProductResponse = _reflection.GeneratedProtocolMessageType('DeleteDataProductResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATAPRODUCTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.dataproduct.v1.dataproduct_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.dataproduct.v1.DeleteDataProductResponse)
  })
_sym_db.RegisterMessage(DeleteDataProductResponse)


DESCRIPTOR._options = None
_LISTDATAPRODUCTSREQUEST_LABELSENTRY._options = None

_DATAPRODUCTSERVICE = _descriptor.ServiceDescriptor(
  name='DataProductService',
  full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1092,
  serialized_end=2284,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListDataProducts',
    full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService.ListDataProducts',
    index=0,
    containing_service=None,
    input_type=_LISTDATAPRODUCTSREQUEST,
    output_type=_LISTDATAPRODUCTSRESPONSE,
    serialized_options=b'\202\323\344\223\002\022\022\020/v1/dataproducts',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateDataProduct',
    full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService.CreateDataProduct',
    index=1,
    containing_service=None,
    input_type=_CREATEDATAPRODUCTREQUEST,
    output_type=_CREATEDATAPRODUCTRESPONSE,
    serialized_options=b'\202\323\344\223\002\037\"\020/v1/dataproducts:\013dataproduct',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetDataProduct',
    full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService.GetDataProduct',
    index=2,
    containing_service=None,
    input_type=_GETDATAPRODUCTREQUEST,
    output_type=_GETDATAPRODUCTRESPONSE,
    serialized_options=b'\202\323\344\223\002%\022#/v1/{namespace}/dataproducts/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateDataProduct',
    full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService.UpdateDataProduct',
    index=3,
    containing_service=None,
    input_type=_UPDATEDATAPRODUCTREQUEST,
    output_type=_UPDATEDATAPRODUCTRESPONSE,
    serialized_options=b'\202\323\344\223\002\\\032M/v1/{dataproduct.metadata.namespace}/dataproducts/{dataproduct.metadata.name}:\013dataproduct',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteDataProduct',
    full_name='github.com.metaprov.modeldapi.services.dataproduct.v1.DataProductService.DeleteDataProduct',
    index=4,
    containing_service=None,
    input_type=_DELETEDATAPRODUCTREQUEST,
    output_type=_DELETEDATAPRODUCTRESPONSE,
    serialized_options=b'\202\323\344\223\002)*\'/api/v1/{namespace}/dataproducts/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATAPRODUCTSERVICE)

DESCRIPTOR.services_by_name['DataProductService'] = _DATAPRODUCTSERVICE

# @@protoc_insertion_point(module_scope)
