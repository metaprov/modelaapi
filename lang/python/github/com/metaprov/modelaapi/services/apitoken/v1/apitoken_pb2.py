# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/apitoken/v1/apitoken.proto
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


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/apitoken/v1/apitoken.proto',
  package='github.com.metaprov.modelaapi.services.apitoken.v1',
  syntax='proto3',
  serialized_options=b'Z2github.com/metaprov/modelaapi/services/apitoken/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nAgithub.com/metaprov/modelaapi/services/apitoken/v1/apitoken.proto\x12\x32github.com.metaprov.modelaapi.services.apitoken.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xf7\x01\n\x14ListApiTokensRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x64\n\x06labels\x18\x02 \x03(\x0b\x32T.github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"k\n\x15ListApiTokensResponse\x12R\n\x05items\x18\x01 \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ApiTokenList\"\x12\n\x10\x41piTokenResponse\"x\n\x15\x43reateApiTokenRequest\x12M\n\x04item\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ApiToken\x12\x10\n\x08password\x18\x02 \x01(\t\"\x18\n\x16\x43reateApiTokenResponse\"f\n\x15UpdateApiTokenRequest\x12M\n\x04item\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ApiToken\"\x18\n\x16UpdateApiTokenResponse\"5\n\x12GetApiTokenRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"r\n\x13GetApiTokenResponse\x12M\n\x04item\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ApiToken\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"?\n\x1cGetApiTokenNamespacesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"t\n\x1dGetApiTokenNamespacesResponse\x12S\n\nnamespaces\x18\x01 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.NamespaceInfo\"8\n\x15\x44\x65leteApiTokenRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x18\n\x16\x44\x65leteApiTokenResponse\"\x18\n\x16\x41piTokenCreateResponse\"I\n\x14\x41piTokenLoginRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x10\n\x08password\x18\x03 \x01(\t\"&\n\x15\x41piTokenLoginResponse\x12\r\n\x05token\x18\x01 \x01(\t2\xb1\x08\n\x0f\x41piTokenService\x12\xc7\x01\n\rListApiTokens\x12H.github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest\x1aI.github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensResponse\"!\x82\xd3\xe4\x93\x02\x1b\x12\x19/v1/apitokens/{namespace}\x12\xc1\x01\n\x0e\x43reateApiToken\x12I.github.com.metaprov.modelaapi.services.apitoken.v1.CreateApiTokenRequest\x1aJ.github.com.metaprov.modelaapi.services.apitoken.v1.CreateApiTokenResponse\"\x18\x82\xd3\xe4\x93\x02\x12\"\r/v1/apitokens:\x01*\x12\xc8\x01\n\x0bGetApiToken\x12\x46.github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenRequest\x1aG.github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenResponse\"(\x82\xd3\xe4\x93\x02\"\x12 /v1/apitokens/{namespace}/{name}\x12\xf0\x01\n\x0eUpdateApiToken\x12I.github.com.metaprov.modelaapi.services.apitoken.v1.UpdateApiTokenRequest\x1aJ.github.com.metaprov.modelaapi.services.apitoken.v1.UpdateApiTokenResponse\"G\x82\xd3\xe4\x93\x02\x41\x1a</v1/apitokens/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xd1\x01\n\x0e\x44\x65leteApiToken\x12I.github.com.metaprov.modelaapi.services.apitoken.v1.DeleteApiTokenRequest\x1aJ.github.com.metaprov.modelaapi.services.apitoken.v1.DeleteApiTokenResponse\"(\x82\xd3\xe4\x93\x02\"* /v1/apitokens/{namespace}/{name}B4Z2github.com/metaprov/modelaapi/services/apitoken/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTAPITOKENSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.LabelsEntry.value', index=1,
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
  serialized_start=488,
  serialized_end=533,
)

_LISTAPITOKENSREQUEST = _descriptor.Descriptor(
  name='ListApiTokensRequest',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='order_by', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.order_by', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTAPITOKENSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=286,
  serialized_end=533,
)


_LISTAPITOKENSRESPONSE = _descriptor.Descriptor(
  name='ListApiTokensResponse',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensResponse.items', index=0,
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
  serialized_start=535,
  serialized_end=642,
)


