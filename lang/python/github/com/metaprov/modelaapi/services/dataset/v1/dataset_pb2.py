# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/dataset/v1/dataset.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n?github.com/metaprov/modelaapi/services/dataset/v1/dataset.proto\x12\x31github.com.metaprov.modelaapi.services.dataset.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xf4\x01\n\x13ListDatasetsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x62\n\x06labels\x18\x02 \x03(\x0b\x32R.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x84\x01\n\x14ListDatasetsResponse\x12S\n\x08\x64\x61tasets\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\xc5\x01\n\x11GetDatasetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12`\n\x06labels\x18\x03 \x03(\x0b\x32P.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"r\n\x12GetDatasetResponse\x12N\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"f\n\x14\x43reateDatasetRequest\x12N\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\"\x17\n\x15\x43reateDatasetResponse\"\x96\x01\n\x14UpdateDatasetRequest\x12N\n\x07\x64\x61taset\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x17\n\x15UpdateDatasetResponse\"7\n\x14\x44\x65leteDatasetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x17\n\x15\x44\x65leteDatasetResponse\"O\n\x18GetDatasetProfileRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x12\n\nrunVersion\x18\x03 \x01(\x05\"P\n\x19GetDatasetProfileResponse\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x12\n\nrunVersion\x18\x03 \x01(\x05\"M\n\x16\x44ownloadDatasetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x12\n\nrunVersion\x18\x03 \x01(\x05\"&\n\x17\x44ownloadDatasetResponse\x12\x0b\n\x03raw\x18\x01 \x01(\x0c\"Q\n\x1aGetDatasetAnomaliesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x12\n\nrunVersion\x18\x03 \x01(\x05\"i\n\x1bGetDatasetAnomaliesResponse\x12J\n\x05table\x18\x01 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView2\xd3\r\n\x0e\x44\x61tasetService\x12\xc1\x01\n\x0cListDatasets\x12\x46.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest\x1aG.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/datasets/{namespace}\x12\xc2\x01\n\nGetDataset\x12\x44.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest\x1a\x45.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse\"\'\x82\xd3\xe4\x93\x02!\x12\x1f/v1/datasets/{namespace}/{name}\x12\xbb\x01\n\rCreateDataset\x12G.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest\x1aH.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse\"\x17\x82\xd3\xe4\x93\x02\x11\"\x0c/v1/datasets:\x01*\x12\xf0\x01\n\rUpdateDataset\x12G.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest\x1aH.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse\"L\x82\xd3\xe4\x93\x02\x46\x1a\x41/v1/datasets/{dataset.metadata.namespace}/{dataset.metadata.name}:\x01*\x12\xbf\x01\n\rDeleteDataset\x12G.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest\x1aH.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse\"\x1b\x82\xd3\xe4\x93\x02\x15*\x13/v1/datasets/{name}\x12\xec\x01\n\x11GetDatasetProfile\x12K.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest\x1aL.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse\"<\x82\xd3\xe4\x93\x02\x36\x12\x34/v1/datasets/{namespace}/{name}/{runVersion}:profile\x12\xe7\x01\n\x0f\x44ownloadDataset\x12I.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest\x1aJ.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse\"=\x82\xd3\xe4\x93\x02\x37\"5/v1/datasets/{namespace}/{name}/{runVersion}:download\x12\xeb\x01\n\x0cGetAnomalies\x12M.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetAnomaliesRequest\x1aN.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetAnomaliesResponse\"<\x82\xd3\xe4\x93\x02\x36\x12\x34/v1/models/{namespace}/{name}/{runVersion}:anomaliesB3Z1github.com/metaprov/modelaapi/services/dataset/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.dataset.v1.dataset_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/metaprov/modelaapi/services/dataset/v1'
  _LISTDATASETSREQUEST_LABELSENTRY._options = None
  _LISTDATASETSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _GETDATASETREQUEST_LABELSENTRY._options = None
  _GETDATASETREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _DATASETSERVICE.methods_by_name['ListDatasets']._options = None
  _DATASETSERVICE.methods_by_name['ListDatasets']._serialized_options = b'\202\323\344\223\002\032\022\030/v1/datasets/{namespace}'
  _DATASETSERVICE.methods_by_name['GetDataset']._options = None
  _DATASETSERVICE.methods_by_name['GetDataset']._serialized_options = b'\202\323\344\223\002!\022\037/v1/datasets/{namespace}/{name}'
  _DATASETSERVICE.methods_by_name['CreateDataset']._options = None
  _DATASETSERVICE.methods_by_name['CreateDataset']._serialized_options = b'\202\323\344\223\002\021\"\014/v1/datasets:\001*'
  _DATASETSERVICE.methods_by_name['UpdateDataset']._options = None
  _DATASETSERVICE.methods_by_name['UpdateDataset']._serialized_options = b'\202\323\344\223\002F\032A/v1/datasets/{dataset.metadata.namespace}/{dataset.metadata.name}:\001*'
  _DATASETSERVICE.methods_by_name['DeleteDataset']._options = None
  _DATASETSERVICE.methods_by_name['DeleteDataset']._serialized_options = b'\202\323\344\223\002\025*\023/v1/datasets/{name}'
  _DATASETSERVICE.methods_by_name['GetDatasetProfile']._options = None
  _DATASETSERVICE.methods_by_name['GetDatasetProfile']._serialized_options = b'\202\323\344\223\0026\0224/v1/datasets/{namespace}/{name}/{runVersion}:profile'
  _DATASETSERVICE.methods_by_name['DownloadDataset']._options = None
  _DATASETSERVICE.methods_by_name['DownloadDataset']._serialized_options = b'\202\323\344\223\0027\"5/v1/datasets/{namespace}/{name}/{runVersion}:download'
  _DATASETSERVICE.methods_by_name['GetAnomalies']._options = None
  _DATASETSERVICE.methods_by_name['GetAnomalies']._serialized_options = b'\202\323\344\223\0026\0224/v1/models/{namespace}/{name}/{runVersion}:anomalies'
  _LISTDATASETSREQUEST._serialized_start=345
  _LISTDATASETSREQUEST._serialized_end=589
  _LISTDATASETSREQUEST_LABELSENTRY._serialized_start=544
  _LISTDATASETSREQUEST_LABELSENTRY._serialized_end=589
  _LISTDATASETSRESPONSE._serialized_start=592
  _LISTDATASETSRESPONSE._serialized_end=724
  _GETDATASETREQUEST._serialized_start=727
  _GETDATASETREQUEST._serialized_end=924
  _GETDATASETREQUEST_LABELSENTRY._serialized_start=544
  _GETDATASETREQUEST_LABELSENTRY._serialized_end=589
  _GETDATASETRESPONSE._serialized_start=926
  _GETDATASETRESPONSE._serialized_end=1040
  _CREATEDATASETREQUEST._serialized_start=1042
  _CREATEDATASETREQUEST._serialized_end=1144
  _CREATEDATASETRESPONSE._serialized_start=1146
  _CREATEDATASETRESPONSE._serialized_end=1169
  _UPDATEDATASETREQUEST._serialized_start=1172
  _UPDATEDATASETREQUEST._serialized_end=1322
  _UPDATEDATASETRESPONSE._serialized_start=1324
  _UPDATEDATASETRESPONSE._serialized_end=1347
  _DELETEDATASETREQUEST._serialized_start=1349
  _DELETEDATASETREQUEST._serialized_end=1404
  _DELETEDATASETRESPONSE._serialized_start=1406
  _DELETEDATASETRESPONSE._serialized_end=1429
  _GETDATASETPROFILEREQUEST._serialized_start=1431
  _GETDATASETPROFILEREQUEST._serialized_end=1510
  _GETDATASETPROFILERESPONSE._serialized_start=1512
  _GETDATASETPROFILERESPONSE._serialized_end=1592
  _DOWNLOADDATASETREQUEST._serialized_start=1594
  _DOWNLOADDATASETREQUEST._serialized_end=1671
  _DOWNLOADDATASETRESPONSE._serialized_start=1673
  _DOWNLOADDATASETRESPONSE._serialized_end=1711
  _GETDATASETANOMALIESREQUEST._serialized_start=1713
  _GETDATASETANOMALIESREQUEST._serialized_end=1794
  _GETDATASETANOMALIESRESPONSE._serialized_start=1796
  _GETDATASETANOMALIESRESPONSE._serialized_end=1901
  _DATASETSERVICE._serialized_start=1904
  _DATASETSERVICE._serialized_end=3651
# @@protoc_insertion_point(module_scope)
