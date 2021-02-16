# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/archived/v1/archived.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/archived/v1/archived.proto',
  package='github.com.metaprov.modeldapi.services.archived.v1',
  syntax='proto3',
  serialized_options=b'Z2github.com/metaprov/modeldapi/services/archived/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nAgithub.com/metaprov/modeldapi/services/archived/v1/archived.proto\x12\x32github.com.metaprov.modeldapi.services.archived.v1\x1a\x45github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\x1aIgithub.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated.proto\x1aHgithub.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated.proto\"d\n\x12RecordModelRequest\x12N\n\x05model\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model\"\x15\n\x13RecordModelResponse\"d\n\x12RecordStudyRequest\x12N\n\x05study\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study\"\x15\n\x13RecordStudyResponse\"f\n\x14RecordDatasetRequest\x12N\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset\"\x17\n\x15RecordDatasetResponse\"\x84\x01\n\x1fRecordPredictionPipelineRequest\x12\x61\n\nprediction\x18\x01 \x01(\x0b\x32M.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline\"\"\n RecordPredictionPipelineResponse\"q\n\x16RecordPredictorRequest\x12W\n\tpredictor\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor\"\x19\n\x17RecordPredictorResponse\"n\n\x18RecordDataProductRequest\x12R\n\x07product\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct\"\x1b\n\x19RecordDataProductResponse\"|\n\x1fRecordDataProductVersionRequest\x12Y\n\x07version\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion\"\"\n RecordDataProductVersionResponse\"g\n\x14RecordAccountRequest\x12O\n\x07\x61\x63\x63ount\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account\"\x17\n\x15RecordAccountResponse\"\x18\n\x16RecordForecastResponse\"\x10\n\x0e\x44\x65leteResponse2\x99\x0b\n\x0f\x41rchivedService\x12\xa0\x01\n\x0bRecordModel\x12\x46.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest\x1aG.github.com.metaprov.modeldapi.services.archived.v1.RecordModelResponse\"\x00\x12\xa0\x01\n\x0bRecordStudy\x12\x46.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest\x1aG.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyResponse\"\x00\x12\xa6\x01\n\rRecordDataset\x12H.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest\x1aI.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetResponse\"\x00\x12\xc7\x01\n\x18RecordPredictionPipeline\x12S.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest\x1aT.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineResponse\"\x00\x12\xac\x01\n\x0fRecordPredictor\x12J.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest\x1aK.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorResponse\"\x00\x12\xae\x01\n\rRecordProduct\x12L.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest\x1aM.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductResponse\"\x00\x12\xc3\x01\n\x14RecordProductVersion\x12S.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest\x1aT.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionResponse\"\x00\x12\xa6\x01\n\rRecordAccount\x12H.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest\x1aI.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountResponse\"\x00\x42\x34Z2github.com/metaprov/modeldapi/services/archived/v1b\x06proto3'
  ,
  dependencies=[github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_RECORDMODELREQUEST = _descriptor.Descriptor(
  name='RecordModelRequest',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='model', full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.model', index=0,
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
  serialized_start=411,
  serialized_end=511,
)


_RECORDMODELRESPONSE = _descriptor.Descriptor(
  name='RecordModelResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordModelResponse',
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
  serialized_start=513,
  serialized_end=534,
)


_RECORDSTUDYREQUEST = _descriptor.Descriptor(
  name='RecordStudyRequest',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='study', full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.study', index=0,
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
  serialized_start=536,
  serialized_end=636,
)


_RECORDSTUDYRESPONSE = _descriptor.Descriptor(
  name='RecordStudyResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordStudyResponse',
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
  serialized_start=638,
  serialized_end=659,
)


_RECORDDATASETREQUEST = _descriptor.Descriptor(
  name='RecordDatasetRequest',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dataset', full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.dataset', index=0,
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
  serialized_start=661,
  serialized_end=763,
)


_RECORDDATASETRESPONSE = _descriptor.Descriptor(
  name='RecordDatasetResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetResponse',
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
  serialized_start=765,
  serialized_end=788,
)


_RECORDPREDICTIONPIPELINEREQUEST = _descriptor.Descriptor(
  name='RecordPredictionPipelineRequest',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='prediction', full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.prediction', index=0,
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
  serialized_start=791,
  serialized_end=923,
)


_RECORDPREDICTIONPIPELINERESPONSE = _descriptor.Descriptor(
  name='RecordPredictionPipelineResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineResponse',
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
  serialized_start=925,
  serialized_end=959,
)


_RECORDPREDICTORREQUEST = _descriptor.Descriptor(
  name='RecordPredictorRequest',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='predictor', full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.predictor', index=0,
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
  serialized_start=961,
  serialized_end=1074,
)


_RECORDPREDICTORRESPONSE = _descriptor.Descriptor(
  name='RecordPredictorResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorResponse',
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
  serialized_start=1076,
  serialized_end=1101,
)


_RECORDDATAPRODUCTREQUEST = _descriptor.Descriptor(
  name='RecordDataProductRequest',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='product', full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.product', index=0,
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
  serialized_start=1103,
  serialized_end=1213,
)


_RECORDDATAPRODUCTRESPONSE = _descriptor.Descriptor(
  name='RecordDataProductResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductResponse',
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
  serialized_start=1215,
  serialized_end=1242,
)


_RECORDDATAPRODUCTVERSIONREQUEST = _descriptor.Descriptor(
  name='RecordDataProductVersionRequest',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='version', full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.version', index=0,
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
  serialized_start=1244,
  serialized_end=1368,
)


_RECORDDATAPRODUCTVERSIONRESPONSE = _descriptor.Descriptor(
  name='RecordDataProductVersionResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionResponse',
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
  serialized_start=1370,
  serialized_end=1404,
)


_RECORDACCOUNTREQUEST = _descriptor.Descriptor(
  name='RecordAccountRequest',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='account', full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.account', index=0,
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
  serialized_start=1406,
  serialized_end=1509,
)


_RECORDACCOUNTRESPONSE = _descriptor.Descriptor(
  name='RecordAccountResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordAccountResponse',
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
  serialized_start=1511,
  serialized_end=1534,
)


_RECORDFORECASTRESPONSE = _descriptor.Descriptor(
  name='RecordForecastResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.RecordForecastResponse',
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
  serialized_start=1536,
  serialized_end=1560,
)


_DELETERESPONSE = _descriptor.Descriptor(
  name='DeleteResponse',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.DeleteResponse',
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
  serialized_start=1562,
  serialized_end=1578,
)

_RECORDMODELREQUEST.fields_by_name['model'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._MODEL
_RECORDSTUDYREQUEST.fields_by_name['study'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._STUDY
_RECORDDATASETREQUEST.fields_by_name['dataset'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATASET
_RECORDPREDICTIONPIPELINEREQUEST.fields_by_name['prediction'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._PREDICTIONPIPELINE
_RECORDPREDICTORREQUEST.fields_by_name['predictor'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._PREDICTOR
_RECORDDATAPRODUCTREQUEST.fields_by_name['product'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCT
_RECORDDATAPRODUCTVERSIONREQUEST.fields_by_name['version'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._DATAPRODUCTVERSION
_RECORDACCOUNTREQUEST.fields_by_name['account'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._ACCOUNT
DESCRIPTOR.message_types_by_name['RecordModelRequest'] = _RECORDMODELREQUEST
DESCRIPTOR.message_types_by_name['RecordModelResponse'] = _RECORDMODELRESPONSE
DESCRIPTOR.message_types_by_name['RecordStudyRequest'] = _RECORDSTUDYREQUEST
DESCRIPTOR.message_types_by_name['RecordStudyResponse'] = _RECORDSTUDYRESPONSE
DESCRIPTOR.message_types_by_name['RecordDatasetRequest'] = _RECORDDATASETREQUEST
DESCRIPTOR.message_types_by_name['RecordDatasetResponse'] = _RECORDDATASETRESPONSE
DESCRIPTOR.message_types_by_name['RecordPredictionPipelineRequest'] = _RECORDPREDICTIONPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['RecordPredictionPipelineResponse'] = _RECORDPREDICTIONPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['RecordPredictorRequest'] = _RECORDPREDICTORREQUEST
DESCRIPTOR.message_types_by_name['RecordPredictorResponse'] = _RECORDPREDICTORRESPONSE
DESCRIPTOR.message_types_by_name['RecordDataProductRequest'] = _RECORDDATAPRODUCTREQUEST
DESCRIPTOR.message_types_by_name['RecordDataProductResponse'] = _RECORDDATAPRODUCTRESPONSE
DESCRIPTOR.message_types_by_name['RecordDataProductVersionRequest'] = _RECORDDATAPRODUCTVERSIONREQUEST
DESCRIPTOR.message_types_by_name['RecordDataProductVersionResponse'] = _RECORDDATAPRODUCTVERSIONRESPONSE
DESCRIPTOR.message_types_by_name['RecordAccountRequest'] = _RECORDACCOUNTREQUEST
DESCRIPTOR.message_types_by_name['RecordAccountResponse'] = _RECORDACCOUNTRESPONSE
DESCRIPTOR.message_types_by_name['RecordForecastResponse'] = _RECORDFORECASTRESPONSE
DESCRIPTOR.message_types_by_name['DeleteResponse'] = _DELETERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

RecordModelRequest = _reflection.GeneratedProtocolMessageType('RecordModelRequest', (_message.Message,), {
  'DESCRIPTOR' : _RECORDMODELREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest)
  })
_sym_db.RegisterMessage(RecordModelRequest)

RecordModelResponse = _reflection.GeneratedProtocolMessageType('RecordModelResponse', (_message.Message,), {
  'DESCRIPTOR' : _RECORDMODELRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordModelResponse)
  })
_sym_db.RegisterMessage(RecordModelResponse)

RecordStudyRequest = _reflection.GeneratedProtocolMessageType('RecordStudyRequest', (_message.Message,), {
  'DESCRIPTOR' : _RECORDSTUDYREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest)
  })
_sym_db.RegisterMessage(RecordStudyRequest)

RecordStudyResponse = _reflection.GeneratedProtocolMessageType('RecordStudyResponse', (_message.Message,), {
  'DESCRIPTOR' : _RECORDSTUDYRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordStudyResponse)
  })
_sym_db.RegisterMessage(RecordStudyResponse)

RecordDatasetRequest = _reflection.GeneratedProtocolMessageType('RecordDatasetRequest', (_message.Message,), {
  'DESCRIPTOR' : _RECORDDATASETREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest)
  })
_sym_db.RegisterMessage(RecordDatasetRequest)

RecordDatasetResponse = _reflection.GeneratedProtocolMessageType('RecordDatasetResponse', (_message.Message,), {
  'DESCRIPTOR' : _RECORDDATASETRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetResponse)
  })
_sym_db.RegisterMessage(RecordDatasetResponse)

RecordPredictionPipelineRequest = _reflection.GeneratedProtocolMessageType('RecordPredictionPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _RECORDPREDICTIONPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest)
  })
_sym_db.RegisterMessage(RecordPredictionPipelineRequest)

RecordPredictionPipelineResponse = _reflection.GeneratedProtocolMessageType('RecordPredictionPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _RECORDPREDICTIONPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineResponse)
  })
_sym_db.RegisterMessage(RecordPredictionPipelineResponse)

RecordPredictorRequest = _reflection.GeneratedProtocolMessageType('RecordPredictorRequest', (_message.Message,), {
  'DESCRIPTOR' : _RECORDPREDICTORREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest)
  })
