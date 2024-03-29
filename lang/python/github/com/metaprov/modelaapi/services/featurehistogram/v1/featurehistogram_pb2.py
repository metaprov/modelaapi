# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/featurehistogram/v1/featurehistogram.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nQgithub.com/metaprov/modelaapi/services/featurehistogram/v1/featurehistogram.proto\x12:github.com.metaprov.modelaapi.services.featurehistogram.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\"\x8f\x02\n\x1cListFeatureHistogramsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12t\n\x06labels\x18\x02 \x03(\x0b\x32\x64.github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x98\x01\n\x1dListFeatureHistogramsResponse\x12^\n\nhistograms\x18\x01 \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogramList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x93\x01\n\x1d\x43reateFeatureHistogramRequest\x12Y\n\thistogram\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\" \n\x1e\x43reateFeatureHistogramResponse\"\xaa\x01\n\x1dUpdateFeatureHistogramRequest\x12Y\n\thistogram\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\" \n\x1eUpdateFeatureHistogramResponse\"=\n\x1aGetFeatureHistogramRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x86\x01\n\x1bGetFeatureHistogramResponse\x12Y\n\thistogram\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"@\n\x1d\x44\x65leteFeatureHistogramRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\" \n\x1e\x44\x65leteFeatureHistogramResponse2\xb3\n\n\x17\x46\x65\x61tureHistogramService\x12\xf7\x01\n\x15ListFeatureHistograms\x12X.github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsRequest\x1aY.github.com.metaprov.modelaapi.services.featurehistogram.v1.ListFeatureHistogramsResponse\")\x82\xd3\xe4\x93\x02#\x12!/v1/featurehistograms/{namespace}\x12\xf1\x01\n\x16\x43reateFeatureHistogram\x12Y.github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramRequest\x1aZ.github.com.metaprov.modelaapi.services.featurehistogram.v1.CreateFeatureHistogramResponse\" \x82\xd3\xe4\x93\x02\x1a\"\x15/v1/featurehistograms:\x01*\x12\xf8\x01\n\x13GetFeatureHistogram\x12V.github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramRequest\x1aW.github.com.metaprov.modelaapi.services.featurehistogram.v1.GetFeatureHistogramResponse\"0\x82\xd3\xe4\x93\x02*\x12(/v1/featurehistograms/{namespace}/{name}\x12\xaa\x02\n\x16UpdateFeatureHistogram\x12Y.github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramRequest\x1aZ.github.com.metaprov.modelaapi.services.featurehistogram.v1.UpdateFeatureHistogramResponse\"Y\x82\xd3\xe4\x93\x02S\x1aN/v1/featurehistograms/{histogram.metadata.namespace}/{histogram.metadata.name}:\x01*\x12\x81\x02\n\x16\x44\x65leteFeatureHistogram\x12Y.github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramRequest\x1aZ.github.com.metaprov.modelaapi.services.featurehistogram.v1.DeleteFeatureHistogramResponse\"0\x82\xd3\xe4\x93\x02**(/v1/featurehistograms/{namespace}/{name}B<Z:github.com/metaprov/modelaapi/services/featurehistogram/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.featurehistogram.v1.featurehistogram_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z:github.com/metaprov/modelaapi/services/featurehistogram/v1'
  _LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY._options = None
  _LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _FEATUREHISTOGRAMSERVICE.methods_by_name['ListFeatureHistograms']._options = None
  _FEATUREHISTOGRAMSERVICE.methods_by_name['ListFeatureHistograms']._serialized_options = b'\202\323\344\223\002#\022!/v1/featurehistograms/{namespace}'
  _FEATUREHISTOGRAMSERVICE.methods_by_name['CreateFeatureHistogram']._options = None
  _FEATUREHISTOGRAMSERVICE.methods_by_name['CreateFeatureHistogram']._serialized_options = b'\202\323\344\223\002\032\"\025/v1/featurehistograms:\001*'
  _FEATUREHISTOGRAMSERVICE.methods_by_name['GetFeatureHistogram']._options = None
  _FEATUREHISTOGRAMSERVICE.methods_by_name['GetFeatureHistogram']._serialized_options = b'\202\323\344\223\002*\022(/v1/featurehistograms/{namespace}/{name}'
  _FEATUREHISTOGRAMSERVICE.methods_by_name['UpdateFeatureHistogram']._options = None
  _FEATUREHISTOGRAMSERVICE.methods_by_name['UpdateFeatureHistogram']._serialized_options = b'\202\323\344\223\002S\032N/v1/featurehistograms/{histogram.metadata.namespace}/{histogram.metadata.name}:\001*'
  _FEATUREHISTOGRAMSERVICE.methods_by_name['DeleteFeatureHistogram']._options = None
  _FEATUREHISTOGRAMSERVICE.methods_by_name['DeleteFeatureHistogram']._serialized_options = b'\202\323\344\223\002**(/v1/featurehistograms/{namespace}/{name}'
  _LISTFEATUREHISTOGRAMSREQUEST._serialized_start=280
  _LISTFEATUREHISTOGRAMSREQUEST._serialized_end=551
  _LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY._serialized_start=506
  _LISTFEATUREHISTOGRAMSREQUEST_LABELSENTRY._serialized_end=551
  _LISTFEATUREHISTOGRAMSRESPONSE._serialized_start=554
  _LISTFEATUREHISTOGRAMSRESPONSE._serialized_end=706
  _CREATEFEATUREHISTOGRAMREQUEST._serialized_start=709
  _CREATEFEATUREHISTOGRAMREQUEST._serialized_end=856
  _CREATEFEATUREHISTOGRAMRESPONSE._serialized_start=858
  _CREATEFEATUREHISTOGRAMRESPONSE._serialized_end=890
  _UPDATEFEATUREHISTOGRAMREQUEST._serialized_start=893
  _UPDATEFEATUREHISTOGRAMREQUEST._serialized_end=1063
  _UPDATEFEATUREHISTOGRAMRESPONSE._serialized_start=1065
  _UPDATEFEATUREHISTOGRAMRESPONSE._serialized_end=1097
  _GETFEATUREHISTOGRAMREQUEST._serialized_start=1099
  _GETFEATUREHISTOGRAMREQUEST._serialized_end=1160
  _GETFEATUREHISTOGRAMRESPONSE._serialized_start=1163
  _GETFEATUREHISTOGRAMRESPONSE._serialized_end=1297
  _DELETEFEATUREHISTOGRAMREQUEST._serialized_start=1299
  _DELETEFEATUREHISTOGRAMREQUEST._serialized_end=1363
  _DELETEFEATUREHISTOGRAMRESPONSE._serialized_start=1365
  _DELETEFEATUREHISTOGRAMRESPONSE._serialized_end=1397
  _FEATUREHISTOGRAMSERVICE._serialized_start=1400
  _FEATUREHISTOGRAMSERVICE._serialized_end=2731
# @@protoc_insertion_point(module_scope)
