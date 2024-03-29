# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/study/v1/study.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n;github.com/metaprov/modelaapi/services/study/v1/study.proto\x12/github.com.metaprov.modelaapi.services.study.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"2\n\x0fGetStudyRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"p\n\x10GetStudyResponse\x12N\n\x05study\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"\xb3\x01\n\x10ListStudyRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12]\n\x06labels\x18\x03 \x03(\x0b\x32M.github.com.metaprov.modelaapi.services.study.v1.ListStudyRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x82\x01\n\x11ListStudyResponse\x12T\n\x07studies\x18\x01 \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.StudyList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"d\n\x12\x43reateStudyRequest\x12N\n\x05study\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\"\x15\n\x13\x43reateStudyResponse\"\x94\x01\n\x12UpdateStudyRequest\x12N\n\x05study\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x8d\x01\n\x19\x43reateStudyProfileRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12O\n\x06models\x18\x03 \x03(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\"J\n\x1a\x43reateStudyProfileResponse\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03uri\x18\x03 \x01(\t\"I\n\x16GetStudyProfileRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06models\x18\x03 \x01(\x05\"\xc1\x01\n\x17GetStudyProfileResponse\x12O\n\x07profile\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.StudyProfile\x12U\n\rmodelsProfile\x18\x02 \x03(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.ModelProfile\"4\n\x11\x41\x62ortStudyRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x14\n\x12\x41\x62ortStudyResponse\"4\n\x11PauseStudyRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x14\n\x12PauseStudyResponse\"5\n\x12ResumeStudyRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x15\n\x13ResumeStudyResponse\"8\n\x15\x43ompleteSearchRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x18\n\x16\x43ompleteSearchResponse\"5\n\x12\x44\x65leteStudyRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x15\n\x13\x44\x65leteStudyResponse\"\x15\n\x13UpdateStudyResponse2\xc3\x11\n\x0cStudyService\x12\xb5\x01\n\x0bListStudies\x12\x41.github.com.metaprov.modelaapi.services.study.v1.ListStudyRequest\x1a\x42.github.com.metaprov.modelaapi.services.study.v1.ListStudyResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/v1/studies/{namespace}\x12\xb0\x01\n\x0b\x43reateStudy\x12\x43.github.com.metaprov.modelaapi.services.study.v1.CreateStudyRequest\x1a\x44.github.com.metaprov.modelaapi.services.study.v1.CreateStudyResponse\"\x16\x82\xd3\xe4\x93\x02\x10\"\x0b/v1/studies:\x01*\x12\xb7\x01\n\x08GetStudy\x12@.github.com.metaprov.modelaapi.services.study.v1.GetStudyRequest\x1a\x41.github.com.metaprov.modelaapi.services.study.v1.GetStudyResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/v1/studies/{namespace}/{name}\x12\xe1\x01\n\x0bUpdateStudy\x12\x43.github.com.metaprov.modelaapi.services.study.v1.UpdateStudyRequest\x1a\x44.github.com.metaprov.modelaapi.services.study.v1.UpdateStudyResponse\"G\x82\xd3\xe4\x93\x02\x41\x1a</v1/studies/{study.metadata.namespace}/{study.metadata.name}:\x01*\x12\xc0\x01\n\x0b\x44\x65leteStudy\x12\x43.github.com.metaprov.modelaapi.services.study.v1.DeleteStudyRequest\x1a\x44.github.com.metaprov.modelaapi.services.study.v1.DeleteStudyResponse\"&\x82\xd3\xe4\x93\x02 *\x1e/v1/studies/{namespace}/{name}\x12\xdd\x01\n\x12\x43reateStudyProfile\x12J.github.com.metaprov.modelaapi.services.study.v1.CreateStudyProfileRequest\x1aK.github.com.metaprov.modelaapi.services.study.v1.CreateStudyProfileResponse\".\x82\xd3\xe4\x93\x02(\"&/v1/studies/{namespace}/{name}/profile\x12\xd4\x01\n\x0fGetStudyProfile\x12G.github.com.metaprov.modelaapi.services.study.v1.GetStudyProfileRequest\x1aH.github.com.metaprov.modelaapi.services.study.v1.GetStudyProfileResponse\".\x82\xd3\xe4\x93\x02(\x12&/v1/studies/{namespace}/{name}/profile\x12\xc3\x01\n\nAbortStudy\x12\x42.github.com.metaprov.modelaapi.services.study.v1.AbortStudyRequest\x1a\x43.github.com.metaprov.modelaapi.services.study.v1.AbortStudyResponse\",\x82\xd3\xe4\x93\x02&\"$/v1/studies/{namespace}/{name}/abort\x12\xc3\x01\n\nPauseStudy\x12\x42.github.com.metaprov.modelaapi.services.study.v1.PauseStudyRequest\x1a\x43.github.com.metaprov.modelaapi.services.study.v1.PauseStudyResponse\",\x82\xd3\xe4\x93\x02&\"$/v1/studies/{namespace}/{name}/pause\x12\xc7\x01\n\x0bResumeStudy\x12\x43.github.com.metaprov.modelaapi.services.study.v1.ResumeStudyRequest\x1a\x44.github.com.metaprov.modelaapi.services.study.v1.ResumeStudyResponse\"-\x82\xd3\xe4\x93\x02\'\"%/v1/studies/{namespace}/{name}/resume\x12\xd9\x01\n\x0e\x43ompleteSearch\x12\x46.github.com.metaprov.modelaapi.services.study.v1.CompleteSearchRequest\x1aG.github.com.metaprov.modelaapi.services.study.v1.CompleteSearchResponse\"6\x82\xd3\xe4\x93\x02\x30\"./v1/studies/{namespace}/{name}/complete-searchB1Z/github.com/metaprov/modelaapi/services/study/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.study.v1.study_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z/github.com/metaprov/modelaapi/services/study/v1'
  _LISTSTUDYREQUEST_LABELSENTRY._options = None
  _LISTSTUDYREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _STUDYSERVICE.methods_by_name['ListStudies']._options = None
  _STUDYSERVICE.methods_by_name['ListStudies']._serialized_options = b'\202\323\344\223\002\031\022\027/v1/studies/{namespace}'
  _STUDYSERVICE.methods_by_name['CreateStudy']._options = None
  _STUDYSERVICE.methods_by_name['CreateStudy']._serialized_options = b'\202\323\344\223\002\020\"\013/v1/studies:\001*'
  _STUDYSERVICE.methods_by_name['GetStudy']._options = None
  _STUDYSERVICE.methods_by_name['GetStudy']._serialized_options = b'\202\323\344\223\002 \022\036/v1/studies/{namespace}/{name}'
  _STUDYSERVICE.methods_by_name['UpdateStudy']._options = None
  _STUDYSERVICE.methods_by_name['UpdateStudy']._serialized_options = b'\202\323\344\223\002A\032</v1/studies/{study.metadata.namespace}/{study.metadata.name}:\001*'
  _STUDYSERVICE.methods_by_name['DeleteStudy']._options = None
  _STUDYSERVICE.methods_by_name['DeleteStudy']._serialized_options = b'\202\323\344\223\002 *\036/v1/studies/{namespace}/{name}'
  _STUDYSERVICE.methods_by_name['CreateStudyProfile']._options = None
  _STUDYSERVICE.methods_by_name['CreateStudyProfile']._serialized_options = b'\202\323\344\223\002(\"&/v1/studies/{namespace}/{name}/profile'
  _STUDYSERVICE.methods_by_name['GetStudyProfile']._options = None
  _STUDYSERVICE.methods_by_name['GetStudyProfile']._serialized_options = b'\202\323\344\223\002(\022&/v1/studies/{namespace}/{name}/profile'
  _STUDYSERVICE.methods_by_name['AbortStudy']._options = None
  _STUDYSERVICE.methods_by_name['AbortStudy']._serialized_options = b'\202\323\344\223\002&\"$/v1/studies/{namespace}/{name}/abort'
  _STUDYSERVICE.methods_by_name['PauseStudy']._options = None
  _STUDYSERVICE.methods_by_name['PauseStudy']._serialized_options = b'\202\323\344\223\002&\"$/v1/studies/{namespace}/{name}/pause'
  _STUDYSERVICE.methods_by_name['ResumeStudy']._options = None
  _STUDYSERVICE.methods_by_name['ResumeStudy']._serialized_options = b'\202\323\344\223\002\'\"%/v1/studies/{namespace}/{name}/resume'
  _STUDYSERVICE.methods_by_name['CompleteSearch']._options = None
  _STUDYSERVICE.methods_by_name['CompleteSearch']._serialized_options = b'\202\323\344\223\0020\"./v1/studies/{namespace}/{name}/complete-search'
  _GETSTUDYREQUEST._serialized_start=313
  _GETSTUDYREQUEST._serialized_end=363
  _GETSTUDYRESPONSE._serialized_start=365
  _GETSTUDYRESPONSE._serialized_end=477
  _LISTSTUDYREQUEST._serialized_start=480
  _LISTSTUDYREQUEST._serialized_end=659
  _LISTSTUDYREQUEST_LABELSENTRY._serialized_start=614
  _LISTSTUDYREQUEST_LABELSENTRY._serialized_end=659
  _LISTSTUDYRESPONSE._serialized_start=662
  _LISTSTUDYRESPONSE._serialized_end=792
  _CREATESTUDYREQUEST._serialized_start=794
  _CREATESTUDYREQUEST._serialized_end=894
  _CREATESTUDYRESPONSE._serialized_start=896
  _CREATESTUDYRESPONSE._serialized_end=917
  _UPDATESTUDYREQUEST._serialized_start=920
  _UPDATESTUDYREQUEST._serialized_end=1068
  _CREATESTUDYPROFILEREQUEST._serialized_start=1071
  _CREATESTUDYPROFILEREQUEST._serialized_end=1212
  _CREATESTUDYPROFILERESPONSE._serialized_start=1214
  _CREATESTUDYPROFILERESPONSE._serialized_end=1288
  _GETSTUDYPROFILEREQUEST._serialized_start=1290
  _GETSTUDYPROFILEREQUEST._serialized_end=1363
  _GETSTUDYPROFILERESPONSE._serialized_start=1366
  _GETSTUDYPROFILERESPONSE._serialized_end=1559
  _ABORTSTUDYREQUEST._serialized_start=1561
  _ABORTSTUDYREQUEST._serialized_end=1613
  _ABORTSTUDYRESPONSE._serialized_start=1615
  _ABORTSTUDYRESPONSE._serialized_end=1635
  _PAUSESTUDYREQUEST._serialized_start=1637
  _PAUSESTUDYREQUEST._serialized_end=1689
  _PAUSESTUDYRESPONSE._serialized_start=1691
  _PAUSESTUDYRESPONSE._serialized_end=1711
  _RESUMESTUDYREQUEST._serialized_start=1713
  _RESUMESTUDYREQUEST._serialized_end=1766
  _RESUMESTUDYRESPONSE._serialized_start=1768
  _RESUMESTUDYRESPONSE._serialized_end=1789
  _COMPLETESEARCHREQUEST._serialized_start=1791
  _COMPLETESEARCHREQUEST._serialized_end=1847
  _COMPLETESEARCHRESPONSE._serialized_start=1849
  _COMPLETESEARCHRESPONSE._serialized_end=1873
  _DELETESTUDYREQUEST._serialized_start=1875
  _DELETESTUDYREQUEST._serialized_end=1928
  _DELETESTUDYRESPONSE._serialized_start=1930
  _DELETESTUDYRESPONSE._serialized_end=1951
  _UPDATESTUDYRESPONSE._serialized_start=1953
  _UPDATESTUDYRESPONSE._serialized_end=1974
  _STUDYSERVICE._serialized_start=1977
  _STUDYSERVICE._serialized_end=4220
# @@protoc_insertion_point(module_scope)