_sym_db.RegisterMessage(RecordPredictorRequest)

RecordPredictorResponse = _reflection.GeneratedProtocolMessageType('RecordPredictorResponse', (_message.Message,), {
  'DESCRIPTOR' : _RECORDPREDICTORRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorResponse)
  })
_sym_db.RegisterMessage(RecordPredictorResponse)

RecordDataProductRequest = _reflection.GeneratedProtocolMessageType('RecordDataProductRequest', (_message.Message,), {
  'DESCRIPTOR' : _RECORDDATAPRODUCTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest)
  })
_sym_db.RegisterMessage(RecordDataProductRequest)

RecordDataProductResponse = _reflection.GeneratedProtocolMessageType('RecordDataProductResponse', (_message.Message,), {
  'DESCRIPTOR' : _RECORDDATAPRODUCTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductResponse)
  })
_sym_db.RegisterMessage(RecordDataProductResponse)

RecordDataProductVersionRequest = _reflection.GeneratedProtocolMessageType('RecordDataProductVersionRequest', (_message.Message,), {
  'DESCRIPTOR' : _RECORDDATAPRODUCTVERSIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest)
  })
_sym_db.RegisterMessage(RecordDataProductVersionRequest)

RecordDataProductVersionResponse = _reflection.GeneratedProtocolMessageType('RecordDataProductVersionResponse', (_message.Message,), {
  'DESCRIPTOR' : _RECORDDATAPRODUCTVERSIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionResponse)
  })
