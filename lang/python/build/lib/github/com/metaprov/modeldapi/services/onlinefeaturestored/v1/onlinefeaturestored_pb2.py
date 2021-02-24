# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/onlinefeaturestored/v1/onlinefeaturestored.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/onlinefeaturestored/v1/onlinefeaturestored.proto',
  package='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1',
  syntax='proto3',
  serialized_options=b'Z=github.com/metaprov/modeldapi/services/onlinefeaturestored/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nWgithub.com/metaprov/modeldapi/services/onlinefeaturestored/v1/onlinefeaturestored.proto\x12=github.com.metaprov.modeldapi.services.onlinefeaturestored.v1\x1a\x45github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\"\xb9\x02\n\x14\x43reateFeatureRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\n\n\x02ns\x18\x02 \x01(\t\x12\x16\n\x0e\x63onnectionName\x18\x03 \x01(\t\x12O\n\x04item\x18\x04 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection\x12o\n\x06secret\x18\x05 \x03(\x0b\x32_.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.SecretEntry\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\x17\n\x15\x43reateFeatureResponse\"0\n\x14\x44\x65leteFeatureRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\n\n\x02ns\x18\x02 \x01(\t\"\x17\n\x15\x44\x65leteFeatureResponse\"!\n\x13ListFeaturesRequest\x12\n\n\x02ns\x18\x01 \x01(\t\"h\n\x14ListFeaturesResponse\x12P\n\x05items\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeatureList\"z\n\x11GetFeatureRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\n\n\x02ns\x18\x02 \x01(\t\x12K\n\x04item\x18\x03 \x01(\x0b\x32=.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Feature\"a\n\x12GetFeatureResponse\x12K\n\x04item\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Feature\"+\n\rEnrichRequest\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0e\n\x06record\x18\x02 \x01(\t\",\n\x0e\x45nrichResponse\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0e\n\x06record\x18\x02 \x01(\t\"\xb8\x04\n\x14UpdateFeatureRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\n\n\x02ns\x18\x02 \x01(\t\x12o\n\x06labels\x18\x03 \x03(\x0b\x32_.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.LabelsEntry\x12O\n\x04spec\x18\x04 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeatureSpec\x12\x16\n\x0e\x63onnectionName\x18\x05 \x01(\t\x12]\n\x0e\x63onnectionSpec\x18\x06 \x01(\x0b\x32\x45.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec\x12o\n\x06secret\x18\x07 \x03(\x0b\x32_.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.SecretEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\x17\n\x15UpdateFeatureResponse2\xf4\x08\n\x19OnlineFeatureStoreService\x12\xbc\x01\n\rCreateFeature\x12S.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest\x1aT.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureResponse\"\x00\x12\xbc\x01\n\rDeleteFeature\x12S.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.DeleteFeatureRequest\x1aT.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.DeleteFeatureResponse\"\x00\x12\xb9\x01\n\x0cListFeatures\x12R.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.ListFeaturesRequest\x1aS.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.ListFeaturesResponse\"\x00\x12\xb3\x01\n\nGetFeature\x12P.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureRequest\x1aQ.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureResponse\"\x00\x12\xbc\x01\n\rUpdateFeature\x12S.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest\x1aT.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureResponse\"\x00\x12\xa7\x01\n\x06\x45nrich\x12L.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichRequest\x1aM.github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichResponse\"\x00\x42?Z=github.com/metaprov/modeldapi/services/onlinefeaturestored/v1b\x06proto3'
  ,
  dependencies=[github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_CREATEFEATUREREQUEST_SECRETENTRY = _descriptor.Descriptor(
  name='SecretEntry',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.SecretEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.SecretEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.SecretEntry.value', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
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
  serialized_start=564,
  serialized_end=609,
)

_CREATEFEATUREREQUEST = _descriptor.Descriptor(
  name='CreateFeatureRequest',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ns', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.ns', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='connectionName', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.connectionName', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.item', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='secret', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.secret', index=4,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_CREATEFEATUREREQUEST_SECRETENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=296,
  serialized_end=609,
)


_CREATEFEATURERESPONSE = _descriptor.Descriptor(
  name='CreateFeatureResponse',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureResponse',
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
  serialized_start=611,
  serialized_end=634,
)


_DELETEFEATUREREQUEST = _descriptor.Descriptor(
  name='DeleteFeatureRequest',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.DeleteFeatureRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.DeleteFeatureRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ns', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.DeleteFeatureRequest.ns', index=1,
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
  serialized_start=636,
  serialized_end=684,
)


_DELETEFEATURERESPONSE = _descriptor.Descriptor(
  name='DeleteFeatureResponse',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.DeleteFeatureResponse',
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
  serialized_start=686,
  serialized_end=709,
)


_LISTFEATURESREQUEST = _descriptor.Descriptor(
  name='ListFeaturesRequest',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.ListFeaturesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='ns', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.ListFeaturesRequest.ns', index=0,
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
  serialized_start=711,
  serialized_end=744,
)


_LISTFEATURESRESPONSE = _descriptor.Descriptor(
  name='ListFeaturesResponse',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.ListFeaturesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.ListFeaturesResponse.items', index=0,
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
  serialized_start=746,
  serialized_end=850,
)


_GETFEATUREREQUEST = _descriptor.Descriptor(
  name='GetFeatureRequest',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ns', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureRequest.ns', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureRequest.item', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
  serialized_start=852,
  serialized_end=974,
)


_GETFEATURERESPONSE = _descriptor.Descriptor(
  name='GetFeatureResponse',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureResponse.item', index=0,
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
  serialized_start=976,
  serialized_end=1073,
)


_ENRICHREQUEST = _descriptor.Descriptor(
  name='EnrichRequest',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='record', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichRequest.record', index=1,
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
  serialized_end=1118,
)


_ENRICHRESPONSE = _descriptor.Descriptor(
  name='EnrichResponse',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichResponse.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='record', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichResponse.record', index=1,
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
  serialized_start=1120,
  serialized_end=1164,
)


_UPDATEFEATUREREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.LabelsEntry.value', index=1,
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
  serialized_start=1643,
  serialized_end=1688,
)

