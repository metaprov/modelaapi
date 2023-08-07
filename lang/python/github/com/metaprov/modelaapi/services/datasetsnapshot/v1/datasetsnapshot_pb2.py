# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/datasetsnapshot/v1/datasetsnapshot.proto
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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nOgithub.com/metaprov/modelaapi/services/datasetsnapshot/v1/datasetsnapshot.proto\x12\x31github.com.metaprov.modelaapi.services.dataset.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\x84\x02\n\x1bListDatasetSnapshotsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12j\n\x06labels\x18\x02 \x03(\x0b\x32Z.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetSnapshotsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x9c\x01\n\x1cListDatasetSnapshotsResponse\x12\x63\n\x10\x64\x61tasetSnapshots\x18\x01 \x01(\x0b\x32I.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetSnapshotList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\xd5\x01\n\x19GetDatasetSnapshotRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12h\n\x06labels\x18\x03 \x03(\x0b\x32X.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetSnapshotRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x8a\x01\n\x1aGetDatasetSnapshotResponse\x12^\n\x0f\x64\x61tasetSnapshot\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetSnapshot\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"\xae\x01\n\x1cUpdateDatasetSnapshotRequest\x12^\n\x0f\x64\x61tasetSnapshot\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetSnapshot\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x1f\n\x1dUpdateDatasetSnapshotResponse\"?\n\x1c\x44\x65leteDatasetSnapshotRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1f\n\x1d\x44\x65leteDatasetSnapshotResponse\"C\n GetDatasetSnapshotProfileRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"v\n!GetDatasetSnapshotProfileResponse\x12Q\n\x07profile\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile\"B\n\x1e\x43ompareDatasetSnapshotsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\r\n\x05names\x18\x02 \x03(\t\"\x97\x01\n\x1f\x43ompareDatasetSnapshotsResponse\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\r\n\x05names\x18\x02 \x03(\t\x12R\n\x08profiles\x18\x03 \x03(\x0b\x32@.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile\"A\n\x1e\x44ownloadDatasetSnapshotRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\".\n\x1f\x44ownloadDatasetSnapshotResponse\x12\x0b\n\x03raw\x18\x01 \x01(\x0c\"E\n\"GetDatasetSnapshotAnomaliesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"q\n#GetDatasetSnapshotAnomaliesResponse\x12J\n\x05table\x18\x01 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView2\xcd\x0f\n\x16\x44\x61tasetSnapshotService\x12\xe1\x01\n\x14ListDatasetSnapshots\x12N.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetSnapshotsRequest\x1aO.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetSnapshotsResponse\"(\x82\xd3\xe4\x93\x02\"\x12 /v1/datasetsnapshots/{namespace}\x12\xe2\x01\n\x12GetDatasetSnapshot\x12L.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetSnapshotRequest\x1aM.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetSnapshotResponse\"/\x82\xd3\xe4\x93\x02)\x12\'/v1/datasetsnapshots/{namespace}/{name}\x12\x98\x02\n\rUpdateDataset\x12O.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetSnapshotRequest\x1aP.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetSnapshotResponse\"d\x82\xd3\xe4\x93\x02^\x1aY/v1/datasetsnapshots/{datasetSnapshot.metadata.namespace}/{datasetSnapshot.metadata.name}:\x01*\x12\xd7\x01\n\rDeleteDataset\x12O.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetSnapshotRequest\x1aP.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetSnapshotResponse\"#\x82\xd3\xe4\x93\x02\x1d*\x1b/v1/datasetsnapshots/{name}\x12\xfa\x01\n\x17\x43ompareDatasetSnapshots\x12Q.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetSnapshotsRequest\x1aR.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetSnapshotsResponse\"8\x82\xd3\xe4\x93\x02\x32\"0/v1/datasetsnapshots/{namespace}/{names}:compare\x12\xff\x01\n\x19GetDatasetSnapshotProfile\x12S.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetSnapshotProfileRequest\x1aT.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetSnapshotProfileResponse\"7\x82\xd3\xe4\x93\x02\x31\x12//v1/datasetsnapshots/{namespace}/{name}:profile\x12\xfa\x01\n\x17\x44ownloadDatasetSnapshot\x12Q.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetSnapshotRequest\x1aR.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetSnapshotResponse\"8\x82\xd3\xe4\x93\x02\x32\"0/v1/datasetsnapshots/{namespace}/{name}:download\x12\xf8\x01\n\x0cGetAnomalies\x12U.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetSnapshotAnomaliesRequest\x1aV.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetSnapshotAnomaliesResponse\"9\x82\xd3\xe4\x93\x02\x33\x12\x31/v1/datasetsnapshots/{namespace}/{name}:anomaliesB3Z1github.com/metaprov/modelaapi/services/dataset/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.datasetsnapshot.v1.datasetsnapshot_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/metaprov/modelaapi/services/dataset/v1'
  _LISTDATASETSNAPSHOTSREQUEST_LABELSENTRY._options = None
  _LISTDATASETSNAPSHOTSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _GETDATASETSNAPSHOTREQUEST_LABELSENTRY._options = None
  _GETDATASETSNAPSHOTREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _DATASETSNAPSHOTSERVICE.methods_by_name['ListDatasetSnapshots']._options = None
  _DATASETSNAPSHOTSERVICE.methods_by_name['ListDatasetSnapshots']._serialized_options = b'\202\323\344\223\002\"\022 /v1/datasetsnapshots/{namespace}'
  _DATASETSNAPSHOTSERVICE.methods_by_name['GetDatasetSnapshot']._options = None
  _DATASETSNAPSHOTSERVICE.methods_by_name['GetDatasetSnapshot']._serialized_options = b'\202\323\344\223\002)\022\'/v1/datasetsnapshots/{namespace}/{name}'
  _DATASETSNAPSHOTSERVICE.methods_by_name['UpdateDataset']._options = None
  _DATASETSNAPSHOTSERVICE.methods_by_name['UpdateDataset']._serialized_options = b'\202\323\344\223\002^\032Y/v1/datasetsnapshots/{datasetSnapshot.metadata.namespace}/{datasetSnapshot.metadata.name}:\001*'
  _DATASETSNAPSHOTSERVICE.methods_by_name['DeleteDataset']._options = None
  _DATASETSNAPSHOTSERVICE.methods_by_name['DeleteDataset']._serialized_options = b'\202\323\344\223\002\035*\033/v1/datasetsnapshots/{name}'
  _DATASETSNAPSHOTSERVICE.methods_by_name['CompareDatasetSnapshots']._options = None
  _DATASETSNAPSHOTSERVICE.methods_by_name['CompareDatasetSnapshots']._serialized_options = b'\202\323\344\223\0022\"0/v1/datasetsnapshots/{namespace}/{names}:compare'
  _DATASETSNAPSHOTSERVICE.methods_by_name['GetDatasetSnapshotProfile']._options = None
  _DATASETSNAPSHOTSERVICE.methods_by_name['GetDatasetSnapshotProfile']._serialized_options = b'\202\323\344\223\0021\022//v1/datasetsnapshots/{namespace}/{name}:profile'
  _DATASETSNAPSHOTSERVICE.methods_by_name['DownloadDatasetSnapshot']._options = None
  _DATASETSNAPSHOTSERVICE.methods_by_name['DownloadDatasetSnapshot']._serialized_options = b'\202\323\344\223\0022\"0/v1/datasetsnapshots/{namespace}/{name}:download'
  _DATASETSNAPSHOTSERVICE.methods_by_name['GetAnomalies']._options = None
  _DATASETSNAPSHOTSERVICE.methods_by_name['GetAnomalies']._serialized_options = b'\202\323\344\223\0023\0221/v1/datasetsnapshots/{namespace}/{name}:anomalies'
  _LISTDATASETSNAPSHOTSREQUEST._serialized_start=361
  _LISTDATASETSNAPSHOTSREQUEST._serialized_end=621
  _LISTDATASETSNAPSHOTSREQUEST_LABELSENTRY._serialized_start=576
  _LISTDATASETSNAPSHOTSREQUEST_LABELSENTRY._serialized_end=621
  _LISTDATASETSNAPSHOTSRESPONSE._serialized_start=624
  _LISTDATASETSNAPSHOTSRESPONSE._serialized_end=780
  _GETDATASETSNAPSHOTREQUEST._serialized_start=783
  _GETDATASETSNAPSHOTREQUEST._serialized_end=996
  _GETDATASETSNAPSHOTREQUEST_LABELSENTRY._serialized_start=576
  _GETDATASETSNAPSHOTREQUEST_LABELSENTRY._serialized_end=621
  _GETDATASETSNAPSHOTRESPONSE._serialized_start=999
  _GETDATASETSNAPSHOTRESPONSE._serialized_end=1137
  _UPDATEDATASETSNAPSHOTREQUEST._serialized_start=1140
  _UPDATEDATASETSNAPSHOTREQUEST._serialized_end=1314
  _UPDATEDATASETSNAPSHOTRESPONSE._serialized_start=1316
  _UPDATEDATASETSNAPSHOTRESPONSE._serialized_end=1347
  _DELETEDATASETSNAPSHOTREQUEST._serialized_start=1349
  _DELETEDATASETSNAPSHOTREQUEST._serialized_end=1412
  _DELETEDATASETSNAPSHOTRESPONSE._serialized_start=1414
  _DELETEDATASETSNAPSHOTRESPONSE._serialized_end=1445
  _GETDATASETSNAPSHOTPROFILEREQUEST._serialized_start=1447
  _GETDATASETSNAPSHOTPROFILEREQUEST._serialized_end=1514
  _GETDATASETSNAPSHOTPROFILERESPONSE._serialized_start=1516
  _GETDATASETSNAPSHOTPROFILERESPONSE._serialized_end=1634
  _COMPAREDATASETSNAPSHOTSREQUEST._serialized_start=1636
  _COMPAREDATASETSNAPSHOTSREQUEST._serialized_end=1702
  _COMPAREDATASETSNAPSHOTSRESPONSE._serialized_start=1705
  _COMPAREDATASETSNAPSHOTSRESPONSE._serialized_end=1856
  _DOWNLOADDATASETSNAPSHOTREQUEST._serialized_start=1858
  _DOWNLOADDATASETSNAPSHOTREQUEST._serialized_end=1923
  _DOWNLOADDATASETSNAPSHOTRESPONSE._serialized_start=1925
  _DOWNLOADDATASETSNAPSHOTRESPONSE._serialized_end=1971
  _GETDATASETSNAPSHOTANOMALIESREQUEST._serialized_start=1973
  _GETDATASETSNAPSHOTANOMALIESREQUEST._serialized_end=2042
  _GETDATASETSNAPSHOTANOMALIESRESPONSE._serialized_start=2044
  _GETDATASETSNAPSHOTANOMALIESRESPONSE._serialized_end=2157
  _DATASETSNAPSHOTSERVICE._serialized_start=2160
  _DATASETSNAPSHOTSERVICE._serialized_end=4157
# @@protoc_insertion_point(module_scope)
