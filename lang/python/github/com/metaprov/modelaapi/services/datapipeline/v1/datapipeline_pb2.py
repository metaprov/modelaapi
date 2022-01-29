# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/datapipeline/v1/datapipeline.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/datapipeline/v1/datapipeline.proto',
  package='github.com.metaprov.modelaapi.services.datapipeline.v1',
  syntax='proto3',
  serialized_options=b'Z6github.com/metaprov/modelaapi/services/datapipeline/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nIgithub.com/metaprov/modelaapi/services/datapipeline/v1/datapipeline.proto\x12\x36github.com.metaprov.modelaapi.services.datapipeline.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\"\x83\x02\n\x18ListDataPipelinesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12l\n\x06labels\x18\x02 \x03(\x0b\x32\\.github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"r\n\x19ListDataPipelinesResponse\x12U\n\x05items\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipelineList\"m\n\x19\x43reateDataPipelineRequest\x12P\n\x04item\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline\"\x1c\n\x1a\x43reateDataPipelineResponse\"m\n\x19UpdateDataPipelineRequest\x12P\n\x04item\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline\"\x1c\n\x1aUpdateDataPipelineResponse\"9\n\x16GetDataPipelineRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"y\n\x17GetDataPipelineResponse\x12P\n\x04item\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"9\n\x16RunDataPipelineRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"}\n\x17RunDataPipelineResponse\x12T\n\x08pipeline\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"<\n\x19\x44\x65leteDataPipelineRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1c\n\x1a\x44\x65leteDataPipelineResponse2\x94\x0b\n\x13\x44\x61taPipelineService\x12\xdf\x01\n\x11ListDataPipelines\x12P.github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest\x1aQ.github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesResponse\"%\x82\xd3\xe4\x93\x02\x1f\x12\x1d/v1/datapipelines/{namespace}\x12\xd9\x01\n\x12\x43reateDataPipeline\x12Q.github.com.metaprov.modelaapi.services.datapipeline.v1.CreateDataPipelineRequest\x1aR.github.com.metaprov.modelaapi.services.datapipeline.v1.CreateDataPipelineResponse\"\x1c\x82\xd3\xe4\x93\x02\x16\"\x11/v1/datapipelines:\x01*\x12\xe0\x01\n\x0fGetDataPipeline\x12N.github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineRequest\x1aO.github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineResponse\",\x82\xd3\xe4\x93\x02&\x12$/v1/datapipelines/{namespace}/{name}\x12\x88\x02\n\x12UpdateDataPipeline\x12Q.github.com.metaprov.modelaapi.services.datapipeline.v1.UpdateDataPipelineRequest\x1aR.github.com.metaprov.modelaapi.services.datapipeline.v1.UpdateDataPipelineResponse\"K\x82\xd3\xe4\x93\x02\x45\x1a@/v1/datapipelines/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xe9\x01\n\x12\x44\x65leteDataPipeline\x12Q.github.com.metaprov.modelaapi.services.datapipeline.v1.DeleteDataPipelineRequest\x1aR.github.com.metaprov.modelaapi.services.datapipeline.v1.DeleteDataPipelineResponse\",\x82\xd3\xe4\x93\x02&*$/v1/datapipelines/{namespace}/{name}\x12\xe4\x01\n\x0fRunDataPipeline\x12N.github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineRequest\x1aO.github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineResponse\"0\x82\xd3\xe4\x93\x02*\"(/v1/datapipelines/{namespace}/{name}:runB8Z6github.com/metaprov/modelaapi/services/datapipeline/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTDATAPIPELINESREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.LabelsEntry.value', index=1,
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
  serialized_start=448,
  serialized_end=493,
)

_LISTDATAPIPELINESREQUEST = _descriptor.Descriptor(
  name='ListDataPipelinesRequest',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTDATAPIPELINESREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=234,
  serialized_end=493,
)


_LISTDATAPIPELINESRESPONSE = _descriptor.Descriptor(
  name='ListDataPipelinesResponse',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesResponse.items', index=0,
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
  serialized_start=495,
  serialized_end=609,
)


_CREATEDATAPIPELINEREQUEST = _descriptor.Descriptor(
  name='CreateDataPipelineRequest',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.CreateDataPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.CreateDataPipelineRequest.item', index=0,
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
  serialized_start=611,
  serialized_end=720,
)


