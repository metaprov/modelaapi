# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/publisherd/v1/publisherd.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nEgithub.com/metaprov/modelaapi/services/publisherd/v1/publisherd.proto\x12\x34github.com.metaprov.modelaapi.services.publisherd.v1\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\"\xe9\t\n\x13PublishModelRequest\x12V\n\x0b\x64\x61taproduct\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12\x64\n\x12\x64\x61taproductversion\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12N\n\x05model\x18\x03 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x04 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x05 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\x06 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12\x10\n\x08provider\x18\x07 \x01(\t\x12\x11\n\timagename\x18\x08 \x01(\t\x12\x1c\n\x14imagenameWithVersion\x18\t \x01(\t\x12\x0c\n\x04push\x18\n \x01(\x08\x12T\n\x06\x62ucket\x18\x0b \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12T\n\tcloudConn\x18\x0c \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12o\n\x0b\x63loudSecret\x18\r \x03(\x0b\x32Z.github.com.metaprov.modelaapi.services.publisherd.v1.PublishModelRequest.CloudSecretEntry\x12[\n\x10\x64ockerConnection\x18\x0e \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12\x81\x01\n\x14\x64ockerRegistrySecret\x18\x0f \x03(\x0b\x32\x63.github.com.metaprov.modelaapi.services.publisherd.v1.PublishModelRequest.DockerRegistrySecretEntry\x12\x0e\n\x06kaniko\x18\x13 \x01(\x08\x1a\x32\n\x10\x43loudSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\x1a;\n\x19\x44ockerRegistrySecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"7\n\x14PublishModelResponse\x12\x11\n\tImageName\x18\x01 \x01(\t\x12\x0c\n\x04hash\x18\x02 \x01(\t\"\xea\x06\n\x13PackageModelRequest\x12V\n\x0b\x64\x61taproduct\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12\x64\n\x12\x64\x61taproductversion\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12N\n\x05model\x18\x03 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x04 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x05 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\x06 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12T\n\x06\x62ucket\x18\x07 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12T\n\tcloudConn\x18\x08 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12o\n\x0b\x63loudSecret\x18\t \x03(\x0b\x32Z.github.com.metaprov.modelaapi.services.publisherd.v1.PackageModelRequest.CloudSecretEntry\x1a\x32\n\x10\x43loudSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"4\n\x14PackageModelResponse\x12\x0e\n\x06tarUri\x18\x01 \x01(\t\x12\x0c\n\x04hash\x18\x02 \x01(\t\"\x11\n\x0fShutdownRequest\"\x12\n\x10ShutdownResponse2\x85\x04\n\x11PublisherdService\x12\xa7\x01\n\x0cPackageModel\x12I.github.com.metaprov.modelaapi.services.publisherd.v1.PackageModelRequest\x1aJ.github.com.metaprov.modelaapi.services.publisherd.v1.PackageModelResponse\"\x00\x12\xa7\x01\n\x0cPublishModel\x12I.github.com.metaprov.modelaapi.services.publisherd.v1.PublishModelRequest\x1aJ.github.com.metaprov.modelaapi.services.publisherd.v1.PublishModelResponse\"\x00\x12\x9b\x01\n\x08Shutdown\x12\x45.github.com.metaprov.modelaapi.services.publisherd.v1.ShutdownRequest\x1a\x46.github.com.metaprov.modelaapi.services.publisherd.v1.ShutdownResponse\"\x00\x42\x36Z4github.com/metaprov/modelaapi/services/publisherd/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.publisherd.v1.publisherd_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z4github.com/metaprov/modelaapi/services/publisherd/v1'
  _PUBLISHMODELREQUEST_CLOUDSECRETENTRY._options = None
  _PUBLISHMODELREQUEST_CLOUDSECRETENTRY._serialized_options = b'8\001'
  _PUBLISHMODELREQUEST_DOCKERREGISTRYSECRETENTRY._options = None
  _PUBLISHMODELREQUEST_DOCKERREGISTRYSECRETENTRY._serialized_options = b'8\001'
  _PACKAGEMODELREQUEST_CLOUDSECRETENTRY._options = None
  _PACKAGEMODELREQUEST_CLOUDSECRETENTRY._serialized_options = b'8\001'
  _globals['_PUBLISHMODELREQUEST']._serialized_start=343
  _globals['_PUBLISHMODELREQUEST']._serialized_end=1600
  _globals['_PUBLISHMODELREQUEST_CLOUDSECRETENTRY']._serialized_start=1489
  _globals['_PUBLISHMODELREQUEST_CLOUDSECRETENTRY']._serialized_end=1539
  _globals['_PUBLISHMODELREQUEST_DOCKERREGISTRYSECRETENTRY']._serialized_start=1541
  _globals['_PUBLISHMODELREQUEST_DOCKERREGISTRYSECRETENTRY']._serialized_end=1600
  _globals['_PUBLISHMODELRESPONSE']._serialized_start=1602
  _globals['_PUBLISHMODELRESPONSE']._serialized_end=1657
  _globals['_PACKAGEMODELREQUEST']._serialized_start=1660
  _globals['_PACKAGEMODELREQUEST']._serialized_end=2534
  _globals['_PACKAGEMODELREQUEST_CLOUDSECRETENTRY']._serialized_start=1489
  _globals['_PACKAGEMODELREQUEST_CLOUDSECRETENTRY']._serialized_end=1539
  _globals['_PACKAGEMODELRESPONSE']._serialized_start=2536
  _globals['_PACKAGEMODELRESPONSE']._serialized_end=2588
  _globals['_SHUTDOWNREQUEST']._serialized_start=2590
  _globals['_SHUTDOWNREQUEST']._serialized_end=2607
  _globals['_SHUTDOWNRESPONSE']._serialized_start=2609
  _globals['_SHUTDOWNRESPONSE']._serialized_end=2627
  _globals['_PUBLISHERDSERVICE']._serialized_start=2630
  _globals['_PUBLISHERDSERVICE']._serialized_end=3147
# @@protoc_insertion_point(module_scope)
