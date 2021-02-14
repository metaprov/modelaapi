# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/virtualbucket/v1/virtualbucket.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/virtualbucket/v1/virtualbucket.proto',
  package='github.com.metaprov.modeld.services.virtualbucket.v1',
  syntax='proto3',
  serialized_options=b'Z7github.com/metaprov/modeldapi/services/virtualbucket/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nKgithub.com/metaprov/modeldapi/services/virtualbucket/v1/virtualbucket.proto\x12\x34github.com.metaprov.modeld.services.virtualbucket.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto\"\xca\x01\n\x19ListVirtualBucketsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12k\n\x06labels\x18\x02 \x03(\x0b\x32[.github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"u\n\x1aListVirtualBucketsResponse\x12W\n\x05items\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList\"\xb2\x02\n\x1a\x43reateVirtualBucketRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12l\n\x06labels\x18\x03 \x03(\x0b\x32\\.github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest.LabelsEntry\x12V\n\x04spec\x18\x04 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x1d\n\x1b\x43reateVirtualBucketResponse\"\xb2\x02\n\x1aUpdateVirtualBucketRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12l\n\x06labels\x18\x03 \x03(\x0b\x32\\.github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest.LabelsEntry\x12V\n\x04spec\x18\x04 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x1d\n\x1bUpdateVirtualBucketResponse\":\n\x17GetVirtualBucketRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"|\n\x18GetVirtualBucketResponse\x12R\n\x04item\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"=\n\x1a\x44\x65leteVirtualBucketRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1d\n\x1b\x44\x65leteVirtualBucketResponse2\xa8\t\n\x14VirtualBucketService\x12\xd3\x01\n\x12ListVirtualBuckets\x12O.github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest\x1aP.github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\x12\x12/v1/virtualbuckets\x12\xe5\x01\n\x13\x43reateVirtualBucket\x12P.github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest\x1aQ.github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketResponse\")\x82\xd3\xe4\x93\x02#\"\x12/v1/virtualbuckets:\rvirtualbucket\x12\xd4\x01\n\x10GetVirtualBucket\x12M.github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketRequest\x1aN.github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketResponse\"!\x82\xd3\xe4\x93\x02\x1b\x12\x19/v1/virtualbuckets/{name}\x12\x83\x02\n\x13UpdateVirtualBucket\x12P.github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest\x1aQ.github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketResponse\"G\x82\xd3\xe4\x93\x02\x41\x1a\x30/v1/virtualbuckets/{virtualbucket.metadata.name}:\rvirtualbucket\x12\xf4\x01\n\x13\x44\x65leteVirtualBucket\x12P.github.com.metaprov.modeld.services.virtualbucket.v1.DeleteVirtualBucketRequest\x1aQ.github.com.metaprov.modeld.services.virtualbucket.v1.DeleteVirtualBucketResponse\"8\x82\xd3\xe4\x93\x02\x32*0/v1/virtualbuckets/{virtualbucket.metadata.name}B9Z7github.com/metaprov/modeldapi/services/virtualbucket/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTVIRTUALBUCKETSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest.LabelsEntry.value', index=1,
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
  serialized_start=392,
  serialized_end=437,
)

_LISTVIRTUALBUCKETSREQUEST = _descriptor.Descriptor(
  name='ListVirtualBucketsRequest',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTVIRTUALBUCKETSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=235,
  serialized_end=437,
)


_LISTVIRTUALBUCKETSRESPONSE = _descriptor.Descriptor(
  name='ListVirtualBucketsResponse',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsResponse.items', index=0,
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
  serialized_start=439,
  serialized_end=556,
)


_CREATEVIRTUALBUCKETREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest.LabelsEntry.value', index=1,
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
  serialized_start=392,
  serialized_end=437,
)

_CREATEVIRTUALBUCKETREQUEST = _descriptor.Descriptor(
  name='CreateVirtualBucketRequest',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest.spec', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_CREATEVIRTUALBUCKETREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=559,
  serialized_end=865,
)


_CREATEVIRTUALBUCKETRESPONSE = _descriptor.Descriptor(
  name='CreateVirtualBucketResponse',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketResponse',
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
  serialized_start=867,
  serialized_end=896,
)


_UPDATEVIRTUALBUCKETREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest.LabelsEntry.value', index=1,
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
  serialized_start=392,
  serialized_end=437,
)

_UPDATEVIRTUALBUCKETREQUEST = _descriptor.Descriptor(
  name='UpdateVirtualBucketRequest',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest.spec', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_UPDATEVIRTUALBUCKETREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=899,
  serialized_end=1205,
)


_UPDATEVIRTUALBUCKETRESPONSE = _descriptor.Descriptor(
  name='UpdateVirtualBucketResponse',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketResponse',
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
  serialized_start=1207,
  serialized_end=1236,
)