_CREATEDATAPIPELINERESPONSE = _descriptor.Descriptor(
  name='CreateDataPipelineResponse',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.CreateDataPipelineResponse',
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
  serialized_start=722,
  serialized_end=750,
)


_UPDATEDATAPIPELINEREQUEST = _descriptor.Descriptor(
  name='UpdateDataPipelineRequest',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.UpdateDataPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.UpdateDataPipelineRequest.item', index=0,
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
  serialized_start=752,
  serialized_end=861,
)


_UPDATEDATAPIPELINERESPONSE = _descriptor.Descriptor(
  name='UpdateDataPipelineResponse',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.UpdateDataPipelineResponse',
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
  serialized_start=863,
  serialized_end=891,
)


_GETDATAPIPELINEREQUEST = _descriptor.Descriptor(
  name='GetDataPipelineRequest',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineRequest.name', index=1,
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
  serialized_start=893,
  serialized_end=950,
)


_GETDATAPIPELINERESPONSE = _descriptor.Descriptor(
  name='GetDataPipelineResponse',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineResponse.yaml', index=1,
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
  serialized_start=952,
  serialized_end=1073,
)


_RUNDATAPIPELINEREQUEST = _descriptor.Descriptor(
  name='RunDataPipelineRequest',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineRequest.name', index=1,
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
  serialized_start=1075,
  serialized_end=1132,
)


_RUNDATAPIPELINERESPONSE = _descriptor.Descriptor(
  name='RunDataPipelineResponse',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='pipeline', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineResponse.pipeline', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineResponse.yaml', index=1,
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
  serialized_start=1134,
  serialized_end=1259,
)


_DELETEDATAPIPELINEREQUEST = _descriptor.Descriptor(
  name='DeleteDataPipelineRequest',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DeleteDataPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DeleteDataPipelineRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DeleteDataPipelineRequest.name', index=1,
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
  serialized_start=1261,
  serialized_end=1321,
)


_DELETEDATAPIPELINERESPONSE = _descriptor.Descriptor(
  name='DeleteDataPipelineResponse',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DeleteDataPipelineResponse',
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
  serialized_start=1323,
  serialized_end=1351,
)

_LISTDATAPIPELINESREQUEST_LABELSENTRY.containing_type = _LISTDATAPIPELINESREQUEST
_LISTDATAPIPELINESREQUEST.fields_by_name['labels'].message_type = _LISTDATAPIPELINESREQUEST_LABELSENTRY
_LISTDATAPIPELINESRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPIPELINELIST
_CREATEDATAPIPELINEREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPIPELINE
_UPDATEDATAPIPELINEREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPIPELINE
_GETDATAPIPELINERESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPIPELINE
_RUNDATAPIPELINERESPONSE.fields_by_name['pipeline'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPIPELINE
DESCRIPTOR.message_types_by_name['ListDataPipelinesRequest'] = _LISTDATAPIPELINESREQUEST
DESCRIPTOR.message_types_by_name['ListDataPipelinesResponse'] = _LISTDATAPIPELINESRESPONSE
DESCRIPTOR.message_types_by_name['CreateDataPipelineRequest'] = _CREATEDATAPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['CreateDataPipelineResponse'] = _CREATEDATAPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['UpdateDataPipelineRequest'] = _UPDATEDATAPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['UpdateDataPipelineResponse'] = _UPDATEDATAPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['GetDataPipelineRequest'] = _GETDATAPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['GetDataPipelineResponse'] = _GETDATAPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['RunDataPipelineRequest'] = _RUNDATAPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['RunDataPipelineResponse'] = _RUNDATAPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['DeleteDataPipelineRequest'] = _DELETEDATAPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['DeleteDataPipelineResponse'] = _DELETEDATAPIPELINERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListDataPipelinesRequest = _reflection.GeneratedProtocolMessageType('ListDataPipelinesRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTDATAPIPELINESREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTDATAPIPELINESREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesRequest)
  })
_sym_db.RegisterMessage(ListDataPipelinesRequest)
_sym_db.RegisterMessage(ListDataPipelinesRequest.LabelsEntry)

ListDataPipelinesResponse = _reflection.GeneratedProtocolMessageType('ListDataPipelinesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTDATAPIPELINESRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.ListDataPipelinesResponse)
  })
_sym_db.RegisterMessage(ListDataPipelinesResponse)

CreateDataPipelineRequest = _reflection.GeneratedProtocolMessageType('CreateDataPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATAPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.CreateDataPipelineRequest)
  })