_APITOKENRESPONSE = _descriptor.Descriptor(
  name='ApiTokenResponse',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenResponse',
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
  serialized_start=644,
  serialized_end=662,
)


_CREATEAPITOKENREQUEST = _descriptor.Descriptor(
  name='CreateApiTokenRequest',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.CreateApiTokenRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.CreateApiTokenRequest.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='password', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.CreateApiTokenRequest.password', index=1,
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
  serialized_start=664,
  serialized_end=784,
)


_CREATEAPITOKENRESPONSE = _descriptor.Descriptor(
  name='CreateApiTokenResponse',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.CreateApiTokenResponse',
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
  serialized_start=786,
  serialized_end=810,
)


_UPDATEAPITOKENREQUEST = _descriptor.Descriptor(
  name='UpdateApiTokenRequest',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.UpdateApiTokenRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.UpdateApiTokenRequest.item', index=0,
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
  serialized_start=812,
  serialized_end=914,
)


_UPDATEAPITOKENRESPONSE = _descriptor.Descriptor(
  name='UpdateApiTokenResponse',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.UpdateApiTokenResponse',
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
  serialized_start=916,
  serialized_end=940,
)


_GETAPITOKENREQUEST = _descriptor.Descriptor(
  name='GetApiTokenRequest',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenRequest.name', index=1,
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
  serialized_start=942,
  serialized_end=995,
)


_GETAPITOKENRESPONSE = _descriptor.Descriptor(
  name='GetApiTokenResponse',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenResponse.yaml', index=1,
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
  serialized_start=997,
  serialized_end=1111,
)


_GETAPITOKENNAMESPACESREQUEST = _descriptor.Descriptor(
  name='GetApiTokenNamespacesRequest',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenNamespacesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenNamespacesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenNamespacesRequest.name', index=1,
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
  serialized_start=1113,
  serialized_end=1176,
)


_GETAPITOKENNAMESPACESRESPONSE = _descriptor.Descriptor(
  name='GetApiTokenNamespacesResponse',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenNamespacesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespaces', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenNamespacesResponse.namespaces', index=0,
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
  serialized_start=1178,
  serialized_end=1294,
)


_DELETEAPITOKENREQUEST = _descriptor.Descriptor(
  name='DeleteApiTokenRequest',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.DeleteApiTokenRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.DeleteApiTokenRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.DeleteApiTokenRequest.name', index=1,
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
  serialized_start=1296,
  serialized_end=1352,
)


_DELETEAPITOKENRESPONSE = _descriptor.Descriptor(
  name='DeleteApiTokenResponse',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.DeleteApiTokenResponse',
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
  serialized_start=1354,
  serialized_end=1378,
)


_APITOKENCREATERESPONSE = _descriptor.Descriptor(
  name='ApiTokenCreateResponse',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenCreateResponse',
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
  serialized_start=1380,
  serialized_end=1404,
)


_APITOKENLOGINREQUEST = _descriptor.Descriptor(
  name='ApiTokenLoginRequest',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenLoginRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenLoginRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenLoginRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='password', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenLoginRequest.password', index=2,
      number=3, type=9, cpp_type=9, label=1,
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
  serialized_start=1406,
  serialized_end=1479,
)


_APITOKENLOGINRESPONSE = _descriptor.Descriptor(
  name='ApiTokenLoginResponse',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenLoginResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='token', full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenLoginResponse.token', index=0,
      number=1, type=9, cpp_type=9, label=1,
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
  serialized_start=1481,
  serialized_end=1519,
)

