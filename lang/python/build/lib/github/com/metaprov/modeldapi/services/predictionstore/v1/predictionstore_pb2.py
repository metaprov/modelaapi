# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/predictionstore/v1/predictionstore.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from k8s.io.api.core.v1 import generated_pb2 as k8s_dot_io_dot_api_dot_core_dot_v1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/predictionstore/v1/predictionstore.proto',
  package='github.com.metaprov.modeldapi.services.predictionstore.v1',
  syntax='proto3',
  serialized_options=b'Z9github.com/metaprov/modeldapi/services/predictionstore/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nOgithub.com/metaprov/modeldapi/services/predictionstore/v1/predictionstore.proto\x12\x39github.com.metaprov.modeldapi.services.predictionstore.v1\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\x1a\x45github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto\x1a\"k8s.io/api/core/v1/generated.proto\"\xfa\x01\n\x18PredictionsIngestRequest\x12N\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset\x12\x0b\n\x03key\x18\x02 \x01(\t\x12U\n\nconnection\x18\x03 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection\x12*\n\x06secret\x18\x04 \x01(\x0b\x32\x1a.k8s.io.api.core.v1.Secret\"\x1a\n\x18PredictionIngestResponse2\xcf\x01\n\x16PredictionStoreService\x12\xb4\x01\n\x06Ingest\x12S.github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionsIngestRequest\x1aS.github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionIngestResponse\"\x00\x42;Z9github.com/metaprov/modeldapi/services/predictionstore/v1b\x06proto3'
  ,
  dependencies=[github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,k8s_dot_io_dot_api_dot_core_dot_v1_dot_generated__pb2.DESCRIPTOR,])




_PREDICTIONSINGESTREQUEST = _descriptor.Descriptor(
  name='PredictionsIngestRequest',
  full_name='github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionsIngestRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset', full_name='github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionsIngestRequest.dataset', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionsIngestRequest.key', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='connection', full_name='github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionsIngestRequest.connection', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='secret', full_name='github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionsIngestRequest.secret', index=3,
      number=4, type=11, cpp_type=10, label=1,
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
  serialized_start=320,
  serialized_end=570,
)


_PREDICTIONINGESTRESPONSE = _descriptor.Descriptor(
  name='PredictionIngestResponse',
  full_name='github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionIngestResponse',
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
  serialized_start=572,
  serialized_end=598,
)

_PREDICTIONSINGESTREQUEST.fields_by_name['dataset'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATASET
_PREDICTIONSINGESTREQUEST.fields_by_name['connection'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._CONNECTION
_PREDICTIONSINGESTREQUEST.fields_by_name['secret'].message_type = k8s_dot_io_dot_api_dot_core_dot_v1_dot_generated__pb2._SECRET
DESCRIPTOR.message_types_by_name['PredictionsIngestRequest'] = _PREDICTIONSINGESTREQUEST
DESCRIPTOR.message_types_by_name['PredictionIngestResponse'] = _PREDICTIONINGESTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

PredictionsIngestRequest = _reflection.GeneratedProtocolMessageType('PredictionsIngestRequest', (_message.Message,), {
  'DESCRIPTOR' : _PREDICTIONSINGESTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.predictionstore.v1.predictionstore_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionsIngestRequest)
  })
_sym_db.RegisterMessage(PredictionsIngestRequest)

PredictionIngestResponse = _reflection.GeneratedProtocolMessageType('PredictionIngestResponse', (_message.Message,), {
  'DESCRIPTOR' : _PREDICTIONINGESTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.predictionstore.v1.predictionstore_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionIngestResponse)
  })
_sym_db.RegisterMessage(PredictionIngestResponse)


DESCRIPTOR._options = None

_PREDICTIONSTORESERVICE = _descriptor.ServiceDescriptor(
  name='PredictionStoreService',
  full_name='github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionStoreService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=601,
  serialized_end=808,
  methods=[
  _descriptor.MethodDescriptor(
    name='Ingest',
    full_name='github.com.metaprov.modeldapi.services.predictionstore.v1.PredictionStoreService.Ingest',
    index=0,
    containing_service=None,
    input_type=_PREDICTIONSINGESTREQUEST,
    output_type=_PREDICTIONINGESTRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_PREDICTIONSTORESERVICE)

DESCRIPTOR.services_by_name['PredictionStoreService'] = _PREDICTIONSTORESERVICE

# @@protoc_insertion_point(module_scope)
