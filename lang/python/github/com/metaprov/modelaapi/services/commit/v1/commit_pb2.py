# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/commit/v1/commit.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2
from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/commit/v1/commit.proto',
  package='github.com.metaprov.modelaapi.services.commit.v1',
  syntax='proto3',
  serialized_options=b'Z0github.com/metaprov/modelaapi/services/commit/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n=github.com/metaprov/modelaapi/services/commit/v1/commit.proto\x12\x30github.com.metaprov.modelaapi.services.commit.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\x1a google/protobuf/field_mask.proto\"\xf1\x01\n\x12ListCommitsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12`\n\x06labels\x18\x02 \x03(\x0b\x32P.github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"g\n\x13ListCommitsResponse\x12P\n\x05items\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.CommitList\"\x10\n\x0e\x43ommitResponse\"t\n\x13\x43reateCommitRequest\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Commit\x12\x10\n\x08password\x18\x02 \x01(\t\"\x16\n\x14\x43reateCommitResponse\"\x92\x01\n\x13UpdateCommitRequest\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Commit\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x16\n\x14UpdateCommitResponse\"3\n\x10GetCommitRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"n\n\x11GetCommitResponse\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Commit\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"=\n\x1aGetCommitNamespacesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"r\n\x1bGetCommitNamespacesResponse\x12S\n\nnamespaces\x18\x01 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.NamespaceInfo\"6\n\x13\x44\x65leteCommitRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x16\n\x14\x44\x65leteCommitResponse\"\x16\n\x14\x43ommitCreateResponse2\xf3\x07\n\rCommitService\x12\xbb\x01\n\x0bListCommits\x12\x44.github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest\x1a\x45.github.com.metaprov.modelaapi.services.commit.v1.ListCommitsResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/v1/commits/{namespace}\x12\xb5\x01\n\x0c\x43reateCommit\x12\x45.github.com.metaprov.modelaapi.services.commit.v1.CreateCommitRequest\x1a\x46.github.com.metaprov.modelaapi.services.commit.v1.CreateCommitResponse\"\x16\x82\xd3\xe4\x93\x02\x10\"\x0b/v1/commits:\x01*\x12\xbc\x01\n\tGetCommit\x12\x42.github.com.metaprov.modelaapi.services.commit.v1.GetCommitRequest\x1a\x43.github.com.metaprov.modelaapi.services.commit.v1.GetCommitResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/v1/commits/{namespace}/{name}\x12\xe4\x01\n\x0cUpdateCommit\x12\x45.github.com.metaprov.modelaapi.services.commit.v1.UpdateCommitRequest\x1a\x46.github.com.metaprov.modelaapi.services.commit.v1.UpdateCommitResponse\"E\x82\xd3\xe4\x93\x02?\x1a:/v1/commits/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xc5\x01\n\x0c\x44\x65leteCommit\x12\x45.github.com.metaprov.modelaapi.services.commit.v1.DeleteCommitRequest\x1a\x46.github.com.metaprov.modelaapi.services.commit.v1.DeleteCommitResponse\"&\x82\xd3\xe4\x93\x02 *\x1e/v1/commits/{namespace}/{name}B2Z0github.com/metaprov/modelaapi/services/commit/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,google_dot_protobuf_dot_field__mask__pb2.DESCRIPTOR,])




_LISTCOMMITSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.LabelsEntry.value', index=1,
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
  serialized_start=510,
  serialized_end=555,
)

_LISTCOMMITSREQUEST = _descriptor.Descriptor(
  name='ListCommitsRequest',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTCOMMITSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=314,
  serialized_end=555,
)


_LISTCOMMITSRESPONSE = _descriptor.Descriptor(
  name='ListCommitsResponse',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modelaapi.services.commit.v1.ListCommitsResponse.items', index=0,
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
  serialized_start=557,
  serialized_end=660,
)


_COMMITRESPONSE = _descriptor.Descriptor(
  name='CommitResponse',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.CommitResponse',
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
  serialized_start=662,
  serialized_end=678,
)


_CREATECOMMITREQUEST = _descriptor.Descriptor(
  name='CreateCommitRequest',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.CreateCommitRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.commit.v1.CreateCommitRequest.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='password', full_name='github.com.metaprov.modelaapi.services.commit.v1.CreateCommitRequest.password', index=1,
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
  serialized_start=680,
  serialized_end=796,
)


_CREATECOMMITRESPONSE = _descriptor.Descriptor(
  name='CreateCommitResponse',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.CreateCommitResponse',
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
  serialized_start=798,
  serialized_end=820,
)


_UPDATECOMMITREQUEST = _descriptor.Descriptor(
  name='UpdateCommitRequest',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.UpdateCommitRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.commit.v1.UpdateCommitRequest.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='field_mask', full_name='github.com.metaprov.modelaapi.services.commit.v1.UpdateCommitRequest.field_mask', index=1,
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
  serialized_start=823,
  serialized_end=969,
)


