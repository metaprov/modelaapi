# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/notebookrun/v1/notebookrun.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/notebookrun/v1/notebookrun.proto',
  package='github.com.metaprov.modelaapi.services.notebookrun.v1',
  syntax='proto3',
  serialized_options=b'Z5github.com/metaprov/modelaapi/services/notebookrun/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nGgithub.com/metaprov/modelaapi/services/notebookrun/v1/notebookrun.proto\x12\x35github.com.metaprov.modelaapi.services.notebookrun.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\x80\x02\n\x17ListNotebookRunsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12j\n\x06labels\x18\x02 \x03(\x0b\x32Z.github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x94\x01\n\x18ListNotebookRunsResponse\x12_\n\x0cnotebookruns\x18\x01 \x01(\x0b\x32I.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.NotebookRunList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x15\n\x13NotebookRunResponse\"v\n\x18\x43reateNotebookRunRequest\x12Z\n\x0bnotebookrun\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.NotebookRun\"\x1b\n\x19\x43reateNotebookRunResponse\"\xa5\x01\n\x18UpdateNotebookRunRequest\x12Y\n\nnotbookrun\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.NotebookRun\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x1b\n\x19UpdateNotebookRunResponse\"8\n\x15GetNotebookRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x81\x01\n\x16GetNotebookRunResponse\x12Y\n\nnotbookrun\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.NotebookRun\x12\x0c\n\x04yaml\x18\x02 \x01(\t\";\n\x18\x44\x65leteNotebookRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1b\n\x19\x44\x65leteNotebookRunResponse2\x8e\t\n\x12NotebookRunService\x12\xd9\x01\n\x10ListNotebookRuns\x12N.github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest\x1aO.github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsResponse\"$\x82\xd3\xe4\x93\x02\x1e\x12\x1c/v1/notebookruns/{namespace}\x12\xd3\x01\n\x11\x43reateNotebookRun\x12O.github.com.metaprov.modelaapi.services.notebookrun.v1.CreateNotebookRunRequest\x1aP.github.com.metaprov.modelaapi.services.notebookrun.v1.CreateNotebookRunResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\"\x10/v1/notebookruns:\x01*\x12\xda\x01\n\x0eGetNotebookRun\x12L.github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunRequest\x1aM.github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunResponse\"+\x82\xd3\xe4\x93\x02%\x12#/v1/notebookruns/{namespace}/{name}\x12\x82\x02\n\x11UpdateNotebookRun\x12O.github.com.metaprov.modelaapi.services.notebookrun.v1.UpdateNotebookRunRequest\x1aP.github.com.metaprov.modelaapi.services.notebookrun.v1.UpdateNotebookRunResponse\"J\x82\xd3\xe4\x93\x02\x44\x1a?/v1/notebookruns/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xe3\x01\n\x11\x44\x65leteNotebookRun\x12O.github.com.metaprov.modelaapi.services.notebookrun.v1.DeleteNotebookRunRequest\x1aP.github.com.metaprov.modelaapi.services.notebookrun.v1.DeleteNotebookRunResponse\"+\x82\xd3\xe4\x93\x02%*#/v1/notebookruns/{namespace}/{name}B7Z5github.com/metaprov/modelaapi/services/notebookrun/v1b\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_field__mask__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTNOTEBOOKRUNSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.LabelsEntry.value', index=1,
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
  serialized_start=543,
  serialized_end=588,
)

_LISTNOTEBOOKRUNSREQUEST = _descriptor.Descriptor(
  name='ListNotebookRunsRequest',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTNOTEBOOKRUNSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=332,
  serialized_end=588,
)


_LISTNOTEBOOKRUNSRESPONSE = _descriptor.Descriptor(
  name='ListNotebookRunsResponse',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='notebookruns', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsResponse.notebookruns', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_token', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsResponse.next_page_token', index=1,
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
  serialized_start=591,
  serialized_end=739,
)


_NOTEBOOKRUNRESPONSE = _descriptor.Descriptor(
  name='NotebookRunResponse',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.NotebookRunResponse',
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
  serialized_start=741,
  serialized_end=762,
)


_CREATENOTEBOOKRUNREQUEST = _descriptor.Descriptor(
  name='CreateNotebookRunRequest',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.CreateNotebookRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='notebookrun', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.CreateNotebookRunRequest.notebookrun', index=0,
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
  serialized_start=764,
  serialized_end=882,
)


_CREATENOTEBOOKRUNRESPONSE = _descriptor.Descriptor(
  name='CreateNotebookRunResponse',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.CreateNotebookRunResponse',
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
  serialized_start=884,
  serialized_end=911,
)


