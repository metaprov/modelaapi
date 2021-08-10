# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/prediction/v1/prediction.proto
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
  name='github.com/metaprov/modeldapi/services/prediction/v1/prediction.proto',
  package='github.com.metaprov.modeldapi.services.prediction.v1',
  syntax='proto3',
  serialized_options=b'Z4github.com/metaprov/modeldapi/services/prediction/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nEgithub.com/metaprov/modeldapi/services/prediction/v1/prediction.proto\x12\x34github.com.metaprov.modeldapi.services.prediction.v1\x1a\x1cgoogle/api/annotations.proto\x1aIgithub.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated.proto\"\xd2\x01\n\x16ListPredictionsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12h\n\x06labels\x18\x03 \x03(\x0b\x32X.github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"s\n\x17ListPredictionsResponse\x12X\n\x05items\x18\x01 \x01(\x0b\x32I.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList\"\x1a\n\x18\x43reatePredictionResponse\"n\n\x17\x43reatePredictionRequest\x12S\n\x04item\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction\"n\n\x17UpdatePredictionRequest\x12S\n\x04item\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction\"\x1a\n\x18UpdatePredictionResponse\"7\n\x14GetPredictionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"z\n\x15GetPredictionResponse\x12S\n\x04item\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction\x12\x0c\n\x04yaml\x18\x02 \x01(\t\":\n\x17\x44\x65letePredictionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1a\n\x18\x44\x65letePredictionResponse\"<\n\x19\x44ownloadPredictionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\")\n\x1a\x44ownloadPredictionResponse\x12\x0b\n\x03raw\x18\x01 \x01(\x0c\"9\n\x16\x41\x62ortPredictionRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x19\n\x17\x41\x62ortPredictionResponse2\xb4\x0c\n\x11PredictionService\x12\xc7\x01\n\x0fListPredictions\x12L.github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest\x1aM.github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsResponse\"\x17\x82\xd3\xe4\x93\x02\x11\x12\x0f/v1/predictions\x12\xcd\x01\n\x10\x43reatePrediction\x12M.github.com.metaprov.modeldapi.services.prediction.v1.CreatePredictionRequest\x1aN.github.com.metaprov.modeldapi.services.prediction.v1.CreatePredictionResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\"\x0f/v1/predictions:\x01*\x12\xd4\x01\n\rGetPrediction\x12J.github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionRequest\x1aK.github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/v1/{namespace}/predictions/{name}\x12\x87\x02\n\x10UpdatePrediction\x12M.github.com.metaprov.modeldapi.services.prediction.v1.UpdatePredictionRequest\x1aN.github.com.metaprov.modeldapi.services.prediction.v1.UpdatePredictionResponse\"T\x82\xd3\xe4\x93\x02N\x1aI/v1/{prediction.metadata.namespace}predictions/{prediction.metadata.name}:\x01*\x12\xd1\x01\n\x10\x44\x65letePrediction\x12M.github.com.metaprov.modeldapi.services.prediction.v1.DeletePredictionRequest\x1aN.github.com.metaprov.modeldapi.services.prediction.v1.DeletePredictionResponse\"\x1e\x82\xd3\xe4\x93\x02\x18*\x16/v1/predictions/{name}\x12\xec\x01\n\x08\x44ownload\x12O.github.com.metaprov.modeldapi.services.prediction.v1.DownloadPredictionRequest\x1aP.github.com.metaprov.modeldapi.services.prediction.v1.DownloadPredictionResponse\"=\x82\xd3\xe4\x93\x02\x37\x12\x35/api/v1alpha1/{namespace}/predictions/{name}:download\x12\xe0\x01\n\x05\x41\x62ort\x12L.github.com.metaprov.modeldapi.services.prediction.v1.AbortPredictionRequest\x1aM.github.com.metaprov.modeldapi.services.prediction.v1.AbortPredictionResponse\":\x82\xd3\xe4\x93\x02\x34\"2/api/v1alpha1/{namespace}/predictions/{name}:abortB6Z4github.com/metaprov/modeldapi/services/prediction/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTPREDICTIONSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest.LabelsEntry.value', index=1,
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
  serialized_start=398,
  serialized_end=443,
)