_UPDATECOMMITRESPONSE = _descriptor.Descriptor(
  name='UpdateCommitResponse',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.UpdateCommitResponse',
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
  serialized_start=971,
  serialized_end=993,
)


_GETCOMMITREQUEST = _descriptor.Descriptor(
  name='GetCommitRequest',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitRequest.name', index=1,
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
  serialized_start=995,
  serialized_end=1046,
)


_GETCOMMITRESPONSE = _descriptor.Descriptor(
  name='GetCommitResponse',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitResponse.yaml', index=1,
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
  serialized_start=1048,
  serialized_end=1158,
)


_GETCOMMITNAMESPACESREQUEST = _descriptor.Descriptor(
  name='GetCommitNamespacesRequest',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitNamespacesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitNamespacesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitNamespacesRequest.name', index=1,
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
  serialized_start=1160,
  serialized_end=1221,
)


_GETCOMMITNAMESPACESRESPONSE = _descriptor.Descriptor(
  name='GetCommitNamespacesResponse',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitNamespacesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespaces', full_name='github.com.metaprov.modelaapi.services.commit.v1.GetCommitNamespacesResponse.namespaces', index=0,
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
  serialized_start=1223,
  serialized_end=1337,
)


_DELETECOMMITREQUEST = _descriptor.Descriptor(
  name='DeleteCommitRequest',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.DeleteCommitRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.commit.v1.DeleteCommitRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.commit.v1.DeleteCommitRequest.name', index=1,
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
  serialized_start=1339,
  serialized_end=1393,
)


_DELETECOMMITRESPONSE = _descriptor.Descriptor(
  name='DeleteCommitResponse',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.DeleteCommitResponse',
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
  serialized_start=1395,
  serialized_end=1417,
)


_COMMITCREATERESPONSE = _descriptor.Descriptor(
  name='CommitCreateResponse',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.CommitCreateResponse',
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
  serialized_start=1419,
  serialized_end=1441,
)

_LISTCOMMITSREQUEST_LABELSENTRY.containing_type = _LISTCOMMITSREQUEST
_LISTCOMMITSREQUEST.fields_by_name['labels'].message_type = _LISTCOMMITSREQUEST_LABELSENTRY
_LISTCOMMITSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._COMMITLIST
_CREATECOMMITREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._COMMIT
_UPDATECOMMITREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._COMMIT
_UPDATECOMMITREQUEST.fields_by_name['field_mask'].message_type = google_dot_protobuf_dot_field__mask__pb2._FIELDMASK
_GETCOMMITRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._COMMIT
_GETCOMMITNAMESPACESRESPONSE.fields_by_name['namespaces'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2._NAMESPACEINFO
DESCRIPTOR.message_types_by_name['ListCommitsRequest'] = _LISTCOMMITSREQUEST
DESCRIPTOR.message_types_by_name['ListCommitsResponse'] = _LISTCOMMITSRESPONSE
DESCRIPTOR.message_types_by_name['CommitResponse'] = _COMMITRESPONSE
DESCRIPTOR.message_types_by_name['CreateCommitRequest'] = _CREATECOMMITREQUEST
DESCRIPTOR.message_types_by_name['CreateCommitResponse'] = _CREATECOMMITRESPONSE
DESCRIPTOR.message_types_by_name['UpdateCommitRequest'] = _UPDATECOMMITREQUEST
DESCRIPTOR.message_types_by_name['UpdateCommitResponse'] = _UPDATECOMMITRESPONSE
DESCRIPTOR.message_types_by_name['GetCommitRequest'] = _GETCOMMITREQUEST
DESCRIPTOR.message_types_by_name['GetCommitResponse'] = _GETCOMMITRESPONSE
DESCRIPTOR.message_types_by_name['GetCommitNamespacesRequest'] = _GETCOMMITNAMESPACESREQUEST
DESCRIPTOR.message_types_by_name['GetCommitNamespacesResponse'] = _GETCOMMITNAMESPACESRESPONSE
DESCRIPTOR.message_types_by_name['DeleteCommitRequest'] = _DELETECOMMITREQUEST
DESCRIPTOR.message_types_by_name['DeleteCommitResponse'] = _DELETECOMMITRESPONSE
DESCRIPTOR.message_types_by_name['CommitCreateResponse'] = _COMMITCREATERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListCommitsRequest = _reflection.GeneratedProtocolMessageType('ListCommitsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTCOMMITSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTCOMMITSREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.ListCommitsRequest)
  })
_sym_db.RegisterMessage(ListCommitsRequest)
_sym_db.RegisterMessage(ListCommitsRequest.LabelsEntry)

ListCommitsResponse = _reflection.GeneratedProtocolMessageType('ListCommitsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTCOMMITSRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.ListCommitsResponse)
  })
_sym_db.RegisterMessage(ListCommitsResponse)

CommitResponse = _reflection.GeneratedProtocolMessageType('CommitResponse', (_message.Message,), {
  'DESCRIPTOR' : _COMMITRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.CommitResponse)
  })