_UPDATEFEATUREREQUEST_SECRETENTRY = _descriptor.Descriptor(
  name='SecretEntry',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.SecretEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.SecretEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.SecretEntry.value', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
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
  serialized_start=564,
  serialized_end=609,
)

_UPDATEFEATUREREQUEST = _descriptor.Descriptor(
  name='UpdateFeatureRequest',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ns', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.ns', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.spec', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='connectionName', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.connectionName', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='connectionSpec', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.connectionSpec', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='secret', full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.secret', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_UPDATEFEATUREREQUEST_LABELSENTRY, _UPDATEFEATUREREQUEST_SECRETENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1167,
  serialized_end=1735,
)


_UPDATEFEATURERESPONSE = _descriptor.Descriptor(
  name='UpdateFeatureResponse',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureResponse',
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
  serialized_start=1737,
  serialized_end=1760,
)

_CREATEFEATUREREQUEST_SECRETENTRY.containing_type = _CREATEFEATUREREQUEST
_CREATEFEATUREREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._CONNECTION
_CREATEFEATUREREQUEST.fields_by_name['secret'].message_type = _CREATEFEATUREREQUEST_SECRETENTRY
_LISTFEATURESRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURELIST
_GETFEATUREREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURE
_GETFEATURERESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURE
_UPDATEFEATUREREQUEST_LABELSENTRY.containing_type = _UPDATEFEATUREREQUEST
_UPDATEFEATUREREQUEST_SECRETENTRY.containing_type = _UPDATEFEATUREREQUEST
_UPDATEFEATUREREQUEST.fields_by_name['labels'].message_type = _UPDATEFEATUREREQUEST_LABELSENTRY
_UPDATEFEATUREREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATURESPEC
_UPDATEFEATUREREQUEST.fields_by_name['connectionSpec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._CONNECTIONSPEC
_UPDATEFEATUREREQUEST.fields_by_name['secret'].message_type = _UPDATEFEATUREREQUEST_SECRETENTRY
DESCRIPTOR.message_types_by_name['CreateFeatureRequest'] = _CREATEFEATUREREQUEST
DESCRIPTOR.message_types_by_name['CreateFeatureResponse'] = _CREATEFEATURERESPONSE
DESCRIPTOR.message_types_by_name['DeleteFeatureRequest'] = _DELETEFEATUREREQUEST
DESCRIPTOR.message_types_by_name['DeleteFeatureResponse'] = _DELETEFEATURERESPONSE
DESCRIPTOR.message_types_by_name['ListFeaturesRequest'] = _LISTFEATURESREQUEST
DESCRIPTOR.message_types_by_name['ListFeaturesResponse'] = _LISTFEATURESRESPONSE
DESCRIPTOR.message_types_by_name['GetFeatureRequest'] = _GETFEATUREREQUEST
DESCRIPTOR.message_types_by_name['GetFeatureResponse'] = _GETFEATURERESPONSE
DESCRIPTOR.message_types_by_name['EnrichRequest'] = _ENRICHREQUEST
DESCRIPTOR.message_types_by_name['EnrichResponse'] = _ENRICHRESPONSE
DESCRIPTOR.message_types_by_name['UpdateFeatureRequest'] = _UPDATEFEATUREREQUEST
DESCRIPTOR.message_types_by_name['UpdateFeatureResponse'] = _UPDATEFEATURERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CreateFeatureRequest = _reflection.GeneratedProtocolMessageType('CreateFeatureRequest', (_message.Message,), {

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _CREATEFEATUREREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _CREATEFEATUREREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureRequest)
  })
