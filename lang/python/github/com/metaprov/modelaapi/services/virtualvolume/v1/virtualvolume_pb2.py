# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/virtualvolume/v1/virtualvolume.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/virtualvolume/v1/virtualvolume.proto',
  package='github.com.metaprov.modelaapi.services.virtualvolume.v1',
  syntax='proto3',
  serialized_options=b'Z7github.com/metaprov/modelaapi/services/virtualvolume/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nKgithub.com/metaprov/modelaapi/services/virtualvolume/v1/virtualvolume.proto\x12\x37github.com.metaprov.modelaapi.services.virtualvolume.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xcd\x01\n\x19ListVirtualVolumesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12n\n\x06labels\x18\x03 \x03(\x0b\x32^.github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x97\x01\n\x1aListVirtualVolumesResponse\x12`\n\x0evirtualvolumes\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualVolumeList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x17\n\x15VirtualVolumeResponse\"y\n\x1a\x43reateVirtualVolumeRequest\x12[\n\rvirtualvolume\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualVolume\"\x1d\n\x1b\x43reateVirtualVolumeResponse\"\xa9\x01\n\x1aUpdateVirtualVolumeRequest\x12[\n\rvirtualvolume\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualVolume\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x1d\n\x1bUpdateVirtualVolumeResponse\":\n\x17GetVirtualVolumeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x85\x01\n\x18GetVirtualVolumeResponse\x12[\n\rvirtualvolume\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualVolume\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"=\n\x1a\x44\x65leteVirtualVolumeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1d\n\x1b\x44\x65leteVirtualVolumeResponse2\xde\t\n\x14VirtualVolumeService\x12\xe5\x01\n\x12ListVirtualVolumes\x12R.github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest\x1aS.github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/v1/virtualvolumes/{namespace}\x12\xdf\x01\n\x13\x43reateVirtualVolume\x12S.github.com.metaprov.modelaapi.services.virtualvolume.v1.CreateVirtualVolumeRequest\x1aT.github.com.metaprov.modelaapi.services.virtualvolume.v1.CreateVirtualVolumeResponse\"\x1d\x82\xd3\xe4\x93\x02\x17\"\x12/v1/virtualvolumes:\x01*\x12\xe6\x01\n\x10GetVirtualVolume\x12P.github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeRequest\x1aQ.github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeResponse\"-\x82\xd3\xe4\x93\x02\'\x12%/v1/virtualvolumes/{namespace}/{name}\x12\xa0\x02\n\x13UpdateVirtualVolume\x12S.github.com.metaprov.modelaapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest\x1aT.github.com.metaprov.modelaapi.services.virtualvolume.v1.UpdateVirtualVolumeResponse\"^\x82\xd3\xe4\x93\x02X\x1aS/v1/virtualvolumes/{virtualvolume.metadata.namespace}/{virtualvolume.metadata.name}:\x01*\x12\xef\x01\n\x13\x44\x65leteVirtualVolume\x12S.github.com.metaprov.modelaapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest\x1aT.github.com.metaprov.modelaapi.services.virtualvolume.v1.DeleteVirtualVolumeResponse\"-\x82\xd3\xe4\x93\x02\'*%/v1/virtualvolumes/{namespace}/{name}B9Z7github.com/metaprov/modelaapi/services/virtualvolume/v1b\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_field__mask__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTVIRTUALVOLUMESREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest.LabelsEntry.value', index=1,
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
  serialized_start=495,
  serialized_end=540,
)

_LISTVIRTUALVOLUMESREQUEST = _descriptor.Descriptor(
  name='ListVirtualVolumesRequest',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest.labels', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTVIRTUALVOLUMESREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=335,
  serialized_end=540,
)


_LISTVIRTUALVOLUMESRESPONSE = _descriptor.Descriptor(
  name='ListVirtualVolumesResponse',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='virtualvolumes', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesResponse.virtualvolumes', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_token', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesResponse.next_page_token', index=1,
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
  serialized_start=543,
  serialized_end=694,
)


_VIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='VirtualVolumeResponse',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeResponse',
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
  serialized_start=696,
  serialized_end=719,
)


_CREATEVIRTUALVOLUMEREQUEST = _descriptor.Descriptor(
  name='CreateVirtualVolumeRequest',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.CreateVirtualVolumeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='virtualvolume', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.CreateVirtualVolumeRequest.virtualvolume', index=0,
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
  serialized_start=721,
  serialized_end=842,
)


_CREATEVIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='CreateVirtualVolumeResponse',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.CreateVirtualVolumeResponse',
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
  serialized_start=844,
  serialized_end=873,
)


_UPDATEVIRTUALVOLUMEREQUEST = _descriptor.Descriptor(
  name='UpdateVirtualVolumeRequest',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='virtualvolume', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.virtualvolume', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='field_mask', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest.field_mask', index=1,
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
  serialized_start=876,
  serialized_end=1045,
)


_UPDATEVIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='UpdateVirtualVolumeResponse',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.UpdateVirtualVolumeResponse',
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
  serialized_start=1047,
  serialized_end=1076,
)


_GETVIRTUALVOLUMEREQUEST = _descriptor.Descriptor(
  name='GetVirtualVolumeRequest',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeRequest.name', index=1,
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
  serialized_start=1078,
  serialized_end=1136,
)


_GETVIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='GetVirtualVolumeResponse',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='virtualvolume', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeResponse.virtualvolume', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeResponse.yaml', index=1,
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
  serialized_start=1139,
  serialized_end=1272,
)


_DELETEVIRTUALVOLUMEREQUEST = _descriptor.Descriptor(
  name='DeleteVirtualVolumeRequest',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest.name', index=1,
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
  serialized_start=1274,
  serialized_end=1335,
)


_DELETEVIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='DeleteVirtualVolumeResponse',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.DeleteVirtualVolumeResponse',
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
  serialized_start=1337,
  serialized_end=1366,
)

_LISTVIRTUALVOLUMESREQUEST_LABELSENTRY.containing_type = _LISTVIRTUALVOLUMESREQUEST
_LISTVIRTUALVOLUMESREQUEST.fields_by_name['labels'].message_type = _LISTVIRTUALVOLUMESREQUEST_LABELSENTRY
_LISTVIRTUALVOLUMESRESPONSE.fields_by_name['virtualvolumes'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUMELIST
_CREATEVIRTUALVOLUMEREQUEST.fields_by_name['virtualvolume'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUME
_UPDATEVIRTUALVOLUMEREQUEST.fields_by_name['virtualvolume'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUME
_UPDATEVIRTUALVOLUMEREQUEST.fields_by_name['field_mask'].message_type = google_dot_protobuf_dot_field__mask__pb2._FIELDMASK
_GETVIRTUALVOLUMERESPONSE.fields_by_name['virtualvolume'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUME
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

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTVIRTUALVOLUMESREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTVIRTUALVOLUMESREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesRequest)
  })
_sym_db.RegisterMessage(ListVirtualVolumesRequest)
_sym_db.RegisterMessage(ListVirtualVolumesRequest.LabelsEntry)

ListVirtualVolumesResponse = _reflection.GeneratedProtocolMessageType('ListVirtualVolumesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTVIRTUALVOLUMESRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.ListVirtualVolumesResponse)
  })
_sym_db.RegisterMessage(ListVirtualVolumesResponse)

VirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('VirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _VIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeResponse)
  })
_sym_db.RegisterMessage(VirtualVolumeResponse)

CreateVirtualVolumeRequest = _reflection.GeneratedProtocolMessageType('CreateVirtualVolumeRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEVIRTUALVOLUMEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.CreateVirtualVolumeRequest)
  })
_sym_db.RegisterMessage(CreateVirtualVolumeRequest)

CreateVirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('CreateVirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEVIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.CreateVirtualVolumeResponse)
  })
_sym_db.RegisterMessage(CreateVirtualVolumeResponse)

UpdateVirtualVolumeRequest = _reflection.GeneratedProtocolMessageType('UpdateVirtualVolumeRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEVIRTUALVOLUMEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.UpdateVirtualVolumeRequest)
  })
_sym_db.RegisterMessage(UpdateVirtualVolumeRequest)

UpdateVirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('UpdateVirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEVIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.UpdateVirtualVolumeResponse)
  })
_sym_db.RegisterMessage(UpdateVirtualVolumeResponse)

GetVirtualVolumeRequest = _reflection.GeneratedProtocolMessageType('GetVirtualVolumeRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETVIRTUALVOLUMEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeRequest)
  })
_sym_db.RegisterMessage(GetVirtualVolumeRequest)

GetVirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('GetVirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETVIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.GetVirtualVolumeResponse)
  })
_sym_db.RegisterMessage(GetVirtualVolumeResponse)

DeleteVirtualVolumeRequest = _reflection.GeneratedProtocolMessageType('DeleteVirtualVolumeRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEVIRTUALVOLUMEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.DeleteVirtualVolumeRequest)
  })
_sym_db.RegisterMessage(DeleteVirtualVolumeRequest)

DeleteVirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('DeleteVirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEVIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.virtualvolume.v1.DeleteVirtualVolumeResponse)
  })
_sym_db.RegisterMessage(DeleteVirtualVolumeResponse)


DESCRIPTOR._options = None
_LISTVIRTUALVOLUMESREQUEST_LABELSENTRY._options = None

_VIRTUALVOLUMESERVICE = _descriptor.ServiceDescriptor(
  name='VirtualVolumeService',
  full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1369,
  serialized_end=2615,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListVirtualVolumes',
    full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService.ListVirtualVolumes',
    index=0,
    containing_service=None,
    input_type=_LISTVIRTUALVOLUMESREQUEST,
    output_type=_LISTVIRTUALVOLUMESRESPONSE,
    serialized_options=b'\202\323\344\223\002 \022\036/v1/virtualvolumes/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateVirtualVolume',
    full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService.CreateVirtualVolume',
    index=1,
    containing_service=None,
    input_type=_CREATEVIRTUALVOLUMEREQUEST,
    output_type=_CREATEVIRTUALVOLUMERESPONSE,
    serialized_options=b'\202\323\344\223\002\027\"\022/v1/virtualvolumes:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetVirtualVolume',
    full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService.GetVirtualVolume',
    index=2,
    containing_service=None,
    input_type=_GETVIRTUALVOLUMEREQUEST,
    output_type=_GETVIRTUALVOLUMERESPONSE,
    serialized_options=b'\202\323\344\223\002\'\022%/v1/virtualvolumes/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateVirtualVolume',
    full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService.UpdateVirtualVolume',
    index=3,
    containing_service=None,
    input_type=_UPDATEVIRTUALVOLUMEREQUEST,
    output_type=_UPDATEVIRTUALVOLUMERESPONSE,
    serialized_options=b'\202\323\344\223\002X\032S/v1/virtualvolumes/{virtualvolume.metadata.namespace}/{virtualvolume.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteVirtualVolume',
    full_name='github.com.metaprov.modelaapi.services.virtualvolume.v1.VirtualVolumeService.DeleteVirtualVolume',
    index=4,
    containing_service=None,
    input_type=_DELETEVIRTUALVOLUMEREQUEST,
    output_type=_DELETEVIRTUALVOLUMERESPONSE,
    serialized_options=b'\202\323\344\223\002\'*%/v1/virtualvolumes/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_VIRTUALVOLUMESERVICE)

DESCRIPTOR.services_by_name['VirtualVolumeService'] = _VIRTUALVOLUMESERVICE

# @@protoc_insertion_point(module_scope)
