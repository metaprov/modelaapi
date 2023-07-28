# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/featuregroup/v1/featuregroup.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nIgithub.com/metaprov/modelaapi/services/featuregroup/v1/featuregroup.proto\x12\x36github.com.metaprov.modelaapi.services.featuregroup.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\"\x81\x02\n\x17ListFeatureGroupRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12k\n\x06labels\x18\x02 \x03(\x0b\x32[.github.com.metaprov.modelaapi.services.featuregroup.v1.ListFeatureGroupRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x92\x01\n\x18ListFeatureGroupResponse\x12]\n\rfeaturegroups\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroupList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"u\n\x19\x43reateFeatureGroupRequest\x12X\n\x0c\x66\x65\x61turegroup\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup\"\x1c\n\x1a\x43reateFeatureGroupResponse\"\xa5\x01\n\x19UpdateFeatureGroupRequest\x12X\n\x0c\x66\x65\x61turegroup\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x1c\n\x1aUpdateFeatureGroupResponse\"9\n\x16GetFeatureGroupRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x81\x01\n\x17GetFeatureGroupResponse\x12X\n\x0c\x66\x65\x61turegroup\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"<\n\x19\x44\x65leteFeatureGroupRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1c\n\x1a\x44\x65leteFeatureGroupResponse\"\x1b\n\x19PauseFeatureGroupResponse\";\n\x18PauseFeatureGroupRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1c\n\x1aResumeFeatureGroupResponse\"<\n\x19ResumeFeatureGroupRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"<\n\x19IngestFeatureGroupRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1c\n\x1aIngestFeatureGroupResponse\":\n\x17SyncFeatureGroupRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1a\n\x18SyncFeatureGroupResponse2\xe7\x10\n\x13\x46\x65\x61tureGroupService\x12\xdd\x01\n\x11ListFeatureGroups\x12O.github.com.metaprov.modelaapi.services.featuregroup.v1.ListFeatureGroupRequest\x1aP.github.com.metaprov.modelaapi.services.featuregroup.v1.ListFeatureGroupResponse\"%\x82\xd3\xe4\x93\x02\x1f\x12\x1d/v1/featuregroups/{namespace}\x12\xd9\x01\n\x12\x43reateFeatureGroup\x12Q.github.com.metaprov.modelaapi.services.featuregroup.v1.CreateFeatureGroupRequest\x1aR.github.com.metaprov.modelaapi.services.featuregroup.v1.CreateFeatureGroupResponse\"\x1c\x82\xd3\xe4\x93\x02\x16\"\x11/v1/featuregroups:\x01*\x12\xe0\x01\n\x0fGetFeatureGroup\x12N.github.com.metaprov.modelaapi.services.featuregroup.v1.GetFeatureGroupRequest\x1aO.github.com.metaprov.modelaapi.services.featuregroup.v1.GetFeatureGroupResponse\",\x82\xd3\xe4\x93\x02&\x12$/v1/featuregroups/{namespace}/{name}\x12\x98\x02\n\x12UpdateFeatureGroup\x12Q.github.com.metaprov.modelaapi.services.featuregroup.v1.UpdateFeatureGroupRequest\x1aR.github.com.metaprov.modelaapi.services.featuregroup.v1.UpdateFeatureGroupResponse\"[\x82\xd3\xe4\x93\x02U\x1aP/v1/featuregroups/{featuregroup.metadata.namespace}/{featuregroup.metadata.name}:\x01*\x12\xe9\x01\n\x12\x44\x65leteFeatureGroup\x12Q.github.com.metaprov.modelaapi.services.featuregroup.v1.DeleteFeatureGroupRequest\x1aR.github.com.metaprov.modelaapi.services.featuregroup.v1.DeleteFeatureGroupResponse\",\x82\xd3\xe4\x93\x02&*$/v1/featuregroups/{namespace}/{name}\x12\xec\x01\n\x11PauseFeatureGroup\x12P.github.com.metaprov.modelaapi.services.featuregroup.v1.PauseFeatureGroupRequest\x1aQ.github.com.metaprov.modelaapi.services.featuregroup.v1.PauseFeatureGroupResponse\"2\x82\xd3\xe4\x93\x02,\"*/v1/featuregroups/{namespace}/{name}:pause\x12\xf0\x01\n\x12ResumeFeatureGroup\x12Q.github.com.metaprov.modelaapi.services.featuregroup.v1.ResumeFeatureGroupRequest\x1aR.github.com.metaprov.modelaapi.services.featuregroup.v1.ResumeFeatureGroupResponse\"3\x82\xd3\xe4\x93\x02-\"+/v1/featuregroups/{namespace}/{name}:resume\x12\xe6\x01\n\tIngestNow\x12Q.github.com.metaprov.modelaapi.services.featuregroup.v1.IngestFeatureGroupRequest\x1aR.github.com.metaprov.modelaapi.services.featuregroup.v1.IngestFeatureGroupResponse\"2\x82\xd3\xe4\x93\x02,\"*/v1/modelclasses/{namespace}/{name}/ingest\x12\xde\x01\n\x07SyncNow\x12O.github.com.metaprov.modelaapi.services.featuregroup.v1.SyncFeatureGroupRequest\x1aP.github.com.metaprov.modelaapi.services.featuregroup.v1.SyncFeatureGroupResponse\"0\x82\xd3\xe4\x93\x02*\"(/v1/modelclasses/{namespace}/{name}/syncB8Z6github.com/metaprov/modelaapi/services/featuregroup/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.featuregroup.v1.featuregroup_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z6github.com/metaprov/modelaapi/services/featuregroup/v1'
  _LISTFEATUREGROUPREQUEST_LABELSENTRY._options = None
  _LISTFEATUREGROUPREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _FEATUREGROUPSERVICE.methods_by_name['ListFeatureGroups']._options = None
  _FEATUREGROUPSERVICE.methods_by_name['ListFeatureGroups']._serialized_options = b'\202\323\344\223\002\037\022\035/v1/featuregroups/{namespace}'
  _FEATUREGROUPSERVICE.methods_by_name['CreateFeatureGroup']._options = None
  _FEATUREGROUPSERVICE.methods_by_name['CreateFeatureGroup']._serialized_options = b'\202\323\344\223\002\026\"\021/v1/featuregroups:\001*'
  _FEATUREGROUPSERVICE.methods_by_name['GetFeatureGroup']._options = None
  _FEATUREGROUPSERVICE.methods_by_name['GetFeatureGroup']._serialized_options = b'\202\323\344\223\002&\022$/v1/featuregroups/{namespace}/{name}'
  _FEATUREGROUPSERVICE.methods_by_name['UpdateFeatureGroup']._options = None
  _FEATUREGROUPSERVICE.methods_by_name['UpdateFeatureGroup']._serialized_options = b'\202\323\344\223\002U\032P/v1/featuregroups/{featuregroup.metadata.namespace}/{featuregroup.metadata.name}:\001*'
  _FEATUREGROUPSERVICE.methods_by_name['DeleteFeatureGroup']._options = None
  _FEATUREGROUPSERVICE.methods_by_name['DeleteFeatureGroup']._serialized_options = b'\202\323\344\223\002&*$/v1/featuregroups/{namespace}/{name}'
  _FEATUREGROUPSERVICE.methods_by_name['PauseFeatureGroup']._options = None
  _FEATUREGROUPSERVICE.methods_by_name['PauseFeatureGroup']._serialized_options = b'\202\323\344\223\002,\"*/v1/featuregroups/{namespace}/{name}:pause'
  _FEATUREGROUPSERVICE.methods_by_name['ResumeFeatureGroup']._options = None
  _FEATUREGROUPSERVICE.methods_by_name['ResumeFeatureGroup']._serialized_options = b'\202\323\344\223\002-\"+/v1/featuregroups/{namespace}/{name}:resume'
  _FEATUREGROUPSERVICE.methods_by_name['IngestNow']._options = None
  _FEATUREGROUPSERVICE.methods_by_name['IngestNow']._serialized_options = b'\202\323\344\223\002,\"*/v1/modelclasses/{namespace}/{name}/ingest'
  _FEATUREGROUPSERVICE.methods_by_name['SyncNow']._options = None
  _FEATUREGROUPSERVICE.methods_by_name['SyncNow']._serialized_options = b'\202\323\344\223\002*\"(/v1/modelclasses/{namespace}/{name}/sync'
  _globals['_LISTFEATUREGROUPREQUEST']._serialized_start=268
  _globals['_LISTFEATUREGROUPREQUEST']._serialized_end=525
  _globals['_LISTFEATUREGROUPREQUEST_LABELSENTRY']._serialized_start=480
  _globals['_LISTFEATUREGROUPREQUEST_LABELSENTRY']._serialized_end=525
  _globals['_LISTFEATUREGROUPRESPONSE']._serialized_start=528
  _globals['_LISTFEATUREGROUPRESPONSE']._serialized_end=674
  _globals['_CREATEFEATUREGROUPREQUEST']._serialized_start=676
  _globals['_CREATEFEATUREGROUPREQUEST']._serialized_end=793
  _globals['_CREATEFEATUREGROUPRESPONSE']._serialized_start=795
  _globals['_CREATEFEATUREGROUPRESPONSE']._serialized_end=823
  _globals['_UPDATEFEATUREGROUPREQUEST']._serialized_start=826
  _globals['_UPDATEFEATUREGROUPREQUEST']._serialized_end=991
  _globals['_UPDATEFEATUREGROUPRESPONSE']._serialized_start=993
  _globals['_UPDATEFEATUREGROUPRESPONSE']._serialized_end=1021
  _globals['_GETFEATUREGROUPREQUEST']._serialized_start=1023
  _globals['_GETFEATUREGROUPREQUEST']._serialized_end=1080
  _globals['_GETFEATUREGROUPRESPONSE']._serialized_start=1083
  _globals['_GETFEATUREGROUPRESPONSE']._serialized_end=1212
  _globals['_DELETEFEATUREGROUPREQUEST']._serialized_start=1214
  _globals['_DELETEFEATUREGROUPREQUEST']._serialized_end=1274
  _globals['_DELETEFEATUREGROUPRESPONSE']._serialized_start=1276
  _globals['_DELETEFEATUREGROUPRESPONSE']._serialized_end=1304
  _globals['_PAUSEFEATUREGROUPRESPONSE']._serialized_start=1306
  _globals['_PAUSEFEATUREGROUPRESPONSE']._serialized_end=1333
  _globals['_PAUSEFEATUREGROUPREQUEST']._serialized_start=1335
  _globals['_PAUSEFEATUREGROUPREQUEST']._serialized_end=1394
  _globals['_RESUMEFEATUREGROUPRESPONSE']._serialized_start=1396
  _globals['_RESUMEFEATUREGROUPRESPONSE']._serialized_end=1424
  _globals['_RESUMEFEATUREGROUPREQUEST']._serialized_start=1426
  _globals['_RESUMEFEATUREGROUPREQUEST']._serialized_end=1486
  _globals['_INGESTFEATUREGROUPREQUEST']._serialized_start=1488
  _globals['_INGESTFEATUREGROUPREQUEST']._serialized_end=1548
  _globals['_INGESTFEATUREGROUPRESPONSE']._serialized_start=1550
  _globals['_INGESTFEATUREGROUPRESPONSE']._serialized_end=1578
  _globals['_SYNCFEATUREGROUPREQUEST']._serialized_start=1580
  _globals['_SYNCFEATUREGROUPREQUEST']._serialized_end=1638
  _globals['_SYNCFEATUREGROUPRESPONSE']._serialized_start=1640
  _globals['_SYNCFEATUREGROUPRESPONSE']._serialized_end=1666
  _globals['_FEATUREGROUPSERVICE']._serialized_start=1669
  _globals['_FEATUREGROUPSERVICE']._serialized_end=3820
# @@protoc_insertion_point(module_scope)
