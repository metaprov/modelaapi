# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/offlinefeaturestored/v1/offlinefeaturestored.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nYgithub.com/metaprov/modelaapi/services/offlinefeaturestored/v1/offlinefeaturestored.proto\x12>github.com.metaprov.modelaapi.services.offlinefeaturestored.v1\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\"u\n\x1eGenerateTrainingDatasetRequest\x12S\n\x05model\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass\"/\n\x1fGenerateTrainingDatasetResponse\x12\x0c\n\x04path\x18\x01 \x01(\t\"\r\n\x0bSyncRequest\"\x0e\n\x0cSyncResponse2\xa1\x03\n\x1aOfflineFeatureStoreService\x12\xa3\x01\n\x04Sync\x12K.github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.SyncRequest\x1aL.github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.SyncResponse\"\x00\x12\xdc\x01\n\x17GenerateTrainingDataset\x12^.github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.GenerateTrainingDatasetRequest\x1a_.github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.GenerateTrainingDatasetResponse\"\x00\x42@Z>github.com/metaprov/modelaapi/services/offlinefeaturestored/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.offlinefeaturestored_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z>github.com/metaprov/modelaapi/services/offlinefeaturestored/v1'
  _globals['_GENERATETRAININGDATASETREQUEST']._serialized_start=372
  _globals['_GENERATETRAININGDATASETREQUEST']._serialized_end=489
  _globals['_GENERATETRAININGDATASETRESPONSE']._serialized_start=491
  _globals['_GENERATETRAININGDATASETRESPONSE']._serialized_end=538
  _globals['_SYNCREQUEST']._serialized_start=540
  _globals['_SYNCREQUEST']._serialized_end=553
  _globals['_SYNCRESPONSE']._serialized_start=555
  _globals['_SYNCRESPONSE']._serialized_end=569
  _globals['_OFFLINEFEATURESTORESERVICE']._serialized_start=572
  _globals['_OFFLINEFEATURESTORESERVICE']._serialized_end=989
# @@protoc_insertion_point(module_scope)