_UPDATENOTEBOOKRUNREQUEST = _descriptor.Descriptor(
  name='UpdateNotebookRunRequest',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.UpdateNotebookRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='notbookrun', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.UpdateNotebookRunRequest.notbookrun', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='field_mask', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.UpdateNotebookRunRequest.field_mask', index=1,
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
  serialized_start=914,
  serialized_end=1079,
)


_UPDATENOTEBOOKRUNRESPONSE = _descriptor.Descriptor(
  name='UpdateNotebookRunResponse',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.UpdateNotebookRunResponse',
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
  serialized_start=1081,
  serialized_end=1108,
)


_GETNOTEBOOKRUNREQUEST = _descriptor.Descriptor(
  name='GetNotebookRunRequest',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunRequest.name', index=1,
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
  serialized_start=1110,
  serialized_end=1166,
)


_GETNOTEBOOKRUNRESPONSE = _descriptor.Descriptor(
  name='GetNotebookRunResponse',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='notbookrun', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunResponse.notbookrun', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunResponse.yaml', index=1,
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
  serialized_start=1169,
  serialized_end=1298,
)


_DELETENOTEBOOKRUNREQUEST = _descriptor.Descriptor(
  name='DeleteNotebookRunRequest',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.DeleteNotebookRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.DeleteNotebookRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.DeleteNotebookRunRequest.name', index=1,
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
  serialized_start=1300,
  serialized_end=1359,
)


_DELETENOTEBOOKRUNRESPONSE = _descriptor.Descriptor(
  name='DeleteNotebookRunResponse',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.DeleteNotebookRunResponse',
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
  serialized_start=1361,
  serialized_end=1388,
)

_LISTNOTEBOOKRUNSREQUEST_LABELSENTRY.containing_type = _LISTNOTEBOOKRUNSREQUEST
_LISTNOTEBOOKRUNSREQUEST.fields_by_name['labels'].message_type = _LISTNOTEBOOKRUNSREQUEST_LABELSENTRY
_LISTNOTEBOOKRUNSRESPONSE.fields_by_name['notebookruns'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._NOTEBOOKRUNLIST
_CREATENOTEBOOKRUNREQUEST.fields_by_name['notebookrun'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._NOTEBOOKRUN
_UPDATENOTEBOOKRUNREQUEST.fields_by_name['notbookrun'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._NOTEBOOKRUN
_UPDATENOTEBOOKRUNREQUEST.fields_by_name['field_mask'].message_type = google_dot_protobuf_dot_field__mask__pb2._FIELDMASK
_GETNOTEBOOKRUNRESPONSE.fields_by_name['notbookrun'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._NOTEBOOKRUN
DESCRIPTOR.message_types_by_name['ListNotebookRunsRequest'] = _LISTNOTEBOOKRUNSREQUEST
DESCRIPTOR.message_types_by_name['ListNotebookRunsResponse'] = _LISTNOTEBOOKRUNSRESPONSE
DESCRIPTOR.message_types_by_name['NotebookRunResponse'] = _NOTEBOOKRUNRESPONSE
DESCRIPTOR.message_types_by_name['CreateNotebookRunRequest'] = _CREATENOTEBOOKRUNREQUEST
DESCRIPTOR.message_types_by_name['CreateNotebookRunResponse'] = _CREATENOTEBOOKRUNRESPONSE
DESCRIPTOR.message_types_by_name['UpdateNotebookRunRequest'] = _UPDATENOTEBOOKRUNREQUEST
DESCRIPTOR.message_types_by_name['UpdateNotebookRunResponse'] = _UPDATENOTEBOOKRUNRESPONSE
DESCRIPTOR.message_types_by_name['GetNotebookRunRequest'] = _GETNOTEBOOKRUNREQUEST
DESCRIPTOR.message_types_by_name['GetNotebookRunResponse'] = _GETNOTEBOOKRUNRESPONSE
DESCRIPTOR.message_types_by_name['DeleteNotebookRunRequest'] = _DELETENOTEBOOKRUNREQUEST
DESCRIPTOR.message_types_by_name['DeleteNotebookRunResponse'] = _DELETENOTEBOOKRUNRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListNotebookRunsRequest = _reflection.GeneratedProtocolMessageType('ListNotebookRunsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTNOTEBOOKRUNSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTNOTEBOOKRUNSREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsRequest)
  })
_sym_db.RegisterMessage(ListNotebookRunsRequest)
_sym_db.RegisterMessage(ListNotebookRunsRequest.LabelsEntry)

ListNotebookRunsResponse = _reflection.GeneratedProtocolMessageType('ListNotebookRunsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTNOTEBOOKRUNSRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.ListNotebookRunsResponse)
  })
_sym_db.RegisterMessage(ListNotebookRunsResponse)

NotebookRunResponse = _reflection.GeneratedProtocolMessageType('NotebookRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _NOTEBOOKRUNRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.NotebookRunResponse)
  })
_sym_db.RegisterMessage(NotebookRunResponse)

CreateNotebookRunRequest = _reflection.GeneratedProtocolMessageType('CreateNotebookRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATENOTEBOOKRUNREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.CreateNotebookRunRequest)
  })