_sym_db.RegisterMessage(RecordDataProductVersionResponse)

RecordAccountRequest = _reflection.GeneratedProtocolMessageType('RecordAccountRequest', (_message.Message,), {
  'DESCRIPTOR' : _RECORDACCOUNTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest)
  })
_sym_db.RegisterMessage(RecordAccountRequest)

RecordAccountResponse = _reflection.GeneratedProtocolMessageType('RecordAccountResponse', (_message.Message,), {
  'DESCRIPTOR' : _RECORDACCOUNTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordAccountResponse)
  })
_sym_db.RegisterMessage(RecordAccountResponse)

RecordForecastResponse = _reflection.GeneratedProtocolMessageType('RecordForecastResponse', (_message.Message,), {
  'DESCRIPTOR' : _RECORDFORECASTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.RecordForecastResponse)
  })
_sym_db.RegisterMessage(RecordForecastResponse)

DeleteResponse = _reflection.GeneratedProtocolMessageType('DeleteResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.archived.v1.archived_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.archived.v1.DeleteResponse)
  })
_sym_db.RegisterMessage(DeleteResponse)


DESCRIPTOR._options = None

_ARCHIVEDSERVICE = _descriptor.ServiceDescriptor(
  name='ArchivedService',
  full_name='github.com.metaprov.modeldapi.services.archived.v1.ArchivedService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1581,
  serialized_end=3014,
  methods=[
  _descriptor.MethodDescriptor(
    name='RecordModel',
    full_name='github.com.metaprov.modeldapi.services.archived.v1.ArchivedService.RecordModel',
    index=0,
    containing_service=None,
    input_type=_RECORDMODELREQUEST,
    output_type=_RECORDMODELRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RecordStudy',
    full_name='github.com.metaprov.modeldapi.services.archived.v1.ArchivedService.RecordStudy',
    index=1,
    containing_service=None,
    input_type=_RECORDSTUDYREQUEST,
    output_type=_RECORDSTUDYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RecordDataset',
    full_name='github.com.metaprov.modeldapi.services.archived.v1.ArchivedService.RecordDataset',
    index=2,
    containing_service=None,
    input_type=_RECORDDATASETREQUEST,
    output_type=_RECORDDATASETRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RecordPredictionPipeline',
    full_name='github.com.metaprov.modeldapi.services.archived.v1.ArchivedService.RecordPredictionPipeline',
    index=3,
    containing_service=None,
    input_type=_RECORDPREDICTIONPIPELINEREQUEST,
    output_type=_RECORDPREDICTIONPIPELINERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RecordPredictor',
    full_name='github.com.metaprov.modeldapi.services.archived.v1.ArchivedService.RecordPredictor',
    index=4,
    containing_service=None,
    input_type=_RECORDPREDICTORREQUEST,
    output_type=_RECORDPREDICTORRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RecordProduct',
    full_name='github.com.metaprov.modeldapi.services.archived.v1.ArchivedService.RecordProduct',
    index=5,
    containing_service=None,
    input_type=_RECORDDATAPRODUCTREQUEST,
    output_type=_RECORDDATAPRODUCTRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RecordProductVersion',
    full_name='github.com.metaprov.modeldapi.services.archived.v1.ArchivedService.RecordProductVersion',
    index=6,
    containing_service=None,
    input_type=_RECORDDATAPRODUCTVERSIONREQUEST,
    output_type=_RECORDDATAPRODUCTVERSIONRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RecordAccount',
    full_name='github.com.metaprov.modeldapi.services.archived.v1.ArchivedService.RecordAccount',
    index=7,
    containing_service=None,
    input_type=_RECORDACCOUNTREQUEST,
    output_type=_RECORDACCOUNTRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_ARCHIVEDSERVICE)

DESCRIPTOR.services_by_name['ArchivedService'] = _ARCHIVEDSERVICE

# @@protoc_insertion_point(module_scope)
