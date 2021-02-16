# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/virtualvolume/v1/virtualvolume.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modeldapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/virtualvolume/v1/virtualvolume.proto',
  package='github.com.metaprov.modeldapi.services.virtualvolume.v1',
  syntax='proto3',
  serialized_options=b'Z7github.com/metaprov/modeldapi/services/virtualvolume/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nKgithub.com/metaprov/modeldapi/services/virtualvolume/v1/virtualvolume.proto\x12\x37github.com.metaprov.modeldapi.services.virtualvolume.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modeldapi/services/common/v1/common.proto\"\xec\x01\n\x19ListVirtualVolumesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x82\x01\n\x10virtualvolumeels\x18\x03 \x03(\x0b\x32h.github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest.VirtualvolumeelsEntry\x1a\x37\n\x15VirtualvolumeelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"u\n\x1aListVirtualVolumesResponse\x12W\n\x05items\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList\"\x17\n\x15VirtualVolumeResponse\"\xb5\x02\n\x1a\x43reateVirtualVolumeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12o\n\x06labels\x18\x03 \x03(\x0b\x32_.github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.LabelsEntry\x12V\n\x04spec\x18\x04 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x1d\n\x1b\x43reateVirtualVolumeResponse\"\xb5\x02\n\x1aUpdateVirtualVolumeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12o\n\x06labels\x18\x03 \x03(\x0b\x32_.github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.LabelsEntry\x12V\n\x04spec\x18\x04 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x1d\n\x1bUpdateVirtualVolumeResponse\":\n\x17GetVirtualVolumeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"|\n\x18GetVirtualVolumeResponse\x12R\n\x04item\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"=\n\x1a\x44\x65leteVirtualVolumeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1d\n\x1b\x44\x65leteVirtualVolumeResponse2\xd3\t\n\x14VirtualVolumeService\x12\xdd\x01\n\x12ListVirtualVolumes\x12R.github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest\x1aS.github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesResponse\"\x1e\x82\xd3\xe4\x93\x02\x18\x12\x16/api/v1/virtualvolumes\x12\xeb\x01\n\x13\x43reateVirtualVolume\x12S.github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest\x1aT.github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeResponse\")\x82\xd3\xe4\x93\x02#\"\x12/v1/virtualvolumes:\rvirtualvolume\x12\xf5\x01\n\x10GetVirtualVolume\x12P.github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeRequest\x1aQ.github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeResponse\"<\x82\xd3\xe4\x93\x02\x36\x12\x34/api/v1/virtualvolumes/{virtualvolume.metadata.name}\x12\x80\x02\n\x13UpdateVirtualVolume\x12S.github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest\x1aT.github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeResponse\">\x82\xd3\xe4\x93\x02\x38\x1a\'/v1/virtualvolumes/{virtualvolume_name}:\rvirtualvolume\x12\xf1\x01\n\x13\x44\x65leteVirtualVolume\x12S.github.com.metaprov.modeldapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest\x1aT.github.com.metaprov.modeldapi.services.virtualvolume.v1.DeleteVirtualVolumeResponse\"/\x82\xd3\xe4\x93\x02)*\'/v1/virtualvolumes/{virtualvolume_name}B9Z7github.com/metaprov/modeldapi/services/virtualvolume/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTVIRTUALVOLUMESREQUEST_VIRTUALVOLUMEELSENTRY = _descriptor.Descriptor(
  name='VirtualvolumeelsEntry',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest.VirtualvolumeelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest.VirtualvolumeelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest.VirtualvolumeelsEntry.value', index=1,
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
  serialized_start=482,
  serialized_end=537,
)

_LISTVIRTUALVOLUMESREQUEST = _descriptor.Descriptor(
  name='ListVirtualVolumesRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='virtualvolumeels', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest.virtualvolumeels', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTVIRTUALVOLUMESREQUEST_VIRTUALVOLUMEELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=301,
  serialized_end=537,
)


_LISTVIRTUALVOLUMESRESPONSE = _descriptor.Descriptor(
  name='ListVirtualVolumesResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesResponse.items', index=0,
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
  serialized_start=539,
  serialized_end=656,
)


_VIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='VirtualVolumeResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeResponse',
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
  serialized_start=658,
  serialized_end=681,
)


_CREATEVIRTUALVOLUMEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.LabelsEntry.value', index=1,
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
  serialized_start=948,
  serialized_end=993,
)

_CREATEVIRTUALVOLUMEREQUEST = _descriptor.Descriptor(
  name='CreateVirtualVolumeRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.spec', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_CREATEVIRTUALVOLUMEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=684,
  serialized_end=993,
)


_CREATEVIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='CreateVirtualVolumeResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeResponse',
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
  serialized_start=995,
  serialized_end=1024,
)


_UPDATEVIRTUALVOLUMEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.LabelsEntry.value', index=1,
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
  serialized_start=948,
  serialized_end=993,
)

