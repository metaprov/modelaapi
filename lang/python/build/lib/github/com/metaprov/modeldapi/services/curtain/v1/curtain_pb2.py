# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/curtain/v1/curtain.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/curtain/v1/curtain.proto',
  package='github.com.metaprov.modeldapi.services.curtain.v1',
  syntax='proto3',
  serialized_options=b'Z1github.com/metaprov/modeldapi/services/curtain/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n?github.com/metaprov/modeldapi/services/curtain/v1/curtain.proto\x12\x31github.com.metaprov.modeldapi.services.curtain.v1\x1a\x1cgoogle/api/annotations.proto\x1aIgithub.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated.proto\"\xbb\x01\n\x13ListCurtainsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x62\n\x06labels\x18\x02 \x03(\x0b\x32R.github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"m\n\x14ListCurtainsResponse\x12U\n\x05items\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList\"\x17\n\x15\x43reateCurtainResponse\"\xa1\x02\n\x14\x43reateCurtainRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x63\n\x06labels\x18\x03 \x03(\x0b\x32S.github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest.LabelsEntry\x12T\n\x04spec\x18\x05 \x01(\x0b\x32\x46.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xa1\x02\n\x14UpdateCurtainRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x63\n\x06labels\x18\x03 \x03(\x0b\x32S.github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest.LabelsEntry\x12T\n\x04spec\x18\x05 \x01(\x0b\x32\x46.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x17\n\x15UpdateCurtainResponse\"4\n\x11GetCurtainRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"t\n\x12GetCurtainResponse\x12P\n\x04item\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"7\n\x14\x44\x65leteCurtainRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x17\n\x15\x44\x65leteCurtainResponse2\xe3\x07\n\x0e\x43urtainService\x12\xb5\x01\n\x0cListCurtains\x12\x46.github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest\x1aG.github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsResponse\"\x14\x82\xd3\xe4\x93\x02\x0e\x12\x0c/v1/curtains\x12\xc1\x01\n\rCreateCurtain\x12G.github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest\x1aH.github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainResponse\"\x1d\x82\xd3\xe4\x93\x02\x17\"\x0c/v1/curtains:\x07\x63urtain\x12\xb6\x01\n\nGetCurtain\x12\x44.github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainRequest\x1a\x45.github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\x12\x13/v1/curtains/{name}\x12\xd9\x01\n\rUpdateCurtain\x12G.github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest\x1aH.github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainResponse\"5\x82\xd3\xe4\x93\x02/\x1a$/v1/curtains/{curtain.metadata.name}:\x07\x63urtain\x12\xbf\x01\n\rDeleteCurtain\x12G.github.com.metaprov.modeldapi.services.curtain.v1.DeleteCurtainRequest\x1aH.github.com.metaprov.modeldapi.services.curtain.v1.DeleteCurtainResponse\"\x1b\x82\xd3\xe4\x93\x02\x15*\x13/v1/curtains/{name}B3Z1github.com/metaprov/modeldapi/services/curtain/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTCURTAINSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest.LabelsEntry.value', index=1,
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
  serialized_start=366,
  serialized_end=411,
)

_LISTCURTAINSREQUEST = _descriptor.Descriptor(
  name='ListCurtainsRequest',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTCURTAINSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=224,
  serialized_end=411,
)


_LISTCURTAINSRESPONSE = _descriptor.Descriptor(
  name='ListCurtainsResponse',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsResponse.items', index=0,
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
  serialized_start=413,
  serialized_end=522,
)


_CREATECURTAINRESPONSE = _descriptor.Descriptor(
  name='CreateCurtainResponse',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainResponse',
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
  serialized_start=524,
  serialized_end=547,
)


_CREATECURTAINREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest.LabelsEntry.value', index=1,
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
  serialized_start=366,
  serialized_end=411,
)

_CREATECURTAINREQUEST = _descriptor.Descriptor(
  name='CreateCurtainRequest',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_CREATECURTAINREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=550,
  serialized_end=839,
)


_UPDATECURTAINREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest.LabelsEntry.value', index=1,
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
  serialized_start=366,
  serialized_end=411,
)

_UPDATECURTAINREQUEST = _descriptor.Descriptor(
  name='UpdateCurtainRequest',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_UPDATECURTAINREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=842,
  serialized_end=1131,
)