_sym_db.RegisterMessage(CreateDataPipelineRequest)

CreateDataPipelineResponse = _reflection.GeneratedProtocolMessageType('CreateDataPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEDATAPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.CreateDataPipelineResponse)
  })
_sym_db.RegisterMessage(CreateDataPipelineResponse)

UpdateDataPipelineRequest = _reflection.GeneratedProtocolMessageType('UpdateDataPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATAPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.UpdateDataPipelineRequest)
  })
_sym_db.RegisterMessage(UpdateDataPipelineRequest)

UpdateDataPipelineResponse = _reflection.GeneratedProtocolMessageType('UpdateDataPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEDATAPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.UpdateDataPipelineResponse)
  })
_sym_db.RegisterMessage(UpdateDataPipelineResponse)

GetDataPipelineRequest = _reflection.GeneratedProtocolMessageType('GetDataPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETDATAPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineRequest)
  })
_sym_db.RegisterMessage(GetDataPipelineRequest)

GetDataPipelineResponse = _reflection.GeneratedProtocolMessageType('GetDataPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETDATAPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.GetDataPipelineResponse)
  })
_sym_db.RegisterMessage(GetDataPipelineResponse)

RunDataPipelineRequest = _reflection.GeneratedProtocolMessageType('RunDataPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _RUNDATAPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineRequest)
  })
_sym_db.RegisterMessage(RunDataPipelineRequest)

RunDataPipelineResponse = _reflection.GeneratedProtocolMessageType('RunDataPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _RUNDATAPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.RunDataPipelineResponse)
  })
_sym_db.RegisterMessage(RunDataPipelineResponse)

DeleteDataPipelineRequest = _reflection.GeneratedProtocolMessageType('DeleteDataPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATAPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.DeleteDataPipelineRequest)
  })
_sym_db.RegisterMessage(DeleteDataPipelineRequest)

DeleteDataPipelineResponse = _reflection.GeneratedProtocolMessageType('DeleteDataPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEDATAPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.datapipeline.v1.datapipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.datapipeline.v1.DeleteDataPipelineResponse)
  })
_sym_db.RegisterMessage(DeleteDataPipelineResponse)


DESCRIPTOR._options = None
_LISTDATAPIPELINESREQUEST_LABELSENTRY._options = None

_DATAPIPELINESERVICE = _descriptor.ServiceDescriptor(
  name='DataPipelineService',
  full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DataPipelineService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1354,
  serialized_end=2782,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListDataPipelines',
    full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DataPipelineService.ListDataPipelines',
    index=0,
    containing_service=None,
    input_type=_LISTDATAPIPELINESREQUEST,
    output_type=_LISTDATAPIPELINESRESPONSE,
    serialized_options=b'\202\323\344\223\002\037\022\035/v1/datapipelines/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateDataPipeline',
    full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DataPipelineService.CreateDataPipeline',
    index=1,
    containing_service=None,
    input_type=_CREATEDATAPIPELINEREQUEST,
    output_type=_CREATEDATAPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\002\026\"\021/v1/datapipelines:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetDataPipeline',
    full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DataPipelineService.GetDataPipeline',
    index=2,
    containing_service=None,
    input_type=_GETDATAPIPELINEREQUEST,
    output_type=_GETDATAPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\002&\022$/v1/datapipelines/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateDataPipeline',
    full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DataPipelineService.UpdateDataPipeline',
    index=3,
    containing_service=None,
    input_type=_UPDATEDATAPIPELINEREQUEST,
    output_type=_UPDATEDATAPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\002E\032@/v1/datapipelines/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteDataPipeline',
    full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DataPipelineService.DeleteDataPipeline',
    index=4,
    containing_service=None,
    input_type=_DELETEDATAPIPELINEREQUEST,
    output_type=_DELETEDATAPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\002&*$/v1/datapipelines/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RunDataPipeline',
    full_name='github.com.metaprov.modelaapi.services.datapipeline.v1.DataPipelineService.RunDataPipeline',
    index=5,
    containing_service=None,
    input_type=_RUNDATAPIPELINEREQUEST,
    output_type=_RUNDATAPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\002*\"(/v1/datapipelines/{namespace}/{name}:run',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATAPIPELINESERVICE)

DESCRIPTOR.services_by_name['DataPipelineService'] = _DATAPIPELINESERVICE

# @@protoc_insertion_point(module_scope)