_LISTAPITOKENSREQUEST_LABELSENTRY.containing_type = _LISTAPITOKENSREQUEST
_LISTAPITOKENSREQUEST.fields_by_name['labels'].message_type = _LISTAPITOKENSREQUEST_LABELSENTRY
_LISTAPITOKENSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._APITOKENLIST
_CREATEAPITOKENREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._APITOKEN
_UPDATEAPITOKENREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._APITOKEN
_GETAPITOKENRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._APITOKEN
_GETAPITOKENNAMESPACESRESPONSE.fields_by_name['namespaces'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2._NAMESPACEINFO
DESCRIPTOR.message_types_by_name['ListApiTokensRequest'] = _LISTAPITOKENSREQUEST
DESCRIPTOR.message_types_by_name['ListApiTokensResponse'] = _LISTAPITOKENSRESPONSE
DESCRIPTOR.message_types_by_name['ApiTokenResponse'] = _APITOKENRESPONSE
DESCRIPTOR.message_types_by_name['CreateApiTokenRequest'] = _CREATEAPITOKENREQUEST
DESCRIPTOR.message_types_by_name['CreateApiTokenResponse'] = _CREATEAPITOKENRESPONSE
DESCRIPTOR.message_types_by_name['UpdateApiTokenRequest'] = _UPDATEAPITOKENREQUEST
DESCRIPTOR.message_types_by_name['UpdateApiTokenResponse'] = _UPDATEAPITOKENRESPONSE
DESCRIPTOR.message_types_by_name['GetApiTokenRequest'] = _GETAPITOKENREQUEST
DESCRIPTOR.message_types_by_name['GetApiTokenResponse'] = _GETAPITOKENRESPONSE
DESCRIPTOR.message_types_by_name['GetApiTokenNamespacesRequest'] = _GETAPITOKENNAMESPACESREQUEST
DESCRIPTOR.message_types_by_name['GetApiTokenNamespacesResponse'] = _GETAPITOKENNAMESPACESRESPONSE
DESCRIPTOR.message_types_by_name['DeleteApiTokenRequest'] = _DELETEAPITOKENREQUEST
DESCRIPTOR.message_types_by_name['DeleteApiTokenResponse'] = _DELETEAPITOKENRESPONSE
DESCRIPTOR.message_types_by_name['ApiTokenCreateResponse'] = _APITOKENCREATERESPONSE
DESCRIPTOR.message_types_by_name['ApiTokenLoginRequest'] = _APITOKENLOGINREQUEST
DESCRIPTOR.message_types_by_name['ApiTokenLoginResponse'] = _APITOKENLOGINRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListApiTokensRequest = _reflection.GeneratedProtocolMessageType('ListApiTokensRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTAPITOKENSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTAPITOKENSREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensRequest)
  })
_sym_db.RegisterMessage(ListApiTokensRequest)
_sym_db.RegisterMessage(ListApiTokensRequest.LabelsEntry)

ListApiTokensResponse = _reflection.GeneratedProtocolMessageType('ListApiTokensResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPITOKENSRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.ListApiTokensResponse)
  })
_sym_db.RegisterMessage(ListApiTokensResponse)

ApiTokenResponse = _reflection.GeneratedProtocolMessageType('ApiTokenResponse', (_message.Message,), {
  'DESCRIPTOR' : _APITOKENRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenResponse)
  })
_sym_db.RegisterMessage(ApiTokenResponse)

CreateApiTokenRequest = _reflection.GeneratedProtocolMessageType('CreateApiTokenRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEAPITOKENREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.CreateApiTokenRequest)
  })
_sym_db.RegisterMessage(CreateApiTokenRequest)

CreateApiTokenResponse = _reflection.GeneratedProtocolMessageType('CreateApiTokenResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEAPITOKENRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.CreateApiTokenResponse)
  })
_sym_db.RegisterMessage(CreateApiTokenResponse)

UpdateApiTokenRequest = _reflection.GeneratedProtocolMessageType('UpdateApiTokenRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEAPITOKENREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.UpdateApiTokenRequest)
  })
_sym_db.RegisterMessage(UpdateApiTokenRequest)

UpdateApiTokenResponse = _reflection.GeneratedProtocolMessageType('UpdateApiTokenResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEAPITOKENRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.UpdateApiTokenResponse)
  })
_sym_db.RegisterMessage(UpdateApiTokenResponse)

GetApiTokenRequest = _reflection.GeneratedProtocolMessageType('GetApiTokenRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETAPITOKENREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenRequest)
  })
_sym_db.RegisterMessage(GetApiTokenRequest)