_LISTPREDICTIONSREQUEST = _descriptor.Descriptor(
  name='ListPredictionsRequest',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTPREDICTIONSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=233,
  serialized_end=443,
)


_LISTPREDICTIONSRESPONSE = _descriptor.Descriptor(
  name='ListPredictionsResponse',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsResponse.items', index=0,
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
  serialized_start=445,
  serialized_end=560,
)


_CREATEPREDICTIONRESPONSE = _descriptor.Descriptor(
  name='CreatePredictionResponse',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.CreatePredictionResponse',
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
  serialized_start=562,
  serialized_end=588,
)


_CREATEPREDICTIONREQUEST = _descriptor.Descriptor(
  name='CreatePredictionRequest',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.CreatePredictionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.prediction.v1.CreatePredictionRequest.item', index=0,
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
  serialized_start=590,
  serialized_end=700,
)


_UPDATEPREDICTIONREQUEST = _descriptor.Descriptor(
  name='UpdatePredictionRequest',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.UpdatePredictionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.prediction.v1.UpdatePredictionRequest.item', index=0,
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
  serialized_start=702,
  serialized_end=812,
)


_UPDATEPREDICTIONRESPONSE = _descriptor.Descriptor(
  name='UpdatePredictionResponse',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.UpdatePredictionResponse',
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
  serialized_start=814,
  serialized_end=840,
)


_GETPREDICTIONREQUEST = _descriptor.Descriptor(
  name='GetPredictionRequest',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionRequest.name', index=1,
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
  serialized_start=842,
  serialized_end=897,
)


_GETPREDICTIONRESPONSE = _descriptor.Descriptor(
  name='GetPredictionResponse',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionResponse.yaml', index=1,
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
  serialized_start=899,
  serialized_end=1021,
)


_DELETEPREDICTIONREQUEST = _descriptor.Descriptor(
  name='DeletePredictionRequest',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.DeletePredictionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.prediction.v1.DeletePredictionRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.prediction.v1.DeletePredictionRequest.name', index=1,
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
  serialized_start=1023,
  serialized_end=1081,
)


_DELETEPREDICTIONRESPONSE = _descriptor.Descriptor(
  name='DeletePredictionResponse',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.DeletePredictionResponse',
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
  serialized_start=1083,
  serialized_end=1109,
)


_DOWNLOADPREDICTIONREQUEST = _descriptor.Descriptor(
  name='DownloadPredictionRequest',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.DownloadPredictionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.prediction.v1.DownloadPredictionRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.prediction.v1.DownloadPredictionRequest.name', index=1,
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
  serialized_start=1111,
  serialized_end=1171,
)


_DOWNLOADPREDICTIONRESPONSE = _descriptor.Descriptor(
  name='DownloadPredictionResponse',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.DownloadPredictionResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='raw', full_name='github.com.metaprov.modeldapi.services.prediction.v1.DownloadPredictionResponse.raw', index=0,
      number=1, type=12, cpp_type=9, label=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1173,
  serialized_end=1214,
)


_ABORTPREDICTIONREQUEST = _descriptor.Descriptor(
  name='AbortPredictionRequest',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.AbortPredictionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.prediction.v1.AbortPredictionRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.prediction.v1.AbortPredictionRequest.name', index=1,
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
  serialized_start=1216,
  serialized_end=1273,
)


_ABORTPREDICTIONRESPONSE = _descriptor.Descriptor(
  name='AbortPredictionResponse',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.AbortPredictionResponse',
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
  serialized_start=1275,
  serialized_end=1300,
)