_sym_db.RegisterMessage(CommitResponse)

CreateCommitRequest = _reflection.GeneratedProtocolMessageType('CreateCommitRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATECOMMITREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.CreateCommitRequest)
  })
_sym_db.RegisterMessage(CreateCommitRequest)

CreateCommitResponse = _reflection.GeneratedProtocolMessageType('CreateCommitResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATECOMMITRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.CreateCommitResponse)
  })
_sym_db.RegisterMessage(CreateCommitResponse)

UpdateCommitRequest = _reflection.GeneratedProtocolMessageType('UpdateCommitRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATECOMMITREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.UpdateCommitRequest)
  })
_sym_db.RegisterMessage(UpdateCommitRequest)

UpdateCommitResponse = _reflection.GeneratedProtocolMessageType('UpdateCommitResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATECOMMITRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.UpdateCommitResponse)
  })
_sym_db.RegisterMessage(UpdateCommitResponse)

GetCommitRequest = _reflection.GeneratedProtocolMessageType('GetCommitRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETCOMMITREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.GetCommitRequest)
  })
_sym_db.RegisterMessage(GetCommitRequest)

GetCommitResponse = _reflection.GeneratedProtocolMessageType('GetCommitResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETCOMMITRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.GetCommitResponse)
  })
_sym_db.RegisterMessage(GetCommitResponse)

GetCommitNamespacesRequest = _reflection.GeneratedProtocolMessageType('GetCommitNamespacesRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETCOMMITNAMESPACESREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.GetCommitNamespacesRequest)
  })
_sym_db.RegisterMessage(GetCommitNamespacesRequest)

GetCommitNamespacesResponse = _reflection.GeneratedProtocolMessageType('GetCommitNamespacesResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETCOMMITNAMESPACESRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.GetCommitNamespacesResponse)
  })
_sym_db.RegisterMessage(GetCommitNamespacesResponse)

DeleteCommitRequest = _reflection.GeneratedProtocolMessageType('DeleteCommitRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETECOMMITREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.DeleteCommitRequest)
  })
_sym_db.RegisterMessage(DeleteCommitRequest)

DeleteCommitResponse = _reflection.GeneratedProtocolMessageType('DeleteCommitResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETECOMMITRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.DeleteCommitResponse)
  })
_sym_db.RegisterMessage(DeleteCommitResponse)

CommitCreateResponse = _reflection.GeneratedProtocolMessageType('CommitCreateResponse', (_message.Message,), {
  'DESCRIPTOR' : _COMMITCREATERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.commit.v1.commit_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.commit.v1.CommitCreateResponse)
  })
_sym_db.RegisterMessage(CommitCreateResponse)


DESCRIPTOR._options = None
_LISTCOMMITSREQUEST_LABELSENTRY._options = None

_COMMITSERVICE = _descriptor.ServiceDescriptor(
  name='CommitService',
  full_name='github.com.metaprov.modelaapi.services.commit.v1.CommitService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1444,
  serialized_end=2455,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListCommits',
    full_name='github.com.metaprov.modelaapi.services.commit.v1.CommitService.ListCommits',
    index=0,
    containing_service=None,
    input_type=_LISTCOMMITSREQUEST,
    output_type=_LISTCOMMITSRESPONSE,
    serialized_options=b'\202\323\344\223\002\031\022\027/v1/commits/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateCommit',
    full_name='github.com.metaprov.modelaapi.services.commit.v1.CommitService.CreateCommit',
    index=1,
    containing_service=None,
    input_type=_CREATECOMMITREQUEST,
    output_type=_CREATECOMMITRESPONSE,
    serialized_options=b'\202\323\344\223\002\020\"\013/v1/commits:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetCommit',
    full_name='github.com.metaprov.modelaapi.services.commit.v1.CommitService.GetCommit',
    index=2,
    containing_service=None,
    input_type=_GETCOMMITREQUEST,
    output_type=_GETCOMMITRESPONSE,
    serialized_options=b'\202\323\344\223\002 \022\036/v1/commits/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateCommit',
    full_name='github.com.metaprov.modelaapi.services.commit.v1.CommitService.UpdateCommit',
    index=3,
    containing_service=None,
    input_type=_UPDATECOMMITREQUEST,
    output_type=_UPDATECOMMITRESPONSE,
    serialized_options=b'\202\323\344\223\002?\032:/v1/commits/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteCommit',
    full_name='github.com.metaprov.modelaapi.services.commit.v1.CommitService.DeleteCommit',
    index=4,
    containing_service=None,
    input_type=_DELETECOMMITREQUEST,
    output_type=_DELETECOMMITRESPONSE,
    serialized_options=b'\202\323\344\223\002 *\036/v1/commits/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_COMMITSERVICE)

DESCRIPTOR.services_by_name['CommitService'] = _COMMITSERVICE

# @@protoc_insertion_point(module_scope)