GetApiTokenResponse = _reflection.GeneratedProtocolMessageType('GetApiTokenResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETAPITOKENRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenResponse)
  })
_sym_db.RegisterMessage(GetApiTokenResponse)

GetApiTokenNamespacesRequest = _reflection.GeneratedProtocolMessageType('GetApiTokenNamespacesRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETAPITOKENNAMESPACESREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenNamespacesRequest)
  })
_sym_db.RegisterMessage(GetApiTokenNamespacesRequest)

GetApiTokenNamespacesResponse = _reflection.GeneratedProtocolMessageType('GetApiTokenNamespacesResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETAPITOKENNAMESPACESRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.GetApiTokenNamespacesResponse)
  })
_sym_db.RegisterMessage(GetApiTokenNamespacesResponse)

DeleteApiTokenRequest = _reflection.GeneratedProtocolMessageType('DeleteApiTokenRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEAPITOKENREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.DeleteApiTokenRequest)
  })
_sym_db.RegisterMessage(DeleteApiTokenRequest)

DeleteApiTokenResponse = _reflection.GeneratedProtocolMessageType('DeleteApiTokenResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEAPITOKENRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.DeleteApiTokenResponse)
  })
_sym_db.RegisterMessage(DeleteApiTokenResponse)

ApiTokenCreateResponse = _reflection.GeneratedProtocolMessageType('ApiTokenCreateResponse', (_message.Message,), {
  'DESCRIPTOR' : _APITOKENCREATERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenCreateResponse)
  })
_sym_db.RegisterMessage(ApiTokenCreateResponse)

ApiTokenLoginRequest = _reflection.GeneratedProtocolMessageType('ApiTokenLoginRequest', (_message.Message,), {
  'DESCRIPTOR' : _APITOKENLOGINREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenLoginRequest)
  })
_sym_db.RegisterMessage(ApiTokenLoginRequest)

ApiTokenLoginResponse = _reflection.GeneratedProtocolMessageType('ApiTokenLoginResponse', (_message.Message,), {
  'DESCRIPTOR' : _APITOKENLOGINRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.apitoken.v1.apitoken_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenLoginResponse)
  })
_sym_db.RegisterMessage(ApiTokenLoginResponse)


DESCRIPTOR._options = None
_LISTAPITOKENSREQUEST_LABELSENTRY._options = None

_APITOKENSERVICE = _descriptor.ServiceDescriptor(
  name='ApiTokenService',
  full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1522,
  serialized_end=2595,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListApiTokens',
    full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService.ListApiTokens',
    index=0,
    containing_service=None,
    input_type=_LISTAPITOKENSREQUEST,
    output_type=_LISTAPITOKENSRESPONSE,
    serialized_options=b'\202\323\344\223\002\033\022\031/v1/apitokens/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateApiToken',
    full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService.CreateApiToken',
    index=1,
    containing_service=None,
    input_type=_CREATEAPITOKENREQUEST,
    output_type=_CREATEAPITOKENRESPONSE,
    serialized_options=b'\202\323\344\223\002\022\"\r/v1/apitokens:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetApiToken',
    full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService.GetApiToken',
    index=2,
    containing_service=None,
    input_type=_GETAPITOKENREQUEST,
    output_type=_GETAPITOKENRESPONSE,
    serialized_options=b'\202\323\344\223\002\"\022 /v1/apitokens/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateApiToken',
    full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService.UpdateApiToken',
    index=3,
    containing_service=None,
    input_type=_UPDATEAPITOKENREQUEST,
    output_type=_UPDATEAPITOKENRESPONSE,
    serialized_options=b'\202\323\344\223\002A\032</v1/apitokens/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteApiToken',
    full_name='github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService.DeleteApiToken',
    index=4,
    containing_service=None,
    input_type=_DELETEAPITOKENREQUEST,
    output_type=_DELETEAPITOKENRESPONSE,
    serialized_options=b'\202\323\344\223\002\"* /v1/apitokens/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_APITOKENSERVICE)

DESCRIPTOR.services_by_name['ApiTokenService'] = _APITOKENSERVICE

# @@protoc_insertion_point(module_scope)
