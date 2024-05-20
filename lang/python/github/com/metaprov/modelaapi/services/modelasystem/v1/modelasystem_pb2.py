# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/modelasystem/v1/modelasystem.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2
from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nIgithub.com/metaprov/modelaapi/services/modelasystem/v1/modelasystem.proto\x12\x36github.com.metaprov.modelaapi.services.modelasystem.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\x1a google/protobuf/field_mask.proto\"Y\n\x16\x44ownloadLogFileRequest\x12\x0e\n\x06tenant\x18\x01 \x01(\t\x12\x11\n\tnamespace\x18\x02 \x01(\t\x12\x0e\n\x06\x62ucket\x18\x03 \x01(\t\x12\x0c\n\x04path\x18\x04 \x01(\t\")\n\x17\x44ownloadLogFileResponse\x12\x0e\n\x06result\x18\x01 \x01(\x0c\"H\n\x15\x42\x61\x63kupDatabaseRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0e\n\x06\x62ucket\x18\x02 \x01(\t\x12\x0c\n\x04path\x18\x03 \x01(\t\"&\n\x16\x42\x61\x63kupDatabaseResponse\x12\x0c\n\x04path\x18\x01 \x01(\t\"D\n\x11\x42\x61\x63kupEtcdRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0e\n\x06\x62ucket\x18\x02 \x01(\t\x12\x0c\n\x04path\x18\x03 \x01(\t\"\"\n\x12\x42\x61\x63kupEtcdResponse\x12\x0c\n\x04path\x18\x01 \x01(\t2\x8a\x05\n\x13ModelaSystemService\x12\xd4\x01\n\x0f\x44ownloadLogfile\x12N.github.com.metaprov.modelaapi.services.modelasystem.v1.DownloadLogFileRequest\x1aO.github.com.metaprov.modelaapi.services.modelasystem.v1.DownloadLogFileResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/download/{namespace}\x12\xd1\x01\n\x0e\x42\x61\x63kupDatabase\x12M.github.com.metaprov.modelaapi.services.modelasystem.v1.BackupDatabaseRequest\x1aN.github.com.metaprov.modelaapi.services.modelasystem.v1.BackupDatabaseResponse\" \x82\xd3\xe4\x93\x02\x1a\"\x18/v1/backupdb/{namespace}\x12\xc7\x01\n\nBackupEtcd\x12I.github.com.metaprov.modelaapi.services.modelasystem.v1.BackupEtcdRequest\x1aJ.github.com.metaprov.modelaapi.services.modelasystem.v1.BackupEtcdResponse\"\"\x82\xd3\xe4\x93\x02\x1c\"\x1a/v1/backupetcd/{namespace}B8Z6github.com/metaprov/modelaapi/services/modelasystem/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.modelasystem.v1.modelasystem_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z6github.com/metaprov/modelaapi/services/modelasystem/v1'
  _globals['_MODELASYSTEMSERVICE'].methods_by_name['DownloadLogfile']._options = None
  _globals['_MODELASYSTEMSERVICE'].methods_by_name['DownloadLogfile']._serialized_options = b'\202\323\344\223\002\032\022\030/v1/download/{namespace}'
  _globals['_MODELASYSTEMSERVICE'].methods_by_name['BackupDatabase']._options = None
  _globals['_MODELASYSTEMSERVICE'].methods_by_name['BackupDatabase']._serialized_options = b'\202\323\344\223\002\032\"\030/v1/backupdb/{namespace}'
  _globals['_MODELASYSTEMSERVICE'].methods_by_name['BackupEtcd']._options = None
  _globals['_MODELASYSTEMSERVICE'].methods_by_name['BackupEtcd']._serialized_options = b'\202\323\344\223\002\034\"\032/v1/backupetcd/{namespace}'
  _globals['_DOWNLOADLOGFILEREQUEST']._serialized_start=331
  _globals['_DOWNLOADLOGFILEREQUEST']._serialized_end=420
  _globals['_DOWNLOADLOGFILERESPONSE']._serialized_start=422
  _globals['_DOWNLOADLOGFILERESPONSE']._serialized_end=463
  _globals['_BACKUPDATABASEREQUEST']._serialized_start=465
  _globals['_BACKUPDATABASEREQUEST']._serialized_end=537
  _globals['_BACKUPDATABASERESPONSE']._serialized_start=539
  _globals['_BACKUPDATABASERESPONSE']._serialized_end=577
  _globals['_BACKUPETCDREQUEST']._serialized_start=579
  _globals['_BACKUPETCDREQUEST']._serialized_end=647
  _globals['_BACKUPETCDRESPONSE']._serialized_start=649
  _globals['_BACKUPETCDRESPONSE']._serialized_end=683
  _globals['_MODELASYSTEMSERVICE']._serialized_start=686
  _globals['_MODELASYSTEMSERVICE']._serialized_end=1336
# @@protoc_insertion_point(module_scope)