_LISTPREDICTIONSREQUEST_LABELSENTRY.containing_type = _LISTPREDICTIONSREQUEST
_LISTPREDICTIONSREQUEST.fields_by_name['labels'].message_type = _LISTPREDICTIONSREQUEST_LABELSENTRY
_LISTPREDICTIONSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._PREDICTIONLIST
_CREATEPREDICTIONREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._PREDICTION
_UPDATEPREDICTIONREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._PREDICTION
_GETPREDICTIONRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2._PREDICTION
DESCRIPTOR.message_types_by_name['ListPredictionsRequest'] = _LISTPREDICTIONSREQUEST
DESCRIPTOR.message_types_by_name['ListPredictionsResponse'] = _LISTPREDICTIONSRESPONSE
DESCRIPTOR.message_types_by_name['CreatePredictionResponse'] = _CREATEPREDICTIONRESPONSE
DESCRIPTOR.message_types_by_name['CreatePredictionRequest'] = _CREATEPREDICTIONREQUEST
DESCRIPTOR.message_types_by_name['UpdatePredictionRequest'] = _UPDATEPREDICTIONREQUEST
DESCRIPTOR.message_types_by_name['UpdatePredictionResponse'] = _UPDATEPREDICTIONRESPONSE
DESCRIPTOR.message_types_by_name['GetPredictionRequest'] = _GETPREDICTIONREQUEST
DESCRIPTOR.message_types_by_name['GetPredictionResponse'] = _GETPREDICTIONRESPONSE
DESCRIPTOR.message_types_by_name['DeletePredictionRequest'] = _DELETEPREDICTIONREQUEST
DESCRIPTOR.message_types_by_name['DeletePredictionResponse'] = _DELETEPREDICTIONRESPONSE
DESCRIPTOR.message_types_by_name['DownloadPredictionRequest'] = _DOWNLOADPREDICTIONREQUEST
DESCRIPTOR.message_types_by_name['DownloadPredictionResponse'] = _DOWNLOADPREDICTIONRESPONSE
DESCRIPTOR.message_types_by_name['AbortPredictionRequest'] = _ABORTPREDICTIONREQUEST
DESCRIPTOR.message_types_by_name['AbortPredictionResponse'] = _ABORTPREDICTIONRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListPredictionsRequest = _reflection.GeneratedProtocolMessageType('ListPredictionsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTPREDICTIONSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTPREDICTIONSREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsRequest)
  })
_sym_db.RegisterMessage(ListPredictionsRequest)
_sym_db.RegisterMessage(ListPredictionsRequest.LabelsEntry)

ListPredictionsResponse = _reflection.GeneratedProtocolMessageType('ListPredictionsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTPREDICTIONSRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.ListPredictionsResponse)
  })
_sym_db.RegisterMessage(ListPredictionsResponse)

CreatePredictionResponse = _reflection.GeneratedProtocolMessageType('CreatePredictionResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEPREDICTIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.CreatePredictionResponse)
  })
_sym_db.RegisterMessage(CreatePredictionResponse)

CreatePredictionRequest = _reflection.GeneratedProtocolMessageType('CreatePredictionRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEPREDICTIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.CreatePredictionRequest)
  })
_sym_db.RegisterMessage(CreatePredictionRequest)

UpdatePredictionRequest = _reflection.GeneratedProtocolMessageType('UpdatePredictionRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEPREDICTIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.UpdatePredictionRequest)
  })
_sym_db.RegisterMessage(UpdatePredictionRequest)

UpdatePredictionResponse = _reflection.GeneratedProtocolMessageType('UpdatePredictionResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEPREDICTIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.UpdatePredictionResponse)
  })
_sym_db.RegisterMessage(UpdatePredictionResponse)

GetPredictionRequest = _reflection.GeneratedProtocolMessageType('GetPredictionRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETPREDICTIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionRequest)
  })
_sym_db.RegisterMessage(GetPredictionRequest)

GetPredictionResponse = _reflection.GeneratedProtocolMessageType('GetPredictionResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETPREDICTIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.GetPredictionResponse)
  })
_sym_db.RegisterMessage(GetPredictionResponse)

DeletePredictionRequest = _reflection.GeneratedProtocolMessageType('DeletePredictionRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEPREDICTIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.DeletePredictionRequest)
  })
_sym_db.RegisterMessage(DeletePredictionRequest)

DeletePredictionResponse = _reflection.GeneratedProtocolMessageType('DeletePredictionResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEPREDICTIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.DeletePredictionResponse)
  })
_sym_db.RegisterMessage(DeletePredictionResponse)

DownloadPredictionRequest = _reflection.GeneratedProtocolMessageType('DownloadPredictionRequest', (_message.Message,), {
  'DESCRIPTOR' : _DOWNLOADPREDICTIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.DownloadPredictionRequest)
  })
_sym_db.RegisterMessage(DownloadPredictionRequest)

