# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/batchpredictord/v1/batchpredictord.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/batchpredictord/v1/batchpredictord.proto',
  package='github.com.metaprov.modelaapi.services.batchpredictord.v1',
  syntax='proto3',
  serialized_options=b'Z9github.com/metaprov/modelaapi/services/batchpredictord/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nOgithub.com/metaprov/modelaapi/services/batchpredictord/v1/batchpredictord.proto\x12\x39github.com.metaprov.modelaapi.services.batchpredictord.v1\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1aIgithub.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated.proto\x1a\x1bgoogle/protobuf/empty.proto\"\xa2\x06\n\x13\x42\x61tchPredictRequest\x12Y\n\nprediction\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction\x12X\n\nfromBucket\x18\x02 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12Y\n\x0e\x66romConnection\x18\x03 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12r\n\nfromSecret\x18\x04 \x03(\x0b\x32^.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.FromSecretEntry\x12Z\n\x0ctargetBucket\x18\x05 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12W\n\x0ctoConnection\x18\x06 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12n\n\x08toSecret\x18\x07 \x03(\x0b\x32\\.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.ToSecretEntry\x1a\x31\n\x0f\x46romSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\x1a/\n\rToSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\x16\n\x14\x42\x61tchPredictResponse2\xf9\x01\n\x05\x42\x61tch\x12\xb1\x01\n\x0c\x42\x61tchPredict\x12N.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest\x1aO.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictResponse\"\x00\x12<\n\x08Shutdown\x12\x16.google.protobuf.Empty\x1a\x16.google.protobuf.Empty\"\x00\x42;Z9github.com/metaprov/modelaapi/services/batchpredictord/v1b\x06proto3'
  ,
  dependencies=[github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,])




_BATCHPREDICTREQUEST_FROMSECRETENTRY = _descriptor.Descriptor(
  name='FromSecretEntry',
  full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.FromSecretEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.FromSecretEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.FromSecretEntry.value', index=1,
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
  serialized_start=1022,
  serialized_end=1071,
)

_BATCHPREDICTREQUEST_TOSECRETENTRY = _descriptor.Descriptor(
  name='ToSecretEntry',
  full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.ToSecretEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.ToSecretEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.ToSecretEntry.value', index=1,
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
  serialized_start=1073,
  serialized_end=1120,
)

_BATCHPREDICTREQUEST = _descriptor.Descriptor(
  name='BatchPredictRequest',
  full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='prediction', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.prediction', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='fromBucket', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.fromBucket', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='fromConnection', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.fromConnection', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='fromSecret', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.fromSecret', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='targetBucket', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.targetBucket', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='toConnection', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.toConnection', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='toSecret', full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.toSecret', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_BATCHPREDICTREQUEST_FROMSECRETENTRY, _BATCHPREDICTREQUEST_TOSECRETENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=318,
  serialized_end=1120,
)


_BATCHPREDICTRESPONSE = _descriptor.Descriptor(
  name='BatchPredictResponse',
  full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictResponse',
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
  serialized_start=1122,
  serialized_end=1144,
)

_BATCHPREDICTREQUEST_FROMSECRETENTRY.containing_type = _BATCHPREDICTREQUEST
_BATCHPREDICTREQUEST_TOSECRETENTRY.containing_type = _BATCHPREDICTREQUEST
_BATCHPREDICTREQUEST.fields_by_name['prediction'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._PREDICTION
_BATCHPREDICTREQUEST.fields_by_name['fromBucket'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALBUCKET
_BATCHPREDICTREQUEST.fields_by_name['fromConnection'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._CONNECTION
_BATCHPREDICTREQUEST.fields_by_name['fromSecret'].message_type = _BATCHPREDICTREQUEST_FROMSECRETENTRY
_BATCHPREDICTREQUEST.fields_by_name['targetBucket'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALBUCKET
_BATCHPREDICTREQUEST.fields_by_name['toConnection'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._CONNECTION
_BATCHPREDICTREQUEST.fields_by_name['toSecret'].message_type = _BATCHPREDICTREQUEST_TOSECRETENTRY
DESCRIPTOR.message_types_by_name['BatchPredictRequest'] = _BATCHPREDICTREQUEST
DESCRIPTOR.message_types_by_name['BatchPredictResponse'] = _BATCHPREDICTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

BatchPredictRequest = _reflection.GeneratedProtocolMessageType('BatchPredictRequest', (_message.Message,), {

  'FromSecretEntry' : _reflection.GeneratedProtocolMessageType('FromSecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _BATCHPREDICTREQUEST_FROMSECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.batchpredictord.v1.batchpredictord_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.FromSecretEntry)
    })
  ,

  'ToSecretEntry' : _reflection.GeneratedProtocolMessageType('ToSecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _BATCHPREDICTREQUEST_TOSECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.batchpredictord.v1.batchpredictord_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.ToSecretEntry)
    })
  ,
  'DESCRIPTOR' : _BATCHPREDICTREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.batchpredictord.v1.batchpredictord_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest)
  })
_sym_db.RegisterMessage(BatchPredictRequest)
_sym_db.RegisterMessage(BatchPredictRequest.FromSecretEntry)
_sym_db.RegisterMessage(BatchPredictRequest.ToSecretEntry)

BatchPredictResponse = _reflection.GeneratedProtocolMessageType('BatchPredictResponse', (_message.Message,), {
  'DESCRIPTOR' : _BATCHPREDICTRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.batchpredictord.v1.batchpredictord_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictResponse)
  })
_sym_db.RegisterMessage(BatchPredictResponse)


DESCRIPTOR._options = None
_BATCHPREDICTREQUEST_FROMSECRETENTRY._options = None
_BATCHPREDICTREQUEST_TOSECRETENTRY._options = None

_BATCH = _descriptor.ServiceDescriptor(
  name='Batch',
  full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1147,
  serialized_end=1396,
  methods=[
  _descriptor.MethodDescriptor(
    name='BatchPredict',
    full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch.BatchPredict',
    index=0,
    containing_service=None,
    input_type=_BATCHPREDICTREQUEST,
    output_type=_BATCHPREDICTRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Shutdown',
    full_name='github.com.metaprov.modelaapi.services.batchpredictord.v1.Batch.Shutdown',
    index=1,
    containing_service=None,
    input_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_BATCH)

DESCRIPTOR.services_by_name['Batch'] = _BATCH

# @@protoc_insertion_point(module_scope)