_sym_db.RegisterMessage(CreateFeatureRequest)
_sym_db.RegisterMessage(CreateFeatureRequest.SecretEntry)

CreateFeatureResponse = _reflection.GeneratedProtocolMessageType('CreateFeatureResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEFEATURERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.CreateFeatureResponse)
  })
_sym_db.RegisterMessage(CreateFeatureResponse)

DeleteFeatureRequest = _reflection.GeneratedProtocolMessageType('DeleteFeatureRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATUREREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.DeleteFeatureRequest)
  })
_sym_db.RegisterMessage(DeleteFeatureRequest)

DeleteFeatureResponse = _reflection.GeneratedProtocolMessageType('DeleteFeatureResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATURERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.DeleteFeatureResponse)
  })
_sym_db.RegisterMessage(DeleteFeatureResponse)

ListFeaturesRequest = _reflection.GeneratedProtocolMessageType('ListFeaturesRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTFEATURESREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.ListFeaturesRequest)
  })
_sym_db.RegisterMessage(ListFeaturesRequest)

ListFeaturesResponse = _reflection.GeneratedProtocolMessageType('ListFeaturesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTFEATURESRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.ListFeaturesResponse)
  })
_sym_db.RegisterMessage(ListFeaturesResponse)

GetFeatureRequest = _reflection.GeneratedProtocolMessageType('GetFeatureRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATUREREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureRequest)
  })
_sym_db.RegisterMessage(GetFeatureRequest)

GetFeatureResponse = _reflection.GeneratedProtocolMessageType('GetFeatureResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATURERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.GetFeatureResponse)
  })
_sym_db.RegisterMessage(GetFeatureResponse)

EnrichRequest = _reflection.GeneratedProtocolMessageType('EnrichRequest', (_message.Message,), {
  'DESCRIPTOR' : _ENRICHREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichRequest)
  })
_sym_db.RegisterMessage(EnrichRequest)

EnrichResponse = _reflection.GeneratedProtocolMessageType('EnrichResponse', (_message.Message,), {
  'DESCRIPTOR' : _ENRICHRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.EnrichResponse)
  })
_sym_db.RegisterMessage(EnrichResponse)

UpdateFeatureRequest = _reflection.GeneratedProtocolMessageType('UpdateFeatureRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _UPDATEFEATUREREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.LabelsEntry)
    })
  ,

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _UPDATEFEATUREREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _UPDATEFEATUREREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureRequest)
  })
_sym_db.RegisterMessage(UpdateFeatureRequest)
_sym_db.RegisterMessage(UpdateFeatureRequest.LabelsEntry)
_sym_db.RegisterMessage(UpdateFeatureRequest.SecretEntry)

UpdateFeatureResponse = _reflection.GeneratedProtocolMessageType('UpdateFeatureResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEFEATURERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.onlinefeaturestored_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.UpdateFeatureResponse)
  })
_sym_db.RegisterMessage(UpdateFeatureResponse)


DESCRIPTOR._options = None
_CREATEFEATUREREQUEST_SECRETENTRY._options = None
_UPDATEFEATUREREQUEST_LABELSENTRY._options = None
_UPDATEFEATUREREQUEST_SECRETENTRY._options = None

_ONLINEFEATURESTORESERVICE = _descriptor.ServiceDescriptor(
  name='OnlineFeatureStoreService',
  full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1763,
  serialized_end=2903,
  methods=[
  _descriptor.MethodDescriptor(
    name='CreateFeature',
    full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService.CreateFeature',
    index=0,
    containing_service=None,
    input_type=_CREATEFEATUREREQUEST,
    output_type=_CREATEFEATURERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteFeature',
    full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService.DeleteFeature',
    index=1,
    containing_service=None,
    input_type=_DELETEFEATUREREQUEST,
    output_type=_DELETEFEATURERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ListFeatures',
    full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService.ListFeatures',
    index=2,
    containing_service=None,
    input_type=_LISTFEATURESREQUEST,
    output_type=_LISTFEATURESRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetFeature',
    full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService.GetFeature',
    index=3,
    containing_service=None,
    input_type=_GETFEATUREREQUEST,
    output_type=_GETFEATURERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateFeature',
    full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService.UpdateFeature',
    index=4,
    containing_service=None,
    input_type=_UPDATEFEATUREREQUEST,
    output_type=_UPDATEFEATURERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Enrich',
    full_name='github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService.Enrich',
    index=5,
    containing_service=None,
    input_type=_ENRICHREQUEST,
    output_type=_ENRICHRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_ONLINEFEATURESTORESERVICE)

DESCRIPTOR.services_by_name['OnlineFeatureStoreService'] = _ONLINEFEATURESTORESERVICE

# @@protoc_insertion_point(module_scope)