_GETVIRTUALBUCKETREQUEST = _descriptor.Descriptor(
  name='GetVirtualBucketRequest',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketRequest.name', index=1,
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
  serialized_start=1238,
  serialized_end=1296,
)


_GETVIRTUALBUCKETRESPONSE = _descriptor.Descriptor(
  name='GetVirtualBucketResponse',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketResponse.yaml', index=1,
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
  serialized_start=1298,
  serialized_end=1422,
)


_DELETEVIRTUALBUCKETREQUEST = _descriptor.Descriptor(
  name='DeleteVirtualBucketRequest',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.DeleteVirtualBucketRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.DeleteVirtualBucketRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.virtualbucket.v1.DeleteVirtualBucketRequest.name', index=1,
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
  serialized_start=1424,
  serialized_end=1485,
)


_DELETEVIRTUALBUCKETRESPONSE = _descriptor.Descriptor(
  name='DeleteVirtualBucketResponse',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.DeleteVirtualBucketResponse',
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
  serialized_start=1487,
  serialized_end=1516,
)

_LISTVIRTUALBUCKETSREQUEST_LABELSENTRY.containing_type = _LISTVIRTUALBUCKETSREQUEST
_LISTVIRTUALBUCKETSREQUEST.fields_by_name['labels'].message_type = _LISTVIRTUALBUCKETSREQUEST_LABELSENTRY
_LISTVIRTUALBUCKETSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALBUCKETLIST
_CREATEVIRTUALBUCKETREQUEST_LABELSENTRY.containing_type = _CREATEVIRTUALBUCKETREQUEST
_CREATEVIRTUALBUCKETREQUEST.fields_by_name['labels'].message_type = _CREATEVIRTUALBUCKETREQUEST_LABELSENTRY
_CREATEVIRTUALBUCKETREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALBUCKETSPEC
_UPDATEVIRTUALBUCKETREQUEST_LABELSENTRY.containing_type = _UPDATEVIRTUALBUCKETREQUEST
_UPDATEVIRTUALBUCKETREQUEST.fields_by_name['labels'].message_type = _UPDATEVIRTUALBUCKETREQUEST_LABELSENTRY
_UPDATEVIRTUALBUCKETREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALBUCKETSPEC
_GETVIRTUALBUCKETRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALBUCKET
DESCRIPTOR.message_types_by_name['ListVirtualBucketsRequest'] = _LISTVIRTUALBUCKETSREQUEST
DESCRIPTOR.message_types_by_name['ListVirtualBucketsResponse'] = _LISTVIRTUALBUCKETSRESPONSE
DESCRIPTOR.message_types_by_name['CreateVirtualBucketRequest'] = _CREATEVIRTUALBUCKETREQUEST
DESCRIPTOR.message_types_by_name['CreateVirtualBucketResponse'] = _CREATEVIRTUALBUCKETRESPONSE
DESCRIPTOR.message_types_by_name['UpdateVirtualBucketRequest'] = _UPDATEVIRTUALBUCKETREQUEST
DESCRIPTOR.message_types_by_name['UpdateVirtualBucketResponse'] = _UPDATEVIRTUALBUCKETRESPONSE
DESCRIPTOR.message_types_by_name['GetVirtualBucketRequest'] = _GETVIRTUALBUCKETREQUEST
DESCRIPTOR.message_types_by_name['GetVirtualBucketResponse'] = _GETVIRTUALBUCKETRESPONSE
DESCRIPTOR.message_types_by_name['DeleteVirtualBucketRequest'] = _DELETEVIRTUALBUCKETREQUEST
DESCRIPTOR.message_types_by_name['DeleteVirtualBucketResponse'] = _DELETEVIRTUALBUCKETRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListVirtualBucketsRequest = _reflection.GeneratedProtocolMessageType('ListVirtualBucketsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTVIRTUALBUCKETSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTVIRTUALBUCKETSREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsRequest)
  })
_sym_db.RegisterMessage(ListVirtualBucketsRequest)
_sym_db.RegisterMessage(ListVirtualBucketsRequest.LabelsEntry)

ListVirtualBucketsResponse = _reflection.GeneratedProtocolMessageType('ListVirtualBucketsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTVIRTUALBUCKETSRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.ListVirtualBucketsResponse)
  })
_sym_db.RegisterMessage(ListVirtualBucketsResponse)

CreateVirtualBucketRequest = _reflection.GeneratedProtocolMessageType('CreateVirtualBucketRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _CREATEVIRTUALBUCKETREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _CREATEVIRTUALBUCKETREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketRequest)
  })
_sym_db.RegisterMessage(CreateVirtualBucketRequest)
_sym_db.RegisterMessage(CreateVirtualBucketRequest.LabelsEntry)

CreateVirtualBucketResponse = _reflection.GeneratedProtocolMessageType('CreateVirtualBucketResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEVIRTUALBUCKETRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.CreateVirtualBucketResponse)
  })