_UPDATECURTAINRESPONSE = _descriptor.Descriptor(
  name='UpdateCurtainResponse',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainResponse',
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
  serialized_start=1133,
  serialized_end=1156,
)


_GETCURTAINREQUEST = _descriptor.Descriptor(
  name='GetCurtainRequest',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainRequest.name', index=1,
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
  serialized_start=1158,
  serialized_end=1210,
)


_GETCURTAINRESPONSE = _descriptor.Descriptor(
  name='GetCurtainResponse',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainResponse.yaml', index=1,
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
  serialized_start=1212,
  serialized_end=1328,
)


_DELETECURTAINREQUEST = _descriptor.Descriptor(
  name='DeleteCurtainRequest',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.DeleteCurtainRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.curtain.v1.DeleteCurtainRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.curtain.v1.DeleteCurtainRequest.name', index=1,
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
  serialized_start=1330,
  serialized_end=1385,
)


_DELETECURTAINRESPONSE = _descriptor.Descriptor(
  name='DeleteCurtainResponse',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.DeleteCurtainResponse',
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
  serialized_start=1387,
  serialized_end=1410,
)

_LISTCURTAINSREQUEST_LABELSENTRY.containing_type = _LISTCURTAINSREQUEST
_LISTCURTAINSREQUEST.fields_by_name['labels'].message_type = _LISTCURTAINSREQUEST_LABELSENTRY
_LISTCURTAINSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._CURTAINLIST
_CREATECURTAINREQUEST_LABELSENTRY.containing_type = _CREATECURTAINREQUEST
_CREATECURTAINREQUEST.fields_by_name['labels'].message_type = _CREATECURTAINREQUEST_LABELSENTRY
_CREATECURTAINREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._CURTAINSPEC
_UPDATECURTAINREQUEST_LABELSENTRY.containing_type = _UPDATECURTAINREQUEST
_UPDATECURTAINREQUEST.fields_by_name['labels'].message_type = _UPDATECURTAINREQUEST_LABELSENTRY
_UPDATECURTAINREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._CURTAINSPEC
_GETCURTAINRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._CURTAIN
DESCRIPTOR.message_types_by_name['ListCurtainsRequest'] = _LISTCURTAINSREQUEST
DESCRIPTOR.message_types_by_name['ListCurtainsResponse'] = _LISTCURTAINSRESPONSE
DESCRIPTOR.message_types_by_name['CreateCurtainResponse'] = _CREATECURTAINRESPONSE
DESCRIPTOR.message_types_by_name['CreateCurtainRequest'] = _CREATECURTAINREQUEST
DESCRIPTOR.message_types_by_name['UpdateCurtainRequest'] = _UPDATECURTAINREQUEST
DESCRIPTOR.message_types_by_name['UpdateCurtainResponse'] = _UPDATECURTAINRESPONSE
DESCRIPTOR.message_types_by_name['GetCurtainRequest'] = _GETCURTAINREQUEST
DESCRIPTOR.message_types_by_name['GetCurtainResponse'] = _GETCURTAINRESPONSE
DESCRIPTOR.message_types_by_name['DeleteCurtainRequest'] = _DELETECURTAINREQUEST
DESCRIPTOR.message_types_by_name['DeleteCurtainResponse'] = _DELETECURTAINRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListCurtainsRequest = _reflection.GeneratedProtocolMessageType('ListCurtainsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTCURTAINSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTCURTAINSREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsRequest)
  })
_sym_db.RegisterMessage(ListCurtainsRequest)
_sym_db.RegisterMessage(ListCurtainsRequest.LabelsEntry)

ListCurtainsResponse = _reflection.GeneratedProtocolMessageType('ListCurtainsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTCURTAINSRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.ListCurtainsResponse)
  })
_sym_db.RegisterMessage(ListCurtainsResponse)

CreateCurtainResponse = _reflection.GeneratedProtocolMessageType('CreateCurtainResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATECURTAINRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainResponse)
  })
_sym_db.RegisterMessage(CreateCurtainResponse)

CreateCurtainRequest = _reflection.GeneratedProtocolMessageType('CreateCurtainRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _CREATECURTAINREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _CREATECURTAINREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.CreateCurtainRequest)
  })
