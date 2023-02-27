# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/batchpredictord/v1/batchpredictord.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_inference_dot_v1alpha1_dot_generated__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nOgithub.com/metaprov/modelaapi/services/batchpredictord/v1/batchpredictord.proto\x12\x39github.com.metaprov.modelaapi.services.batchpredictord.v1\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\x1aIgithub.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated.proto\x1a\x1bgoogle/protobuf/empty.proto\"\xb8\x03\n\x13\x42\x61tchPredictRequest\x12Y\n\nprediction\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction\x12T\n\x06\x62ucket\x18\x02 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12U\n\nconnection\x18\x03 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12j\n\x06secret\x18\x04 \x03(\x0b\x32Z.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest.SecretEntry\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\xe0\x06\n\x15\x42\x61tchPredictMCRequest\x12Y\n\nprediction\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction\x12T\n\x06\x62ucket\x18\x02 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12U\n\nconnection\x18\x03 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12l\n\x06secret\x18\x04 \x03(\x0b\x32\\.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictMCRequest.SecretEntry\x12T\n\ndatasource\x18\x05 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x05model\x18\x06 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12X\n\nmodelclass\x18\x07 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass\x12N\n\x08\x65ntities\x18\x08 \x03(\x0b\x32<.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity\x12R\n\x06groups\x18\t \x03(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"1\n\x14\x42\x61tchPredictResponse\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x0c\n\x04rows\x18\x02 \x01(\x05\"\x11\n\x0fShutdownRequest\"\x12\n\x10ShutdownResponse2\x9b\x04\n\x05\x42\x61tch\x12\xb1\x01\n\x0c\x42\x61tchPredict\x12N.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictRequest\x1aO.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictResponse\"\x00\x12\xb5\x01\n\x0e\x42\x61tchPredictMC\x12P.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictMCRequest\x1aO.github.com.metaprov.modelaapi.services.batchpredictord.v1.BatchPredictResponse\"\x00\x12\xa5\x01\n\x08Shutdown\x12J.github.com.metaprov.modelaapi.services.batchpredictord.v1.ShutdownRequest\x1aK.github.com.metaprov.modelaapi.services.batchpredictord.v1.ShutdownResponse\"\x00\x42;Z9github.com/metaprov/modelaapi/services/batchpredictord/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.batchpredictord.v1.batchpredictord_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z9github.com/metaprov/modelaapi/services/batchpredictord/v1'
  _BATCHPREDICTREQUEST_SECRETENTRY._options = None
  _BATCHPREDICTREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _BATCHPREDICTMCREQUEST_SECRETENTRY._options = None
  _BATCHPREDICTMCREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _BATCHPREDICTREQUEST._serialized_start=462
  _BATCHPREDICTREQUEST._serialized_end=902
  _BATCHPREDICTREQUEST_SECRETENTRY._serialized_start=857
  _BATCHPREDICTREQUEST_SECRETENTRY._serialized_end=902
  _BATCHPREDICTMCREQUEST._serialized_start=905
  _BATCHPREDICTMCREQUEST._serialized_end=1769
  _BATCHPREDICTMCREQUEST_SECRETENTRY._serialized_start=857
  _BATCHPREDICTMCREQUEST_SECRETENTRY._serialized_end=902
  _BATCHPREDICTRESPONSE._serialized_start=1771
  _BATCHPREDICTRESPONSE._serialized_end=1820
  _SHUTDOWNREQUEST._serialized_start=1822
  _SHUTDOWNREQUEST._serialized_end=1839
  _SHUTDOWNRESPONSE._serialized_start=1841
  _SHUTDOWNRESPONSE._serialized_end=1859
  _BATCH._serialized_start=1862
  _BATCH._serialized_end=2401
# @@protoc_insertion_point(module_scope)