_sym_db.RegisterMessage(CreateVirtualBucketResponse)

UpdateVirtualBucketRequest = _reflection.GeneratedProtocolMessageType('UpdateVirtualBucketRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _UPDATEVIRTUALBUCKETREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _UPDATEVIRTUALBUCKETREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketRequest)
  })
_sym_db.RegisterMessage(UpdateVirtualBucketRequest)
_sym_db.RegisterMessage(UpdateVirtualBucketRequest.LabelsEntry)

UpdateVirtualBucketResponse = _reflection.GeneratedProtocolMessageType('UpdateVirtualBucketResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEVIRTUALBUCKETRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.UpdateVirtualBucketResponse)
  })
_sym_db.RegisterMessage(UpdateVirtualBucketResponse)

GetVirtualBucketRequest = _reflection.GeneratedProtocolMessageType('GetVirtualBucketRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETVIRTUALBUCKETREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketRequest)
  })
_sym_db.RegisterMessage(GetVirtualBucketRequest)

GetVirtualBucketResponse = _reflection.GeneratedProtocolMessageType('GetVirtualBucketResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETVIRTUALBUCKETRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.GetVirtualBucketResponse)
  })
_sym_db.RegisterMessage(GetVirtualBucketResponse)

DeleteVirtualBucketRequest = _reflection.GeneratedProtocolMessageType('DeleteVirtualBucketRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEVIRTUALBUCKETREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.DeleteVirtualBucketRequest)
  })
_sym_db.RegisterMessage(DeleteVirtualBucketRequest)

DeleteVirtualBucketResponse = _reflection.GeneratedProtocolMessageType('DeleteVirtualBucketResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEVIRTUALBUCKETRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualbucket.v1.virtualbucket_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualbucket.v1.DeleteVirtualBucketResponse)
  })
_sym_db.RegisterMessage(DeleteVirtualBucketResponse)


DESCRIPTOR._options = None
_LISTVIRTUALBUCKETSREQUEST_LABELSENTRY._options = None
_CREATEVIRTUALBUCKETREQUEST_LABELSENTRY._options = None
_UPDATEVIRTUALBUCKETREQUEST_LABELSENTRY._options = None

_VIRTUALBUCKETSERVICE = _descriptor.ServiceDescriptor(
  name='VirtualBucketService',
  full_name='github.com.metaprov.modeld.services.virtualbucket.v1.VirtualBucketService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1519,
  serialized_end=2711,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListVirtualBuckets',
    full_name='github.com.metaprov.modeld.services.virtualbucket.v1.VirtualBucketService.ListVirtualBuckets',
    index=0,
    containing_service=None,
    input_type=_LISTVIRTUALBUCKETSREQUEST,
    output_type=_LISTVIRTUALBUCKETSRESPONSE,
    serialized_options=b'\202\323\344\223\002\024\022\022/v1/virtualbuckets',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateVirtualBucket',
    full_name='github.com.metaprov.modeld.services.virtualbucket.v1.VirtualBucketService.CreateVirtualBucket',
    index=1,
    containing_service=None,
    input_type=_CREATEVIRTUALBUCKETREQUEST,
    output_type=_CREATEVIRTUALBUCKETRESPONSE,
    serialized_options=b'\202\323\344\223\002#\"\022/v1/virtualbuckets:\rvirtualbucket',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetVirtualBucket',
    full_name='github.com.metaprov.modeld.services.virtualbucket.v1.VirtualBucketService.GetVirtualBucket',
    index=2,
    containing_service=None,
    input_type=_GETVIRTUALBUCKETREQUEST,
    output_type=_GETVIRTUALBUCKETRESPONSE,
    serialized_options=b'\202\323\344\223\002\033\022\031/v1/virtualbuckets/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateVirtualBucket',
    full_name='github.com.metaprov.modeld.services.virtualbucket.v1.VirtualBucketService.UpdateVirtualBucket',
    index=3,
    containing_service=None,
    input_type=_UPDATEVIRTUALBUCKETREQUEST,
    output_type=_UPDATEVIRTUALBUCKETRESPONSE,
    serialized_options=b'\202\323\344\223\002A\0320/v1/virtualbuckets/{virtualbucket.metadata.name}:\rvirtualbucket',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteVirtualBucket',
    full_name='github.com.metaprov.modeld.services.virtualbucket.v1.VirtualBucketService.DeleteVirtualBucket',
    index=4,
    containing_service=None,
    input_type=_DELETEVIRTUALBUCKETREQUEST,
    output_type=_DELETEVIRTUALBUCKETRESPONSE,
    serialized_options=b'\202\323\344\223\0022*0/v1/virtualbuckets/{virtualbucket.metadata.name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_VIRTUALBUCKETSERVICE)

DESCRIPTOR.services_by_name['VirtualBucketService'] = _VIRTUALBUCKETSERVICE

# @@protoc_insertion_point(module_scope)
