# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/cloudproxyd/v1/cloudproxyd.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nGgithub.com/metaprov/modelaapi/services/cloudproxyd/v1/cloudproxyd.proto\x12\x35github.com.metaprov.modelaapi.services.cloudproxyd.v1\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\"\x11\n\x0fShutdownRequest\"\x12\n\x10ShutdownResponse\"j\n\x12\x42ucketExistRequest\x12T\n\x06\x62ucket\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\"$\n\x13\x42ucketExistResponse\x12\r\n\x05\x65xist\x18\x01 \x01(\x08\"z\n\x15\x45xistsInBucketRequest\x12T\n\x06\x62ucket\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12\x0b\n\x03key\x18\x02 \x01(\t\"\'\n\x16\x45xistsInBucketResponse\x12\r\n\x05\x65xist\x18\x01 \x01(\x08\"r\n\rDeleteRequest\x12T\n\x06\x62ucket\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12\x0b\n\x03key\x18\x02 \x01(\t\"\x10\n\x0e\x44\x65leteResponse\"\x96\x01\n\x13\x46ileDownloadRequest\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x0c\n\x04path\x18\x02 \x01(\t\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12\x0e\n\x06tenant\x18\x04 \x01(\t\"\x16\n\x14\x46ileDownloadResponse\"\x8a\x01\n\x12ListObjectsRequest\x12\x0e\n\x06prefix\x18\x01 \x01(\t\x12T\n\x06\x62ucket\x18\x02 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12\x0e\n\x06tenant\x18\x03 \x01(\t\"#\n\x13ListObjectsResponse\x12\x0c\n\x04keys\x18\x01 \x03(\t\"\x84\x01\n\x11\x46ileUploadRequest\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x0c\n\x04path\x18\x02 \x01(\t\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\"\x14\n\x12\x46ileUploadResponse\"k\n\x13\x43reateBucketRequest\x12T\n\x06\x62ucket\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\"\x16\n\x14\x43reateBucketResponse2\xc0\n\n\x11\x43loudProxyService\x12\xa5\x01\n\x08\x44ownload\x12J.github.com.metaprov.modelaapi.services.cloudproxyd.v1.FileDownloadRequest\x1aK.github.com.metaprov.modelaapi.services.cloudproxyd.v1.FileDownloadResponse\"\x00\x12\x9f\x01\n\x04List\x12I.github.com.metaprov.modelaapi.services.cloudproxyd.v1.ListObjectsRequest\x1aJ.github.com.metaprov.modelaapi.services.cloudproxyd.v1.ListObjectsResponse\"\x00\x12\x9f\x01\n\x06Upload\x12H.github.com.metaprov.modelaapi.services.cloudproxyd.v1.FileUploadRequest\x1aI.github.com.metaprov.modelaapi.services.cloudproxyd.v1.FileUploadResponse\"\x00\x12\x97\x01\n\x06\x44\x65lete\x12\x44.github.com.metaprov.modelaapi.services.cloudproxyd.v1.DeleteRequest\x1a\x45.github.com.metaprov.modelaapi.services.cloudproxyd.v1.DeleteResponse\"\x00\x12\xaf\x01\n\x0e\x45xistsInBucket\x12L.github.com.metaprov.modelaapi.services.cloudproxyd.v1.ExistsInBucketRequest\x1aM.github.com.metaprov.modelaapi.services.cloudproxyd.v1.ExistsInBucketResponse\"\x00\x12\xa6\x01\n\x0b\x42ucketExist\x12I.github.com.metaprov.modelaapi.services.cloudproxyd.v1.BucketExistRequest\x1aJ.github.com.metaprov.modelaapi.services.cloudproxyd.v1.BucketExistResponse\"\x00\x12\xa9\x01\n\x0c\x43reateBucket\x12J.github.com.metaprov.modelaapi.services.cloudproxyd.v1.CreateBucketRequest\x1aK.github.com.metaprov.modelaapi.services.cloudproxyd.v1.CreateBucketResponse\"\x00\x12\x9d\x01\n\x08Shutdown\x12\x46.github.com.metaprov.modelaapi.services.cloudproxyd.v1.ShutdownRequest\x1aG.github.com.metaprov.modelaapi.services.cloudproxyd.v1.ShutdownResponse\"\x00\x42\x37Z5github.com/metaprov/modelaapi/services/cloudproxyd/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.cloudproxyd.v1.cloudproxyd_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z5github.com/metaprov/modelaapi/services/cloudproxyd/v1'
  _globals['_SHUTDOWNREQUEST']._serialized_start=201
  _globals['_SHUTDOWNREQUEST']._serialized_end=218
  _globals['_SHUTDOWNRESPONSE']._serialized_start=220
  _globals['_SHUTDOWNRESPONSE']._serialized_end=238
  _globals['_BUCKETEXISTREQUEST']._serialized_start=240
  _globals['_BUCKETEXISTREQUEST']._serialized_end=346
  _globals['_BUCKETEXISTRESPONSE']._serialized_start=348
  _globals['_BUCKETEXISTRESPONSE']._serialized_end=384
  _globals['_EXISTSINBUCKETREQUEST']._serialized_start=386
  _globals['_EXISTSINBUCKETREQUEST']._serialized_end=508
  _globals['_EXISTSINBUCKETRESPONSE']._serialized_start=510
  _globals['_EXISTSINBUCKETRESPONSE']._serialized_end=549
  _globals['_DELETEREQUEST']._serialized_start=551
  _globals['_DELETEREQUEST']._serialized_end=665
  _globals['_DELETERESPONSE']._serialized_start=667
  _globals['_DELETERESPONSE']._serialized_end=683
  _globals['_FILEDOWNLOADREQUEST']._serialized_start=686
  _globals['_FILEDOWNLOADREQUEST']._serialized_end=836
  _globals['_FILEDOWNLOADRESPONSE']._serialized_start=838
  _globals['_FILEDOWNLOADRESPONSE']._serialized_end=860
  _globals['_LISTOBJECTSREQUEST']._serialized_start=863
  _globals['_LISTOBJECTSREQUEST']._serialized_end=1001
  _globals['_LISTOBJECTSRESPONSE']._serialized_start=1003
  _globals['_LISTOBJECTSRESPONSE']._serialized_end=1038
  _globals['_FILEUPLOADREQUEST']._serialized_start=1041
  _globals['_FILEUPLOADREQUEST']._serialized_end=1173
  _globals['_FILEUPLOADRESPONSE']._serialized_start=1175
  _globals['_FILEUPLOADRESPONSE']._serialized_end=1195
  _globals['_CREATEBUCKETREQUEST']._serialized_start=1197
  _globals['_CREATEBUCKETREQUEST']._serialized_end=1304
  _globals['_CREATEBUCKETRESPONSE']._serialized_start=1306
  _globals['_CREATEBUCKETRESPONSE']._serialized_end=1328
  _globals['_CLOUDPROXYSERVICE']._serialized_start=1331
  _globals['_CLOUDPROXYSERVICE']._serialized_end=2675
# @@protoc_insertion_point(module_scope)