_sym_db.RegisterMessage(CreateNotebookRunRequest)

CreateNotebookRunResponse = _reflection.GeneratedProtocolMessageType('CreateNotebookRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATENOTEBOOKRUNRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.CreateNotebookRunResponse)
  })
_sym_db.RegisterMessage(CreateNotebookRunResponse)

UpdateNotebookRunRequest = _reflection.GeneratedProtocolMessageType('UpdateNotebookRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATENOTEBOOKRUNREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.UpdateNotebookRunRequest)
  })
_sym_db.RegisterMessage(UpdateNotebookRunRequest)

UpdateNotebookRunResponse = _reflection.GeneratedProtocolMessageType('UpdateNotebookRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATENOTEBOOKRUNRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.UpdateNotebookRunResponse)
  })
_sym_db.RegisterMessage(UpdateNotebookRunResponse)

GetNotebookRunRequest = _reflection.GeneratedProtocolMessageType('GetNotebookRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETNOTEBOOKRUNREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunRequest)
  })
_sym_db.RegisterMessage(GetNotebookRunRequest)

GetNotebookRunResponse = _reflection.GeneratedProtocolMessageType('GetNotebookRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETNOTEBOOKRUNRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.GetNotebookRunResponse)
  })
_sym_db.RegisterMessage(GetNotebookRunResponse)

DeleteNotebookRunRequest = _reflection.GeneratedProtocolMessageType('DeleteNotebookRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETENOTEBOOKRUNREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.DeleteNotebookRunRequest)
  })
_sym_db.RegisterMessage(DeleteNotebookRunRequest)

DeleteNotebookRunResponse = _reflection.GeneratedProtocolMessageType('DeleteNotebookRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETENOTEBOOKRUNRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.notebookrun.v1.notebookrun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.notebookrun.v1.DeleteNotebookRunResponse)
  })
_sym_db.RegisterMessage(DeleteNotebookRunResponse)


DESCRIPTOR._options = None
_LISTNOTEBOOKRUNSREQUEST_LABELSENTRY._options = None

_NOTEBOOKRUNSERVICE = _descriptor.ServiceDescriptor(
  name='NotebookRunService',
  full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.NotebookRunService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1391,
  serialized_end=2557,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListNotebookRuns',
    full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.NotebookRunService.ListNotebookRuns',
    index=0,
    containing_service=None,
    input_type=_LISTNOTEBOOKRUNSREQUEST,
    output_type=_LISTNOTEBOOKRUNSRESPONSE,
    serialized_options=b'\202\323\344\223\002\036\022\034/v1/notebookruns/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateNotebookRun',
    full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.NotebookRunService.CreateNotebookRun',
    index=1,
    containing_service=None,
    input_type=_CREATENOTEBOOKRUNREQUEST,
    output_type=_CREATENOTEBOOKRUNRESPONSE,
    serialized_options=b'\202\323\344\223\002\025\"\020/v1/notebookruns:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetNotebookRun',
    full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.NotebookRunService.GetNotebookRun',
    index=2,
    containing_service=None,
    input_type=_GETNOTEBOOKRUNREQUEST,
    output_type=_GETNOTEBOOKRUNRESPONSE,
    serialized_options=b'\202\323\344\223\002%\022#/v1/notebookruns/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateNotebookRun',
    full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.NotebookRunService.UpdateNotebookRun',
    index=3,
    containing_service=None,
    input_type=_UPDATENOTEBOOKRUNREQUEST,
    output_type=_UPDATENOTEBOOKRUNRESPONSE,
    serialized_options=b'\202\323\344\223\002D\032?/v1/notebookruns/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteNotebookRun',
    full_name='github.com.metaprov.modelaapi.services.notebookrun.v1.NotebookRunService.DeleteNotebookRun',
    index=4,
    containing_service=None,
    input_type=_DELETENOTEBOOKRUNREQUEST,
    output_type=_DELETENOTEBOOKRUNRESPONSE,
    serialized_options=b'\202\323\344\223\002%*#/v1/notebookruns/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_NOTEBOOKRUNSERVICE)

DESCRIPTOR.services_by_name['NotebookRunService'] = _NOTEBOOKRUNSERVICE

# @@protoc_insertion_point(module_scope)