_UPDATEVIRTUALVOLUMEREQUEST = _descriptor.Descriptor(
  name='UpdateVirtualVolumeRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.spec', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_UPDATEVIRTUALVOLUMEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1027,
  serialized_end=1336,
)


_UPDATEVIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='UpdateVirtualVolumeResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeResponse',
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
  serialized_start=1338,
  serialized_end=1367,
)


_GETVIRTUALVOLUMEREQUEST = _descriptor.Descriptor(
  name='GetVirtualVolumeRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeRequest.name', index=1,
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
  serialized_start=1369,
  serialized_end=1427,
)


_GETVIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='GetVirtualVolumeResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeResponse.yaml', index=1,
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
  serialized_start=1429,
  serialized_end=1553,
)


_DELETEVIRTUALVOLUMEREQUEST = _descriptor.Descriptor(
  name='DeleteVirtualVolumeRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest.name', index=1,
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
  serialized_start=1555,
  serialized_end=1616,
)


_DELETEVIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='DeleteVirtualVolumeResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.DeleteVirtualVolumeResponse',
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
  serialized_start=1618,
  serialized_end=1647,
)

_LISTVIRTUALVOLUMESREQUEST_VIRTUALVOLUMEELSENTRY.containing_type = _LISTVIRTUALVOLUMESREQUEST
_LISTVIRTUALVOLUMESREQUEST.fields_by_name['virtualvolumeels'].message_type = _LISTVIRTUALVOLUMESREQUEST_VIRTUALVOLUMEELSENTRY
_LISTVIRTUALVOLUMESRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUMELIST
_CREATEVIRTUALVOLUMEREQUEST_LABELSENTRY.containing_type = _CREATEVIRTUALVOLUMEREQUEST
_CREATEVIRTUALVOLUMEREQUEST.fields_by_name['labels'].message_type = _CREATEVIRTUALVOLUMEREQUEST_LABELSENTRY
_CREATEVIRTUALVOLUMEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUMESPEC
_UPDATEVIRTUALVOLUMEREQUEST_LABELSENTRY.containing_type = _UPDATEVIRTUALVOLUMEREQUEST
_UPDATEVIRTUALVOLUMEREQUEST.fields_by_name['labels'].message_type = _UPDATEVIRTUALVOLUMEREQUEST_LABELSENTRY
_UPDATEVIRTUALVOLUMEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUMESPEC
_GETVIRTUALVOLUMERESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUME
DESCRIPTOR.message_types_by_name['ListVirtualVolumesRequest'] = _LISTVIRTUALVOLUMESREQUEST
DESCRIPTOR.message_types_by_name['ListVirtualVolumesResponse'] = _LISTVIRTUALVOLUMESRESPONSE
DESCRIPTOR.message_types_by_name['VirtualVolumeResponse'] = _VIRTUALVOLUMERESPONSE
DESCRIPTOR.message_types_by_name['CreateVirtualVolumeRequest'] = _CREATEVIRTUALVOLUMEREQUEST
DESCRIPTOR.message_types_by_name['CreateVirtualVolumeResponse'] = _CREATEVIRTUALVOLUMERESPONSE
DESCRIPTOR.message_types_by_name['UpdateVirtualVolumeRequest'] = _UPDATEVIRTUALVOLUMEREQUEST
DESCRIPTOR.message_types_by_name['UpdateVirtualVolumeResponse'] = _UPDATEVIRTUALVOLUMERESPONSE
DESCRIPTOR.message_types_by_name['GetVirtualVolumeRequest'] = _GETVIRTUALVOLUMEREQUEST
DESCRIPTOR.message_types_by_name['GetVirtualVolumeResponse'] = _GETVIRTUALVOLUMERESPONSE
DESCRIPTOR.message_types_by_name['DeleteVirtualVolumeRequest'] = _DELETEVIRTUALVOLUMEREQUEST
DESCRIPTOR.message_types_by_name['DeleteVirtualVolumeResponse'] = _DELETEVIRTUALVOLUMERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListVirtualVolumesRequest = _reflection.GeneratedProtocolMessageType('ListVirtualVolumesRequest', (_message.Message,), {

  'VirtualvolumeelsEntry' : _reflection.GeneratedProtocolMessageType('VirtualvolumeelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTVIRTUALVOLUMESREQUEST_VIRTUALVOLUMEELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest.VirtualvolumeelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTVIRTUALVOLUMESREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesRequest)
  })
_sym_db.RegisterMessage(ListVirtualVolumesRequest)
_sym_db.RegisterMessage(ListVirtualVolumesRequest.VirtualvolumeelsEntry)

ListVirtualVolumesResponse = _reflection.GeneratedProtocolMessageType('ListVirtualVolumesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTVIRTUALVOLUMESRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.ListVirtualVolumesResponse)
  })