DownloadPredictionResponse = _reflection.GeneratedProtocolMessageType('DownloadPredictionResponse', (_message.Message,), {
  'DESCRIPTOR' : _DOWNLOADPREDICTIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.DownloadPredictionResponse)
  })
_sym_db.RegisterMessage(DownloadPredictionResponse)

AbortPredictionRequest = _reflection.GeneratedProtocolMessageType('AbortPredictionRequest', (_message.Message,), {
  'DESCRIPTOR' : _ABORTPREDICTIONREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.AbortPredictionRequest)
  })
_sym_db.RegisterMessage(AbortPredictionRequest)

AbortPredictionResponse = _reflection.GeneratedProtocolMessageType('AbortPredictionResponse', (_message.Message,), {
  'DESCRIPTOR' : _ABORTPREDICTIONRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.prediction.v1.prediction_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.prediction.v1.AbortPredictionResponse)
  })
_sym_db.RegisterMessage(AbortPredictionResponse)


DESCRIPTOR._options = None
_LISTPREDICTIONSREQUEST_LABELSENTRY._options = None

_PREDICTIONSERVICE = _descriptor.ServiceDescriptor(
  name='PredictionService',
  full_name='github.com.metaprov.modeldapi.services.prediction.v1.PredictionService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1303,
  serialized_end=2891,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListPredictions',
    full_name='github.com.metaprov.modeldapi.services.prediction.v1.PredictionService.ListPredictions',
    index=0,
    containing_service=None,
    input_type=_LISTPREDICTIONSREQUEST,
    output_type=_LISTPREDICTIONSRESPONSE,
    serialized_options=b'\202\323\344\223\002\021\022\017/v1/predictions',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreatePrediction',
    full_name='github.com.metaprov.modeldapi.services.prediction.v1.PredictionService.CreatePrediction',
    index=1,
    containing_service=None,
    input_type=_CREATEPREDICTIONREQUEST,
    output_type=_CREATEPREDICTIONRESPONSE,
    serialized_options=b'\202\323\344\223\002\024\"\017/v1/predictions:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetPrediction',
    full_name='github.com.metaprov.modeldapi.services.prediction.v1.PredictionService.GetPrediction',
    index=2,
    containing_service=None,
    input_type=_GETPREDICTIONREQUEST,
    output_type=_GETPREDICTIONRESPONSE,
    serialized_options=b'\202\323\344\223\002$\022\"/v1/{namespace}/predictions/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdatePrediction',
    full_name='github.com.metaprov.modeldapi.services.prediction.v1.PredictionService.UpdatePrediction',
    index=3,
    containing_service=None,
    input_type=_UPDATEPREDICTIONREQUEST,
    output_type=_UPDATEPREDICTIONRESPONSE,
    serialized_options=b'\202\323\344\223\002N\032I/v1/{prediction.metadata.namespace}predictions/{prediction.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeletePrediction',
    full_name='github.com.metaprov.modeldapi.services.prediction.v1.PredictionService.DeletePrediction',
    index=4,
    containing_service=None,
    input_type=_DELETEPREDICTIONREQUEST,
    output_type=_DELETEPREDICTIONRESPONSE,
    serialized_options=b'\202\323\344\223\002\030*\026/v1/predictions/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Download',
    full_name='github.com.metaprov.modeldapi.services.prediction.v1.PredictionService.Download',
    index=5,
    containing_service=None,
    input_type=_DOWNLOADPREDICTIONREQUEST,
    output_type=_DOWNLOADPREDICTIONRESPONSE,
    serialized_options=b'\202\323\344\223\0027\0225/api/v1alpha1/{namespace}/predictions/{name}:download',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Abort',
    full_name='github.com.metaprov.modeldapi.services.prediction.v1.PredictionService.Abort',
    index=6,
    containing_service=None,
    input_type=_ABORTPREDICTIONREQUEST,
    output_type=_ABORTPREDICTIONRESPONSE,
    serialized_options=b'\202\323\344\223\0024\"2/api/v1alpha1/{namespace}/predictions/{name}:abort',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_PREDICTIONSERVICE)

DESCRIPTOR.services_by_name['PredictionService'] = _PREDICTIONSERVICE

# @@protoc_insertion_point(module_scope)