_sym_db.RegisterMessage(CreateCurtainRequest)
_sym_db.RegisterMessage(CreateCurtainRequest.LabelsEntry)

UpdateCurtainRequest = _reflection.GeneratedProtocolMessageType('UpdateCurtainRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _UPDATECURTAINREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _UPDATECURTAINREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainRequest)
  })
_sym_db.RegisterMessage(UpdateCurtainRequest)
_sym_db.RegisterMessage(UpdateCurtainRequest.LabelsEntry)

UpdateCurtainResponse = _reflection.GeneratedProtocolMessageType('UpdateCurtainResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATECURTAINRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.UpdateCurtainResponse)
  })
_sym_db.RegisterMessage(UpdateCurtainResponse)

GetCurtainRequest = _reflection.GeneratedProtocolMessageType('GetCurtainRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETCURTAINREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainRequest)
  })
_sym_db.RegisterMessage(GetCurtainRequest)

GetCurtainResponse = _reflection.GeneratedProtocolMessageType('GetCurtainResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETCURTAINRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.GetCurtainResponse)
  })
_sym_db.RegisterMessage(GetCurtainResponse)

DeleteCurtainRequest = _reflection.GeneratedProtocolMessageType('DeleteCurtainRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETECURTAINREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.DeleteCurtainRequest)
  })
_sym_db.RegisterMessage(DeleteCurtainRequest)

DeleteCurtainResponse = _reflection.GeneratedProtocolMessageType('DeleteCurtainResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETECURTAINRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.curtain.v1.curtain_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.curtain.v1.DeleteCurtainResponse)
  })
_sym_db.RegisterMessage(DeleteCurtainResponse)


DESCRIPTOR._options = None
_LISTCURTAINSREQUEST_LABELSENTRY._options = None
_CREATECURTAINREQUEST_LABELSENTRY._options = None
_UPDATECURTAINREQUEST_LABELSENTRY._options = None

_CURTAINSERVICE = _descriptor.ServiceDescriptor(
  name='CurtainService',
  full_name='github.com.metaprov.modeldapi.services.curtain.v1.CurtainService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1413,
  serialized_end=2408,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListCurtains',
    full_name='github.com.metaprov.modeldapi.services.curtain.v1.CurtainService.ListCurtains',
    index=0,
    containing_service=None,
    input_type=_LISTCURTAINSREQUEST,
    output_type=_LISTCURTAINSRESPONSE,
    serialized_options=b'\202\323\344\223\002\016\022\014/v1/curtains',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateCurtain',
    full_name='github.com.metaprov.modeldapi.services.curtain.v1.CurtainService.CreateCurtain',
    index=1,
    containing_service=None,
    input_type=_CREATECURTAINREQUEST,
    output_type=_CREATECURTAINRESPONSE,
    serialized_options=b'\202\323\344\223\002\027\"\014/v1/curtains:\007curtain',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetCurtain',
    full_name='github.com.metaprov.modeldapi.services.curtain.v1.CurtainService.GetCurtain',
    index=2,
    containing_service=None,
    input_type=_GETCURTAINREQUEST,
    output_type=_GETCURTAINRESPONSE,
    serialized_options=b'\202\323\344\223\002\025\022\023/v1/curtains/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateCurtain',
    full_name='github.com.metaprov.modeldapi.services.curtain.v1.CurtainService.UpdateCurtain',
    index=3,
    containing_service=None,
    input_type=_UPDATECURTAINREQUEST,
    output_type=_UPDATECURTAINRESPONSE,
    serialized_options=b'\202\323\344\223\002/\032$/v1/curtains/{curtain.metadata.name}:\007curtain',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteCurtain',
    full_name='github.com.metaprov.modeldapi.services.curtain.v1.CurtainService.DeleteCurtain',
    index=4,
    containing_service=None,
    input_type=_DELETECURTAINREQUEST,
    output_type=_DELETECURTAINRESPONSE,
    serialized_options=b'\202\323\344\223\002\025*\023/v1/curtains/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_CURTAINSERVICE)

DESCRIPTOR.services_by_name['CurtainService'] = _CURTAINSERVICE

# @@protoc_insertion_point(module_scope)