_sym_db.RegisterMessage(ListVirtualVolumesResponse)

VirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('VirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _VIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeResponse)
  })
_sym_db.RegisterMessage(VirtualVolumeResponse)

CreateVirtualVolumeRequest = _reflection.GeneratedProtocolMessageType('CreateVirtualVolumeRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _CREATEVIRTUALVOLUMEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _CREATEVIRTUALVOLUMEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeRequest)
  })
_sym_db.RegisterMessage(CreateVirtualVolumeRequest)
_sym_db.RegisterMessage(CreateVirtualVolumeRequest.LabelsEntry)

CreateVirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('CreateVirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEVIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.CreateVirtualVolumeResponse)
  })
_sym_db.RegisterMessage(CreateVirtualVolumeResponse)

UpdateVirtualVolumeRequest = _reflection.GeneratedProtocolMessageType('UpdateVirtualVolumeRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _UPDATEVIRTUALVOLUMEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _UPDATEVIRTUALVOLUMEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest)
  })
_sym_db.RegisterMessage(UpdateVirtualVolumeRequest)
_sym_db.RegisterMessage(UpdateVirtualVolumeRequest.LabelsEntry)

UpdateVirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('UpdateVirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEVIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.UpdateVirtualVolumeResponse)
  })
_sym_db.RegisterMessage(UpdateVirtualVolumeResponse)

GetVirtualVolumeRequest = _reflection.GeneratedProtocolMessageType('GetVirtualVolumeRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETVIRTUALVOLUMEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeRequest)
  })
_sym_db.RegisterMessage(GetVirtualVolumeRequest)

GetVirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('GetVirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETVIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.GetVirtualVolumeResponse)
  })
_sym_db.RegisterMessage(GetVirtualVolumeResponse)

DeleteVirtualVolumeRequest = _reflection.GeneratedProtocolMessageType('DeleteVirtualVolumeRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEVIRTUALVOLUMEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest)
  })
_sym_db.RegisterMessage(DeleteVirtualVolumeRequest)

DeleteVirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('DeleteVirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEVIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualvolume.v1.DeleteVirtualVolumeResponse)
  })
_sym_db.RegisterMessage(DeleteVirtualVolumeResponse)


DESCRIPTOR._options = None
_LISTVIRTUALVOLUMESREQUEST_VIRTUALVOLUMEELSENTRY._options = None
_CREATEVIRTUALVOLUMEREQUEST_LABELSENTRY._options = None
_UPDATEVIRTUALVOLUMEREQUEST_LABELSENTRY._options = None

_VIRTUALVOLUMESERVICE = _descriptor.ServiceDescriptor(
  name='VirtualVolumeService',
  full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1650,
  serialized_end=2885,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListVirtualVolumes',
    full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService.ListVirtualVolumes',
    index=0,
    containing_service=None,
    input_type=_LISTVIRTUALVOLUMESREQUEST,
    output_type=_LISTVIRTUALVOLUMESRESPONSE,
    serialized_options=b'\202\323\344\223\002\030\022\026/api/v1/virtualvolumes',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateVirtualVolume',
    full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService.CreateVirtualVolume',
    index=1,
    containing_service=None,
    input_type=_CREATEVIRTUALVOLUMEREQUEST,
    output_type=_CREATEVIRTUALVOLUMERESPONSE,
    serialized_options=b'\202\323\344\223\002#\"\022/v1/virtualvolumes:\rvirtualvolume',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetVirtualVolume',
    full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService.GetVirtualVolume',
    index=2,
    containing_service=None,
    input_type=_GETVIRTUALVOLUMEREQUEST,
    output_type=_GETVIRTUALVOLUMERESPONSE,
    serialized_options=b'\202\323\344\223\0026\0224/api/v1/virtualvolumes/{virtualvolume.metadata.name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateVirtualVolume',
    full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService.UpdateVirtualVolume',
    index=3,
    containing_service=None,
    input_type=_UPDATEVIRTUALVOLUMEREQUEST,
    output_type=_UPDATEVIRTUALVOLUMERESPONSE,
    serialized_options=b'\202\323\344\223\0028\032\'/v1/virtualvolumes/{virtualvolume_name}:\rvirtualvolume',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteVirtualVolume',
    full_name='github.com.metaprov.modeldapi.services.virtualvolume.v1.VirtualVolumeService.DeleteVirtualVolume',
    index=4,
    containing_service=None,
    input_type=_DELETEVIRTUALVOLUMEREQUEST,
    output_type=_DELETEVIRTUALVOLUMERESPONSE,
    serialized_options=b'\202\323\344\223\002)*\'/v1/virtualvolumes/{virtualvolume_name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_VIRTUALVOLUMESERVICE)

DESCRIPTOR.services_by_name['VirtualVolumeService'] = _VIRTUALVOLUMESERVICE

# @@protoc_insertion_point(module_scope)
